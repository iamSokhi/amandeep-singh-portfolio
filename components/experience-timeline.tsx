import { Badge } from "@/components/ui/badge";
import type { ExperienceEntry } from "@/data/experience";

export function ExperienceTimeline({ items }: { items: ExperienceEntry[] }) {
  return (
    <ol className="relative border-l border-border pl-8">
      {items.map((item) => (
        <li key={item.id} className="mb-12 last:mb-0">
          <span
            className={
              "absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper " +
              (item.current ? "bg-amber" : "bg-ink-faint")
            }
          />
          <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
            {item.start} — {item.current ? "Present" : item.end}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink">
            {item.role}
          </h3>
          <p className="text-sm text-ink-muted">
            {item.company} · {item.location}
          </p>

          <ul className="mt-4 space-y-2">
            {item.highlights.map((h, idx) => (
              <li
                key={idx}
                className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
