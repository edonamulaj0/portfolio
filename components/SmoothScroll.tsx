"use client";

import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SmoothScrollContextValue = {
  /** Pause scrolling — used while the fullscreen menu is open */
  stop: () => void;
  start: () => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  stop: () => {},
  start: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const [, setReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenisRef.current = lenis;
    setReady(true);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Same-page hash links go through Lenis so they ease instead of jumping
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.(
        'a[href*="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;
      if (!url.hash || url.hash === "#") return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96 });
      window.history.pushState(null, "", url.hash);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  const stop = useCallback(() => {
    lenisRef.current?.stop();
    document.documentElement.style.overflow = "hidden";
  }, []);

  const start = useCallback(() => {
    document.documentElement.style.overflow = "";
    lenisRef.current?.start();
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ stop, start }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
