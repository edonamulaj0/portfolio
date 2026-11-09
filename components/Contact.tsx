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
            <PageIntro label="(06) contact" title="let's talk." description={contactIntro} />

            <FadeIn blur={false} delay={0.16}>
              <p className="page-intro__description">{contactExtended}</p>
            </FadeIn>
          </SiteContainer>
        </section>

        <Section label="channels" index="06" tone="raised">
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
    <Section id="contact" index="06" label="contact">
      <div className="contact-cta">
        <FadeIn blur={false}>
          <h2 className="contact-cta__title">
            let&apos;s talk.
          </h2>
        </FadeIn>

        <FadeIn blur={false} delay={0.1}>
          <p className="contact-cta__note">
            Open to conversations about security, product, and student tech. Not
            taking freelance work.
          </p>
          <div className="mt-6">
            <CircleArrowLink href="/contact" label="say hello" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
