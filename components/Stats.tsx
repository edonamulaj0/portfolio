import { stats } from "@/lib/highlights";
import { StaggerGroup, StaggerItem } from "./FadeIn";

export function Stats() {
  return (
    <StaggerGroup as="ul" className="stats" stagger={0.07}>
      {stats.map((stat) => (
        <StaggerItem as="li" key={stat.label} className="stat">
          <p className="stat__value">{stat.value}</p>
          <p className="stat__label">{stat.label}</p>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
