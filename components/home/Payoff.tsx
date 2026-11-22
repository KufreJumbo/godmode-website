import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Users, Clock, Bolt, Chart } from "@/components/ui/Icons";

const payoffs = [
  {
    icon: Users,
    title: "Reach more customers",
    description: "Marketing, content and automation that put your business in front of more of the right people, faster.",
  },
  {
    icon: Clock,
    title: "Get hours back every week",
    description: "AI handles the repetitive replies, documents and admin so your people can do work that needs people.",
  },
  {
    icon: Bolt,
    title: "Remove the bottlenecks",
    description: "Systems that stop depending on one busy person remembering, so work keeps moving when they don't.",
  },
  {
    icon: Chart,
    title: "Grow with confidence",
    description: "Decisions and campaigns backed by real numbers, with a partner who stays to make the results stick.",
  },
];

export default function Payoff() {
  return (
    <section className="container py-24 md:py-32">
      <SectionHeading
        eyebrow="The payoff"
        title={
          <>
            What changes when AI <span className="serif-accent text-navy-700">fits</span> your business
          </>
        }
        description="Not AI for its own sake. Four practical results, in the order most business owners feel them."
      />

      <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {payoffs.map((p, i) => {
          const Icon = p.icon;
          return (
            <RevealItem key={p.title}>
              <div className="card card-hover group h-full p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white transition-colors group-hover:bg-gold group-hover:text-navy">
                    <Icon size={22} />
                  </span>
                  <span className="font-serif text-3xl italic text-gold-600">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{p.description}</p>
              </div>
            </RevealItem>
          );
        })}
      </RevealStagger>
    </section>
  );
}
