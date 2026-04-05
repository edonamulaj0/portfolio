"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { blogPosts } from "@/content/blog-posts";
import { AmbientSides } from "@/components/ambient-sides";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/edonamulaj0",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edona-mulaj/",
    icon: LinkedInIcon,
  },
];

const projects = [
  {
    title: "Cyphera",
    tag: "Company · 2025 — present",
    description:
      "Company I founded focused on web development for small and medium businesses. I run day-to-day operations: client relationships, scoping and delivering projects, and coordinating delivery. I also built Hack&Stack, a community of 70+ builders sharing opportunities, projects, and collaboration.",
    href: "https://cyphera.tech",
    stack: "Next.js · Client work · Community · Social and content",
  },
  {
    title: "Atheneum",
    tag: "Product · 2026",
    description:
      "Full-stack study productivity platform: Pomodoro, study scheduler, Kanban board, and an AI-powered Study Vault with automatic summaries and quiz generation. Architected on Cloudflare-native infrastructure — Pages, Workers, D1, R2, KV, and Workers AI.",
    href: "https://atheneum.app",
    stack: "Remix · TypeScript · Cloudflare Workers · Workers AI · Tailwind CSS",
  },
  {
    title: "Fibrmarking",
    tag: "Project",
    description:
      "Public-facing site and brand presence — structured for clarity, trust, and conversion alongside the product story.",
    href: "https://fibrmarking.com",
    stack: "Web · Brand · Content",
  },
];

const moreProjects = [
  {
    title: "Literas",
    period: "Aug 2025",
    detail:
      "Full-featured learning management system with separate student and admin portals. Deployed in multiple schools in France with a path toward commercial licensing.",
    href: "https://literas.app",
    stack: "Next.js · Tailwind · Auth · APIs",
  },
  {
    title: "E-Studenti",
    period: "Jul 2025",
    detail:
      "Open-source platform for university materials across faculties at the University of Prishtina. Community email submissions for new resources; strong engagement metrics.",
    href: "https://e-studenti.com",
    stack: "Next.js · Tailwind",
    extraHref: "https://github.com/edonamulaj0",
    extraLabel: "GitHub",
  },
  {
    title: "Customer service bot",
    period: "Jun 2025",
    detail:
      "AI support assistant using RAG pipelines and vector embeddings, with decision-tree style intent routing and contextual answers.",
    href: null,
    stack: "RAG · Embeddings · LLM tooling",
  },
  {
    title: "Kopertina — library e-commerce",
    period: "Feb 2024 — Aug 2024",
    detail:
      "Backend with automated invoicing (generate and email PDFs), catalog database, and email automation for orders.",
    href: null,
    stack: "Backend · Invoicing · MySQL",
  },
];

/** Reverse-chronological milestones from 2024 onwards */
const timelineSince2024 = [
  {
    when: "Mar 2026",
    title: "Atheneum — live",
    body: "Shipped a production study platform on Cloudflare edge, D1, R2, KV, and Workers AI.",
  },
  {
    when: "Feb 2026",
    title: "Erasmus+ mobility — Saxion (Netherlands)",
    body: "International team building a platform; project in active development.",
  },
  {
    when: "Dec 2025",
    title: "1st place — Engineering, MASHTI",
    body: "Led a four-person team on an IoT elder-care system (Raspberry Pi): ML-based fall detection, alerts for caregivers, and automated notifications on critical events.",
  },
  {
    when: "Sep 2025",
    title: "Erasmus+ IoT-ECO — Sofia",
    body: "Smart medical room simulation on Microsoft Azure: IoT telemetry dashboard, health metrics, and automated responses for dangerous readings and maintenance scheduling.",
  },
  {
    when: "Aug 2025",
    title: "Literas LMS",
    body: "Shipped dual-portal LMS; real deployments in French schools.",
  },
  {
    when: "Jul 2025",
    title: "E-Studenti",
    body: "Launched the open-source materials hub for University of Prishtina.",
  },
  {
    when: "Jun 2025",
    title: "Cyphera + AI bot",
    body: "Founded Cyphera; built an AI customer-service bot with RAG and embedding-based retrieval.",
  },
  {
    when: "Jan — Jun 2025",
    title: "Girls in Cybersecurity — DevelopHer × LuxDev (ICK)",
    body: "Six-month intensive track: security fundamentals, offensive/defensive security, red teaming, pentesting basics, incident response, threat monitoring, forensics, and AI/ML security angles.",
  },
  {
    when: "Feb — Jun 2024",
    title: "Full-stack web — Coder’s Hub",
    body: "HTML, CSS, JavaScript, PHP, MySQL; full apps with Laravel and MVC.",
  },
  {
    when: "Feb 2024 — Aug 2024",
    title: "Kopertina",
    body: "Library e-commerce backend, invoicing, and email workflows end to end.",
  },
];

const techCategories = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "C++", "SQL", "Bash"],
  },
  {
    label: "Web and full stack",
    items: [
      "HTML5 and CSS",
      "Tailwind CSS",
      "Next.js",
      "Remix",
      "Laravel",
      "REST and APIs",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    label: "Platform and infra",
    items: [
      "Cloudflare (Pages, Workers, D1, R2, KV)",
      "Microsoft Azure",
      "Git",
      "Linux",
    ],
  },
  {
    label: "Security lab",
    items: [
      "PortSwigger Web Security Academy (in progress)",
      "Nmap",
      "Metasploit",
      "Wireshark",
      "Burp Suite",
    ],
  },
  {
    label: "Other",
    items: ["LaTeX", "XAMPP", "Microsoft Office"],
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

function GitHubIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={props.className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={props.className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
      className={props.className}
    >
      <path d="M7 17L17 7m0 0H10m7 0V7" />
    </svg>
  );
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = (reduce: boolean) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduce ? 0 : 0.45,
      ease: easeOut,
    },
  },
});

function SectionTitle({
  kicker,
  title,
  reduceMotion,
}: {
  kicker: string;
  title: string;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: easeOut }}
      className="mb-10"
    >
      <h2 className="font-mono text-xs tracking-[0.2em] text-violet-700 uppercase">
        {kicker}
      </h2>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-violet-950">
        {title}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute right-[-20%] top-[-10%] h-[50vmin] w-[50vmin] rounded-full bg-violet-200/35 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-15%] h-[45vmin] w-[45vmin] rounded-full bg-fuchsia-100/40 blur-3xl" />
      </div>

      <AmbientSides />

      <div className="relative z-10 mx-auto w-full max-w-[min(90rem,100%)] px-3 pb-20 pt-24 sm:px-4 sm:pb-24 sm:pt-28 md:px-6 lg:px-8">
        <main className="mx-auto min-w-0 w-full max-w-[min(100%,56rem)]">
        <motion.section
          className="mb-24 md:mb-32"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
            <motion.div
              variants={item(!!reduceMotion)}
              className="flex shrink-0 justify-center md:justify-start"
            >
              <div
                className="h-36 w-36 shrink-0 rounded-full border-2 border-dashed border-violet-400/70 bg-violet-200/25 ring-4 ring-white/70 sm:h-40 sm:w-40 md:h-44 md:w-44"
                role="img"
                aria-label="Profile photo placeholder"
              />
            </motion.div>
            <div className="min-w-0 flex-1">
          <motion.p
            variants={item(!!reduceMotion)}
            className="mb-4 font-mono text-xs tracking-[0.2em] text-violet-700 uppercase"
          >
            Prishtina · BSc ICT · Full stack &amp; security learner
          </motion.p>
          <motion.h1
            variants={item(!!reduceMotion)}
            className="mb-6 text-4xl font-semibold tracking-tight text-violet-950 md:text-5xl lg:text-6xl"
          >
            Edona Mulaj
          </motion.h1>
          <motion.div
            variants={item(!!reduceMotion)}
            className="space-y-4 text-lg leading-relaxed text-[var(--muted)] md:text-xl"
          >
            <p>
              I&apos;m a{" "}
              <strong className="font-medium text-violet-950">
                full-stack developer
              </strong>{" "}
              shipping products with{" "}
              <strong className="font-medium text-violet-950">
                Next.js, Remix, TypeScript, and Cloudflare
              </strong>
              . I care about clear UX, solid architecture, and security-aware
              defaults.
            </p>
            <p>
              I founded and run{" "}
              <a
                href="https://cyphera.tech"
                className="text-violet-800 underline decoration-violet-300 underline-offset-4 transition hover:decoration-violet-500"
              >
                Cyphera
              </a>
              : I work with clients end to end — discovery, builds, launches —
              and I manage our presence day to day:{" "}
              <strong className="font-medium text-violet-950">
                social channels, content, and posts
              </strong>{" "}
              that explain what we ship and who we work with. I also grow{" "}
              <strong className="font-medium text-violet-950">
                Hack&Stack
              </strong>
              , a community of 70+ people sharing projects and opportunities.
            </p>
            <p>
              On the security side, formal training included the{" "}
              <strong className="font-medium text-violet-950">
                Girls in Cybersecurity / DevelopHer × LuxDev
              </strong>{" "}
              programme (offensive and defensive basics, red teaming, forensics,
              and AI/ML security topics). I&apos;m now going deeper with{" "}
              <a
                href="https://portswigger.net/web-security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-800 underline decoration-violet-300 underline-offset-4 transition hover:decoration-violet-500"
              >
                PortSwigger Web Security Academy
              </a>{" "}
              alongside building production systems.
            </p>
            <p>
              I&apos;m{" "}
              <strong className="font-medium text-violet-950">
                active on LinkedIn
              </strong>
              {" "}
              — longer reflections, launch notes, and community updates usually
              live there first. Below is a fuller picture of work since 2024,
              tools I use, and longer notes in{" "}
              <Link
                href="/writing"
                className="text-violet-800 underline decoration-violet-300 underline-offset-4 transition hover:decoration-violet-500"
              >
                writing
              </Link>
              .
            </p>
          </motion.div>
          <motion.div
            variants={item(!!reduceMotion)}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-violet-950 px-5 py-2.5 text-sm font-medium text-[#f5f3ff] shadow-sm shadow-violet-900/20 transition hover:bg-violet-900"
            >
              View projects
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a
              href="https://www.linkedin.com/in/edona-mulaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-violet-300/80 bg-white/60 px-5 py-2.5 text-sm font-medium text-violet-950 backdrop-blur-sm transition hover:border-violet-400 hover:bg-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:edona@cyphera.tech"
              className="inline-flex rounded-full px-4 py-2.5 text-sm font-medium text-violet-800 transition hover:text-violet-950"
            >
              Email
            </a>
          </motion.div>
            </div>
          </div>
        </motion.section>

        <section id="work" className="mb-28 scroll-mt-28 md:mb-32">
          <SectionTitle
            kicker="Selected work"
            title="Products, company, and client-facing builds"
            reduceMotion={!!reduceMotion}
          />
          <ul className="flex flex-col gap-5">
            {projects.map((p, i) => (
              <motion.li
                key={p.href}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : i * 0.06,
                  ease: easeOut,
                }}
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-violet-200/60 bg-white/70 p-6 shadow-sm shadow-violet-950/5 backdrop-blur-sm transition hover:border-violet-300 hover:bg-white hover:shadow-md md:p-8"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <span className="font-mono text-[10px] tracking-wider text-violet-600 uppercase">
                        {p.tag}
                      </span>
                      <h3 className="mt-1 text-xl font-semibold text-violet-950 md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-prose text-[var(--muted)] leading-relaxed">
                        {p.description}
                      </p>
                      <p className="mt-3 font-mono text-xs text-violet-600/90">
                        {p.stack}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 self-start rounded-full border border-violet-200 bg-violet-50/80 px-3 py-1.5 text-xs font-medium text-violet-900 transition group-hover:border-violet-300 group-hover:bg-violet-100">
                      Visit
                      <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-12"
          >
            <h3 className="mb-6 font-mono text-xs tracking-[0.2em] text-violet-700 uppercase">
              More builds since 2024
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {moreProjects.map((mp, i) => (
                <motion.li
                  key={mp.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : i * 0.05,
                  }}
                  className="rounded-xl border border-violet-200/50 bg-white/50 p-5 backdrop-blur-sm"
                >
                  <p className="font-mono text-[10px] text-violet-600 uppercase">
                    {mp.period}
                  </p>
                  <p className="mt-1 font-semibold text-violet-950">
                    {mp.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {mp.detail}
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-violet-600/90">
                    {mp.stack}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {mp.href ? (
                      <a
                        href={mp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-violet-800 underline decoration-violet-300 underline-offset-2 hover:decoration-violet-500"
                      >
                        Live site
                      </a>
                    ) : null}
                    {"extraHref" in mp && mp.extraHref ? (
                      <a
                        href={mp.extraHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-violet-800 underline decoration-violet-300 underline-offset-2 hover:decoration-violet-500"
                      >
                        {mp.extraLabel ?? "Link"}
                      </a>
                    ) : null}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section id="timeline" className="mb-28 scroll-mt-28 md:mb-32">
          <SectionTitle
            kicker="2024 → now"
            title="Chronicle: study, products, mobility, and awards"
            reduceMotion={!!reduceMotion}
          />
          <ul className="space-y-8 border-l border-violet-200 pl-6">
            {timelineSince2024.map((t, i) => (
              <motion.li
                key={`${t.when}-${t.title}`}
                initial={{ opacity: 0, x: reduceMotion ? 0 : -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion ? 0 : i * 0.03,
                }}
                className="relative"
              >
                <span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-violet-400 ring-4 ring-[#f5f3ff]" />
                <p className="font-mono text-xs text-violet-600">{t.when}</p>
                <p className="mt-1 font-medium text-violet-950">{t.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                  {t.body}
                </p>
              </motion.li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-[var(--muted)]">
            Earlier: Atomist programme at Atomi Institute (gifted & enrichment
            track, advanced workshops) — ongoing since 2019 alongside formal
            studies.
          </p>
        </section>

        <section id="stack" className="mb-28 scroll-mt-28 md:mb-32">
          <SectionTitle
            kicker="Stack and tools"
            title="What I build (and break) things with"
            reduceMotion={!!reduceMotion}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {techCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : i * 0.05,
                  ease: easeOut,
                }}
                className="rounded-2xl border border-violet-200/60 bg-white/60 p-6 backdrop-blur-sm"
              >
                <h3 className="font-mono text-[10px] tracking-wider text-violet-700 uppercase">
                  {cat.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-violet-200/80 bg-[#f5f3ff]/80 px-2.5 py-1 text-xs font-medium text-violet-900"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="writing" className="mb-28 scroll-mt-28 md:mb-32">
          <SectionTitle
            kicker="Writing"
            title="Essays and notes"
            reduceMotion={!!reduceMotion}
          />
          <p className="mb-8 max-w-prose text-sm leading-relaxed text-[var(--muted)]">
            Longer reads open on their own pages (think Medium). I still discuss
            and reply on{" "}
            <a
              href="https://www.linkedin.com/in/edona-mulaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-800 underline decoration-violet-300 underline-offset-4"
            >
              LinkedIn
            </a>
            . See the full list on{" "}
            <Link
              href="/writing"
              className="text-violet-800 underline decoration-violet-300 underline-offset-4"
            >
              /writing
            </Link>
            .
          </p>
          <ul className="flex flex-col gap-5">
            {blogPosts.map((post, i) => (
              <motion.li
                key={post.slug}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : i * 0.06,
                  ease: easeOut,
                }}
              >
                <article className="rounded-2xl border border-violet-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm md:p-8">
                  <time
                    dateTime={post.dateIso ?? post.date}
                    className="font-mono text-xs text-violet-600"
                  >
                    {post.date}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-violet-950 md:text-xl">
                    <Link
                      href={`/writing/${post.slug}`}
                      className="transition hover:text-violet-800"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/writing/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-800 underline decoration-violet-300 underline-offset-4 transition hover:decoration-violet-500"
                  >
                    Read article
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </motion.li>
            ))}
          </ul>
        </section>

        <footer
          id="contact"
          className="scroll-mt-28 border-t border-violet-200/60 pt-12"
        >
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="space-y-3">
              <h2 className="font-mono text-xs tracking-[0.2em] text-violet-700 uppercase">
                Contact
              </h2>
              <p className="text-lg text-[var(--muted)]">
                <a
                  href="mailto:edona@cyphera.tech"
                  className="text-violet-900 underline decoration-violet-300 underline-offset-4 transition hover:decoration-violet-500"
                >
                  edona@cyphera.tech
                </a>
              </p>
              <p className="text-lg text-[var(--muted)]">
                <a
                  href="tel:+38348855355"
                  className="text-violet-900 underline decoration-violet-300 underline-offset-4 transition hover:decoration-violet-500"
                >
                  +383 48 855 355
                </a>
              </p>
            </div>
            <ul className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white/80 text-violet-800 transition hover:border-violet-400 hover:text-violet-950"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <p className="mt-10 font-mono text-[11px] text-violet-600/70">
            © {new Date().getFullYear()} Edona Mulaj · Prishtina
          </p>
        </footer>
        </main>
      </div>
    </div>
  );
}
