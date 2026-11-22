import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { serviceIcons } from "@/components/home/WhatWeDo";
import { services } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata({
  title: "AI, Training, Web & Marketing Services",
  description: "AI transformation and automation, AI training, web and software development, and digital marketing for businesses in Nigeria. One partner for all of it.",
  path: "/services",
});

const system = [
  { title: "Strategy", text: "Where AI pays back first" },
  { title: "Implementation", text: "Systems built and embedded" },
  { title: "Digital products", text: "Websites and software that convert" },
  { title: "Creative", text: "Brand and content that reach people" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything your business needs to run smarter, <span className="serif-accent text-navy-700">with one partner.</span>
          </>
        }
        description="Three lead services and one supporting studio. Pick the door that matches your problem, or start with a free call and we'll point you to the right one."
      >
        <Button href="/contact" size="lg" arrow>
          Book a Free AI Strategy Call
        </Button>
      </PageHero>

      <section className="container pb-24 md:pb-32">
        <RevealStagger className="divide-y divide-line border-y border-line">
          {services.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid gap-6 py-10 transition-colors md:grid-cols-12 md:items-center md:py-12"
                >
                  <div className="flex items-center gap-5 md:col-span-5">
                    <span
                      className={cn(
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors",
                        s.lead ? "bg-navy text-white group-hover:bg-gold group-hover:text-navy" : "bg-gold-50 text-navy group-hover:bg-gold",
                      )}
                    >
                      <Icon size={24} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {s.index} · {s.lead ? "Lead service" : "Supporting"}
                      </p>
                      <h2 className="mt-1 text-display-sm font-bold text-navy">{s.title}</h2>
                    </div>
                  </div>
                  <p className="leading-relaxed text-slate md:col-span-5">{s.summary}</p>
                  <div className="md:col-span-2 md:text-right">
                    <span className="link-underline text-sm">
                      {s.cta} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </section>

      <section className="bg-mist/70 py-24 md:py-32">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="How they connect"
            title={
              <>
                One growth system, <span className="serif-accent text-navy-700">not four vendors.</span>
              </>
            }
            description="Strategy decides what to build. Implementation makes it run. Digital products and creative bring the customers. Each one feeds the next."
          />
          <Reveal className="mt-14">
            <ol className="grid gap-4 md:grid-cols-4">
              {system.map((n, i) => (
                <li key={n.title} className="relative">
                  <div className="card h-full p-7">
                    <span className="font-serif text-3xl italic text-gold-600">0{i + 1}</span>
                    <h3 className="mt-4 text-lg font-bold text-navy">{n.title}</h3>
                    <p className="mt-1 text-sm text-slate">{n.text}</p>
                  </div>
                  {i < system.length - 1 && (
                    <span className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-navy md:flex">
                      <ArrowRight size={14} />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={
          <>
            Not sure where to start? <span className="serif-accent text-gold-200">That's the first call.</span>
          </>
        }
        description="Tell us what's slowing the business down. We'll show you where AI can help, what it would take and whether it's worth it."
      />
    </>
  );
}
