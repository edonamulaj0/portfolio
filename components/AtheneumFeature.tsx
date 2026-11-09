import Image from "next/image";
import Link from "next/link";
import { atheneum } from "@/lib/atheneum";
import { FadeIn } from "./FadeIn";

/** Full-width "now building" block for the flagship project */
export function AtheneumFeature({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <FadeIn blur={false} className="feature">
      <div className="feature__body">
        <p className="feature__eyebrow">
          <span className="feature__pulse" aria-hidden="true" />
          current project · {atheneum.status}
        </p>
        <Heading className="feature__title">{atheneum.name}</Heading>
        <p className="feature__tagline">{atheneum.tagline}</p>
        <p className="feature__summary">{atheneum.summary}</p>

        <dl className="feature__metrics">
          {atheneum.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="feature__metric-value">{metric.value}</span>
                <span className="feature__metric-label">{metric.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <ul className="chip-row" aria-label="Atheneum tech stack">
          {atheneum.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="feature__actions">
          <Link href="/work/atheneum" className="feature__cta">
            Read the case study <span aria-hidden="true">→</span>
          </Link>
          <a
            href={atheneum.url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card__link link-slide"
            aria-label="Visit atheneum.app (opens in a new tab)"
          >
            atheneum.app<span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </div>

      <div className="feature__media image-frame">
        <Image
          src={atheneum.cover.src}
          alt={atheneum.cover.alt}
          width={1485}
          height={1059}
          sizes="(max-width: 900px) 100vw, 55vw"
          className="h-auto w-full"
        />
      </div>
    </FadeIn>
  );
}
