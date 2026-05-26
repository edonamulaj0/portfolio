export type ContactLink = {
  label: string;
  href: string;
  external: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "edona@cyphera.tech",
    href: "mailto:edona@cyphera.tech",
    external: false,
  },
  {
    label: "linkedin.com/in/edona-mulaj",
    href: "https://linkedin.com/in/edona-mulaj",
    external: true,
  },
  {
    label: "github.com/edonamulaj0",
    href: "https://github.com/edonamulaj0",
    external: true,
  },
  {
    label: "cyphera.tech",
    href: "https://cyphera.tech",
    external: true,
  },
];

export const contactIntro =
  "whether it's a project, a research conversation, or just something interesting — reach out.";

export const contactExtended = `I'm based in Prishtina and usually reply within a day or two. Happy to talk about software, security research, collaborations, or opportunities in Kosovo and beyond.`;
