export type GalleryItem = {
  src: string;
  alt: string;
};

export const GALLERY_COUNT = 13;
export const GALLERY_PREVIEW_COUNT = 3;

/** Academics & work — public/gallery/1.jpeg … 13.jpeg. The first GALLERY_PREVIEW_COUNT show on the homepage. */
export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/1.jpeg",
    alt: "Speaking at the Girls in ICT Conference, AAB College",
  },
  {
    src: "/gallery/2.jpeg",
    alt: "Competing at the SHEcurity 2026 Hackathon, FIEK, Prishtina",
  },
  {
    src: "/gallery/13.jpeg",
    alt: "Presenting Atheneum at our booth, DokuTech DIY Fair, November 2026",
  },
  {
    src: "/gallery/3.jpeg",
    alt: "BSc graduation, University of Prishtina, 2026",
  },
  {
    src: "/gallery/4.jpeg",
    alt: "With the Drit' team at DigiCamp & Digital Skills Festival 2026",
  },
  {
    src: "/gallery/5.jpeg",
    alt: "The Drit' team after winning first place at JunctionX, DigiCamp & Digital Skills Festival 2026",
  },
  {
    src: "/gallery/6.jpeg",
    alt: "Presenting Drit' at the JunctionX Regional Hackathon",
  },
  {
    src: "/gallery/7.jpeg",
    alt: "With my mentor, Teuta Sahatqija",
  },
  {
    src: "/gallery/8.jpeg",
    alt: "Girls in Cybersecurity graduation ceremony, DevelopHer x LuxDev",
  },
  {
    src: "/gallery/9.jpeg",
    alt: "With my mentor, Sanija Murati",
  },
  {
    src: "/gallery/10.jpeg",
    alt: "First-place award for Drit' at the JunctionX Regional Hackathon, DigiCamp & Digital Skills Festival 2026",
  },
  {
    src: "/gallery/11.jpeg",
    alt: "With my team at the MASHTI Creative and Innovative Projects awards ceremony",
  },
  {
    src: "/gallery/12.jpeg",
    alt: "Presenting our IoT medical room simulation at Sofia University, Bulgaria",
  },
];
