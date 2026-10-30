import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { activeProjects } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ActiveProjectsSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container-x">
        <SectionHeading
          eyebrow={activeProjects.eyebrow}
          title={activeProjects.title}
          description={activeProjects.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {activeProjects.items.map((project, idx) => (
            <div
              key={project.id}
              data-reveal
              style={{ "--d": `${idx * 100}ms` } as React.CSSProperties}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(5,11,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber-700">
                    <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Active Engagement
                  </span>
                  <span className="font-mono text-xs font-semibold text-muted/60">
                    Case 0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-heading">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.body}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-body">
                  <span className="flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1">
                    <CheckCircle2 className="size-3.5 text-brand" /> Enterprise-Grade
                  </span>
                  <span className="flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1">
                    <CheckCircle2 className="size-3.5 text-brand" /> Provincial Scale
                  </span>
                </div>
              </div>

              <div className="mt-8 border-t border-line/60 pt-5">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors group-hover:text-brand-deep"
                >
                  <span>Learn more about this platform</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

