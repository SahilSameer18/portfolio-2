'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  const labels = {
    eyebrow: '03 / BACKGROUND & PRACTICE',
    tagline: 'LEARNING. EXPLORING. REFINING.',
    headingLine: 'A Foundation',
    headingItalic: 'for intentional design.',
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
                <span>{item.meta}</span>
              </div>
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
