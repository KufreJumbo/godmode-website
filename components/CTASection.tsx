import type { ReactNode } from "react";
import { site, whatsappHref } from "@/lib/site";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Check, WhatsApp } from "./ui/Icons";

interface CTASectionProps {
  title: ReactNode;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
  notes?: string[];
}

export function CTASection({
  title,
  description = "Start with a free strategy call. No pressure, no commitment: a straight conversation about what AI could do for your business.",
  primary = { label: "Book a Free AI Strategy Call", href: "/contact" },
  secondary,
  notes = ["Free strategy call", "No commitment", site.replyPromise],
}: CTASectionProps) {
  return (
    <section className="container py-10 md:py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-white md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/25 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-blue-500/30 blur-[120px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-display-lg font-bold text-balance">{title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">{description}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primary.href} variant="gold" size="lg" arrow>
                {primary.label}
              </Button>
              {secondary !== null && (
                <Button href={secondary?.href ?? whatsappHref} variant="white" size="lg">
                  {!secondary && <WhatsApp size={18} className="text-[#25D366]" />}
                  {secondary?.label ?? "Chat on WhatsApp"}
                </Button>
              )}
            </div>
            {notes.length > 0 && (
              <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
                {notes.map((n) => (
                  <li key={n} className="flex items-center gap-2">
                    <Check size={16} className="text-gold" />
                    {n}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
