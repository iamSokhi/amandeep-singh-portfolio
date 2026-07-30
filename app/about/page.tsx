import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillsGrid } from "@/components/skills-grid";
import { siteConfig } from "@/data/site";
import { education, languages, accomplishments } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, a senior frontend developer based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">
        About
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">
        Frontend engineering, built for scale.
      </h1>

      <div className="prose-portfolio mt-8 max-w-2xl">
        <p>
          I'm {siteConfig.name}, a {siteConfig.title.toLowerCase()} based in{" "}
          {siteConfig.location}. Over {siteConfig.yearsExperience}+ years I've
          worked mostly at the intersection of large, established
          organizations and the frontend systems that hold their internal
          tools together — from a non-financial risk platform at Morgan
          Stanley to enterprise applications at Copart.
        </p>
        <p>
          My focus tends to land on the same few problems: turning a growing
          pile of one-off screens into a coherent component system, keeping
          performance from quietly regressing release after release, and
          building the testing and review habits that let a team move fast
          without breaking things. React and TypeScript are the constants;
          Redux Toolkit, Redux Saga, and real-time data integrations show up
          wherever the workflows get complex.
        </p>
        <p>
          I also spend a fair amount of time on the people side of
          engineering — code review, mentoring, and setting standards a team
          can actually keep up with. Outside of work, I'm rebuilding this
          site in public as a place to write about the frontend problems
          worth writing about.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="amber" asChild>
          <a href={siteConfig.resumeUrl} download>
            <Download className="h-4 w-4" /> Download résumé
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">
            <Mail className="h-4 w-4" /> Get in touch
          </Link>
        </Button>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Skills
        </h2>
        <div className="mt-6">
          <SkillsGrid />
        </div>
      </div>

      <div className="mt-16 grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink">
            Education
          </h2>
          <ul className="mt-6 space-y-6">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="font-mono text-xs text-ink-faint">{e.date}</p>
                <p className="mt-1 font-medium text-ink">{e.degree}</p>
                <p className="text-sm text-ink-muted">
                  {e.school}, {e.location}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-ink">
            Languages
          </h2>
          <ul className="mt-6 space-y-4">
            {languages.map((l) => (
              <li key={l.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">{l.name}</span>
                  <span className="text-ink-muted">{l.level}</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-paper-sunken">
                  <div
                    className="h-1.5 rounded-full bg-amber"
                    style={{ width: `${l.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Accomplishments
        </h2>
        <ul className="mt-6 space-y-3">
          {accomplishments.map((a, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-ink-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
