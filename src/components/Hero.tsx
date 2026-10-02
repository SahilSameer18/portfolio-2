'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const labels = {
    eyebrow: "HELLO, I'M SAHIL",
    explore: 'Explore selected work',
    resume: 'View résumé',
    edition: '01 — INTRODUCTION',
    scroll: 'SCROLL TO EXPLORE ↓',
    photoCaption: 'SYSTEMS. DATABASES. SCALE.',
    photoAlt: 'Sahil Sameer Siddique portrait',
    portfolioYear: 'PORTFOLIO / 2026',
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-top">
        <span>{personal.location}</span>
        <span>{labels.portfolioYear}</span>
      </div>

      <h1 id="hero-title">
        {personal.name.toUpperCase()}
        <span className="sr-only"> {personal.surname} — {personal.role}</span>
      </h1>

      <div className="hero-stage">
        <div className="hero-intro">
          <span className="eyebrow">{labels.eyebrow}</span>
          <h2>
            {personal.heroHeadline}
            <br />
            <em>{personal.heroItalic}</em>
          </h2>
          <p>{personal.heroBio}</p>
          <a className="line-link" href="#work">
            {labels.explore} <span>↘</span>
          </a>
        </div>

        <figure className="hero-photo">
          <Image
            src={personal.outdoorPhoto}
            alt={labels.photoAlt}
            width={864}
            height={1184}
            sizes="(max-width: 900px) 90vw, 40vw"
            priority
            className="hero-image"
          />
          <figcaption>{labels.photoCaption}</figcaption>
        </figure>

        <div className="hero-aside">
          <span className="availability">{personal.availability}</span>
          <p>{personal.asideCopy}</p>
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
        <span>{personal.subrole}</span>
        <a href="#work">{labels.scroll}</a>
      </div>
    </section>
  );
};
