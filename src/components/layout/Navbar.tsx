"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "motion/react";
import { Menu } from "lucide-react";
import { bookCallHref, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Shrink + solidify after leaving the top; hide on scroll down, reveal on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 480 && y > prev + 4);
    if (y < prev - 4) setHidden(false);
  });

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  /* ---- sliding hover indicator ---- */
  const listRef = useRef<HTMLUListElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);

  const target = hovered ?? navLinks.find((l) => isActive(pathname, l.href))?.href ?? null;

  const measure = useCallback(() => {
    const list = listRef.current;
    if (!list || !target) return setIndicator(null);
    const el = list.querySelector<HTMLElement>(`[data-href="${target}"]`);
    if (!el) return setIndicator(null);
    setIndicator({ x: el.offsetLeft, w: el.offsetWidth });
  }, [target]);

  useIsoLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <>
      <m.header
        className="enter fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
        style={{ "--d": "0ms" } as React.CSSProperties}
        animate={{ y: hidden && !open ? "-120%" : "0%" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-x">
          <nav
            aria-label="Primary"
            className={cn(
              "flex items-center justify-between gap-4 rounded-full border pr-2 pl-4 transition-[background-color,box-shadow,border-color,height] duration-500 ease-[var(--ease-out-expo)] sm:pl-5",
              scrolled
                ? "h-15 border-ink/[0.06] bg-white/85 shadow-[0_12px_40px_-18px_rgb(5_11_26/0.45)] backdrop-blur-xl"
                : "h-17 border-white/40 bg-white/75 shadow-[0_8px_30px_-20px_rgb(0_0_0/0.6)] backdrop-blur-lg",
            )}
          >
            <Logo priority className={cn("transition-[height] duration-500", scrolled ? "h-10" : "h-12")} />

            <ul
              ref={listRef}
              className="relative hidden items-center lg:flex"
              onMouseLeave={() => setHovered(null)}
            >
              {indicator && (
                <m.span
                  aria-hidden
                  className="absolute top-1/2 left-0 h-9 -translate-y-1/2 rounded-full bg-brand/[0.08]"
                  initial={false}
                  animate={{ x: indicator.x, width: indicator.w }}
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-href={link.href}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={() => setHovered(link.href)}
                      onFocus={() => setHovered(link.href)}
                      onBlur={() => setHovered(null)}
                      className={cn(
                        "relative z-10 block rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-300",
                        active ? "text-brand-deep" : "text-ink/70 hover:text-ink",
                      )}
                    >
                      {link.label}
                      {active && (
                        <span
                          aria-hidden
                          className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-amber"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <Button href={bookCallHref} size="md" className="hidden sm:inline-flex">
                Book a Call
              </Button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="inline-flex size-11 items-center justify-center rounded-full bg-ink text-white transition-transform active:scale-95 lg:hidden"
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </div>
          </nav>
        </div>
      </m.header>

      <AnimatePresence>
        {open && <MobileMenu pathname={pathname} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

