import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Book, Users, Spark } from "@/components/ui/Icons";
import { insights } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "AI Insights for Business Leaders",
  description: "Practical AI ideas for business: strategy, implementation and training, written for owners and leaders in Nigeria and beyond.",
  path: "/insights",
});

const programmes = [
  { icon: Spark, title: "AI Smart Student Club & Bootcamp", text: "Students build real things with AI and graduate with certificates." },
  { icon: Users, title: "Teacher & school training", text: "Lesson planning, assessment and administration, made faster with AI." },
  { icon: Book, title: "Business team training", text: "Teams trained on the work they actually do, with follow-up implementation." },
];

export default function InsightsPage() {
  const featured = insights.find((i) => "featured" in i && i.featured) ?? insights[0];
  const rest = insights.filter((i) => i.slug !== featured.slug);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Insights", path: "/insights" }])} />
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Practical AI ideas <span className="serif-accent text-navy-700">for business.</span>
          </>
        }
        description="Short, useful reads on strategy, implementation and training. No hype, no jargon."
      />

      <section className="container pb-24 md:pb-32">
        <Reveal>
          <article className="card grid overflow-hidden md:grid-cols-12">
            <div className="relative flex min-h-[260px] items-end bg-navy p-8 text-white md:col-span-5">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/30 blur-3xl" />
              <span className="relative rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/20">Featured</span>
            </div>
            <div className="p-8 md:col-span-7 md:p-12">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-blue-50 px-2.5 py-1 font-semibold text-navy">{featured.category}</span>
                <span className="text-slate-500">{featured.readTime}</span>
                <span className="text-slate-500">· {featured.date}</span>
              </div>
              <h2 className="mt-5 text-display-sm font-bold text-navy text-balance">{featured.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate">{featured.excerpt}</p>
              <p className="mt-6 text-sm font-medium text-gold-700">Full article publishing soon</p>
            </div>
          </article>
        </Reveal>

        <RevealStagger className="mt-6 grid gap-5 md:grid-cols-2">
          {rest.map((a) => (
            <RevealItem key={a.slug} className="h-full">
              <article className="card card-hover flex h-full flex-col p-7">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 font-semibold text-navy">{a.category}</span>
                  <span className="text-slate-500">{a.readTime}</span>
                </div>
                <h3 className="mt-5 flex-1 text-xl font-bold leading-snug text-navy text-balance">{a.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">{a.excerpt}</p>
                <p className="mt-6 text-sm text-slate-500">{a.date}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="bg-mist/70 py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Education"
            title={
              <>
                Programmes that <span className="serif-accent text-navy-700">build confidence.</span>
              </>
            }
          />
          <RevealStagger className="mt-14 grid gap-5 md:grid-cols-3">
            {programmes.map((p) => {
              const Icon = p.icon;
              return (
                <RevealItem key={p.title} className="h-full">
                  <div className="card card-hover h-full p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-navy">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate">{p.text}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <SectionHeading
          align="center"
          eyebrow="Newsletter"
          size="md"
          title="Get the next insight in your inbox."
          description="Practical AI ideas and programme dates. No spam, unsubscribe any time."
        />
        <Reveal className="mt-10">
          <NewsletterForm />
        </Reveal>
      </section>

      <CTASection
        title={
          <>
            Book a <span className="serif-accent text-gold-200">free call.</span>
          </>
        }
        primary={{ label: "Book a Free Call", href: "/contact" }}
      />
    </>
  );
}
