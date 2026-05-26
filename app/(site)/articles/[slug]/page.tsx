import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { FadeIn } from "@/components/FadeIn";
import { HomeSection } from "@/components/HomeSection";
import { SiteContainer } from "@/components/SiteContainer";
import {
  formatArticleDate,
  getAllArticles,
  getArticle,
} from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: `${article.title} — dona`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <HomeSection theme="hologram" className="home-section--page-first">
        <SiteContainer>
          <article>
            <FadeIn immediate>
              <Link
                href="/articles"
                className="link-slide font-mono text-xs text-muted md:text-sm"
              >
                ← all articles
              </Link>

              <header className="mt-10 max-w-3xl border-b border-divider pb-10 md:mt-12 md:pb-12">
                <time dateTime={article.date} className="font-mono text-xs text-accent md:text-sm">
                  {formatArticleDate(article.date)}
                </time>
                <h1 className="mt-4 text-3xl font-normal tracking-tight md:text-5xl md:leading-tight">
                  {article.title}
                </h1>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {article.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted md:text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </header>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="max-w-3xl pt-10 md:pt-12">
                <ArticleBody content={article.content} />
              </div>
            </FadeIn>
          </article>
        </SiteContainer>
      </HomeSection>
    </main>
  );
}
