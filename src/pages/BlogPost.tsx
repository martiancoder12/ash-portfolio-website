import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { usePostBySlug } from '@/hooks/usePosts'
import DescentNav, { useDescentBody, formatPostDate } from '@/components/DescentNav'

const serif = "'Newsreader',Georgia,serif"

/** Minimal markdown-lite renderer: paragraphs, "## " headings, "- " lists. */
function PostBody({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/).map((b) => b.trim()).filter(Boolean)
  return (
    <div>
      {blocks.map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} style={{ fontFamily: serif, fontWeight: 500, margin: 'clamp(30px,4vw,44px) 0 0', fontSize: 'clamp(24px,2.8vw,30px)', letterSpacing: '-0.02em', lineHeight: 1.15, color: '#0D0D0C' }}>
              {block.slice(3)}
            </h2>
          )
        }
        const lines = block.split('\n').map((l) => l.trim())
        if (lines.every((l) => l.startsWith('- '))) {
          return (
            <ul key={i} style={{ margin: '20px 0 0', paddingLeft: 22, fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.75, color: '#4A4A46' }}>
              {lines.map((l, j) => <li key={j} style={{ marginTop: j ? 8 : 0 }}>{l.slice(2)}</li>)}
            </ul>
          )
        }
        return (
          <p key={i} style={{ maxWidth: '68ch', margin: '20px 0 0', fontFamily: 'var(--font-sans)', fontSize: 16.5, lineHeight: 1.78, color: '#4A4A46' }}>
            {block}
          </p>
        )
      })}
    </div>
  )
}

export default function BlogPost() {
  useDescentBody()
  const { slug } = useParams<{ slug: string }>()
  const { data: post, isLoading, isError } = usePostBySlug(slug)

  useEffect(() => {
    if (post) document.title = post.meta_title || `${post.title} — Ashfaaq Kazi`
    return () => { document.title = 'Ashfaaq Kazi — The Descent' }
  }, [post])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <DescentNav active="blog" />

      <main style={{ padding: 'clamp(120px,15vw,170px) 0 clamp(80px,10vw,124px)' }}>
        <div style={{ width: 'min(860px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
          <Link to="/blog" className="d-hover-ink" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A8A83' }}>← All posts</Link>

          {isLoading && (
            <p style={{ marginTop: 40, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8A83' }}>Loading…</p>
          )}

          {(isError || (!isLoading && !post)) && (
            <div style={{ marginTop: 40 }}>
              <h1 style={{ fontFamily: serif, fontWeight: 500, margin: 0, fontSize: 'clamp(32px,4vw,44px)', letterSpacing: '-0.02em', color: '#0D0D0C' }}>Post not found.</h1>
              <p style={{ marginTop: 16, fontFamily: 'var(--font-sans)', fontSize: 15, color: '#4A4A46' }}>It may have been unpublished, or the link is wrong.</p>
            </div>
          )}

          {post && (
            <article style={{ marginTop: 34 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>
                {formatPostDate(post.published_at)}
              </div>
              <h1 style={{ fontFamily: serif, fontOpticalSizing: 'auto', fontWeight: 500, margin: '16px 0 0', fontSize: 'clamp(34px,4.6vw,54px)', letterSpacing: '-0.025em', lineHeight: 1.06, color: '#0D0D0C' }}>{post.title}</h1>
              {post.excerpt && (
                <p style={{ maxWidth: '62ch', margin: '18px 0 0', fontFamily: serif, fontSize: 'clamp(18px,1.8vw,21px)', lineHeight: 1.5, color: '#4A4A46', fontStyle: 'italic' }}>{post.excerpt}</p>
              )}

              <div style={{ marginTop: 'clamp(28px,4vw,40px)', paddingTop: 'clamp(24px,3vw,32px)', borderTop: '1px solid rgba(13,13,12,0.16)' }}>
                {post.content ? <PostBody content={post.content} /> : (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: '#4A4A46' }}>This post has no body content yet.</p>
                )}
              </div>

              {(post.tags || []).length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'clamp(34px,4vw,48px)' }}>
                  {(post.tags || []).map((t) => (
                    <span key={t} style={{ padding: '5px 9px', border: '1px solid rgba(13,13,12,0.1)', borderRadius: 999, fontFamily: 'var(--font-sans)', fontSize: 11, color: '#4A4A46' }}>{t}</span>
                  ))}
                </div>
              )}

              <div style={{ marginTop: 'clamp(34px,4vw,48px)', padding: 'clamp(20px,3vw,28px)', border: '1px solid rgba(13,13,12,0.12)', borderRadius: 16, background: '#FAFAF9' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>Discuss this post</div>
                <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.66, color: '#4A4A46' }}>
                  Working on usable security, privacy engineering, or AI-agent systems? I'd genuinely like to hear from you.
                </p>
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
