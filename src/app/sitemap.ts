import type { MetadataRoute } from 'next';
import { IS_PRODUCTION, SITE_URL } from '../config/site';
import { portfolioData } from '../data/portfolioData';

export default function sitemap(): MetadataRoute.Sitemap {
  // Preview deployments must not advertise anything to search engines.
  if (!IS_PRODUCTION) return [];

  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    // The résumé PDF carries your full name too, and Google indexes PDFs.
    { url: `${SITE_URL}${portfolioData.personal.resumePdf}`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
