'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const { personal, skills } = portfolioData;

  const labels = {
    eyebrow: language === 'de' ? '02 / DER MENSCH HINTER DER ARBEIT' : '02 / THE PERSON BEHIND THE WORK',
    location: language === 'de' ? 'HAMBURG, DEUTSCHLAND' : 'HAMBURG, GERMANY',
    photoAlt: language === 'de' ? 'Porträt von Anurag Maurya' : 'Portrait of Anurag Maurya',
    photoCaption: language === 'de'
      ? 'ANURAG MAURYA / GESTALTER FÜR PRINT- UND DIGITALMEDIEN'
      : 'ANURAG MAURYA / PRINT & DIGITAL MEDIA DESIGNER',
    resumeLink: language === 'de' ? 'Mehr über mich im Lebenslauf' : 'Read more in my résumé',
    toolkitHeadline: language === 'de' ? 'Mein Werkzeugkasten.' : 'The Toolkit.',
    toolkitItalic: language === 'de' ? 'Immer in Bewegung.' : 'Always evolving.',
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
            a.
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
            {personal.name} {personal.surname.charAt(0) + personal.surname.slice(1).toLowerCase()}
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

