import gsap from 'gsap';

const PULL = 0.12; // fraction of the pointer's offset from the element's centre
const DEFAULT_CAP = 5; // max drift in px; data-magnetic="9" raises it for big targets

/**
 * Main links drift a few pixels toward the pointer (fine pointers and full motion only; the caller gates that).
 * Elements opt in with `data-magnetic`. Uses GSAP x/y, so it composes with the CSS `scale`/`translate`
 * hover styles on the same elements.
 */
export function initMagnetic(): () => void {
  const cleanups: Array<() => void> = [];

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const cap = Number(el.dataset.magnetic) || DEFAULT_CAP;
    const clamp = gsap.utils.clamp(-cap, cap);
    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

    const reset = () => {
      xTo(0);
      yTo(0);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch' || el.matches(':focus-visible')) return;
      const box = el.getBoundingClientRect();
      // measure from the element's resting centre, not its displaced one, so the pull cannot feed back on itself
      const cx = box.left + box.width / 2 - Number(gsap.getProperty(el, 'x'));
      const cy = box.top + box.height / 2 - Number(gsap.getProperty(el, 'y'));
      xTo(clamp((e.clientX - cx) * PULL));
      yTo(clamp((e.clientY - cy) * PULL));
    };

    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', reset);
    el.addEventListener('pointercancel', reset);
    el.addEventListener('click', reset);
    el.addEventListener('blur', reset);

    cleanups.push(() => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', reset);
      el.removeEventListener('pointercancel', reset);
      el.removeEventListener('click', reset);
      el.removeEventListener('blur', reset);
      gsap.set(el, { clearProps: 'x,y' });
    });
  });

  return () => cleanups.forEach((fn) => fn());
}
