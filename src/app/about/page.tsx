import type { Metadata } from "next";
import Image from "next/image";
import { aboutPage } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Sparkles, Building2, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutPage.description,
};

export default function AboutPage() {
  const stageIcons = [Building2, TrendingUp, Award];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-32">
      {/* Hero Header */}
      <section className="container-x">
        <SectionHeading
          as="h1"
          eyebrow={aboutPage.eyebrow}
          title={aboutPage.title}
          description={aboutPage.description}
        />
        <div data-reveal className="mt-8">
          <Button href="/contact">Start a conversation</Button>
        </div>
      </section>

      {/* Mission & Specialisations */}
      <section className="mt-20 sm:mt-28 border-y border-line/70 bg-paper/50 py-20 sm:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                {aboutPage.mission.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl leading-tight">
                {aboutPage.mission.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {aboutPage.mission.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Specialisations list */}
              <div className="mt-8 border-t border-line/80 pt-8">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-heading">
                  {aboutPage.mission.specialisesTitle}
                </h3>
                <ul className="mt-4 space-y-3">
                  {aboutPage.mission.specialises.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 shrink-0 text-amber mt-1" />
                      <span className="text-sm font-medium text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div
                data-reveal="scale"
                className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-line bg-white shadow-2xl"
              >
                <Image
                  src="/images/story-layers.jpg"
                  alt="Abstract software layer architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="container-x mt-20 sm:mt-28">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            {aboutPage.story.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            {aboutPage.story.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {aboutPage.story.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {aboutPage.story.stages.map((stage, idx) => {
            const Icon = stageIcons[idx % stageIcons.length];
            return (
              <div
                key={idx}
                data-reveal
                style={{ "--d": `${idx * 100}ms` } as React.CSSProperties}
                className="relative flex flex-col justify-between rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand/5 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted/70">
                      {stage.label}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-heading">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {stage.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="container-x mt-20 sm:mt-28">
        <div className="rounded-3xl bg-ink text-white p-8 sm:p-14 relative overflow-hidden">
          <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
              <Sparkles className="size-3 text-amber" />
              <span>{aboutPage.team.eyebrow}</span>
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {aboutPage.team.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70">
              {aboutPage.team.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {aboutPage.team.disciplines.map((item, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

