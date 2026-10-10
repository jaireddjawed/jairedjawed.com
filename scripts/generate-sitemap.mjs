// Writes public/sitemap.xml before each build.
import fs from "fs";
import path from "path";

const siteUrl = "https://jairedjawed.com";
const root = process.cwd();
const postsDirectory = path.join(root, "content", "blog");

const urls = [
  { loc: "/" },
  { loc: "/experience" },
  { loc: "/tutoring" },
  { loc: "/web-development" },
];

// Blog posts are Markdown files; drafts are skipped.
if (fs.existsSync(postsDirectory)) {
  const posts = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const frontMatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
      return {
        slug: file.replace(/\.md$/, ""),
        draft: /^draft:\s*true\s*$/m.test(frontMatter),
        date: frontMatter.match(/^date:\s*"?(\d{4}-\d{2}-\d{2})/m)?.[1],
      };
    })
    .filter((post) => !post.draft);

  if (posts.length > 0) {
    urls.push({ loc: "/blog" });
  }
  for (const post of posts) {
    urls.push({ loc: `/blog/${post.slug}`, lastmod: post.date });
  }
}

const entries = urls
  .map(({ loc, lastmod }) => {
    const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
    return `  <url>\n    <loc>${siteUrl}${loc}</loc>${lastmodTag}\n  </url>`;
  })
  .join("\n");

fs.writeFileSync(
  path.join(root, "public", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
);
console.log(`sitemap.xml: ${urls.length} URLs`);
