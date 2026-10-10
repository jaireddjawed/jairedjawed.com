import type { GetStaticProps } from "next";
import Link from "next/link";
import Section from "@/components/section";
import Seo from "@/components/seo";
import { getAllPosts, PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format-date";

type BlogProps = {
  posts: PostMeta[];
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  return { props: { posts: getAllPosts() } };
};

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Seo
        title="Blog | Jaired Jawed"
        description="Writing from Jaired Jawed on software engineering, infrastructure, and building for small businesses."
        path="/blog"
      />
      <nav className="mx-auto max-w-4xl px-6 pt-10">
        <Link href="/" className="text-accent hover:underline">
          ← Jaired Jawed
        </Link>
      </nav>
      <Section id="blog" title="Blog">
        {posts.length === 0 ? (
          <p className="text-slate-600 dark:text-slate-400">No posts yet.</p>
        ) : (
          <ul className="flex flex-col gap-10">
            {posts.map((post) => (
              <li key={post.slug}>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {formatDate(post.date)}
                </p>
                <h3 className="dark:text-slate-100 font-semibold text-xl">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h3>
                {post.summary && (
                  <p className="mt-1 leading-relaxed">{post.summary}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
