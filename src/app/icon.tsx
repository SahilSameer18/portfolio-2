import { ImageResponse } from 'next/og';
import { colors } from '../config/colors';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

/** Favicon: the "ss." monogram on the site's ink colour. */
export default function Icon() {
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
          fontSize: 38,
          letterSpacing: -2,
        }}
      >
        ss
        <span style={{ color: colors.accentLight }}>.</span>
      </div>
    ),
    size
  );
}
