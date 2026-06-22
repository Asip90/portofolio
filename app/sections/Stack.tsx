import { techStack } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const levelDot: Record<string, string> = {
  Avancé: "var(--brand)",
  Intermédiaire: "var(--accent-orange)",
  Courant: "var(--accent-deep)",
};

export function Stack() {
  return (
    <section id="stack" className="section bg-surface-2">
      <div className="shell">
        <SectionHeading
          eyebrow="Stack technique"
          title="Mes outils de travail"
          intro="Les langages et frameworks que j'utilise au quotidien pour concevoir, construire et déployer."
        />
        <RevealGroup
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          stagger={0.04}
        >
          {techStack.map((tech) => (
            <RevealItem key={tech.name}>
              <div className="card flex items-center justify-between gap-3 px-4 py-3.5 transition-colors hover:border-brand/40">
                <span className="font-mono text-sm font-medium text-ink">{tech.name}</span>
                <span
                  className="inline-flex items-center gap-1.5 text-[0.7rem] text-muted"
                  title={`Niveau : ${tech.level}`}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: levelDot[tech.level] }}
                  />
                  {tech.level}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
