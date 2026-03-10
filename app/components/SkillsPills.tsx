import { skills } from "../data";
import Pill from "./Pill";

export default function SkillsPills() {
  const skillEntries = Object.entries(skills);

  return (
    <div className="flex flex-col gap-4">
      {skillEntries.map(([category, items]) => (
        <div key={category} className="flex flex-col gap-2">
          <span className="font-body text-xs uppercase tracking-[0.16em] text-muted-subtle">
            {category}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {items.map((item) => (
              <Pill key={item} className="bg-accent/10 text-foreground">
                {item}
              </Pill>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

