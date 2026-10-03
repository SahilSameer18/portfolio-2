import gsap from 'gsap';
import { m } from './selector';

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
          ...(opts.filter ? { filter: 'blur(0px)' } : {}),
          duration: opts.duration || 0.5,
          delay: i * step,
          ease: 'power3.out',
          overwrite: true,
          // drop the filter once revealed so it does not stay as a permanent GPU layer
          onComplete: opts.filter ? () => void gsap.set(el, { clearProps: 'filter' }) : undefined,
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
  wipe(m('about-image'));
  rise(m('about-copy'));
  rise(m('expertise-title'), { filter: 'blur(6px)' });
  rise(m('strength'));
  rise(m('skill-row'));
  rise(m('education-title'), { filter: 'blur(6px)' });
  rise(m('timeline-item'));
  rise(m('contact-lead'));
  rise(m('contact-title'), { filter: 'blur(6px)' });

  rise(m('work-title-line'), { filter: 'blur(6px)' });
  rise(m('work-intro'));
  document.querySelectorAll(m('project')).forEach((p) => {
    rise([p.querySelector(m('project-kicker')), p.querySelector(m('project-image'))].filter(Boolean) as HTMLElement[], {
      stagger: 0.06,
    });
    rise(
      Array.from(
        p.querySelectorAll(['project-heading', 'project-description', 'project-metrics', 'project-tags'].map(m).join(', '))
      ) as HTMLElement[],
      { stagger: 0 }
    );
  });
}
