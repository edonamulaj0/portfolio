"use client";

import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
};

export type BubbleMenuProps = {
  logo: ReactNode | string;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  pillBg?: string;
  pillColor?: string;
  overlayBg?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
};

const DEFAULT_ITEMS: MenuItem[] = [
  { label: "home", href: "#", ariaLabel: "Home", rotation: -8 },
  { label: "about", href: "#", ariaLabel: "About", rotation: 8 },
  { label: "work", href: "#", ariaLabel: "Work", rotation: 5 },
  { label: "gallery", href: "#", ariaLabel: "Gallery", rotation: -4 },
  { label: "contact", href: "#", ariaLabel: "Contact", rotation: -6 },
];

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle menu",
  menuBg = "rgba(244, 242, 239, 0.96)",
  menuContentColor = "#000",
  pillBg = "#ffffff",
  pillColor = "#000000",
  overlayBg = "#000000",
  useFixedPosition = false,
  items,
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.12,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLAnchorElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);
  const scrollYRef = useRef(0);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;

  const containerClassName = [
    "bubble-menu",
    useFixedPosition ? "fixed" : "absolute",
    "left-0 right-0 top-5",
    "flex items-center justify-between",
    "gap-4",
    "pointer-events-none",
    "z-[1001]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const closeMenu = useCallback(() => {
    setIsMenuOpen((open) => {
      if (open) onMenuClick?.(false);
      return false;
    });
  }, [onMenuClick]);

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  const handleItemClick = () => {
    closeMenu();
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex" });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: "50% 50%" });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });
        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase,
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: "power3.out",
            },
            `-=${animationDuration * 0.9}`,
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power3.in",
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          setShowOverlay(false);
        },
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  useEffect(() => {
    const handleResize = () => {
      if (!isMenuOpen) return;
      const bubbles = bubblesRef.current.filter(Boolean);
      const isDesktop = window.innerWidth >= 900;
      bubbles.forEach((bubble, i) => {
        const item = menuItems[i];
        if (bubble && item) {
          gsap.set(bubble, { rotation: isDesktop ? (item.rotation ?? 0) : 0 });
        }
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, menuItems]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    if (!isMenuOpen) return;

    scrollYRef.current = window.scrollY;
    const { style } = document.body;
    const html = document.documentElement;

    style.position = "fixed";
    style.top = `-${scrollYRef.current}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      style.overflow = "";
      html.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-shell {
          position: fixed;
          inset: 0;
          z-index: 1000;
          pointer-events: none;
          background: #000000;
        }
        .bubble-menu-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: auto;
          cursor: default;
        }
        .bubble-menu-items {
          position: absolute;
          inset: 0;
          display: none;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .bubble-menu-items .pill-list {
          list-style: none;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
          max-width: 80rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: stretch;
          gap: 0;
          row-gap: 4px;
          pointer-events: auto;
        }
        @media (min-width: 768px) {
          .bubble-menu-items .pill-list {
            padding: 0 3rem;
          }
        }
        .bubble-menu-items .pill-col {
          display: flex;
          justify-content: center;
          align-items: stretch;
          flex: 0 0 calc(100% / 3);
          box-sizing: border-box;
        }
        .bubble-menu-items .pill-link {
          width: 100%;
          border-radius: 999px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
          transition: background 0.3s ease, color 0.3s ease;
          will-change: transform;
          min-height: 5rem;
          padding: 1.25rem 0;
          font-size: clamp(1.35rem, 4vw, 3.5rem);
          font-weight: 400;
          line-height: 1.2;
        }
        .bubble-menu-items .pill-label {
          display: inline-block;
          will-change: transform, opacity;
          line-height: 1.2;
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-col:nth-child(4):nth-last-child(2) {
            margin-left: calc(100% / 6);
          }
          .bubble-menu-items .pill-col:nth-child(4):last-child {
            margin-left: calc(100% / 3);
          }
          .bubble-menu-items .pill-link {
            min-height: 9rem;
            padding: clamp(1.5rem, 3vw, 4rem) 0;
            font-size: clamp(1.75rem, 3.5vw, 4rem);
          }
          .bubble-menu-items .pill-link {
            transform: rotate(var(--item-rot));
          }
          .bubble-menu-items .pill-link:hover {
            transform: rotate(var(--item-rot)) scale(1.06);
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
          .bubble-menu-items .pill-link:active {
            transform: rotate(var(--item-rot)) scale(0.94);
          }
        }
        @media (max-width: 899px) {
          .bubble-menu-items {
            align-items: flex-start;
            padding-top: 7.5rem;
          }
          .bubble-menu-items .pill-col {
            flex: 0 0 100%;
            margin-left: 0 !important;
          }
          .bubble-menu-items .pill-list {
            row-gap: 1rem;
          }
          .bubble-menu-items .pill-link:hover {
            transform: scale(1.04);
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
        }
      `}</style>

      <nav className={containerClassName} style={style} aria-label="Main navigation">
        <div
          className="bubble logo-bubble pointer-events-auto inline-flex h-12 items-center justify-center rounded-full px-4 shadow-[0_4px_16px_rgba(0,0,0,0.35)] will-change-transform md:h-14 md:px-6"
          aria-label="Logo"
          style={{ background: menuBg, minHeight: "48px" }}
        >
          <span className="logo-content inline-flex h-full w-[5.5rem] items-center justify-center md:w-[6.5rem]">
            {typeof logo === "string" ? (
              <img src={logo} alt="Logo" className="block max-h-[60%] max-w-full object-contain" />
            ) : (
              logo
            )}
          </span>
        </div>

        <button
          type="button"
          className={[
            "bubble toggle-bubble menu-btn pointer-events-auto inline-flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border-0 p-0 shadow-[0_4px_16px_rgba(0,0,0,0.35)] will-change-transform md:h-14 md:w-14",
            isMenuOpen ? "open" : "",
          ].join(" ")}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          aria-expanded={isMenuOpen}
          style={{ background: menuBg }}
        >
          <span
            className="menu-line block rounded-[2px]"
            style={{
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? "translateY(4px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="menu-line short mt-1.5 block rounded-[2px]"
            style={{
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {showOverlay ? (
        <div
          className={`bubble-menu-shell ${isMenuOpen ? "is-open" : ""}`}
          style={{ background: overlayBg }}
          aria-hidden={!isMenuOpen}
        >
          <button
            type="button"
            className="bubble-menu-backdrop border-0 bg-transparent"
            aria-label="Close menu"
            onClick={closeMenu}
          />

          <div
            ref={overlayRef}
            className="bubble-menu-items"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="pill-list" role="menu" aria-label="Menu links">
              {menuItems.map((item, idx) => (
                <li key={item.href} role="none" className="pill-col">
                  <a
                    role="menuitem"
                    href={item.href}
                    aria-label={item.ariaLabel || item.label}
                    onClick={handleItemClick}
                    className="pill-link"
                    style={
                      {
                        "--item-rot": `${item.rotation ?? 0}deg`,
                        "--hover-bg": item.hoverStyles?.bgColor || "#f3f4f6",
                        "--hover-color": item.hoverStyles?.textColor || pillColor,
                        background: pillBg,
                        color: pillColor,
                      } as CSSProperties
                    }
                    ref={(el) => {
                      if (el) bubblesRef.current[idx] = el;
                    }}
                  >
                    <span
                      className="pill-label"
                      ref={(el) => {
                        if (el) labelRefs.current[idx] = el;
                      }}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
