import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Seo from "@/components/seo";
import { getAllPosts, getPost, Post } from "@/lib/blog";
import { formatDate } from "@/lib/format-date";

type BlogPostProps = {
  post: Post;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  return { props: { post: getPost(String(params?.slug)) } };
};

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <Seo
        title={`${post.title} | Jaired Jawed`}
        description={post.summary}
        path={`/blog/${post.slug}`}
      />
      <nav className="mx-auto max-w-3xl px-6 pt-10">
        <Link href="/blog" className="text-accent hover:underline">
          ← Blog
        </Link>
      </nav>
      <article className="relative bg-background mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {formatDate(post.date)}
        </p>
        <h1 className="dark:text-slate-100 font-semibold text-4xl mt-2 mb-10">
          {post.title}
        </h1>
        <div
          className="prose prose-slate dark:prose-invert max-w-none prose-a:text-accent prose-headings:font-semibold prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </>
  );
}
