import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { WorkGrid } from "@/components/work/WorkGrid";
import { Gallery } from "@/components/Gallery";
import { findLogo } from "@/lib/logos";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Our Work & Case Studies",
  description: "Training programmes, AI transformation partnerships and products we've built. Only work we've actually done, shown with permission.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Work", path: "/work" }])} />
      <PageHero
        eyebrow="Work"
        title={
          <>
            Real work. <span className="serif-accent text-navy-700">Real results.</span>
          </>
        }
        description="Programmes delivered, partnerships in progress and products we built ourselves. We publish only what we can stand behind, with permission."
      />

      <section className="container pb-24 md:pb-32">
        <Reveal>
          <WorkGrid logos={{ "sagab-schools": findLogo("sagab-schools") }} />
        </Reveal>
        <p className="mt-10 text-sm text-slate-500">
          More case studies are available on request. Client names and outcomes are shown with permission; where permission is pending, we describe the work without naming the client.
        </p>
      </section>

      <Gallery className="pt-0 md:pt-0" />

      <CTASection
        title={
          <>
            Get results <span className="serif-accent text-gold-200">like these.</span>
          </>
        }
        primary={{ label: "Start Your Project", href: "/contact" }}
      />
    </>
  );
}
