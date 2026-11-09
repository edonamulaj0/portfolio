import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MiscArticleView } from "@/components/MiscArticleView";
import { getMiscArticle, getMiscArticleSlugs } from "@/lib/misc";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getMiscArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getMiscArticle(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

/** Legacy /articles/:slug — renders same article as /misc/:slug */
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getMiscArticle(slug);

  if (!article) {
    notFound();
  }

  return <MiscArticleView article={article} />;
}
