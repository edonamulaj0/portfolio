"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { usePageTransition } from "@/hooks/usePageTransition";

type PageTransitionContextValue = {
  navigate: (href: string) => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

export function useTransitionNavigate() {
  const ctx = useContext(PageTransitionContext);
  return ctx?.navigate ?? null;
}

type PageTransitionProviderProps = {
  children: ReactNode;
};

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const { phase, isActive, navigate, onEnterComplete, onExitComplete } =
    usePageTransition();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as Element).closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      const isExternal =
        anchor.target === "_blank" ||
        anchor.origin !== window.location.origin ||
        anchor.hasAttribute("download");

      if (isExternal) return;

      const url = new URL(href, window.location.origin);
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }

      e.preventDefault();
      navigate(url.pathname + url.search + url.hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {isActive ? (
          <motion.div
            key="page-transition"
            className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: phase === "exit" ? "-100%" : "0%" }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            onAnimationComplete={() => {
              if (phase === "enter") onEnterComplete();
              else if (phase === "exit") onExitComplete();
            }}
          >
            <div className="absolute inset-0 bg-black" />
            <motion.div
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              style={{ transformOrigin: "left center" }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}
