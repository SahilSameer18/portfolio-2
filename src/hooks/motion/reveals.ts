import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { m } from './selector';

type RiseOpts = { duration?: number; delay?: number; stagger?: number; filter?: string };

/** Scroll reveals via IntersectionObserver (no drift with pin spacers). */
export function createReveals() {
  gsap.registerPlugin(SplitText);
  const seen = new WeakMap<Element, () => void>();
  // Word splits of the section headings; each is reverted once its reveal finishes (or on teardown).
  const splits: SplitText[] = [];
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

  /** Headings arrive word by word: each word rises in blurred and sharpens, then the heading returns to its original markup. */
  const words = (targets: string | Element[]) => {
    gsap.utils.toArray<HTMLElement>(targets).forEach((el) => {
      const split = new SplitText(el, { type: 'words', aria: 'none' });
      splits.push(split);
      gsap.set(split.words, { opacity: 0, yPercent: 55, filter: 'blur(6px)', display: 'inline-block' });
      onVisible(el, () =>
        gsap.to(split.words, {
          opacity: 1,
          yPercent: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.06,
          overwrite: true,
          onComplete: () => split.revert(),
        })
      );
    });
  };

  const wipe = (targets: string | Element[]) => {
    gsap.utils.toArray<HTMLElement>(targets).forEach((el) => {
      gsap.set(el, { clipPath: 'inset(0 0 100% 0)' });
      onVisible(el.parentElement || el, () =>
        gsap.to(el, { clipPath: 'inset(0 0 0% 0)', duration: 0.95, ease: 'power3.inOut' })
      );
    });
  };

  return {
    rise,
    wipe,
    words,
    disconnect: () => {
      io.disconnect();
      splits.forEach((s) => s.revert());
      splits.length = 0;
    },
  };
}

/** Registers every section's reveal animation. */
export function registerSectionReveals({
  rise,
  wipe,
  words,
}: Pick<ReturnType<typeof createReveals>, 'rise' | 'wipe' | 'words'>) {
  wipe(m('about-image'));
  rise(m('about-copy'));
  words(m('about-title'));
  words(m('expertise-title'));
  rise(m('strength'));
  rise(m('skill-row'));
  words(m('education-title'));
  rise(m('timeline-item'));
  rise(m('contact-lead'));
  words(m('contact-title'));

  words(m('work-title-line'));
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
