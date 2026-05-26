export type AcademicItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

export const academics: AcademicItem[] = [
  {
    year: "2021",
    title: "B.Sc. ICT & Network Engineering",
    institution: "University of Prishtina",
    description:
      "Undergraduate degree with focus on network security, distributed systems, and software engineering. Thesis track in applied cybersecurity.",
  },
  {
    year: "2026",
    title: "Expected graduation",
    institution: "University of Prishtina",
    description:
      "Completing final year coursework in June 2026. Student Council Representative for the ICT Class of 2026.",
  },
  {
    year: "2025",
    title: "Research co-author",
    institution: "MIPRO 2026",
    description:
      "Co-authored a paper on low-frequency magnetic field exposure, accepted for publication at MIPRO 2026.",
  },
  {
    year: "2024",
    title: "Cybersecurity training",
    institution: "DevelopHer × LuxDev",
    description:
      "Intensive program covering red teaming, penetration testing, and incident response.",
  },
];
