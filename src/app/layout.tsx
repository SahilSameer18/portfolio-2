import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Italiana, DM_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const barlowCondensed = Barlow_Condensed({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const italiana = Italiana({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anurag Maurya — Gestalter für Print- und Digitalmedien',
  description:
    'Anurag Maurya macht eine Ausbildung im Bereich Print- und Digitalmediendesign an der Macromedia Hamburg. Entdecke Arbeiten zu Markenidentität, Editorial Design, Typografie und Geschäftsausstattung.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23232320'/%3E%3Ctext x='8' y='44' font-family='serif' font-size='36' fill='%23eee9df'%3EAM%3C/text%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
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
                  setTimeout(function() { h.classList.remove("intro"); }, 6000);
                }
              } catch (e) {}
            `,
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --display: var(--font-display), 'Arial Narrow', sans-serif;
            --serif: var(--font-serif), Georgia, serif;
            --sans: var(--font-sans), Arial, sans-serif;
          }
        ` }} />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
