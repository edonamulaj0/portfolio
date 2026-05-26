import { type ReactNode } from "react";
import { SectionCurveDivider } from "./SectionCurveDivider";

export type HomeSectionTheme = "dark" | "hologram";

type HomeSectionProps = {
  id?: string;
  theme?: HomeSectionTheme;
  className?: string;
  /** Smooth SVG curve into a following hologram section */
  curveDivider?: boolean;
  children: ReactNode;
};

export function HomeSection({
  id,
  theme = "dark",
  className = "",
  curveDivider = false,
  children,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      data-theme={theme}
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
      <div className="home-section__content relative z-[1]">{children}</div>
      {theme === "dark" && curveDivider ? <SectionCurveDivider /> : null}
    </section>
  );
}
