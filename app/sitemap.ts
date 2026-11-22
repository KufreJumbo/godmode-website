import type { MetadataRoute } from "next";
import { gallery, services, site } from "@/lib/site";

// Generated once at build time (required for the static export to Cloudflare Pages).
export const dynamic = "force-static";

/**
 * Date the site's content last changed. Update it when you publish real changes:
 * search engines stop trusting a "last modified" that moves on every build.
 */
const LAST_UPDATED = new Date("2026-11-22");

const abs = (path: string) => `${site.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const photos = gallery.map((g) => abs(g.src));
  const page = (path: string, priority: number, extra: Partial<MetadataRoute.Sitemap[number]> = {}) => ({
    url: abs(path),
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority,
    ...extra,
  });

  return [
    page("", 1, { images: photos }),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8, s.photo ? { images: [abs(s.photo.src)] } : {})),
    page("/work", 0.8, { images: photos }),
    page("/about", 0.7, { images: [abs("/images/coach-podium.jpg")] }),
    page("/contact", 0.7),
    page("/insights", 0.6, { changeFrequency: "weekly" }),
    page("/privacy", 0.2, { changeFrequency: "yearly" }),
    page("/terms", 0.2, { changeFrequency: "yearly" }),
  ];
}
