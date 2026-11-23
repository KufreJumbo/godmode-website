import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "./site";

/** Social-share image size (Facebook, LinkedIn, X, WhatsApp all use 1.91:1). */
export const OG_SIZE = { width: 1200, height: 630 };

const file = (p: string) => readFile(join(process.cwd(), p));
const dataUrl = async (p: string, type: string) => `data:${type};base64,${(await file(p)).toString("base64")}`;

/**
 * Branded share image: navy gradient with a soft gold glow, the logo, and the page headline
 * in the site's own fonts (Plus Jakarta Sans + Instrument Serif italic, from assets/og).
 * No photo on purpose: it keeps the PNG small enough for WhatsApp link previews (~300 KB limit).
 */
export async function renderOgImage({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  const [jakarta800, jakarta600, serifItalic, mark] = await Promise.all([
    file("assets/og/jakarta-800.woff"),
    file("assets/og/jakarta-600.woff"),
    file("assets/og/instrument-serif-italic.woff"),
    dataUrl("public/brand/logo-mark-light.png", "image/png"),
  ]);
  const domain = new URL(site.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #000F2E 0%, #001A4F 55%, #0A2C70 100%)",
          fontFamily: "Jakarta",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -220,
            width: 760,
            height: 760,
            display: "flex",
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(218,178,79,0.2) 0%, rgba(218,178,79,0) 68%)",
          }}
        />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 8, display: "flex", backgroundColor: "#DAB24F" }} />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "64px 72px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mark} alt="" width={52} height={60} style={{ width: 52, height: 60 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 30, fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>GodMode</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#DAB24F", letterSpacing: 4, marginTop: 6 }}>AI SOLUTIONS</span>
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 36, height: 2, backgroundColor: "#DAB24F" }} />
              <span style={{ fontSize: 20, fontWeight: 600, color: "#EEDDA9", letterSpacing: 3, textTransform: "uppercase" }}>{eyebrow}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: 22, fontSize: title.length > 34 ? 60 : 70, fontWeight: 800, color: "#FFFFFF", lineHeight: 1.06, letterSpacing: -2 }}>
              {title}
            </div>
            {accent && (
              <div style={{ display: "flex", marginTop: 6, fontSize: 66, fontFamily: "Serif", fontStyle: "italic", color: "#EEDDA9", lineHeight: 1.1 }}>
                {accent}
              </div>
            )}
          </div>

          {/* Footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22, fontWeight: 600, color: "rgba(255,255,255,0.72)" }}>
            <span>{domain}</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Jakarta", data: jakarta800, weight: 800, style: "normal" },
        { name: "Jakarta", data: jakarta600, weight: 600, style: "normal" },
        { name: "Serif", data: serifItalic, weight: 400, style: "italic" },
      ],
    },
  );
}
