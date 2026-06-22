import { stats } from "@/lib/data";
import { Counter } from "@/components/Counter";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function Stats() {
  return (
    <section aria-label="Chiffres clés" className="relative -mt-2">
      <div className="shell">
        <RevealGroup className="card grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line p-px md:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="bg-surface px-6 py-8 text-center"
            >
              <p className="font-display text-4xl font-extrabold text-brand md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
