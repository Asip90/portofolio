import { GraduationCap, Briefcase } from "lucide-react";
import { skills, site } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SkillBar } from "@/components/SkillBar";

export function About() {
  return (
    <section id="a-propos" className="section">
      <div className="shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* portrait composition */}
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-brand/15 blur-[2px]" aria-hidden />
          <div className="absolute -bottom-8 -right-4 h-20 w-20 rounded-full bg-accent-orange/20" aria-hidden />
          <div className="absolute -bottom-3 left-10 h-14 w-14 rounded-full bg-brand/25" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-linear-to-br from-brand to-brand-deep shadow-[var(--shadow-lift)]">
            {/* Swap for a real studio photo at /public/images/profile/about.jpg */}
            <div className="grid aspect-[4/5] place-items-center">
              <span className="font-display text-[6rem] font-extrabold text-on-brand/95">JB</span>
            </div>
          </div>
          <div className="card absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-2xl px-4 py-2.5">
            <Briefcase className="h-4 w-4 text-brand" />
            <span className="text-sm font-semibold text-ink">{site.company}</span>
            <span className="text-xs text-muted">Web &amp; Mobile</span>
          </div>
        </Reveal>

        {/* text + skills */}
        <div>
          <Reveal>
            <span className="eyebrow">À propos</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] sm:text-4xl">
              De la santé animale au code, par passion du concret
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-5 space-y-4 text-[0.975rem] leading-relaxed text-muted">
            <p>
              Développeur web et mobile passionné par l&apos;intelligence
              artificielle, je conçois des solutions numériques qui répondent à
              des problématiques réelles. Après une formation en Production et
              Santé Animale, j&apos;ai entrepris une reconversion vers le
              développement logiciel, où j&apos;allie rigueur analytique, esprit
              entrepreneurial et apprentissage continu.
            </p>
            <p>
              Avec plus de {site.experienceYears} ans d&apos;expérience, je
              développe des applications performantes en mettant l&apos;accent
              sur l&apos;expérience utilisateur et la qualité du code.
              J&apos;interviens actuellement comme développeur web et mobile chez{" "}
              <span className="font-semibold text-ink">{site.company}</span>, à
              temps partiel et en télétravail.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink-soft">
              <GraduationCap className="h-4 w-4 text-brand" />
              Reconversion vers le développement
            </span>
          </Reveal>

          <div className="mt-9 space-y-5">
            {skills.map((skill, i) => (
              <SkillBar key={skill.label} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
