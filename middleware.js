import { loginPageHtml } from './middleware-login-page.js';

// Study Lab edge gate. Runs only on /study-lab paths; everything else on the
// site (including /api/*) is untouched by the matcher.
export const config = {
  matcher: ['/study-lab', '/study-lab/:path*'],
};

const CSP =
  "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data:; font-src 'self'; " +
  "connect-src 'self' https://mlhjmkgxapmsbnvrsdfd.supabase.co; base-uri 'self'; frame-ancestors 'none'";

const encoder = new TextEncoder();

async function hmacSha256Hex(secret, data) {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Constant-time string comparison (both inputs are fixed-length HMAC hex).
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function readSessionCookie(request) {
  const header = request.headers.get('cookie') || '';
  for (const part of header.split(';')) {
    const [name, ...rest] = part.trim().split('=');
    if (name === 'sl_session') return rest.join('=');
  }
  return null;
}

async function isValidSession(request, secret) {
  const value = readSessionCookie(request);
  if (!value) return false;
  const segments = value.split('.');
  if (segments.length !== 3 || segments[0] !== 'v1') return false;
  const expiry = Number(segments[1]);
  if (!Number.isFinite(expiry) || expiry <= Math.floor(Date.now() / 1000)) return false;
  const expected = await hmacSha256Hex(secret, `v1.${segments[1]}`);
  return timingSafeEqual(expected, segments[2]);
}

export default async function middleware(request) {
  const secret = process.env.STUDY_LAB_SECRET;
  if (secret && (await isValidSession(request, secret))) {
    return; // valid session — continue to the static asset
  }

  // TEMP DIAGNOSTIC (remove after debugging): fingerprint of the runtime secret
  // and whether a session cookie arrived. Leaks nothing usable.
  const fp = await hmacSha256Hex('fp:', secret || 'MISSING');
  const diag = { 'x-gate-fp': fp.slice(0, 12), 'x-gate-cookie': readSessionCookie(request) ? '1' : '0' };

  const accept = request.headers.get('accept') || '';
  if (accept.includes('text/html')) {
    // Serve the login page at the REQUESTED URL (no redirect) so the Supabase
    // #access_token fragment survives for the page JS to read.
    return new Response(loginPageHtml(), {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'content-security-policy': CSP,
        'cache-control': 'no-store',
        ...diag,
      },
    });
  }

  return new Response(JSON.stringify({ error: 'unauthorized' }), {
    status: 401,
    headers: { 'content-type': 'application/json', ...diag },
  });
}
