import type { MetadataRoute } from 'next';
import { IS_PRODUCTION, SITE_URL } from '../config/site';

export default function robots(): MetadataRoute.Robots {
  // Vercel preview URLs are public, so keep them out of search results.
  if (!IS_PRODUCTION) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
