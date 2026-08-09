import { FadeIn } from "./FadeIn";

type ResumeRowProps = {
  /** Left rail — period or year */
  meta: string;
  title: string;
  subtitle?: string;
  location?: string;
  description?: string;
  bullets?: string[];
  href?: string;
  hrefLabel?: string;
  delay?: number;
};

export function ResumeRow({
  meta,
  title,
  subtitle,
  location,
  description,
  bullets,
  href,
  hrefLabel,
  delay = 0,
}: ResumeRowProps) {
  return (
    <FadeIn as="li" blur={false} delay={delay} className="resume-row">
      <>
        <p className="resume-row__meta">
          <span>{meta}</span>
          {location ? <span className="resume-row__location">{location}</span> : null}
        </p>

        <div className="resume-row__body">
          <h3 className="resume-row__title">
            {title}
            {subtitle ? (
              <>
                <span className="resume-row__sep" aria-hidden="true">
                  {" — "}
                </span>
                <span className="resume-row__org">{subtitle}</span>
              </>
            ) : null}
          </h3>

          {description ? <p className="resume-row__description">{description}</p> : null}

          {bullets?.length ? (
            <ul className="resume-row__bullets">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}

          {href ? (
            <a
              href={href}
              className="resume-row__link link-slide"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hrefLabel ?? href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              <span aria-hidden="true"> ↗</span>
            </a>
          ) : null}
        </div>
      </>
    </FadeIn>
  );
}
