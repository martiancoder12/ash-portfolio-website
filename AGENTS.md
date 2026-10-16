# AGENTS.md — Working Context for AI Agents

Read this first. It captures the non-obvious workflows of this repo so you don't have to
re-derive them from the source each session. For general project info (stack, deploy,
structure), see [README.md](README.md).

## Blog publishing workflow

Blog posts come from **two sources**, merged at runtime and at build time:

1. **Supabase `posts` table** — written via the admin panel (`/admin`, see `src/admin/`).
   Runtime posts are fetched client-side; at build time `scripts/prerender-blog.ts`
   fetches published posts from Supabase using `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY` (from `.env.local`; on Vercel, from project env vars).
2. **Builtin markdown posts** — files in `content/blog/*.md` with YAML frontmatter.
   These ship inside the JS bundle and work even if Supabase is unreachable.

Merge rule (both at runtime and in the prerender): **a Supabase post wins over a builtin
post with the same slug.**

### Publishing a builtin (markdown) post — touch all 3 places

A builtin post must be registered in **three** places. Missing one causes silent
inconsistencies (e.g., post visible in the app but no static SEO page):

| File | What to add |
| --- | --- |
| `content/blog/<slug>.md` | The post itself, with frontmatter: `title`, `slug`, `excerpt`, `meta_title`, `meta_description`, `tags`, `status: published`, `published_at` (ISO 8601 with offset, e.g. `"2026-10-16T09:00:00-04:00"`). Body starts after the closing `---`; do not repeat the H1 title — the page renders it. |
| `src/content/builtinPosts.ts` | A `?raw` import of the markdown, frontmatter stripped via the existing regex, and a `Post` object in the `builtinPosts` array (mirrors the frontmatter fields). This is what the live app renders. |
| `scripts/prerender-blog.ts` → `readBuiltinPosts()` | The same markdown read + the same post object. **This function hardcodes builtin posts** — it does not scan the directory. Forgetting this means no static `dist/blog/<slug>/index.html` (hurts SEO/social previews). |

Keep the post metadata identical across the markdown frontmatter and the two TypeScript
registrations. The sitemap (`scripts/generate-sitemap.mjs`, run automatically as
`prebuild`) scans `content/blog/` itself, so no manual step is needed there.

### Build pipeline (what `npm run build` actually does)

1. `prebuild`: `node scripts/generate-sitemap.mjs` — regenerates `public/sitemap.xml`
   from routes + `content/blog/*.md`.
2. `tsc -b` — type-check. **A post with a bad field type fails the build here.**
3. `vite build` — bundles the app (builtin posts are inlined via `?raw` imports).
4. `closeBundle`: `prerenderBlogPlugin` (wired in `vite.config.ts`) fetches Supabase
   posts, merges with hardcoded builtins, and writes one static HTML page per post to
   `dist/blog/<slug>/index.html`, with correct `<title>`, meta, Open Graph, and
   JSON-LD. If Supabase env vars are missing it warns and skips — builtin posts are
   then **not** prerendered either (the whole step is skipped), though they still work
   as client-rendered routes.

Verify a successful publish locally with:

```bash
npm run build            # expect: "[prerender] wrote N static article page(s)"
ls dist/blog/<slug>/     # static page exists for your post
```

### Deploy

Push to `main` on GitHub (`martiancoder12/ash-portfolio-website`) → Vercel auto-deploys
to production (https://ashfaaqkazi.ca). Typical propagation: 1–3 minutes after the
GitHub deployment status shows `success`. Verify with:

```bash
curl -s https://ashfaaqkazi.ca/blog/<slug> | grep -o "<title>[^<]*</title>"
```

`vercel.json` rewrites unknown paths to the SPA, but static files in `dist/blog/` and
`dist/study-lab/` are served directly, ahead of the fallback — so prerendered posts are
real HTML on first byte.

Manual deploy: `vercel` (preview) / `vercel --prod`. Note `vercel --prod` ships the
working directory as-is, including uncommitted changes — commit and push first.

## Other gotchas

- **Admin panel posts are not in git.** The Supabase `posts` table is its own source of
  truth; builtin markdown is the git-backed fallback. There is currently one
  database-only post (`ten-years-of-evidence`).
- **Study Lab** (`public/study-lab/`) is a checked-in static build from a separate
  project (`ash-study-lab`). Update it only via
  `node scripts/sync-study-lab.mjs /absolute/path/to/ash-study-lab/dist`, then build and
  deploy. Never edit `public/study-lab/` directly.
- **`.env.local`** holds `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` and is
  gitignored. Prerendering needs it present for local builds.
- Dev server runs on **port 3000** (`npm run dev`).
- Chunk-size warning (>500 kB main bundle) at build time is known and benign.

## History

- 2026-10-16 — Added `democracy-a-new-coinage` builtin post; discovered and documented
  that `scripts/prerender-blog.ts` hardcodes builtin posts (it previously prerendered
  only the two original ones).
