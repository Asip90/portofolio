import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-linear-to-b from-bg-deep to-bg pt-32 pb-14 md:pt-36 md:pb-16">
      <div className="tick-field pointer-events-none absolute -right-8 top-20 h-40 w-40 opacity-60" aria-hidden />
      <div className="shell">
        <Reveal className="flex max-w-2xl flex-col gap-3">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            {title}
          </h1>
          {intro && <p className="text-pretty text-lg leading-relaxed text-muted">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
