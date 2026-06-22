import { Globe, Smartphone, Palette, Brain } from "lucide-react";
import { Linkedin, Github, Facebook } from "@/components/BrandIcons";
import type {
  NavLink,
  Project,
  Service,
  Skill,
  SocialLink,
  Stat,
  TechItem,
  BlogPost,
} from "./types";

export const site = {
  name: "ITZJEY",
  fullName: "Jérémie Bodjrenou",
  role: "Développeur Web & Mobile",
  tagline: "Passionné par l'IA et la création de solutions digitales intelligentes",
  location: "Sèmè-Kpodji, Bénin",
  url: "https://jeremiebj.site",
  email: "jeremiedevbj@gmail.com",
  phone: "+229 90 63 77 30",
  phoneRaw: "22990637730",
  company: "Asitech Solution",
  experienceYears: 3,
} as const;

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jérémie-bodjrenou-461973248",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/Asip90", icon: Github },
  {
    label: "Facebook",
    href: "https://web.facebook.com/jeremie.bodjrenou.75",
    icon: Facebook,
  },
];

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Projets réalisés" },
  { value: 3, suffix: "+", label: "Années d'expérience" },
  { value: 12, suffix: "+", label: "Technologies maîtrisées" },
  { value: 100, suffix: "%", label: "Clients satisfaits" },
];

export const skills: Skill[] = [
  { label: "Développement Web", level: 95, color: "var(--brand)" },
  { label: "Développement Mobile", level: 90, color: "var(--accent-red)" },
  { label: "UI / UX Design", level: 85, color: "var(--accent-orange)" },
  { label: "Intelligence Artificielle", level: 80, color: "var(--accent-deep)" },
  { label: "Gestion de projet", level: 75, color: "var(--brand-bright)" },
];

export const services: Service[] = [
  {
    slug: "web",
    title: "Développement Web",
    icon: Globe,
    description:
      "Des applications web modernes avec React, Next.js et Node.js. Performantes, optimisées pour le référencement et prêtes à grandir avec votre activité.",
  },
  {
    slug: "mobile",
    title: "Développement Mobile",
    icon: Smartphone,
    description:
      "Des apps iOS et Android avec Flutter et React Native. Une expérience native, un seul code partagé, un déploiement rapide sur les deux plateformes.",
  },
  {
    slug: "design",
    title: "UI / UX Design",
    icon: Palette,
    description:
      "Des interfaces intuitives et soignées qui convertissent. Prototypage Figma, design system complet et tests auprès de vrais utilisateurs.",
  },
  {
    slug: "ia",
    title: "Intégration IA",
    icon: Brain,
    description:
      "Des solutions intelligentes : assistants conversationnels, automatisation, analyse de données et recommandations adaptées à votre métier.",
  },
];

export const projects: Project[] = [
  {
    slug: "openfood",
    title: "OpenFood",
    categories: ["SaaS", "Web"],
    summary: "Menu digital pour restaurants",
    description:
      "Plateforme de menus digitaux pour la restauration : gestion des cartes, commandes en ligne et tableau de bord analytique.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    url: "https://openfood.site",
    status: "live",
    accent: "var(--brand)",
    image: "/images/projects/openfood.png",
  },
  {
    slug: "vetcare-plus",
    title: "VetCare Plus",
    categories: ["Web"],
    summary: "Gestion de clinique vétérinaire",
    description:
      "Plateforme web pour clinique vétérinaire : suivi des patients, prise de rendez-vous et dossiers médicaux centralisés.",
    stack: ["React", "Node.js", "Express"],
    url: "https://vetcareplus.vercel.app",
    status: "live",
    accent: "var(--accent-red)",
    image: "/images/projects/vetcare-plus.jpg",
  },
  {
    slug: "nouyon-web",
    title: "Nouyon",
    categories: ["Web", "SaaS"],
    summary: "Gestion d'élevage de volaille",
    description:
      "Application de gestion d'élevage avicole : suivi sanitaire, production et finances réunis dans un seul tableau de bord.",
    stack: ["Next.js", "Django", "PostgreSQL"],
    url: "https://nouyon.site",
    status: "live",
    accent: "var(--accent-orange)",
    image: "/images/projects/nouyon.png",
  },
  {
    slug: "montoit-bj",
    title: "MonToit BJ",
    categories: ["Mobile"],
    summary: "Location immobilière au Bénin",
    description:
      "Application mobile de location immobilière : recherche géolocalisée, visites virtuelles et messagerie intégrée entre locataires et propriétaires.",
    stack: ["Flutter", "Firebase"],
    status: "live",
    accent: "var(--brand-bright)",
    image: "/images/projects/montoit-bj.png",
  },
  {
    slug: "compa",
    title: "Compa",
    categories: ["Mobile"],
    summary: "Gestion de commerce mobile",
    description:
      "Application de gestion commerciale : inventaire, ventes, rapports et pilotage de plusieurs boutiques depuis un seul téléphone.",
    stack: ["React Native", "Node.js"],
    status: "live",
    accent: "var(--accent-deep)",
    image: "/images/projects/compa.png",
  },
  {
    slug: "nouyon-app",
    title: "Nouyon Mobile",
    categories: ["Mobile"],
    summary: "L'élevage dans la poche",
    description:
      "Version mobile de la gestion d'élevage Nouyon : synchronisation cloud, notifications et saisie terrain hors connexion.",
    stack: ["Flutter", "Firebase"],
    status: "live",
    accent: "var(--brand)",
    image: "/images/projects/nouyon.png",
  },
  {
    slug: "historia",
    title: "Historia",
    categories: ["Mobile"],
    summary: "Patrimoine culturel béninois",
    description:
      "Application dédiée à la préservation du patrimoine : récits historiques, panégyriques et cartographie des lieux de mémoire du Bénin.",
    stack: ["Flutter", "Supabase"],
    status: "in-progress",
    accent: "var(--accent-orange)",
  },
];

export const techStack: TechItem[] = [
  { name: "HTML", level: "Avancé" },
  { name: "CSS", level: "Avancé" },
  { name: "JavaScript", level: "Avancé" },
  { name: "TypeScript", level: "Avancé" },
  { name: "Python", level: "Intermédiaire" },
  { name: "Dart", level: "Avancé" },
  { name: "React", level: "Avancé" },
  { name: "Next.js", level: "Avancé" },
  { name: "Tailwind CSS", level: "Avancé" },
  { name: "Node.js", level: "Avancé" },
  { name: "Express", level: "Intermédiaire" },
  { name: "Django", level: "Intermédiaire" },
  { name: "Flutter", level: "Avancé" },
  { name: "React Native", level: "Intermédiaire" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "flutter-mobile-afrique",
    title: "Pourquoi Flutter domine le développement mobile en Afrique",
    category: "Mobile",
    excerpt:
      "Un seul code, deux plateformes et des coûts maîtrisés : Flutter coche les bonnes cases pour les marchés africains. Décryptage.",
    date: "2026-05-28",
    readingMinutes: 6,
    body: [
      "En Afrique, le téléphone est souvent le premier — et parfois le seul — ordinateur de l'utilisateur. Concevoir mobile-first n'est donc pas une option, c'est le point de départ. Or, sur des budgets serrés, maintenir deux bases de code natives (Swift pour iOS, Kotlin pour Android) coûte cher en temps comme en argent.",
      "## Un seul code, deux plateformes",
      "Flutter compile une seule base de code Dart vers iOS et Android avec des performances proches du natif. Pour une PME béninoise, cela signifie diviser par deux le coût de développement initial et, surtout, la charge de maintenance sur le long terme.",
      "## Pensé pour les réseaux instables",
      "La gestion du mode hors connexion est ici un sujet central, pas un détail. Avec une architecture locale-d'abord (SQLite, Hive) synchronisée dès le retour du réseau, l'application reste utilisable dans une zone à faible couverture — un cas d'usage que je rencontre sur la quasi-totalité de mes projets terrain.",
      "## Le verdict",
      "Flutter n'est pas magique : pour des besoins très spécifiques (traitement vidéo lourd, intégrations matérielles pointues), le natif garde l'avantage. Mais pour 90 % des applications métier que construisent les startups africaines, c'est aujourd'hui le meilleur rapport vitesse / coût / qualité.",
    ],
  },
  {
    slug: "ia-pme-beninoises",
    title: "L'IA au service des PME béninoises : opportunités et défis",
    category: "Intelligence Artificielle",
    excerpt:
      "L'intelligence artificielle n'est plus réservée aux géants de la tech. Voici comment une PME locale peut en tirer une valeur concrète.",
    date: "2026-04-15",
    readingMinutes: 7,
    body: [
      "On présente souvent l'IA comme une affaire de laboratoires et de budgets colossaux. La réalité du terrain est plus accessible : la plupart des gains pour une PME viennent de tâches simples et répétitives qu'on automatise intelligemment.",
      "## Trois usages immédiats",
      "Un assistant conversationnel qui répond aux questions fréquentes des clients sur WhatsApp. Un système de catégorisation automatique des dépenses pour un commerce. Des recommandations de produits basées sur l'historique d'achat. Aucun de ces cas ne nécessite d'entraîner un modèle de zéro — les API existantes suffisent.",
      "## Les vrais défis",
      "La difficulté n'est pas technique, elle est dans les données. Beaucoup d'entreprises locales n'ont pas encore numérisé leur activité : pas de données, pas d'IA. La première étape est donc presque toujours de structurer l'information avant de l'automatiser.",
      "## Commencer petit, mesurer, étendre",
      "Mon conseil : choisir un seul processus douloureux, y appliquer une brique d'IA, mesurer le temps gagné, puis étendre. L'IA utile est celle qui résout un problème concret du quotidien, pas celle qui impressionne en démonstration.",
    ],
  },
  {
    slug: "nextjs-vs-django",
    title: "Next.js vs Django : comment choisir pour votre projet web",
    category: "Développement Web",
    excerpt:
      "Deux excellents frameworks, deux philosophies. Le bon choix dépend moins de la mode que de la nature de votre produit.",
    date: "2026-03-02",
    readingMinutes: 5,
    body: [
      "« Next.js ou Django ? » est l'une des questions qu'on me pose le plus souvent. La réponse honnête commence toujours par une autre question : quel produit construisez-vous, et avec quelle équipe ?",
      "## Next.js brille côté expérience",
      "Si l'interface est riche, interactive et que le référencement compte (site vitrine, e-commerce, SaaS), Next.js offre le rendu côté serveur, des temps de chargement rapides et une expérience développeur moderne. C'est mon choix par défaut pour les produits orientés utilisateur final.",
      "## Django brille côté métier",
      "Si le cœur du produit est une logique métier dense — règles complexes, back-office, gestion de données structurées — Django apporte un cadre robuste, un ORM mûr et une interface d'administration prête à l'emploi qui fait gagner des semaines.",
      "## La vraie réponse : souvent les deux",
      "Sur plusieurs de mes projets, Django expose une API que consomme un front Next.js. On combine alors la solidité métier de l'un avec l'expérience utilisateur de l'autre. Le bon framework n'est pas le plus à la mode, c'est celui qui correspond à la forme de votre problème.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
