'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const SelectedWork: React.FC = () => {
  const { language } = useLanguage();
  const { projects, personal } = portfolioData;

  const labels = {
    sectionAria: language === 'de' ? 'Ausgewählte Arbeiten' : 'Selected Work',
    eyebrow: language === 'de' ? '01 / PROJEKTÜBERSICHT' : '01 / SELECTED WORK',
    category: language === 'de' ? 'MARKENIDENTITÄT & EDITORIAL DESIGN' : 'BRAND IDENTITY & EDITORIAL DESIGN',
    headingLine1: language === 'de' ? 'AUSGEWÄHLTE' : 'SELECTED',
    headingLine2: language === 'de' ? 'ARBEITEN' : 'WORK',
    workCountAria: language === 'de' ? '7 Projekte' : '7 Projects',
    workNote: language === 'de' ? 'Ideen nehmen Gestalt an.' : 'Ideas taking physical shape.',
    workIntro: language === 'de'
      ? 'Ausgewählte Arbeiten zu Identität, Print, Eventmedien und Webdesign. Entstanden im Studium und in eigenen Projekten.'
      : 'Selected works spanning brand identity, publication design, exhibition media, and web interfaces.',
    resumeLink: language === 'de' ? 'Lebenslauf ansehen' : 'View résumé',
    openProject: language === 'de' ? 'ARBEIT ANSEHEN ↗' : 'VIEW PROJECT ↗',
    ctaPrompt: language === 'de' ? 'Eine kreative Idee im Kopf?' : 'Have a creative vision in mind?',
    ctaAction: language === 'de' ? 'Lass uns sprechen ↗' : "Let's connect ↗",
  };

  return (
    <section className="work dark" id="work" aria-label={labels.sectionAria}>
      <div className="section-top">
        <span className="eyebrow">{labels.eyebrow}</span>
        <span>{labels.category}</span>
      </div>

      <div className="section-heading">
        <h2>
          <span className="r-line">{labels.headingLine1}</span>
          <br />
          <span>
            {labels.headingLine2}
            <span className="work-count" aria-label={labels.workCountAria}>
              (07)
            </span>
          </span>
        </h2>
        <div className="work-intro">
          <span className="work-note">{labels.workNote}</span>
          <p>{labels.workIntro}</p>
          <a
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.resumeLink} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project ${project.wide ? 'project-wide' : ''}`}
          >
            <div className="project-kicker">
              <span>{project.kicker[language]}</span>
              <span>{project.badge[language]}</span>
            </div>

            <a
              className="project-image"
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${labels.openProject} - ${project.title[language]}`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt[language]}
                width={1200}
                height={800}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <span className="project-open">{labels.openProject}</span>
            </a>

            <div className="project-heading">
              <span className="project-number">{project.number}</span>
              <div>
                <h3>{project.title[language]}</h3>
                <p>{project.subtitle[language]}</p>
              </div>
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title[language]}`}
              >
                ↗
              </a>
            </div>

            <p className="project-description">{project.description[language]}</p>

            <div className="tags">
              {project.tags[language].map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <a className="all-work" href={`mailto:${personal.email}`}>
        {labels.ctaPrompt} <span>{labels.ctaAction}</span>
      </a>
    </section>
  );
};
