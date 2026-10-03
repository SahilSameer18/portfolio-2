/**
 * Brand palette for places Tailwind cannot reach (share image, favicons).
 * Keep in sync with the @theme block in src/app/globals.css.
 */
export const colors = {
  paper: '#eeeae1',
  ink: '#23231f',
  /** darker ink used by the Work section */
  inkDeep: '#191a17',
  /** slightly darker paper used by the Education section */
  paperAlt: '#e3dfd5',
  muted: '#636057',
  /** terracotta on light backgrounds */
  accent: '#9a4030',
  /** terracotta for large italic headings on light backgrounds */
  accentSoft: '#a2654f',
  /** terracotta for text and details on dark backgrounds */
  accentLight: '#d7a68f',
} as const;


