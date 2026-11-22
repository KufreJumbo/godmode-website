import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { principles } from "@/lib/site";

export default function WhyGodMode() {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why GodMode"
              title={
                <>
                  AI-led. <span className="serif-accent text-navy-700">Human-guided.</span>
                </>
              }
              description="Plenty of agencies will sell you tools. We bridge strategy, implementation, digital products and creative work, and we show the work rather than make claims."
            />
            <div className="mt-8">
              <Button href="/about" variant="outline" arrow>
                Meet the team
              </Button>
            </div>
          </div>
        </div>

        <RevealStagger className="lg:col-span-7">
          {principles.map((p, i) => (
            <RevealItem key={p.title}>
              <div className="group flex gap-6 border-t border-line py-8 last:border-b">
                <span className="font-serif text-2xl italic text-gold-600">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-bold text-navy md:text-2xl">{p.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-slate">{p.description}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
