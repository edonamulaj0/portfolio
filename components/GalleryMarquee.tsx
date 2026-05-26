"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMounted } from "@/lib/useMounted";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { galleryItems } from "@/lib/gallery";
import { buildMarqueeRows } from "@/lib/marqueeCards";
import { MarqueeCard } from "./MarqueeCard";

type GalleryMarqueeProps = {
  limit?: number;
};

function StaticMarquee({
  rowOne,
  rowTwo,
}: {
  rowOne: ReturnType<typeof buildMarqueeRows>["rowOne"];
  rowTwo: ReturnType<typeof buildMarqueeRows>["rowTwo"];
}) {
  return (
    <div className="gallery-marquee gallery-marquee--static space-y-6 overflow-hidden py-6">
      <div className="gallery-marquee__track overflow-hidden">
        <div className="gallery-marquee__row flex w-max gap-4 px-[5vw] md:gap-6">
          {rowOne.slice(0, Math.ceil(rowOne.length / 2)).map((card, index) => (
            <MarqueeCard key={`static-r1-${card.caption}-${index}`} card={card} />
          ))}
        </div>
      </div>
      <div className="gallery-marquee__track overflow-hidden">
        <div className="gallery-marquee__row flex w-max translate-y-6 gap-4 px-[12vw] md:gap-6">
          {rowTwo.slice(0, Math.ceil(rowTwo.length / 2)).map((card, index) => (
            <MarqueeCard key={`static-r2-${card.caption}-${index}`} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function GalleryMarquee({ limit }: GalleryMarqueeProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const [travel, setTravel] = useState(720);

  const { rowOne, rowTwo } = useMemo(
    () => buildMarqueeRows(galleryItems, limit),
    [limit],
  );

  const enableMotion = mounted && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const row1X = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const row2X = useTransform(scrollYProgress, [0, 1], [-travel * 0.12, travel]);

  useLayoutEffect(() => {
    if (!enableMotion) return;

    const measure = () => {
      const row = row1Ref.current;
      if (!row) return;
      const overflow = row.scrollWidth - window.innerWidth;
      setTravel(Math.max(overflow * 0.68, window.innerWidth * 0.38));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [enableMotion, rowOne, rowTwo]);

  if (!mounted || prefersReducedMotion) {
    return <StaticMarquee rowOne={rowOne} rowTwo={rowTwo} />;
  }

  return (
    <section
      ref={sectionRef}
      className="gallery-marquee relative w-full"
      aria-label="Gallery marquee"
    >
      <div className="gallery-marquee__stage relative min-h-[200vh]">
        <div
          className="gallery-marquee__perspective sticky top-0 flex h-[100dvh] flex-col justify-center gap-6 overflow-hidden py-10 md:gap-10"
          style={{ perspective: 1000 }}
        >
          <div className="gallery-marquee__track relative overflow-hidden">
            <motion.div
              ref={row1Ref}
              className="gallery-marquee__row flex w-max items-end gap-4 will-change-transform pl-[4vw] md:gap-6 md:pl-[6vw]"
              style={{ x: row1X }}
            >
              {rowOne.map((card, index) => (
                <MarqueeCard
                  key={`r1-${card.caption}-${index}`}
                  card={card}
                  className={index % 2 === 1 ? "mb-0 md:mb-2" : "mb-6 md:mb-10"}
                />
              ))}
            </motion.div>
          </div>

          <div className="gallery-marquee__track relative overflow-hidden">
            <motion.div
              className="gallery-marquee__row flex w-max items-start gap-4 will-change-transform pl-[14vw] md:gap-6 md:pl-[20vw]"
              style={{ x: row2X }}
            >
              {rowTwo.map((card, index) => (
                <MarqueeCard
                  key={`r2-${card.caption}-${index}`}
                  card={card}
                  className={index % 2 === 0 ? "mt-6 md:mt-10" : "mt-0"}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
