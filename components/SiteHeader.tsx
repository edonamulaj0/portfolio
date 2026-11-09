"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SiteContainer } from "./SiteContainer";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Gallery", href: "/gallery" },
  { label: "Writing", href: "/misc" },
  { label: "Contact", href: "/contact" },
] as const;

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While the mobile menu is open: page behind it is inert (keeps Tab inside the menu),
  // and Escape closes it and returns focus to the toggle.
  useEffect(() => {
    const main = document.getElementById("main");
    const footer = document.querySelector<HTMLElement>(".site-footer");
    if (main) main.inert = open;
    if (footer) footer.inert = open;
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (main) main.inert = false;
      if (footer) footer.inert = false;
    };
  }, [open]);

  return (
    <header className="site-header">
      <SiteContainer className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="Edona Mulaj, home">
          Edona Mulaj
        </Link>

        <nav aria-label="Primary" className="site-header__nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="site-header__link"
                  aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </SiteContainer>

      {open ? (
        <nav id="mobile-menu" aria-label="Primary" className="mobile-menu">
          <SiteContainer>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="mobile-menu__link"
                    aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SiteContainer>
        </nav>
      ) : null}
    </header>
  );
}
