"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#stack", label: "Stack" },
  { href: "/writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-violet-200/40 bg-[#f5f3ff]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[#f5f3ff]/75">
      <nav
        className="mx-auto flex w-full max-w-[min(90rem,calc(100%-1.5rem))] items-center justify-between gap-3 px-3 py-3 sm:px-4 sm:py-4 md:px-6"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-mono text-xs tracking-widest text-violet-950/80 uppercase min-h-11 min-w-11 flex items-center"
          onClick={() => setOpen(false)}
        >
          EM
        </Link>

        <ul className="hidden items-center gap-1 lg:flex lg:gap-5 xl:gap-6 text-violet-950/70 text-sm">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-lg px-3 py-2.5 transition hover:bg-violet-100/80 hover:text-violet-950"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-violet-200/80 bg-white/70 text-violet-950 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-nav-panel"
        className={`fixed inset-x-0 top-[calc(3.25rem+1px)] z-40 border-b border-violet-200/50 bg-[#f5f3ff]/98 backdrop-blur-lg transition-[opacity,visibility] duration-200 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="mx-auto flex max-w-[min(90rem,calc(100%-1.5rem))] flex-col gap-1 px-3 py-4 sm:px-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block min-h-12 rounded-xl px-4 py-3 text-base font-medium text-violet-950 active:bg-violet-200/50"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
