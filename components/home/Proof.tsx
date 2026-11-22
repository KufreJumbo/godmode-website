import { Counter } from "@/components/ui/Counter";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { proofFacts } from "@/lib/site";

export default function Proof() {
  return (
    <section className="border-y border-line bg-mist/70 py-16 md:py-20">
      <div className="container">
        <RevealStagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {proofFacts.map((f) => (
            <RevealItem key={f.label}>
              <div className="border-l-2 border-gold pl-6">
                <p className="text-5xl font-extrabold tracking-tight text-navy md:text-6xl">
                  <Counter value={Number(f.value)} />
                </p>
                <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-slate">{f.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
