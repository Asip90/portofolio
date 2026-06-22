import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { blogPosts, getPost } from "@/lib/data";
import { formatDate } from "@/components/BlogCard";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-28 pb-20 md:pt-32">
      <div className="shell max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" />
          Tous les articles
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-faint">
          <span className="rounded-full bg-brand-wash px-3 py-1 font-mono text-xs font-medium text-brand">
            {post.category}
          </span>
          <span>{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingMinutes} min de lecture
          </span>
        </div>

        <h1 className="mt-4 text-balance text-3xl font-extrabold leading-[1.12] sm:text-[2.6rem]">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>

        <div className="mt-8 h-px w-full bg-line" />

        <div className="mt-8 space-y-5">
          {post.body.map((block, i) =>
            block.startsWith("## ") ? (
              <h2 key={i} className="pt-3 text-2xl font-bold text-ink">
                {block.replace("## ", "")}
              </h2>
            ) : (
              <p key={i} className="text-[1.05rem] leading-[1.75] text-ink-soft">
                {block}
              </p>
            )
          )}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-surface-2 p-6 text-center">
          <p className="font-display text-lg font-bold text-ink">
            Un projet web ou mobile en tête ?
          </p>
          <p className="mt-1.5 text-sm text-muted">
            Discutons de la meilleure façon de le concrétiser.
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-on-brand shadow-[var(--shadow-brand)] transition-colors hover:bg-brand-bright"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </article>
  );
}
