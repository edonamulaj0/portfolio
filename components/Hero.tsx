import Link from "next/link";
import { SiteContainer } from "./SiteContainer";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* One request per device: the browser picks the matching source */}
      <picture className="hero__media" aria-hidden="true">
        <source media="(min-width: 768px)" srcSet="/img/hero-desktop.webp" />
        <img
          src="/img/hero-mobile.webp"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="hero__img"
        />
      </picture>
      <div className="hero__scrim" aria-hidden="true" />

      <SiteContainer className="relative z-10">
        <h1 id="hero-title" className="hero-headline">
          Edona Mulaj
        </h1>
        <p className="hero__lede">
          Associate Project Manager at Certus Cybersecurity. I also build{" "}
          <Link href="/work/atheneum" className="hero__inline-link">
            Atheneum
          </Link>
          , an AI study platform with around 160 users.
        </p>

        <div className="hero__actions">
          <Link href="/work/atheneum" className="button button--primary">
            See Atheneum
          </Link>
          <Link href="/contact" className="button button--ghost">
            Get in touch
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
