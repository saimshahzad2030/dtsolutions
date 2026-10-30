"use client";

import { useEffect } from "react";

/**
 * One shared IntersectionObserver that reveals every `[data-reveal]` element
 * as it scrolls into view. Keeps section components as Server Components and
 * animates only opacity/transform (GPU-friendly). Newly rendered routes are
 * picked up through a MutationObserver.
 */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    const scan = (root: ParentNode) =>
      root.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));

    scan(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-reveal]:not(.is-in)")) io.observe(node);
          scan(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

