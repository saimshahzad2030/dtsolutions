"use client";

import { useState } from "react";
import { portfolioPage } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  ReceiptText,
  UsersRound,
  ChartNoAxesCombined,
  Landmark,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const pillarIcons = [ReceiptText, UsersRound, ChartNoAxesCombined, Landmark];
  const feature = portfolioPage.feature;
  const engagements = portfolioPage.engagements;

  const filteredItems = engagements.items.filter((item) => {
    if (activeFilter === "All") return true;
    return item.filter === activeFilter;
  });

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-32">
      {/* Header */}
      <section className="container-x">
        <SectionHeading
          as="h1"
          eyebrow={portfolioPage.eyebrow}
          title={portfolioPage.title}
          description={portfolioPage.description}
        />
        <div data-reveal className="mt-8">
          <Button href="/contact">Discuss a similar project</Button>
        </div>
      </section>

      {/* Featured Project: ePay Balochistan */}
      <section
        id="epay-balochistan"
        className="container-x mt-20 scroll-mt-28"
      >
        <div className="rounded-3xl border border-line bg-white p-8 sm:p-12 shadow-[0_15px_40px_rgba(5,11,26,0.04)]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3.5 py-1 text-xs font-semibold text-amber-700">
              <span className="size-2 rounded-full bg-amber-500 animate-ping" />
              {feature.status}
            </span>
            <span className="rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
              {feature.category}
            </span>
          </div>

          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            {feature.title}
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">
            {feature.body}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-start">
            {/* 4 Feature Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {feature.pillars.map((pillar, i) => {
                const Icon = pillarIcons[i % pillarIcons.length];
                return (
                  <div
                    key={i}
                    className="flex flex-col justify-between rounded-2xl bg-paper/60 p-6 border border-line/60"
                  >
                    <div>
                      <span className="flex size-11 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold text-heading">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Spec Sheet Badge */}
            <div className="lg:col-span-5 rounded-2xl bg-ink text-white p-6 sm:p-8 relative overflow-hidden">
              <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-20" />
              <div className="relative z-10">
                <span className="text-[0.68rem] font-bold uppercase tracking-widest text-sky">
                  Project Architecture
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  {feature.card.title}
                </h3>
                <p className="text-xs text-white/60">
                  {feature.card.subtitle}
                </p>

                {/* Key Spec Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3 border-y border-white/10 py-5">
                  {feature.card.facts.map((fact, idx) => (
                    <div key={idx} className="rounded-xl bg-white/5 p-3">
                      <span className="text-xs font-semibold text-white/60 block">
                        {fact.label}
                      </span>
                      <span className="font-display text-base font-bold text-white">
                        {fact.value} {fact.detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Scope points */}
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-3">
                    Key Deliverables
                  </span>
                  <ul className="space-y-2">
                    {feature.card.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-white/80">
                        <CheckCircle2 className="size-3.5 text-amber shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Engagements with Filter */}
      <section
        id="government-digitization"
        className="container-x mt-20 sm:mt-28 scroll-mt-28"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-line pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              {engagements.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl">
              {engagements.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
              {engagements.description}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {engagements.filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-brand text-white shadow-sm"
                    : "bg-paper text-body hover:bg-paper/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Engagement List */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-line bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <span className="rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
                {item.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-heading">
                {item.title}
              </h3>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="rounded-2xl bg-paper/60 p-4 border border-line/50">
                  <span className="font-bold text-heading block">Challenge</span>
                  <p className="mt-1 text-muted leading-relaxed">{item.problem}</p>
                </div>
                <div className="rounded-2xl bg-paper/60 p-4 border border-line/50">
                  <span className="font-bold text-brand block">Approach</span>
                  <p className="mt-1 text-body leading-relaxed">{item.solution}</p>
                </div>
                <div className="rounded-2xl bg-paper/60 p-4 border border-line/50">
                  <span className="font-bold text-emerald-700 block">Outcome</span>
                  <p className="mt-1 text-muted leading-relaxed">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

