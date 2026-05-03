import { motion } from "framer-motion";

type Props = {
  ready: boolean;
};

export function MastheadSection({ ready }: Props) {
  const edge = ready ? "border-[#0a0a0a]" : "border-[#d4cfc5]";
  const bodyTone = ready ? "text-[#1a1a1a]" : "text-[#d4cfc5]";
  const displayTone = ready ? "text-[#0a0a0a]" : "text-[#f5f0e8]";
  const vRule = ready ? "bg-[#0a0a0a]" : "bg-[#d4cfc5]";

  return (
    <section
      id="masthead"
      aria-labelledby="masthead-title"
      className={`relative z-[81] border-b pb-12 pt-8 transition-[background-color] duration-500 ease-out ${edge} ${
        ready ? "bg-[#f5f0e8]" : "bg-[#0a0a0a]"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
        <div className={`border-t-4 ${edge}`} />
        <p
          className={`font-meta mt-4 text-center text-[0.7rem] tracking-[0.24em] transition-colors duration-500 sm:text-xs ${
            ready ? "text-[#1a1a1a]" : "text-[#d4cfc5]"
          }`}
        >
          THE CYPHERA CHRONICLE · Est. 2024 · Prishtina, Kosovo
        </p>
        <div className={`mt-4 border-t-2 ${edge}`} />

        <motion.h1
          id="masthead-title"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`font-masthead text-center text-[clamp(2.75rem,9vw,6rem)] leading-[0.92] transition-colors duration-500 ${
            ready ? "text-[#0a0a0a]" : "text-[#f5f0e8]"
          }`}
          style={{ textShadow: ready ? "none" : "0 1px 0 rgba(0,0,0,0.35)" }}
        >
          Edona Mulaj
        </motion.h1>

        <div className={`mt-2 border-t ${edge}`} />
        <p
          className={`font-subhead mx-auto mt-3 max-w-2xl text-center text-sm font-bold italic small-caps transition-colors duration-500 sm:text-base ${
            ready ? "text-[#1a1a1a]" : "text-[#f5f0e8]"
          }`}
        >
          Engineer · Founder · Chronicler of useful systems
        </p>
        <div className={`mt-4 border-t-4 ${edge}`} />

        <div className="relative mt-10 grid gap-6 lg:grid-cols-[1fr_auto_minmax(0,1.15fr)_auto_0.95fr] lg:items-stretch lg:gap-0">
          <motion.article
            className="lg:pr-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.45 }}
          >
            <p className={`font-meta mb-2 text-xs tracking-[0.18em] small-caps ${bodyTone}`}>
              Editor&apos;s note
            </p>
            <p className={`font-body text-[1.05rem] leading-relaxed ${bodyTone}`}>
              This folio is set by hand: no spot color, no stock hero photograph — only type, rule, and
              rhythm. Read it like a front page; the fold is imaginary but the intent is not.
            </p>
          </motion.article>

          <div
            aria-hidden
            className={`hidden w-px justify-self-stretch transition-opacity duration-500 lg:block ${vRule} ${ready ? "opacity-100" : "opacity-0"}`}
          />

          <motion.article
            className={`border-t pt-6 lg:border-t-0 lg:px-6 lg:pt-0 ${edge}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.45 }}
          >
            <h2
              className={`font-display mb-3 text-[clamp(2rem,4vw,2.75rem)] font-black leading-tight ${displayTone}`}
            >
              A Broadsheet for the Work
            </h2>
            <p className={`font-body text-[1.08rem] leading-relaxed ${bodyTone}`}>
              I build web platforms and communities where typography meets systems thinking — from LMS rails
              for schools to edge-ready tools for studios. Prishtina is home; the network is the dateline.
            </p>
          </motion.article>

          <div
            aria-hidden
            className={`hidden w-px justify-self-stretch transition-opacity duration-500 lg:block ${vRule} ${ready ? "opacity-100" : "opacity-0"}`}
          />

          <motion.aside
            className={`border-t pt-6 lg:border-t-0 lg:pl-6 lg:pt-0 ${edge}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.45 }}
          >
            <p
              className={`font-display text-center text-2xl font-semibold italic leading-snug lg:text-left lg:text-3xl ${displayTone}`}
            >
              &ldquo;Ship the story and the stack together.&rdquo;
            </p>
            <p className={`font-meta mt-4 text-right text-[0.65rem] tracking-[0.2em] small-caps ${bodyTone}`}>
              — The masthead promise
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
