// Study Lab sign-out: asks the server to expire the sl_session cookie, then reloads.
// On deployments without the auth API (e.g. the standalone Vercel project, which is
// gated by Vercel SSO at the edge) the DELETE 404s and .finally() still reloads.
document.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-gate-signout]');
  if (!btn) return;
  event.preventDefault();
  fetch('/api/study-lab-auth', { method: 'DELETE' })
    .catch(() => {})
    .finally(() => location.reload());
});
