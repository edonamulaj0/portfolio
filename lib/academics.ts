import type { ExternalLink } from "./links";
import { links as l } from "./links";

export type AcademicItem = {
  links?: ExternalLink[];
  year: string;
  title: string;
  institution: string;
  description: string;
};

/** Curated, newest-first highlights for the homepage (03) section. Full detail lives on /about#background */
export const academics: AcademicItem[] = [
  {
    year: "2026",
    title: "Hackathon & CTF — organizer",
    links: [l.hacknstack, l.hacknstackDiscord],
    institution: "Hack&Stack, September 2026",
    description:
      "Ran a combined hackathon and capture-the-flag event for our 220+ member developer community.",
  },
  {
    year: "2026",
    title: "1st Place — JunctionX Regional Hackathon",
    links: [l.drit],
    institution: "DigiCamp Festival, ITP Prizren",
    description:
      "Built Drit', a digital child health record for parents, pediatricians, and public health administrators, in 48 hours.",
  },
  {
    year: "2026",
    title: "AI-Based Prediction of Low-Frequency Magnetic Field Exposure",
    links: [l.miproDoi],
    institution: "MIPRO — 48th ICT and Electronics Convention",
    description: "Published research on modelling magnetic field exposure across diverse environments.",
  },
  {
    year: "2026",
    title: "Erasmus+ Mobility",
    links: [l.polaris, l.polarisSource],
    institution: "Saxion University of Applied Sciences, Netherlands",
    description:
      "Co-developed an algorithm identifying polarized discussions across news and social sources, and Polaris, a civic intelligence platform.",
  },
  {
    year: "2026",
    title: "SHEcurity 2026 Hackathon",
    institution: "FIEK, Prishtina",
    description: "Competed in a women-in-security hackathon and solved a set of security challenges.",
  },
  {
    year: "2025",
    title: "1st Place — Engineering Category",
    institution: "Creative and Innovative Projects, MASHTI",
    description:
      "Led a team of 4 on an IoT elder-care monitoring system with real-time ML fall detection and automated caregiver alerts.",
  },
];
