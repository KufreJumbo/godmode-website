import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a plain HTML/CSS/JS site to /out, which Cloudflare Pages serves.
  // Works because every page is pre-rendered and the contact form composes a WhatsApp message (no server).
  // If you later need server features (API routes, form handling on the server), switch to the
  // @opennextjs/cloudflare adapter instead.
  output: "export",
  // Pin the workspace root to this folder. Without it, Next finds the stray
  // package-lock.json one directory up and treats the parent as the root,
  // widening what Turbopack scans and watches.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Static export has no image-resizing server, so images are served as-is.
    // The photos in /public are already compressed for the web (70–250 KB each).
    unoptimized: true,
  },
};

export default nextConfig;
