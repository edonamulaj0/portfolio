"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "about", href: "/about" },
  { label: "work", href: "/work" },
  { label: "gallery", href: "/gallery" },
  { label: "writing", href: "/articles" },
  { label: "misc", href: "/misc" },
  { label: "contact", href: "/contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/articles") {
    return pathname.startsWith("/articles");
  }
  if (href === "/misc") {
    return pathname.startsWith("/misc");
  }
  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <nav className="site-container flex items-center justify-between py-5">
        <Link href="/" className="site-logo shrink-0">
          dona.
        </Link>

        <ul className="flex items-center gap-3 font-mono text-[10px] text-muted sm:gap-4 sm:text-xs md:gap-6 md:text-sm">
          {links.map((link, index) => (
            <li key={link.href} className="flex items-center gap-3 sm:gap-4 md:gap-6">
              {index > 0 && (
                <span className="text-divider" aria-hidden="true">
                  ·
                </span>
              )}
              <Link
                href={link.href}
                className={`nav-link ${isActive(pathname, link.href) ? "text-text" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
