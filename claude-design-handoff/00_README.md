# Handoff — Ashfaaq Kazi Portfolio Rebuild
**Prepared July 2026 · For Claude Design (wireframe → build)**

## The narrative (locked)

*A decade-long study of trust, descending one layer of abstraction at a time:*
**L1** Trust between humans (reimbursement casework, 2018–2020) → **L2** Trust as law (paralegal license → technical writer: SOPs, Six Sigma process design, contract review, 2017–2022) → **L3** Trust as product (PM leading program launches → Product Owner, 300K+ members, Privacy & Compliance Lead, 2022–2025) → **L4** Trust as code (engineering, Laboratoires Structure, Rouge on Blue contract) → **L5** Trust as science (BEng Cybersecurity, Concordia, fall 2026).

Key decisions (confirmed with Ashfaaq):
- **PSP360 is the flagship project.**
- **The graduate trajectory (MMath Waterloo IQC → PhD post-quantum cryptography) is revealed only in the Research section**, never in the hero.
- **Wordmark stays "Ashfaaq Kazi"** — no thematic rename.
- **Rouge on Blue** was a short-term Senior PM contract, concluded April 2026 as a planned bridge to school — frame it that way.
- **the-indication and Cadence share one diptych tile** — artifacts of the two McKesson lives (Specialty Health years / loyalty PO years).
- Six showcased projects total; everything else lives in a one-line archive strip.

## Files in this handoff

| File | Contents |
|---|---|
| `01_COPYDECK.md` | Final-voice copy for every section: hero, five journey layers, now & next, research direction, six project slots, credentials ladder, toolkit, archive, contact, SEO meta. |
| `02_DESIGN_ANIMATION_BRIEF.md` | Creative concept ("The Descent"), design tokens, typography, per-section layout and GSAP choreography, motion system rules, accessibility, acceptance checklist. |

## Stack context

Existing site: React 19 + Vite + Tailwind + shadcn, GSAP + @gsap/react already installed, deployed on Vercel (`ash-portfolio-website`). Rebuild in place or fresh — designer's call — but keep Vite/React and the Vercel SPA rewrite.

## Skill references (local, read before building)

- GSAP skills: `~/Documents/Claude Skills/Claude Design Skills/gsap-skills/skills/` — follow `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance`.
- Marketplace bundles: `~/Documents/Claude Skills/Claude Design Skills/claudedesignskills/plugins/bundles/` — **not needed** for this build (no locomotive-scroll, no barba.js, no 3D). See Design Brief §4.0.

## Source material

- Resume (facts, metrics, dates): `../Ashfaaq_Kazi_Resume_MoCA_Cognition_PM (1).pdf`
- Current live site (base tokens to evolve): https://ash-portfolio-website.vercel.app
