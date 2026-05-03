import { SectionHeading } from "@/components/SectionHeading";
import { InViewBlock } from "@/components/InViewBlock";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-[#0a0a0a] py-14">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
        <SectionHeading label="Section A — Profile" />
        <InViewBlock>
          <h2 id="about-heading" className="font-display mb-6 text-[clamp(2.25rem,5vw,3.5rem)] font-black text-[#0a0a0a]">
            The Long Feature
          </h2>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.1fr)] lg:gap-0">
            <div className="lg:pr-8">
              <p className="drop-cap font-body text-[1.08rem] leading-relaxed text-[#1a1a1a]">
                I write software the way editors lay a page: hierarchy first, ornament second. That means
                contracts that survive traffic spikes, typography that survives zoom, and security thinking
                that survives curiosity. The thread from Literas to Cyphera is the same — systems that
                respect the person at the keyboard.
              </p>
              <p className="font-body mt-4 text-[1.08rem] leading-relaxed text-[#1a1a1a]">
                Outside the IDE, I chase languages, routes on a map, and the quiet discipline of shipping
                on time without drama. If this page feels like newsprint, that is the point: credibility is
                a layout problem as much as a credentials problem.
              </p>
            </div>
            <div
              aria-hidden
              className="hidden w-px self-stretch bg-[#0a0a0a] lg:block"
            />
            <div className="lg:pl-8">
              <figure className="border border-[#0a0a0a]">
                <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden bg-[#d4cfc5]">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=640&h=480&fit=crop&auto=format&q=70"
                    alt=""
                    width={640}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <figcaption className="font-meta border-t border-[#0a0a0a] px-3 py-2 text-[0.7rem] tracking-[0.12em] text-[#1a1a1a]">
                  FILE PHOTO — Studio proof, silver gel tone. Subject at work on a quiet deadline.
                </figcaption>
              </figure>
              <blockquote className="font-display mt-8 text-2xl font-semibold italic leading-snug text-[#0a0a0a] sm:text-3xl">
                Precision is kindness; ambiguity is tax.
              </blockquote>
            </div>
          </div>
        </InViewBlock>
      </div>
    </section>
  );
}
