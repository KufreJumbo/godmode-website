import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Book, Spark, Users } from "@/components/ui/Icons";
import { products } from "@/lib/site";
import { findLogo } from "@/lib/logos";

const work = [
  {
    tag: "Training & Academy",
    title: "AI Bootcamp 2026",
    description:
      "A hands-on bootcamp where students built real projects with AI tools, from websites to presentations, and graduated with certificates.",
    fact: "Graduates certified",
    icon: Book,
    logo: null,
  },
  {
    tag: "Schools",
    title: "Sagab Schools",
    description:
      "AI training designed for a school environment: teachers, leadership and students, built around lesson planning, assessment and administration.",
    fact: "School AI programme",
    icon: Users,
    logo: findLogo("sagab-schools"),
  },
  {
    tag: "AI Transformation",
    title: "AMS Concepts",
    description:
      "An AI transformation partnership: mapping opportunities across the business, designing workflows and supporting implementation month by month.",
    fact: "Ongoing partnership",
    icon: Spark,
    logo: "/clients/ams-concepts.jpg",
  },
];

export default function SelectedWork() {
  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Real work. <span className="serif-accent text-navy-700">Real proof.</span>
            </>
          }
          description="We only show what we've actually done. No stock case studies, no invented numbers."
        />
        <Link href="/work" className="link-underline shrink-0 text-base">
          View all work <ArrowUpRight size={18} />
        </Link>
      </div>

      <RevealStagger className="mt-14 grid gap-5 md:grid-cols-3">
        {work.map((w) => {
          const Icon = w.icon;
          return (
            <RevealItem key={w.title} className="h-full">
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-navy">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/30 blur-3xl" />
                  {w.logo ? (
                    <span className="relative rounded-2xl bg-white p-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={w.logo} alt={`${w.title} logo`} loading="lazy" className="h-12 w-auto max-w-[160px] object-contain" />
                    </span>
                  ) : (
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold ring-1 ring-white/20">
                      <Icon size={28} />
                    </span>
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
                    {w.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-navy">{w.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate">{w.description}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {w.fact}
                  </p>
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealStagger>

      {/* What we build */}
      <Reveal className="mt-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">What we build</p>
            <h3 className="mt-4 text-display-sm font-bold text-navy">Products of our own, not just advice.</h3>
          </div>
          <p className="max-w-md text-slate">
            We build AI products in-house, which is why we can tell you what's realistic before you spend a naira.
          </p>
        </div>
      </Reveal>
      <div className="mt-8">
        <Marquee reverse gap="gap-4">
          {products.map((p) => (
            <div key={p.name} className="card w-[300px] shrink-0 p-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-700">{p.tag}</span>
              <h4 className="mt-2 text-lg font-bold text-navy">{p.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate">{p.description}</p>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mt-12 text-center">
        <Button href="/work" variant="outline" size="lg" arrow>
          Get results like these
        </Button>
      </div>
    </section>
  );
}
