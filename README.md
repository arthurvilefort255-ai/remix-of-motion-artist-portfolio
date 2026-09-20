# Artist Portfolio

A minimalist single-artist portfolio template with a parallax hero, a masonry photo grid, dedicated artwork detail pages, and a lightweight inquiry form. Content is fully static — no backend, no database — perfect as a starting point for painters, illustrators, and photographers.

## Tech stack

- Vite + React 18 + TypeScript
- Tailwind CSS v3 + shadcn/ui
- React Router v6
- Framer Motion (parallax + page transitions)

## Getting started

```sh
npm install
npm run dev
```

## Editing content

All artworks live in a single file — edit, add, or remove entries there and the grid + detail pages update automatically.

- **Artworks (25 by default):** `src/lib/artworks.ts` — each entry has `slug`, `title`, `description`, `medium`, `dimensions`, `year`, `image` (Unsplash URL or your own), plus intrinsic `w`/`h` used for grid aspect ratios.
- **Hero collage images (12):** `HERO_PHOTOS` in `src/components/ui/hero-section.tsx`.
- **About page bio + studio image:** `src/pages/About.tsx`.
- **Site initials logo:** `src/components/ui/site-header.tsx` (`A.S.` by default).
- **Design tokens (colors, fonts):** `src/index.css` — the palette uses `--hero-dark`, `--hero-light`, `--hero-paragraphs`, `--hero-border`, `--hero-red`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero + photo grid |
| `/about` | About the artist |
| `/artwork/:slug` | Artwork detail + inquiry form + prev/next |
| `*` | 404 |

## Forms

The Contact and Request-artwork forms are client-only demos — they show a thank-you message and reset. To actually receive submissions, wire the `handleSubmit` handlers in `src/components/ui/contact-overlay.tsx` and `src/pages/ArtworkDetail.tsx` to Lovable Cloud, a form service (Formspree, Resend), or your own endpoint.