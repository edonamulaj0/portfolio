import Link from "next/link";
import { ArticleBody } from "./ArticleBody";
import { FadeIn } from "./FadeIn";
import { SiteContainer } from "./SiteContainer";
import { formatMiscDate, type MiscArticle } from "@/lib/misc";

type MiscArticleViewProps = {
  article: MiscArticle;
};

export function MiscArticleView({ article }: MiscArticleViewProps) {
  return (
    <main id="main">
      <section className="section">
        <SiteContainer>
          <article>
            <FadeIn immediate blur={false}>
              <Link href="/misc" className="page-intro__back link-slide">
                ← Writing
              </Link>

              <header className="mt-10 max-w-3xl border-b border-line pb-10 md:mt-12 md:pb-12">
                <time dateTime={article.date} className="eyebrow !text-accent">
                  {formatMiscDate(article.date)}
                </time>
                <h1 className="mt-4 text-3xl font-light tracking-tight md:text-5xl md:leading-tight">
                  {article.title}
                </h1>
                {article.tags.length > 0 ? (
                  <ul className="chip-row mt-6">
                    {article.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </header>
            </FadeIn>

            <FadeIn delay={0.1} blur={false}>
              <div className="max-w-3xl pt-10 md:pt-12">
                <ArticleBody content={article.content} />
              </div>
            </FadeIn>
          </article>
        </SiteContainer>
      </section>
    </main>
  );
}
