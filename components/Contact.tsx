import { contactExtended, contactIntro, contactLinks } from "@/lib/contact";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn, StaggerGroup, StaggerItem } from "./FadeIn";
import { MagneticContactLink } from "./MagneticContactLink";
import { PageIntro } from "./PageIntro";
import { Section } from "./Section";
import { SiteContainer } from "./SiteContainer";

type ContactProps = {
  mode?: "preview" | "full";
};

export function Contact({ mode = "full" }: ContactProps) {
  if (mode === "full") {
    return (
      <>
        <section className="section" aria-label="Introduction">
          <SiteContainer>
            <PageIntro label="(05) contact" title="let's talk." description={contactIntro} />

            <FadeIn blur={false} delay={0.16}>
              <p className="page-intro__description">{contactExtended}</p>
            </FadeIn>
          </SiteContainer>
        </section>

        <Section label="channels" index="05" tone="raised">
          <StaggerGroup as="ul" className="contact-list" stagger={0.06}>
            {contactLinks.map((link) => (
              <StaggerItem as="li" key={link.href}>
                <MagneticContactLink link={link} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          <FadeIn blur={false} delay={0.3}>
            <p className="contact-location">Prishtina, Kosovo · open to remote work</p>
          </FadeIn>
        </Section>
      </>
    );
  }

  return (
    <Section id="contact" index="05" label="contact">
      <div className="contact-cta">
        <FadeIn blur={false}>
          <h2 className="contact-cta__title">
            let&apos;s create something{" "}
            <span className="text-gradient">amazing.</span>
          </h2>
        </FadeIn>

        <FadeIn blur={false} delay={0.1}>
          <p className="contact-cta__note">
            Currently open to freelance projects, collaborations, and interesting
            opportunities.
          </p>
          <div className="mt-6">
            <CircleArrowLink href="/contact" label="say hello" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
