import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about frontend engineering roles and projects.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">
        Contact
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">
        Let's talk about what you're building.
      </h1>
      <p className="mt-4 max-w-xl text-ink-muted">
        Open to select lead and senior frontend engagements. The fastest way
        to reach me is the form below or a direct email.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-amber" />
            <div>
              <p className="font-mono text-xs uppercase text-ink-faint">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-ink hover:text-amber"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-amber" />
            <div>
              <p className="font-mono text-xs uppercase text-ink-faint">
                Phone
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-sm text-ink hover:text-amber"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-amber" />
            <div>
              <p className="font-mono text-xs uppercase text-ink-faint">
                Location
              </p>
              <p className="text-sm text-ink">{siteConfig.location}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-paper-raised p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
