import { contactExtended, contactIntro, contactLinks } from "@/lib/contact";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn, StaggerGroup, StaggerItem } from "./FadeIn";
import { ContactLink } from "./ContactLink";
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
            <PageIntro label="(05) contact" title="Contact" description={contactIntro} />

            <FadeIn blur={false} delay={0.16}>
              <p className="page-intro__description">{contactExtended}</p>
            </FadeIn>
          </SiteContainer>
        </section>

        <Section label="channels" index="05" tone="raised">
          <StaggerGroup as="ul" className="contact-list" stagger={0.06}>
            {contactLinks.map((link) => (
              <StaggerItem as="li" key={link.href}>
                <ContactLink link={link} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          <FadeIn blur={false} delay={0.3}>
            <p className="contact-location">Prishtina, Kosovo</p>
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
            Get in touch
          </h2>
        </FadeIn>

        <FadeIn blur={false} delay={0.1}>
          <p className="contact-cta__note">
            Open to conversations about security, product, and education
            technology. Not available for freelance work.
          </p>
          <div className="mt-6">
            <CircleArrowLink href="/contact" label="Contact details" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
