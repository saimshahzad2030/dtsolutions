"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Inertia smooth scrolling (Lenis) for precise pointers only. Touch devices and
 * users who prefer reduced motion keep native scrolling. Lenis is imported
 * lazily so it never blocks the initial render.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let raf = 0;
    let destroyed = false;
    let lenis: import("lenis").default | undefined;

    import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      lenis = new Lenis({ duration: 1.1, anchors: { offset: -96 }, autoRaf: false });
      (window as unknown as { __lenis?: typeof lenis }).__lenis = lenis;
      const loop = (t: number) => {
        lenis?.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  // Keep Lenis' internal position in sync after client-side navigation.
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { resize: () => void } }).__lenis;
    lenis?.resize();
  }, [pathname]);

  return null;
}

