"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeIn } from "./FadeIn";
import { SiteContainer } from "./SiteContainer";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) setScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex h-[100dvh] flex-col justify-end overflow-hidden pb-10 md:pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/donahero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(233,213,255,0.14)_0%,transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_20%,rgba(186,230,253,0.1)_0%,transparent_40%)]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg from-0% via-bg/98 via-35% to-transparent"
        aria-hidden="true"
      />

      <SiteContainer className="relative z-10 flex flex-col justify-end">
        <div className="max-w-5xl">
          <h1 className="hero-headline max-w-5xl font-normal tracking-tight">dona.</h1>
          <FadeIn immediate delay={0.2} blur={false}>
            <p className="mt-6 max-w-xl font-mono text-xs text-muted md:text-sm">
              software developer · founder · prishtina, kosovo
            </p>
          </FadeIn>
        </div>
      </SiteContainer>

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={scrolled}
      >
        <span className="scroll-indicator font-mono text-xs">↓ scroll</span>
      </div>
    </section>
  );
}
