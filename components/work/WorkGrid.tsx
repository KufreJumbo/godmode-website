"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { products } from "@/lib/site";

type Category = "AI Transformation" | "Training" | "Web & Software" | "Products";

interface WorkItem {
  category: Category;
  title: string;
  client: string;
  summary: string;
  delivered: string[];
  result: string;
  logo?: string;
}

const items: WorkItem[] = [
  {
    category: "Training",
    title: "AI Bootcamp 2026",
    client: "Students",
    summary: "A hands-on bootcamp where students learned to build with AI: websites, projects and presentations, using a practical framework rather than theory.",
    delivered: ["Multi-day curriculum", "AI website creation framework", "Live build sessions", "Certificates of completion"],
    result: "15 graduates certified",
  },
  {
    category: "Training",
    title: "School AI programme",
    client: "SAGAB Montessori",
    summary: "AI training shaped for a school: how teachers plan lessons and assess work faster, and how leadership can use AI in administration.",
    delivered: ["Teacher training", "Leadership session", "Classroom-ready templates"],
    result: "Teachers equipped with practical AI workflows",
    logo: "/clients/sagab-montessori.webp",
  },
  {
    category: "AI Transformation",
    title: "AI transformation partnership",
    client: "AMS Concepts",
    summary: "An ongoing partnership to bring AI into how the company operates: opportunity mapping, workflow design and month-by-month implementation support.",
    delivered: ["AI opportunity map", "Workflow redesign", "Weekly execution plan", "Monthly reporting"],
    result: "Ongoing partnership under MOU",
    logo: "/clients/ams-concepts.jpg",
  },
  ...products.map<WorkItem>((p) => ({
    category: "Products",
    title: p.name,
    client: "GodMode in-house product",
    summary: p.description,
    delivered: [p.tag],
    result: "Designed and built by GodMode",
  })),
];

const filters: Array<"All" | Category> = ["All", "AI Transformation", "Training", "Web & Software", "Products"];

export function WorkGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = items.filter((i) => active === "All" || i.category === active || (active === "Web & Software" && i.category === "Products"));

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              active === f ? "border-navy bg-navy text-white" : "border-line bg-white text-slate hover:border-navy hover:text-navy",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((w) => (
            <motion.article
              layout
              key={w.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="card card-hover flex h-full flex-col p-7"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-navy">{w.category}</span>
                {w.logo && <Image src={w.logo} alt={w.client} width={90} height={36} className="h-8 w-auto object-contain" />}
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{w.title}</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">{w.client}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate">{w.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {w.delivered.map((d) => (
                  <li key={d} className="rounded-full border border-line px-2.5 py-1 text-xs text-slate">
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 inline-flex items-center gap-2 border-t border-line pt-5 text-sm font-semibold text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {w.result}
              </p>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && <p className="mt-10 text-slate">Nothing in this category yet. More case studies are on the way.</p>}
    </div>
  );
}
