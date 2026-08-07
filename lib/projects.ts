export type Project = {
  name: string;
  period: string;
  year: string;
  category: string;
  /** One-line summary used in preview rows */
  description: string;
  /** Longer detail shown on the work page */
  highlights: string[];
  stack?: string[];
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    name: "Atheneum",
    period: "Mar 2026 — present",
    year: "2026",
    category: "study platform",
    description:
      "AI-powered study platform pairing an AI tutor with spaced repetition and a customizable module system, running on Cloudflare's edge stack.",
    highlights: [
      "Building an AI study platform that combines an AI tutor, spaced repetition, and a customizable module system.",
      "Runs entirely on Cloudflare's edge stack — Workers for compute and Workers AI for generation — for low-latency delivery without a managed server.",
    ],
    stack: ["Remix", "TypeScript", "Cloudflare Workers", "Workers AI", "Tailwind CSS"],
    link: "https://atheneum.app",
    linkLabel: "atheneum.app",
  },
  {
    name: "Literas",
    period: "Aug 2025 — present",
    year: "2025",
    category: "learning management",
    description:
      "Full-featured LMS with separate student and admin portals, deployed across bachelor's and master's programs at a university in France.",
    highlights: [
      "Developing a full-featured learning management system with separate student and administrator portals.",
      "Deployed across bachelor's and master's programs at a university in France.",
      "Handles authenticated coursework flows, role-based access, and API-driven content delivery.",
    ],
    stack: ["Next.js", "Tailwind CSS", "REST APIs", "Authentication"],
    link: "https://literas.app",
    linkLabel: "literas.app",
  },
  {
    name: "E-Studenti",
    period: "Jul 2025 — present",
    year: "2025",
    category: "open source",
    description:
      "Free, open-source platform serving university materials for every faculty at the University of Prishtina — 8,000+ monthly active users.",
    highlights: [
      "Built a free, open-source platform providing university materials across all faculties at the University of Prishtina.",
      "Reaches 8,000+ monthly active users, with community submissions feeding the resource index.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Open source"],
    link: "https://e-studenti.com",
    linkLabel: "e-studenti.com",
  },
  {
    name: "Drit'",
    period: "May 2026",
    year: "2026",
    category: "hackathon winner",
    description:
      "Digital child health record connecting parents, pediatricians, and public health administrators — built in 48 hours, 1st place at JunctionX.",
    highlights: [
      "Built Drit' — Ditari i Rritjes dhe Imunizimit Tim — a digital child health record linking parents, pediatricians, and public health administrators with real-time data.",
      "Shipped smart vaccine scheduling and growth milestone tracking covering birth to age 18 across 3 distinct user roles.",
      "Developed in 48 hours at the JunctionX Regional Hackathon — first place, engineering.",
    ],
    stack: ["Next.js", "Real-time data", "Role-based access"],
    link: "https://junctionx-ecru.vercel.app/",
    linkLabel: "live demo",
  },
];
