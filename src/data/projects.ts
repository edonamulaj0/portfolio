export type Project = {
  id: string;
  headline: string;
  year: string;
  lede: string;
  build: string;
  good: string;
  bad: string;
  status: string;
  datelines: string[];
  href: string | null;
};

export const projects: Project[] = [
  {
    id: "cyphera",
    headline: "Cyphera Studio",
    year: "2024",
    lede:
      "A deliberate web studio pairing editorial design systems with resilient engineering — shipping sites that read as clearly as they perform.",
    build:
      "Next.js and Vite stacks, strict typography scales, edge-ready deploys, and contracts that keep scope humane.",
    good:
      "Clients receive a single accountable thread from prototype to production; fewer handoffs, sharper launches.",
    bad:
      "Capacity is finite; saying no preserves quality and timelines.",
    status: "Active engagements · Prishtina & remote",
    datelines: ["PRISHTINA", "KOS.", "React", "TypeScript", "Vite"],
    href: "https://cyphera.dev",
  },
  {
    id: "atheneum",
    headline: "Atheneum Platform",
    year: "2023",
    lede:
      "A study operating system: calendars that breathe, focus sessions that protect depth work, and notes that stay findable.",
    build:
      "Cloudflare Workers, D1, durable sessions, and optimistic UI tuned for flaky campus Wi-Fi.",
    good:
      "Students report fewer context switches; the product rewards consistency over streaks.",
    bad:
      "Notifications remain the hardest editorial problem — tuned quietly, still iterated monthly.",
    status: "Public beta · weekly releases",
    datelines: ["CLOUDFLARE", "D1", "React"],
    href: null,
  },
  {
    id: "h4ck-stack",
    headline: "H4ck&Stack",
    year: "2022",
    lede:
      "A developer and security community built around honest critique, labs, and late-night stack traces.",
    build:
      "Discord ops, event playbooks, and lightweight sites that archive challenges without spoiling them.",
    good:
      "Mentors and newcomers share the same table; difficulty scales with consent.",
    bad:
      "Moderation load spikes during contest weeks — tooling and rosters evolve each season.",
    status: "Seasonal programs · open calls",
    datelines: ["COMMUNITY", "SECURITY", "LABS"],
    href: null,
  },
  {
    id: "literas",
    headline: "Literas LMS",
    year: "2021",
    lede:
      "Learning management tuned for French schools — roles, assessments, and teacher workflows that mirror the classroom.",
    build:
      "Multi-tenant auth, printable grade books, and localization paths that respect diacritics and pacing.",
    good:
      "Teachers adopted grading flows without retraining; parity with paper rituals mattered.",
    bad:
      "Legacy imports required patient ETL and a long tail of edge cases.",
    status: "Maintained · school-year cadence",
    datelines: ["FR", "EDTECH", "POSTGRES"],
    href: null,
  },
  {
    id: "e-studenti",
    headline: "E-Studenti",
    year: "2020",
    lede:
      "University resource platform linking students to materials, rooms, and peers with low-friction discovery.",
    build:
      "Modular content, resilient search, and moderation primitives tuned for student-generated posts.",
    good:
      "Reduced duplicate questions; moderators gained clear escalation rails.",
    bad:
      "Peak traffic aligned with exams — autoscaling budgets required discipline.",
    status: "Handed to campus partners",
    datelines: ["PRISHTINA", "UNIVERSITY", "NODE"],
    href: null,
  },
  {
    id: "iot-elder",
    headline: "IoT Elder Care",
    year: "2025",
    lede:
      "MASHTI 2025 first place — ambient sensors, calm thresholds, and human-readable alerts for families and carers.",
    build:
      "Firmware paths, gateway aggregation, and dashboards that default to quiet unless something matters.",
    good:
      "Jurors highlighted restraint: fewer alerts, higher signal, dignified copy.",
    bad:
      "Hardware variance demanded a broader QA matrix than pure software shops expect.",
    status: "Awarded · research archive",
    datelines: ["MASHTI", "IOT", "EDGE"],
    href: null,
  },
  {
    id: "ai-field",
    headline: "Magnetic Field Prediction",
    year: "2026",
    lede:
      "MIPRO 2026 paper — models that anticipate magnetic field behavior to support instrumentation and safety reviews.",
    build:
      "Dataset hygiene, reproducible training notebooks, and conservative claims reviewed with domain peers.",
    good:
      "Clear ablation table; reviewers could retrace every gain.",
    bad:
      "Data acquisition windows were narrow — future work needs longer horizons.",
    status: "Accepted · proceedings pending",
    datelines: ["MIPRO", "ML", "RESEARCH"],
    href: null,
  },
];
