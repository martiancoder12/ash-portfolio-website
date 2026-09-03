import { Fragment, useEffect, type ReactNode } from 'react'
import { Link, useParams } from 'react-router'
import { usePostBySlug } from '@/hooks/usePosts'
import DescentNav, { useDescentBody, formatPostDate } from '@/components/DescentNav'

const serif = "'Newsreader',Georgia,serif"
const siteUrl = 'https://ashfaaqkazi.ca'
const authorName = 'Ashfaaq Kazi'

function safeHref(value: string) {
  const href = value.trim()
  return /^(https?:\/\/|mailto:|\/)/i.test(href) ? href : '#'
}

function inlineMarkdown(text: string): ReactNode[] {
  const tokenPattern = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\x60[^\x60]+\x60)/g
  return text.split(tokenPattern).filter(Boolean).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const href = safeHref(link[2])
      const external = href.startsWith('http')
      return (
        <a key={index} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} style={{ color: 'var(--accent)', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}>
          {link[1]}
        </a>
      )
    }
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index} style={{ color: '#262623' }}>{part.slice(2, -2)}</strong>
    if (part.charCodeAt(0) === 96 && part.charCodeAt(part.length - 1) === 96) return <code key={index} style={{ padding: '2px 5px', borderRadius: 5, background: '#F0F0ED', fontFamily: 'var(--font-mono)', fontSize: '.9em' }}>{part.slice(1, -1)}</code>
    return <Fragment key={index}>{part}</Fragment>
  })
}

/** A deliberately small Markdown renderer for the formats supported by portfolio posts. */
function PostBody({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/).map((block) => block.trim()).filter(Boolean)
  let imageIndex = 0

  return (
    <div>
      {blocks.map((block, index) => {
        const image = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
        if (image) {
          const isHero = imageIndex++ === 0
          return (
            <figure key={index} style={{ margin: 'clamp(28px,4vw,44px) 0' }}>
              <img
                src={safeHref(image[2])}
                alt={image[1]}
                width={1600}
                height={900}
                loading={isHero ? 'eager' : 'lazy'}
                fetchPriority={isHero ? 'high' : 'auto'}
                decoding="async"
                style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 16, border: '1px solid rgba(13,13,12,0.1)', boxShadow: '0 18px 50px rgba(13,13,12,0.08)' }}
              />
              {image[1] && <figcaption style={{ marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 12.5, lineHeight: 1.55, color: '#74746E' }}>{image[1]}</figcaption>}
            </figure>
          )
        }

        if (block.startsWith('## ')) {
          return <h2 key={index} style={{ fontFamily: serif, fontWeight: 500, margin: 'clamp(34px,5vw,52px) 0 0', fontSize: 'clamp(25px,2.8vw,31px)', letterSpacing: '-0.02em', lineHeight: 1.15, color: '#0D0D0C' }}>{inlineMarkdown(block.slice(3))}</h2>
        }
        if (block.startsWith('### ')) {
          return <h3 key={index} style={{ fontFamily: serif, fontWeight: 600, margin: '30px 0 0', fontSize: 'clamp(20px,2vw,23px)', letterSpacing: '-0.01em', lineHeight: 1.25, color: '#1A1A18' }}>{inlineMarkdown(block.slice(4))}</h3>
        }

        const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
        if (lines.every((line) => line.startsWith('- '))) {
          return (
            <ul key={index} style={{ maxWidth: '68ch', margin: '20px 0 0', paddingLeft: 24, fontFamily: 'var(--font-sans)', fontSize: 16.5, lineHeight: 1.75, color: '#4A4A46' }}>
              {lines.map((line, itemIndex) => <li key={itemIndex} style={{ marginTop: itemIndex ? 8 : 0 }}>{inlineMarkdown(line.slice(2))}</li>)}
            </ul>
          )
        }
        if (lines.every((line) => /^\d+\.\s/.test(line))) {
          return (
            <ol key={index} style={{ maxWidth: '68ch', margin: '20px 0 0', paddingLeft: 24, fontFamily: 'var(--font-sans)', fontSize: 16.5, lineHeight: 1.75, color: '#4A4A46' }}>
              {lines.map((line, itemIndex) => <li key={itemIndex} style={{ marginTop: itemIndex ? 8 : 0 }}>{inlineMarkdown(line.replace(/^\d+\.\s/, ''))}</li>)}
            </ol>
          )
        }
        if (lines.every((line) => line.startsWith('> '))) {
          return <blockquote key={index} style={{ margin: '28px 0 0', padding: '18px 22px', borderLeft: '3px solid var(--accent)', background: '#FAFAF9', fontFamily: serif, fontSize: 20, lineHeight: 1.55, color: '#353531' }}>{inlineMarkdown(lines.map((line) => line.slice(2)).join(' '))}</blockquote>
        }

        return <p key={index} style={{ maxWidth: '68ch', margin: '20px 0 0', fontFamily: 'var(--font-sans)', fontSize: 16.5, lineHeight: 1.78, color: '#4A4A46' }}>{inlineMarkdown(lines.join(' '))}</p>
      })}
    </div>
  )
}

function upsertMeta(selector: string, attributes: Record<string, string>, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
    element.dataset.blogMeta = 'true'
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function useArticleMetadata(post: ReturnType<typeof usePostBySlug>['data']) {
  useEffect(() => {
    if (!post) return

    const title = post.meta_title || post.title + ' — ' + authorName
    const description = post.meta_description || post.excerpt || ''
    const canonicalUrl = siteUrl + '/blog/' + post.slug
    const firstImage = post.content?.match(/!\[[^\]]*\]\(([^)]+)\)/)?.[1]
    const imageUrl = firstImage ? new URL(firstImage, siteUrl).toString() : siteUrl + '/og-image.png'

    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description' }, description)
    upsertMeta('meta[name="robots"]', { name: 'robots' }, 'index,follow,max-image-preview:large')
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'article')
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title)
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description)
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl)
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, imageUrl)
    upsertMeta('meta[property="article:published_time"]', { property: 'article:published_time' }, post.published_at || post.created_at)
    upsertMeta('meta[property="article:modified_time"]', { property: 'article:modified_time' }, post.updated_at)
    upsertMeta('meta[property="article:author"]', { property: 'article:author' }, authorName)
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title)
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      canonical.dataset.blogMeta = 'true'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    const structuredData = document.createElement('script')
    structuredData.type = 'application/ld+json'
    structuredData.dataset.blogMeta = 'true'
    structuredData.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': canonicalUrl + '#article',
      headline: post.title,
      description,
      datePublished: post.published_at || post.created_at,
      dateModified: post.updated_at,
      image: [imageUrl],
      keywords: post.tags || [],
      author: { '@type': 'Person', name: authorName, url: siteUrl },
      publisher: { '@type': 'Person', name: authorName, url: siteUrl },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    })
    document.head.appendChild(structuredData)

    return () => {
      document.title = 'Ashfaaq Kazi — The Descent'
      document.head.querySelectorAll('[data-blog-meta="true"]').forEach((element) => element.remove())
    }
  }, [post])
}

export default function BlogPost() {
  useDescentBody()
  const { slug } = useParams<{ slug: string }>()
  const { data: post, isLoading, isError } = usePostBySlug(slug)
  useArticleMetadata(post)

  const readingMinutes = post?.content ? Math.max(1, Math.ceil(post.content.split(/\s+/).length / 220)) : 0

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <DescentNav active="blog" />

      <main style={{ padding: 'clamp(120px,15vw,170px) 0 clamp(80px,10vw,124px)' }}>
        <div style={{ width: 'min(860px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
          <Link to="/blog" className="d-hover-ink" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A8A83' }}>← All posts</Link>

          {isLoading && <p style={{ marginTop: 40, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8A83' }}>Loading…</p>}

          {(isError || (!isLoading && !post)) && (
            <div style={{ marginTop: 40 }}>
              <h1 style={{ fontFamily: serif, fontWeight: 500, margin: 0, fontSize: 'clamp(32px,4vw,44px)', letterSpacing: '-0.02em', color: '#0D0D0C' }}>Post not found.</h1>
              <p style={{ marginTop: 16, fontFamily: 'var(--font-sans)', fontSize: 15, color: '#4A4A46' }}>It may have been unpublished, or the link is wrong.</p>
            </div>
          )}

          {post && (
            <article style={{ marginTop: 34 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />
                {formatPostDate(post.published_at)} · {readingMinutes} min read
              </div>
              <h1 style={{ fontFamily: serif, fontOpticalSizing: 'auto', fontWeight: 500, margin: '16px 0 0', fontSize: 'clamp(34px,4.6vw,54px)', letterSpacing: '-0.025em', lineHeight: 1.06, color: '#0D0D0C' }}>{post.title}</h1>
              {post.excerpt && <p style={{ maxWidth: '62ch', margin: '18px 0 0', fontFamily: serif, fontSize: 'clamp(18px,1.8vw,21px)', lineHeight: 1.5, color: '#4A4A46', fontStyle: 'italic' }}>{post.excerpt}</p>}
              <p style={{ margin: '16px 0 0', fontFamily: 'var(--font-sans)', fontSize: 13.5, color: '#74746E' }}>By <a href={siteUrl} style={{ color: '#353531', textDecoration: 'underline', textUnderlineOffset: 3 }}>{authorName}</a></p>

              <div style={{ marginTop: 'clamp(28px,4vw,40px)', paddingTop: 'clamp(24px,3vw,32px)', borderTop: '1px solid rgba(13,13,12,0.16)' }}>
                {post.content ? <PostBody content={post.content} /> : <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: '#4A4A46' }}>This post has no body content yet.</p>}
              </div>

              {(post.tags || []).length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'clamp(34px,4vw,48px)' }}>
                  {(post.tags || []).map((tag) => <span key={tag} style={{ padding: '5px 9px', border: '1px solid rgba(13,13,12,0.1)', borderRadius: 999, fontFamily: 'var(--font-sans)', fontSize: 11, color: '#4A4A46' }}>{tag}</span>)}
                </div>
              )}

              <div style={{ marginTop: 'clamp(34px,4vw,48px)', padding: 'clamp(20px,3vw,28px)', border: '1px solid rgba(13,13,12,0.12)', borderRadius: 16, background: '#FAFAF9' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>Discuss this post</div>
                <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.66, color: '#4A4A46' }}>Working on usable security, privacy engineering, or AI-agent systems? I'd genuinely like to hear from you.</p>
                <a href="mailto:ashfaaq.kazi@outlook.com" className="d-hover-fade" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16, minHeight: 44, padding: '0 18px', borderRadius: 10, background: '#0D0D0C', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600 }}>ashfaaq.kazi@outlook.com →</a>
              </div>
            </article>
          )}
        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(13,13,12,0.08)', background: '#FAFAF9' }}>
        <div style={{ width: 'min(1160px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '22px 0', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#8A8A83' }}>
          <span>Montréal, Québec · Bilingual EN / FR</span>
          <span>© 2026 Ashfaaq Kazi</span>
        </div>
      </footer>
    </div>
  )
}
