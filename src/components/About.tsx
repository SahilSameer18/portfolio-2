'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const { personal, skills } = portfolioData;

  const labels = {
    eyebrow: language === 'de' ? '02 / DER ENTWICKLER HINTER DEM CODE' : '02 / THE DEVELOPER BEHIND THE CODE',
    location: personal.location[language],
    photoAlt: `${personal.name} ${personal.surname} — ${personal.role[language]}`,
    photoCaption: `${personal.name.toUpperCase()} ${personal.surname.toUpperCase()} / ${personal.role[language].toUpperCase()}`,
    resumeLink: language === 'de' ? 'Lebenslauf herunterladen' : 'View full résumé',
    toolkitHeadline: language === 'de' ? 'Mein Tech-Stack.' : 'The Core Stack.',
    toolkitItalic: language === 'de' ? 'Skalierbar & robust.' : 'Engineered to scale.',
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
            width={1198}
            height={1599}
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
            {personal.aboutHeadline[language]}
            <br />
            <em>{personal.aboutItalic[language]}</em>
          </h2>

          {personal.aboutParagraphs[language].map((paragraph, idx) => (
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
            <h4>{skill.title[language]}</h4>
            <p>{skill.content[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
