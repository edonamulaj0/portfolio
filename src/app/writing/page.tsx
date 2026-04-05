import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Writing — Edona Mulaj",
  description: "Essays and notes on building products, running Cyphera, and security.",
};

export default function WritingIndexPage() {
  return (
    <main className="mx-auto w-full max-w-[min(90rem,calc(100%-1.5rem))] px-3 pb-20 sm:px-4 sm:pb-24 md:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
      <header className="mb-16 border-b border-violet-200/60 pb-10">
        <p className="font-mono text-xs tracking-[0.2em] text-violet-600 uppercase">
          Writing
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-violet-950 md:text-5xl">
          Notes on building and learning
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          Longer pieces live here; I often cross-post threads on{" "}
          <a
            href="https://www.linkedin.com/in/edona-mulaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-800 underline decoration-violet-300 underline-offset-4 hover:decoration-violet-500"
          >
            LinkedIn
          </a>
          .
        </p>
      </header>
      <ul className="flex flex-col gap-0 divide-y divide-violet-200/50">
        {blogPosts.map((post) => (
          <li key={post.slug} className="py-10 first:pt-0">
            <article>
              <time
                dateTime={post.dateIso ?? post.date}
                className="font-mono text-sm text-violet-600"
              >
                {post.date}
              </time>
              <h2 className="mt-2 text-2xl font-bold leading-snug text-violet-950 md:text-3xl">
                <Link
                  href={`/writing/${post.slug}`}
                  className="transition hover:text-violet-800"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
                {post.excerpt}
              </p>
              <Link
                href={`/writing/${post.slug}`}
                className="mt-4 inline-block text-sm font-medium text-violet-800 underline decoration-violet-300 underline-offset-4 hover:decoration-violet-500"
              >
                Read article
              </Link>
            </article>
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
}
