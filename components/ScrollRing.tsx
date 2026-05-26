"use client";

import { useEffect, useState } from "react";

export function ScrollRing() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > 48);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`scroll-ring transition-opacity duration-500 ${hidden ? "opacity-0" : "opacity-100"}`}
      aria-hidden={hidden}
    >
      <svg viewBox="0 0 120 120" className="scroll-ring__svg">
        <defs>
          <path
            id="scroll-ring-path"
            d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          />
        </defs>
        <text className="scroll-ring__text">
          <textPath href="#scroll-ring-path" startOffset="0%">
            scroll down · scroll down · scroll down ·
          </textPath>
        </text>
      </svg>
      <span className="scroll-ring__arrow">↓</span>
    </div>
  );
}
