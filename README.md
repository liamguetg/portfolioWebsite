## Portfolio Website

Personal portfolio site built with Next.js and Tailwind CSS to showcase software projects, skills, and contact links.

## Purpose

- Present selected projects with screenshots, summaries, and GitHub links.
- Provide a clean single-page experience with About, Projects, and Contact sections.
- Serve as a central, easy-to-update portfolio for applications and networking.

## Setup and Run

From the repository root:

```bash
cd portfolio-website
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

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

## How to Add New Projects

Project data is centralized in `portfolio-website/components/data/projects.js`.

1. Add a new object to the exported `projects` array with:
   - `id` (unique string)
   - `title`
   - `imageSrc` (path under `/public`, e.g. `/images/my-shot.png`)
   - `imageAlt`
   - `highlights` (array of short bullets)
   - `githubUrl`
   - `additionalImages` (labels/placeholders)
   - `additionalDetails` (extra bullets)
2. Add the screenshot file to `portfolio-website/public/images/`.
3. Run `npm run lint` and `npm run dev` to verify rendering.
