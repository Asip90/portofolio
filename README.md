# ITZJEY — Portfolio de Jérémie Bodjrenou

Portfolio professionnel d'un développeur web & mobile basé à Sèmè-Kpodji, Bénin.
Construit avec **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**,
**Framer Motion** et **next-themes**.

## Démarrage

```bash
npm install
cp .env.example .env.local   # renseignez vos valeurs
npm run dev                  # http://localhost:3000
```

Scripts : `npm run dev` · `npm run build` · `npm start` · `npm run lint`.

## Direction artistique

Palette cobalt inspirée de la maquette de référence : bleu profond `#1D3FB5`,
fond bleuté clair, surfaces blanches, encre ardoise-marine. Les accents
(rouge / orange / ardoise) sont réservés aux données (barres de compétences,
notes). Pas de violet. Thème clair/sombre via un `class` togglé par next-themes.

- **Typographie** : Plus Jakarta Sans (titres), Inter (corps), JetBrains Mono (labels).
- **Élément signature** : le portrait cerclé d'orbites avec badges flottants.

## Personnaliser

| Quoi | Où |
|------|-----|
| Coordonnées, projets, services, articles | `lib/data.ts` |
| Couleurs et tokens du design | `app/globals.css` (`:root` et `.dark`) |
| Photos de profil | `public/images/profile/` (voir `A_LIRE.txt`) |
| Captures de projets | `public/images/projects/` (voir `A_LIRE.txt`) |
| Google Analytics | `NEXT_PUBLIC_GA_ID` dans `.env.local` |
| Domaine canonique | `site.url` dans `lib/data.ts` |

Les visuels (portrait, captures) sont des placeholders soignés : déposez les
fichiers indiqués et décommentez les balises `<Image>` repérées en commentaire.

## Structure

```
app/
  layout.tsx · page.tsx · sitemap.ts · robots.ts · not-found.tsx
  sections/   Hero, Stats, About, Services, Portfolio, Stack, BlogPreview, Contact
  blog/       liste + article [slug]
  portfolio/ · contact/
components/    Header, Footer, cartes, primitives UI, animations
lib/          data.ts (contenu), types.ts, utils.ts
```

## SEO

Métadonnées complètes (Open Graph, Twitter, canonical), `sitemap.xml` et
`robots.txt` dynamiques, données structurées JSON-LD (`Person`, `WebSite`,
`ProfessionalService`), langue `fr`.
