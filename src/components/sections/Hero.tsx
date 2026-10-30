"use client";

import Image from "next/image";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { hero, bookCallHref } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const words = hero.title.split(" ");

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-ink text-white">
      {/* Background glow layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[45rem] rounded-full bg-brand/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 size-[30rem] rounded-full bg-flame/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-10 size-[28rem] rounded-full bg-sky/15 blur-[120px]"
      />
      <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-x relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="enter inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-200 backdrop-blur-md">
              <Sparkles className="size-3.5 text-amber animate-pulse" />
              <span>Enterprise Digital Transformation</span>
            </div>

            {/* Main Headline with Word Reveal */}
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-[4.2rem] leading-[1.08]">
              {words.map((word, i) => (
                <span key={i} className="word-mask mr-3">
                  <span
                    style={{ "--i": i } as React.CSSProperties}
                    className={
                      word.toLowerCase().includes("built") || word.toLowerCase().includes("businesses")
                        ? "text-gradient"
                        : "text-white"
                    }
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Description */}
            <p
              className="enter mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl"
              style={{ "--d": "400ms" } as React.CSSProperties}
            >
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div
              className="enter mt-8 flex flex-wrap items-center gap-4 sm:gap-5"
              style={{ "--d": "550ms" } as React.CSSProperties}
            >
              <Button href={bookCallHref} size="lg" variant="primary">
                Start a Project
              </Button>
              <Button href="/services" size="lg" variant="outline-light">
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="enter mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full border-t border-white/10 pt-8"
              style={{ "--d": "700ms" } as React.CSSProperties}
            >
              {hero.trust.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-amber mt-0.5" />
                  <span className="text-xs font-medium text-white/80 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual 3D Orbit Art */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              className="enter relative w-full max-w-lg aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              style={{ "--d": "300ms" } as React.CSSProperties}
            >
              {/* Abstract Glass Orbit Render */}
              <Image
                src="/images/orbit-glass.jpg"
                alt="Digital systems architecture visualization"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />

              {/* Glowing overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />

              {/* Floating Stat Widget Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-[0.68rem] uppercase tracking-wider font-semibold text-sky-200">
                      Enterprise Solutions
                    </span>
                    <span className="font-display text-lg font-bold text-white">
                      Scalable &amp; Reliable
                    </span>
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-amber/20 text-amber border border-amber/30">
                    <ArrowRight className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

