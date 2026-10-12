import gsap from 'gsap';

/** Trailing ring that follows the pointer with event delegation (fine pointers only). */
export function initCursor(): () => void {
  const ring = document.createElement('div');
  ring.className = 'cursor-ring cursor-hidden';
  ring.setAttribute('aria-hidden', 'true');
  document.body.appendChild(ring);

  let isFirstMove = true;

  const onMove = (e: PointerEvent) => {
    if (isFirstMove) {
      ring.classList.remove('cursor-hidden');
      gsap.set(ring, { x: e.clientX, y: e.clientY });
      isFirstMove = false;
      return;
    }
    gsap.to(ring, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.18,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  const onPointerOver = (e: PointerEvent) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest('a, button, [role="button"], input, textarea, summary, [data-interactive]')) {
      ring.classList.add('cursor-hover');
    }
  };

  const onPointerOut = (e: PointerEvent) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest('a, button, [role="button"], input, textarea, summary, [data-interactive]')) {
      ring.classList.remove('cursor-hover');
    }
  };

  const onLeaveWindow = () => ring.classList.add('cursor-hidden');
  const onEnterWindow = () => ring.classList.remove('cursor-hidden');

  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerover', onPointerOver, { passive: true });
  document.addEventListener('pointerout', onPointerOut, { passive: true });
  document.documentElement.addEventListener('mouseleave', onLeaveWindow);
  document.documentElement.addEventListener('mouseenter', onEnterWindow);

  return () => {
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerover', onPointerOver);
    document.removeEventListener('pointerout', onPointerOut);
    document.documentElement.removeEventListener('mouseleave', onLeaveWindow);
    document.documentElement.removeEventListener('mouseenter', onEnterWindow);
    ring.remove();
  };
}
