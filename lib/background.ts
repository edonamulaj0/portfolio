export type TimelineItem = {
  year: string;
  text: string;
};

export type SkillGroup = {
  label: string;
  items: string;
  level: number;
};

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    text: "DigiCamp & Digital Skills Festival 2026 — 1st place, JunctionX Regional Hackathon",
  },
  {
    year: "2026",
    text: "Saxion University of Applied Sciences, Netherlands — Erasmus+ mobility, Information Security (Feb 2026–June 2026). Team-engineered automated algorithms to capture and visually map polarized digital discussions in an intuitive interface.",
  },
  {
    year: "2026",
    text: "University of Prishtina — BSc in Information and Communication Technologies (graduating June 2026)",
  },
  {
    year: "2026",
    text: "Atheneum Study Productivity Platform — full-stack study platform (March 2026–present)",
  },
  {
    year: "2025",
    text: "Cyphera — Founder & CEO (June 2025–present)",
  },
  {
    year: "2025",
    text: "Literas Learning Management System — co-founded (August 2025–present)",
  },
  {
    year: "2025",
    text: "E-Studenti Educational Platform — open-source student hub (July 2025–present)",
  },
  {
    year: "2025",
    text: "Hack&Stack (HNS) — Founder & Community Lead; 130+ active developers and tech enthusiasts",
  },
  {
    year: "2025",
    text: "MASHTI — 1st place, Engineering category, Creative & Innovative STEM Projects. Led a multi-disciplinary squad to develop an IoT elderly monitoring prototype with real-time ML fall detection via Raspberry Pi and automated caregiver emergency warnings.",
  },
];

export const skills: SkillGroup[] = [
  { label: "Languages", items: "TypeScript · Python · JavaScript · SQL", level: 88 },
  { label: "Frontend", items: "Next.js · Remix · React · Tailwind CSS", level: 92 },
  { label: "Backend", items: "Cloudflare Workers · Node.js · Prisma", level: 85 },
  {
    label: "Infrastructure",
    items: "Cloudflare D1 · R2 · KV · Pages · Workers AI",
    level: 80,
  },
  { label: "Security", items: "Network security · Pen testing · Red teaming", level: 72 },
];
