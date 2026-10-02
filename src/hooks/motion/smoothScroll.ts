import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Lenis smooth scroll driven by the GSAP ticker; hash links are routed through it. */
export function initSmoothScroll() {
  const lenis = new Lenis({
    autoRaf: false,
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on('scroll', ScrollTrigger.update);

  const tick = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  const onAnchorClick = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
    const href = anchor?.getAttribute('href');
    if (!href || href === '#') return;

    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      lenis.scrollTo(element as HTMLElement, { offset: -24 });
    }
  };
  document.addEventListener('click', onAnchorClick);

  const cleanup = () => {
    document.removeEventListener('click', onAnchorClick);
    gsap.ticker.remove(tick);
    lenis.destroy();
  };

  return { lenis, cleanup };
}
