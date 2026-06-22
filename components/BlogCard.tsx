import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-linear-to-br from-brand to-brand-deep">
        <div className="tick-field absolute inset-0 opacity-20" aria-hidden />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[0.7rem] font-medium text-brand">
          {post.category}
        </span>
        <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-[1.1rem] w-[1.1rem]" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-3 border-t border-line pt-3 text-xs text-faint">
          <span>{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingMinutes} min
          </span>
        </div>
      </div>
    </Link>
  );
}
