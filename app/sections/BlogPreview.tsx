import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { ButtonLink } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function BlogPreview() {
  return (
    <section id="blog" className="section">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Blog"
            title="Réflexions & insights"
            intro="Sur le développement, l'IA et l'entrepreneuriat tech au Bénin."
          />
          <ButtonLink href="/blog" variant="outline" className="group shrink-0">
            Tous les articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>
        </div>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.08}>
          {blogPosts.map((post) => (
            <RevealItem key={post.slug}>
              <BlogCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
