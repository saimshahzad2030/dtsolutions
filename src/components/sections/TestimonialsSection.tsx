import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container-x">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.items.map((item, idx) => (
            <div
              key={idx}
              data-reveal
              style={{ "--d": `${idx * 100}ms` } as React.CSSProperties}
              className="relative flex flex-col justify-between rounded-3xl border border-line bg-white p-8 shadow-[0_10px_30px_rgba(5,11,26,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
            >
              <div>
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand/5 text-brand">
                  <Quote className="size-5" />
                </span>
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-body italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 border-t border-line pt-5">
                <div className="font-display font-bold text-heading">
                  {item.name}
                </div>
                <div className="text-xs font-medium text-muted">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

