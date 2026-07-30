"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig, heroMetrics } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-paper/40 to-paper" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-ink-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              open to select frontend engagements
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
            >
              {siteConfig.name}
              <span className="block text-ink-muted">
                {siteConfig.title}.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button variant="amber" size="lg" asChild>
                <Link href="/projects">
                  View case studies <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={siteConfig.resumeUrl} download>
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="self-start rounded-lg border border-border bg-paper-raised shadow-sm"
          >
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
              <span className="ml-2 font-mono text-xs text-ink-faint">
                career --metrics
              </span>
            </div>
            <dl className="divide-y divide-border">
              {heroMetrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex items-center justify-between px-4 py-3 font-mono text-sm"
                >
                  <dt className="text-ink-muted">{m.label}</dt>
                  <dd className="font-semibold text-amber">{m.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
