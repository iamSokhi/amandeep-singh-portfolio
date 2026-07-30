import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Case studies from ${siteConfig.name}'s work building enterprise frontend platforms.`,
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">
        Projects
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">
        Case studies
      </h1>
      <p className="mt-4 max-w-xl text-ink-muted">
        A closer look at the platforms I've built, the problems they solved,
        and what happened after.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
