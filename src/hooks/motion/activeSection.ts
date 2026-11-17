/** Keeps the dock's visual and accessible current-section state in sync with scrolling. */
export function initActiveSection(): () => void {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-motion="dock"] [data-section]')];
  const sections = links.flatMap((link) => {
    const section = document.getElementById(link.dataset.section ?? '');
    return section ? [{ link, section }] : [];
  });
  if (!sections.length) return () => {};

  let active: HTMLAnchorElement | undefined;
  let frame: number | undefined;

  const update = () => {
    frame = undefined;
    const viewport = window.innerHeight;
    const atBottom = window.scrollY > 0 &&
      window.scrollY + viewport >= document.documentElement.scrollHeight - 1;
    const next = atBottom
      ? sections[sections.length - 1].link
      : sections.findLast(({ section }) => section.getBoundingClientRect().top <= viewport * 0.35)?.link
        ?? sections[0].link;

    if (next === active) return;
    active?.removeAttribute('aria-current');
    next.setAttribute('aria-current', 'location');
    active = next;
  };

  const scheduleUpdate = () => {
    frame ??= requestAnimationFrame(update);
  };
  update();
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);

  return () => {
    window.removeEventListener('scroll', scheduleUpdate);
    window.removeEventListener('resize', scheduleUpdate);
    if (frame !== undefined) cancelAnimationFrame(frame);
    active?.removeAttribute('aria-current');
  };
}
