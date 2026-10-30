import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "outline-dark" | "outline-light" | "dark";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_10px_30px_-10px_rgb(11_87_208/0.7)] hover:shadow-[0_18px_40px_-12px_rgb(11_87_208/0.8)]",
  light: "bg-white text-ink shadow-[0_10px_30px_-12px_rgb(0_0_0/0.4)] hover:bg-cream",
  dark: "bg-ink text-white hover:bg-ink-2 shadow-[0_10px_30px_-14px_rgb(5_11_26/0.8)]",
  "outline-dark":
    "border border-ink/15 bg-white/60 text-ink backdrop-blur hover:border-ink/30 hover:bg-white",
  "outline-light":
    "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

/**
 * Link styled as a button: lift on hover, press feedback, light sweep and an
 * arrow that slides out diagonally.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  external,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "btn-shine group inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap",
    "transition-[transform,box-shadow,background-color,border-color] duration-300 ease-[var(--ease-out-quart)]",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="relative -mr-1 inline-flex size-5 overflow-hidden" aria-hidden>
          <ArrowUpRight className="absolute inset-0 size-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-full group-hover:-translate-y-full" />
          <ArrowUpRight className="absolute inset-0 size-5 -translate-x-full translate-y-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      )}
    </>
  );

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

