import gsap from 'gsap';

/** Trailing ring that follows the pointer (fine pointers only). */
export function initCursor(): () => void {
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  ring.setAttribute('aria-hidden', 'true');
  document.body.appendChild(ring);

  const onMove = (e: PointerEvent) => {
    gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.22, ease: 'power2.out', overwrite: 'auto' });
  };
  const onEnter = () => ring.classList.add('cursor-hover');
  const onLeave = () => ring.classList.remove('cursor-hover');

  window.addEventListener('pointermove', onMove, { passive: true });
  const interactives = document.querySelectorAll('a, button');
  interactives.forEach((el) => {
    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);
  });

  return () => {
    window.removeEventListener('pointermove', onMove);
    interactives.forEach((el) => {
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
    });
    ring.remove();
  };
}
