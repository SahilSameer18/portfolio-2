# Anurag Maurya — Portfolio

Portfolio for Anurag Maurya, Print and Digital Media Designer (Macromedia Hamburg).

## Features

- **Multi-language Support**: German (DE) and English (EN) toggle with full localized copy.
- **Fluid Motion & Scroll**: Integrated Lenis smooth scrolling, GSAP ScrollTrigger, SplitText, and pointer spring physics.
- **Projects Showcase**: 
  - Hamburg Messe + Congress (Medienkonzepte & Gestaltungskonzepte)
  - Lumiere (Restaurant Website Concept)
  - Café Farol (Website Concept)
  - Medientage Hamburg 2026 (Publication & Event Concept)
  - Safarai (Brand Identity & Stationery)
- **Responsive Layout**: Mobile-first responsive grid, custom typography (`Barlow Condensed`, `DM Sans`, `Italiana`).
- **Accessible Interactions**: Floating dock navigation, copy-email feedback, screen-reader optimizations.

## Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:4173](http://localhost:4173).

## Project Structure

- `dist/index.html` — Main HTML structure
- `dist/style.css` — Core design system & layout styles
- `dist/selected-work.css` — Project gallery styles
- `dist/motion.css` — Motion system styles
- `dist/i18n.css` & `dist/i18n.js` — Language switching system (DE/EN)
- `dist/motion.js` — GSAP + Lenis scroll and animations
- `dist/script.js` — Interactive UI elements (e.g. copy email)
- `dist/vendor/` — Vendor scripts (GSAP, Lenis, ScrollTrigger, SplitText)
- `dist/assets/` — Images, project mockups, and résumé PDF
