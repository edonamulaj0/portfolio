"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap/register";
import { SiteContainer } from "./SiteContainer";

const HEADLINE = "dona.";
const SUBTITLE = "software developer · founder · prishtina, kosovo";
const LETTER_STAGGER = 0.06;
const TYPEWRITER_MS = 35;

const letterVariants = {
  hidden: { y: 120, filter: "blur(20px)", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
      delay: i * LETTER_STAGGER,
    },
  }),
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [typed, setTyped] = useState(prefersReducedMotion ? SUBTITLE : "");
  const [headlineDone, setHeadlineDone] = useState(prefersReducedMotion);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) setScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !headlineDone) return;

    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setTyped(SUBTITLE.slice(0, index));
      if (index >= SUBTITLE.length) window.clearInterval(id);
    }, TYPEWRITER_MS);

    return () => window.clearInterval(id);
  }, [headlineDone, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    registerGsapPlugins();
    const el = imageRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => window.scrollY * 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "max",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const totalMs =
      (HEADLINE.length - 1) * LETTER_STAGGER * 1000 + 700;
    const id = window.setTimeout(() => setHeadlineDone(true), totalMs);
    return () => window.clearTimeout(id);
  }, [prefersReducedMotion]);

  return (
    <section className="hero-section relative flex h-[100dvh] flex-col justify-end overflow-hidden pb-10 md:pb-16">
      <div ref={imageRef} className="absolute inset-0 overflow-hidden will-change-transform">
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
          <div className="relative inline-block">
            <h1 className="hero-headline relative z-[1] max-w-5xl font-normal tracking-tight">
              {HEADLINE.split("").map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  className="inline-block"
                  custom={i}
                  initial={prefersReducedMotion ? false : "hidden"}
                  animate={prefersReducedMotion ? undefined : "visible"}
                  variants={letterVariants}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <div className="hero-headline-glow" aria-hidden="true" />
          </div>

          <p className="mt-6 max-w-xl font-mono text-xs text-muted md:text-sm">
            <span className="sr-only">{SUBTITLE}</span>
            <span aria-hidden="true">{typed}</span>
            {!prefersReducedMotion && headlineDone && typed.length < SUBTITLE.length ? (
              <span className="inline-block w-[0.55em] animate-pulse opacity-70">|</span>
            ) : null}
          </p>
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
