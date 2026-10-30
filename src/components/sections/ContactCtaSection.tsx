import { contactCta, bookCallHref } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function ContactCtaSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-ink text-white">
      {/* Background aesthetics */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[40rem] rounded-full bg-brand/20 blur-[140px]"
      />
      <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-x relative z-10 text-center">
        <div data-reveal className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-200">
          <span className="size-1.5 rounded-full bg-amber" />
          <span>{contactCta.eyebrow}</span>
        </div>

        <h2
          data-reveal
          style={{ "--d": "100ms" } as React.CSSProperties}
          className="mx-auto mt-6 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white"
        >
          {contactCta.title}
        </h2>

        <p
          data-reveal
          style={{ "--d": "200ms" } as React.CSSProperties}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {contactCta.description}
        </p>

        <div
          data-reveal
          style={{ "--d": "300ms" } as React.CSSProperties}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          <Button href="/contact" size="lg" variant="light">
            Get in touch
          </Button>
          <Button href={bookCallHref} size="lg" variant="outline-light">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
}

