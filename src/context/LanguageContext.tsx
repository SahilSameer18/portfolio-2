'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '../types/portfolio';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('de');

  /* Read URL/localStorage after mount to avoid an SSR hydration mismatch. */
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    // Check URL search param first, then localStorage
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang') as Language;
    if (langParam === 'de' || langParam === 'en') {
      setLanguageState(langParam);
      return;
    }

    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved === 'de' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
  };

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);



