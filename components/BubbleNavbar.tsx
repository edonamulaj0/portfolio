"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback } from "react";
import { useMounted } from "@/lib/useMounted";
import { useSmoothScroll } from "./SmoothScroll";
import { socialLinks } from "@/lib/social";
import { SocialIcon } from "./SocialIcon";
import { SocialLinks } from "./SocialLinks";
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

/** Icon-only social cluster that sits in the top bar next to the menu toggle */
function NavSocials() {
  return (
    <ul className="nav-socials" aria-label="Social links">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className="nav-socials__link"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.ariaLabel}
            title={link.label}
          >
            <SocialIcon id={link.id} className="h-[1.05rem] w-[1.05rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function BubbleNavbar() {
  const mounted = useMounted();
  const { stop, start } = useSmoothScroll();

  // The menu overlay owns the viewport while open, so pause the smooth scroller
  const onMenuClick = useCallback(
    (open: boolean) => {
      if (open) stop();
      else start();
    },
    [start, stop],
  );

  if (!mounted) {
    return (
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[1001] h-20 opacity-0" />
    );
  }

  return (
    <BubbleMenu
      useFixedPosition
      onMenuClick={onMenuClick}
      logo={
        <Link
          href="/"
          className="font-mono text-sm tracking-wide text-black"
          aria-label="Edona Mulaj — home"
          onClick={(e) => e.stopPropagation()}
        >
          dona.
        </Link>
      }
      trailing={<NavSocials />}
      overlayFooter={
        <SocialLinks variant="labelled" className="bubble-menu-socials" />
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
