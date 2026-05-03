# CLAUDE.md

Personal portfolio and blog for [gianfrancofrau.com](https://gianfrancofrau.com), built with Astro 6. Static site with Vue islands for interactivity, deployed on Netlify.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # astro check (type errors fail the build) then build to dist/
npm run preview  # Preview production build locally
npm run check    # Type-check only
npm run format   # Prettier all files in src/
```

## Architecture

**Stack:** Astro 6 (static output) + Vue 3 + Tailwind v4 + MDX. Routing is file-based under `src/pages/`.

**Layout hierarchy:** `BaseLayout.astro` (HTML shell, SEO, fonts, anti-FOUC) → `PageLayout.astro` / `BlogLayout.astro` (add `SiteHeader` + `SiteFooter`) → pages.

**Vue islands** in `src/components/islands/` are the only interactive components, hydrated with `client:load`. Everything else is static Astro.

**Astro 6 content API** — two collections defined in `src/content.config.ts` with the glob loader. Key breaking changes from older Astro:
- Use `post.id` (not `post.slug`) for URL params
- Use `render(post)` (not `post.render()`) to get the `Content` component
- Import `z` from `zod`, `glob` from `astro/loaders`

**Tailwind v4** has no `tailwind.config.js`. All theme tokens are in `src/styles/global.css` via `@theme`/`@theme inline` blocks, using CSS custom properties with `oklch` values following shadcn-vue conventions.

**Dark mode** is driven by the `.dark` class on `<html>`, stored in `localStorage`. `BaseLayout` runs an inline `is:inline` script before first paint to prevent FOUC. Default is dark.

## Code style

Prettier: no semicolons, single quotes, 2-space indent, 100-char line width, no trailing commas.
