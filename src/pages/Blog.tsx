import { Link } from 'react-router'
import { usePublishedPosts } from '@/hooks/usePosts'
import DescentNav, { useDescentBody, formatPostDate } from '@/components/DescentNav'

const serif = "'Newsreader',Georgia,serif"

export default function Blog() {
  useDescentBody()
  const { data: posts, isLoading, isError } = usePublishedPosts()

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <DescentNav active="blog" />

      <header style={{ position: 'relative', background: 'transparent', padding: 'clamp(110px,14vw,160px) 0 clamp(40px,5vw,64px)' }}>
        <div style={{ width: 'min(1160px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 18, alignItems: 'start' }}>
            <span style={{ paddingTop: 8, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>08</span>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>Writing
              </div>
              <h1 style={{ fontFamily: serif, fontOpticalSizing: 'auto', fontWeight: 500, margin: '13px 0 0', fontSize: 'clamp(40px,5.2vw,64px)', letterSpacing: '-0.025em', lineHeight: 1.0, color: '#0D0D0C' }}>The blog.</h1>
              <p style={{ maxWidth: '62ch', margin: '18px 0 0', fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.66, color: '#4A4A46' }}>
                Write-ups, notes, and post-mortems from the descent — usable security, compliance as code, and the security boundary of AI-agent systems.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main style={{ padding: '0 0 clamp(80px,10vw,124px)' }}>
        <div style={{ width: 'min(1160px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid rgba(13,13,12,0.16)' }}>
            {isLoading && (
              <p style={{ padding: '34px 0', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8A83' }}>Loading posts…</p>
            )}
            {isError && (
              <p style={{ padding: '34px 0', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#B45309' }}>Could not load posts right now.</p>
            )}
            {!isLoading && !isError && (posts || []).length === 0 && (
              <p style={{ padding: '34px 0', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8A83' }}>No posts yet — the first one is being written.</p>
            )}

            {(posts || []).map((post, i) => (
              <Link key={post.id} to={`/blog/${post.slug}`} style={{ display: 'block', color: 'inherit' }}>
                <article data-prow="" className="d-hover-prow" style={{ display: 'grid', gridTemplateColumns: '52px minmax(0,1fr) 176px', gap: 22, padding: '26px 16px', margin: '0 -16px', borderBottom: '1px solid rgba(13,13,12,0.1)', borderRadius: 10 }}>
                  <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, paddingTop: 5 }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                      <h2 style={{ margin: 0, fontFamily: serif, fontWeight: 500, fontSize: 25, letterSpacing: '-0.02em', color: '#0D0D0C' }}>{post.title}</h2>
                    </div>
                    {post.excerpt && (
                      <p style={{ maxWidth: '76ch', margin: '11px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.64, color: '#4A4A46' }}>{post.excerpt}</p>
                    )}
                    {(post.tags || []).length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 15 }}>
                        {(post.tags || []).map((t) => (
                          <span key={t} style={{ padding: '5px 9px', border: '1px solid rgba(13,13,12,0.1)', borderRadius: 999, fontFamily: 'var(--font-sans)', fontSize: 11, color: '#4A4A46' }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div data-prow-actions="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A8A83' }}>{formatPostDate(post.published_at)}</span>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Read →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
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
