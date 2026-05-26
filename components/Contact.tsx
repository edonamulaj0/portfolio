import { contactExtended, contactIntro, contactLinks } from "@/lib/contact";
import { FadeIn, StaggerGroup, StaggerItem } from "./FadeIn";
import { Magnetic } from "./Magnetic";
import { RevealText } from "./RevealText";
import { PageIntro } from "./PageIntro";
import { SeeMoreLink } from "./SeeMoreLink";
import { SiteContainer } from "./SiteContainer";

type ContactProps = {
  mode?: "preview" | "full";
};

export function Contact({ mode = "preview" }: ContactProps) {
  if (mode === "full") {
    return (
      <section className="section-shell pt-28 md:pt-32">
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
                  <Magnetic strength={0.18} className="inline-block">
                    <a
                      href={link.href}
                      className="link-slide inline-flex items-center gap-4 font-mono text-base text-text md:text-xl"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      <span>{link.label}</span>
                      <span className="text-accent">→</span>
                    </a>
                  </Magnetic>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <FadeIn delay={0.28}>
            <p className="mt-20 font-mono text-[10px] text-muted md:mt-24 md:text-xs">
              © 2026 Edona Mulaj · edonamulaj.com
            </p>
          </FadeIn>
        </SiteContainer>
      </section>
    );
  }

  return (
    <section id="contact" className="section-shell scroll-mt-20">
      <SiteContainer className="flex min-h-[50dvh] flex-col justify-center">
        <FadeIn blur={false}>
          <p className="font-mono text-sm text-accent md:text-base">(06) contact</p>
        </FadeIn>

        <RevealText
          as="h2"
          text="let's talk."
          className="contact-headline mt-10 font-normal tracking-tight md:mt-12"
          delay={0.06}
          gradient
        />

        <FadeIn delay={0.16}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:mt-10 md:text-lg">
            {contactIntro}
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-10">
            <SeeMoreLink href="/contact" label="get in touch" />
          </div>
        </FadeIn>
      </SiteContainer>
    </section>
  );
}
