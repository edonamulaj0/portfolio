export type AcademicItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

/** Curated highlights for the homepage (03) section — full detail lives on /about#background */
export const academics: AcademicItem[] = [
  {
    year: "2026",
    title: "1st Place — JunctionX Regional Hackathon",
    institution: "DigiCamp Festival, ITP Prizren",
    description:
      "Built Drit', a digital child health record for parents, pediatricians, and public health administrators, in 48 hours.",
  },
  {
    year: "2026",
    title: "AI-Based Prediction of Low-Frequency Magnetic Field Exposure",
    institution: "MIPRO — 48th ICT and Electronics Convention",
    description: "Published research on modelling magnetic field exposure across diverse environments.",
  },
  {
    year: "2026",
    title: "Erasmus+ Mobility",
    institution: "Saxion University of Applied Sciences, Netherlands",
    description:
      "Co-developed an algorithm identifying polarized discussions across news and social sources, and a civic intelligence platform surfacing multi-perspective analysis.",
  },
  {
    year: "2025",
    title: "1st Place — Engineering Category",
    institution: "Creative and Innovative Projects, MASHTI",
    description:
      "Led a team of 4 on an IoT elder-care monitoring system with real-time ML fall detection and automated caregiver alerts.",
  },
  {
    year: "2026",
    title: "BSc in Information and Communication Technologies",
    institution: "University of Prishtina",
    description: "Graduated May 2026. MSc in ICT at the same faculty from September 2026.",
  },
];
