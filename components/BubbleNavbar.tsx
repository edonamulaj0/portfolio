"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMounted } from "@/lib/useMounted";
import { useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
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
  { label: "writing", href: "/articles", ariaLabel: "Writing", rotation: -4 },
  { label: "misc", href: "/misc", ariaLabel: "Misc", rotation: 6 },
  { label: "contact", href: "/contact", ariaLabel: "Contact", rotation: -5 },
] as const;

function StaticNavbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 glass-panel">
      <nav className="site-container flex items-center justify-between py-5">
        <Link href="/" className="link-slide font-mono text-sm tracking-wide">
          dona.
        </Link>
        <ul className="flex items-center gap-3 font-mono text-[10px] text-muted sm:gap-4 sm:text-xs md:gap-6 md:text-sm">
          {navLinks.map((link, index) => {
            const active =
              link.href === "/articles"
                ? pathname.startsWith("/articles")
                : pathname === link.href;

            return (
              <li key={link.href} className="flex items-center gap-3 sm:gap-4 md:gap-6">
                {index > 0 && (
                  <span className="text-divider" aria-hidden="true">
                    ·
                  </span>
                )}
                <Link
                  href={link.href}
                  className={`link-slide ${active ? "text-accent" : "hover:text-text"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export function BubbleNavbar() {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();

  if (!mounted || prefersReducedMotion) {
    return <StaticNavbar />;
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
      className="!top-5"
    />
  );
}
