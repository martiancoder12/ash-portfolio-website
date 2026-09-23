// Login page HTML for the Study Lab edge gate, returned by middleware.js at the
// requested URL (no redirect) so the Supabase #access_token fragment survives.
const FALLBACK_SUPABASE_URL = 'https://mlhjmkgxapmsbnvrsdfd.supabase.co';

export function loginPageHtml() {
  const supabaseUrl = process.env.SUPABASE_URL || FALLBACK_SUPABASE_URL;
  // SUPABASE_ANON_KEY is public-by-design client data; read from env at runtime.
  const anonKey = process.env.SUPABASE_ANON_KEY || '';
  const googleHref =
    `${supabaseUrl}/auth/v1/authorize?provider=google` +
    `&redirect_to=${encodeURIComponent('https://ashfaaqkazi.ca/study-lab/')}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>Ash's Study Lab — Private workspace</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: #142b2b; color: #c8e6d9;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding: 24px;
  }
  .card {
    width: 100%; max-width: 400px; padding: 40px 32px;
    background: rgba(200, 230, 217, 0.04);
    border: 1px solid rgba(200, 230, 217, 0.18); border-radius: 16px;
    text-align: center;
  }
  .mark { font-size: 28px; margin-bottom: 8px; }
  h1 { font-size: 20px; font-weight: 650; letter-spacing: 0.01em; margin-bottom: 6px; }
  .sub { font-size: 13px; opacity: 0.65; margin-bottom: 28px; }
  .btn-google {
    display: block; width: 100%; padding: 12px 16px; border-radius: 10px;
    background: #c8e6d9; color: #142b2b; font-size: 15px; font-weight: 600;
    text-decoration: none; transition: background 0.15s ease;
  }
  .btn-google:hover { background: #dbf3e8; }
  .divider {
    display: flex; align-items: center; gap: 12px; margin: 24px 0;
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; opacity: 0.5;
  }
  .divider::before, .divider::after {
    content: ""; flex: 1; height: 1px; background: rgba(200, 230, 217, 0.25);
  }
  form { display: flex; flex-direction: column; gap: 10px; }
  input[type="email"] {
    width: 100%; padding: 12px 14px; border-radius: 10px;
    border: 1px solid rgba(200, 230, 217, 0.25); background: rgba(0, 0, 0, 0.25);
    color: #c8e6d9; font-size: 14px; outline: none;
  }
  input[type="email"]:focus { border-color: #c8e6d9; }
  input[type="email"]::placeholder { color: rgba(200, 230, 217, 0.4); }
  button[type="submit"] {
    padding: 12px 16px; border-radius: 10px; border: 1px solid rgba(200, 230, 217, 0.35);
    background: transparent; color: #c8e6d9; font-size: 14px; font-weight: 600;
    cursor: pointer; transition: background 0.15s ease;
  }
  button[type="submit"]:hover { background: rgba(200, 230, 217, 0.08); }
  .msg { margin-top: 18px; font-size: 13px; min-height: 18px; }
  .msg.error { color: #f0a8a0; }
  .msg.ok { color: #9fe0c2; }
  .spinner { opacity: 0.7; }
</style>
</head>
<body>
<div class="card">
  <div class="mark">a↗</div>
  <h1>Ash's Study Lab</h1>
  <p class="sub">Private workspace</p>
  <a class="btn-google" href="${googleHref}">Sign in with Google</a>
  <div class="divider">or</div>
  <form id="magic-form">
    <input id="magic-email" type="email" placeholder="you@example.com" autocomplete="email" required>
    <button type="submit">Email me a sign-in link</button>
  </form>
  <p id="msg" class="msg" role="status" aria-live="polite"></p>
</div>
<script>
(function () {
  var SUPABASE_URL = ${JSON.stringify(supabaseUrl)};
  var ANON_KEY = ${JSON.stringify(anonKey)};
  var msg = document.getElementById('msg');
  function say(text, cls) { msg.textContent = text; msg.className = 'msg ' + (cls || ''); }

  // Handle the Supabase redirect: #access_token=...&refresh_token=...
  var hash = window.location.hash || '';
  if (hash.indexOf('access_token=') !== -1) {
    var params = new URLSearchParams(hash.slice(1));
    var token = params.get('access_token');
    if (token) {
      say('Signing you in…', 'spinner');
      fetch('/api/study-lab-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token: token })
      }).then(function (res) {
        if (res.ok) {
          window.location.replace('/study-lab/');
        } else if (res.status === 403) {
          say('This account is not authorized for the Study Lab.', 'error');
        } else {
          say('Sign-in failed. Please try again.', 'error');
        }
      }).catch(function () {
        say('Network error. Please try again.', 'error');
      });
    }
    // Strip the token fragment from the URL bar.
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  document.getElementById('magic-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('magic-email').value.trim();
    if (!email) return;
    say('Sending…', 'spinner');
    fetch(SUPABASE_URL + '/auth/v1/otp', {
      method: 'POST',
      headers: { 'apikey': ANON_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        options: { emailRedirectTo: 'https://ashfaaqkazi.ca/study-lab/' }
      })
    }).then(function (res) {
      if (res.ok) {
        say('Check your inbox for a sign-in link.', 'ok');
      } else {
        say('Could not send the link. Please try again.', 'error');
      }
    }).catch(function () {
      say('Network error. Please try again.', 'error');
    });
  });
})();
</script>
</body>
</html>`;
}
