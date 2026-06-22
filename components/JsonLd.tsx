import { site, socials } from "@/lib/data";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.fullName,
        alternateName: site.name,
        jobTitle: site.role,
        description: site.tagline,
        url: site.url,
        email: site.email,
        telephone: `+${site.phoneRaw}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sèmè-Kpodji",
          addressCountry: "BJ",
        },
        worksFor: { "@type": "Organization", name: site.company },
        knowsAbout: [
          "Développement Web",
          "Développement Mobile",
          "React",
          "Next.js",
          "Flutter",
          "Intelligence Artificielle",
        ],
        sameAs: socials.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.name} — ${site.fullName}`,
        inLanguage: "fr-FR",
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "ProfessionalService",
        name: `${site.name} — ${site.role}`,
        url: site.url,
        areaServed: ["Bénin", "Afrique"],
        provider: { "@id": `${site.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
