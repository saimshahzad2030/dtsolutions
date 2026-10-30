"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { m } from "motion/react";
import { ArrowUpRight, Mail, X } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { bookCallHref, navLinks, site } from "@/data/site";
import { cn, pad } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock scroll, focus the close button, close on Escape and trap focus.
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <m.div
      id="mobile-menu"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[60] overflow-y-auto bg-ink text-white lg:hidden"
      initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.6rem)" }}
      animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.6rem)" }}
      exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.6rem)" }}
      transition={{ duration: 0.65, ease }}
    >
      <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full bg-brand/40 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 size-[22rem] rounded-full bg-flame/25 blur-[100px]"
      />

      <div className="relative flex min-h-full flex-col px-6 pt-6 pb-10">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold tracking-tight">DT Solutions</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-11 items-center justify-center rounded-full bg-white text-ink transition-transform active:scale-95"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <ul className="mt-14 flex flex-col">
          {navLinks.map((link, i) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <m.li
                key={link.href}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16, transition: { duration: 0.2 } }}
                transition={{ delay: 0.18 + i * 0.06, duration: 0.7, ease }}
                className="border-b border-white/10"
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className="group flex items-center justify-between py-5"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-white/60">{pad(i + 1)}</span>
                    <span
                      className={cn(
                        "font-display text-4xl font-semibold tracking-tight transition-colors xs:text-5xl",
                        active ? "text-gradient" : "text-white group-hover:text-sky-200",
                      )}
                    >
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-6 text-white/60 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  />
                </Link>
              </m.li>
            );
          })}
        </ul>

        <m.div
          className="mt-auto pt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease }}
        >
          <Button href={bookCallHref} size="lg" variant="light" className="w-full">
            Book a Call
          </Button>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="size-4" aria-hidden /> {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <LinkedInIcon className="size-4" aria-hidden /> LinkedIn
            </a>
          </div>
        </m.div>
      </div>
    </m.div>
  );
}

