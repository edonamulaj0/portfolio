import { SectionHeading } from "@/components/SectionHeading";
import { InViewBlock } from "@/components/InViewBlock";

const items = [
  {
    title: "Languages",
    body: "Evenings with grammar books and stubborn flashcards — not for résumé padding, but for menus read aloud in their native cadence.",
  },
  {
    title: "Stillness",
    body: "Quiet routes through churches and hills; the kind of silence that sharpens attention instead of numbing it.",
  },
  {
    title: "Travel",
    body: "Ticket stubs in coat pockets, maps folded wrong on purpose, conversations with strangers who become footnotes to a trip.",
  },
] as const;

export function HobbiesSection() {
  return (
    <section id="hobbies" aria-labelledby="hobbies-heading" className="border-b border-[#0a0a0a] py-14">
      <div className="mx-auto max-w-[820px] px-4 text-center lg:px-8">
        <SectionHeading label="Section E — Leisure" />
        <InViewBlock>
          <h2
            id="hobbies-heading"
            className="font-display mb-8 text-[clamp(2rem,4vw,2.75rem)] font-black text-[#0a0a0a]"
          >
            Society Shorts
          </h2>
          <div className="font-body space-y-8 text-[1.05rem] leading-relaxed text-[#1a1a1a]">
            {items.map((it, i) => (
              <div key={it.title}>
                {i > 0 && (
                  <p className="font-display mb-6 text-lg tracking-[0.35em] text-[#0a0a0a]" aria-hidden>
                    &#x2767; &#x2726; &#x25c6;
                  </p>
                )}
                <h3 className="font-subhead text-lg font-bold italic text-[#0a0a0a]">{it.title}</h3>
                <p className="mt-2">{it.body}</p>
              </div>
            ))}
          </div>
        </InViewBlock>
      </div>
    </section>
  );
}
