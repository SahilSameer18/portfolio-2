'use client';

import React from 'react';
import { usePortfolioMotion } from '@/hooks/usePortfolioMotion';
import { Navigation } from '@/components/Navigation';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Home() {
  usePortfolioMotion();

  return (
    <>
      <Navigation />
      <LanguageSwitcher />
      <main id="main">
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
