import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SkillsGrid } from "@/components/skills-grid";
import { Button } from "@/components/ui/button";
import { getAllProjects, getAllPosts } from "@/lib/content";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featuredProjects = getAllProjects()
    .filter((p) => p.featured)
    .slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-amber">
              Selected work
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              Case studies from the field
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden shrink-0 items-center gap-1 font-mono text-sm text-ink-muted hover:text-amber md:flex"
          >
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 flex items-center gap-1 font-mono text-sm text-ink-muted hover:text-amber md:hidden"
        >
          All projects <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="border-t border-border bg-paper-sunken/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-wide text-amber">
            Toolbox
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
            What I build with
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            {siteConfig.yearsExperience}+ years across finance, e-commerce,
            and enterprise platforms — same core toolkit, sharpened by scale.
          </p>
          <div className="mt-10">
            <SkillsGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-amber">
              Writing
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              Notes from the console
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden shrink-0 items-center gap-1 font-mono text-sm text-ink-muted hover:text-amber md:flex"
          >
            All posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-lg border border-border bg-paper-raised p-6 transition-colors hover:border-amber/60"
            >
              <p className="font-mono text-xs text-ink-faint">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                · {post.readingTime}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-ink-muted group-hover:text-amber">
                Read post <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Have a frontend problem worth solving?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-muted">
            I'm currently open to select lead or senior frontend engagements.
            Let's talk about what you're building.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="amber" size="lg" asChild>
              <Link href="/contact">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
