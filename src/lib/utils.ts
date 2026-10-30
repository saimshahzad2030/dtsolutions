export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Inline style helper for staggered CSS animation/transition delays. */
export function delay(ms: number) {
  return { "--d": `${ms}ms` } as React.CSSProperties;
}

export const pad = (n: number) => String(n).padStart(2, "0");

