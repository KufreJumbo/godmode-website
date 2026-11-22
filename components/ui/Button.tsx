import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./Icons";

type Variant = "primary" | "gold" | "outline" | "outlineLight" | "white" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-700 shadow-[0_8px_24px_-12px_rgba(0,33,96,0.6)]",
  gold: "bg-gold text-navy hover:bg-gold-200 shadow-[0_8px_24px_-12px_rgba(218,178,79,0.9)]",
  outline: "border border-navy/15 bg-white text-navy hover:border-navy hover:bg-navy/[0.03]",
  // For dark backgrounds such as the home hero video.
  outlineLight: "border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:border-white/70 hover:bg-white/10",
  white: "bg-white text-navy hover:bg-gold-50",
  ghost: "text-navy hover:bg-navy/[0.05]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps &
  (
    | ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">)
    | ({ href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">)
  );

export function Button({ variant = "primary", size = "md", arrow = false, className, children, ...rest }: ButtonProps) {
  const classes = cn(
    "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-300 active:scale-[0.98] whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkProps } = rest as { href: string } & Omit<ComponentProps<typeof Link>, "href">;
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = rest as ComponentProps<"button">;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
