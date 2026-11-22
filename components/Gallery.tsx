import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { gallery } from "@/lib/site";
import { cn } from "@/lib/cn";

// Tile spans: 2 columns on phones, 4 from lg up. grid-flow-dense closes gaps on phones.
const span = {
  big: "col-span-2 row-span-2",
  wide: "col-span-2",
  tall: "row-span-2",
} as const;

/** "In the room" photo gallery of real GodMode training sessions. */
export function Gallery({ className }: { className?: string }) {
  return (
    <section id="gallery" className={cn("container scroll-mt-24 py-24 md:py-32", className)}>
      <SectionHeading
        align="center"
        eyebrow="In the room"
        title={
          <>
            See GodMode AI <span className="serif-accent text-navy-700">in action.</span>
          </>
        }
        description="From school staff rooms to executive masterclasses, we train people hands-on, in person and online."
      />

      <RevealStagger
        className="mt-14 grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-3 lg:auto-rows-[210px] lg:grid-cols-4 lg:gap-4"
        stagger={0.05}
      >
        {gallery.map((photo) => (
          <RevealItem key={photo.src} className={cn(photo.size && span[photo.size])}>
            <figure className="group relative m-0 h-full overflow-hidden rounded-2xl bg-navy shadow-card">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.size === "big" || photo.size === "wide" ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-navy/0 px-4 pb-3.5 pt-10 text-[13px] font-semibold leading-snug text-white">
                {photo.caption}
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
