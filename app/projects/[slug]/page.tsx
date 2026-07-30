import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 font-mono text-sm text-ink-muted hover:text-amber"
      >
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <p className="mt-8 font-mono text-xs uppercase tracking-wide text-amber">
        {project.coverEyebrow}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-ink-muted">{project.summary}</p>

      <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">
        <div>
          <dt className="font-mono text-xs uppercase text-ink-faint">
            Company
          </dt>
          <dd className="mt-1 text-sm text-ink">{project.company}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase text-ink-faint">Role</dt>
          <dd className="mt-1 text-sm text-ink">{project.role}</dd>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <dt className="font-mono text-xs uppercase text-ink-faint">
            Period
          </dt>
          <dd className="mt-1 text-sm text-ink">{project.period}</dd>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <dt className="font-mono text-xs uppercase text-ink-faint">
            Stack
          </dt>
          <dd className="mt-1 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </dd>
        </div>
      </dl>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-border bg-paper-raised p-4 text-center"
          >
            <p className="font-mono text-2xl font-semibold text-amber">
              {m.value}
            </p>
            <p className="mt-1 text-xs text-ink-muted">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="prose-portfolio mt-12">
        <MDXRemote source={project.content} />
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <Link
          href="/contact"
          className="font-mono text-sm text-amber hover:underline"
        >
          Have a similar problem? Let's talk →
        </Link>
      </div>
    </article>
  );
}
