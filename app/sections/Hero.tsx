"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { OrbitPortrait } from "@/components/OrbitPortrait";
import { site } from "@/lib/data";

const heroStack = ["React", "Next.js", "TypeScript", "Flutter", "Python", "Node.js", "Tailwind"];

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-linear-to-b from-bg-deep to-bg pt-30 pb-20 md:pt-36"
    >
      {/* scattered tick fields — the weightless dashes from the reference */}
      <div className="tick-field pointer-events-none absolute -right-10 top-24 h-44 w-44 opacity-70" aria-hidden />
      <div className="tick-field pointer-events-none absolute left-2 top-1/2 h-32 w-32 opacity-60" aria-hidden />

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            variants={fade}
            custom={0}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-soft shadow-[var(--shadow-sm)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Salut, je suis Jérémie
          </motion.span>

          <motion.h1
            variants={fade}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-[2.75rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.2rem]"
          >
            Développeur
            <br />
            <span className="text-brand">Web &amp; Mobile</span>
          </motion.h1>

          <motion.p
            variants={fade}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            <span className="inline-flex items-center gap-1.5 font-medium text-ink-soft">
              <Sparkles className="h-4 w-4 text-brand" />
              {site.tagline}.
            </span>{" "}
            Je conçois des applications performantes, alliant expérience
            utilisateur fluide et technologies modernes pour résoudre des
            problématiques concrètes au Bénin et en Afrique.
          </motion.p>

          <motion.div
            variants={fade}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="/#contact" size="lg">
              Me contacter
            </ButtonLink>
            <ButtonLink href="/#portfolio" variant="outline" size="lg" className="group">
              Mon portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </motion.div>

          <motion.div
            variants={fade}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
              Stack principale
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {heroStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-line bg-surface/70 px-2.5 py-1 font-mono text-xs text-ink-soft"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrbitPortrait />
        </motion.div>
      </div>
    </section>
  );
}
