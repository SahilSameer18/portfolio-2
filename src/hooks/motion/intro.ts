import gsap from 'gsap';
import type Lenis from 'lenis';
import { m } from './selector';

const HOLD = 0.2;
const DUR = 0.95;

/**
 * Hero opening sequence (photo reveal, then staged fade-ins). Skippable by any input.
 * Returns a cleanup that cancels this run (the intro state is left for a re-run to pick up).
 */
export function initIntro(root: HTMLElement, lenis: Lenis, isMotionOk: boolean): () => void {
  const fig = document.querySelector('[data-motion="hero-photo"]') as HTMLElement | null;
  const heroImg = fig?.querySelector('img') as HTMLImageElement | null;
  const runIntro = isMotionOk && root.classList.contains('intro') && fig && heroImg && window.scrollY === 0;

  const introDone = () => {
    root.classList.remove('intro', 'intro-go', 'intro-lift');
    lenis.start();
  };

  if (!runIntro) {
    if (root.classList.contains('intro')) introDone();
    else lenis.start();
    return () => {};
  }

  let over = false;
  let tl: gsap.core.Timeline | null = null;
  let skipBtn: HTMLButtonElement | null = null;
  let fallback: ReturnType<typeof setTimeout> | undefined;
  const skipEvents = ['wheel', 'touchmove', 'keydown', 'pointerdown'];

  const finishIntro = () => {
    if (over) return;
    over = true;
    clearTimeout(fallback);
    skipEvents.forEach((t) => window.removeEventListener(t, finishIntro));
    if (tl) {
      tl.progress(1);
      tl.kill();
      tl = null;
    }
    gsap.set([fig, heroImg], { clearProps: 'all' });
    gsap.set(m('dock'), { clearProps: 'transform' });
    introDone();
    skipBtn?.remove();
    skipBtn = null;
  };

  const startIntro = () => {
    if (over || window.scrollY > 0) return finishIntro();
    lenis.stop();

    const r = fig.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const iw = heroImg.naturalWidth || 864;
    const ih = heroImg.naturalHeight || 1184;

    if (!r.width || !r.height) return finishIntro();

    const sf = Math.max(r.width / iw, r.height / ih);
    const x1 = r.left + (r.width - iw * sf) * 0.5;
    const y1 = r.top + (r.height - ih * sf) * 0.38;

    const FACE = 0.24;
    const AIM = 0.32;
    const zoom = vw < 700 ? 1.45 : 1;
    const s0 = Math.max(vw / iw, vh / ih) * zoom;
    const x0 = (vw - iw * s0) * 0.5;
    const y0 = Math.min(0, Math.max(vh - ih * s0, AIM * vh - FACE * ih * s0));
    const k = s0 / sf;
    const tx = x0 - r.left - k * (x1 - r.left);
    const ty = y0 - r.top - k * (y1 - r.top);
    const open = `inset(${-r.top}px ${r.right - vw}px ${r.bottom - vh}px ${-r.left}px)`;

    tl = gsap.timeline({ onComplete: finishIntro });
    tl.fromTo(fig, { clipPath: open }, { clipPath: 'inset(0px)', duration: DUR, ease: 'power4.inOut' }, HOLD).fromTo(
      heroImg,
      { x: tx, y: ty, scale: k, transformOrigin: '0 0' },
      { x: 0, y: 0, scale: 1, duration: DUR, ease: 'power2.inOut' },
      HOLD
    );

    root.classList.add('intro-go', 'intro-lift');

    const settle = HOLD + DUR * 0.9;
    tl.call(() => root.classList.remove('intro-lift'), [], settle);

    const stage: [string, number][] = [
      ['dock', 0],
      ['hero-top', 0.05],
      ['hero-title', 0.11],
      ['hero-intro', 0.19],
      ['hero-aside', 0.25],
      ['hero-caption', 0.25],
      ['hero-bottom', 0.31],
      ['hero-surname', 0.38],
    ];
    stage.forEach(([sel, d]) => {
      const el = document.querySelector(m(sel));
      if (!el) return;
      const to = sel === 'dock' ? { opacity: 1 } : { opacity: 1, y: 0 };
      tl?.to(el, { ...to, duration: 0.55, ease: 'power2.out' }, settle + d);
    });

    skipBtn = document.createElement('button');
    skipBtn.type = 'button';
    skipBtn.className = 'intro-skip';
    skipBtn.textContent = 'SKIP';
    skipBtn.addEventListener('click', finishIntro);
    document.body.appendChild(skipBtn);

    skipEvents.forEach((t) => window.addEventListener(t, finishIntro, { once: true, passive: true }));
    fallback = setTimeout(finishIntro, (HOLD + DUR) * 1000 + 1500);
  };

  const ready = Promise.all([
    heroImg.decode ? heroImg.decode().catch(() => {}) : Promise.resolve(),
    document.fonts ? document.fonts.ready : Promise.resolve(),
  ]);
  Promise.race([ready, new Promise((r) => setTimeout(r, 350))]).then(() => requestAnimationFrame(startIntro));

  // Cleanup only cancels this run. It must not end the intro: React StrictMode (dev) runs the
  // effect twice, and the second run needs the "intro" state still in place to replay it.
  return () => {
    over = true;
    clearTimeout(fallback);
    skipEvents.forEach((t) => window.removeEventListener(t, finishIntro));
    tl?.kill();
    tl = null;
    skipBtn?.remove();
    skipBtn = null;
  };
}
