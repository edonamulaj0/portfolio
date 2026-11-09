import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn";
import { SiteContainer } from "@/components/SiteContainer";
import { atheneum, atheneumCaseStudy as cs, type CaseStudyImage } from "@/lib/atheneum";

export const metadata: Metadata = {
  title: "Atheneum: case study",
  description:
    "How Edona Mulaj and her co-developer built Atheneum, an AI study platform that turns lecture files into summaries, flashcards, and quizzes, on Cloudflare's edge.",
};

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <FadeIn as="section" blur={false} className="case__block">
      <h2 className="case__label">{label}</h2>
      <div>{children}</div>
    </FadeIn>
  );
}

function Figure({ image, priority = false }: { image: CaseStudyImage; priority?: boolean }) {
  return (
    <figure className="case__figure">
      <div className="image-frame">
        <Image
          src={image.src}
          alt={image.alt}
          width={1485}
          height={1059}
          sizes="(max-width: 900px) 100vw, 800px"
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

export default function AtheneumCaseStudy() {
  return (
    <main id="main">
      <section className="section">
        <SiteContainer>
          <FadeIn immediate blur={false}>
            <Link href="/work" className="page-intro__back link-slide">
              ← Work
            </Link>

            <header className="mt-10 max-w-3xl border-b border-line pb-10 md:mt-12 md:pb-12">
              <p className="feature__eyebrow">
                Case study · {atheneum.period}
              </p>
              <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl md:leading-tight">
                {atheneum.name}
              </h1>
              <p className="mt-4 text-lg text-muted">{atheneum.summary}</p>
              <p className="mt-3 text-muted">{atheneum.team}</p>


              <div className="feature__actions">
                <a
                  href={atheneum.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature__cta"
                  aria-label="Visit atheneum.app (opens in a new tab)"
                >
                  Visit atheneum.app <span aria-hidden="true">↗</span>
                </a>
              </div>
            </header>
          </FadeIn>

          <div className="case">
            <Figure image={atheneum.cover} priority />

            <Block label="the problem">
              <div className="case__prose">
                {cs.problem.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Block>

            <Block label="what it does">
              <ul className="case__grid">
                {cs.features.map((f) => (
                  <li key={f.title} className="case__card">
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </li>
                ))}
              </ul>
            </Block>

            <div className="case__grid">
              {cs.images.map((image) => (
                <Figure key={image.src} image={image} />
              ))}
            </div>

            <Block label="how it's built">
              <div className="case__prose">
                <ul className="list-disc space-y-3 pl-5">
                  {cs.architecture.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <ul className="chip-row" aria-label="Tech stack">
                  {atheneum.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Block>

            <Block label="pricing">
              <div className="case__prose">
                <p>{cs.pricing}</p>
              </div>
            </Block>

            <Block label="launch">
              <div className="case__prose mb-6">
                <p>{cs.launch}</p>
              </div>
              <Figure image={cs.booth} />
            </Block>

            <Block label="outcome">
              <div className="case__prose">
                <p>{cs.outcome}</p>
              </div>
            </Block>
          </div>
        </SiteContainer>
      </section>
    </main>
  );
}
