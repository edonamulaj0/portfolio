/** Atheneum is the flagship project: featured on the homepage and /work, with its own case study at /work/atheneum */

export const atheneum = {
  name: "Atheneum",
  url: "https://atheneum.app",
  status: "live",
  period: "Mar 2026 — present",
  tagline: "Study the whole way through.",
  summary:
    "An AI study platform that turns your lecture files into summaries, flashcards, and quizzes, then tells you what's due each day. Every answer comes from your own material.",
  team: "Built and run by two developers, me and my partner.",
  stack: ["Remix", "TypeScript", "Cloudflare Workers", "Workers AI", "Tailwind CSS"],
  metrics: [
    { value: "~160", label: "users as of Nov 2026" },
    { value: "39", label: "study guides published" },
    { value: "4", label: "plans, from free to €10/mo" },
  ],
  cover: { src: "/atheneum/home.webp", alt: "Atheneum landing page: a lecture PDF turned into a quiz, with 8 flashcards due tomorrow", caption: "Upload a file, get a quiz, and see what is due tomorrow." },
} as const;

export type CaseStudyImage = { src: string; alt: string; caption: string };

export const atheneumCaseStudy = {
  problem: [
    "Students study with a pile of tools scattered across the internet: a timer in one tab, flashcards in another, a chatbot that has never seen their lecture slides. Nothing connects, so progress and context get lost between them.",
    "Atheneum brings the techniques that already work (Pomodoro focus rounds, spaced-repetition flashcards, active recall) into one workspace, with an AI tutor that has actually read your material and tells you what to review next.",
  ],
  features: [
    {
      title: "From notes to a quiz in minutes",
      body: "Upload a PDF or Word file and get a summary, a flashcard deck, and a graded quiz. Mistakes cost nothing; they show you what to review.",
    },
    {
      title: "Athena, a tutor grounded in your files",
      body: "Answers cite the file and page they came from. Students set difficulty, pace, and style, choose Quick, Regular, or Deep reasoning, and can read, edit, or switch off what she remembers.",
    },
    {
      title: "Review that knows what's due",
      body: "Spaced repetition schedules every card. Review starts on whatever is due, tracks weak topics, keeps a daily goal, and imports or exports Anki decks.",
    },
    {
      title: "Blurt mode",
      body: "Write everything you remember about a file; Athena shows what you left out.",
    },
    {
      title: "Consistency, rewarded",
      body: "Badges named after Greek myth (Heméra, goddess of the day, counts study days) with five ranks, so showing up regularly feels like progress.",
    },
    {
      title: "Guides for self-learners",
      body: "39 practical guides on memory, focus, exams, and understanding, from active recall to the blurting method.",
    },
  ],
  architecture: [
    "Runs entirely on Cloudflare's edge: Remix on Workers for the app and API, Workers AI for generation, so there is no server to babysit and latency stays low wherever students are.",
    "AI responses are grounded in the user's uploaded files and cite their source, which keeps answers checkable and tied to what's actually on the exam.",
    "A metered AI-credit system sits behind every plan, so the free tier runs on a lighter model while Pro and Max use the strongest one.",
  ],
  pricing: {
    intro:
      "Honest, cheap plans that don't try to squeeze students. Unused AI credits carry over for an extra month instead of disappearing.",
    plans: [
      { name: "Free", price: "€0", note: "Core study tools on a lighter model" },
      { name: "Pro", price: "€6/mo", note: "Strongest model, more AI credits" },
      { name: "Max", price: "€10/mo", note: "The most AI credits" },
      { name: "Exam Pass", price: "€5 / 2 weeks", note: "Half of Max, one-time, for exam season" },
    ],
  },
  launch:
    "We showed Atheneum at our own booth at DokuTech DIY Fair (Nov 5–6, 2026) with a live quiz demo, flyers, and branded notebooks for students who signed up.",
  proud:
    "What I'm proudest of is the consistency: working on it steadily until it was polished enough to publish and promote, and still shipping improvements every week.",
  images: [
    { src: "/atheneum/athena.webp", alt: "Athena tutor answering a networking question and citing OSI Model.pdf page 4", caption: "Athena answers from your files and cites the page." },
    { src: "/atheneum/review.webp", alt: "Review page showing a 71% quiz score, weak topics, and 24 flashcards with 6 due", caption: "Review: scores, weak topics, and what's due." },
    { src: "/atheneum/badges.webp", alt: "Heméra consistency badge with five ranks from 7 to 365 study days", caption: "Badges reward consistent study days." },
    { src: "/atheneum/guides.webp", alt: "Guides library with 39 study guides filtered by memory, focus, and exams", caption: "39 study guides for self-learners." },
  ] satisfies CaseStudyImage[],
  booth: { src: "/atheneum/booth.webp", alt: "Edona and her partner at the Atheneum booth at DokuTech DIY Fair, with a live quiz demo on screen", caption: "Our booth at DokuTech DIY Fair, November 2026." } satisfies CaseStudyImage,
};
