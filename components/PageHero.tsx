import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  size?: "xl" | "lg";
}

const d = (s: number) => ({ animationDelay: `${s}s` });

/** Inner-page intro. Uses CSS entrance animation so it is visible before JavaScript loads. */
export function PageHero({ eyebrow, title, description, children, align = "left", size = "xl" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid bg-grid-fade" aria-hidden />
      <div className="container relative">
        <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <p className={cn("eyebrow animate-rise", align === "center" && "justify-center")} style={d(0)}>
              {eyebrow}
            </p>
          )}
          <h1
            className={cn("animate-rise mt-6 font-extrabold text-navy text-balance", size === "xl" ? "text-display-xl" : "text-display-lg")}
            style={d(0.1)}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn("animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-slate md:text-xl", align === "center" && "mx-auto")}
              style={d(0.2)}
            >
              {description}
            </p>
          )}
          {children && (
            <div className={cn("animate-rise mt-10 flex flex-col gap-3 sm:flex-row", align === "center" && "justify-center")} style={d(0.3)}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
