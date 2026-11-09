export type Stat = {
  value: string;
  label: string;
};

/** Headline numbers, each traceable to a project or award */
export const stats: Stat[] = [
  { value: "8,000+", label: "monthly active users on E-Studenti" },
  { value: "~160", label: "Atheneum users and growing" },
  { value: "220+", label: "developers in the Hack&Stack community" },
  { value: "2×", label: "first place, national & regional" },
];

/** Ticker strip under the hero */
export const disciplines = [
  "security project management",
  "penetration testing",
  "building Atheneum",
  "AI study tools",
  "incident response",
  "community & CTFs",
  "applied research",
];
