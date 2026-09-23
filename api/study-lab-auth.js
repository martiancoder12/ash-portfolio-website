import crypto from 'node:crypto';

const SESSION_TTL_SECONDS = 43200; // 12 hours
const COOKIE_NAME = 'sl_session';

function mintSessionCookie(secret) {
  const expiry = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `v1.${expiry}`;
  const hmac = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return `${COOKIE_NAME}=${payload}.${hmac}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${SESSION_TTL_SECONDS}`;
}

function expiredSessionCookie() {
  return `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;
}

export default async function handler(req, res) {
  const { SUPABASE_URL, SUPABASE_ANON_KEY, STUDY_LAB_SECRET, ALLOWED_EMAIL } = process.env;

  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', expiredSessionCookie());
    return res.status(200).json({ ok: true });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, DELETE');
    return res.status(405).json({ error: 'method not allowed' });
  }

  const accessToken = req.body?.access_token;
  if (typeof accessToken !== 'string' || !accessToken) {
    return res.status(401).json({ error: 'missing access token' });
  }

  let userRes;
  try {
    userRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch {
    return res.status(502).json({ error: 'auth provider unreachable' });
  }

  if (userRes.status !== 200) {
    return res.status(401).json({ error: 'invalid token' });
  }

  const user = await userRes.json();
  const email = typeof user?.email === 'string' ? user.email.toLowerCase() : '';
  if (!email || email !== (ALLOWED_EMAIL || '').toLowerCase()) {
    return res.status(403).json({ error: 'not authorized' });
  }

  res.setHeader('Set-Cookie', mintSessionCookie(STUDY_LAB_SECRET));
  return res.status(200).json({ ok: true });
}
