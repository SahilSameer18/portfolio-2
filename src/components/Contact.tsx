'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const labels = {
    eyebrow: '04 / GET IN TOUCH',
    sub: 'FULL-STACK / BACKEND / ENGINEERING',
    intro: 'Engineering scalable web systems, high-QPS APIs & AI products.',
    headingLine1: "LET'S BUILD",
    headingLine2: 'SOMETHING GREAT.',
    emailAria: `Email ${personal.name} ${personal.surname}`,
    copyBtn: copied
      ? 'Copied ✓'
      : 'Copy email',
    copyStatus: copied
      ? 'Email address copied.'
      : '',
    location: 'Delhi, India',
    resumeLink: 'Résumé ↗',
    copyright: `© 2026 ${personal.name.toUpperCase()} ${personal.surname.toUpperCase()}`,
    tagline: 'SCALABLE ARCHITECTURE. CRAFTED WITH CARE.',
    backToTop: 'BACK TO TOP ↑',
  };

  return (
    <section className="contact dark" id="contact">
      <div className="section-top">
        <span className="eyebrow">{labels.eyebrow}</span>
        <span>{labels.sub}</span>
      </div>

      <div className="contact-main">
        <p>{labels.intro}</p>
        <h2>
          {labels.headingLine1}
          <br />
          <span>{labels.headingLine2}</span>
        </h2>
        <a
          className="contact-arrow"
          href={`mailto:${personal.email}`}
          aria-label={labels.emailAria}
        >
          ↗
        </a>
      </div>

      <div className="contact-bottom">
        <a className="email" href={`mailto:${personal.email}`}>
          {personal.email}
        </a>
        <button
          type="button"
          id="copy-email"
          onClick={handleCopyEmail}
        >
          {labels.copyBtn} <span>↗</span>
        </button>
        {copied && (
          <span id="copy-status" role="status" aria-live="polite">
            {labels.copyStatus}
          </span>
        )}

        <div className="socials">
          <a
            href="https://github.com/SahilSameer18"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-sameer-siddique/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.instagram.com/sahilsameer18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
          <a
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.resumeLink}
          </a>
        </div>
      </div>

      <footer>
        <span>{labels.copyright}</span>
        <span>{labels.tagline}</span>
        <a href="#home">{labels.backToTop}</a>
      </footer>
    </section>
  );
};
