import { useEffect } from 'react'
import { Link } from 'react-router'

/**
 * Fixed top navigation for non-home pages (Blog, post detail).
 * Mirrors the Descent home nav; section links point back to home anchors.
 */
export default function DescentNav({ active }: { active?: string }) {
  const sections = ['journey', 'research', 'work', 'credentials', 'contact']
  return (
    <nav data-nav="" aria-label="Primary navigation" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '14px clamp(20px,5vw,40px)', borderBottom: '1px solid rgba(13,13,12,0.08)', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <Link to="/" aria-label="Ashfaaq Kazi — home" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '-0.02em', color: '#0D0D0C' }}>
        <span style={{ display: 'grid', placeItems: 'center', width: 29, height: 29, borderRadius: 7, background: '#0D0D0C', color: '#fff', fontWeight: 700, lineHeight: 1, fontSize: 15 }}>A</span>
        <span>Ashfaaq Kazi</span>
      </Link>
      <div data-nav-links="" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,3vw,28px)', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: '#8A8A83' }}>
        {sections.map((id) => (
          <a key={id} href={`/#${id}`} className="d-hover-ink" style={{ color: 'inherit' }}>{id}</a>
        ))}
        <Link to="/blog" className="d-hover-ink" style={{ color: active === 'blog' ? '#0D0D0C' : 'inherit', fontWeight: active === 'blog' ? 600 : 500 }}>blog</Link>
      </div>
    </nav>
  )
}

/** Applies the Descent body styling (paper grid, fonts, tokens) while mounted. */
export function useDescentBody() {
  useEffect(() => {
    document.body.classList.add('descent')
    return () => document.body.classList.remove('descent')
  }, [])
}

export function formatPostDate(iso: string | null): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}
