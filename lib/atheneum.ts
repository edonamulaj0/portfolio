/** Atheneum is the flagship project: featured on the homepage and /work, with its own case study at /work/atheneum */

export const atheneum = {
  name: "Atheneum",
  url: "https://atheneum.app",
  status: "live",
  period: "Mar 2026 — present",
  tagline: "Study the whole way through.",
  summary:
    "An AI study platform that turns your lecture files into summaries, flashcards, and quizzes, then tells you what's due each day. Every answer comes from your own material.",
  team: "Built and maintained by a two-person team: myself and a co-developer.",
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
    "Students often rely on several disconnected tools: a timer in one tab, flashcards in another, and a chatbot that has never seen their lecture slides. Because nothing is connected, progress and context are lost between them.",
    "Atheneum brings the techniques that already work (Pomodoro focus rounds, spaced-repetition flashcards, active recall) into one workspace, with an AI tutor that works from the student's own material and recommends what to review next.",
  ],
  features: [
    {
      title: "From notes to a quiz in minutes",
      body: "Upload a PDF or Word file and get a summary, a flashcard deck, and a graded quiz. Incorrect answers are not penalized; they highlight what to review.",
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
      body: "Badges named after Greek myth (Heméra, goddess of the day, counts study days) with five ranks that reward regular study.",
    },
    {
      title: "Guides for self-learners",
      body: "39 practical guides on memory, focus, exams, and understanding, from active recall to the blurting method.",
    },
  ],
  architecture: [
    "Runs entirely on Cloudflare's edge: Remix on Workers for the app and API, Workers AI for generation, so there are no servers to maintain and latency stays low wherever students are.",
    "AI responses are grounded in the user's uploaded files and cite their source, which keeps answers verifiable and tied to the course material.",
    "A metered AI-credit system sits behind every plan, so the free tier runs on a lighter model while Pro and Max use the strongest one.",
  ],
  pricing: {
    intro:
      "Affordable, transparent pricing designed for students. Unused AI credits roll over for one additional month.",
    plans: [
      { name: "Free", price: "€0", note: "Core study tools on a lighter model" },
      { name: "Pro", price: "€6/mo", note: "Strongest model, more AI credits" },
      { name: "Max", price: "€10/mo", note: "The most AI credits" },
      { name: "Exam Pass", price: "€5 / 2 weeks", note: "Half of Max, one-time, for exam season" },
    ],
  },
  launch:
    "We presented Atheneum at our own booth at DokuTech DIY Fair (November 5–6, 2026), with a live quiz demo, printed materials, and branded notebooks for new sign-ups.",
  outcome:
    "The result I value most is consistency: steady development until the product was ready for a public launch, followed by weekly improvements since.",
  images: [
    { src: "/atheneum/athena.webp", alt: "Athena tutor answering a networking question and citing OSI Model.pdf page 4", caption: "Athena answers from your files and cites the page." },
    { src: "/atheneum/review.webp", alt: "Review page showing a 71% quiz score, weak topics, and 24 flashcards with 6 due", caption: "Review: scores, weak topics, and what's due." },
    { src: "/atheneum/badges.webp", alt: "Heméra consistency badge with five ranks from 7 to 365 study days", caption: "Badges reward consistent study days." },
    { src: "/atheneum/guides.webp", alt: "Guides library with 39 study guides filtered by memory, focus, and exams", caption: "39 study guides for self-learners." },
  ] satisfies CaseStudyImage[],
  booth: { src: "/atheneum/booth.webp", alt: "Edona and her co-developer at the Atheneum booth at DokuTech DIY Fair, with a live quiz demo on screen", caption: "Our booth at DokuTech DIY Fair, November 2026." } satisfies CaseStudyImage,
};
