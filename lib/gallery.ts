export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: "art" | "friends" | "music";
  aspect: "portrait" | "square" | "landscape";
  /** Columns to span on the 3-column grid (1–3). */
  cols?: 1 | 2 | 3;
  /** Rows to span on the base row unit (1–2). */
  rows?: 1 | 2;
};

export type Hobby = {
  label: string;
  detail: string;
};

export const hobbies: Hobby[] = [
  {
    label: "drawing & painting",
    detail: "charcoal sketches, watercolor scraps, whatever fits on the desk",
  },
  {
    label: "music",
    detail: "records, playlists, live shows — mostly alt, electronic, and whatever friends send me",
  },
  {
    label: "languages",
    detail: "learning french and german, slowly, between deadlines",
  },
  {
    label: "kubist",
    detail: "a small 3D art community i run — renders, feedback, good people",
  },
];

export function getGallerySpan(item: GalleryItem): { cols: 1 | 2 | 3; rows: 1 | 2 } {
  if (item.cols && item.rows) {
    return { cols: item.cols, rows: item.rows };
  }

  switch (item.aspect) {
    case "square":
      return { cols: 1, rows: 1 };
    case "portrait":
      return { cols: 1, rows: 2 };
    case "landscape":
      return { cols: 2, rows: 1 };
    default:
      return { cols: 1, rows: 1 };
  }
}

/** Add images to public/gallery/ and register them here. */
export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/charcoal-study.svg",
    alt: "Charcoal study on paper",
    caption: "charcoal study — late night",
    category: "art",
    aspect: "portrait",
    cols: 1,
    rows: 2,
  },
  {
    src: "/gallery/friends-gathering.svg",
    alt: "Friends together in Prishtina",
    caption: "friends, before a concert",
    category: "friends",
    aspect: "landscape",
    cols: 2,
    rows: 1,
  },
  {
    src: "/gallery/watercolor-notes.svg",
    alt: "Loose watercolor notes",
    caption: "watercolor scraps from a rainy week",
    category: "art",
    aspect: "square",
    cols: 1,
    rows: 1,
  },
  {
    src: "/gallery/vinyl-evening.svg",
    alt: "Vinyl records and evening light",
    caption: "sunday records",
    category: "music",
    aspect: "portrait",
    cols: 1,
    rows: 2,
  },
  {
    src: "/gallery/summer-friends.svg",
    alt: "Friends on a summer evening",
    caption: "summer in prishtina",
    category: "friends",
    aspect: "landscape",
    cols: 2,
    rows: 1,
  },
  {
    src: "/gallery/sketchbook-page.svg",
    alt: "Open sketchbook page",
    caption: "sketchbook corner",
    category: "art",
    aspect: "square",
    cols: 1,
    rows: 1,
  },
  {
    src: "/gallery/watercolor-notes.svg",
    alt: "Palette and paper",
    caption: "palette mess",
    category: "art",
    aspect: "square",
    cols: 1,
    rows: 1,
  },
  {
    src: "/gallery/friends-gathering.svg",
    alt: "Group photo outdoors",
    caption: "golden hour",
    category: "friends",
    aspect: "landscape",
    cols: 3,
    rows: 1,
  },
  {
    src: "/gallery/charcoal-study.svg",
    alt: "Figure drawing study",
    caption: "figure study",
    category: "art",
    aspect: "portrait",
    cols: 1,
    rows: 2,
  },
  {
    src: "/gallery/vinyl-evening.svg",
    alt: "Listening session",
    caption: "night playlist",
    category: "music",
    aspect: "landscape",
    cols: 2,
    rows: 1,
  },
  {
    src: "/gallery/sketchbook-page.svg",
    alt: "Sketchbook spread",
    caption: "commute sketches",
    category: "art",
    aspect: "square",
    cols: 1,
    rows: 1,
  },
  {
    src: "/gallery/summer-friends.svg",
    alt: "Friends at a cafe",
    caption: "coffee after class",
    category: "friends",
    aspect: "portrait",
    cols: 1,
    rows: 2,
  },
];
