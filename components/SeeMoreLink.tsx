"use client";

import Link from "next/link";
import { Magnetic } from "./Magnetic";

type SeeMoreLinkProps = {
  href: string;
  label?: string;
};

export function SeeMoreLink({ href, label = "see more" }: SeeMoreLinkProps) {
  return (
    <Magnetic strength={0.22} className="inline-block">
      <Link
        href={href}
        className="link-slide group inline-flex items-center gap-2 font-mono text-xs text-accent md:text-sm"
      >
        <span>{label}</span>
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1">
          →
        </span>
      </Link>
    </Magnetic>
  );
}
