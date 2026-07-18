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
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production -> dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to the `main` branch triggers an
automatic production deployment. The build command is `npm run build` and the output
directory is `dist`.

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
