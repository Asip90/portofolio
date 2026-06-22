import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  const { title, summary, description, categories, stack, url, status, accent, image } =
    project;
  const inProgress = status === "in-progress";
  const Wrapper = url ? "a" : "div";

  return (
    <Wrapper
      {...(url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
    >
      {/* preview — real mockup when available, styled placeholder otherwise */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        {image ? (
          <Image
            src={image}
            alt={`Aperçu du projet ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(140deg, ${accent}, color-mix(in srgb, ${accent} 55%, #0f1b33))`,
            }}
          >
            <div className="tick-field absolute inset-0 opacity-25" aria-hidden />
            <div className="absolute bottom-5 left-5">
              <p className="font-display text-2xl font-extrabold text-white">{title}</p>
            </div>
          </div>
        )}

        {url && (
          <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-[1.1rem] w-[1.1rem]" />
          </span>
        )}

        {inProgress && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-orange" />
            En cours
          </span>
        )}
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full bg-brand-wash px-2.5 py-0.5 font-mono text-[0.7rem] font-medium text-brand"
            >
              {c}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-bold text-ink">{title}</h3>
        <p className="mt-0.5 text-sm font-medium text-brand">{summary}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
        <p className="mt-4 border-t border-line pt-3 font-mono text-xs text-faint">
          {stack.join("  ·  ")}
        </p>
      </div>
    </Wrapper>
  );
}
