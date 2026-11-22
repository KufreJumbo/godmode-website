import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, Check, WhatsApp } from "@/components/ui/Icons";
import { serviceIcons } from "@/components/home/WhatWeDo";
import { services, serviceBySlug, whatsappHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return pageMetadata({ title: `${s.title} in Nigeria`, description: `${s.summary} Lagos-based, serving clients across Nigeria.`, path: `/services/${s.slug}`, image: `/services/${s.slug}/opengraph-image` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(s),
          faqSchema(s.faqs),
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: s.title, path: `/services/${s.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={`${s.index} · ${s.title}`}
        title={
          <>
            {s.headline} <span className="serif-accent text-navy-700">{s.headlineAccent}</span>
          </>
        }
        description={s.intro}
      >
        <Button href="/contact" size="lg" arrow>
          {s.cta}
        </Button>
        <Button href={whatsappHref} size="lg" variant="outline">
          <WhatsApp size={18} className="text-[#25D366]" />
          WhatsApp us
        </Button>
      </PageHero>

      {s.photo && (
        <section className="container pb-16 md:pb-20">
          <Reveal>
            <figure className="relative m-0 aspect-[16/9] overflow-hidden rounded-3xl bg-navy shadow-card md:aspect-[21/8]">
              <Image src={s.photo.src} alt={s.photo.alt} fill priority sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
              <figcaption className="absolute bottom-4 left-4 rounded-md bg-gold px-2.5 py-1 text-xs font-semibold text-navy md:bottom-6 md:left-6">
                {s.photo.caption}
              </figcaption>
            </figure>
          </Reveal>
        </section>
      )}

      {/* The problem */}
      <section className="container pb-24 md:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/25 blur-[100px]" />
            <div className="relative grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="eyebrow text-gold-200">The problem</p>
                <h2 className="mt-5 text-display-md font-bold text-balance">{s.problem.title}</h2>
              </div>
              <ul className="space-y-4 lg:col-span-7">
                {s.problem.points.map((p) => (
                  <li key={p} className="flex items-start gap-4 border-t border-white/10 pt-4 text-[17px] leading-relaxed text-white/80">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What you get */}
      <section className="bg-mist/70 py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="What you get"
            title={
              <>
                Outcomes and deliverables, <span className="serif-accent text-navy-700">in plain terms.</span>
              </>
            }
          />
          <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.outcomes.map((o, i) => (
              <RevealItem key={o.title} className="h-full">
                <div className="card card-hover h-full p-7">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white">
                    <Check size={16} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-navy">{o.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">{o.description}</p>
                  <span className="sr-only">Item {i + 1}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* How it works */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="How it works"
                size="md"
                title={
                  <>
                    Clear steps, <span className="serif-accent text-navy-700">no surprises.</span>
                  </>
                }
              />
            </div>
          </div>
          <RevealStagger className="lg:col-span-8">
            {s.steps.map((st, i) => (
              <RevealItem key={st.title}>
                <div className="flex gap-6 border-t border-line py-8 last:border-b">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-lg italic text-navy">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{st.title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-slate">{st.description}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-mist/70 py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQs" size="md" title="Questions we hear most." />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <Accordion items={s.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Ready when you are. <span className="serif-accent text-gold-200">{s.cta}.</span>
          </>
        }
        primary={{ label: s.cta, href: "/contact" }}
      />

      {/* Other services */}
      <section className="container pb-24">
        <p className="eyebrow">Other services</p>
        <RevealStagger className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((o) => {
            const Icon = serviceIcons[o.slug];
            return (
              <RevealItem key={o.slug}>
                <Link href={`/services/${o.slug}`} className="card card-hover group flex items-center gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-navy group-hover:bg-navy group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <span className="flex-1 font-semibold text-navy">{o.title}</span>
                  <ArrowUpRight size={18} className="text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
                </Link>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </section>
    </>
  );
}
