import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ProjectMeta } from "@/lib/content";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col justify-between rounded-lg border border-border bg-paper-raised p-6 transition-colors hover:border-amber/60"
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          {project.coverEyebrow}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {project.summary}
        </p>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-2 gap-3">
          {project.metrics.slice(0, 2).map((m) => (
            <div key={m.label}>
              <p className="font-mono text-lg font-semibold text-amber">
                {m.value}
              </p>
              <p className="text-xs text-ink-muted">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1 font-mono text-xs text-ink-muted group-hover:text-amber">
          Read case study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
