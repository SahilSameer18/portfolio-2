import gsap from 'gsap';

type RiseOpts = { duration?: number; delay?: number; stagger?: number; filter?: string };

/** Scroll reveals via IntersectionObserver (no drift with pin spacers). */
export function createReveals() {
  const seen = new WeakMap<Element, () => void>();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const play = seen.get(e.target);
        if (play) {
          seen.delete(e.target);
          play();
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );

  const onVisible = (el: Element, play: () => void) => {
    seen.set(el, play);
    io.observe(el);
  };

  const rise = (targets: string | Element[], opts: RiseOpts = {}) => {
    const els = gsap.utils.toArray<HTMLElement>(targets);
    if (!els.length) return;
    const y = window.innerWidth <= 600 ? 14 : 22;
    gsap.set(els, { opacity: 0, y, ...(opts.filter ? { filter: opts.filter } : {}) });
    const step = opts.stagger != null ? opts.stagger : 0.09;
    els.forEach((el, i) =>
      onVisible(el, () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: opts.duration || 0.5,
          delay: i * step,
          ease: 'power3.out',
          overwrite: true,
        })
      )
    );
  };

  const wipe = (targets: string | Element[]) => {
    gsap.utils.toArray<HTMLElement>(targets).forEach((el) => {
      gsap.set(el, { clipPath: 'inset(0 0 100% 0)' });
      onVisible(el.parentElement || el, () =>
        gsap.to(el, { clipPath: 'inset(0 0 0% 0)', duration: 0.95, ease: 'power3.inOut' })
      );
    });
  };

  return { rise, wipe, disconnect: () => io.disconnect() };
}

/** Registers every section's reveal animation. */
export function registerSectionReveals({ rise, wipe }: Pick<ReturnType<typeof createReveals>, 'rise' | 'wipe'>) {
  wipe('.about-photo img');
  rise('.about-copy');
  rise('.expertise h3', { filter: 'blur(6px)' });
  rise('.skill-row');
  rise('.experience h2', { filter: 'blur(6px)' });
  rise('.timeline article');
  rise('.contact-main > p');
  rise('.contact-main h2', { filter: 'blur(6px)' });

  rise('.work .section-heading h2 .r-line, .work .section-heading h2 > span', { filter: 'blur(6px)' });
  rise('.work-intro');
  document.querySelectorAll('.project').forEach((p) => {
    rise(
      [p.querySelector('.project-kicker'), p.querySelector('.project-image')].filter(Boolean) as HTMLElement[],
      { stagger: 0.06 }
    );
    rise(Array.from(p.querySelectorAll('.project-heading, .project-description, .tags')) as HTMLElement[], {
      stagger: 0,
    });
  });
}
