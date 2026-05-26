"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMounted } from "@/lib/useMounted";
import {
  BUBBLE_HOVER_STYLES,
  BUBBLE_MENU_BG,
  BUBBLE_MENU_FG,
  BUBBLE_OVERLAY_BG,
  BUBBLE_PILL_BG,
  BUBBLE_PILL_FG,
} from "@/lib/reactbitsTheme";

const BubbleMenu = dynamic(() => import("@/components/reactbits/BubbleMenu"), {
  ssr: false,
});

const navLinks = [
  { label: "about", href: "/about", ariaLabel: "About", rotation: -8 },
  { label: "work", href: "/work", ariaLabel: "Work", rotation: 6 },
  { label: "gallery", href: "/gallery", ariaLabel: "Gallery", rotation: -5 },
  { label: "misc", href: "/misc", ariaLabel: "Misc", rotation: 7 },
  { label: "contact", href: "/contact", ariaLabel: "Contact", rotation: -6 },
] as const;

export function BubbleNavbar() {
  const mounted = useMounted();

  if (!mounted) {
    return (
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[1001] h-20 opacity-0" />
    );
  }

  return (
    <BubbleMenu
      useFixedPosition
      logo={
        <Link
          href="/"
          className="font-mono text-sm tracking-wide text-black"
          onClick={(e) => e.stopPropagation()}
        >
          dona.
        </Link>
      }
      menuBg={BUBBLE_MENU_BG}
      menuContentColor={BUBBLE_MENU_FG}
      pillBg={BUBBLE_PILL_BG}
      pillColor={BUBBLE_PILL_FG}
      overlayBg={BUBBLE_OVERLAY_BG}
      items={navLinks.map((link, i) => ({
        label: link.label,
        href: link.href,
        ariaLabel: link.ariaLabel,
        rotation: link.rotation,
        hoverStyles: BUBBLE_HOVER_STYLES[i % BUBBLE_HOVER_STYLES.length],
      }))}
      className="!top-5 site-container !left-1/2 !right-auto !w-full max-w-[80rem] !-translate-x-1/2 !px-6 md:!px-12"
    />
  );
}
