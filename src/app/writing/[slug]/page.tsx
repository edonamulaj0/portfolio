import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getAllSlugs,
  getPostBySlug,
} from "@/content/blog-posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} — Edona Mulaj`,
    description: post.excerpt,
  };
}

export default async function WritingArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const words = post.paragraphs.join(" ").split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));

  return (
    <article className="mx-auto w-full max-w-[min(56rem,calc(100%-1.5rem))] px-3 pb-20 sm:px-4 sm:pb-24 md:px-6 lg:px-8">
      <nav className="mb-10" aria-label="Breadcrumb">
        <Link
          href="/writing"
          className="font-mono text-sm text-violet-600 transition hover:text-violet-950"
        >
          ← All writing
        </Link>
      </nav>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-violet-600">
          <time dateTime={post.dateIso ?? post.date}>{post.date}</time>
          <span aria-hidden>·</span>
          <span>{minutes} min read</span>
        </div>
        <h1 className="mt-4 text-[2.75rem] font-bold leading-[1.15] tracking-tight text-violet-950 md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--muted)] md:text-2xl">
          {post.excerpt}
        </p>
      </header>

      <div className="article-body space-y-6 text-[1.25rem] leading-[1.75] text-violet-950/95">
        {post.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-16 border-t border-violet-200/60 pt-10">
        <p className="text-lg leading-relaxed text-[var(--muted)]">
          Discuss on{" "}
          <a
            href={post.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-800 underline decoration-violet-300 underline-offset-4 hover:decoration-violet-500"
          >
            LinkedIn
          </a>
          .
        </p>
        <Link
          href="/writing"
          className="mt-6 inline-block font-mono text-sm text-violet-600 hover:text-violet-950"
        >
          ← Back to all writing
        </Link>
      </footer>
    </article>
  );
}
