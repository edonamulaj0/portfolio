# dona — Personal Portfolio (v2)

Editorial portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion. Configured for static export and deployment to Cloudflare Pages.

## Tech stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion — reveals and micro-interactions
- Lenis — inertial smooth scrolling
- GSAP ScrollTrigger — hero parallax
- Geist Sans & Geist Mono via `next/font`

## Design system (v2)

One dark canvas end to end. v1 alternated black sections with a photographic
"hologram" background; v2 drops that image entirely and builds depth from
elevation instead:

- **Surfaces** — `--color-bg` → `--color-surface` → `--color-surface-2`, with
  hairline `--color-line` borders. Sections alternate base and raised tones
  (`<Section tone="raised">`) for vertical rhythm.
- **Aurora** — a fixed, CSS-only ambient backdrop (`components/Aurora.tsx`).
  No image payload, no WebGL, and it pauses under `prefers-reduced-motion`.
- **Accents** — lavender `--color-accent`, sky, and rose, used for rules,
  indices, and interactive states rather than large washes.
- **Motion** — a single easing curve (`--ease-premium`) across every
  transition; Lenis drives scroll and is disabled for reduced motion.

Tokens live at the top of `app/globals.css`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are exported to the `out/` directory.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In the [Cloudflare dashboard](https://dash.cloudflare.com), go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Configure the build:

   | Setting | Value |
   | --- | --- |
   | Framework preset | None |
   | Build command | `next build` |
   | Build output directory | `out` |
   | Node.js version | 20 or later |

4. Deploy. Cloudflare Pages rebuilds on every push to your production branch.

### Environment variables (optional)

Set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://edonamulaj.com`) so Open Graph metadata resolves correctly.

### Custom domain

After deployment, add your custom domain under **Pages → Custom domains**. Update URLs in `public/sitemap.xml` and `public/robots.txt` if your domain differs.

### Open Graph image

Metadata references `/og-image.png` as a placeholder. Add a 1200×630 image at `public/og-image.png` when ready, or update metadata in `app/layout.tsx`.

## Project structure

The homepage is an overview. Each section links to a dedicated page with full content:

| Page | Route |
| --- | --- |
| Home | `/` |
| About + full résumé | `/about` (`/about#background`) |
| Work | `/work` |
| Gallery | `/gallery` |
| Misc | `/misc` (legacy `/articles` redirects here) |
| Contact | `/contact` |

```
app/(site)/       Home + section pages
components/       Shared UI and section components
lib/              Content data (see below)
public/dona.png   Portrait photo
public/gallery/   Gallery images
```

### Content data

All résumé and contact content is plain TypeScript in `lib/` — edit these to update the site:

| File | Contents |
| --- | --- |
| `lib/social.ts` | Single source of truth for email, LinkedIn, GitHub, and Cyphera links (used by the nav, footer, about page, and contact page) |
| `lib/experience.ts` | Work experience with per-role highlight bullets |
| `lib/education.ts` | Degrees, Erasmus+ mobilities, and school |
| `lib/credentials.ts` | Awards, publications, and certifications |
| `lib/projects.ts` | Projects shown on the homepage preview and `/work` |
| `lib/academics.ts` | Curated highlights for the homepage `(03)` section |
| `lib/background.ts` | Technology groups rendered as chips on `/about#background` |
| `lib/about.ts` | Intro copy for the homepage and about page |
| `lib/highlights.ts` | Stat band numbers and the hero ticker words |

## Adding articles

1. Open `lib/misc.ts`
2. Add a new entry to the `articles` array with `slug`, `title`, `date`, `excerpt`, `tags`, and `content`
3. Use `## Heading` for section headings in content
4. Rebuild — the sitemap and static article pages update automatically

Articles appear in the `(05) misc` section on the homepage and at `/misc`.

## Gallery & misc section

Personal photos and artwork live in `public/gallery/`. To add images:

1. Drop `.jpg`, `.png`, or `.webp` files into `public/gallery/`
2. Add an entry in `lib/gallery.ts` with `src`, `alt`, `caption`, `category`, and layout:
   - `aspect`: `square`, `portrait`, or `landscape`
   - `cols`: `1`, `2`, or `3` (spans on the 3-column grid)
   - `rows`: `1` or `2` (taller cells for portraits)
3. Rebuild

Example layouts: a portrait (`cols: 1, rows: 2`) beside a landscape (`cols: 2, rows: 1`), two squares on one row, or a full-width image (`cols: 3, rows: 1`).

## License

Private — all rights reserved.
