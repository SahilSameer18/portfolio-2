'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { personal } = portfolioData;

  const labels = {
    eyebrow: language === 'de' ? 'HALLO, ICH BIN SAHIL' : "HELLO, I'M SAHIL",
    explore: language === 'de' ? 'Arbeiten entdecken' : 'Explore selected work',
    resume: language === 'de' ? 'Lebenslauf ansehen' : 'View résumé',
    edition: language === 'de' ? '01 — VORSTELLUNG' : '01 — INTRODUCTION',
    scroll: language === 'de' ? 'WEITER SCROLLEN ↓' : 'SCROLL TO EXPLORE ↓',
    photoCaption: language === 'de' ? 'SYSTEME. DATENBANKEN. SKALIERUNG.' : 'SYSTEMS. DATABASES. SCALE.',
    photoAlt: language === 'de' ? 'Sahil Sameer Siddique Porträt' : 'Sahil Sameer Siddique portrait',
    portfolioYear: 'PORTFOLIO / 2026',
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-top">
        <span>{personal.location[language]}</span>
        <span>{labels.portfolioYear}</span>
      </div>

      <h1 id="hero-title">
        {personal.name.toUpperCase()}
        <span className="sr-only"> {personal.surname} — {personal.role[language]}</span>
      </h1>

      <div className="hero-stage">
        <div className="hero-intro">
          <span className="eyebrow">{labels.eyebrow}</span>
          <h2>
            {personal.heroHeadline[language]}
            <br />
            <em>{personal.heroItalic[language]}</em>
          </h2>
          <p>{personal.heroBio[language]}</p>
          <a className="line-link" href="#work">
            {labels.explore} <span>↘</span>
          </a>
        </div>

        <figure className="hero-photo">
          <Image
            src={personal.outdoorPhoto}
            alt={labels.photoAlt}
            width={1086}
            height={1448}
            priority
            className="hero-image"
          />
          <figcaption>{labels.photoCaption}</figcaption>
        </figure>

        <div className="hero-aside">
          <span className="availability">{personal.availability[language]}</span>
          <p>{personal.asideCopy[language]}</p>
          <a
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            {labels.resume} <span>↗</span>
          </a>
          <span className="edition">{labels.edition}</span>
        </div>

        <div className="surname" aria-hidden="true">
          {personal.surname}
        </div>
      </div>

      <div className="hero-bottom">
        <span>{personal.subrole[language]}</span>
        <a href="#work">{labels.scroll}</a>
      </div>
    </section>
  );
};
