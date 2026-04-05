"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  scrollToElementById,
  scrollToHashFromLocation,
  scrollToY,
} from "@/lib/smooth-scroll";

/**
 * Same-document anchor clicks → custom slow scroll (longer when moving up).
 * Hash changes and / + hash after navigation use the same animation.
 */
export function SmoothHash() {
  const pathname = usePathname();

  useEffect(() => {
    const onClickCapture = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const el = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        "a[href]",
      );
      if (!el) return;
      const hrefAttr = el.getAttribute("href");
      if (!hrefAttr) return;

      if (hrefAttr === "#") {
        e.preventDefault();
        history.pushState(null, "", pathname || "/");
        void scrollToY(0);
        return;
      }

      if (hrefAttr.startsWith("#") && hrefAttr.length > 1) {
        const id = decodeURIComponent(hrefAttr.slice(1));
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          history.pushState(null, "", hrefAttr);
          void scrollToElementById(id);
        }
        return;
      }

      let url: URL;
      try {
        url = new URL(hrefAttr, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;

      if (url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        if (!id) {
          e.preventDefault();
          history.pushState(null, "", `${url.pathname}${url.hash}`);
          void scrollToY(0);
          return;
        }
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          history.pushState(null, "", `${url.pathname}${url.hash}`);
          void scrollToElementById(id);
        }
        return;
      }

      if (
        window.location.pathname === "/" &&
        url.pathname === "/" &&
        !url.hash &&
        (hrefAttr === "/" || hrefAttr === "")
      ) {
        e.preventDefault();
        history.pushState(null, "", "/");
        void scrollToY(0, { duration: 1400 });
      }
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      void scrollToHashFromLocation();
    };
    window.addEventListener("hashchange", onHashChange);
    if (window.location.hash) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          void scrollToHashFromLocation();
        }),
      );
    }
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}
