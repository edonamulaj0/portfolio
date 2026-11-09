import { academics } from "@/lib/academics";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { Section } from "./Section";

export function Academics() {
  return (
    <Section
      id="academics"
      index="03"
      label="timeline"
      title="security, research, and wins."
      intro="Running a CTF, two first-place finishes, a published MIPRO paper, and a semester abroad researching polarization in online discourse."
      tone="raised"
    >
      <ol className="timeline">
        {academics.map((item, index) => (
          <FadeIn
            as="li"
            key={`${item.year}-${item.title}`}
            className="timeline__item"
            blur={false}
            delay={index * 0.05}
          >
            <span className="timeline__dot" aria-hidden="true" />
            <span className="timeline__year">{item.year}</span>
            <div>
              <h3 className="timeline__title">
                {item.title}
                <span className="timeline__org">
                  <span aria-hidden="true"> — </span>
                  {item.institution}
                </span>
              </h3>
              <p className="timeline__description">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </ol>

      <div className="section-foot">
        <CircleArrowLink href="/about#background" label="view full background" />
      </div>
    </Section>
  );
}
