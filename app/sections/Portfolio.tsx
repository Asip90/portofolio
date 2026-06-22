import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Mes réalisations"
          intro="Quelques projets qui illustrent mon expertise, du web au mobile."
        />
        <div className="mt-12">
          <PortfolioGrid />
        </div>
      </div>
    </section>
  );
}
