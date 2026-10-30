"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

/**
 * Loads only the DOM animation feature set (~15kb) instead of the full
 * Motion bundle, and makes every animation respect prefers-reduced-motion.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

