'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll } from './motion/smoothScroll';
import { initCursor } from './motion/cursor';
import { initIntro } from './motion/intro';
import { createReveals, registerSectionReveals } from './motion/reveals';
import { registerDarkMorph } from './motion/darkMorph';
import { initProgress } from './motion/progress';
import { initActiveSection } from './motion/activeSection';

const MOTION_OK = '(not (prefers-reduced-motion: reduce))';

export function usePortfolioMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = document.documentElement;
    const isMotionOk = window.matchMedia(MOTION_OK).matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    const { lenis, cleanup: cleanupScroll } = initSmoothScroll(isMotionOk);
    const cleanupCursor = isFinePointer && isMotionOk ? initCursor() : () => {};
    const cleanupIntro = initIntro(root, lenis, isMotionOk);
    const cleanupProgress = initProgress(lenis);
    const cleanupActive = initActiveSection();
    const reveals = createReveals();
    const mm = gsap.matchMedia();

    if (isMotionOk) {
      mm.add(MOTION_OK, () => {
        registerSectionReveals(reveals);
        registerDarkMorph();
      });

      ScrollTrigger.refresh();
    }
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      cleanupIntro();
      cleanupProgress();
      cleanupActive();
      cleanupCursor();
      cleanupScroll();
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      reveals.disconnect();
    };
  }, []);
}
