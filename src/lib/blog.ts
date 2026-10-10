import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type Post = PostMeta & {
  html: string;
};

function readPost(slug: string): { meta: PostMeta; content: string; draft: boolean } {
  const file = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), "utf8");
  const { data, content } = matter(file);

  return {
    meta: {
      slug,
      title: String(data.title),
      // YAML parses bare dates into Date objects, which Next can't serialize.
      date: new Date(data.date).toISOString().slice(0, 10),
      summary: String(data.summary ?? ""),
    },
    content,
    draft: Boolean(data.draft),
  };
}

// Newest first. Drafts are left out, so they are never built or listed.
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => readPost(file.replace(/\.md$/, "")))
    .filter((post) => !post.draft)
    .map((post) => post.meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post {
  const { meta, content } = readPost(slug);

  return { ...meta, html: marked.parse(content, { async: false }) };
}
