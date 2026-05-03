export type ExperienceKind = "work" | "academic";

export type ExperienceItem = {
  id: string;
  kind: ExperienceKind;
  date: string;
  org: string;
  role: string;
  lines: string[];
};

/** Newest first — work and academic interleaved. */
export const experienceItems: ExperienceItem[] = [
  {
    id: "exp-7",
    kind: "academic",
    date: "2026",
    org: "MIPRO",
    role: "Paper · Applied ML",
    lines: [
      "AI Magnetic Field Prediction — accepted work on models that anticipate field behavior for instrumentation teams.",
    ],
  },
  {
    id: "exp-2",
    kind: "academic",
    date: "2025",
    org: "MASHTI Competition",
    role: "Research · IoT",
    lines: [
      "IoT Elder Care System — first place. Sensors, alerts, and calm dashboards for dignified aging in place.",
    ],
  },
  {
    id: "exp-1",
    kind: "work",
    date: "2024 — present",
    org: "Cyphera",
    role: "Founder · Lead Engineer",
    lines: [
      "Web studio shipping fast, accessible products for teams that care about craft and clarity.",
      "Owns architecture, delivery, and client partnerships end to end.",
    ],
  },
  {
    id: "exp-3",
    kind: "work",
    date: "2023 — present",
    org: "Atheneum",
    role: "Product · Platform",
    lines: [
      "Study productivity platform: scheduling, focus modes, and materials that respect attention.",
    ],
  },
  {
    id: "exp-4",
    kind: "work",
    date: "2022 — present",
    org: "H4ck&Stack",
    role: "Community · Programs",
    lines: [
      "Developer and security community: workshops, capture-the-flag nights, and mentorship rails.",
    ],
  },
  {
    id: "exp-5",
    kind: "work",
    date: "2021 — 2023",
    org: "Literas",
    role: "Engineering · LMS",
    lines: [
      "Learning management for French schools: roles, grading flows, and teacher-first ergonomics.",
    ],
  },
  {
    id: "exp-6",
    kind: "work",
    date: "2020 — 2022",
    org: "E-Studenti",
    role: "Platform · Community",
    lines: [
      "University resource hub connecting students to materials, peers, and timely campus signals.",
    ],
  },
];
