'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Navigation: React.FC = () => {
  const { personal, projects } = portfolioData;

  const countStr = projects.length < 10 ? `0${projects.length}` : `${projects.length}`;

  const labels = {
    skip: 'Skip to content',
    navAria: 'Main navigation',
    homeAria: `${personal.name} ${personal.surname} — Home`,
    work: 'Work',
    about: 'About',
    experience: 'Experience',
    contact: "Let's talk",
  };

  return (
    <>
      <a className="skip" href="#main">
        {labels.skip}
      </a>
      <nav className="dock" aria-label={labels.navAria}>
        <a className="dock-mark" href="#home" aria-label={labels.homeAria}>
          s<span>s.</span>
        </a>
        <span className="dock-links">
          <a href="#work">
            {labels.work}
            <sup>{countStr}</sup>
          </a>
          <a href="#about">{labels.about}</a>
          <a href="#experience">{labels.experience}</a>
        </span>
        <a className="dock-contact" href={`mailto:${personal.email}`}>
          {labels.contact} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </>
  );
};
