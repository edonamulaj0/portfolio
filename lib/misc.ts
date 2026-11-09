export type MiscArticle = {
  type: "article";
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  content: string;
};

export type MiscImage = {
  type: "image";
  id: string;
  date: string;
  src: string;
  alt: string;
};

export type MiscItem = MiscArticle | MiscImage;

const articles: MiscArticle[] = [
  {
    type: "article",
    slug: "drit-junctionx-regional-hackathon",
    title: "Drit': First Place at the JunctionX Regional Hackathon",
    date: "2026-05-26",
    excerpt:
      "How our team built a digital child health record in 48 hours and took first place at JunctionX, DigiCamp & Digital Skills Festival 2026.",
    tags: ["hackathon", "health tech", "award"],
    coverImage: "/gallery/6.jpeg",
    content: `In May 2026 our team took first place at the JunctionX Regional Hackathon, held during the DigiCamp & Digital Skills Festival at ITP Prizren. We had 48 hours to go from an idea to a working product.

## The problem

A child's health history from birth to age 18, including vaccinations, growth measurements, and developmental milestones, is often spread across paper booklets and separate clinic records. That makes it easy for parents to miss an appointment and hard for public health teams to see the full picture.

## What we built

Drit' (Ditari i Rritjes dhe Imunizimit Tim) is a digital child health record that connects three groups in one platform:

Parents see their child's vaccination schedule, upcoming appointments, and growth milestones in one place.

Pediatricians record visits, vaccinations, and measurements, and see each child's history at a glance.

Public health administrators get an aggregate view of vaccination coverage and schedules across their region.

The platform includes real-time data updates, smart vaccine scheduling, growth and milestone tracking from birth to age 18, and role-based dashboards for each of the three user types.

## The result

We presented a working demo to the jury at the end of the 48 hours and were awarded first place. The project is still online as a live demo.`,
  },
];

/** Standalone images shown in the writing & notes feed */
const images: MiscImage[] = [
  {
    type: "image",
    id: "junctionx-team",
    date: "2026-05-26",
    src: "/gallery/5.jpeg",
    alt: "With my colleagues at DigiCamp & Digital Skills Festival 2026, after winning first place at JunctionX with Drit'",
  },
];

function byDateDesc(a: MiscItem, b: MiscItem) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function getAllMiscItems(): MiscItem[] {
  return [...articles, ...images].sort(byDateDesc);
}

export function getLatestMiscItems(limit = 3): MiscItem[] {
  return getAllMiscItems().slice(0, limit);
}

export function getAllMiscArticles(): MiscArticle[] {
  return [...articles].sort(byDateDesc);
}

export function getAllMiscImages(): MiscImage[] {
  return [...images].sort(byDateDesc);
}

export function getMiscArticle(slug: string): MiscArticle | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getMiscArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}

export function formatMiscDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

/** @deprecated Use getMiscArticle */
export const getMiscPost = getMiscArticle;
/** @deprecated Use getAllMiscArticles */
export const getAllMiscPosts = getAllMiscArticles;
/** @deprecated Use getLatestMiscItems */
export const getLatestMiscPosts = (limit = 3) =>
  getLatestMiscItems(limit).filter((item): item is MiscArticle => item.type === "article");
