import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Home-screen icon for iOS. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#23231f',
          color: '#eeeae1',
          fontSize: 108,
          letterSpacing: -6,
        }}
      >
        ss
        <span style={{ color: '#c0705c' }}>.</span>
      </div>
    ),
    size
  );
}


