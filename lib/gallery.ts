export type GalleryItem = {
  src: string;
  alt: string;
};

export type Hobby = {
  label: string;
  detail: string;
};

export const GALLERY_COUNT = 12;
export const GALLERY_PREVIEW_COUNT = 3;

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

/** Landscape gallery slots: public/gallery/1.jpeg … 12.jpeg */
export const galleryItems: GalleryItem[] = Array.from(
  { length: GALLERY_COUNT },
  (_, i) => {
    const n = i + 1;
    return {
      src: `/gallery/${n}.jpeg`,
      alt: `Gallery photo ${n}`,
    };
  },
);
