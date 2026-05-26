import { SiteContainer } from "./SiteContainer";

const socialLinks = [
  { label: "github", href: "https://github.com/edonamulaj0" },
  { label: "linkedin", href: "https://linkedin.com/in/edona-mulaj" },
  { label: "email", href: "mailto:edona@cyphera.tech" },
];

export function Footer() {
  return (
    <footer className="site-footer border-t border-divider py-10 md:py-12">
      <SiteContainer>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] text-muted md:text-xs">
            © {new Date().getFullYear()} dona. all rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:gap-8 md:text-xs">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-slide hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-mono text-[11px] text-muted md:text-xs">
            built with <span aria-label="love">♥</span>
          </p>
        </div>
      </SiteContainer>
    </footer>
  );
}
