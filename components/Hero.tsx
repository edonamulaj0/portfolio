"use client";

import { easePremium } from "@/lib/motion";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeIn } from "./FadeIn";
import { RevealText } from "./RevealText";
import { SiteContainer } from "./SiteContainer";

function HeroBackground() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 140]);
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const image = (
    <Image
      src="/donahero.jpg"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-center transition-opacity duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
      aria-hidden="true"
    />
  );

  if (!mounted || prefersReducedMotion) {
    return <div className="absolute inset-0">{image}</div>;
  }

  return (
    <motion.div
      className="absolute inset-[-4%] will-change-transform"
      style={{ y: imageY, scale: imageScale }}
    >
      {image}
    </motion.div>
  );
}

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex h-[100dvh] flex-col justify-end overflow-hidden pb-10 md:pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <HeroBackground />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(109,40,217,0.22)_0%,transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_20%,rgba(192,132,252,0.12)_0%,transparent_40%)]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg from-0% via-bg/98 via-35% to-transparent"
        aria-hidden="true"
      />

      <SiteContainer className="relative z-10 flex flex-col justify-end">
        <div className="max-w-5xl">
          <RevealText
            as="h1"
            text="dona."
            className="hero-headline font-normal tracking-tight"
            immediate
            gradient
          />
          <FadeIn immediate delay={0.2} blur={false}>
            <p className="mt-6 max-w-xl font-mono text-xs text-muted md:text-sm">
              software developer · founder · prishtina, kosovo
            </p>
          </FadeIn>
        </div>
      </SiteContainer>

      {mounted && !prefersReducedMotion ? (
        <motion.div
          initial={false}
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 10 : 0 }}
          transition={{ duration: 0.55, ease: easePremium }}
          className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center"
          aria-hidden={scrolled}
        >
          <span className="scroll-indicator font-mono text-xs">↓ scroll</span>
        </motion.div>
      ) : (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center"
          aria-hidden={scrolled}
        >
          <span className="scroll-indicator font-mono text-xs">↓ scroll</span>
        </div>
      )}
    </section>
  );
}
