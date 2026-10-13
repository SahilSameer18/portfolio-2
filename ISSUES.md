Here are the technical issues only, grouped by area. Each is tagged **Measured** (reproduced in a real browser or build), **Code-read**, or **Unverified**.

## A. Behavior and accessibility bugs

**1. The skip link doesn't move focus. (High, Measured)**
- **Where:** `src/hooks/motion/smoothScroll.ts`, lines 21–32.
- **What happens:** The global click handler intercepts every `a[href^="#"]`, calls `preventDefault()` and then `lenis.scrollTo()`. That cancels the browser's default behavior of moving focus to the target.
- **Evidence:** After Tab then Enter on "Skip to content", focus stayed on the link, and the next Tab landed on the nav logo instead of inside `<main>`. This defeats the purpose of a skip link (WCAG 2.4.1).
- **Fix:** In `lenis.scrollTo`'s `onComplete`, set `tabindex="-1"` on the target and call `focus({ preventScroll: true })`.

**2. Anchor navigation never updates the URL. (Medium, Measured)**
- **Where:** Same handler as item 1.
- **What happens:** After clicking the "Skills" dock link, `location.hash` stayed empty. Sections can't be deep-linked or shared, and Back doesn't step through them.
- **Fix:** Call `history.pushState(null, '', href)` in the handler, or use `replaceState` if you don't want history entries.

**3. `aria-label` on a plain `<span>`. (Low, Measured)**
- **Where:** `SelectedWork.tsx`, lines 55–60, on the "(03)" count.
- **Evidence:** axe flags it as "not well supported on a span with no valid role", so screen readers may ignore it.
- **Fix:** Use `aria-hidden="true"` on the visual "(03)" plus an `sr-only` "3 projects".

**4. The nav count is read as "Work 03". (Low, Code-read)**
- **Where:** `Navigation.tsx`, lines 52–55. The `<sup>{countStr}</sup>` inside the link has no `aria-hidden`.

**5. The logo link's accessible name doesn't contain its visible text. (Low, Unverified)**
- **Where:** `Navigation.tsx`, lines 44–50. The visible text is "ss." but the `aria-label` is "Sahil Sameer — Home". That's a Label-in-Name issue (WCAG 2.5.3) for voice-control users.
- **Confidence:** axe flagged it once in a run with stubbed fonts and not on three clean reruns, so treat it as logic-based rather than reproduced.

**6. The scrollbar is hidden site-wide. (Low, Code-read)**
- **Where:** `globals.css`, lines 37–38, 54–55 and 67–72.
- **What happens:** Users lose the native position and length cue. The 2px progress bar partly compensates, but it's `aria-hidden` and only 2px tall. Consider keeping scrollbars on desktop.

**7. Heading levels used for styling. (Low, Measured)**
- **Where:** `Education.tsx`, line 46. School names are `<h4>` under an `<h3>` degree, but they aren't sub-sections. The same pattern appears in `Skills.tsx` with `h4` per category. The outline is valid, but the `h4`s add noise for screen-reader heading navigation.

## B. Performance

**8. The hero intro delays LCP by about 2 seconds on mobile. (High, Measured)**
- **Where:** `layout.tsx` inline script, `intro.ts`, and the `.intro` rules in `globals.css` (lines 179–194).
- **Evidence:** I used an emulated mobile profile (390 px, 4× CPU, ~1.6 Mbps, 150 ms latency), three runs each.

  | | Intro on | Intro off (reduced motion) |
  |---|---|---|
  | LCP | 4.28 s / 4.51 s / 4.35 s | 2.10 s / 2.69 s / 1.19 s |
  | FCP | 1.2–1.7 s | 1.2–2.0 s |

- **Cause:** The LCP element is the hero `<img>`, held at `opacity:0` until `startIntro` runs. That waits for `decode()` and fonts (or a 350 ms race), then animates for about 1.15 s.
- **Fix:** Gate the intro to desktop, play it once per session (`sessionStorage`), and skip it for `saveData` or slow connections. Alternatively, keep the photo visible and animate only the text.

**9. Main-thread work during startup. (Medium, Measured)**
- **Evidence:** Total blocking time was 190–580 ms under 4× throttling, with 4–6 long tasks per load.
- **Likely contributors (Code-read):**
  - `usePortfolioMotion.ts` calls `ScrollTrigger.refresh()` immediately (line 38) and again on `load` (lines 40–41).
  - `darkMorph.ts` calls `getComputedStyle` twice per dark section.
  - GSAP, Lenis, the cursor ring and IntersectionObservers all initialize in one `useEffect`.
- **Fix:** Defer non-critical setup with `requestIdleCallback`, and drop the double refresh.

**10. The animation libraries load even when they aren't used. (Medium, Measured and Code-read)**
- **Evidence:** The home page loads about 235 KB gzip of JS. Roughly 165 KB is the framework baseline (React and Next). One chunk of about 57 KB gzip contains GSAP, ScrollTrigger and Lenis.
- **What happens:** `usePortfolioMotion.ts` imports them statically, so reduced-motion users and bots download them even though most animation is skipped for them.
- **Fix:** Use `import()` inside the effect and load them only when motion is enabled.

**11. Image weight and formats. (Low, Measured)**
- `sahil-about.png` is a 774 KB, 1086×1322 palette PNG. Re-export it as WebP or AVIF.
- `next.config.ts` doesn't enable `images.formats: ['image/avif', 'image/webp']`.
- `skillbridgeAI.png` (439 KB) and `sahil-about2.png` (306 KB) are referenced nowhere in the repo.
- Blur placeholders are inlined, so the HTML is 159 KB raw (27 KB gzip). That's fine, but it's the reason it's large.

## C. Responsive layout

**12. The contact links row overflows at 360 px and below. (Medium, Measured)**
- **Where:** `Contact.tsx`, line 68: `ml-auto flex gap-6 …`, with no wrap.
- **Evidence:** `scrollWidth` was 368 at a 320 px viewport (48 px over) and 371 at 360 px (11 px over). At 340 px the "Résumé" link is visibly clipped ("Résum"). 375 px and wider are clean. 360 px is the most common Android width.
- **Fix:** Add `flex-wrap gap-y-2`.

**13. Overflow is hidden, not fixed. (Low, Unverified)**
- **Where:** `globals.css`, body `overflow-x: hidden`, with no matching rule on `html`.
- **Risk:** This is why item 12 clips instead of scrolling sideways. Some iOS Safari versions have historically ignored body-level `overflow-x` clipping. I couldn't test iOS.

**14. The first mobile screen has no headline. (Medium, Measured)**
- **Evidence:** At 390×844, the viewport shows only the portrait and the name. The `h2` headline starts below the fold, partly behind the fixed bottom dock.
- **Cause:** `Hero.tsx` uses a 460 px-tall photo plus absolute offsets such as `top-[370px]` for the surname.

**15. The bottom dock ignores safe areas. (Low, Unverified)**
- **Where:** `Navigation.tsx` uses `tablet:bottom-3.5`, and the viewport export has no `viewportFit: 'cover'`. On notched phones in standalone or landscape, the dock may sit over the home indicator.

## D. Security and configuration

**16. No security headers. (Medium, Measured on local `next start`)**
- **Evidence:** The response had no CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` or frame protection, and it sent `X-Powered-By: Next.js`. Vercel may add HSTS at the edge. I couldn't check the live headers from my sandbox.
- **Fix:** Add a `headers()` block in `next.config.ts` and set `poweredByHeader: false`.
- **Gotcha for CSP:** `layout.tsx` has an inline `<script>` (the intro bootstrap) and `JsonLd.tsx` injects inline JSON-LD. A strict CSP needs nonces or hashes for both.

**17. The résumé PDF can be indexed. (Medium, Measured)**
- **Where:** `/assets/sameer-resume.pdf` is linked from four places. `robots.ts` allows everything, and the response has no `X-Robots-Tag`.
- **Why it matters:** The sitemap comment says you left it out because it contains a phone number. Leaving it out of the sitemap doesn't stop Google from finding it through links.
- **Fix:** Add `{ key: 'X-Robots-Tag', value: 'noindex' }` for that path in `headers()`.

**18. Other people's personal files are in your public git history. (High, Measured)**
- **Where:** Commit `4c71cf0` added `anurag-maurya-resume.pdf` and `gourav-maurya-resume.pdf`, plus portraits. They were deleted later but remain in history.
- **Evidence:** Each PDF contains one email address and one phone-like number (counts only; I didn't print them).
- **Fix:** Rewrite history with `git filter-repo --path <file> --invert-paths` and force-push, or start a fresh repo from the current tree.

**19. `IS_PRODUCTION` treats an unset `VERCEL_ENV` as production. (Low, Code-read)**
- **Where:** `config/site.ts`, line 12.
- **What happens:** Any non-Vercel deployment, such as a staging box or Docker, would be indexable.

## E. Build, CI and dependencies

**20. `npm run type-check` fails on a fresh clone. (Medium, Measured)**
- **Evidence:** It reports 5 × TS2307 "Cannot find module" errors for the image imports in `portfolioData.ts`.
- **Cause:** `next-env.d.ts` is gitignored and only generated by `next build` or `next dev`. It passed once I had built.
- **Fix:** Run `next build` before type-checking in CI. The build already type-checks.

**21. The OG image's font fallback crashes the build. (Medium, Measured)**
- **Where:** `opengraph-image.tsx`, lines 12–28. It fetches Google Fonts at build time with a spoofed old User-Agent and regex-parses the CSS.
- **Evidence:** The comment says it falls back to the built-in font. When the fetch failed in my sandbox, the build crashed instead with "Cannot read properties of undefined (reading 'split')". I didn't isolate the exact cause.
- **Risk:** A Google Fonts outage or blocked network at build time would fail your deploy.
- **Fix:** Bundle a `.woff` or `.ttf` locally and `readFile` it, as you already do for `og-photo.jpg`.

**22. `sitemap.ts` uses a hand-edited date. (Low, Code-read)**
- **Where:** `PAGE_UPDATED = new Date('2026-10-03')`. It will go stale silently. Derive it from the build time or the git commit date.

**23. No CI and no tests. (Low, Measured)**
- There is no `.github/workflows`. A lint-plus-build workflow would catch items 20 and 21.
- `npm run lint` passes with 0 errors and 1 warning (an unused `eslint-disable` at `opengraph-image.tsx`, line 81).

**24. Dependency audit. (Low, Measured)**
- `npm audit --omit=dev` found 0 vulnerabilities.
- The full audit reports 5 "high" findings, all dev-only (`micromatch` → `fast-glob` → `@next/eslint-plugin-next` → `eslint-config-next`).
- `next` and `eslint-config-next` 16.4.0 are available, and so are patch updates for `postcss` and `@types/node`.

## F. Maintainability

**25. Magic-number layout. (Low, Code-read)**
- `Hero.tsx` and `SelectedWork.tsx` depend on many arbitrary pixel values (`mt-[-58px]`, `pb-[170px]`, `top-[370px]`, and similar).
- Several class strings are 400+ characters long. Your git log has a "fix: hero overlap on tablets" commit, and this pattern is what causes those regressions.
- Extract repeated class strings and use CSS clamp-based spacing.

**26. React key and state nits. (Low, Code-read)**
- `SelectedWork.tsx` uses `key={metric.value}` (it breaks if two metrics share a value) and `key={i}` for tags.
- The project image link's `aria-label` always says "Open live demo", even when the link falls back to the GitHub URL.
- `CopyEmailButton.tsx` doesn't clear its `setTimeout` on unmount or on rapid re-clicks.
- `usePortfolioMotion.ts` reads the reduced-motion preference once, so toggling it mid-session has no effect until reload.

