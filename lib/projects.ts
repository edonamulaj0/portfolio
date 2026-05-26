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
    name: "Atheneum",
    period: "2024–present",
    year: "2024",
    category: "web app",
    description:
      "AI-powered study productivity platform. Socratic AI tutor, subscription infrastructure, encrypted storage. Built on Remix, Cloudflare Workers, D1, R2, Workers AI.",
    stack: "Remix · Cloudflare Workers · D1 · R2 · Workers AI · TypeScript",
    linkLabel: "in development",
  },
  {
    name: "H4ck&Stack",
    period: "2025–present",
    year: "2025",
    category: "community",
    description:
      "Community platform for developers and security researchers. Discord bot with XP tiers, anonymous challenge voting, AI-generated monthly challenges.",
    stack: "Next.js · Discord API · Prisma · D1 · Claude API · Python",
    link: "https://h4cknstack.com",
    linkLabel: "h4cknstack.com",
  },
  {
    name: "E-Studenti",
    period: "2023–present",
    year: "2023",
    category: "platform",
    description:
      "Open-source student resource hub actively used by students at the University of Prishtina.",
    stack: "JavaScript · HTML · CSS",
    link: "https://github.com/edonamulaj0/e-studenti",
    linkLabel: "github.com/edonamulaj0/e-studenti",
  },
  {
    name: "Literas",
    period: "2024–present",
    year: "2024",
    category: "web app",
    description:
      "Learning management system deployed in schools in France. v2 revamp in progress.",
    stack: "private",
    linkLabel: "private",
  },
  {
    name: "Cyphera",
    period: "2024–present",
    year: "2024",
    category: "studio",
    description:
      "Software studio. We build and maintain web products for clients across Kosovo and the region.",
    stack: "Next.js · Cloudflare · TypeScript",
    link: "https://cyphera.tech",
    linkLabel: "cyphera.tech",
  },
];
