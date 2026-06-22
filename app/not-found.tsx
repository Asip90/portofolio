import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-6 pt-24">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand">Erreur 404</p>
        <h1 className="mt-4 font-display text-6xl font-extrabold text-ink sm:text-7xl">
          Page introuvable
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          La page que vous cherchez a peut-être été déplacée ou n&apos;existe plus.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-medium text-on-brand shadow-[var(--shadow-brand)] transition-colors hover:bg-brand-bright"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
