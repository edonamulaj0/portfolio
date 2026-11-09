import type { ExternalLink } from "@/lib/links";

/** Row of outbound links (website, Discord, DOI, demo) shown under a résumé or timeline entry */
export function LinkList({ items, className = "" }: { items: ExternalLink[]; className?: string }) {
  if (!items.length) return null;

  return (
    <ul className={`link-list ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="resume-row__link link-slide"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.label} (opens in a new tab)`}
          >
            {item.label}
            <span aria-hidden="true"> ↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
