#!/usr/bin/env node
/**
 * Regenerates public/sitemap.xml from live Supabase content.
 * Runs automatically before every build (npm run build), and can be run
 * standalone with: npm run sitemap
 *
 * Reads VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY from the environment,
 * falling back to the local .env file.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE_URL = 'https://ashfaaqkazi.ca';

function loadEnv() {
  let url = process.env.VITE_SUPABASE_URL;
  let key = process.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) {
    try {
      const env = readFileSync(join(root, '.env'), 'utf8');
      for (const line of env.split('\n')) {
        const [k, ...rest] = line.split('=');
        const v = rest.join('=').trim();
        if (k.trim() === 'VITE_SUPABASE_URL' && !url) url = v;
        if (k.trim() === 'VITE_SUPABASE_ANON_KEY' && !key) key = v;
      }
    } catch { /* no .env — rely on process env */ }
  }
  return { url, key };
}

async function fetchSlugs(table, select, url, key) {
  const res = await fetch(`${url}/rest/v1/${table}?select=${select}&status=eq.published`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!res.ok) throw new Error(`${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

const today = new Date().toISOString().slice(0, 10);

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

const { url, key } = loadEnv();
if (!url || !key) {
  console.warn('[sitemap] Supabase env vars missing — keeping existing sitemap.xml');
  process.exit(0);
}

const [posts, projects] = await Promise.all([
  fetchSlugs('posts', 'slug,published_at', url, key),
  fetchSlugs('projects', 'slug,updated_at', url, key),
]);

const entries = [
  urlEntry(`${BASE_URL}/`, today, 'monthly', '1.0'),
  urlEntry(`${BASE_URL}/blog`, today, 'weekly', '0.8'),
  ...posts.map((p) =>
    urlEntry(`${BASE_URL}/blog/${p.slug}`, (p.published_at || today).slice(0, 10), 'monthly', '0.6')
  ),
  ...projects.map((p) =>
    urlEntry(`${BASE_URL}/projects/${p.slug}`, (p.updated_at || today).slice(0, 10), 'monthly', '0.6')
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml);
console.log(`[sitemap] wrote ${entries.length} URLs (posts: ${posts.length}, projects: ${projects.length})`);
