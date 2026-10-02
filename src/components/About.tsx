'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal, skills } = portfolioData;

  const labels = {
    eyebrow: '02 / THE DEVELOPER BEHIND THE CODE',
    location: personal.location,
    photoAlt: `${personal.name} ${personal.surname} — ${personal.role}`,
    photoCaption: `${personal.name.toUpperCase()} ${personal.surname.toUpperCase()} / ${personal.role.toUpperCase()}`,
    resumeLink: 'View full résumé',
    toolkitHeadline: 'The Core Stack.',
    toolkitItalic: 'Engineered to scale.',
  };

  return (
    <section className="about" id="about">
      <div className="section-top">
        <span className="eyebrow">{labels.eyebrow}</span>
        <span>{labels.location}</span>
      </div>

      <div className="about-grid">
        <figure className="about-photo">
          <Image
            src={personal.portraitPhoto}
            alt={labels.photoAlt}
            width={1402}
            height={1122}
            sizes="(max-width: 900px) 90vw, 45vw"
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <figcaption>{labels.photoCaption}</figcaption>
          <span className="photo-mark" aria-hidden="true">
            s.
          </span>
        </figure>

        <div className="about-copy">
          <h2>
            {personal.aboutHeadline}
            <br />
            <em>{personal.aboutItalic}</em>
          </h2>

          {personal.aboutParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <a
            className="line-link"
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.resumeLink} <span>↗</span>
          </a>

          <div className="signature" aria-hidden="true">
            Sahil Sameer Siddique
          </div>
        </div>
      </div>

      <div className="expertise">
        <h3>
          {labels.toolkitHeadline}
          <br />
          <em>{labels.toolkitItalic}</em>
        </h3>

        {skills.map((skill) => (
          <div key={skill.number} className="skill-row">
            <span>{skill.number}</span>
            <h4>{skill.title}</h4>
            <p>{skill.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
