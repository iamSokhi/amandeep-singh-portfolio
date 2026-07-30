import { skillGroups } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

export function SkillsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div
          key={group.category}
          className="rounded-lg border border-border bg-paper-raised p-6"
        >
          <p className="font-mono text-xs uppercase tracking-wide text-amber">
            {group.category}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
