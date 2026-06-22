import { Mail, MapPin, MessageCircle } from "lucide-react";
import { site, socials } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phone,
    href: `https://wa.me/${site.phoneRaw}`,
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: site.location,
    href: "https://www.openstreetmap.org/search?query=S%C3%A8m%C3%A8-Kpodji",
  },
];

export function Contact({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="contact"
      className={`section bg-surface-2${standalone ? " pt-30 md:pt-34" : ""}`}
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Contact"
          title="Travaillons ensemble"
          intro="Vous avez un projet en tête ? Discutons-en — je réponds rapidement."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* left — details */}
          <Reveal className="flex flex-col gap-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card group flex items-center gap-4 p-4 transition-colors hover:border-brand/40"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-wash text-brand transition-colors group-hover:bg-brand group-hover:text-on-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-[0.14em] text-faint">
                    {label}
                  </span>
                  <span className="block truncate font-medium text-ink">{value}</span>
                </span>
              </a>
            ))}

            <div className="flex items-center gap-3 px-1 pt-1">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
                Suivez-moi
              </span>
              <div className="flex gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    <Icon className="h-[1.1rem] w-[1.1rem]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="card overflow-hidden p-0">
              <iframe
                title="Localisation — Sèmè-Kpodji, Bénin"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.55%2C6.35%2C2.72%2C6.46&layer=mapnik&marker=6.405%2C2.635"
                className="h-48 w-full border-0 grayscale-[0.15]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* right — form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
