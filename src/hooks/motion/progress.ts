import type Lenis from 'lenis';

/** Drives the thin reading-progress line at the top edge from Lenis scroll progress. */
export function initProgress(lenis: Lenis): () => void {
  const bar = document.querySelector<HTMLElement>('[data-motion="progress"]');
  if (!bar) return () => {};

  const update = (l: Lenis) => {
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, l.progress))})`;
  };
  lenis.on('scroll', update);
  update(lenis);

  return () => lenis.off('scroll', update);
}
