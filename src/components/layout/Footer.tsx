import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { site, navLinks, bookCallHref } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-ink text-white overflow-hidden">
      {/* Background glow and subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 size-[32rem] rounded-full bg-brand/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-20 size-[26rem] rounded-full bg-flame/15 blur-[120px]"
      />
      <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-x relative pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <Logo className="h-11 brightness-110" />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              {site.blurb}
            </p>
            <div className="mt-8">
              <Button href={bookCallHref} variant="light" size="md">
                Book a Consultation
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 sm:col-span-6">
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-white/90">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="inline-block text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Insights & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 sm:col-span-6">
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-white/90">
              Direct Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-sky transition-colors group-hover:bg-white/20 group-hover:text-white">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-white/50">Email</span>
                    <span className="font-medium text-white">{site.email}</span>
                  </div>
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-sky">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50">Location</span>
                  <span className="font-medium text-white">{site.location}</span>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-sky">
                  <Clock className="size-4" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50">Operating Hours</span>
                  <span className="font-medium text-white">
                    {site.hours.days} ({site.hours.time})
                  </span>
                </div>
              </li>

              <li className="pt-2">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/20"
                >
                  <LinkedInIcon className="size-4" />
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; 2026 {site.legalName}. Based in {site.location}.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-white/70">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              {site.replyTime}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
