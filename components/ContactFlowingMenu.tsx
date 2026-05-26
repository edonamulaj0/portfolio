"use client";

import dynamic from "next/dynamic";
import { useMounted } from "@/lib/useMounted";
import { useReducedMotion } from "framer-motion";
import { contactLinks } from "@/lib/contact";
import { FLOWING_MENU } from "@/lib/reactbitsTheme";
import { LANDSCAPE_ASSET, PORTRAIT_ASSET } from "@/lib/marqueeCards";

const FlowingMenu = dynamic(() => import("@/components/reactbits/FlowingMenu"), {
  ssr: false,
});

const flowingItems = contactLinks.map((link, index) => ({
  link: link.href,
  text: link.label,
  image: index % 2 === 0 ? LANDSCAPE_ASSET : PORTRAIT_ASSET,
  external: link.external,
}));

function StaticContactLinks() {
  return (
    <ul className="list-none space-y-5 p-0 md:space-y-6">
      {contactLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="link-slide inline-flex items-center gap-4 font-mono text-base text-text md:text-xl"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            <span>{link.label}</span>
            <span className="text-accent">→</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

type ContactFlowingMenuProps = {
  className?: string;
};

export function ContactFlowingMenu({ className = "" }: ContactFlowingMenuProps) {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();

  if (!mounted || prefersReducedMotion) {
    return (
      <div className={className}>
        <StaticContactLinks />
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-sm border border-purple-500/20 shadow-[0_24px_80px_-40px_rgba(76,29,149,0.55)] ${className}`}
      style={{ minHeight: "min(320px, 50vh)" }}
    >
      <FlowingMenu
        items={flowingItems}
        speed={14}
        textColor={FLOWING_MENU.textColor}
        bgColor={FLOWING_MENU.bgColor}
        marqueeBgColor={FLOWING_MENU.marqueeBgColor}
        marqueeTextColor={FLOWING_MENU.marqueeTextColor}
        borderColor={FLOWING_MENU.borderColor}
      />
    </div>
  );
}
