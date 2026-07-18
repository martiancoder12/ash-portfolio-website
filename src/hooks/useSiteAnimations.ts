import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import type { RefObject } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin)

// Elements that fade + rise into view as they enter the viewport.
// Targeted by existing structural classes so the JSX stays clean.
const REVEAL_SELECTOR = [
  '.stats-grid > div',
  '.section-header',
  '.profile-copy',
  '.profile-cards .info-card',
  '.featured-project',
  '.project-row',
  '.skill-card',
  '.experience-card',
  '.contact-inner > *',
].join(', ')

/**
 * Sets up the site's motion layer: hero entrance, scroll reveals, stat
 * count-ups, smooth in-page navigation, active-link highlighting, a scroll
 * progress bar and a subtle hero-watermark parallax.
 *
 * All movement lives inside a `prefers-reduced-motion: no-preference` block,
 * so reduced-motion visitors get a fully static, fully visible page.
 */
export function useSiteAnimations(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current
      if (!root) return

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // ---- Smooth in-page navigation (offsetting the sticky nav) ----
      const anchors = gsap.utils.toArray<HTMLAnchorElement>('a[href^="#"]', root)
      const onAnchorClick = (event: Event) => {
        const link = event.currentTarget as HTMLAnchorElement
        const hash = link.getAttribute('href') || ''
        if (hash.length < 2) return
        const target = root.querySelector(hash)
        if (!target) return
        event.preventDefault()
        const nav = root.querySelector('.top-nav') as HTMLElement | null
        const offset = (nav?.offsetHeight ?? 0) + 12
        gsap.to(window, {
          duration: prefersReduced ? 0 : 0.8,
          ease: 'power2.inOut',
          scrollTo: { y: target as HTMLElement, offsetY: offset },
          overwrite: 'auto',
        })
      }
      anchors.forEach((a) => a.addEventListener('click', onAnchorClick))

      // ---- Active nav-link highlighting ----
      const navLinks = gsap.utils.toArray<HTMLAnchorElement>('.nav-links a', root)
      const setActive = (hash: string) => {
        navLinks.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === hash))
      }
      navLinks.forEach((link) => {
        const hash = link.getAttribute('href') || ''
        const section = hash.length > 1 ? root.querySelector(hash) : null
        if (!section) return
        ScrollTrigger.create({
          trigger: section as HTMLElement,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => self.isActive && setActive(hash),
        })
      })

      // ---- Motion-only enhancements (skipped for reduced-motion visitors) ----
      const mm = gsap.matchMedia(root)
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Hero entrance
        gsap
          .timeline({ defaults: { ease: 'power3.out', duration: 0.85 } })
          .from('.hero .eyebrow', { y: 16, autoAlpha: 0 })
          .from('.hero h1', { y: 26, autoAlpha: 0 }, '-=0.62')
          .from('.hero-copy', { y: 22, autoAlpha: 0 }, '-=0.64')
          .from('.hero-actions', { y: 18, autoAlpha: 0 }, '-=0.66')
          .from('.hero-panel', { y: 26, autoAlpha: 0 }, '-=0.72')

        // Scroll reveals — batched so grids stagger together, one-time
        const revealEls = gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR, root)
        gsap.set(revealEls, { autoAlpha: 0, y: 24 })
        ScrollTrigger.batch(revealEls, {
          start: 'top 86%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              stagger: 0.08,
              overwrite: true,
            }),
        })

        // Stat count-ups (preserve the leading-zero mono styling)
        gsap.utils.toArray<HTMLElement>('.stats-grid strong', root).forEach((el) => {
          const raw = (el.textContent || '').trim()
          const end = parseInt(raw, 10)
          if (Number.isNaN(end)) return
          const width = raw.length
          const counter = { value: 0 }
          el.textContent = ''.padStart(width, '0')
          ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () =>
              gsap.to(counter, {
                value: end,
                duration: 1.2,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = String(Math.round(counter.value)).padStart(width, '0')
                },
              }),
          })
        })

        // Thin scroll-progress bar
        gsap.to('.scroll-progress', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
        })

        // Gentle parallax on the giant "AK" watermark
        gsap.fromTo(
          '.hero',
          { '--ak-y': '0px' },
          {
            '--ak-y': '72px',
            ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
          },
        )
      })

      return () => {
        anchors.forEach((a) => a.removeEventListener('click', onAnchorClick))
      }
    },
    { scope },
  )
}
