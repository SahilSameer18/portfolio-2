'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <aside className="language-switch" role="group" aria-label="Sprache / Language">
      <button
        type="button"
        data-lang="de"
        lang="de"
        aria-pressed={language === 'de'}
        onClick={() => setLanguage('de')}
      >
        DE
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        data-lang="en"
        lang="en"
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </aside>
  );
};
