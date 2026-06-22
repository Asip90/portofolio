import { services } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function Services() {
  return (
    <section id="services" className="section bg-surface-2">
      <div className="shell">
        <SectionHeading
          eyebrow="Services"
          title="Ce que je propose"
          intro="Des solutions digitales sur mesure, de la conception au déploiement."
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.08}>
          {services.map((service, i) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
