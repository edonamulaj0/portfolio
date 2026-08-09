import { disciplines } from "@/lib/highlights";

/**
 * Infinite ticker. The track holds two identical runs and translates -50%,
 * so the loop is seamless with a single CSS animation and no JS.
 */
export function Marquee() {
  const run = (
    <span className="marquee__item">
      {disciplines.map((word) => (
        <span key={word} className="inline-flex items-center gap-12">
          {word}
          <span className="marquee__dot" aria-hidden="true">
            ●
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {run}
        {run}
      </div>
    </div>
  );
}
