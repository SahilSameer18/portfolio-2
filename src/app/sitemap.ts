import type { MetadataRoute } from 'next';
import { IS_PRODUCTION, SITE_URL } from '../config/site';

// Update this by hand when the page content actually changes.
const PAGE_UPDATED = new Date('2026-10-03');

export default function sitemap(): MetadataRoute.Sitemap {
  // Preview deployments must not advertise anything to search engines.
  if (!IS_PRODUCTION) return [];

  // The résumé PDF is deliberately not listed: it contains a phone number, so Google should not be told to index it.
  return [{ url: `${SITE_URL}/`, lastModified: PAGE_UPDATED, changeFrequency: 'monthly', priority: 1 }];
}
