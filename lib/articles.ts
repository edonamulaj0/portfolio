/** @deprecated Writing lives in misc — re-exports for compatibility */
import {
  type MiscArticle,
  formatMiscDate,
  getAllMiscArticles,
  getMiscArticle,
  getLatestMiscItems,
} from "./misc";

export type Article = Omit<MiscArticle, "type"> & { type?: "article" };

export const formatArticleDate = formatMiscDate;
export const getAllArticles = () =>
  getAllMiscArticles().map(({ type: _type, ...article }) => article);
export const getArticle = (slug: string) => {
  const article = getMiscArticle(slug);
  if (!article) return undefined;
  const { type: _type, ...rest } = article;
  return rest;
};

export function getLatestArticles(limit = 3) {
  return getLatestMiscItems(limit)
    .filter((item): item is MiscArticle => item.type === "article")
    .map(({ type: _type, ...article }) => article);
}
