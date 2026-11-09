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
  /** Source code, shown as a secondary link on the work page */
  repo?: string;
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
      "Co-developing an AI study platform: an AI tutor grounded in students' own files, spaced repetition, and a customizable module system.",
      "Around 160 users as of November 2026, with Free, Pro, Max, and Exam Pass plans.",
      "Runs entirely on Cloudflare's edge stack — Workers for compute and Workers AI for generation — for low-latency delivery without a managed server.",
    ],
    stack: ["Remix", "TypeScript", "Cloudflare Workers", "Workers AI", "Tailwind CSS"],
    link: "https://atheneum.app",
    linkLabel: "atheneum.app",
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
    name: "Polaris",
    period: "Feb 2026 — Jun 2026",
    year: "2026",
    category: "civic intelligence",
    description:
      "Civic-intelligence platform that surfaces polarized debates, explains each side, and lets people take a stance under editorial and AI moderation.",
    highlights: [
      "Built during an Erasmus+ semester at Saxion University of Applied Sciences with an international team, alongside an algorithm that identifies polarized discussions across news and social sources.",
      "Ingests news every 6 hours from the Guardian, Hacker News, and GDELT, then uses AI to synthesize structured both-sides write-ups across nine subject areas.",
      "Members vote on stances and comment; submissions go through editor review, AI moderation, and tiered penalties before anything is published.",
      "React SPA on Cloudflare Pages backed by a Hono Worker with D1, KV rate limiting, Workers AI, and Google sign-in.",
    ],
    stack: ["React", "TypeScript", "Hono", "Cloudflare Workers", "D1", "Workers AI"],
    link: "https://polaris-a4m.pages.dev/",
    linkLabel: "live app",
    repo: "https://github.com/edonamulaj0/polaris",
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
      "Developed in 48 hours at the JunctionX Regional Hackathon and awarded first place.",
    ],
    stack: ["Next.js", "Real-time data", "Role-based access"],
    link: "https://junctionx-ecru.vercel.app/",
    linkLabel: "live demo",
  },
];
