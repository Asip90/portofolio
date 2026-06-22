"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects as allProjects } from "@/lib/data";
import type { Project, ProjectCategory } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

const filters: Array<"Tous" | ProjectCategory> = ["Tous", "Web", "Mobile", "SaaS"];

export function PortfolioGrid({ projects = allProjects }: { projects?: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("Tous");

  const visible = useMemo(
    () =>
      active === "Tous"
        ? projects
        : projects.filter((p) => p.categories.includes(active)),
    [active, projects]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtrer les projets">
        {filters.map((filter) => {
          const selected = active === filter;
          return (
            <button
              key={filter}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                selected ? "text-on-brand" : "text-ink-soft hover:text-brand"
              )}
            >
              {selected && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-brand"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{filter}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
