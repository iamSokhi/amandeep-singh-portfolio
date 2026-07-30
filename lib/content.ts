import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type ProjectMetric = { label: string; value: string };

export type ProjectMeta = {
  title: string;
  slug: string;
  summary: string;
  company: string;
  role: string;
  period: string;
  stack: string[];
  metrics: ProjectMetric[];
  featured: boolean;
  coverEyebrow: string;
};

export type ProjectEntry = ProjectMeta & { content: string };

export type PostMeta = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export type PostEntry = PostMeta & { content: string };

function readMdxDir(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

export function getAllProjects(): ProjectEntry[] {
  const files = readMdxDir(PROJECTS_DIR);
  const projects = files.map((filename) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    return { ...(data as ProjectMeta), content };
  });
  return projects.sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllPosts(): PostEntry[] {
  const files = readMdxDir(BLOG_DIR);
  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    return {
      ...(data as Omit<PostMeta, "readingTime">),
      readingTime: readingTime(content).text,
      content,
    };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): PostEntry | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
