'use client';

import { usePortfolioMotion } from '@/hooks/usePortfolioMotion';

/** Client island: attaches all scroll/intro/cursor motion to the server-rendered page. Renders nothing. */
export function MotionController() {
  usePortfolioMotion();
  return null;
}


