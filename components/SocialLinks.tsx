import { socialLinks } from "@/lib/social";
import { SocialIcon } from "./SocialIcon";

type SocialLinksProps = {
  /** "icon" renders an icon-only cluster, "labelled" pairs icon + text */
  variant?: "icon" | "labelled";
  className?: string;
  /** Accessible name for the list, e.g. "Social links" */
  label?: string;
};

export function SocialLinks({
  variant = "icon",
  className = "",
  label = "Social links",
}: SocialLinksProps) {
  return (
    <ul
      className={`social-links social-links--${variant} ${className}`.trim()}
      aria-label={label}
    >
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className="social-link"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={variant === "icon" ? link.ariaLabel : undefined}
            title={variant === "icon" ? link.label : undefined}
          >
            <SocialIcon id={link.id} className="social-link__icon" />
            {variant === "labelled" ? (
              <span className="social-link__label">{link.label}</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
