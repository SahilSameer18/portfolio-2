'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const { experience } = portfolioData;

  const labels = {
    eyebrow: language === 'de' ? '03 / WERDEGANG & PRAXIS' : '03 / BACKGROUND & PRACTICE',
    tagline: language === 'de' ? 'LERNEN. ERKUNDEN. VERFEINERN.' : 'LEARNING. EXPLORING. REFINING.',
    headingLine: language === 'de' ? 'Ein Fundament' : 'A Foundation',
    headingItalic: language === 'de' ? 'für durchdachte Gestaltung.' : 'for intentional design.',
  };

  return (
    <section className="experience" id="experience">
      <div className="section-top">
        <span className="eyebrow">{labels.eyebrow}</span>
        <span>{labels.tagline}</span>
      </div>

      <div className="experience-grid">
        <h2>
          {labels.headingLine}
          <br />
          <em>{labels.headingItalic}</em>
        </h2>

        <div className="timeline">
          {experience.map((item, idx) => (
            <article key={idx}>
              <div className="job-meta">
                <span>{item.meta[language]}</span>
              </div>
              <h3>{item.title[language]}</h3>
              <h4>{item.organization[language]}</h4>
              <p>{item.description[language]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
