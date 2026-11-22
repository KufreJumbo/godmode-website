import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Payoff from "@/components/home/Payoff";
import WhatWeDo from "@/components/home/WhatWeDo";
import SelectedWork from "@/components/home/SelectedWork";
import Method from "@/components/home/Method";
import WhyGodMode from "@/components/home/WhyGodMode";
import Proof from "@/components/home/Proof";
import Programmes from "@/components/home/Programmes";
import InsightsSection from "@/components/home/InsightsSection";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: `AI Transformation Partner in Nigeria | ${site.name}`,
  description:
    "GodMode AI Solutions helps businesses, schools and institutions in Nigeria work smarter with AI: strategy, automation, training, websites and marketing.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Payoff />
      <WhatWeDo />
      <SelectedWork />
      <Method />
      <WhyGodMode />
      <Proof />
      <Gallery />
      <Programmes />
      <InsightsSection />
      <CTASection
        title={
          <>
            Let us show you where AI can <span className="serif-accent text-gold-200">grow your business.</span>
          </>
        }
      />
    </>
  );
}
