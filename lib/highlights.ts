export type Stat = {
  value: string;
  label: string;
};

/** Headline numbers. Keep these to facts that stay true without updates. */
export const stats: Stat[] = [
  { value: "4", label: "platforms shipped" },
  { value: "2×", label: "first place, national & regional" },
  { value: "1", label: "IEEE-published paper (MIPRO 2026)" },
  { value: "220+", label: "members in the Hack&Stack community" },
];
