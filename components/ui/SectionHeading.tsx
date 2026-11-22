import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  size?: "lg" | "md";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  size = "lg",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-5", align === "center" && "justify-center", dark && "text-gold-200")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-bold text-balance",
          size === "lg" ? "text-display-lg" : "text-display-md",
          dark ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed text-pretty", dark ? "text-white/70" : "text-slate")}>{description}</p>
      )}
    </Reveal>
  );
}
