import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { insights } from "@/lib/site";

export default function InsightsSection() {
  return (
    <section className="bg-mist/70 py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title={
              <>
                Practical AI ideas <span className="serif-accent text-navy-700">for business.</span>
              </>
            }
          />
          <Link href="/insights" className="link-underline shrink-0 text-base">
            All insights <ArrowUpRight size={18} />
          </Link>
        </div>

        <RevealStagger className="mt-14 grid gap-5 md:grid-cols-3">
          {insights.map((a) => (
            <RevealItem key={a.slug} className="h-full">
              <Link href="/insights" className="card card-hover group flex h-full flex-col p-7">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 font-semibold text-navy">{a.category}</span>
                  <span className="text-slate-500">{a.readTime}</span>
                </div>
                <h3 className="mt-6 flex-1 text-xl font-bold leading-snug text-navy text-balance group-hover:text-navy-700">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">{a.excerpt}</p>
                <p className="mt-6 text-sm text-slate-500">{a.date}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
