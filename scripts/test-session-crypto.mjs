// Round-trip test: mint sl_session with node:crypto (as api/study-lab-auth.js does),
// verify with Web Crypto crypto.subtle (as middleware.js does).
import crypto from 'node:crypto';
import assert from 'node:assert/strict';

const SECRET = 'test-dummy-secret-not-the-real-one';
const encoder = new TextEncoder();

// --- mint (mirrors api/study-lab-auth.js) ---
function mint(secret, expiry) {
  const payload = `v1.${expiry}`;
  const hmac = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return `${payload}.${hmac}`;
}

// --- verify (mirrors middleware.js) ---
async function hmacSha256Hex(secret, data) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('');
}
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
async function verify(value, secret, now = Math.floor(Date.now() / 1000)) {
  if (!value) return false;
  const seg = value.split('.');
  if (seg.length !== 3 || seg[0] !== 'v1') return false;
  const expiry = Number(seg[1]);
  if (!Number.isFinite(expiry) || expiry <= now) return false;
  const expected = await hmacSha256Hex(secret, `v1.${seg[1]}`);
  return timingSafeEqual(expected, seg[2]);
}

const now = Math.floor(Date.now() / 1000);
const valid = mint(SECRET, now + 43200);
assert.equal(await verify(valid, SECRET), true, 'valid cookie accepted');
assert.equal(await verify(valid.slice(0, -1) + (valid.endsWith('a') ? 'b' : 'a'), SECRET), false, 'tampered hmac rejected');
assert.equal(await verify(mint(SECRET, now - 10), SECRET), false, 'expired cookie rejected');
assert.equal(await verify(mint('wrong-secret', now + 43200), SECRET), false, 'wrong secret rejected');
assert.equal(await verify('garbage', SECRET), false, 'malformed rejected');
assert.equal(await verify(null, SECRET), false, 'missing rejected');
assert.equal(await verify(`v2.${now + 100}.${'0'.repeat(64)}`, SECRET), false, 'wrong version rejected');
console.log('crypto round-trip: all 7 assertions passed');
