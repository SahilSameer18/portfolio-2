'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Navigation: React.FC = () => {
  const { language } = useLanguage();

  const labels = {
    skip: language === 'de' ? 'Zum Inhalt springen' : 'Skip to content',
    navAria: language === 'de' ? 'Hauptnavigation' : 'Main navigation',
    homeAria: language === 'de' ? 'Anurag Maurya — Startseite' : 'Anurag Maurya — Home',
    work: language === 'de' ? 'Arbeiten' : 'Work',
    about: language === 'de' ? 'Über mich' : 'About',
    experience: language === 'de' ? 'Werdegang' : 'Experience',
    contact: language === 'de' ? 'Kontakt' : "Let's talk",
  };

  return (
    <>
      <a className="skip" href="#main">
        {labels.skip}
      </a>
      <nav className="dock" aria-label={labels.navAria}>
        <a className="dock-mark" href="#home" aria-label={labels.homeAria}>
          a<span>m.</span>
        </a>
        <span className="dock-links">
          <a href="#work">
            {labels.work}
            <sup>07</sup>
          </a>
          <a href="#about">{labels.about}</a>
          <a href="#experience">{labels.experience}</a>
        </span>
        <a className="dock-contact" href="mailto:anuragmaurya51489@gmail.com">
          {labels.contact} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </>
  );
};
