"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMounted } from "@/lib/useMounted";
import { useReducedMotion } from "framer-motion";
import {
  BUBBLE_HOVER_STYLES,
  BUBBLE_MENU_BG,
  BUBBLE_MENU_FG,
} from "@/lib/reactbitsTheme";

const BubbleMenu = dynamic(() => import("@/components/reactbits/BubbleMenu"), {
  ssr: false,
});

const navLinks = [
  { label: "about", href: "/about", ariaLabel: "About", rotation: -6 },
  { label: "work", href: "/work", ariaLabel: "Work", rotation: 5 },
  { label: "gallery", href: "/gallery", ariaLabel: "Gallery", rotation: -4 },
  { label: "misc", href: "/misc", ariaLabel: "Misc", rotation: 6 },
  { label: "contact", href: "/contact", ariaLabel: "Contact", rotation: -5 },
] as const;

function StaticNavFallback() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <nav className="site-container flex items-center justify-between py-5">
        <Link href="/" className="site-logo shrink-0">
          dona.
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 font-mono text-[10px] text-muted sm:text-xs md:gap-4 md:text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function BubbleNavbar() {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();

  if (!mounted) {
    return (
      <header className="site-header pointer-events-none fixed inset-x-0 top-0 z-50 h-20 opacity-0" />
    );
  }

  if (prefersReducedMotion) {
    return <StaticNavFallback />;
  }

  return (
    <BubbleMenu
      useFixedPosition
      logo={
        <Link
          href="/"
          className="font-mono text-sm tracking-wide text-text"
          onClick={(e) => e.stopPropagation()}
        >
          dona.
        </Link>
      }
      menuBg={BUBBLE_MENU_BG}
      menuContentColor={BUBBLE_MENU_FG}
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
