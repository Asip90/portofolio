import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Une sélection de projets web et mobiles réalisés par Jérémie Bodjrenou : SaaS, applications métier et produits grand public.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Mes réalisations"
        intro="Du SaaS aux applications mobiles : des produits pensés pour résoudre des problèmes concrets."
      />
      <section className="section">
        <div className="shell">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
