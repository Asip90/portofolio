import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type ProjectCategory = "Web" | "Mobile" | "SaaS";

export interface Project {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  summary: string;
  description: string;
  stack: string[];
  url?: string;
  status?: "live" | "in-progress";
  accent: string;
  image?: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface Skill {
  label: string;
  level: number;
  color: string;
}

export interface TechItem {
  name: string;
  level: "Avancé" | "Intermédiaire" | "Courant";
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  body: string[]; // paragraphs / markdown-lite lines
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}
