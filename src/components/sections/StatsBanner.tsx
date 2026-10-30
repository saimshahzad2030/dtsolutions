import { growth } from "@/data/site";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TrendingUp, Users, Clock, Globe } from "lucide-react";

export function StatsBanner() {
  const icons = [TrendingUp, Users, Clock, Globe];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12">
      <div className="container-x">
        <div
          data-reveal="scale"
          className="rounded-3xl border border-line bg-white/95 p-6 sm:p-10 shadow-[0_20px_50px_rgba(5,11,26,0.08)] backdrop-blur-xl"
        >
          {/* Section heading summary */}
          <div className="mb-8 border-b border-line pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                {growth.title}
              </span>
              <p className="mt-1 text-sm sm:text-base font-medium text-body max-w-xl">
                {growth.description}
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
              Active System Engagements
            </div>
          </div>

          {/* Numbers Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
            {growth.stats.map((stat, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between rounded-2xl bg-paper/60 p-5 transition-all duration-300 hover:bg-paper hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="size-5" />
                    </span>
                    {stat.kind === "text" && "prefix" in stat && (
                      <span className="text-[0.68rem] font-semibold tracking-wider uppercase text-muted">
                        {stat.prefix}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="font-display text-2xl font-extrabold tracking-tight text-heading sm:text-3xl lg:text-4xl">
                      {stat.kind === "count" ? (
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      ) : (
                        <span>{stat.value}</span>
                      )}
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-muted">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
