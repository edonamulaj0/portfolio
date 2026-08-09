export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  year: string;
  location?: string;
  kind: "degree" | "mobility" | "school";
  description?: string;
  highlights?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "MSc in Information and Communication Technologies",
    institution: "University of Prishtina",
    period: "From Sep 2026",
    year: "2026",
    location: "Prishtina, Kosovo",
    kind: "degree",
    description: "Starting September 2026.",
  },
  {
    degree: "Erasmus+ Mobility",
    institution: "Saxion University of Applied Sciences",
    period: "Feb 2026 — Jun 2026",
    year: "2026",
    location: "The Netherlands",
    kind: "mobility",
    description:
      "Semester abroad researching polarization in online discourse with an international team.",
    highlights: [
      "Co-developed an algorithm that identifies polarized discussions across news and social sources.",
      "Built a civic intelligence platform surfacing multi-perspective analysis of tech and science debates.",
    ],
  },
  {
    degree: "BSc in Information and Communication Technologies",
    institution: "University of Prishtina",
    period: "Oct 2022 — May 2026",
    year: "2022",
    location: "Prishtina, Kosovo",
    kind: "degree",
  },
  {
    degree: "Erasmus+ Project IoT-ECO",
    institution: "Technical University of Sofia",
    period: "Sep 2025",
    year: "2025",
    location: "Bulgaria",
    kind: "mobility",
    description: "Applied IoT project sprint with an international student team.",
    highlights: [
      "Built a smart medical room simulation on Microsoft Azure with an international team.",
      "Implemented an automated response system that flags dangerous sensor values and schedules maintenance interventions.",
    ],
  },
  {
    degree: "High School Diploma, Natural Sciences",
    institution: "Bedri Pejani Gymnasium",
    period: "Sep 2019 — May 2022",
    year: "2019",
    location: "Kosovo",
    kind: "school",
  },
];
