import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

const d = (s: number) => ({ animationDelay: `${s}s` });

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32 text-white md:pt-36">
      <HeroBackgroundVideo />

      <div className="container relative">
        <div className="max-w-2xl">
          <p className="eyebrow animate-rise text-gold-200" style={d(0)}>
            {site.positioning} · {site.tagline}
          </p>

          <h1 className="animate-rise mt-6 text-display-xl font-extrabold text-white text-balance" style={d(0.1)}>
            Your business,
            <br />
            <span className="serif-accent text-[1.06em] text-gold-200">running on AI.</span>
          </h1>

          <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl" style={d(0.2)}>
            More customers. More time back. More profit. We help businesses, schools and institutions put AI to work
            where it actually pays, from strategy to working systems.
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row" style={d(0.3)}>
            <Button href="/contact" size="lg" variant="gold" arrow>
              Book a Free AI Strategy Call
            </Button>
            <Button href="/work" size="lg" variant="outlineLight">
              See Our Work
            </Button>
          </div>

          <ul className="animate-rise mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70" style={d(0.4)}>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Strategy before tools
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Built, not just advised
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Lagos, Nigeria
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
