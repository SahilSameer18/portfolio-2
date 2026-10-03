import { site } from '../config/site';

/** Structured data that tells search engines this site is about one person: you. */
export function JsonLd() {
  const person = {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.fullName,
    alternateName: site.alternateName,
    url: `${site.url}/`,
    image: `${site.url}/opengraph-image`,
    jobTitle: site.role,
    description: site.description,
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: site.country },
    alumniOf: { '@type': 'CollegeOrUniversity', name: site.school },
    knowsAbout: site.knowsAbout,
    sameAs: site.socials.map((s) => s.href),
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.fullName,
        description: site.description,
        inLanguage: 'en',
        publisher: { '@id': `${site.url}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${site.url}/#profilepage`,
        url: `${site.url}/`,
        name: site.title,
        isPartOf: { '@id': `${site.url}/#website` },
        mainEntity: { '@id': `${site.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  );
}
