# Sahil Sameer Siddique — Portfolio

Portfolio of **Sahil Sameer Siddique**, a backend-focused full stack developer (Node.js, PostgreSQL, MongoDB, React, AI).
An editorial, single-page site with scroll-driven motion, built to be fast, accessible and easy to find in search.

**Live:** https://sahil-sameer-portfolio.vercel.app

## Highlights

- **Editorial design, hand-built motion.** Cinematic hero intro, scroll reveals, a light-to-dark colour morph between sections, a trailing cursor ring and Lenis smooth scrolling. Everything respects `prefers-reduced-motion` and touch devices.
- **Server-first Next.js.** The page and every section are React Server Components; only two small client islands ship JavaScript (`MotionController` and `CopyEmailButton`).
- **Search-ready.** Metadata API, canonical URL, JSON-LD (`Person`, `WebSite`, `ProfilePage`), generated Open Graph / Twitter image, favicon and Apple icon, `sitemap.xml`, `robots.txt` and Google Search Console verification. Preview deployments are automatically `noindex`.
- **Responsive and accessible.** Layout audited from 320 px to 2560 px (side dock on desktop, bottom dock on tablet and phone), skip link, semantic landmarks, keyboard-friendly links, screen-reader-safe arrows and "opens in new tab" hints.
- **Content lives in one file.** Text, skills, education and projects are edited in `src/data/portfolioData.ts`; nothing is hard-coded across components.

## Featured projects

| Project | What it is |
|---|---|
| [**PrepStack**](https://prepstack-ss.vercel.app) | Interview prep in one place: DSA sheet tracking, CS notes, roadmaps and AI-generated project ideas. |
| [**InForge**](https://inforge-s.vercel.app) | Gmail triage where the AI only suggests and a fixed rule engine decides, with background job queues and one-click undo. Code available on request. |
| [**VaultDrive**](https://vaultdrive-s.vercel.app) | Cloud storage with direct-to-cloud uploads, nested folders, trash recovery and secure sharing. |

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Styling | Tailwind CSS v4 (`@theme` tokens, custom `tablet` / `phone` / `desk` / `wide` variants) |
| Motion | GSAP + ScrollTrigger, Lenis |
| Images and fonts | `next/image` with blur placeholders, `next/font` (Barlow Condensed, Italiana, DM Sans) |
| Quality | ESLint (`eslint-config-next`), strict TypeScript |
| Hosting | Vercel |

## Getting started

Requires Node.js 24.x (see `engines` in `package.json`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Customising

- **Content:** `src/data/portfolioData.ts` (name, bio, skills, education, projects, résumé path).
- **Identity and SEO:** `src/config/site.ts` (name, role, description, social profiles, site URL).
- **Colours:** `src/app/globals.css` (`@theme static` tokens) and `src/config/colors.ts` (mirror used by the generated icons and Open Graph image).
- **Images:** `public/assets/` (project screenshots, hero and about photos, résumé PDF).

### Environment variables (optional)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL. Defaults to the Vercel address; set it when adding a custom domain. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console meta-tag verification token. |

## Project structure

```text
src/
├── app/            layout (metadata, fonts), page, icons, Open Graph image, sitemap, robots, 404
├── components/     Hero, SelectedWork, About, Skills, Education, Contact, Navigation, JsonLd + 2 client islands
├── config/         site.ts (identity, URLs), colors.ts (palette mirror)
├── data/           portfolioData.ts (all page content)
├── hooks/          usePortfolioMotion + motion/ (intro, reveals, darkMorph, cursor, smoothScroll, progress, activeSection)
└── types/          shared TypeScript types
public/assets/      images and résumé PDF
```

Animations are attached through `data-motion="..."` attributes, so GSAP selectors stay independent from styling classes.

## Deployment

Deployed on Vercel from the `main` branch. Production builds are indexable; every other deployment (previews) serves `noindex`, an empty sitemap and `Disallow: /`.

## Author

Built by **[Sahil Sameer Siddique](https://sahil-sameer-portfolio.vercel.app)** — [GitHub](https://github.com/SahilSameer18) · [LinkedIn](https://www.linkedin.com/in/sahil-sameer-siddique/).



