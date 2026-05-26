export type Project = {
  name: string;
  period: string;
  year: string;
  category: string;
  description: string;
  stack?: string;
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    name: "Atheneum Study Productivity Platform",
    period: "March 2026–present",
    year: "2026",
    category: "study platform",
    description:
      "Full-stack study platform featuring a custom Pomodoro tracker, interactive scheduler, Kanban organization layout, and an AI-powered Study Vault driving automated material summaries and quiz generation. Hosted on Cloudflare native serverless infrastructure.",
    stack:
      "Remix · TypeScript · Cloudflare Workers · Workers AI · Tailwind CSS · Cloudflare D1/R2/KV",
    link: "https://atheneum.app",
    linkLabel: "atheneum.app",
  },
  {
    name: "Literas Learning Management System",
    period: "August 2025–present",
    year: "2025",
    category: "web app",
    description:
      "Co-founded and engineered comprehensive LMS portals featuring separate administrative dashboards and student vectors. Successfully deployed across academic institutions in France with upcoming commercial licensing frameworks.",
    stack: "Next.js · Tailwind CSS · API Orchestration · Secure Auth",
    link: "https://literas.app",
    linkLabel: "literas.app",
  },
  {
    name: "E-Studenti Educational Platform",
    period: "July 2025–present",
    year: "2025",
    category: "platform",
    description:
      "A completely open-source student hub offering accessible study assets, notes, and curriculum materials across all faculties for the University of Prishtina student body. Built to handle seamless community email submissions for resource indexing.",
    stack: "Next.js · Tailwind CSS · Open-Source",
    link: "https://e-studenti.com",
    linkLabel: "e-studenti.com",
  },
];
