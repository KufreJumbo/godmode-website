"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { method } from "@/lib/site";

export default function Method() {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-blue-500/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />

      <div className="container relative">
        <SectionHeading
          tone="dark"
          eyebrow="How we work"
          title={
            <>
              A clear path from first call <span className="serif-accent text-gold-200">to real results.</span>
            </>
          }
          description="Five steps, no mystery. You see progress at every stage and nothing goes live until it's tested and your team is ready."
        />

        <ol ref={ref} className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 md:block" aria-hidden>
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-gold via-gold to-gold/40"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </div>
          {/* Connecting line (mobile) */}
          <div className="absolute bottom-6 left-6 top-6 w-px bg-white/10 md:hidden" aria-hidden>
            <motion.div
              className="w-full origin-top bg-gradient-to-b from-gold to-gold/40"
              initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </div>

          {method.map((m, i) => (
            <motion.li
              key={m.title}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative flex gap-5 md:block"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-navy font-serif text-xl italic text-gold">
                {i + 1}
              </span>
              <div className="md:mt-7">
                <h3 className="text-xl font-bold">{m.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">{m.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
