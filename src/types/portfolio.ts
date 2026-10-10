import type { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  number: string;
  kicker: string;
  badge: string;
  title: string;
  subtitle: string;
  problem?: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  metrics?: { value: string; label: string }[];
  tags: string[];
  wide?: boolean;
  link?: string;
  github?: string;
  note?: string;
}

export interface SkillCategory {
  number: string;
  title: string;
  items: string[];
}

export interface Strength {
  number: string;
  label: string;
  detail: string;
}

export interface EducationItem {
  meta: string;
  location: string;
  highlights: string[];
  title: string;
  organization: string;
  description: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    surname: string;
    monogram: string;
    email: string;
    location: string;
    role: string;
    subrole: string;
    heroHeadline: string;
    heroItalic: string;
    heroBio: string;
    availability: string;
    asideCopy: string;
    aboutHeadline: string;
    aboutItalic: string;
    aboutParagraphs: string[];
    resumePdf: string;
    heroPhoto: StaticImageData;
    aboutPhoto: StaticImageData;
  };
  projects: Project[];
  skills: SkillCategory[];
  strengths: Strength[];
  education: EducationItem[];
}
