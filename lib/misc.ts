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
    title: "Drit' in JunctionX Regional Hackathon",
    date: "2026-05-26",
    excerpt: "My team and I won first place at JunctionX Regional Hackathon, DigiCamp & Digital Skills Festival 2026",
    tags: ["hackathon", "regional", "award"],
    content: "My team and I won first place at JunctionX Regional Hackathon, DigiCamp & Digital Skills Festival 2026",
  },
];

/** Standalone images — add files under public/misc/ */
const images: MiscImage[] = [
  {
    type: "image",
    id: "bestest-friends",
    date: "2026-01-25",
    src: "/gallery/5.jpeg",
    alt: "My bestest friends",
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
