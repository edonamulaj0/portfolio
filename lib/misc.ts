export type MiscArticle = {
  type: "article";
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  content: string;
};

export type MiscImage = {
  type: "image";
  id: string;
  date: string;
  src: string;
  alt: string;
};

export type MiscItem = MiscArticle | MiscImage;

const articles: MiscArticle[] = [
  {
    type: "article",
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
    type: "article",
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
    type: "article",
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
  {
    type: "article",
    slug: "learning-french-between-deadlines",
    title: "Learning French (slowly) between deadlines",
    date: "2025-11-02",
    excerpt:
      "Languages as a parallel track — fifteen minutes a day, no grand plan, just consistency.",
    tags: ["languages", "life"],
    content: `I'm learning French and German in the margins of everything else. No immersion trip yet — just apps, podcasts, and stubborn repetition.

## The method

Short daily sessions. Vocabulary that survives contact with real life. Accepting that progress is invisible until one day it isn't.

## Why post about it here

Misc is for writing and images away from the résumé — technical articles, personal notes, and standalone photos in one feed.`,
  },
];

/** Standalone images — add files under public/misc/ */
const images: MiscImage[] = [
  {
    type: "image",
    id: "charcoal-study",
    date: "2026-01-25",
    src: "/misc/charcoal-study.jpeg",
    alt: "Charcoal figure study on toned paper",
  },
  {
    type: "image",
    id: "prishtina-evening",
    date: "2025-12-12",
    src: "/misc/prishtina-evening.jpeg",
    alt: "Evening light over Prishtina rooftops",
  },
];

function byDateDesc(a: MiscItem, b: MiscItem) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function getAllMiscItems(): MiscItem[] {
  return [...articles, ...images].sort(byDateDesc);
}

export function getLatestMiscItems(limit = 3): MiscItem[] {
  return getAllMiscItems().slice(0, limit);
}

export function getAllMiscArticles(): MiscArticle[] {
  return [...articles].sort(byDateDesc);
}

export function getAllMiscImages(): MiscImage[] {
  return [...images].sort(byDateDesc);
}

export function getMiscArticle(slug: string): MiscArticle | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getMiscArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}

export function formatMiscDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

/** @deprecated Use getMiscArticle */
export const getMiscPost = getMiscArticle;
/** @deprecated Use getAllMiscArticles */
export const getAllMiscPosts = getAllMiscArticles;
/** @deprecated Use getLatestMiscItems */
export const getLatestMiscPosts = (limit = 3) =>
  getLatestMiscItems(limit).filter((item): item is MiscArticle => item.type === "article");
