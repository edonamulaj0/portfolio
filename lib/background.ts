export type TimelineItem = {
  year: string;
  text: string;
};

export type SkillGroup = {
  label: string;
  items: string;
};

export const timeline: TimelineItem[] = [
  { year: "2026", text: "Co-author — research paper accepted to MIPRO 2026" },
  {
    year: "2026",
    text: "Student Council Representative, ICT Class of 2026, University of Prishtina",
  },
  { year: "2025", text: "1st place — JunctionX Regional Hackathon, Kosovo" },
  { year: "2025", text: "1st place — MASHTI 2025, IoT elder care system" },
  { year: "2025", text: "Speaker — Girls in ICT Conference, Prishtina" },
  {
    year: "2025",
    text: "Cybersecurity training — DevelopHer x LuxDev (red teaming, pen testing, incident response)",
  },
  { year: "2024", text: "Founded Cyphera" },
];

export const skills: SkillGroup[] = [
  { label: "Languages", items: "TypeScript · Python · JavaScript · SQL" },
  { label: "Frontend", items: "Next.js · Remix · React · Tailwind CSS" },
  { label: "Backend", items: "Cloudflare Workers · Node.js · Prisma" },
  { label: "Infrastructure", items: "Cloudflare D1 · R2 · KV · Pages · Workers AI" },
  { label: "Security", items: "Network security · Pen testing · Red teaming" },
];
