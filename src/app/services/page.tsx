import type { Metadata } from "next";
import { services, servicesPage, bookCallHref } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: servicesPage.description,
};

export default function ServicesListPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-32">
      {/* Header */}
      <section className="container-x">
        <SectionHeading
          as="h1"
          eyebrow={servicesPage.eyebrow}
          title={servicesPage.title}
          description={servicesPage.description}
        />
        <div data-reveal className="mt-8 flex flex-wrap gap-4">
          <Button href={bookCallHref}>Discuss your requirements</Button>
          <Button href="/portfolio" variant="outline-dark">
            See case studies
          </Button>
        </div>
      </section>

      {/* Overview Intro */}
      <section className="container-x mt-20">
        <div className="border-t border-line pt-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            {servicesPage.offerEyebrow}
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl">
            {servicesPage.offerTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted">
            {servicesPage.offerDescription}
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="mt-14 space-y-12">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              id={service.slug}
              data-reveal
              className="scroll-mt-32 rounded-3xl border border-line bg-white p-8 sm:p-12 shadow-[0_10px_35px_rgba(5,11,26,0.03)] transition-all hover:border-brand/40"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Left col */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-brand/5 text-brand">
                        <ServiceIcon name={service.icon} className="size-6" />
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted/60">
                        Service 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <div className="mt-6 rounded-2xl bg-paper/60 p-4 border border-line/60">
                      <span className="block text-xs font-bold uppercase tracking-wider text-brand">
                        Who it is for
                      </span>
                      <p className="mt-1.5 text-xs sm:text-sm text-body font-medium">
                        {service.audience}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-line/60">
                    <Button
                      href={`/contact?service=${encodeURIComponent(service.projectType)}#enquiry`}
                      size="md"
                    >
                      Talk about this service
                    </Button>
                  </div>
                </div>

                {/* Right col: deliverables & outcomes */}
                <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-paper/40 p-6 sm:p-8 border border-line/50">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-heading">
                        Typical deliverables
                      </h4>
                      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {service.deliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-body">
                            <CheckCircle2 className="size-4 shrink-0 text-brand mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-line/60 pt-6">
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-heading">
                        Example outcomes
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {service.outcomes.map((out, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-body">
                            <ArrowRight className="size-3.5 shrink-0 text-amber mt-1" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Optional extra scope section */}
                    {service.scope && (
                      <div className="border-t border-line/60 pt-6">
                        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand">
                          Detailed gateway scope
                        </h4>
                        <div className="mt-3 space-y-3">
                          {service.scope.map((s, i) => (
                            <div key={i} className="text-xs text-body">
                              <span className="font-semibold text-heading block">
                                {s.title}
                              </span>
                              <p className="mt-0.5 text-muted">{s.body}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

