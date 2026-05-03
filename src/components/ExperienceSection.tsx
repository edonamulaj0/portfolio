import { experienceItems } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { InViewBlock } from "@/components/InViewBlock";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-[#0a0a0a] py-14">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
        <SectionHeading label="Section B — Chronicle" />
        <InViewBlock>
          <h2
            id="experience-heading"
            className="font-display mb-10 text-[clamp(2.25rem,5vw,3.25rem)] font-black text-[#0a0a0a]"
          >
            Datelines &amp; Duties
          </h2>
          <ul className="space-y-10">
              {experienceItems.map((item) => (
                <li
                  key={item.id}
                  className={`border-l-2 pl-6 sm:pl-8 ${
                    item.kind === "academic"
                      ? "border-dashed border-[#0a0a0a]"
                      : "border-solid border-[#0a0a0a]"
                  }`}
                >
                  <p className="font-meta mb-1 text-right text-[0.7rem] tracking-[0.14em] text-[#1a1a1a]">
                    {item.date}
                  </p>
                  <h3 className="font-subhead text-xl font-bold text-[#0a0a0a]">{item.org}</h3>
                  <p className="font-body mt-1 text-sm font-semibold small-caps tracking-[0.12em] text-[#1a1a1a]">
                    {item.role}
                  </p>
                  <div className="font-body mt-3 space-y-2 text-[1.05rem] leading-relaxed text-[#1a1a1a]">
                    {item.lines.map((line) => (
                      <p key={line}>— {line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
        </InViewBlock>
      </div>
    </section>
  );
}
