import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { founders, principles, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: "GodMode AI Solutions Limited: who we are, what we believe, and the people behind the work. Based in Lagos, Nigeria.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About"
        title={
          <>
            We exist to help your business work better <span className="serif-accent text-navy-700">and grow faster.</span>
          </>
        }
        description="Our purpose is simple: help businesses, schools and institutions improve how they work, reach more customers, save time and use technology to grow."
      />

      {/* Story */}
      <section className="container pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                <span className="font-semibold text-navy">{site.legalName}</span> is an {site.positioning}. We started because
                businesses around us were buying AI tools and getting nothing back: subscriptions without a plan, training
                without follow-through, websites that looked fine and converted nobody.
              </p>
              <p>
                What was missing was a partner who could connect the pieces. Strategy to decide what matters. Implementation to
                make it real. Digital products and creative work to bring the customers in. And training so the people inside the
                business could keep it running.
              </p>
              <p>
                Today we work with business owners, professionals, schools and institutions from our base in Lagos, Nigeria,
                and online with clients beyond. We build our own AI products too, which keeps us honest about what actually works.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5 lg:col-span-5">
            <figure className="relative m-0 h-72 overflow-hidden rounded-3xl bg-navy shadow-card">
              <Image
                src="/images/coach-podium.jpg"
                alt="GodMode AI lead coach facilitating a live AI masterclass at Podium Dynamics Academy"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[center_12%]"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-md bg-gold px-2.5 py-1 text-xs font-semibold text-navy">
                Live masterclass · Podium Dynamics Academy
              </figcaption>
            </figure>
            <blockquote className="relative flex-1 rounded-3xl bg-navy p-10 text-white">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-grid opacity-30" />
              <p className="relative font-serif text-3xl italic leading-snug md:text-4xl">
                “We are AI-led and human-guided. The AI does the volume. People do the judgement.”
              </p>
              <footer className="relative mt-8 text-sm text-gold-200">The GodMode way</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-mist/70 py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Principles"
            title={
              <>
                Four rules we <span className="serif-accent text-navy-700">don't bend.</span>
              </>
            }
          />
          <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <RevealItem key={p.title} className="h-full">
                <div className="card card-hover h-full p-7">
                  <span className="font-serif text-3xl italic text-gold-600">0{i + 1}</span>
                  <h3 className="mt-6 text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{p.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Leadership */}
      <section className="container py-24 md:py-32">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              The people <span className="serif-accent text-navy-700">behind the work.</span>
            </>
          }
        />
        <RevealStagger className="mt-14 grid gap-8 md:grid-cols-2">
          {founders.map((f) => (
            <RevealItem key={f.name}>
              <article className="card card-hover grid overflow-hidden sm:grid-cols-5">
                <div className="relative aspect-[4/5] sm:col-span-2 sm:aspect-auto">
                  <Image src={f.image} alt={f.name} fill sizes="(min-width: 768px) 240px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:col-span-3">
                  <h3 className="text-2xl font-bold text-navy">{f.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold-700">{f.role}</p>
                  <p className="mt-5 leading-relaxed text-slate">{f.bio}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>


      <CTASection
        title={
          <>
            Talk to <span className="serif-accent text-gold-200">our team.</span>
          </>
        }
        primary={{ label: "Talk to Our Team", href: "/contact" }}
      />
    </>
  );
}
