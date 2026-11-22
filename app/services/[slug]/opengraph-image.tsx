import { OG_SIZE, renderOgImage } from "@/lib/og";
import { serviceBySlug, services, site } from "@/lib/site";

// Generated once at build time (required for the static export to Cloudflare Pages).
export const dynamic = "force-static";

// Share image for each service page, showing that service's headline.
export const alt = `${site.name} service`;
export const size = OG_SIZE;
export const contentType = "image/png";

type Params = { slug: string };

// Pre-render one image per service at build time.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Params | Promise<Params> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug) ?? services[0];
  return renderOgImage({ eyebrow: `${s.index} · ${s.shortTitle}`, title: s.headline, accent: s.headlineAccent });
}
