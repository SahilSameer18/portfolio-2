'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
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
    eyebrow: language === 'de' ? '04 / INS GESPRÄCH KOMMEN' : '04 / START A CONVERSATION',
    sub: language === 'de' ? 'FREELANCE / PRAKTIKA / ZUSAMMENARBEIT' : 'FREELANCE / INTERNSHIPS / COLLABORATION',
    intro: language === 'de'
      ? 'Kreative Projekte — in Hamburg und darüber hinaus.'
      : 'Creative projects — based in Hamburg and working remotely.',
    headingLine1: language === 'de' ? 'LASS UNS' : "LET'S MAKE",
    headingLine2: language === 'de' ? 'ETWAS BEWEGEN.' : 'IT MATTER.',
    emailAria: language === 'de' ? `E-Mail an ${personal.name} ${personal.surname}` : `Email ${personal.name} ${personal.surname}`,
    copyBtn: copied
      ? (language === 'de' ? 'Kopiert ✓' : 'Copied ✓')
      : (language === 'de' ? 'E-Mail kopieren' : 'Copy email'),
    copyStatus: copied
      ? (language === 'de' ? 'E-Mail-Adresse kopiert.' : 'Email address copied.')
      : '',
    location: language === 'de' ? 'Hamburg, Deutschland' : 'Hamburg, Germany',
    resumeLink: language === 'de' ? 'Lebenslauf ↗' : 'Résumé ↗',
    copyright: `© 2026 ${personal.name.toUpperCase()} ${personal.surname.toUpperCase()}`,
    tagline: language === 'de' ? 'MIT BEDACHT GESTALTET. IMMER IN BEWEGUNG.' : 'THOUGHTFULLY DESIGNED. ALWAYS EVOLVING.',
    backToTop: language === 'de' ? 'NACH OBEN ↑' : 'BACK TO TOP ↑',
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
          <span>{labels.location}</span>
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
