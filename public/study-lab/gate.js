/* Access gate for Ash's Study Lab — admin-only entry.
   Verifies username + passcode against a salted SHA-256 digest (the passcode
   itself is never stored in this file). Static hosting note: this is a
   client-side wall; it deters casual access but cannot stop someone who
   inspects the source. For hard enforcement use Vercel Password Protection
   or server/edge session checks (e.g. Supabase Auth). */
(() => {
'use strict';

const SALT = 'ash-study-lab::v1::7f3a9c';
const EXPECTED = 'f6e7fc4f5ed2e55ceecb4da7478f30f9b07dd6be5e7a20c9c62507264fe176e2';
const SESSION_KEY = 'ash-study-lab-gate-v1';
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // stay signed in for 12 hours
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 60 * 1000;

let attempts = 0;
let lockedUntil = 0;

const hideStyle = () => document.getElementById('gate-hide');

function reveal() {
  const style = hideStyle();
  if (style) style.remove();
  const overlay = document.getElementById('gate-overlay');
  if (overlay) overlay.remove();
  document.documentElement.classList.remove('gate-locked');
}

function sessionValid() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const stamp = Number(raw);
    return Number.isFinite(stamp) && Date.now() - stamp < SESSION_TTL_MS;
  } catch {
    return false;
  }
}

function markSession() {
  try { sessionStorage.setItem(SESSION_KEY, String(Date.now())); } catch {}
}

async function digest(username, passcode) {
  const data = new TextEncoder().encode(`${SALT}\n${username}\n${passcode}`);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function equalHex(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function buildOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'gate-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'gate-title');
  overlay.innerHTML = `
    <form class="gate-card" id="gate-form" autocomplete="off" novalidate>
      <div class="gate-mark">a<span>↗</span></div>
      <h1 id="gate-title">Ash’s Study Lab</h1>
      <p class="gate-sub">Private workspace — admin access only.</p>
      <label class="gate-field">
        <span>Username</span>
        <input id="gate-user" name="username" type="email" inputmode="email"
               autocomplete="username" required placeholder="you@example.com">
      </label>
      <label class="gate-field">
        <span>Passcode</span>
        <input id="gate-pass" name="passcode" type="password"
               autocomplete="current-password" required placeholder="••••••••">
      </label>
      <p class="gate-error" id="gate-error" role="alert" aria-live="polite"></p>
      <button class="gate-submit" id="gate-submit" type="submit">Unlock study lab</button>
    </form>`;
  document.body.appendChild(overlay);

  const form = overlay.querySelector('#gate-form');
  const user = overlay.querySelector('#gate-user');
  const pass = overlay.querySelector('#gate-pass');
  const error = overlay.querySelector('#gate-error');
  const submit = overlay.querySelector('#gate-submit');

  user.focus();

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const now = Date.now();
    if (now < lockedUntil) {
      const secs = Math.ceil((lockedUntil - now) / 1000);
      error.textContent = `Too many attempts. Try again in ${secs}s.`;
      return;
    }
    submit.disabled = true;
    error.textContent = '';
    try {
      const hash = await digest(user.value.trim().toLowerCase(), pass.value);
      if (equalHex(hash, EXPECTED)) {
        markSession();
        reveal();
        return;
      }
      attempts += 1;
      pass.value = '';
      if (attempts >= MAX_ATTEMPTS) {
        attempts = 0;
        lockedUntil = Date.now() + LOCKOUT_MS;
        error.textContent = 'Too many attempts. Locked for 60 seconds.';
      } else {
        error.textContent = `Incorrect username or passcode (${MAX_ATTEMPTS - attempts} tries left).`;
      }
      pass.focus();
    } catch {
      error.textContent = 'Secure crypto is unavailable in this browser.';
    } finally {
      submit.disabled = false;
    }
  });
}

document.documentElement.classList.add('gate-locked');

// Sign out: clear the session and return to the lock screen. Delegated so the
// topbar button works no matter when the app renders it.
function signOut() {
  try { sessionStorage.removeItem(SESSION_KEY); } catch {}
  location.reload();
}
document.addEventListener('click', event => {
  const btn = event.target.closest('[data-gate-signout]');
  if (btn) signOut();
});

if (sessionValid()) {
  reveal();
} else if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildOverlay, { once: true });
} else {
  buildOverlay();
}
})();
