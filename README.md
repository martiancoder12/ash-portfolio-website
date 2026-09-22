# Ash Portfolio Website

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** for build tooling and dev server
- **Tailwind CSS 3** with the shadcn/ui component library
- **React Router 7** for routing

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # type-check and build for production -> dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Deployment

Deployed on [Vercel](https://vercel.com) under the project `ash-portfolio-website`.
The build command is `npm run build` and the output directory is `dist`.
`vercel.json` adds a SPA fallback rewrite so client-side routes resolve on refresh.

**Production URL:** https://ashfaaqkazi.ca

| Host                    | Behaviour                        |
| ----------------------- | -------------------------------- |
| `ashfaaqkazi.ca`        | Serves the site (apex)           |
| `www.ashfaaqkazi.ca`    | 308 redirect to the apex         |
| `ash-portfolio-website.vercel.app` | Vercel-assigned alias |

### Deploying

Pushing to the `main` branch triggers an automatic production deployment. To deploy
manually from a local checkout:

```bash
vercel          # preview deployment on a unique URL
vercel --prod   # promote to the production domains
```

Note that `vercel --prod` deploys the working directory as-is — uncommitted changes are
included, and unpushed commits are not reflected on GitHub. Commit and push first if you
want `main` to match what is live.

### DNS

The domain is registered at GoDaddy, which also hosts the DNS zone (nameservers
`ns61`/`ns62.domaincontrol.com`). The records pointing it at Vercel are:

| Type  | Name  | Value                                 |
| ----- | ----- | ------------------------------------- |
| A     | `@`   | `216.198.79.1`                        |
| A     | `@`   | `64.29.17.1`                          |
| CNAME | `www` | `4ce31613c400b91a.vercel-dns-017.com` |

These are the values Vercel recommended for this domain; confirm against the project's
Domains tab before changing them, as Vercel rotates its recommended IPs over time. TLS
certificates are issued and renewed automatically by Vercel.

## Project structure

```
src/
  components/ui/   shadcn/ui components
  hooks/           custom React hooks
  lib/             shared utilities
  pages/           page components
  App.tsx          root component
  main.tsx         app entry point
index.html         HTML entry point
vite.config.ts     Vite configuration
tailwind.config.js Tailwind theme configuration
```
# Production Study Lab

The complete ENGR 213 and ELEC 275 lab is served at https://ashfaaqkazi.ca/study-lab/.
Its validated static build is checked into `public/study-lab`, including images,
fonts, KaTeX, GSAP, teaching flows, and the APA reference library. Vercel serves
the lab before the portfolio SPA fallback. Portfolio navigation opens that full
document; other portfolio and blog routes keep their existing behavior.

To update it after testing and building the source lab, run
`node scripts/sync-study-lab.mjs /absolute/path/to/ash-study-lab/dist`, then build
and deploy this portfolio project. The importer mounts relative assets under
`/study-lab/` and adds a link back to the portfolio. No textbook PDF is included.

### ELEC 275 teaching revision

The Study Lab snapshot includes eight circuit concept lessons, two complete methods for each of P1–P5, six explained drills, named-rule accordions, and a printed/PDF page reference map. New routes are `#elec-P1-a` through `#elec-P5-b`, and `#elec-references`. Textbook attribution: Rizzoni & Kearns (2022), seventh edition. Original source files and the independent numerical/UI checks live in the adjacent `ash-study-lab` project. No textbook PDF or original practice document is published.
