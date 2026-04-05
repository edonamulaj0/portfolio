export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  /** ISO date when known, for <time> */
  dateIso?: string;
  excerpt: string;
  paragraphs: string[];
  linkedInUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "atheneum-cloudflare-stack",
    title: "Why I put Atheneum on Cloudflare’s full stack",
    date: "Mar 2026",
    dateIso: "2026-03-01",
    excerpt:
      "Workers, D1, and R2 let me keep study data and AI features close to users without juggling five vendors. Here’s how I split sync state, file storage, and Workers AI for the Study Vault.",
    paragraphs: [
      "Atheneum started as a simple idea: one place for focus, planning, and review. The hard part wasn’t the Pomodoro or the Kanban — it was making the AI Study Vault feel instant and trustworthy without renting half the internet.",
      "I chose Cloudflare end to end: Pages for the Remix app, Workers for APIs, D1 for relational data that fits SQLite semantics, R2 for files and exports, KV for small bits of session-ish state, and Workers AI where summarisation and quiz generation run. That sounds like a lot of boxes, but it’s one vendor, one mental model for deployment, and edges close to students.",
      "The Study Vault is the piece I’m most careful about. Uploads land in R2; metadata and user-scoped pointers sit in D1. Workers sit in the middle so the browser never sees raw storage keys. When a student asks for a summary, the Worker pulls the right object, calls Workers AI with a tight prompt, and streams or returns structured text for the UI to render.",
      "Trade-offs exist. Local dev with D1 and R2 needs discipline, and you learn quickly what belongs in KV versus D1. The upside is predictable bills for a solo-built product and a path to scale without replatforming. If you’re weighing “serverless but actually integrated,” this stack is worth a serious look.",
    ],
    linkedInUrl: "https://www.linkedin.com/in/edona-mulaj/",
  },
  {
    slug: "running-cyphera",
    title: "Running Cyphera: clients, delivery, and the feed",
    date: "2025 — ongoing",
    excerpt:
      "Beyond code: scoping SMB sites, keeping projects on track, and showing up on LinkedIn and our socials with updates, launches, and community calls for Hack&Stack.",
    paragraphs: [
      "Cyphera is a web studio for small and medium businesses, but day to day it’s also operations: scoping, timelines, client calls, and making sure what we ship matches what we promised. I touch every stage — from first message to launch — and I’ve learned that clarity in writing saves more hours than clever code.",
      "Client work taught me to separate “nice to have” from “revenue this quarter.” I keep a single source of truth for each project (scope, milestones, links), and I over-communicate when risk appears. SMB owners rarely care about your stack; they care that the booking form works on a phone and that invoices look legitimate.",
      "Outside delivery, I run our public presence: LinkedIn, announcements, and the rhythm of posts that explain what we built and who it’s for. Consistency beats virality — a steady signal that we’re active and hireable.",
      "Hack&Stack sits next to that work: a community of 70+ people sharing opportunities, side projects, and collaboration. It’s not marketing gloss; it’s the network I wished existed when I was only learning in isolation. If you’re building in the Balkans or beyond, say hello — we’re always looking for serious builders.",
    ],
    linkedInUrl: "https://www.linkedin.com/in/edona-mulaj/",
  },
  {
    slug: "girls-in-cyber-to-portswigger",
    title: "From Girls in Cyber to Burp repeater tabs",
    date: "2025",
    excerpt:
      "Formal training gave me the map; PortSwigger Academy is where I’m drilling web vulns for real. I’m pairing that with full-stack shipping so secure defaults aren’t an afterthought.",
    paragraphs: [
      "The DevelopHer × LuxDev track at ICK gave me six months of structured security: fundamentals, offensive and defensive angles, red-team mindset, incident response, forensics, and a taste of AI/ML security. It was dense, practical, and humbling — you realise how wide the field is.",
      "Classroom labs are one thing; repeating requests in Burp until you understand every parameter is another. I’m working through PortSwigger Web Security Academy to connect those lessons to real web apps: SSRF, access control, JWT issues, and the boring bugs that still take companies down.",
      "I don’t want security to live in a silo. When I ship Next.js or Remix apps, I think about headers, auth boundaries, and how data crosses trust zones. The goal isn’t paranoia — it’s fewer surprises at 2 a.m.",
      "If you’re a developer curious about security, my advice is simple: pick one lab track, finish it, then break your own toy app on purpose. You’ll remember the failure modes when it counts.",
    ],
    linkedInUrl: "https://www.linkedin.com/in/edona-mulaj/",
  },
  {
    slug: "e-studenti-community-product",
    title: "Building E-Studenti as a community product",
    date: "Jul 2025",
    dateIso: "2025-07-01",
    excerpt:
      "Open source isn’t only a repo — it’s email workflows for submissions, moderation, and keeping faculty materials useful for every student who lands on the site.",
    paragraphs: [
      "E-Studenti exists because students shouldn’t hunt PDFs in chat threads. The University of Prishtina spans many faculties; centralising materials in one open site lowers friction for everyone, especially first-years.",
      "Technically it’s Next.js and Tailwind — familiar choices — but the product heart is submission flow. Contributors email or submit resources; we need moderation, deduplication instincts, and clear categories so search stays usable as volume grows.",
      "Engagement metrics were a pleasant surprise: people actually came back. That validated the idea that “boring” infrastructure — fast pages, readable typography, working search — matters more than flashy marketing.",
      "Open source here means transparency and invites for PRs, but it also means documenting how to add a faculty or retire a broken link. Community products die when only one person knows the rules; I’m writing those rules in public as we go.",
    ],
    linkedInUrl: "https://www.linkedin.com/in/edona-mulaj/",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
