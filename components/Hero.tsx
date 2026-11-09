"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap/register";
import { SiteContainer } from "./SiteContainer";

const NAME = "Edona S. Mulaj";
const HEADLINE = "dona.";
const SUBTITLE =
  "Associate Project Manager @ Certus Cybersecurity · building Atheneum, an AI study platform";
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
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const totalMs = (HEADLINE.length - 1) * LETTER_STAGGER * 1000 + 700;
    const id = window.setTimeout(() => setHeadlineDone(true), totalMs);
    return () => window.clearTimeout(id);
  }, [prefersReducedMotion]);

  return (
    <section className="hero" aria-label="Introduction">
      <div ref={imageRef} className="hero__media">
        <Image
          src="/donamob.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
          aria-hidden="true"
        />
        <Image
          src="/donahero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
          aria-hidden="true"
        />
      </div>

      <div className="hero__wash pointer-events-none" aria-hidden="true" />
      <div className="hero__scrim pointer-events-none" aria-hidden="true" />

      <SiteContainer className="relative z-10">
        <div className="max-w-5xl">
          <div className="flex flex-col items-start">
            <div className="relative inline-block">
              <h1 className="hero-headline relative z-[1] tracking-tight">
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

            <p className="hero-eyebrow mt-4">
              <span className="hero-eyebrow__star" aria-hidden="true">
                ✦
              </span>
              {NAME}
            </p>
          </div>

          <p className="hero__subtitle">
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
        <span className="scroll-indicator">↓ scroll</span>
      </div>
    </section>
  );
}
