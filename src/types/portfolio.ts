export type Language = 'de' | 'en';

export interface LocalizedString {
  de: string;
  en: string;
}

export interface LocalizedStringArray {
  de: string[];
  en: string[];
}

export interface Project {
  id: string;
  number: string;
  kicker: LocalizedString;
  badge: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
  tags: LocalizedStringArray;
  wide?: boolean;
}

export interface SkillCategory {
  number: string;
  title: LocalizedString;
  content: LocalizedString;
}

export interface ExperienceItem {
  meta: LocalizedString;
  title: LocalizedString;
  organization: LocalizedString;
  description: LocalizedString;
}

export interface PortfolioData {
  personal: {
    name: string;
    surname: string;
    monogram: string;
    email: string;
    location: LocalizedString;
    role: LocalizedString;
    subrole: LocalizedString;
    heroHeadline: LocalizedString;
    heroItalic: LocalizedString;
    heroBio: LocalizedString;
    availability: LocalizedString;
    asideCopy: LocalizedString;
    aboutHeadline: LocalizedString;
    aboutItalic: LocalizedString;
    aboutParagraphs: LocalizedStringArray;
    resumePdf: string;
    portraitPhoto: string;
    outdoorPhoto: string;
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
}
