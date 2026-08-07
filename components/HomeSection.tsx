import { type ReactNode } from "react";
import { SectionCurveDivider } from "./SectionCurveDivider";

export type HomeSectionTheme = "dark" | "hologram";

type HomeSectionProps = {
  id?: string;
  theme?: HomeSectionTheme;
  className?: string;
  /** Smooth SVG curve into a following hologram section */
  curveDivider?: boolean;
  /**
   * Accessible name for the landmark. Rendered as a visually hidden heading so
   * the section reads correctly in a document outline without changing the design.
   */
  heading?: string;
  children: ReactNode;
};

export function HomeSection({
  id,
  theme = "dark",
  className = "",
  curveDivider = false,
  heading,
  children,
}: HomeSectionProps) {
  const headingId = heading ? `${id ?? heading.toLowerCase()}-heading` : undefined;

  return (
    <section
      id={id}
      data-theme={theme}
      aria-labelledby={headingId}
      className={[
        "home-section",
        `home-section--${theme}`,
        curveDivider ? "home-section--curve-bottom" : "",
        "scroll-mt-24",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {theme === "hologram" ? (
        <div className="home-section__hologram" aria-hidden="true" />
      ) : null}
      <div className="home-section__content relative z-[1]">
        {heading ? (
          <h2 id={headingId} className="sr-only">
            {heading}
          </h2>
        ) : null}
        {children}
      </div>
      {theme === "dark" && curveDivider ? <SectionCurveDivider /> : null}
    </section>
  );
}
