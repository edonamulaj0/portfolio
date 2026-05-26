"use client";

import { useEffect, useState } from "react";
import {
  ETHER_PALETTES,
  type EtherSection,
} from "@/lib/reactbitsTheme";
import { useMounted } from "@/lib/useMounted";

export function useSectionEther(fallback: EtherSection = "default") {
  const mounted = useMounted();
  const [section, setSection] = useState<EtherSection>(fallback);

  useEffect(() => {
    if (!mounted) return;

    const nodes = document.querySelectorAll<HTMLElement>("[data-ether-theme]");
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!best) return;

        const theme = best.target.getAttribute("data-ether-theme") as EtherSection | null;
        if (theme && theme in ETHER_PALETTES) {
          setSection(theme);
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0, 0.2, 0.4, 0.6, 0.8] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [mounted]);

  return section;
}
