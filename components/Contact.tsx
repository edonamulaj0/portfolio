import { contactExtended, contactIntro, contactLinks } from "@/lib/contact";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn, StaggerGroup, StaggerItem } from "./FadeIn";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { PageIntro } from "./PageIntro";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";
import { SplitHeadline } from "./SplitHeadline";

type ContactProps = {
  mode?: "preview" | "full";
  theme?: HomeSectionTheme;
};

export function Contact({ mode = "preview", theme = "dark" }: ContactProps) {
  if (mode === "full") {
    return (
      <HomeSection theme="hologram" className="home-section--page-first home-section--contact">
        <SiteContainer className="flex min-h-[calc(100dvh-10rem)] flex-col justify-between">
          <div>
            <PageIntro label="(06) contact" title="let's talk." description={contactIntro} />

            <FadeIn delay={0.12}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {contactExtended}
              </p>
            </FadeIn>

            <StaggerGroup
              as="ul"
              className="mt-12 list-none space-y-5 p-0 md:mt-16 md:space-y-6"
              stagger={0.06}
            >
              {contactLinks.map((link) => (
                <StaggerItem as="li" key={link.href}>
                  <a
                    href={link.href}
                    className="link-slide inline-flex items-center gap-4 font-mono text-base text-text md:text-xl"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    <span>{link.label}</span>
                    <span className="text-accent">→</span>
                  </a>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </SiteContainer>
      </HomeSection>
    );
  }

  return (
    <HomeSection id="contact" theme={theme} className="home-section--contact">
      <SiteContainer>
        <div className="section-layout">
          <aside className="section-layout__aside">
            <SectionTag index="06" label="contact" />
          </aside>

          <div className="section-layout__content">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <SplitHeadline
                lead="let's create something "
                accent="amazing."
                size="contact"
              />

              <div className="max-w-md space-y-8 lg:text-right">
                <FadeIn blur={false}>
                  <p className="text-base leading-relaxed text-muted md:text-lg">
                    I&apos;m currently open to freelance projects and exciting opportunities.
                  </p>
                </FadeIn>

                <FadeIn delay={0.1} blur={false} className="lg:flex lg:justify-end">
                  <CircleArrowLink href="/contact" label="say hello" />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
