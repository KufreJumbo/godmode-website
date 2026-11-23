import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { clients, partner } from "@/lib/site";
import { findLogo } from "@/lib/logos";

const capabilities = [
  "AI strategy",
  "Workflow automation",
  "Custom AI systems",
  "Team training",
  "Teacher & school programmes",
  "Student bootcamps",
  "Websites & web apps",
  "Software development",
  "Brand & content",
  "AI video & visuals",
  "Social strategy",
  "Online marketing",
];

const chip = "card card-hover flex h-full items-center gap-3 px-4 py-3";

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-mist/70 py-12">
      <div className="container flex flex-col items-center gap-7">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Trusted by businesses, schools &amp; training partners across Nigeria
        </p>

        <RevealStagger className="flex flex-wrap items-stretch justify-center gap-3" stagger={0.06}>
          {/* Featured strategic partner. The AMS logo has a white JPEG background, so it always sits on white. */}
          <RevealItem y={12}>
            <div className={`${chip} border-gold pr-6`} title={partner.kind}>
              <Image src={partner.logo} alt={`${partner.name} logo`} width={278} height={162} className="h-12 w-auto" />
              <div className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-gold-700">Strategic partner</span>
                <span className="block text-[15px] font-bold text-navy">{partner.name}</span>
              </div>
            </div>
          </RevealItem>

          {clients.map((c) => {
            const logo = findLogo(c.logo);
            return (
              <RevealItem key={c.name} y={12}>
                <div className={chip} title={c.kind}>
                  {logo ? (
                    // Plain <img>: client logos come in any shape, and h-10 w-auto keeps each one's proportions.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={logo} alt={`${c.name} logo`} loading="lazy" className="h-10 w-auto max-w-[120px] object-contain" />
                  ) : (
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  )}
                  <span className="text-[15px] font-semibold text-navy">{c.name}</span>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>

      <div className="mt-10">
        <Marquee gap="gap-3">
          {capabilities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-navy whitespace-nowrap"
            >
              {c}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
