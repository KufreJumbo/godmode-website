"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Check, WhatsApp, Spark, Mail, Clock } from "@/components/ui/Icons";

const steps = [
  { label: "New enquiry received", detail: "WhatsApp · “Do you do websites for schools?”", icon: WhatsApp },
  { label: "AI qualifies the lead", detail: "Service, budget range and timeline captured", icon: Spark },
  { label: "Reply drafted and sent", detail: "Personalised, in the brand's voice, in seconds", icon: Mail },
  { label: "Follow-up scheduled", detail: "CRM updated · reminder set for the team", icon: Clock },
];

/** A looping, original demonstration of an AI-assisted enquiry workflow. */
export function WorkflowVisual() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) {
      setActive(steps.length);
      return;
    }
    const id = setInterval(() => setActive((a) => (a + 1) % (steps.length + 2)), 1500);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Ambient light */}
      <div className="pointer-events-none absolute -inset-10 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-100 blur-[90px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold-100 blur-[90px]" />
      </div>

      <div className="relative rounded-3xl border border-line bg-white p-2 shadow-card-hover">
        <div className="rounded-[20px] border border-line bg-mist/60">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-navy">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#25D366]" />
              Enquiry assistant · live
            </div>
          </div>

          {/* Steps */}
          <ol className="relative space-y-1 p-4">
            <span className="absolute bottom-10 left-[2.2rem] top-10 w-px bg-line" aria-hidden />
            {steps.map((step, i) => {
              const done = i < active;
              const current = i === active;
              const Icon = step.icon;
              return (
                <li
                  key={step.label}
                  className={cn(
                    "relative flex items-start gap-4 rounded-2xl p-3 transition-colors duration-500",
                    current && "bg-white shadow-card",
                  )}
                >
                  <span
                    className={cn(
                      "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                      done && "border-navy bg-navy text-white",
                      current && "border-gold bg-gold-50 text-navy shadow-glow",
                      !done && !current && "border-line bg-white text-slate-500",
                    )}
                  >
                    {done ? <Check size={16} /> : <Icon size={16} />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={cn("text-sm font-semibold transition-colors", done || current ? "text-navy" : "text-slate-500")}>
                      {step.label}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-slate-500">{step.detail}</p>
                  </div>
                  {current && (
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-gold-700">working</span>
                  )}
                  {done && (
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-navy/50">done</span>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Footer summary */}
          <div className="flex items-center justify-between border-t border-line px-5 py-3 text-xs text-slate-500">
            <span>Human in the loop for anything that needs judgement</span>
            <span className="font-semibold text-navy">{Math.min(active, steps.length)}/{steps.length}</span>
          </div>
        </div>
      </div>

      {/* Floating chips: hang off the card edges on large screens only */}
      <div className="absolute -top-5 right-4 hidden animate-float rounded-2xl border border-line bg-white px-4 py-3 shadow-card lg:block xl:-right-10 xl:top-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Built on</p>
        <p className="mt-0.5 text-sm font-bold text-navy">The tools you already use</p>
      </div>
      <div
        style={{ animationDelay: "2.5s" }}
        className="absolute -bottom-5 left-4 hidden animate-float rounded-2xl border border-line bg-white px-4 py-3 shadow-card lg:block xl:-left-10 xl:bottom-8"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Result</p>
        <p className="mt-0.5 text-sm font-bold text-navy">Every lead answered, every time</p>
      </div>
    </div>
  );
}
