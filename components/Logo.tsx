import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md";
}

/** Logo mark plus wordmark. `tone="dark"` is for navy backgrounds. */
export function Logo({ className, tone = "light", size = "md" }: LogoProps) {
  const dark = tone === "dark";
  const markSize = size === "sm" ? 34 : 40;
  return (
    <Link href="/" aria-label="GodMode AI Solutions, home" className={cn("flex items-center gap-3", className)}>
      {/* On navy, the light variant turns the logo's navy to white and keeps the gold crown. */}
      <span className="flex shrink-0 items-center justify-center" style={{ width: markSize, height: markSize }}>
        <Image
          src={dark ? "/brand/logo-mark-light.png" : "/brand/logo-mark.png"}
          alt=""
          // Intrinsic aspect ratios: logo-mark.png is 247x309, logo-mark-light.png is 267x310.
          width={Math.round(markSize * (dark ? 267 / 310 : 247 / 309))}
          height={markSize}
          priority={!dark}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-[17px] font-extrabold tracking-[-0.02em]", dark ? "text-white" : "text-navy")}>
          GodMode
        </span>
        <span className={cn("mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em]", dark ? "text-gold-200" : "text-gold-600")}>
          AI Solutions
        </span>
      </span>
    </Link>
  );
}
