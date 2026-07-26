import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import '../descent.css'

/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    gsap?: any
    ScrollTrigger?: any
    ScrollToPlugin?: any
    SplitText?: any
    ScrollSmoother?: any
    __roErrPatched?: boolean
  }
}

const serif = "'Newsreader',Georgia,serif"

/**
 * Scroll-animation layer, ported from the design's DCLogic script.
 * Waits for the GSAP CDN scripts, then wires: ScrollSmoother, scroll progress,
 * depth gauge, journey spine, hero timeline, section reveals, and the ink-wipe
 * doorway transition. Everything is reverted on unmount.
 */
function useDescentMotion(rootRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    let timer = 0
    let tries = 0
    let ctx: any = null
    let split: any = null
    let smoother: any = null
    let padNav: (() => void) | null = null
    let onClick: ((e: Event) => void) | null = null
    let anchors: Element[] = []
    let halveCleanup: (() => void) | null = null

    const gaugeNames = [
      'L1 · Trust between humans',
      'L2 · Trust as law',
      'L3 · Trust as product',
      'L4 · Trust as code',
      'L5 · Trust as science',
    ]
    let gDots: HTMLElement[] = []
    let gFill: HTMLElement | null = null
    let gLabel: HTMLElement | null = null

    const gaugeUpdate = (pRaw: number) => {
      const p = Math.max(0, Math.min(1, pRaw))
      if (gFill) gFill.style.transform = 'scaleY(' + p + ')'
      const idx = Math.min(4, Math.floor(p * 4.999))
      gDots.forEach((d, i) => {
        const on = i <= idx
        d.style.background = on ? 'var(--accent)' : '#ffffff'
        d.style.borderColor = on ? 'var(--accent)' : 'rgba(13,13,12,0.25)'
      })
      if (gLabel) gLabel.textContent = gaugeNames[idx]
    }

    const doorway = (cb: () => void) => {
      const gsap = window.gsap
      const ov = root.querySelector('[data-wipe]') as HTMLElement | null
      if (!ov) { cb(); return }
      gsap.set(ov, { display: 'block', scaleY: 0, transformOrigin: 'bottom' })
      gsap.timeline()
        .to(ov, { scaleY: 1, duration: 0.3, ease: 'power2.in' })
        .add(() => cb())
        .to(ov, { scaleY: 0, transformOrigin: 'top', duration: 0.42, ease: 'power2.out' }, '+=0.08')
        .set(ov, { display: 'none' })
    }

    const heroIntro = (gsap: any) => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      const h1 = root.querySelector('[data-h1]')
      let lines: any = null
      if (window.SplitText && h1) {
        try { split = new window.SplitText(h1, { type: 'lines', mask: 'lines' }); lines = split.lines } catch { lines = null }
      }
      gsap.set('[data-hero-eyebrow],[data-hero-sub],[data-hero-actions]', { autoAlpha: 0, y: 14 })
      if (lines && lines.length) { gsap.set(lines, { yPercent: 110 }); tl.to(lines, { yPercent: 0, duration: 1.0, stagger: 0.08 }, 0) }
      else if (h1) { gsap.set(h1, { autoAlpha: 0, y: 28 }); tl.to(h1, { autoAlpha: 1, y: 0, duration: 1.0 }, 0) }
      tl.to('[data-hero-eyebrow]', { autoAlpha: 1, y: 0, duration: 0.7 }, 0.15)
        .to('[data-hero-sub]', { autoAlpha: 1, y: 0, duration: 0.7 }, 0.45)
        .to('[data-hero-actions]', { autoAlpha: 1, y: 0, duration: 0.7 }, 0.6)
      const photo = root.querySelector('[data-hero-photo]')
      if (photo) {
        gsap.set(photo, { autoAlpha: 0, y: 16, clipPath: 'inset(0 0 100% 0)' })
        tl.to(photo, { autoAlpha: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'power3.out' }, 0.2)
      }
      const panel = root.querySelector('[data-hero-panel]')
      if (panel) {
        gsap.set(panel, { clipPath: 'inset(0 0 100% 0)' })
        tl.to(panel, { clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'power3.out' }, 0.5)
        gsap.set('[data-panel-row]', { autoAlpha: 0, y: 10 })
        tl.to('[data-panel-row]', { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.5 }, 0.85)
      }
    }

    const init = () => {
      const gsap = window.gsap
      const ST = window.ScrollTrigger

      // Swallow the benign ScrollSmoother "ResizeObserver loop" error only.
      if (!window.__roErrPatched) {
        window.__roErrPatched = true
        window.addEventListener('error', (e) => {
          if (e && e.message && e.message.indexOf('ResizeObserver loop') !== -1) { e.stopImmediatePropagation(); e.preventDefault() }
        })
      }

      gsap.registerPlugin(ST, window.ScrollToPlugin)
      if (window.SplitText) gsap.registerPlugin(window.SplitText)
      if (window.ScrollSmoother) gsap.registerPlugin(window.ScrollSmoother)

      const navEl = root.querySelector('[data-nav]') as HTMLElement | null
      const contentEl = root.querySelector('#smooth-content') as HTMLElement | null
      padNav = () => { if (contentEl && navEl) contentEl.style.paddingTop = navEl.offsetHeight + 'px' }
      padNav()
      window.addEventListener('resize', padNav)

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Smooth in-page navigation, offset for the fixed nav; L5 doorway gets the ink wipe.
      onClick = (e: Event) => {
        const a = e.currentTarget as HTMLAnchorElement
        const hash = a.getAttribute('href') || ''
        if (hash.length < 2) return
        const t = root.querySelector(hash)
        if (!t) return
        e.preventDefault()
        const offset = (navEl ? navEl.offsetHeight : 0) + 14
        const jump = () => {
          if (smoother) smoother.scrollTo(smoother.offset(t, 'top top') - offset, !prefersReduced)
          else gsap.to(window, { duration: prefersReduced ? 0 : 0.8, ease: 'power2.inOut', scrollTo: { y: t, offsetY: offset }, overwrite: 'auto' })
        }
        if (a.hasAttribute('data-doorway') && !prefersReduced) doorway(jump); else jump()
      }
      anchors = Array.from(root.querySelectorAll('a[href^="#"]'))
      anchors.forEach((a) => a.addEventListener('click', onClick!))

      // Depth gauge
      gDots = Array.from(root.querySelectorAll('[data-gnode]')) as HTMLElement[]
      gFill = root.querySelector('[data-gauge-fill]')
      gLabel = root.querySelector('[data-gauge-label]')
      gaugeUpdate(0)

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia()
        mm.add('(prefers-reduced-motion: no-preference)', () => {
          if (window.ScrollSmoother) {
            smoother = window.ScrollSmoother.create({ wrapper: '#smooth-wrapper', content: '#smooth-content', smooth: 1.1, smoothTouch: 0, effects: false })
            ST.addEventListener('refresh', padNav!)
            padNav!()
          }

          // Top scroll-progress bar
          gsap.to('[data-progress]', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } })

          // The one looping animation: the hero scroll cue
          gsap.to('[data-bob]', { y: 7, duration: 1.1, ease: 'power1.inOut', repeat: -1, yoyo: true })

          heroIntro(gsap)

          // Depth gauge driven by the journey
          ST.create({
            trigger: '[data-journey]', start: 'top center', end: 'bottom center',
            onUpdate: (self: any) => gaugeUpdate(self.progress),
            onEnter: () => gsap.to('[data-gauge]', { autoAlpha: 1, duration: 0.5 }),
            onEnterBack: () => gsap.to('[data-gauge]', { autoAlpha: 1, duration: 0.5 }),
            onLeave: () => { gaugeUpdate(1); gsap.to('[data-gauge]', { autoAlpha: 0.5, duration: 0.5 }) },
            onLeaveBack: () => gsap.to('[data-gauge]', { autoAlpha: 0, duration: 0.5 }),
          })

          // Journey spine draws with scroll
          const spine = root.querySelector('[data-spine-fill]')
          if (spine) gsap.fromTo(spine, { scaleY: 0 }, { scaleY: 1, ease: 'none', transformOrigin: 'top', scrollTrigger: { trigger: '[data-journey]', start: 'top 68%', end: 'bottom 82%', scrub: 0.6 } })

          // Journey layer bodies — reversal is intentional
          gsap.utils.toArray('[data-layer-body]').forEach((el: any) => {
            gsap.set(el, { autoAlpha: 0, y: 24 })
            gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play reverse play reverse' } })
          })
          // The only parallax: the giant layer markers
          gsap.utils.toArray('[data-marker]').forEach((m: any) => {
            const layer = m.closest('[data-layer]')
            gsap.fromTo(m, { y: -22 }, { y: 22, ease: 'none', scrollTrigger: { trigger: layer, start: 'top bottom', end: 'bottom top', scrub: true } })
          })

          // Calm reveals
          const revs = gsap.utils.toArray('[data-reveal]')
          gsap.set(revs, { autoAlpha: 0, y: 22 })
          ST.batch(revs, { start: 'top 88%', onEnter: (b: any) => gsap.to(b, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', overwrite: true }) })

          // Research
          const r = root.querySelector('[data-research]')
          if (r) {
            gsap.from('[data-research-lead]', { autoAlpha: 0, y: 20, duration: 0.9, ease: 'power4.out', scrollTrigger: { trigger: r, start: 'top 74%', once: true } })
            gsap.from('[data-question]', { autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.15, ease: 'power4.out', scrollTrigger: { trigger: '[data-questions]', start: 'top 82%', once: true } })
            const tf = root.querySelector('[data-traj-fill]')
            if (tf) gsap.fromTo(tf, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: 'power1.inOut', scrollTrigger: { trigger: tf, start: 'top 88%', end: 'top 52%', scrub: true } })
          }

          // Selected work
          const fl = root.querySelector('[data-flagship]')
          if (fl) {
            gsap.from(fl, { clipPath: 'inset(100% 0 0 0)', duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: fl, start: 'top 82%', once: true } })
            gsap.from(fl.querySelectorAll('[data-check]'), { autoAlpha: 0, x: -8, duration: 0.5, stagger: 0.09, ease: 'power2.out', scrollTrigger: { trigger: fl, start: 'top 60%', once: true } })
          }
          ST.batch('[data-prow]', { start: 'top 88%', onEnter: (b: any) => gsap.from(b, { autoAlpha: 0, y: 28, stagger: 0.08, duration: 0.6, ease: 'power4.out' }) })
          const dip = root.querySelector('[data-diptych]')
          if (dip) gsap.from(dip, { autoAlpha: 0, y: 26, duration: 0.8, ease: 'power4.out', scrollTrigger: { trigger: dip, start: 'top 85%', once: true } })

          // Credentials staircase + one-time amber pulse
          ST.batch('[data-step]', { start: 'top 90%', onEnter: (b: any) => gsap.from(b, { autoAlpha: 0, y: 24, stagger: 0.06, duration: 0.6, ease: 'power4.out' }) })
          const ring = root.querySelector('[data-amber-ring]')
          if (ring) ST.create({ trigger: ring, start: 'top 82%', once: true, onEnter: () => gsap.fromTo(ring, { scale: 0.6, autoAlpha: 0.7 }, { scale: 2.6, autoAlpha: 0, duration: 1.1, ease: 'power2.out' }) })

          // Toolkit
          ST.batch('[data-tool]', { start: 'top 90%', onEnter: (b: any) => gsap.from(b, { autoAlpha: 0, y: 18, stagger: 0.06, duration: 0.5, ease: 'power2.out' }) })

          // Contact panels wipe in from opposite directions
          const d1 = root.querySelector('[data-door="1"]')
          const d2 = root.querySelector('[data-door="2"]')
          if (d1) gsap.from(d1, { clipPath: 'inset(0 100% 0 0)', duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '[data-contact]', start: 'top 80%', once: true } })
          if (d2) gsap.from(d2, { clipPath: 'inset(0 0 0 100%)', duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '[data-contact]', start: 'top 80%', once: true } })

          // Diptych: hovered half gently expands
          const halves = gsap.utils.toArray('[data-dip-half]')
          if (dip && halves.length === 2) {
            const enter = (h: any) => () => halves.forEach((o: any) => gsap.to(o, { flexGrow: o === h ? 1.45 : 0.8, duration: 0.4, ease: 'power2.out' }))
            const leave = () => halves.forEach((o: any) => gsap.to(o, { flexGrow: 1, duration: 0.4, ease: 'power2.out' }))
            const handlers = halves.map((h: any) => {
              const fn = enter(h)
              h.addEventListener('mouseenter', fn)
              return { h, fn }
            })
            dip.addEventListener('mouseleave', leave)
            halveCleanup = () => {
              handlers.forEach(({ h, fn }: any) => h.removeEventListener('mouseenter', fn))
              dip.removeEventListener('mouseleave', leave)
            }
          }
        })
      }, root)

      const refresh = () => { if (padNav) padNav(); window.ScrollTrigger && window.ScrollTrigger.refresh() }
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh)
      else window.setTimeout(refresh, 400)
    }

    const boot = () => {
      if (window.gsap && window.ScrollTrigger && window.ScrollToPlugin) return init()
      if (tries > 120) return // GSAP never loaded — page stays fully visible
      tries += 1
      timer = window.setTimeout(boot, 50)
    }
    boot()

    return () => {
      window.clearTimeout(timer)
      try { ctx && ctx.revert() } catch { /* noop */ }
      try { split && split.revert() } catch { /* noop */ }
      try { smoother && smoother.kill() } catch { /* noop */ }
      try { halveCleanup && halveCleanup() } catch { /* noop */ }
      if (padNav) window.removeEventListener('resize', padNav)
      if (onClick) anchors.forEach((a) => a.removeEventListener('click', onClick!))
      if (contentElReset()) { /* reset nav padding on unmount */ }
    }

    function contentElReset() {
      const c = root!.querySelector('#smooth-content') as HTMLElement | null
      if (c) c.style.paddingTop = ''
      return true
    }
  }, [rootRef])
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.classList.add('descent')
    return () => document.body.classList.remove('descent')
  }, [])

  useDescentMotion(rootRef)

  return (
    <div data-shell="" ref={rootRef} style={{ position: 'relative', minHeight: '100vh' }}>
      <div data-progress="" aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 60, background: 'var(--accent)', transform: 'scaleX(0)', transformOrigin: 'left center', pointerEvents: 'none' }}></div>
      <div data-wipe="" aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 80, background: '#0D0D0C', transform: 'scaleY(0)', transformOrigin: 'bottom', display: 'none', pointerEvents: 'none' }}></div>

      <div data-gauge="" aria-hidden="true" style={{ position: 'fixed', left: 'clamp(16px,2.4vw,34px)', top: '50%', transform: 'translateY(-50%)', zIndex: 40, opacity: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'relative', height: 300 }}>
          <div style={{ position: 'absolute', left: 5, top: 6, bottom: 6, width: 1, background: 'rgba(13,13,12,0.15)' }}></div>
          <div data-gauge-fill="" style={{ position: 'absolute', left: 5, top: 6, width: 1, height: 'calc(100% - 12px)', background: 'var(--accent)', transform: 'scaleY(0)', transformOrigin: 'top' }}></div>
          <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {['L1', 'L2', 'L3', 'L4', 'L5'].map((label) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span data-gnode="" style={{ width: 11, height: 11, borderRadius: '50%', background: '#fff', border: '1px solid rgba(13,13,12,0.25)', boxSizing: 'border-box' }}></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', color: '#8A8A83' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div data-gauge-label="" style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.11em', textTransform: 'uppercase', color: '#8A8A83', maxWidth: 132, lineHeight: 1.5 }}>L1 · Trust between humans</div>
      </div>

      <nav data-nav="" aria-label="Primary navigation" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '14px clamp(20px,5vw,40px)', borderBottom: '1px solid rgba(13,13,12,0.08)', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
        <a href="#top" aria-label="Ashfaaq Kazi — home" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '-0.02em', color: '#0D0D0C' }}>
          <span style={{ display: 'grid', placeItems: 'center', width: 29, height: 29, borderRadius: 7, background: '#0D0D0C', color: '#fff', fontWeight: 700, lineHeight: 1, fontSize: 15 }}>A</span>
          <span>Ashfaaq Kazi</span>
        </a>
        <div data-nav-links="" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,3vw,28px)', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: '#8A8A83' }}>
          {['journey', 'research', 'work', 'credentials', 'contact'].map((id) => (
            <a key={id} href={`#${id}`} className="d-hover-ink" style={{ color: 'inherit' }}>{id}</a>
          ))}
          <Link to="/blog" className="d-hover-ink" style={{ color: 'inherit' }}>blog</Link>
        </div>
      </nav>

      <div id="smooth-wrapper"><div id="smooth-content">
        <header id="top" style={{ position: 'relative', background: 'transparent', padding: 'clamp(70px,11vw,128px) 0 clamp(60px,9vw,100px)' }}>
          <div style={{ width: 'min(1200px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
            <div data-hero-grid="" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 358px', gap: 'clamp(40px,7vw,92px)', alignItems: 'start' }}>
              <div>
                <div data-hero-eyebrow="" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>Security · Privacy · Healthcare systems</div>
                <h1 data-h1="" style={{ fontFamily: serif, fontOpticalSizing: 'auto', fontWeight: 500, margin: '24px 0 0', fontSize: 'clamp(44px,6.3vw,74px)', lineHeight: 1.04, letterSpacing: '-0.022em', color: '#0D0D0C', maxWidth: '15ch' }}>Ten years learning where trust breaks.<br />Now learning to build systems where it can’t.</h1>
                <div data-hero-actions="" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36, alignItems: 'center' }}>
                  <a href="#journey" className="d-hover-fade" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, minHeight: 48, padding: '0 22px', borderRadius: 12, background: '#0D0D0C', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600 }}>Begin the descent <span data-bob="" style={{ display: 'inline-block' }}>↓</span></a>
                  <a href="mailto:ashfaaq.kazi@outlook.com" className="d-hover-border-ink" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 48, padding: '0 20px', borderRadius: 12, border: '1px solid rgba(13,13,12,0.16)', color: '#0D0D0C', fontFamily: 'var(--font-mono)', fontSize: 12.5, letterSpacing: '.04em' }}>ashfaaq.kazi@outlook.com</a>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <figure data-hero-photo="" style={{ margin: 0, border: '1px solid rgba(13,13,12,0.12)', borderRadius: 16, overflow: 'hidden', background: '#FAFAF9', boxShadow: '0 1px 2px rgba(0,0,0,0.04),0 30px 70px -52px rgba(0,0,0,0.28)' }}>
                  <img src="/uploads/Ash_Headshot_Jun%202026.jpg" alt="Ashfaaq Kazi" loading="eager" style={{ display: 'block', width: '100%', height: 360, objectFit: 'cover', objectPosition: '50% 20%' }} />
                  <figcaption style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 16px', borderTop: '1px solid rgba(13,13,12,0.1)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A8A83' }}><span style={{ color: '#0D0D0C' }}>Ashfaaq Kazi</span><span>Montréal · 2026</span></figcaption>
                </figure>
                <aside data-hero-panel="" aria-label="Current position" style={{ border: '1px solid rgba(13,13,12,0.12)', borderRadius: 16, background: '#FAFAF9', padding: 26, boxShadow: '0 1px 2px rgba(0,0,0,0.04),0 30px 70px -52px rgba(0,0,0,0.28)' }}>
                  <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}>Current position</div>
                  <h2 style={{ fontFamily: serif, fontWeight: 500, margin: '14px 0 8px', fontSize: 23, letterSpacing: '-0.01em', lineHeight: 1.14, color: '#0D0D0C' }}>In transit, deliberately.</h2>
                  <p style={{ margin: '0 0 20px', fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.6, color: '#4A4A46' }}>Full-time preparation for Concordia, fall 2026.</p>
                  {[
                    ['Base', 'Montréal, QC'],
                    ['Mode', 'Remote · EN / FR'],
                  ].map(([k, v]) => (
                    <div key={k} data-panel-row="" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '11px 0', borderTop: '1px solid rgba(13,13,12,0.1)', fontSize: 12 }}>
                      <span style={{ color: '#8A8A83', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.09em', fontSize: 10 }}>{k}</span>
                      <strong style={{ fontWeight: 500, textAlign: 'right' }}>{v}</strong>
                    </div>
                  ))}
                  <div data-panel-row="" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '11px 0', borderTop: '1px solid rgba(13,13,12,0.1)', fontSize: 12 }}>
                    <span style={{ color: '#8A8A83', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.09em', fontSize: 10 }}>Trajectory</span>
                    <strong style={{ fontWeight: 500, textAlign: 'right' }}>BEng Cybersecurity → <a href="#research" style={{ color: 'var(--accent)', textDecoration: 'underline', textDecorationColor: 'rgba(24,95,165,0.3)', textUnderlineOffset: 2 }}>see Research</a></strong>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </header>

        <section id="journey" data-journey="" aria-label="The journey" style={{ position: 'relative', background: 'transparent', padding: 'clamp(80px,10vw,124px) 0' }}>
          <div style={{ width: 'min(1200px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
            <div data-reveal="" style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 18, alignItems: 'start', marginBottom: 'clamp(30px,4vw,44px)' }}>
              <span style={{ paddingTop: 8, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>01</span>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>The journey</div>
              </div>
            </div>

            <div style={{ position: 'relative', marginTop: 'clamp(36px,5vw,64px)' }}>
              <div aria-hidden="true" style={{ position: 'absolute', left: 32, top: 0, bottom: 0, width: 1, background: 'rgba(13,13,12,0.12)' }}></div>
              <div data-spine-fill="" aria-hidden="true" style={{ position: 'absolute', left: 32, top: 0, width: 1, height: '100%', background: 'var(--accent)', transform: 'scaleY(0)', transformOrigin: 'top' }}></div>

              {[
                {
                  layer: '1', marker: 'L1', date: '2018–2020 · McKesson Canada, Specialty Health',
                  title: 'Trust between humans', role: 'Reimbursement Case Manager — Amgen ProVital (Prolia & Evenity)', roleBold: false,
                  body: 'I guided patients through insurance verification, prior authorization and appeals — coordinating clinics, insurers and specialty pharmacies. It’s where I learned the first law of this field: systems rarely fail at the server. They fail between people, under pressure, at the exact moment trust is needed most.',
                  chips: ['Frontline of specialty-biologics patient support'], active: false, last: false,
                },
                {
                  layer: '2', marker: 'L2', date: '2017–2022 · Sheridan College → McKesson Canada, Specialty Health',
                  title: 'Trust as law', role: 'Licensed Paralegal (P1, Law Society of Ontario) → Technical Writer', roleBold: true,
                  body: 'I trained as a paralegal while working full-time — then spent two years as the division’s technical writer, turning regulation into daily practice: SOPs and governance documentation, process flows rebuilt with Six Sigma methodology alongside the product owners, contract reviews, and a seat at new program launches as the subject-matter expert. It’s where I learned that compliance is a discipline that has to survive contact with real workflows.',
                  chips: ['P1 paralegal license', 'SOPs & governance docs', 'Six Sigma process design'], active: false, last: false,
                },
                {
                  layer: '3', marker: 'L3', date: '2022–2025 · McKesson Canada, Specialty Health',
                  title: 'Trust as product', role: 'Project Manager → Digital Project Lead & Product Owner', roleBold: true,
                  body: 'As Project Manager I led new program launches end to end — everything the frontline and the writing desk had taught me, now pointed at delivery. Then, as Product Owner of the Bien+ loyalty and pharmacy digital platforms, I shipped compliant products to 300,000+ members across 50+ pharmacy partners — 40% year-over-year engagement growth, 95%+ partner adoption — while serving as Privacy & Compliance Lead for PIPEDA, PHIPA and Quebec Law 25 across six national brands: Uniprix, Proxim, Remedy’sRx, IDA, Guardian, Medicine Shoppe. The lesson I keep: regulation and growth are not enemies. Distrust is the tax; trust is the feature.',
                  chips: ['300K+ members', '50+ partners', '+40% YoY', '95% adoption', '6 brands', '3 privacy regimes'], active: false, last: false,
                },
                {
                  layer: '4', marker: 'L4', date: '2024–2026',
                  title: 'Trust as code', role: 'Full-Stack Software Dev certificate program @ McGill University School of Continuing Studies, independent builds; Senior PM (contract), Rouge on Blue', roleBold: false,
                  body: 'I went down the last layer and learned to build the controls myself: RBAC, row-level security, append-only audit trails, hashed credentials. Under my own practice — Laboratoires Structure — I built analytical instruments and agentic systems. A short Senior PM contract designing multi-agent AI workflows bridged me to school, concluded April 2026 as planned.',
                  chips: ['RLS', 'RBAC', 'audit trails', 'multi-agent systems'], active: false, last: false,
                },
                {
                  layer: '5', marker: 'L5', date: '2026 →',
                  title: 'Trust as science', role: 'BEng Cybersecurity, Concordia University', roleBold: false,
                  body: 'The Google Cybersecurity Certificate in 2024 was the deliberate first move — then math and physics at the Open University, then computer science at McGill.',
                  chips: [], active: true, last: true,
                },
              ].map((l) => (
                <div key={l.layer} data-layer={l.layer} style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0,0.92fr) minmax(0,1.08fr)', gap: 'clamp(24px,4.5vw,68px)', padding: l.last ? 'clamp(28px,4.5vw,54px) 0 clamp(20px,3vw,36px) 72px' : 'clamp(28px,4.5vw,54px) 0 clamp(28px,4.5vw,54px) 72px' }}>
                  <span data-node="" style={{ position: 'absolute', left: 32, top: 64, width: 11, height: 11, borderRadius: '50%', background: l.active ? 'var(--accent)' : '#fff', border: l.active ? '1px solid var(--accent)' : '1px solid rgba(13,13,12,0.22)', transform: 'translate(-50%,-50%)', boxSizing: 'border-box', zIndex: 1 }}></span>
                  <div style={{ position: 'relative' }}>
                    <span data-marker="" style={{ position: 'absolute', left: -6, top: -24, fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 'clamp(64px,8vw,104px)', letterSpacing: '-0.04em', color: 'rgba(13,13,12,0.07)', lineHeight: 1, pointerEvents: 'none' }}>{l.marker}</span>
                    <div style={{ position: 'relative', paddingTop: 6 }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.11em', textTransform: 'uppercase', color: '#8A8A83' }}>{l.date}</div>
                      <h3 style={{ fontFamily: serif, fontWeight: 500, margin: '14px 0 0', fontSize: 'clamp(26px,3vw,33px)', letterSpacing: '-0.018em', lineHeight: 1.08, color: '#0D0D0C' }}>{l.title}</h3>
                      <div style={{ marginTop: 11, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.5, color: '#4A4A46', fontWeight: l.roleBold ? 700 : 400 }}>{l.role}</div>
                    </div>
                  </div>
                  <div data-layer-body="" style={{ paddingTop: 6 }}>
                    <p style={{ maxWidth: '60ch', margin: 0, fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.68, color: '#4A4A46' }}>{l.body}</p>
                    {l.chips.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
                        {l.chips.map((c) => (
                          <span key={c} data-mchip="" style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 11px', border: '1px solid rgba(13,13,12,0.14)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', color: '#4A4A46' }}>{c}</span>
                        ))}
                      </div>
                    )}
                    {l.last && (
                      <div style={{ marginTop: 24 }}>
                        <a href="#research" data-doorway="" className="d-hover-doorway" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 15px', border: '1px solid rgba(180,83,9,0.34)', background: 'rgba(180,83,9,0.06)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: '#B45309' }}>The descent continues →</a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="research" data-research="" aria-label="Research direction" style={{ background: '#101014', color: '#F5F5F3', padding: 'clamp(88px,11vw,140px) 0' }}>
          <div style={{ width: 'min(1080px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
            <div data-research-lead="" style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 18, alignItems: 'start' }}>
              <span style={{ paddingTop: 8, color: '#7FB5E6', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>02</span>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: '#7FB5E6', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>Where this is going</div>
                <h2 style={{ fontFamily: serif, fontOpticalSizing: 'auto', fontWeight: 500, maxWidth: '18ch', margin: '13px 0 0', fontSize: 'clamp(36px,4.4vw,52px)', letterSpacing: '-0.02em', lineHeight: 1.04, color: '#F5F5F3' }}>The questions are already in hand.</h2>
                <p style={{ maxWidth: '66ch', margin: '26px 0 0', fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px,1.3vw,18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
                  The BEng is the foundation. My roadmap runs{' '}
                  <span data-traj="" style={{ position: 'relative', display: 'inline-block', color: 'rgb(231,151,47)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    BEng → MSc → PhD
                    <span data-traj-fill="" style={{ position: 'absolute', left: 0, right: 0, bottom: -3, height: 2, background: 'rgb(231,151,47)', transform: 'scaleX(0)', transformOrigin: 'left center' }}></span>
                  </span>
                  , and the research territory has been visible from every layer of the descent: <strong style={{ color: 'rgb(245,245,243)', fontWeight: 600 }}>privacy engineering and usable security in regulated health systems</strong> — with the security of AI-agent systems as the forward edge.
                </p>
              </div>
            </div>

            <div data-questions="" style={{ margin: 'clamp(44px,6vw,72px) 0 0 70px', display: 'grid', gap: 0 }}>
              {[
                {
                  n: '01', q: 'Why do security controls die in real clinical workflows?',
                  a: 'Controls that are correct on paper fail at the pharmacy counter. What does usable security look like when the user is overworked, the stakes are a patient’s medication, and the audit is months away?',
                  last: false,
                },
                {
                  n: '02', q: 'Can regulation compile?',
                  a: 'PIPEDA, PHIPA and Law 25 are read by lawyers and audited by checklists. What would it take to express them as verifiable properties of the schema itself — compliance as a build artifact, not an annual ritual?',
                  last: false,
                },
                {
                  n: '03', q: 'Where is the security boundary when AI agents act for us?',
                  a: 'Multi-agent systems now read, decide and write across applications. My own work (see Conductor, below) treats the broker as the entire trust boundary. That question deserves a research career, not a blog post.',
                  last: true,
                },
              ].map((item) => (
                <div key={item.n} data-question="" style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, padding: 'clamp(24px,3vw,34px) 0', borderTop: '1px solid rgba(255,255,255,0.14)', borderBottom: item.last ? '1px solid rgba(255,255,255,0.14)' : undefined }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: '#7FB5E6', paddingTop: 4 }}>{item.n}</span>
                  <div>
                    <h3 style={{ fontFamily: serif, fontWeight: 500, margin: 0, fontSize: 'clamp(21px,2.2vw,26px)', letterSpacing: '-0.015em', lineHeight: 1.15, color: '#F5F5F3' }}>{item.q}</h3>
                    <p style={{ maxWidth: '62ch', margin: '12px 0 0', fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.66, color: 'rgba(255,255,255,0.62)' }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <p data-question="" style={{ margin: 'clamp(36px,4vw,52px) 0 0 70px', maxWidth: '60ch', fontFamily: serif, fontWeight: 500, fontSize: 'clamp(20px,2vw,25px)', lineHeight: 1.4, letterSpacing: '-0.01em', color: '#F5F5F3' }}>I’ve spent ten years collecting the evidence. The next ten are for the answers.</p>
          </div>
        </section>

        <section id="work" aria-label="Selected work" style={{ background: 'transparent', padding: 'clamp(80px,10vw,124px) 0' }}>
          <div style={{ width: 'min(1160px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
            <div data-reveal="" style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 18, alignItems: 'start', marginBottom: 'clamp(32px,4vw,50px)' }}>
              <span style={{ paddingTop: 8, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>03</span>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>Selected work</div>
              </div>
            </div>

            <article data-flagship="" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 328px', background: '#0D0D0C', color: '#F5F5F3', borderRadius: 20, overflow: 'hidden' }}>
              <div style={{ padding: 'clamp(30px,4vw,46px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 11px', borderRadius: 999, background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' }}>Flagship</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7FB5E6', marginRight: 7 }}></span>Live</span>
                </div>
                <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#7FB5E6' }}>Trust as code — regulated healthcare</div>
                <h3 style={{ fontFamily: serif, fontWeight: 500, margin: '12px 0 0', fontSize: 'clamp(44px,6vw,68px)', letterSpacing: '-0.03em', lineHeight: 0.98, color: '#F5F5F3' }}>PSP360</h3>
                <p style={{ maxWidth: '64ch', margin: '20px 0 0', fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.68, color: 'rgba(255,255,255,0.7)' }}>
                  Case-manager console, physician portal, patient app — on one NestJS, Prisma and PostgreSQL backend. <br />
                  State-machine case flow, SLA escalation, role-based access, and an append-only PHI audit trail. <br />
                  This is the McKesson years rebuilt as software: the same patient-support programs I once ran from the inside, engineered the way seven years of compliance work taught me they should be.
                </p>
                <div style={{ display: 'grid', gap: 11, marginTop: 26 }}>
                  {['Append-only PHI audit trail', 'RBAC across three roles', 'State-machine case flow', 'SLA escalation'].map((f) => (
                    <div key={f} data-check="" style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.82)' }}>
                      <span style={{ color: '#7FB5E6', fontWeight: 700 }}>✓</span>
                      <span><strong style={{ color: '#F5F5F3', fontWeight: 600 }}>{f}</strong></span>
                    </div>
                  ))}
                </div>
              </div>
              <aside style={{ padding: 'clamp(26px,3vw,34px)', borderLeft: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#7FB5E6' }}>At a glance</div>
                <dl style={{ margin: '18px 0 0' }}>
                  {[
                    ['Domain', 'Regulated healthcare'],
                    ['Frontends', 'Console · Portal · App'],
                    ['Backend', 'NestJS · Prisma · PG'],
                    ['Access', 'JWT · RBAC · 3 roles'],
                  ].map(([dt, dd], i) => (
                    <div key={dt} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '11px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.12)' : undefined }}>
                      <dt style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,0.5)' }}>{dt}</dt>
                      <dd style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, textAlign: 'right', color: '#F5F5F3' }}>{dd}</dd>
                    </div>
                  ))}
                </dl>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 22 }}>
                  {['NestJS', 'Prisma', 'PostgreSQL', 'React', 'JWT / RBAC'].map((t) => (
                    <span key={t} style={{ padding: '5px 10px', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, fontFamily: 'var(--font-sans)', fontSize: 11, color: 'rgba(255,255,255,0.78)' }}>{t}</span>
                  ))}
                </div>
                <a href="https://psp360-ops-web.vercel.app" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 24, color: '#7FB5E6', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'underline', textDecorationColor: 'rgba(127,181,230,0.4)', textUnderlineOffset: 4 }}>Live demo →</a>
              </aside>
            </article>

            <div style={{ marginTop: 'clamp(36px,4vw,52px)', borderTop: '1px solid rgba(13,13,12,0.16)' }}>
              {[
                {
                  n: '02', title: 'Conductor', tag: 'AI systems — the broker as security boundary',
                  body: <>A web-based desktop where an omnipresent AI broker is the <em>only</em> thing that touches application state. Apps never talk to each other; every exchange is mediated by the broker — which makes it, by design, the entire security boundary. The architectural bet behind my third research question, running in production.</>,
                  chips: ['React', 'TypeScript', 'WebSocket', 'Anthropic API', 'Neon'],
                  actions: [{ kind: 'badge', label: 'Live' }],
                },
                {
                  n: '03', title: 'URIM', tag: 'Trust as law — computed',
                  body: <>A legal prediction engine: probable litigation outcomes and the paths that reach them, tested against decided cases.</>,
                  chips: ['Vercel serverless', 'Neon Postgres', 'GSAP'],
                  actions: [{ kind: 'muted', label: 'Instrument' }],
                },
                {
                  n: '04', title: 'Codr', tag: 'Privacy by design',
                  body: <>A peer-matching PWA for technology professionals where chat unlocks only on mutual match — enforced at the database, not the UI. Row-level security, triggers and storage policies in PostgreSQL mean privacy is a property of the schema.</>,
                  chips: ['Next.js 15', 'React 19', 'Supabase', 'Turborepo', 'PWA'],
                  actions: [
                    { kind: 'badge', label: 'Live' },
                    { kind: 'link', label: 'Website →', href: 'https://codr-cyan-two.vercel.app/' },
                    { kind: 'link-muted', label: 'Get the app →', href: 'https://www.codrapp.ca/' },
                  ],
                },
                {
                  n: '05', title: 'Cartograph', tag: 'Engineering depth',
                  body: <>A real-time collaborative canvas where the board is a semantic graph, not a drawing. Custom SVG rendering engine, conflict-free multiplayer through Yjs CRDTs, and agent-native editing through a custom MCP server with validated, undoable changes.</>,
                  chips: ['React 19', 'Yjs CRDT', 'Custom SVG', 'Node.js', 'MCP'],
                  actions: [
                    { kind: 'dot', label: 'In development' },
                    { kind: 'link', label: 'View live →', href: 'https://cartograph-indol.vercel.app' },
                  ],
                },
              ].map((p) => (
                <article key={p.n} data-prow="" className="d-hover-prow" style={{ display: 'grid', gridTemplateColumns: '52px minmax(0,1fr) 176px', gap: 22, padding: '26px 16px', margin: '0 -16px', borderBottom: '1px solid rgba(13,13,12,0.1)', borderRadius: 10 }}>
                  <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, paddingTop: 5 }}>{p.n}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                      <h3 style={{ margin: 0, fontFamily: serif, fontWeight: 500, fontSize: 25, letterSpacing: '-0.02em', color: '#0D0D0C' }}>{p.title}</h3>
                      <span style={{ color: '#8A8A83', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' }}>{p.tag}</span>
                    </div>
                    <p style={{ maxWidth: '76ch', margin: '11px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.64, color: '#4A4A46' }}>{p.body}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 15 }}>
                      {p.chips.map((c) => (
                        <span key={c} style={{ padding: '5px 9px', border: '1px solid rgba(13,13,12,0.1)', borderRadius: 999, fontFamily: 'var(--font-sans)', fontSize: 11, color: '#4A4A46' }}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div data-prow-actions="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                    {p.actions.map((a) => {
                      if (a.kind === 'badge') return <span key={a.label} style={{ padding: '6px 10px', background: '#0D0D0C', color: '#fff', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' }}>{a.label}</span>
                      if (a.kind === 'muted') return <span key={a.label} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A8A83' }}>{a.label}</span>
                      if (a.kind === 'dot') return <span key={a.label} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A8A83' }}><span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 6 }}></span>{a.label}</span>
                      return <a key={a.label} href={a.href} target="_blank" rel="noreferrer" style={{ color: a.kind === 'link-muted' ? '#8A8A83' : 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>{a.label}</a>
                    })}
                  </div>
                </article>
              ))}
            </div>

            <article data-diptych="" style={{ marginTop: 'clamp(20px,3vw,30px)', border: '1px solid rgba(13,13,12,0.12)', borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.04),0 24px 60px -48px rgba(0,0,0,0.26)' }}>
              <div style={{ padding: 'clamp(24px,3vw,32px) clamp(24px,3vw,32px) clamp(18px,2vw,22px)', borderBottom: '1px solid rgba(13,13,12,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>06</span>
                  <h3 style={{ margin: 0, fontFamily: serif, fontWeight: 500, fontSize: 'clamp(24px,2.8vw,30px)', letterSpacing: '-0.02em', color: '#0D0D0C' }}>Proof of work — two careers in artifacts</h3>
                </div>
                <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.6, color: '#4A4A46' }}>Two instruments, one from each of my McKesson lives.</p>
              </div>
              <div data-diptych-halves="" style={{ display: 'flex', alignItems: 'stretch' }}>
                <div data-dip-half="" style={{ flex: '1 1 0', minWidth: 0, padding: 'clamp(24px,3vw,34px)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A8A83' }}>the-indication · <span style={{ color: '#4A4A46' }}>from the Specialty Health years</span></div>
                  <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.66, color: '#4A4A46' }}>AI content intelligence: the Claude API wired to a custom MCP server, retrieval-augmented generation over embeddings, background ingestion with Inngest, auth and billing included.</p>
                  <div style={{ display: 'flex', gap: 16, marginTop: 18 }}>
                    <a href="https://the-indication.vercel.app" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Open live →</a>
                    <a href="https://github.com/martiancoder12/the-indication" target="_blank" rel="noreferrer" style={{ color: '#8A8A83', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Code →</a>
                  </div>
                </div>
                <div style={{ width: 1, background: 'rgba(13,13,12,0.1)' }}></div>
                <div data-dip-half="" style={{ flex: '1 1 0', minWidth: 0, padding: 'clamp(24px,3vw,34px)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A8A83' }}>Cadence · <span style={{ color: '#4A4A46' }}>from the loyalty years</span></div>
                  <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.66, color: '#4A4A46' }}>A French-first marketing-intelligence publication that scores loyalty and retention programs — the Operator Score — on first-party data, margin and experience. The Bien+ years, turned into an independent analytical voice, Law 25 commentary included.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(16px,2vw,20px) clamp(24px,3vw,34px)', borderTop: '1px solid rgba(13,13,12,0.1)', display: 'flex', flexWrap: 'wrap', gap: 7, background: '#FAFAF9' }}>
                {['Next.js', 'Claude API', 'MCP', 'RAG', 'PostgreSQL', 'i18n'].map((t) => (
                  <span key={t} style={{ padding: '5px 9px', border: '1px solid rgba(13,13,12,0.1)', borderRadius: 999, fontFamily: 'var(--font-sans)', fontSize: 11, color: '#4A4A46', background: '#fff' }}>{t}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="credentials" aria-label="Credentials" style={{ background: '#FAFAF9', borderTop: '1px solid rgba(13,13,12,0.08)', padding: 'clamp(80px,10vw,124px) 0' }}>
          <div style={{ width: 'min(1160px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
            <div data-reveal="" style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 18, alignItems: 'start', marginBottom: 'clamp(16px,2vw,24px)' }}>
              <span style={{ paddingTop: 8, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>05</span>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>Credentials</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: 12 }}>
              {([
                { n: '01', title: 'Paralegal Diploma', meta: 'Sheridan College · 2017–2019 · P1 Licensee, Law Society of Ontario', indent: 0, kind: 'plain' },
                { n: '02', title: 'Foundations of Project Management', meta: 'University of Toronto · 2022', indent: 40, kind: 'plain' },
                { n: '03', title: 'Google Cybersecurity Professional Certificate', meta: '2024 · the first deliberate move toward security', indent: 80, kind: 'amber' },
                { n: '04', title: 'Software Development Bootcamp', meta: 'Circuit Stream · 2024 · Full-stack JavaScript, Python, APIs', indent: 120, kind: 'plain' },
                { n: '05', title: 'Product Management with AI/ML', meta: 'ELVTR · 2024', indent: 160, kind: 'plain' },
                { n: '06', title: 'Mathematics & Physics', meta: 'The Open University · 2024–2026', indent: 200, kind: 'plain' },
                { n: '07', title: 'Computer Science & Engineering Certificate', meta: 'McGill University · May 2025 – Apr 2026 · completed', indent: 240, kind: 'plain' },
                { n: '08', title: 'BEng Cybersecurity', meta: 'Concordia University · Fall 2026 →', indent: 280, kind: 'dark' },
              ] as const).map((s) => {
                const isAmber = s.kind === 'amber'
                const isDark = s.kind === 'dark'
                return (
                  <div key={s.n} data-step="" style={{
                    marginLeft: s.indent, maxWidth: 640, position: 'relative',
                    display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, padding: '18px 20px',
                    background: isDark ? '#0D0D0C' : isAmber ? 'rgba(180,83,9,0.05)' : '#fff',
                    border: isDark ? '1px solid #0D0D0C' : isAmber ? '1px solid rgba(180,83,9,0.28)' : '1px solid rgba(13,13,12,0.1)',
                    borderLeft: isDark ? '2px solid var(--accent)' : isAmber ? '2px solid #B45309' : '2px solid rgba(13,13,12,0.3)',
                    borderRadius: 12,
                    boxShadow: isDark ? '0 12px 30px -22px rgba(0,0,0,0.6)' : '0 1px 2px rgba(0,0,0,0.03)',
                  }}>
                    <span data-amber-marker={isAmber ? '' : undefined} style={{ position: 'relative', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: isDark ? '#7FB5E6' : isAmber ? '#B45309' : '#8A8A83', paddingTop: 2 }}>
                      {s.n}
                      {isAmber && <span data-amber-ring="" style={{ position: 'absolute', left: -3, top: 2, width: 14, height: 14, borderRadius: '50%', border: '1.5px solid #B45309', transform: 'scale(0.6)', opacity: 0, pointerEvents: 'none' }}></span>}
                    </span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: isDark ? '#F5F5F3' : '#0D0D0C' }}>{s.title}</div>
                      <div style={{ marginTop: 5, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.04em', color: isDark ? '#7FB5E6' : isAmber ? '#B45309' : '#8A8A83' }}>{s.meta}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="toolkit" aria-label="Toolkit" style={{ background: 'transparent', padding: 'clamp(80px,10vw,124px) 0' }}>
          <div style={{ width: 'min(1160px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
            <div data-reveal="" style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 18, alignItems: 'start', marginBottom: 'clamp(32px,4vw,48px)' }}>
              <span style={{ paddingTop: 8, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>06</span>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>Toolkit</div>
                <h2 style={{ fontFamily: serif, fontOpticalSizing: 'auto', fontWeight: 500, margin: '13px 0 0', fontSize: 'clamp(34px,4.2vw,50px)', letterSpacing: '-0.02em', lineHeight: 1.05, color: '#0D0D0C' }}>Broad on purpose. Sharp where it matters.</h2>
              </div>
            </div>
            <div data-tool-grid="" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginLeft: 70 }}>
              {[
                ['Security', ['RBAC', 'Row-level security', 'JWT', 'argon2 / bcrypt', 'Helmet', 'audit-trail design', 'PIPEDA / PHIPA / Law 25']],
                ['Data', ['PostgreSQL', 'Prisma', 'SQL migrations', 'MongoDB', 'Redis']],
                ['Backend', ['Node.js', 'NestJS', 'Express', 'serverless', 'REST APIs']],
                ['Frontend', ['React 19', 'Next.js', 'TypeScript', 'Vite', 'Tailwind', 'PWA']],
                ['AI systems', ['Claude API', 'MCP servers', 'multi-agent workflows', 'RAG / embeddings', 'Inngest']],
                ['Product & delivery', ['roadmaps', 'requirements & user stories', 'Agile / SAFe', 'KPI design', 'Power BI', 'SQL']],
              ].map(([group, items]) => (
                <div key={group as string} data-tool="" style={{ padding: 22, border: '1px solid rgba(13,13,12,0.1)', borderRadius: 14, background: '#fff' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.11em', textTransform: 'uppercase', color: '#0D0D0C', paddingBottom: 14, borderBottom: '1px solid rgba(13,13,12,0.1)' }}>{group}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
                    {(items as string[]).map((t) => (
                      <span key={t} style={{ padding: '5px 9px', border: '1px solid rgba(13,13,12,0.1)', borderRadius: 999, fontFamily: 'var(--font-sans)', fontSize: 11, color: '#4A4A46' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" data-contact="" aria-label="Contact" style={{ background: '#101014', color: '#F5F5F3', padding: 'clamp(88px,11vw,140px) 0 0' }}>
          <div style={{ width: 'min(1120px,calc(100% - clamp(40px,8vw,80px)))', margin: '0 auto' }}>
            <div data-reveal="" style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 18, alignItems: 'start', marginBottom: 'clamp(36px,5vw,54px)' }}>
              <span style={{ paddingTop: 8, color: '#7FB5E6', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>07</span>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: '#7FB5E6', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></span>Contact · Montréal</div>
                <h2 style={{ fontFamily: serif, fontOpticalSizing: 'auto', fontWeight: 500, margin: '13px 0 0', fontSize: 'clamp(40px,5.2vw,64px)', letterSpacing: '-0.025em', lineHeight: 1.0, color: '#F5F5F3' }}>Two doors, both open.</h2>
              </div>
            </div>
            <div data-two-col="" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(18px,2.5vw,26px)', marginLeft: 70 }}>
              <div data-door="1" style={{ border: '1px solid rgba(255,255,255,0.16)', borderRadius: 16, background: 'rgba(255,255,255,0.03)', padding: 'clamp(26px,3vw,34px)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, letterSpacing: '.13em', textTransform: 'uppercase', color: '#7FB5E6' }}>Research & academia</div>
                <p style={{ margin: '16px 0 0', fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.66, color: 'rgba(255,255,255,0.7)' }}>If you work on privacy engineering, usable security, or the security of AI-agent systems — I’d like to talk. Supervisors, labs, collaborators.</p>
                <a href="mailto:ashfaaq.kazi@outlook.com?subject=Research" className="d-hover-fade" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 22, minHeight: 44, padding: '0 18px', borderRadius: 10, background: '#fff', color: '#0D0D0C', fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600 }}>Start a conversation →</a>
              </div>
              <div data-door="2" style={{ border: '1px solid rgba(255,255,255,0.16)', borderRadius: 16, background: 'rgba(255,255,255,0.03)', padding: 'clamp(26px,3vw,34px)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, letterSpacing: '.13em', textTransform: 'uppercase', color: '#7FB5E6' }}>Product & engineering</div>
                <p style={{ margin: '16px 0 0', fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.66, color: 'rgba(255,255,255,0.7)' }}>I take on a small number of product and engineering engagements alongside the BEng. If your system handles regulated data and real users, we should speak.</p>
                <a href="mailto:ashfaaq.kazi@outlook.com?subject=Engagement" className="d-hover-border-lighter" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 22, minHeight: 44, padding: '0 18px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.28)', color: '#F5F5F3', fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600 }}>Discuss a project →</a>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: 'clamp(34px,4vw,46px) 0 0 70px' }}>
              {[
                ['ashfaaq.kazi@outlook.com', 'mailto:ashfaaq.kazi@outlook.com'],
                ['+1 416-899-1692', 'tel:+14168991692'],
                ['GitHub · martiancoder12', 'https://github.com/martiancoder12'],
                ['LinkedIn · /in/ashfaaq-kazi', 'https://www.linkedin.com/in/ashfaaq-kazi/'],
              ].map(([label, href]) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="d-hover-border-light" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44, padding: '0 16px', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.03em', color: '#F5F5F3' }}>{label}</a>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginTop: 'clamp(56px,7vw,88px)', padding: '22px 0', borderTop: '1px solid rgba(255,255,255,0.14)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>
              <span>Montréal, Québec · Bilingual EN / FR</span>
              <span>© 2026 Ashfaaq Kazi</span>
            </div>
          </div>
        </section>

      </div></div>
    </div>
  )
}
