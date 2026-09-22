import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DescentNav, { useDescentBody } from '@/components/DescentNav'

const serif = "'Newsreader',Georgia,serif"
const labUrl = 'https://ash-visual-study-lab.vercel.app'

const desks = [
  {
    course: 'ENGR 213',
    title: 'Differential equations',
    description: 'Separable and first-order linear equations made visible through adjustable graphs, ten worked problems, and targeted method drills.',
    details: ['10 worked problems', '6 method drills', 'interactive graphs'],
    href: `${labUrl}/#engr213`,
    accent: '#185FA5',
    wash: '#EEF5FB',
  },
  {
    course: 'ELEC 275',
    title: 'Circuit analysis',
    description: 'Ohm’s law, KCL, KVL, reduction, and divider rules taught through animated circuits and two independent solution paths.',
    details: ['5 full quiz problems', '6 speed drills', 'animated circuits'],
    href: `${labUrl}/#quiz`,
    accent: '#26715D',
    wash: '#EFF7F2',
  },
]

export default function StudyLab() {
  useDescentBody()
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !root.current) return
    const context = gsap.context(() => {
      gsap.from('[data-study-reveal]', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: 'power3.out',
      })
      gsap.to('[data-study-orbit]', {
        rotation: 360,
        duration: 28,
        repeat: -1,
        ease: 'none',
      })
      gsap.to('[data-study-core]', {
        scale: 1.07,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, root)
    return () => context.revert()
  }, [])

  return (
    <div ref={root} style={{ minHeight: '100vh' }}>
      <DescentNav active="study-lab" />

      <main style={{ padding: 'clamp(112px,14vw,154px) 0 clamp(80px,10vw,124px)' }}>
        <div style={{ width: 'min(1160px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
          <section data-study-hero="" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(280px,.75fr)', gap: 'clamp(42px,8vw,100px)', alignItems: 'center' }}>
            <div>
              <div data-study-reveal="" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />Study Lab · 01
              </div>
              <h1 data-study-reveal="" style={{ margin: '18px 0 0', maxWidth: '11ch', fontFamily: serif, fontSize: 'clamp(48px,7vw,82px)', fontWeight: 500, lineHeight: .98, letterSpacing: '-.035em' }}>
                Make the reasoning visible.
              </h1>
              <p data-study-reveal="" style={{ maxWidth: '62ch', margin: '25px 0 0', color: '#4A4A46', fontSize: 'clamp(15px,1.5vw,17px)', lineHeight: 1.7 }}>
                Ash’s Study Lab turns dense engineering material into manipulable diagrams, justified steps, and short recall checks. It is built for understanding first and exam-speed retrieval second.
              </p>
              <div data-study-reveal="" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
                <a href={`${labUrl}/#study-lab`} target="_blank" rel="noreferrer" className="d-hover-fade" style={{ display: 'inline-flex', alignItems: 'center', minHeight: 48, padding: '0 21px', borderRadius: 11, background: '#0D0D0C', color: '#fff', fontSize: 14, fontWeight: 600 }}>Open Study Lab ↗</a>
                <a href="#course-desks" className="d-hover-border-ink" style={{ display: 'inline-flex', alignItems: 'center', minHeight: 48, padding: '0 20px', border: '1px solid rgba(13,13,12,.16)', borderRadius: 11, fontFamily: 'var(--font-mono)', fontSize: 12 }}>Choose a course ↓</a>
              </div>
            </div>

            <div data-study-reveal="" aria-hidden="true" style={{ position: 'relative', display: 'grid', placeItems: 'center', width: 'min(100%,380px)', aspectRatio: '1', margin: '0 auto' }}>
              <div data-study-orbit="" style={{ position: 'absolute', inset: 0, border: '1px solid rgba(24,95,165,.28)', borderRadius: '50%' }}>
                {['intuition', 'worked steps', 'recall'].map((label, index) => (
                  <span key={label} style={{ position: 'absolute', top: index === 0 ? '3%' : index === 1 ? '45%' : '83%', left: index === 0 ? '20%' : index === 1 ? '88%' : '9%', padding: '6px 9px', border: '1px solid rgba(13,13,12,.1)', borderRadius: 7, background: '#fff', color: '#4A4A46', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', transform: `rotate(${index === 0 ? 0 : index === 1 ? -90 : -240}deg)` }}>{label}</span>
                ))}
              </div>
              <div style={{ position: 'absolute', inset: '16%', border: '1px dashed rgba(24,95,165,.25)', borderRadius: '50%' }} />
              <div data-study-core="" style={{ display: 'grid', placeItems: 'center', width: '42%', aspectRatio: '1', borderRadius: '50%', background: '#0D0D0C', color: '#fff', boxShadow: '0 28px 70px -35px rgba(13,13,12,.7)', fontFamily: serif, fontSize: 'clamp(24px,4vw,40px)' }}>∫ · V · I</div>
            </div>
          </section>

          <section id="course-desks" style={{ marginTop: 'clamp(72px,10vw,118px)', scrollMarginTop: 90 }}>
            <div data-study-reveal="" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 18, paddingBottom: 18, borderBottom: '1px solid rgba(13,13,12,.16)' }}>
              <h2 style={{ margin: 0, fontFamily: serif, fontSize: 'clamp(31px,4vw,48px)', fontWeight: 500, letterSpacing: '-.025em' }}>Choose a course desk.</h2>
              <span style={{ color: '#8A8A83', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase' }}>Two active courses</span>
            </div>
            <div data-study-grid="" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 22 }}>
              {desks.map((desk, index) => (
                <a key={desk.course} data-study-reveal="" href={desk.href} target="_blank" rel="noreferrer" className="study-lab-card" style={{ display: 'flex', flexDirection: 'column', minHeight: 385, padding: 'clamp(24px,4vw,36px)', border: '1px solid rgba(13,13,12,.12)', borderRadius: 16, background: desk.wash, boxShadow: '0 1px 2px rgba(13,13,12,.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, color: desk.accent, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase' }}>
                    <span>0{index + 1} · {desk.course}</span><span>Quiz desk ↗</span>
                  </div>
                  <h3 style={{ maxWidth: '12ch', margin: '42px 0 0', fontFamily: serif, fontSize: 'clamp(30px,4vw,46px)', fontWeight: 500, lineHeight: 1.02, letterSpacing: '-.025em' }}>{desk.title}</h3>
                  <p style={{ maxWidth: '55ch', margin: '18px 0 0', color: '#4A4A46', fontSize: 14.5, lineHeight: 1.65 }}>{desk.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'auto', paddingTop: 32 }}>
                    {desk.details.map((detail) => <span key={detail} style={{ padding: '6px 9px', border: '1px solid rgba(13,13,12,.1)', borderRadius: 999, background: 'rgba(255,255,255,.62)', color: '#4A4A46', fontSize: 11 }}>{detail}</span>)}
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section data-study-reveal="" style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 18, marginTop: 'clamp(70px,9vw,104px)', paddingTop: 24, borderTop: '1px solid rgba(13,13,12,.16)' }}>
            <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>03</span>
            <div>
              <h2 style={{ margin: 0, fontFamily: serif, fontSize: 'clamp(30px,4vw,46px)', fontWeight: 500, letterSpacing: '-.025em' }}>The same learning loop, every time.</h2>
              <p style={{ maxWidth: '70ch', margin: '16px 0 0', color: '#4A4A46', fontSize: 15, lineHeight: 1.7 }}>Begin with a familiar analogy and a diagram. Reveal the solution one justified step at a time. Then hide the answer and rebuild it from memory. Consistency lowers the mental overhead so the engineering idea gets your full attention.</p>
            </div>
          </section>
        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(13,13,12,.08)', background: '#FAFAF9' }}>
        <div style={{ width: 'min(1160px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '22px 0', color: '#8A8A83', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase' }}>
          <span>Study Lab · Montréal</span><span>© 2026 Ashfaaq Kazi</span>
        </div>
      </footer>
    </div>
  )
}
