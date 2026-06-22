"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Skill } from "@/lib/types";

export function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-semibold text-ink">{skill.label}</span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.span
          className="block h-full rounded-full"
          style={{ background: skill.color }}
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.3, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
