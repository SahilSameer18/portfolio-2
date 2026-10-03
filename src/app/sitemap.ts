import type { MetadataRoute } from 'next';
import { IS_PRODUCTION, SITE_URL } from '../config/site';
import { portfolioData } from '../data/portfolioData';

// Update these by hand when the page content / résumé actually changes.
const PAGE_UPDATED = new Date('2026-10-03');
const RESUME_UPDATED = new Date('2026-10-03');

export default function sitemap(): MetadataRoute.Sitemap {
  // Preview deployments must not advertise anything to search engines.
  if (!IS_PRODUCTION) return [];

  return [
    { url: `${SITE_URL}/`, lastModified: PAGE_UPDATED, changeFrequency: 'monthly', priority: 1 },
    // The résumé PDF carries your full name too, and Google indexes PDFs.
    { url: `${SITE_URL}${portfolioData.personal.resumePdf}`, lastModified: RESUME_UPDATED, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
