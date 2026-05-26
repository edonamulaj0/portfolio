"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";

type TransitionPhase = "idle" | "enter" | "exit";

export function usePageTransition() {
  const router = useRouter();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const pendingHref = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string) => {
      if (phase !== "idle") return;
      pendingHref.current = href;
      setPhase("enter");
    },
    [phase],
  );

  const onEnterComplete = useCallback(() => {
    const href = pendingHref.current;
    if (!href) {
      setPhase("idle");
      return;
    }
    router.push(href);
    pendingHref.current = null;
    setPhase("exit");
  }, [router]);

  const onExitComplete = useCallback(() => {
    setPhase("idle");
  }, []);

  return {
    phase,
    isActive: phase !== "idle",
    navigate,
    onEnterComplete,
    onExitComplete,
  };
}
