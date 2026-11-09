import type { ContactLink as ContactLinkData } from "@/lib/contact";
import { SocialIcon } from "./SocialIcon";

export function ContactLink({ link }: { link: ContactLinkData }) {
  return (
    <a
      href={link.href}
      className="contact-link group"
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      aria-label={link.ariaLabel}
    >
      <SocialIcon id={link.id} className="contact-link__icon" />
      <span className="contact-link__handle">{link.handle}</span>
      <span className="contact-link__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
