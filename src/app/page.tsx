'use client';

import React from 'react';
import { usePortfolioMotion } from '@/hooks/usePortfolioMotion';
import { Navigation } from '@/components/Navigation';
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
