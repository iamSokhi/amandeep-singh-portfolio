import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { experience } from "@/data/experience";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work history for ${siteConfig.name} across finance and enterprise frontend engineering roles.`,
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">
        Experience
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">
        {siteConfig.yearsExperience}+ years, five teams, one focus.
      </h1>
      <p className="mt-4 max-w-xl text-ink-muted">
        A timeline of where I've built frontend systems — and what changed
        because of it.
      </p>

      <div className="mt-14">
        <ExperienceTimeline items={experience} />
      </div>
    </div>
  );
}
