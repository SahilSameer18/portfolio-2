import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Lenis handles wheel motion while the browser handles in-page navigation. */
export function initSmoothScroll(smooth = true) {
  const lenis = new Lenis({
    autoRaf: false,
    smoothWheel: smooth,
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on('scroll', ScrollTrigger.update);

  const tick = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  const stopWheelInertia = () => {
    if (lenis.isScrolling !== 'smooth') return;
    lenis.stop();
    lenis.start();
  };

  const onAnchorClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target instanceof Element && event.target.closest('a[href^="#"]');
    if (anchor) stopWheelInertia();
  };
  document.addEventListener('click', onAnchorClick);
  window.addEventListener('popstate', stopWheelInertia);

  const cleanup = () => {
    document.removeEventListener('click', onAnchorClick);
    window.removeEventListener('popstate', stopWheelInertia);
    gsap.ticker.remove(tick);
    lenis.destroy();
  };

  return { lenis, cleanup };
}
