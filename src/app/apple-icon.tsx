import { ImageResponse } from 'next/og';
import { colors } from '../config/colors';

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
          background: colors.ink,
          color: colors.paper,
          fontSize: 108,
          letterSpacing: -6,
        }}
      >
        ss
        <span style={{ color: colors.accentLight }}>.</span>
      </div>
    ),
    size
  );
}


