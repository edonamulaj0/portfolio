"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "about", href: "/about" },
  { label: "work", href: "/work" },
  { label: "writing", href: "/articles" },
  { label: "misc", href: "/misc" },
  { label: "contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/articles") {
    return pathname.startsWith("/articles");
  }

  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 16);

      if (current < 48) {
        setVisible(true);
      } else if (current > lastScrollY.current + 4) {
        setVisible(false);
      } else if (current < lastScrollY.current - 4) {
        setVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: visible ? 0 : "-100%" }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
      }
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-divider/80 bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="site-container flex items-center justify-between py-5">
        <Link href="/" className="link-slide font-mono text-sm tracking-wide">
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
                className={`link-slide transition-colors duration-300 ${
                  isActive(pathname, link.href) ? "text-text" : "hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
