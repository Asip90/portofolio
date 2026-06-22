import type { Service } from "@/lib/types";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { icon: Icon, title, description } = service;
  return (
    <article className="card group relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-lift)]">
      <span
        className="pointer-events-none absolute right-5 top-4 font-display text-5xl font-extrabold text-line-strong/60 transition-colors group-hover:text-brand-wash"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-wash text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-on-brand">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="relative mt-5 text-xl font-bold text-ink">{title}</h3>
      <p className="relative mt-2.5 text-[0.925rem] leading-relaxed text-muted">
        {description}
      </p>
    </article>
  );
}
