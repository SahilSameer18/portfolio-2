import { portfolioData } from '../data/portfolioData';

/** Live address. Override with NEXT_PUBLIC_SITE_URL (e.g. when a custom domain is added). */
const DEFAULT_SITE_URL = 'https://sahil-sameer-portfolio.vercel.app';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');

/**
 * Only the production deployment may be indexed. Vercel preview URLs are public, so they
 * are marked noindex. Local builds (no VERCEL_ENV) behave like production.
 */
export const IS_PRODUCTION = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : true;

const { personal, skills } = portfolioData;

export const site = {
  url: SITE_URL,
  fullName: 'Sahil Sameer Siddique',
  alternateName: 'Sahil Sameer',
  /** Visible H1 shows "SAHIL"; this completes the name for crawlers and screen readers. */
  restOfName: 'Sameer Siddique',
  role: personal.role,
  title: `Sahil Sameer Siddique — ${personal.role}`,
  description:
    'Sahil Sameer Siddique (Sahil Sameer): backend-focused full stack developer in Delhi, India. Builds scalable Node.js, PostgreSQL and AI-powered web apps.',
  city: 'Delhi',
  country: 'India',
  school: 'International Institute of Technology and Management, Sonipat',
  socials: [
    { label: 'GitHub', href: 'https://github.com/SahilSameer18' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-sameer-siddique/' },
    { label: 'Instagram', href: 'https://www.instagram.com/sahilsameer18/' },
  ],
  /** Flat skill list for structured data, e.g. "PostgreSQL (Neon)" becomes "PostgreSQL". */
  knowsAbout: [...new Set(skills.flatMap((s) => s.items).map((i) => i.replace(/\s*\(.*\)$/, '')))],
} as const;

