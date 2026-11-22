import { OG_SIZE, renderOgImage } from "@/lib/og";
import { site } from "@/lib/site";

// Generated once at build time (required for the static export to Cloudflare Pages).
export const dynamic = "force-static";

// Default share image for every page that doesn't have its own.
export const alt = `${site.name}: ${site.positioning}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: `${site.positioning} · ${site.tagline}`, title: "Your business,", accent: "running on AI." });
}
