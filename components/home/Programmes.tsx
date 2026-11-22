import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { programmes } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Programmes() {
  return (
    <section className="container py-24 md:py-32">
      <SectionHeading
        align="center"
        eyebrow="GodMode AI Transformation Program"
        title={
          <>
            Don't just learn AI. <span className="serif-accent text-navy-700">Learn how to leverage it.</span>
          </>
        }
        description="Three ways in, depending on where you are: build your own skills, build your authority, or transform the whole business."
      />

      <RevealStagger className="mt-14 grid gap-5 lg:grid-cols-3">
        {programmes.map((p) => {
          const featured = "featured" in p && p.featured;
          return (
            <RevealItem key={p.name} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8",
                  featured ? "bg-navy text-white shadow-card-hover" : "card",
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                    Most popular
                  </span>
                )}
                <p className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", featured ? "text-gold-200" : "text-gold-700")}>
                  {p.audience}
                </p>
                <h3 className={cn("mt-3 text-2xl font-bold", featured ? "text-white" : "text-navy")}>{p.name}</h3>
                <p className={cn("mt-1 text-sm font-medium", featured ? "text-white/60" : "text-slate-500")}>{p.duration}</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className={cn("flex items-start gap-3 text-[15px]", featured ? "text-white/85" : "text-slate")}>
                      <Check size={18} className={cn("mt-0.5 shrink-0", featured ? "text-gold" : "text-navy")} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button href="/contact" variant={featured ? "gold" : "outline"} className="w-full" arrow>
                    {featured ? "Accelerate your authority" : p.name === "Business Implementation" ? "Explore implementation" : "Join the programme"}
                  </Button>
                </div>
              </div>
            </RevealItem>
          );
        })}
      </RevealStagger>

      <p className="mt-8 text-center text-sm text-slate-500">
        Think better. Work smarter. Create confidently. Build useful systems. Position yourself clearly.
      </p>
    </section>
  );
}
