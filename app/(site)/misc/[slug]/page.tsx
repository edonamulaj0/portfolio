import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MiscArticleView } from "@/components/MiscArticleView";
import { getMiscArticle, getMiscArticleSlugs } from "@/lib/misc";

type MiscPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getMiscArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: MiscPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getMiscArticle(slug);

  if (!article) {
    return { title: "post not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function MiscPostPage({ params }: MiscPostPageProps) {
  const { slug } = await params;
  const article = getMiscArticle(slug);

  if (!article) {
    notFound();
  }

  return <MiscArticleView article={article} />;
}
