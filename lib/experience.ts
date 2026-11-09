export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  /** Sort/label year shown in the left rail */
  year: string;
  location?: string;
  summary: string;
  highlights: string[];
  href?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Associate Project Manager",
    company: "Certus Cybersecurity",
    period: "Oct 2026 — Present",
    year: "2026",
    summary:
      "Project management for penetration testing and security assessment engagements, with clients including Fortune 100 companies.",
    highlights: [
      "Coordinate penetration tests and security assessments end to end: scoping, scheduling, deadlines, and handoff.",
      "Own client communication and status reporting through delivery, keeping engagements on schedule and stakeholders informed.",
      "Bring a hands-on security background (pentesting, incident response, forensics) to planning conversations with testers and clients.",
    ],
  },
  {
    role: "Founder & CEO",
    company: "Cyphera",
    period: "Jun 2025 — Sep 2026",
    year: "2025",
    location: "Prishtina, Kosovo",
    summary:
      "Software and web development company that built digital products for small and medium businesses. Wound down in September 2026.",
    highlights: [
      "Founded and led a software company delivering web platforms and internal products end to end — product direction, client scoping, architecture, and release.",
      "Shipped web platforms and internal products for clients, from first scoping call to production.",
      "Owned the full delivery cycle: technical scoping, pricing, engineering, and post-launch support, keeping design quality and performance non-negotiable.",
    ],
    href: "https://cyphera.tech",
  },
  {
    role: "Founder & Community Lead",
    company: "Hack&Stack (HNS)",
    period: "2025 — Present",
    year: "2025",
    location: "Prishtina, Kosovo",
    summary:
      "Developer community built around project collaboration, knowledge sharing, and networking.",
    highlights: [
      "Grew a developer community to 220+ members through recurring build sessions and project collaborations.",
      "Organized a combined hackathon and capture-the-flag (CTF) event in September 2026, with challenges, winners, and a lot of socializing.",
      "Curate programming and pair engineers with real projects, turning a meetup into a working collaboration network.",
    ],
  },
  {
    role: "Web Developer & Social Media Manager",
    company: "Kopertina",
    period: "Feb 2024 — Aug 2024",
    year: "2024",
    location: "Kosovo",
    summary: "Full-stack e-commerce build for an independent bookstore.",
    highlights: [
      "Built a full-stack library e-commerce platform with a searchable book catalog database, automated invoicing, and transactional email workflows.",
      "Cut manual order handling by automating invoice generation and customer email sequences end to end.",
      "Ran the social media content calendar and campaigns, growing the store's online presence alongside the platform launch.",
    ],
  },
];
