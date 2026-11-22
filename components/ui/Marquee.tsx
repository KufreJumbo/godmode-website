import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  gap?: string;
}

/**
 * Continuous horizontal scroll. Content is duplicated once so the loop is seamless;
 * the copy is hidden from assistive tech. Pauses on hover; stills under reduced motion.
 */
export function Marquee({ children, reverse = false, className, gap = "gap-4" }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden mask-fade-x pause-on-hover", className)}>
      <div className={cn("flex w-max", gap, reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        <div className={cn("flex shrink-0", gap)}>{children}</div>
        <div className={cn("flex shrink-0", gap)} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
