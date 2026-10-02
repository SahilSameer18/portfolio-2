export interface Project {
  id: string;
  number: string;
  kicker: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  wide?: boolean;
  link?: string;
  github?: string;
}

export interface SkillCategory {
  number: string;
  title: string;
  content: string;
}

export interface ExperienceItem {
  meta: string;
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
    portraitPhoto: string;
    outdoorPhoto: string;
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
}
