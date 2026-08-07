import type { TechGroup } from "@/lib/background";
import { FadeIn } from "./FadeIn";

type TechStackProps = {
  groups: TechGroup[];
};

export function TechStack({ groups }: TechStackProps) {
  return (
    <dl className="tech-stack">
      {groups.map((group, index) => (
        <FadeIn key={group.label} blur={false} delay={index * 0.05} className="tech-stack__group">
          <dt className="tech-stack__label">{group.label}</dt>
          <dd className="tech-stack__items">
            <ul className="chip-row">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </FadeIn>
      ))}
    </dl>
  );
}
