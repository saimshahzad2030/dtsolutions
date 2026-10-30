import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase",
        tone === "dark"
          ? "border border-brand/15 bg-brand/[0.06] text-brand-deep"
          : "border border-white/15 bg-white/[0.06] text-sky-200",
        className,
      )}
    >
      <span className="relative flex size-1.5" aria-hidden>
        <span className="absolute inset-0 rounded-full bg-amber" />
      </span>
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}

/** Eyebrow + title + description, revealed in a short stagger. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div data-reveal>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </div>
      <Tag
        data-reveal
        style={{ "--d": "80ms" } as React.CSSProperties}
        className={cn(
          "mt-5 text-[2rem] leading-[1.08] font-bold sm:text-[2.6rem] lg:text-[3.1rem]",
          tone === "light" && "!text-white",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          data-reveal
          style={{ "--d": "160ms" } as React.CSSProperties}
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-white/70" : "text-muted",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

