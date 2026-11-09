import Link from "next/link";
import { getSocialLink } from "@/lib/social";
import { SiteContainer } from "./SiteContainer";
import { SocialLinks } from "./SocialLinks";

const siteLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Gallery", href: "/gallery" },
  { label: "Writing", href: "/misc" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const email = getSocialLink("email");

  return (
    <footer className="site-footer" aria-labelledby="site-footer-heading">
      <SiteContainer>
        <h2 id="site-footer-heading" className="sr-only">
          Site footer
        </h2>

        <div className="site-footer__top">
          <div className="site-footer__intro">
            <p className="site-footer__prompt">Get in touch</p>
            <a href={email.href} className="site-footer__email link-slide">
              {email.handle}
            </a>
          </div>

          <SocialLinks variant="labelled" className="site-footer__socials" />
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__meta">
            © {new Date().getFullYear()} Edona S. Mulaj. All rights reserved.
          </p>

          <nav aria-label="Footer">
            <ul className="site-footer__nav">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="site-footer__nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="site-footer__meta">Prishtina, Kosovo</p>
        </div>
      </SiteContainer>
    </footer>
  );
}
