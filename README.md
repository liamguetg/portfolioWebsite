## Portfolio Website

Personal portfolio site built with Next.js and Tailwind CSS to showcase software projects, skills, and contact links.

## Purpose

- Present selected projects with screenshots, summaries, GitHub links, and optional **Live project** links to hosted demos.
- Provide a clean single-page experience with About, Projects, and Contact sections.
- Serve as a central, easy-to-update portfolio for applications and networking.

## Setup and Run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Useful scripts (run inside `portfolio-website`):

```bash
npm run dev    # start local dev server
npm run lint   # run ESLint
npm run build  # production build
npm run start  # serve production build
```

## Deploy Notes

- Recommended platform: Vercel (native Next.js support).
- Production deploy command flow:
  - `npm install`
  - `npm run build`
  - `npm run start` (or let Vercel handle runtime)
- If deploying elsewhere, ensure Node.js version is compatible with Next.js 15.
- Static assets are served from `portfolio-website/public`.


