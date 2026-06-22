import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { BlogCard } from "@/components/BlogCard";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Réflexions sur le développement web et mobile, l'intelligence artificielle et l'entrepreneuriat tech au Bénin.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Réflexions & insights"
        intro="Le développement, l'IA et l'entrepreneuriat tech vus depuis le Bénin."
      />
      <section className="section">
        <div className="shell">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {blogPosts.map((post) => (
              <RevealItem key={post.slug}>
                <BlogCard post={post} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
