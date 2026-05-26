"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { gsap, ScrollTrigger, registerGsapPlugins } from "@/lib/gsap/register";

const DEFAULT_BG = "#07050e";

function applyBackground(color: string) {
  gsap.to(document.body, {
    backgroundColor: color,
    duration: 0.8,
    ease: "power2.inOut",
    overwrite: "auto",
  });
  document.documentElement.style.setProperty("--scroll-theme-bg", color);
}

export function ScrollThemeController() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    registerGsapPlugins();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const triggers: ScrollTrigger[] = [];
    const sections = gsap.utils.toArray<HTMLElement>("[data-scroll-theme]");

    sections.forEach((section) => {
      const color = section.dataset.scrollTheme;
      if (!color) return;

      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) {
              applyBackground(color);
            }
          },
        }),
      );
    });

    if (sections.length === 0) {
      applyBackground(DEFAULT_BG);
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "";
      document.documentElement.style.removeProperty("--scroll-theme-bg");
    };
  }, []);

  return null;
}
