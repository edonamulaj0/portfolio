/** Pure black base + iridescent silk accents */
export const BLACK = "#000000";
export const RB_BG = BLACK;
export const RB_TEXT = "#f4f2ef";
export const RB_MUTED = "#9a9590";
export const RB_ACCENT = "#ddd6fe";

export type EtherSection =
  | "hero"
  | "about"
  | "work"
  | "background"
  | "articles"
  | "misc"
  | "contact"
  | "default";

/** Iridescent silk palettes — shift emphasis per section */
export const ETHER_PALETTES: Record<EtherSection, string[]> = {
  hero: ["#e9d5ff", "#bae6fd", "#fbcfe8", "#ddd6fe"],
  about: ["#ddd6fe", "#f5d0fe", "#a5f3fc", "#e9d5ff"],
  work: ["#c4b5fd", "#bae6fd", "#e9d5ff", "#fbcfe8"],
  background: ["#a5f3fc", "#ddd6fe", "#fbcfe8", "#e9d5ff"],
  articles: ["#f5d0fe", "#e9d5ff", "#bae6fd", "#ddd6fe"],
  misc: ["#fbcfe8", "#ddd6fe", "#bae6fd", "#e9d5ff"],
  contact: ["#bae6fd", "#e9d5ff", "#ddd6fe", "#f5d0fe"],
  default: ["#e9d5ff", "#bae6fd", "#fbcfe8", "#ddd6fe"],
};

export const BUBBLE_MENU_BG = "rgba(0, 0, 0, 0.88)";
export const BUBBLE_MENU_FG = RB_TEXT;

export const BUBBLE_HOVER_STYLES = [
  { bgColor: "#e9d5ff", textColor: BLACK },
  { bgColor: "#bae6fd", textColor: BLACK },
  { bgColor: "#fbcfe8", textColor: BLACK },
  { bgColor: "#ddd6fe", textColor: BLACK },
  { bgColor: "#f5d0fe", textColor: BLACK },
] as const;
