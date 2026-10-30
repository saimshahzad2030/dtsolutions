import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-paper/60 border-y border-line/70 relative">
      <div className="container-x">
        <SectionHeading
          eyebrow={processSteps.eyebrow}
          title={processSteps.title}
          description={processSteps.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.steps.map((step, idx) => (
            <div
              key={idx}
              data-reveal
              style={{ "--d": `${idx * 80}ms` } as React.CSSProperties}
              className="relative flex flex-col justify-between rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <span className="font-display text-4xl font-extrabold text-brand/20">
                  0{idx + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-heading">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand" />
                <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted/80">
                  Phase 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

