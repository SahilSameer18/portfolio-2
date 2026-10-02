/**
 * Marks the dock link of the section currently in the middle of the viewport (data-active="true").
 * Links opt in with data-section="<section id>". Styling lives in Navigation.tsx.
 */
export function initActiveSection(): () => void {
  const links = [...document.querySelectorAll<HTMLElement>('[data-motion="dock"] [data-section]')];
  const sections = [...new Set(links.map((l) => l.dataset.section!))]
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => !!el);

  const setActive = (id: string) => links.forEach((l) => (l.dataset.active = String(l.dataset.section === id)));

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((s) => io.observe(s));

  return () => io.disconnect();
}
