import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edonamulaj.com";

const staticPages = ["/about", "/work", "/articles", "/misc", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
