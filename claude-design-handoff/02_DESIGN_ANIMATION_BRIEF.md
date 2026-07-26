# Ashfaaq Kazi — Design & Animation Brief
**For Claude Design · v1.0 · July 2026 · Companion to `01_COPYDECK.md`**

---

## 1. Creative concept: "The Descent"

The page is a controlled descent through five layers of abstraction — humans → law → product → code → science. **The scroll is the descent.** Everything in the design system serves this one metaphor:

- Layers are labelled `L1…L5`, like a technical diagram or a geological cross-section.
- A persistent **depth gauge** lives in the left margin (desktop): a vertical rule with five nodes that fills as the reader descends, always showing the current layer (`L3 — Trust as product`).
- The deeper the reader scrolls, the *quieter and more technical* the visual language becomes — the Journey opens almost warm and human; by the Research section the page is all hairlines, mono type and numbered questions. Restraint is the destination.

**One-line brief:** a legal dossier that reads like a lab notebook, animated like a well-run product.

## 2. Design philosophy — "an ode to product instincts"

The site must *demonstrate* product judgment, not claim it. Non-negotiables:

1. **Everything earns its place.** No ornament without narrative function. If an animation doesn't clarify the descent, cut it.
2. **Hierarchy is the design.** The reader should be able to scan only eyebrows, numbers and H2s and still get the whole story.
3. **Metrics are UI, not prose.** Numbers appear in chips, panels and gauges — consistent shape everywhere, like a design system.
4. **States are honest.** Live projects say Live; pre-dev says pre-dev; the contract says concluded. The site models the same integrity the copy claims.
5. **Motion is choreography, not decoration.** One easing family, one duration scale, enter-once-then-settle. The page never re-performs for a reader scrolling back up except the Journey layers, which reverse intentionally (descending back up is part of the metaphor).

## 3. Design tokens

Evolve the current paper/ink system (already live and well-regarded) — keep its bones, sharpen its voice.

**Color**
| Token | Value | Use |
|---|---|---|
| `--paper` | `#FFFFFF` | base |
| `--surface` | `#FAFAF9` | alternating bands (warm, not clinical) |
| `--ink` | `#0D0D0C` | primary text |
| `--body` | `#4A4A46` | paragraph text |
| `--muted` | `#8A8A83` | captions, era tags |
| `--line` | `rgba(13,13,12,0.10)` | hairlines |
| `--accent` | `#1D4ED8 → keep current #185FA5` | links, active gauge node |
| `--signal` | `#B45309` (amber) | sparingly: "deliberate move" markers, the Research trajectory line. One warm signal color that only appears at pivot points — readers learn it means *intention*. |
| `--deep` | `#101014` | the Research + Contact sections may sit on near-black ink: the bottom of the descent is dark, quiet, confident. |

**Typography** — three voices, three jobs:
- **Display serif** (Fraunces, or Newsreader): H1/H2 and layer titles. The human, authored voice. Optical sizing, tight leading (1.02–1.08), `-0.02em` tracking.
- **Grotesque** (keep Geist): body, UI, chips. 17–18px body, 1.6 line-height, max measure 68ch.
- **Mono** (keep Geist Mono): eyebrows, era tags, metric chips, layer labels (`L1`), the depth gauge, archive strip. Uppercase, `0.12em` tracking, 12–13px. Mono = the documentary voice; every "fact" on the page wears mono.

**Type scale (desktop):** H1 64–72px · H2 40–48px · Layer title 28–32px · Body 17px · Caption/mono 12–13px. Fluid via `clamp()`.

**Layout:** 12-col grid, max width 1200px, generous vertical rhythm (sections 140–180px apart). Keep the faint `paper-grid` background (44px) — it is the dossier's graph paper. Hairline rules separate sections; no cards-in-cards. Radius stays small (7–12px); shadows stay almost invisible.

## 4. Section-by-section layout & motion

Stack: React 19 + Vite + GSAP (already installed: `gsap`, `@gsap/react`). **Use the official GSAP skills at `~/Documents/Claude Skills/Claude Design Skills/gsap-skills/skills/` — follow `gsap-react` (useGSAP + scope + contextSafe), `gsap-scrolltrigger` (pin/scrub/batch), `gsap-timeline`, and `gsap-performance` exactly.** All plugins including SplitText and ScrollSmoother are free in the public `gsap` npm package — no auth needed. The `claudedesignskills` marketplace bundle (locomotive-scroll, barba.js, pixijs) is **not** needed here: single page, native scroll, GSAP only. Do not add locomotive-scroll — it fights ScrollTrigger in React.

### 4.0 Global setup
- Register once: `gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)` (ScrollToPlugin for nav anchors).
- All animation code inside `useGSAP(() => {…}, { scope: shellRef })` per `gsap-react`. Cleanup is automatic.
- `html { scroll-behavior: auto }` (already set) — ScrollToPlugin owns smooth anchors.
- Honor reduced motion via `gsap.matchMedia()`:
  - `"(prefers-reduced-motion: no-preference)"` → full choreography.
  - `"(prefers-reduced-motion: reduce)"` → content fully visible, no scrub/pin, instant states.
- After webfonts load, call `ScrollTrigger.refresh()`.

### 4.1 Depth gauge (signature element)
Fixed left rail, desktop only (hidden < 1100px): a 1px vertical line spanning viewport center, five nodes labelled `L1–L5` in mono, plus a tiny label reading the current layer name. Implementation: one standalone `ScrollTrigger.create({ trigger: journeySection, start: "top center", end: "bottom center", onUpdate: self => … })` — progress maps to node fill and the active label. Gauge fades in only while inside the Journey (toggleActions via callbacks), and its final state (`L5`) persists subtly through Research → Contact, a quiet reminder of the destination.

### 4.2 Hero
Layout: left — eyebrow, H1 (serif, two lines), sub-copy, CTAs. Right — the "Current position" panel: hairline-bordered card, mono label, short lines with key/value rows. Keep it asymmetrical; lots of paper around it.

Motion (on load, one timeline, ~1.4s total):
1. SplitText the H1 into lines → `y: "110%"`, clip reveal, stagger 0.08s, `power4.out`.
2. Eyebrow + sub-copy fade/`y:12` up, staggered after H1 starts.
3. Right panel: `clipPath: inset(0 0 100% 0)` → `inset(0)` wipe, 0.7s, then its rows stagger in.
4. The scroll cue ("Begin the descent ↓") gets a slow, infinite `y` bob — the only looping animation on the whole page. Everything else performs once and settles.

### 4.3 The Journey (the centerpiece — get this right first)
Layout: alternating-layer editorial stack, five full-width bands. Each layer: left column = giant mono layer marker (`L1`…`L5`, 96px, 8% opacity, half-bleeding off the column edge), era tag + role in mono, serif title; right column = paragraph + metric chips. A single 1px vertical "spine" runs through all five bands connecting them — the visual thread the reader descends along.

Motion:
- Spine draws itself with scroll: a 2px-tall gradient scaleY tween, `scrub: 0.6`, from Journey top to bottom.
- Each layer content: `scrollTrigger: { start: "top 75%", toggleActions: "play reverse play reverse" }` — paragraph and chips rise 24px and fade in, chips stagger 0.05. Reversal on scroll-back is *intentional here* (re-ascending the layers).
- Layer markers (`L1`…) parallax slightly (`y` scrub between -30 and 30, `scrub: true`) — the only parallax on the page; depth, not decoration.
- The L5 band ends with the metric chip "The descent continues →" which scrolls to Research. Treat it as a doorway: on click, a 300ms full-page ink-colored wipe (clip-path circle or bar) before the anchor jump — the single most dramatic transition allowed.

### 4.4 Now & Next
Two hairline columns, NOW / NEXT in mono labels. Readiness chips row beneath. Motion: simple — both columns fade/rise on enter (`once: true`), chips `ScrollTrigger.batch` stagger. This section is a *rest* between two heavy sections; calm is the design.

### 4.5 Research direction (the reveal)
Visual break: this section may flip to `--deep` near-black with paper-colored text — the reader has reached the bottom of the descent. Three numbered thesis problems, each with a hairline top rule; the trajectory line ("BEng → MMath → PhD") rendered in `--signal` amber — the only place that color leads.

Motion: section enters with a slow fade (0.9s — darker rooms take longer to walk into). The three questions stagger up with generous delay between them (0.15s — they should feel considered, not listed). The trajectory line draws left-to-right via SVG stroke or scaleX scrub across the final paragraph. No pin, no parallax. Gravity, not spectacle.

### 4.6 Selected work
- **PSP360 flagship panel:** full-width band, inverted (ink background) to distinguish flagship from list. Left: tag, name, description, trust-feature checklist (checks draw in with a quick stroke animation on enter). Right: "at a glance" fact panel (dl) + stack chips + live link. Enters with a clip-path wipe from below, `once: true`.
- **Projects 02–05 (Conductor, URIM, Codr, Cartograph):** numbered rows, hairline separators — same row grammar as the current site (index / body / actions), tightened. Each row: tag (mono, signal-adjacent), title, 2-line description, chip row, links. `ScrollTrigger.batch(".project-row", { start: "top 85%", onEnter: batch => gsap.from(batch, { y: 28, opacity: 0, stagger: 0.08, once: true }) })`.
- **06 — The McKesson diptych:** one tile, two halves split by a vertical hairline. Header spans both: "Proof of work — two careers in artifacts." Left half = the-indication (Specialty Health years), right half = Cadence (loyalty years); each half has its own mono tag, description, chips, link. Hover: the hovered half gently expands to ~55% (flex-grow transition, 0.4s `power2.out`) — a quiet interactive nod to "two lives, one career." Enters as one tile with a 0.8s rise.

### 4.7 Credentials ladder
Eight entries as an ascending staircase, bottom-left (2017) to top-right (2026 →): each step is a hairline card, offset one column right and one row up from the last. Entry #3 (Google Cybersecurity, 2024) carries the amber `--signal` marker and the note "the first deliberate move" — the pivot point of the whole site, visibly marked. Motion: steps rise and stagger in on scroll (0.06 stagger), the amber marker pulses once on enter, then never again. On mobile the staircase collapses to a clean vertical timeline.

### 4.8 Toolkit
Six small groups, Security **first** (order matters: Security → Data → Backend → Frontend → AI systems → Product & delivery). Plain chips on paper, hairline group titles. No motion beyond a single batch fade — by this point the page is documentation.

### 4.9 Archive strip
One mono line, muted, wrapping gracefully, inline links underlined on hover. No cards, no animation. It should feel like a footnote — because it is one.

### 4.10 Contact
Dark (matching Research), "Two doors, both open": two hairline-bordered panels side by side (Research & academia / Product & engineering), each with its copy and a single CTA. Contact links row beneath, footer line last. Motion: panels wipe in with clip-path from opposite directions, 0.6s, `once: true`. The depth gauge makes its final appearance at `L5` beside the H2, then the page ends.

## 5. Motion system (global rules)

- **Easing:** `power4.out` for entrances, `power2.out` for hovers, `power1.inOut` for scrubs. Nothing else.
- **Durations:** micro 0.15–0.25s (hovers) · standard 0.5–0.7s (elements) · section 0.8–1.4s (hero timeline, dark-section fades).
- **Animate only `transform` and `opacity`** (+ `clipPath` on panels). Never layout properties. (Per `gsap-performance`.)
- **One looping animation total** (hero scroll cue). Everything else performs once and settles; only Journey layers reverse.
- **No** scroll-jacking, no smooth-scroll libraries, no horizontal-scroll gimmicks, no 3D, no particles. The sophistication is in the restraint.
- Kill/reset correctness: everything inside `useGSAP` scope; `ScrollTrigger.refresh()` after fonts; `once: true` wherever reversal isn't part of the metaphor.

## 6. Responsive & accessibility

- Desktop-first design, but the Journey spine and staircase collapse to simple vertical timelines ≤ 768px; depth gauge hidden ≤ 1100px (replaced by a slim `L1–L5` progress bar under the nav).
- All scrubs disabled under `prefers-reduced-motion`; content defaults to visible (build HTML/CSS as the complete document, enhance with JS — never `opacity: 0` in raw CSS without a JS-gated class).
- Focus states: 2px `--accent` outline, visible on all links/CTAs. Color contrast ≥ 4.5:1 everywhere (check `--signal` on dark — use a lighter amber if needed).
- Semantic HTML: one `h1`, sections with `aria-label`, the gauge is `aria-hidden` (its info duplicates the visible section headers).

## 7. Acceptance checklist for the wireframe

- [ ] A reader scanning only mono labels (eyebrows, era tags, layer markers) can reconstruct the whole story.
- [ ] The descent metaphor is legible without reading a word: gauge, spine, darkening page.
- [ ] The amber signal color appears exactly three times: L5 doorway, the 2024 credential marker, the BEng→MMath→PhD trajectory.
- [ ] PSP360 is unmistakably the flagship; the diptych reads as one tile with two halves.
- [ ] The page feels calm. If anything calls attention to itself, it gets cut.
