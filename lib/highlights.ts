export type Stat = {
  value: string;
  label: string;
};

/** Headline numbers, each traceable to a project or award */
export const stats: Stat[] = [
  { value: "8,000+", label: "monthly active users on E-Studenti" },
  { value: "4", label: "platforms shipped and live" },
  { value: "130+", label: "developers in the Hack&Stack community" },
  { value: "2×", label: "first place, national & regional" },
];

/** Ticker strip under the hero */
export const disciplines = [
  "software engineering",
  "founder",
  "learning platforms",
  "cybersecurity",
  "IoT & machine learning",
  "open source",
  "applied research",
];
