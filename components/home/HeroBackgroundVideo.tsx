"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroVideo } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Full-bleed background video for the home hero, served from /public (no YouTube).
 * - The poster image paints first; the video fades in once it is actually playing.
 * - Phones get the lighter 540p file.
 * - "Reduce motion" or data-saver: the poster stays as a still image.
 */
export function HeroBackgroundVideo() {
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) return;
    setSrc(window.innerWidth < 768 ? heroVideo.mobile : heroVideo.desktop);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-navy-950" aria-hidden>
      <Image src={heroVideo.poster} alt="" fill priority sizes="100vw" className="object-cover" />
      {src && (
        <video
          src={src}
          poster={heroVideo.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setPlaying(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
            playing ? "opacity-100" : "opacity-0",
          )}
        />
      )}

      {/* Overlays: keep the headline readable over any frame of the footage. */}
      <div className="absolute inset-0 bg-navy-950/55 md:bg-transparent md:bg-gradient-to-r md:from-navy-950/90 md:via-navy-950/65 md:to-navy/25" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy-950/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/60 to-transparent" />
    </div>
  );
}
