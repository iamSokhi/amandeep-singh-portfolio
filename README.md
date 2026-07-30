# Amandeep Singh — Portfolio

A fully static portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS, and MDX. No backend, database, or API required — deployable to Vercel, Netlify, or Cloudflare Pages as static HTML.

## Stack

- Next.js 16 (App Router, Static Site Generation via `output: "export"`)
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui-style components (hand-rolled, no external registry dependency)
- Framer Motion (hero animations)
- Lucide React (icons)
- next-themes (light/dark mode)
- React Hook Form + Zod (contact form validation)
- MDX (`next-mdx-remote`) for project case studies and blog posts
- Web3Forms for contact form submission (no backend)
- next/image + next/og for image optimization and generated OG/favicon images

## Getting started

```bash
npm install
npm run dev # http://localhost:3000
npm run build # outputs a static site to /out
```
