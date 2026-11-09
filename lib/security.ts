import type { ExternalLink } from "./links";
import { links as l } from "./links";

export type SecurityItem = {
  links?: ExternalLink[];
  title: string;
  org: string;
  period: string;
  description: string;
};

/** The security strand of the timeline, grouped on /about */
export const security: SecurityItem[] = [
  {
    title: "Associate Project Manager",
    org: "Certus Cybersecurity",
    links: [l.certus],
    period: "Oct 2026 — Present",
    description:
      "Coordinating penetration tests and security assessments for enterprise clients, including Fortune 100 companies.",
  },
  {
    title: "Hackathon & CTF organizer",
    org: "Hack&Stack",
    links: [l.hacknstack, l.hacknstackDiscord],
    period: "Sep 2026",
    description: "Organized a combined hackathon and capture-the-flag event for the community.",
  },
  {
    title: "SHEcurity 2026 Hackathon",
    org: "FIEK, Prishtina",
    period: "2026",
    description: "Competed in a women-in-security hackathon and solved a set of security challenges.",
  },
  {
    title: "Speaker",
    org: "Girls in ICT Conference, AAB College",
    period: "Talk",
    description:
      "Spoke about my path into technology and presented my work, including Atheneum and the Hack&Stack community.",
  },
  {
    title: "Girls in Cybersecurity",
    org: "ICK — DevelopHer x LuxDev",
    period: "Jan 2025 — Jun 2025",
    description:
      "Six-month intensive: penetration testing, incident response, threat monitoring, and forensic investigation.",
  },
];
