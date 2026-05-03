import { SectionHeading } from "@/components/SectionHeading";
import { InViewBlock } from "@/components/InViewBlock";

const columns = [
  {
    title: "Frontend",
    items: [
      { name: "React 19", note: "Concurrent patterns where they earn their keep." },
      { name: "TypeScript", note: "Strict mode default; types as documentation." },
      { name: "Tailwind", note: "Design tokens in markup, not drift in CSS files." },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node", note: "Services, queues, and honest error surfaces." },
      { name: "Postgres", note: "Migrations with reviewable diffs." },
      { name: "Workers", note: "Edge handlers for latency-sensitive paths." },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "GitHub Actions", note: "CI that fails loudly and early." },
      { name: "Docker", note: "Reproducible builds for partners." },
      { name: "Vite", note: "Fast feedback for product loops." },
    ],
  },
  {
    title: "Security",
    items: [
      { name: "OWASP habits", note: "Threat modeling on every new surface." },
      { name: "Secrets", note: "Never checked in; rotated on schedule." },
      { name: "Reviews", note: "Pair audits before risky refactors." },
    ],
  },
] as const;

export function StackSection() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="border-b border-[#0a0a0a] py-14">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
        <SectionHeading label="Section C — Market Report" />
        <InViewBlock>
          <h2
            id="stack-heading"
            className="font-display mb-8 text-[clamp(2.25rem,5vw,3.25rem)] font-black text-[#0a0a0a]"
          >
            Dispatch from the Tooling Desk
          </h2>
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-0">
            {columns.map((col, idx) => (
              <div
                key={col.title}
                className={`lg:px-4 ${idx > 0 ? "lg:border-l lg:border-[#0a0a0a]" : ""}`}
              >
                <h3 className="font-subhead border-b border-[#0a0a0a] pb-2 text-center text-sm font-bold small-caps tracking-[0.18em]">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {col.items.map((row) => (
                    <li key={row.name} className="font-body text-[0.98rem] leading-snug text-[#1a1a1a]">
                      <span className="font-meta text-[0.85rem]">●</span>{" "}
                      <span className="font-semibold text-[#0a0a0a]">{row.name}</span> — {row.note}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 border-4 border-double border-[#0a0a0a] p-5">
            <p className="font-subhead text-center text-sm font-bold small-caps tracking-[0.22em]">
              Preferred tools
            </p>
            <p className="font-body mt-3 text-center text-[1.05rem] leading-relaxed text-[#1a1a1a]">
              Daily carry: <strong>Vite</strong>, <strong>React</strong>, <strong>TypeScript</strong>,{" "}
              <strong>Tailwind</strong>, <strong>Framer Motion</strong> for motion that would be brittle in
              CSS alone, and <strong>Cloudflare</strong> when the edge should answer first.
            </p>
          </div>
        </InViewBlock>
      </div>
    </section>
  );
}
