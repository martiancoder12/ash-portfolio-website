import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import type { Plugin } from 'vite'

const siteUrl = 'https://ashfaaqkazi.ca'
const authorName = 'Ashfaaq Kazi'

type PublishedPost = {
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  tags: string[] | null
  published_at: string | null
  created_at: string
  updated_at: string
  meta_title: string | null
  meta_description: string | null
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function safeUrl(value: string) {
  const url = value.trim()
  return /^(https?:\/\/|\/)/i.test(url) ? url : '#'
}

function renderInline(value: string) {
  const tokens = value.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean)
  return tokens.map((token) => {
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const href = escapeHtml(safeUrl(link[2]))
      return '<a href="' + href + '">' + escapeHtml(link[1]) + '</a>'
    }
    if (token.startsWith('**') && token.endsWith('**')) return '<strong>' + escapeHtml(token.slice(2, -2)) + '</strong>'
    return escapeHtml(token)
  }).join('')
}

function markdownToHtml(markdown: string) {
  const blocks = markdown.split(/\n\n+/).map((block) => block.trim()).filter(Boolean)
  return blocks.map((block) => {
    const image = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
    if (image) {
      return '<figure><img src="' + escapeHtml(safeUrl(image[2])) + '" alt="' + escapeHtml(image[1]) + '" width="1600" height="900"><figcaption>' + escapeHtml(image[1]) + '</figcaption></figure>'
    }
    if (block.startsWith('## ')) return '<h2>' + renderInline(block.slice(3)) + '</h2>'
    if (block.startsWith('### ')) return '<h3>' + renderInline(block.slice(4)) + '</h3>'

    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
    if (lines.every((line) => line.startsWith('- '))) {
      return '<ul>' + lines.map((line) => '<li>' + renderInline(line.slice(2)) + '</li>').join('') + '</ul>'
    }
    if (lines.every((line) => /^\d+\.\s/.test(line))) {
      return '<ol>' + lines.map((line) => '<li>' + renderInline(line.replace(/^\d+\.\s/, '')) + '</li>').join('') + '</ol>'
    }
    return '<p>' + renderInline(lines.join(' ')) + '</p>'
  }).join('\n')
}

function articleHtml(post: PublishedPost) {
  const readingMinutes = Math.max(1, Math.ceil((post.content || '').split(/\s+/).filter(Boolean).length / 220))
  const dateLabel = new Intl.DateTimeFormat('en-CA', { dateStyle: 'long' }).format(new Date(post.published_at || post.created_at))
  return [
    '<article class="prerendered-blog-post">',
    '<p class="post-kicker">' + escapeHtml(dateLabel) + ' · ' + readingMinutes + ' min read</p>',
    '<h1>' + escapeHtml(post.title) + '</h1>',
    post.excerpt ? '<p class="post-excerpt">' + escapeHtml(post.excerpt) + '</p>' : '',
    '<p class="post-byline">By <a href="' + siteUrl + '">' + authorName + '</a></p>',
    '<div class="post-body">' + markdownToHtml(post.content || '') + '</div>',
    '</article>',
  ].join('\n')
}

function pageHtml(template: string, post: PublishedPost) {
  const canonical = siteUrl + '/blog/' + post.slug
  const title = post.meta_title || post.title + ' — ' + authorName
  const description = post.meta_description || post.excerpt || ''
  const firstImage = post.content?.match(/!\[[^\]]*\]\(([^)]+)\)/)?.[1]
  const image = firstImage ? new URL(firstImage, siteUrl).toString() : siteUrl + '/og-image.png'
  const published = post.published_at || post.created_at
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': canonical + '#article',
    headline: post.title,
    description,
    datePublished: published,
    dateModified: post.updated_at,
    image: [image],
    keywords: post.tags || [],
    author: { '@type': 'Person', name: authorName, url: siteUrl },
    publisher: { '@type': 'Person', name: authorName, url: siteUrl },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }).replaceAll('<', '\\u003c')

  const head = [
    '<meta name="robots" content="index,follow,max-image-preview:large">',
    '<link rel="canonical" href="' + escapeHtml(canonical) + '">',
    '<meta property="og:type" content="article">',
    '<meta property="og:title" content="' + escapeHtml(title) + '">',
    '<meta property="og:description" content="' + escapeHtml(description) + '">',
    '<meta property="og:url" content="' + escapeHtml(canonical) + '">',
    '<meta property="og:image" content="' + escapeHtml(image) + '">',
    '<meta property="article:published_time" content="' + escapeHtml(published) + '">',
    '<meta property="article:modified_time" content="' + escapeHtml(post.updated_at) + '">',
    '<meta property="article:author" content="' + authorName + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + escapeHtml(title) + '">',
    '<meta name="twitter:description" content="' + escapeHtml(description) + '">',
    '<meta name="twitter:image" content="' + escapeHtml(image) + '">',
    '<script type="application/ld+json">' + schema + '</script>',
    '<style>.prerendered-blog-post{width:min(860px,calc(100% - 40px));margin:96px auto;font:16px/1.75 system-ui,sans-serif;color:#4a4a46}.prerendered-blog-post h1,.prerendered-blog-post h2,.prerendered-blog-post h3{font-family:Georgia,serif;color:#0d0d0c;line-height:1.15}.prerendered-blog-post h1{font-size:clamp(34px,4.6vw,54px)}.prerendered-blog-post h2{margin-top:48px;font-size:30px}.prerendered-blog-post h3{margin-top:30px;font-size:23px}.prerendered-blog-post a{color:#1746a2}.prerendered-blog-post figure{margin:36px 0}.prerendered-blog-post img{display:block;width:100%;height:auto;border-radius:16px}.prerendered-blog-post figcaption{font-size:12px;color:#74746e}.post-kicker,.post-byline{font-size:13px}.post-excerpt{font:italic 21px/1.5 Georgia,serif}</style>',
  ].join('\n')

  return template
    .replace(/<title>[\s\S]*?<\/title>/i, '<title>' + escapeHtml(title) + '</title>')
    .replace(/<meta\s+name="description"[\s\S]*?\/>/i, '<meta name="description" content="' + escapeHtml(description) + '" />')
    .replace('</head>', head + '\n</head>')
    .replace('<div id="root"></div>', '<div id="root">' + articleHtml(post) + '</div>')
}

async function fetchPosts(url: string, key: string): Promise<PublishedPost[]> {
  const fields = 'title,slug,excerpt,content,tags,published_at,created_at,updated_at,meta_title,meta_description'
  const response = await fetch(url + '/rest/v1/posts?select=' + fields + '&status=eq.published', {
    headers: { apikey: key, Authorization: 'Bearer ' + key },
  })
  if (!response.ok) throw new Error('posts: ' + response.status + ' ' + await response.text())
  return response.json() as Promise<PublishedPost[]>
}

export function prerenderBlogPlugin(url: string | undefined, key: string | undefined): Plugin {
  return {
    name: 'prerender-blog-posts',
    apply: 'build',
    async closeBundle() {
      if (!url || !key) {
        console.warn('[prerender] Supabase env vars missing — skipping article prerendering')
        return
      }

      const template = await readFile(path.resolve('dist/index.html'), 'utf8')
      const posts = await fetchPosts(url, key)
      for (const post of posts) {
        const destination = path.resolve('dist/blog', post.slug)
        await mkdir(destination, { recursive: true })
        await writeFile(path.join(destination, 'index.html'), pageHtml(template, post))
      }
      console.log('[prerender] wrote ' + posts.length + ' static article page(s)')
    },
  }
}
