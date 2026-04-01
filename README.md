## Portfolio Website

**Live site:** https://portfolio-website-blue-alpha.vercel.app/

Personal portfolio built with Next.js and Tailwind CSS to showcase software projects, skills, and contact links.

---

## For reviewers

This repository is a small, production-deployed frontend project. It is structured for clarity: the App Router entrypoint lives under `app/`, reusable UI under `components/`, and static assets under `public/`. The site is statically prerendered where possible and hosted on Vercel.

---

## Tech stack

| Area | Tools |
|------|--------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), PostCSS, Autoprefixer |
| **Quality** | ESLint with [`eslint-config-next`](https://nextjs.org/docs/app/building-your-application/configuring/eslint) |
| **Fonts** | [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist Sans & Geist Mono via Google Fonts) |
| **Hosting** | [Vercel](https://vercel.com/) (CI from GitHub) |
| **Package manager** | npm |

---

## Skills & experience gained

- **Modern React & Next.js:** Built a client-facing site with the App Router, shared layout, and page-level composition instead of a single monolithic file.
- **Component-driven UI:** Split the page into focused sections (About, Projects, Contact, navigation, footer) and small presentational pieces for easier maintenance and reuse.
- **Responsive, utility-first CSS:** Used Tailwind for layout, spacing, and typography consistently across breakpoints.
- **Performance-minded defaults:** Leveraged Next.js font optimization and static generation for fast first loads on simple marketing-style pages.
- **Discoverability:** Set site `metadata` (title, description) for clearer search and social previews.
- **Delivery pipeline:** Connected the repo to Vercel, configured production builds, and kept dependencies aligned with platform security expectations (e.g. patched Next.js releases).

---

## Purpose

- Present selected projects with screenshots, summaries, GitHub links, Live project links to hosted demos.
- Provide a clean single-page experience with About, Projects, and Contact sections.
- Serve as a central, easy-to-update portfolio for applications and networking.

---

## Setup and run

Start the development server from the **project root**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The main page is composed in `app/page.js`; the root layout and global styles live in `app/layout.js` and `app/globals.css`. The page updates as you edit files.

Useful scripts:

```bash
npm run dev    # start local dev server
npm run lint   # run ESLint
npm run build  # production build
npm run start  # serve production build locally
```

---

## Deploy notes

- **Platform:** Vercel (native Next.js support).
- **Typical production flow:** `npm install` → `npm run build`; runtime is handled by Vercel (you do not run `npm run dev` in production).
- **Elsewhere:** Use a Node.js version compatible with your Next.js major version.
- **Static assets:** `public/` (e.g. images referenced from components).
