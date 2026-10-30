import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** The original DT Solutions logo, served through next/image (WebP/AVIF). */
export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="DT Solutions — home"
      className={cn("relative inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/images/dt-solutions-logo.png"
        alt="DT Solutions logo"
        width={609}
        height={410}
        preload={priority}
        sizes="96px"
        className="h-full w-auto"
      />
    </Link>
  );
}
