import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Italiana, DM_Sans } from 'next/font/google';
import './globals.css';

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
  title: 'Sahil Sameer Siddique — Backend-Focused Full Stack Developer',
  description:
    'Backend-Focused Full Stack Developer building scalable web applications with Node.js, PostgreSQL, MongoDB, Prisma ORM, and secure APIs. Creator of PrepStack and SkillBridge AI.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23232320'/%3E%3Ctext x='7' y='44' font-family='serif' font-size='34' fill='%23eee9df'%3ESS%3C/text%3E%3C/svg%3E",
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
        {children}
      </body>
    </html>
  );
}
