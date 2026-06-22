import Link from "next/link";
import { MapPin } from "lucide-react";
import { navLinks, site, socials } from "@/lib/data";
import { Monogram } from "./Monogram";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <Monogram className="h-8 w-8" />
            <span className="font-display text-lg font-extrabold tracking-tight text-ink">
              ITZJEY
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Développeur web &amp; mobile passionné par l&apos;IA. Je conçois des
            produits digitaux utiles, intuitifs et évolutifs depuis le Bénin.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-brand" />
            {site.location}
          </p>
        </div>

        <nav aria-label="Navigation pied de page">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
            Réseaux
          </h3>
          <ul className="mt-4 space-y-2.5">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-ink-soft transition-colors hover:text-brand"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-faint sm:flex-row sm:text-left">
          <p>© {year} ITZJEY — {site.fullName}. Tous droits réservés.</p>
          <p>Conçu et développé au Bénin.</p>
        </div>
      </div>
    </footer>
  );
}
