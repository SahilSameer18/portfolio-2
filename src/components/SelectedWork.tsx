'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

export const SelectedWork: React.FC = () => {
  const { projects, personal } = portfolioData;

  const countStr = projects.length < 10 ? `0${projects.length}` : `${projects.length}`;

  const labels = {
    sectionAria: 'Selected Work',
    eyebrow: '01 / SELECTED WORK',
    category: 'FULL-STACK & SYSTEMS ARCHITECTURE',
    headingLine1: 'SELECTED',
    headingLine2: 'PROJECTS',
    workCountAria: `${projects.length} Projects`,
    workNote: 'Architected to scale.',
    workIntro: 'Production web systems, compound-indexed database architectures, and GenAI platforms engineered with Node.js, PostgreSQL, MongoDB, and React.',
    resumeLink: 'View résumé',
    openProject: 'LIVE DEMO ↗',
    openGithub: 'GITHUB ↗',
    ctaPrompt: 'Building a scalable platform?',
    ctaAction: "Let's connect ↗",
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
              ({countStr})
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
        {projects.map((project) => {
          const targetUrl = project.link || project.github;
          return (
            <article
              key={project.id}
              className={`project ${project.wide ? 'project-wide' : ''}`}
            >
              <div className="project-kicker">
                <span>{project.kicker}</span>
                <span>{project.badge}</span>
              </div>

              <a
                className="project-image"
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${labels.openProject} - ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
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
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  ↗
                </a>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
                {project.github && project.link && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-[7px] text-xs underline"
                  >
                    {labels.openGithub}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <a className="all-work" href={`mailto:${personal.email}`}>
        {labels.ctaPrompt} <span>{labels.ctaAction}</span>
      </a>
    </section>
  );
};
