import gsap from 'gsap';

/** Dark sections fade their background in from the page paper colour while scrolling. */
export function registerDarkMorph() {
  const paper = getComputedStyle(document.body).backgroundColor;
  document.querySelectorAll<HTMLElement>('[data-motion="dark"]').forEach((sec) => {
    const darkBg = getComputedStyle(sec).backgroundColor;
    gsap.fromTo(
      sec,
      { backgroundColor: paper },
      {
        backgroundColor: darkBg,
        ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top bottom', end: 'top 78%', scrub: 0.5 },
      }
    );
  });
}
