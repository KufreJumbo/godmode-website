import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { ArrowUpRight, Bolt, Book, Code, Palette } from "@/components/ui/Icons";
import { services, type ServiceSlug } from "@/lib/site";
import { cn } from "@/lib/cn";

export const serviceIcons: Record<ServiceSlug, (p: { size?: number; className?: string }) => JSX.Element> = {
  "ai-transformation": Bolt,
  training: Book,
  "web-development": Code,
  "creative-studio": Palette,
};

export default function WhatWeDo() {
  const lead = services.filter((s) => s.lead);
  const supporting = services.filter((s) => !s.lead);

  return (
    <section className="bg-mist/70 py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Everything your business needs to run smarter, <span className="serif-accent text-navy-700">with one partner.</span>
              </>
            }
          />
          <Link href="/services" className="link-underline shrink-0 text-base">
            All services <ArrowUpRight size={18} />
          </Link>
        </div>

        <RevealStagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {lead.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <RevealItem key={s.slug} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="card card-hover group flex h-full flex-col p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <span className="text-sm font-semibold text-slate-500">{s.index}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-bold text-navy text-balance">{s.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate">{s.summary}</p>
                  <span className="link-underline mt-8 text-sm">
                    {s.cta} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}

          {supporting.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <RevealItem key={s.slug} className="lg:col-span-3">
                <Link
                  href={`/services/${s.slug}`}
                  className={cn(
                    "card card-hover group flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between",
                  )}
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-50 text-navy transition-colors group-hover:bg-gold">
                      <Icon size={22} />
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                        <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-gold-700">
                          Supporting
                        </span>
                      </div>
                      <p className="mt-2 max-w-2xl leading-relaxed text-slate">{s.summary}</p>
                    </div>
                  </div>
                  <span className="link-underline shrink-0 text-sm">
                    {s.cta} <ArrowUpRight size={16} />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
