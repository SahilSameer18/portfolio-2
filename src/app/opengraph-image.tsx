import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '../config/site';

export const alt = 'Sahil Sameer Siddique — Backend-Focused Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Brand display font fetched at build time. Falls back to the built-in font if the download fails. */
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800', {
        // an old user agent makes Google return a TrueType file, which the image renderer accepts
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
        },
      })
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

/** 1200x630 preview shown when the link is shared (LinkedIn, X, WhatsApp, Google). Built once at build time. */
export default async function OpenGraphImage() {
  const [font, photo] = await Promise.all([
    loadDisplayFont(),
    readFile(path.join(process.cwd(), 'public/assets/og-photo.jpg')),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;
  const family = font ? 'Barlow Condensed' : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#eeeae1',
          color: '#23231f',
          fontFamily: family,
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 64px',
          }}
        >
          <div style={{ display: 'flex', fontSize: 24, letterSpacing: 5, color: '#636057' }}>
            PORTFOLIO / 2026
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 116, lineHeight: 0.95, fontWeight: 800, whiteSpace: 'nowrap' }}>
              Sahil Sameer
            </div>
            <div style={{ display: 'flex', fontSize: 116, lineHeight: 0.95, fontWeight: 800, whiteSpace: 'nowrap' }}>
              Siddique
            </div>
            <div style={{ display: 'flex', width: 96, height: 6, background: '#9a4030', margin: '30px 0 24px' }} />
            <div style={{ display: 'flex', fontSize: 40, color: '#9a4030' }}>{site.role}</div>
          </div>

          <div style={{ display: 'flex', fontSize: 26, letterSpacing: 2, color: '#636057' }}>
            NODE.JS / POSTGRESQL / MONGODB / REACT / AI
          </div>
        </div>

        <div style={{ display: 'flex', width: 400, height: '100%' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} width={400} height={630} style={{ objectFit: 'cover', objectPosition: '50% 30%' }} alt="" />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: 'Barlow Condensed', data: font, weight: 800, style: 'normal' }] : undefined,
    }
  );
}
