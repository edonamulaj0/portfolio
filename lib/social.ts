export type SocialId = "email" | "linkedin" | "github";

export type SocialLink = {
  id: SocialId;
  /** Short label used in compact rows (nav, footer) */
  label: string;
  /** Full handle / address shown on the contact page */
  handle: string;
  href: string;
  /** Descriptive label for screen readers and title attributes */
  ariaLabel: string;
  external: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "email",
    handle: "edonaamulaj@gmail.com",
    href: "mailto:edonaamulaj@gmail.com",
    ariaLabel: "Email Edona Mulaj",
    external: false,
  },
  {
    id: "linkedin",
    label: "linkedin",
    handle: "linkedin.com/in/edona-mulaj",
    href: "https://www.linkedin.com/in/edona-mulaj/",
    ariaLabel: "Edona Mulaj on LinkedIn (opens in a new tab)",
    external: true,
  },
  {
    id: "github",
    label: "github",
    handle: "github.com/edonamulaj0",
    href: "https://github.com/edonamulaj0",
    ariaLabel: "Edona Mulaj on GitHub (opens in a new tab)",
    external: true,
  },
];

export function getSocialLink(id: SocialId): SocialLink {
  const link = socialLinks.find((item) => item.id === id);
  if (!link) throw new Error(`Unknown social link: ${id}`);
  return link;
}
