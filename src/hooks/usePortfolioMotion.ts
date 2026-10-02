'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function usePortfolioMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const root = document.documentElement;
    const MOTION_OK = '(not (prefers-reduced-motion: reduce))';
    const isMotionOk = window.matchMedia(MOTION_OK).matches;

    // 1. Lenis smooth scroll initialized
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // 2. Anchor links routed through Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        lenis.scrollTo(element as HTMLElement, { offset: -24 });
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // 3. Trailing Cursor Ring (Spring cursor)
    let ringEl: HTMLDivElement | null = null;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (isFinePointer && isMotionOk) {
      ringEl = document.createElement('div');
      ringEl.className = 'cursor-ring';
      ringEl.setAttribute('aria-hidden', 'true');
      document.body.appendChild(ringEl);

      const onPointerMove = (e: PointerEvent) => {
        if (!ringEl) return;
        gsap.to(ringEl, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.22,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      };

      const onPointerEnterInteractive = () => ringEl?.classList.add('cursor-hover');
      const onPointerLeaveInteractive = () => ringEl?.classList.remove('cursor-hover');

      window.addEventListener('pointermove', onPointerMove, { passive: true });

      const interactives = document.querySelectorAll('a, button');
      interactives.forEach((el) => {
        el.addEventListener('pointerenter', onPointerEnterInteractive);
        el.addEventListener('pointerleave', onPointerLeaveInteractive);
      });
    }

    // 4. Hero Opening Sequence
    const fig = document.querySelector('.hero-photo') as HTMLElement | null;
    const heroImg = fig?.querySelector('img') as HTMLImageElement | null;
    const runIntro = isMotionOk && root.classList.contains('intro') && heroImg && window.scrollY === 0;

    const introDone = () => {
      root.classList.remove('intro', 'intro-go', 'intro-lift');
      lenis.start();
    };

    if (root.classList.contains('intro') && !runIntro) {
      introDone();
    }

    if (runIntro && fig && heroImg) {
      const HOLD = 0.38;
      const DUR = 1.15;
      let over = false;
      let tl: gsap.core.Timeline | null = null;
      let skipBtn: HTMLButtonElement | null = null;

      const finishIntro = () => {
        if (over) return;
        over = true;
        if (tl) {
          tl.progress(1);
          tl.kill();
          tl = null;
        }
        gsap.set([fig, heroImg], { clearProps: 'all' });
        gsap.set('.dock', { clearProps: 'transform' });
        introDone();
        if (skipBtn) {
          skipBtn.remove();
          skipBtn = null;
        }
      };

      const startIntro = () => {
        if (over || window.scrollY > 0) return finishIntro();
        lenis.stop();

        const r = fig.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const iw = heroImg.naturalWidth || 1086;
        const ih = heroImg.naturalHeight || 1448;

        if (!r.width || !r.height) return finishIntro();

        const sf = Math.max(r.width / iw, r.height / ih);
        const ox = 0.5;
        const oy = 0.38;
        const x1 = r.left + (r.width - iw * sf) * ox;
        const y1 = r.top + (r.height - ih * sf) * oy;

        const FACE = 0.24;
        const AIM = 0.32;
        const zoom = vw < 700 ? 1.45 : 1;
        const s0 = Math.max(vw / iw, vh / ih) * zoom;
        const x0 = (vw - iw * s0) * 0.5;
        const y0 = Math.min(0, Math.max(vh - ih * s0, AIM * vh - FACE * ih * s0));
        const k = s0 / sf;
        const tx = x0 - r.left - k * (x1 - r.left);
        const ty = y0 - r.top - k * (y1 - r.top);
        const open = `inset(${-r.top}px ${r.right - vw}px ${r.bottom - vh}px ${-r.left}px)`;

        tl = gsap.timeline({ onComplete: finishIntro });

        tl.fromTo(fig, { clipPath: open }, { clipPath: 'inset(0px)', duration: DUR, ease: 'power4.inOut' }, HOLD)
          .fromTo(
            heroImg,
            { x: tx, y: ty, scale: k, transformOrigin: '0 0' },
            { x: 0, y: 0, scale: 1, duration: DUR, ease: 'power2.inOut' },
            HOLD
          );

        root.classList.add('intro-go', 'intro-lift');

        const settle = HOLD + DUR * 0.9;
        tl.call(() => root.classList.remove('intro-lift'), [], settle);

        const stage = [
          ['.dock', 0],
          ['.hero-top', 0.05],
          ['#hero-title', 0.11],
          ['.hero-intro', 0.19],
          ['.hero-aside', 0.25],
          ['.hero-photo figcaption', 0.25],
          ['.hero-bottom', 0.31],
          ['.surname', 0.38],
        ];

        stage.forEach(([sel, d]) => {
          const el = document.querySelector(sel as string);
          if (el) {
            if (sel === '.dock') {
              tl?.to(el, { opacity: 1, duration: 0.55, ease: 'power2.out' }, settle + (d as number));
            } else {
              tl?.to(el, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, settle + (d as number));
            }
          }
        });

        skipBtn = document.createElement('button');
        skipBtn.type = 'button';
        skipBtn.className = 'intro-skip';
        skipBtn.textContent = root.lang === 'de' ? 'ÜBERSPRINGEN' : 'SKIP';
        skipBtn.addEventListener('click', finishIntro);
        document.body.appendChild(skipBtn);

        ['wheel', 'touchmove', 'keydown', 'pointerdown'].forEach((t) => {
          window.addEventListener(t, finishIntro, { once: true, passive: true });
        });

        setTimeout(finishIntro, (HOLD + DUR) * 1000 + 1500);
      };

      const ready = Promise.all([
        heroImg.decode ? heroImg.decode().catch(() => {}) : Promise.resolve(),
        document.fonts ? document.fonts.ready : Promise.resolve(),
      ]);
      Promise.race([ready, new Promise((r) => setTimeout(r, 350))]).then(() => {
        requestAnimationFrame(startIntro);
      });
    } else {
      lenis.start();
    }

    // 5. Scroll Reveals via IntersectionObserver (IO does not drift with pin spacers)
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

    const rise = (targets: string | Element[], opts: { duration?: number; delay?: number; stagger?: number; filter?: string } = {}) => {
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
          gsap.to(el, {
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.95,
            ease: 'power3.inOut',
          })
        );
      });
    };

    const mm = gsap.matchMedia();

    if (isMotionOk) {
      mm.add(MOTION_OK, () => {
        wipe('.about-photo img');
        rise('.about-copy');
        rise('.expertise h3', { filter: 'blur(6px)' });
        rise('.skill-row');
        rise('.experience h2', { filter: 'blur(6px)' });
        rise('.timeline article');
        rise('.contact-main > p');
        rise('.contact-main h2', { filter: 'blur(6px)' });
      });

      // 6. Horizontal Pinned Work Stage
      const HORIZ = `(min-width: 900px) and (min-height: 700px)`;
      const VERT = `(max-width: 899px), (max-height: 699px)`;

      mm.add(HORIZ, () => {
        const section = document.querySelector('.work') as HTMLElement | null;
        const track = section?.querySelector('.project-grid') as HTMLElement | null;
        if (!section || !track) return;

        const heading = section.querySelector('.section-heading') as HTMLElement | null;
        if (heading) track.prepend(heading);

        const room = () => {
          const cs = getComputedStyle(section);
          return section.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        };
        const distance = () => Math.max(0, track.scrollWidth - room());

        const travel = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => '+=' + distance(),
            pin: true,
            pinType: 'transform',
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(track.children).forEach((panel) => {
          gsap.from(panel, {
            opacity: 0,
            y: 34,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: travel,
              start: 'left 92%',
              once: true,
            },
          });
        });

        return () => {
          if (heading && section.contains(heading)) {
            section.insertBefore(heading, track);
          }
        };
      });

      mm.add(VERT, () => {
        rise('.work .section-heading h2 .r-line, .work .section-heading h2 > span', { filter: 'blur(6px)' });
        rise('.work-intro');
        document.querySelectorAll('.project').forEach((p) => {
          rise(
            [p.querySelector('.project-kicker'), p.querySelector('.project-image')].filter(Boolean) as HTMLElement[],
            { stagger: 0.06 }
          );
          rise(
            Array.from(p.querySelectorAll('.project-heading, .project-description, .tags')) as HTMLElement[],
            { stagger: 0 }
          );
        });
      });

      // 7. Dark Section Color Morphs
      mm.add(MOTION_OK, () => {
        const paper = getComputedStyle(document.body).backgroundColor;
        document.querySelectorAll<HTMLElement>('.dark').forEach((sec) => {
          const darkBg = getComputedStyle(sec).backgroundColor;
          gsap.fromTo(
            sec,
            { backgroundColor: paper },
            {
              backgroundColor: darkBg,
              ease: 'none',
              scrollTrigger: {
                trigger: sec,
                start: 'top bottom',
                end: 'top 78%',
                scrub: 0.5,
              },
            }
          );
        });
      });

      ScrollTrigger.refresh();
      window.addEventListener('load', () => ScrollTrigger.refresh());
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      io.disconnect();
      if (ringEl && ringEl.parentElement) {
        ringEl.parentElement.removeChild(ringEl);
      }
    };
  }, []);
}
