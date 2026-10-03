import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Italiana, DM_Sans } from 'next/font/google';
import './globals.css';
import { IS_PRODUCTION, SITE_URL, site } from '../config/site';
import { JsonLd } from '../components/JsonLd';

const barlowCondensed = Barlow_Condensed({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--nf-display',
  display: 'swap',
});

const italiana = Italiana({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--nf-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--nf-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  applicationName: site.fullName,
  keywords: [
    site.fullName,
    site.alternateName,
    'backend developer',
    'full stack developer',
    'Node.js developer',
    'PostgreSQL',
    'Delhi, India',
  ],
  authors: [{ name: site.fullName, url: SITE_URL }],
  creator: site.fullName,
  alternates: { canonical: '/' },
  // Only the production deployment is indexable; Vercel preview URLs are not.
  robots: {
    index: IS_PRODUCTION,
    follow: IS_PRODUCTION,
    googleBot: { index: IS_PRODUCTION, follow: IS_PRODUCTION, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: site.fullName,
    title: site.title,
    description: site.description,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  // Paste the Google Search Console HTML-tag code into NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to verify ownership.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#eeeae1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlowCondensed.variable} ${italiana.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var h = document.documentElement;
                if (!location.hash && !matchMedia("(prefers-reduced-motion: reduce)").matches && (window.scrollY || 0) === 0) {
                  h.classList.add("intro");
                  setTimeout(function() { h.classList.remove("intro"); }, 3500);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
