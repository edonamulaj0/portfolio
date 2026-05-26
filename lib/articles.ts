export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
};

const articles: Article[] = [
  {
    slug: "building-atheneum",
    title: "Building Atheneum — an AI tutor that asks questions back",
    date: "2026-02-14",
    excerpt:
      "Why I chose a Socratic approach for study tools, and what I learned shipping subscription infrastructure on Cloudflare.",
    tags: ["ai", "cloudflare", "product"],
    content: `When I started building Atheneum, I didn't want another chatbot that gives you the answer. I wanted something that makes you think.

## The Socratic problem

Most AI study tools optimize for speed — paste a question, get an explanation, move on. That feels productive, but it often skips the part where you actually learn. I wanted Atheneum to push back: ask follow-up questions, guide you toward the answer, and only step in when you're stuck.

## Infrastructure choices

Running on Cloudflare Workers with D1 and R2 meant I could keep latency low for students in Kosovo and across the region. Encrypted storage for notes and session history was non-negotiable — if you're trusting a tool with your study data, you should know how it's stored.

## What's next

Atheneum is still in development. The core tutor works, subscription flows are in place, and I'm iterating on how much the AI should challenge vs. support. If you're building in the ed-tech space, I'd love to compare notes.`,
  },
  {
    slug: "red-teaming-notes",
    title: "Notes from a week of red teaming",
    date: "2025-11-03",
    excerpt:
      "Reflections from DevelopHer x LuxDev training — pen testing, incident response, and why defenders think differently.",
    tags: ["security", "red-teaming"],
    content: `I spent a week in intensive cybersecurity training with DevelopHer and LuxDev — red teaming, penetration testing, and incident response. Here's what stuck with me.

## Attackers think in graphs, defenders think in lists

That phrase came up early and it changed how I read logs. An attacker connects dots across systems. A defender often sees isolated alerts. The training pushed us to build the graph — what can this credential reach, what does this open port imply, where does this misconfiguration lead.

## Pen testing is not about showing off

The best findings weren't dramatic. They were misconfigured permissions, forgotten subdomains, assumptions that "internal" means safe. The goal isn't to impress — it's to show a team exactly where their model of the system diverges from reality.

## Incident response under pressure

The IR exercises were the hardest part. When something is actively wrong, you don't have time to be elegant. You need runbooks, clear roles, and the discipline to preserve evidence before you fix things. I'm carrying that mindset into everything I build now — design for failure, log for recovery.`,
  },
  {
    slug: "starting-cyphera",
    title: "Why I started Cyphera",
    date: "2024-09-18",
    excerpt:
      "A small software studio in Prishtina — what we build, who we work with, and why local matters.",
    tags: ["cyphera", "founder"],
    content: `Cyphera started because I kept seeing the same gap: businesses in Kosovo and the region needed reliable web products, but the options were either too generic or too far away to understand local context.

## Small by design

We're intentionally small. That means I stay close to every project — architecture, security review, deployment. Clients aren't handed off to a rotating team they've never met.

## What we build

Most of our work is web products — platforms, internal tools, client-facing apps. We maintain what we ship. That long-term relationship is the part I care about most.

## Local doesn't mean limited

Being based in Prishtina is a strength. We understand the market, the constraints, the pace. We also build on infrastructure that scales globally — Cloudflare, modern JS stacks — so "local studio" doesn't mean "local-only product."

If you're working on something in the region and need a technical partner, reach out.`,
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getLatestArticles(limit = 3): Article[] {
  return getAllArticles().slice(0, limit);
}

export function formatArticleDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
