import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Notes on frontend architecture, performance, and engineering practice from ${siteConfig.name}.`,
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">
        Blog
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">
        Notes from the console
      </h1>
      <p className="mt-4 max-w-xl text-ink-muted">
        Short, practical write-ups on the frontend problems that actually
        come up on real teams.
      </p>

      <div className="mt-14 divide-y divide-border">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-8 first:pt-0"
          >
            <p className="font-mono text-xs text-ink-faint">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink group-hover:text-amber">
              {post.title}
            </h2>
            <p className="mt-2 text-ink-muted">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
              <span className="ml-auto inline-flex items-center gap-1 font-mono text-xs text-ink-muted group-hover:text-amber">
                Read <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
