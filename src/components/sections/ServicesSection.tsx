import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, servicesIntro } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="container-x">
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          description={servicesIntro.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              data-reveal
              style={{ "--d": `${idx * 60}ms` } as React.CSSProperties}
              className="group relative flex flex-col justify-between rounded-3xl border border-line bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_20px_40px_rgba(11,87,208,0.08)]"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-brand/5 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <ServiceIcon name={service.icon} className="size-7" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-muted/60">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-heading">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-8 border-t border-line/60 pt-4">
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand transition-colors group-hover:text-brand-deep"
                >
                  <span>Explore service</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

