import type { MetadataRoute } from "next";
import { getMiscArticleSlugs } from "@/lib/misc";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edonamulaj.com";

const staticPages = ["/about", "/work", "/gallery", "/misc", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getMiscArticleSlugs();

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
    ...slugs.map((slug) => ({
      url: `${siteUrl}/misc/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
