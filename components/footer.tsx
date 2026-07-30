import Link from "next/link";
import { Code2, Briefcase, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {siteConfig.name}
            </p>
            <p className="mt-1 max-w-sm text-sm text-ink-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                Site
              </span>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-muted hover:text-amber"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                Elsewhere
              </span>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-ink-muted hover:text-amber"
              >
                <Code2 className="h-4 w-4" /> GitHub
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-ink-muted hover:text-amber"
              >
                <Briefcase className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-ink-muted hover:text-amber"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built with
            Next.js.
          </p>
          <p className="font-mono">{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
