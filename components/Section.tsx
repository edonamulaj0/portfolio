import { type ReactNode } from "react";
import { FadeIn } from "./FadeIn";
import { SiteContainer } from "./SiteContainer";

type SectionProps = {
  id?: string;
  /** Two-digit index shown before the label, e.g. "01" */
  index?: string;
  label?: string;
  title?: string;
  intro?: string;
  /** "raised" lifts the band onto an elevated surface for vertical rhythm */
  tone?: "base" | "raised";
  tight?: boolean;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  index,
  label,
  title,
  intro,
  tone = "base",
  tight = false,
  className = "",
  children,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      aria-label={!title && label ? label : undefined}
      className={[
        "section",
        tone === "raised" ? "section--raised" : "",
        tight ? "section--tight" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <SiteContainer>
        {label || title || intro ? (
          <header className="section-head">
            {label ? (
              <FadeIn blur={false} className="section-head__meta">
                {index ? (
                  <span className="section-head__index">({index})</span>
                ) : null}
                <span className="section-head__label">{label}</span>
                <span className="section-head__rule" aria-hidden="true" />
              </FadeIn>
            ) : null}

            {title ? (
              <FadeIn delay={0.06}>
                <h2 id={headingId} className="section-head__title">
                  {title}
                </h2>
              </FadeIn>
            ) : null}

            {intro ? (
              <FadeIn blur={false} delay={0.12}>
                <p className="section-head__intro">{intro}</p>
              </FadeIn>
            ) : null}
          </header>
        ) : null}

        {children}
      </SiteContainer>
    </section>
  );
}
