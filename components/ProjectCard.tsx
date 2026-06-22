import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

/**
 * Project card. The visual is a designed placeholder keyed to each project's
 * accent — drop a real screenshot at /public/images/projects/<slug>.png and
 * render it inside the .preview block to replace it.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { title, summary, description, categories, stack, url, status, accent } = project;
  const inProgress = status === "in-progress";
  const Wrapper = url ? "a" : "div";

  return (
    <Wrapper
      {...(url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
    >
      {/* preview */}
      <div
        className="preview relative aspect-[16/10] overflow-hidden"
        style={{
          background: `linear-gradient(140deg, ${accent}, color-mix(in srgb, ${accent} 55%, #0f1b33))`,
        }}
      >
        <div className="tick-field absolute inset-0 opacity-25" aria-hidden />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <p className="font-display text-2xl font-extrabold leading-tight text-white">
            {title}
          </p>
        </div>

        {url && (
          <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
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
        <h3 className="mt-3 text-lg font-bold text-ink">{summary}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{description}</p>
        <p className="mt-4 border-t border-line pt-3 font-mono text-xs text-faint">
          {stack.join("  ·  ")}
        </p>
      </div>
    </Wrapper>
  );
}
