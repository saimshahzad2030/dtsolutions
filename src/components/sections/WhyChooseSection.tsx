import { whyChoose } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPinned, MessagesSquare, ShieldCheck, LifeBuoy } from "lucide-react";

export function WhyChooseSection() {
  const iconMap = {
    map: MapPinned,
    chat: MessagesSquare,
    shield: ShieldCheck,
    support: LifeBuoy,
  };

  return (
    <section className="relative py-24 sm:py-32 bg-ink text-white overflow-hidden">
      {/* Background aesthetics */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-10 size-[32rem] rounded-full bg-brand/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-20 size-[30rem] rounded-full bg-sky/15 blur-[120px]"
      />
      <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-x relative z-10">
        <SectionHeading
          tone="light"
          eyebrow={whyChoose.eyebrow}
          title={whyChoose.title}
          description={whyChoose.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.items.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <div
                key={idx}
                data-reveal
                style={{ "--d": `${idx * 80}ms` } as React.CSSProperties}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:border-sky/40 hover:bg-white/10"
              >
                <div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-sky group-hover:scale-110 group-hover:bg-sky group-hover:text-ink transition-all">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

