import { type ReactNode } from "react";

export type HomeSectionTheme = "dark" | "hologram";

type HomeSectionProps = {
  id?: string;
  theme?: HomeSectionTheme;
  className?: string;
  children: ReactNode;
};

export function HomeSection({
  id,
  theme = "dark",
  className = "",
  children,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      data-theme={theme}
      className={`home-section home-section--${theme} scroll-mt-24 ${className}`.trim()}
    >
      {theme === "hologram" ? (
        <div className="home-section__hologram" aria-hidden="true" />
      ) : null}
      <div className="home-section__content relative z-[1]">{children}</div>
    </section>
  );
}
