export type ExternalLink = {
  label: string;
  href: string;
};

/** Every outbound link used in résumé rows, the timeline, and the Atheneum pages */
export const links = {
  certus: { label: "certuscyber.com", href: "https://www.certuscyber.com" },
  atheneum: { label: "atheneum.app", href: "https://atheneum.app" },
  atheneumDiscord: { label: "Atheneum Discord", href: "https://discord.gg/WPTXYRH6Qw" },
  hacknstack: { label: "h4cknstack.com", href: "https://h4cknstack.com" },
  hacknstackDiscord: { label: "Hack&Stack Discord", href: "https://discord.gg/xrxTUsgdv9" },
  miproDoi: {
    label: "doi: 10.1109/MIPRO70003.2026.11591995",
    href: "https://doi.org/10.1109/MIPRO70003.2026.11591995",
  },
  polaris: { label: "Polaris live app", href: "https://polaris-a4m.pages.dev/" },
  polarisSource: { label: "Polaris source", href: "https://github.com/edonamulaj0/polaris" },
  drit: { label: "Drit' live demo", href: "https://junctionx-ecru.vercel.app/" },
} satisfies Record<string, ExternalLink>;
