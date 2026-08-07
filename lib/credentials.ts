export type Award = {
  title: string;
  event: string;
  date: string;
  year: string;
  highlights: string[];
  href?: string;
};

export type Publication = {
  title: string;
  venue: string;
  date: string;
  year: string;
};

export type Certification = {
  title: string;
  issuer: string;
  period: string;
  year: string;
  description?: string;
};

export const awards: Award[] = [
  {
    title: "1st Place — JunctionX Regional Hackathon",
    event: "DigiCamp Festival, ITP Prizren",
    date: "May 2026",
    year: "2026",
    highlights: [
      "Built Drit' — a digital child health record platform connecting parents, pediatricians, and public health administrators — in 48 hours.",
      "Shipped real-time vaccine scheduling, growth milestone tracking, and role-based dashboards for 3 user types.",
    ],
    href: "https://junctionx-ecru.vercel.app/",
  },
  {
    title: "1st Place — Engineering Category",
    event: "Creative and Innovative Projects, MASHTI",
    date: "Dec 2025",
    year: "2025",
    highlights: [
      "Led a team of 4 building an IoT elder-care monitoring system on Raspberry Pi.",
      "Implemented a machine learning algorithm for real-time fall detection and emergency alerting.",
      "Integrated automated alarm notifications that reach caregivers during critical events.",
    ],
  },
  {
    title: "Atomist",
    event: "Atomi Institute",
    date: "Jul 2019",
    year: "2019",
    highlights: [
      "Selected for a national enrichment program for children scoring in the top 0.4% on Mensa IQ assessments.",
    ],
  },
];

export const publications: Publication[] = [
  {
    title:
      "AI-Based Prediction of Low-Frequency Magnetic Field Exposure in Diverse Environments",
    venue: "MIPRO — 48th ICT and Electronics Convention",
    date: "May 2026",
    year: "2026",
  },
];

export const certifications: Certification[] = [
  {
    title: "Network Engineering Practice",
    issuer: "3CIS",
    period: "Jun 2026",
    year: "2026",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    issuer: "EBU — Luxembourg",
    period: "Jan 2026 — Apr 2026",
    year: "2026",
  },
  {
    title: "Girls in Cybersecurity",
    issuer: "ICK — DevelopHer x LuxDev",
    period: "Jan 2025 — Jun 2025",
    year: "2025",
    description:
      "Six-month intensive covering cybersecurity fundamentals, penetration testing, incident response, threat monitoring, and forensic investigation.",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Coder's Hub",
    period: "Feb 2024 — Jun 2024",
    year: "2024",
  },
  {
    title: "Artificial Intelligence Basics",
    issuer: "British College of Sciences by PBCA",
    period: "Apr 2022 — Jun 2022",
    year: "2022",
  },
  {
    title: "Web Fundamentals",
    issuer: "jCoders Academy",
    period: "Sep 2021 — Jun 2022",
    year: "2021",
  },
];
