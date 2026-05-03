import { SectionHeading } from "@/components/SectionHeading";
import { InViewBlock } from "@/components/InViewBlock";

const boxes = [
  {
    label: "Professional inquiries",
    handle: "linkedin.com/in/edona-mulaj",
    href: "https://www.linkedin.com/in/edona-mulaj/",
    pitch: "For commissions, collaborations, and introductions with context.",
  },
  {
    label: "Code & experiments",
    handle: "github.com/edonamulaj0",
    href: "https://github.com/edonamulaj0",
    pitch: "Issues welcome when they include repro steps and kindness.",
  },
  {
    label: "Community wire",
    handle: "discord.gg/3Fd56dHc",
    href: "https://discord.gg/3Fd56dHc",
    pitch: "Fastest for H4ck&Stack and studio alumni threads.",
  },
  {
    label: "Private line",
    handle: "edona@cyphera.tech",
    href: "mailto:edona@cyphera.tech",
    pitch: "Longer briefs with attachments; expect a thoughtful reply.",
  },
] as const;

export function ContactSection() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-14">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
        <SectionHeading label="Section F — Classifieds" />
        <InViewBlock>
          <h2
            id="contact-heading"
            className="font-display mb-8 text-[clamp(2.25rem,5vw,3.25rem)] font-black text-[#0a0a0a]"
          >
            Notices &amp; Reply Cards
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {boxes.map((b) => (
              <article
                key={b.label}
                className="border-4 border-[#0a0a0a] p-5 shadow-[inset_0_0_0_1px_#d4cfc5]"
              >
                <h3 className="font-subhead text-xs font-bold tracking-[0.18em] small-caps">{b.label}</h3>
                <div className="my-3 border-t border-[#0a0a0a]" />
                <p className="font-meta text-sm tracking-tight text-[#0a0a0a]">
                  <a
                    href={b.href}
                    {...(b.href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noreferrer noopener" })}
                    className="newspaper-link break-all"
                  >
                    {b.handle}
                  </a>
                </p>
                <p className="font-body mt-3 text-[0.98rem] italic leading-snug text-[#1a1a1a]">{b.pitch}</p>
              </article>
            ))}
          </div>
        </InViewBlock>
        <footer className="mt-14 border-t border-[#0a0a0a] pt-6 text-center">
          <p className="font-meta text-[0.7rem] tracking-[0.24em] text-[#1a1a1a]">
            Vol. I · № 1 · All rights reserved · {year}
          </p>
        </footer>
      </div>
    </section>
  );
}
