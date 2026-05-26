export type AcademicItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

export const academics: AcademicItem[] = [
  {
    year: "2026",
    title: "BSc in Information and Communication Technologies",
    institution: "University of Prishtina",
    description: "Graduating June 2026.",
  },
  {
    year: "2026",
    title: "Erasmus+ Mobility, Information Security",
    institution: "Saxion University of Applied Sciences, Netherlands",
    description:
      "Feb 2026–June 2026. Team-engineered automated algorithms to capture and visually map polarized digital discussions in an intuitive interface.",
  },
  {
    year: "2025",
    title: "1st Place — Engineering Category, Creative & Innovative STEM Projects",
    institution: "MASHTI",
    description:
      "Led a multi-disciplinary engineering squad to develop an IoT elderly monitoring prototype. Implemented real-time machine learning fall detection logic via Raspberry Pi paired with automated caregiver emergency warning arrays.",
  },
  {
    year: "2026",
    title: "1st Place — JunctionX Regional Hackathon",
    institution: "DigiCamp & Digital Skills Festival 2026",
    description: "Regional hackathon winner.",
  },
];
