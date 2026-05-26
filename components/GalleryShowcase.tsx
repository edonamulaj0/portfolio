"use client";

import { type ReactNode } from "react";
import { GalleryMarquee } from "./GalleryMarquee";

type GalleryShowcaseProps = {
  intro: ReactNode;
  limit?: number;
};

export function GalleryShowcase({ intro, limit }: GalleryShowcaseProps) {
  return (
    <div className="gallery-showcase relative isolate w-full">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-[18%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-violet-600/30 blur-[120px] md:h-[32rem] md:w-[32rem]" />
        <div className="absolute -right-[12%] top-[32%] h-[22rem] w-[22rem] rounded-full bg-indigo-600/25 blur-[120px] md:h-[28rem] md:w-[28rem]" />
        <div className="absolute bottom-[12%] left-[28%] h-[20rem] w-[20rem] rounded-full bg-purple-500/20 blur-[120px] md:h-[24rem] md:w-[24rem]" />
      </div>

      <div className="relative z-20">
        <div className="site-container">
          <div className="gallery-showcase__intro relative -mb-10 rounded-sm border border-purple-500/20 bg-violet-950/10 px-6 py-8 shadow-[0_24px_80px_-40px_rgba(76,29,149,0.65)] backdrop-blur-[12px] md:-mb-20 md:px-10 md:py-10 lg:-mb-28">
            {intro}
          </div>
        </div>
      </div>

      <div className="gallery-showcase__track relative z-10 -mt-4 md:-mt-8">
        <GalleryMarquee limit={limit} />
      </div>
    </div>
  );
}
