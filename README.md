# Oriole Entertainment Website

> India's Biggest Live Stand Up Comedy Producers — [orioleentertainment.com](https://orioleentertainment.com)

## Stack

| Tool | Version |
|---|---|
| Build | Vite 5 |
| UI | React 18 |
| Routing | React Router DOM 6 |
| Animation | Framer Motion 11 |
| Icons | lucide-react |
| Analytics | @vercel/analytics |
| Styling | Plain CSS (CSS Custom Properties, component-scoped) |

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- npm (use npm, not yarn — only `package-lock.json` is maintained)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in Firebase keys
cp sample.env .env

# 3. Start dev server (http://localhost:5173)
npm run dev

# 4. Production build
npm run build

# 5. Preview production build locally
npm run preview
```

### Environment Variables

Copy `sample.env` to `.env` and fill in your Firebase project credentials.
**Never commit `.env` to git** — it is in `.gitignore`.

| Variable | Description |
|---|---|
| `VITE_FIREBASE_API_KEY` | Firebase Web API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | Firebase Analytics measurement ID |

---

## Folder Structure

```
/
├── public/
│   ├── logo.png              ← Oriole logo (PNG)
│   ├── favicon.svg           ← Favicon
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/               ← Artist photos and banners
│   ├── slide/                ← Hero slide backgrounds
│   ├── portfolio/            ← Work showcase thumbnails
│   ├── pdfs/                 ← Downloadable decks
│   └── testimonials/
│
├── src/
│   ├── styles/
│   │   ├── tokens.css        ← All CSS custom properties (colours, fonts, spacing)
│   │   ├── reset.css         ← Normalize & global reset
│   │   └── utils.css         ← Container, buttons, section utilities
│   │
│   ├── data/
│   │   └── work.js           ← Work/showcase grid data (see "Adding Work Items" below)
│   │
│   ├── sections/             ← Full-page sections (new)
│   │   ├── Hero/             ← Full-viewport hero slideshow
│   │   ├── WhoWeAre/         ← Brand story + stats
│   │   ├── WhatWeDo/         ← 3-vertical panels
│   │   └── WorkGrid/         ← Data-driven project showcase grid
│   │
│   ├── components/           ← Reusable UI components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── ScrollToTop/
│   │   ├── BrandTicker/
│   │   ├── UpcomingTours/
│   │   ├── SpecialEvents/
│   │   └── Contact/
│   │
│   ├── pages/
│   │   ├── Home.jsx          ← Assembles all sections (single-page scroll)
│   │   ├── ArtistsPage.jsx   ← Full artist roster sub-page
│   │   └── TeamPage.jsx      ← Team sub-page
│   │
│   ├── firebase/
│   │   └── firebaseConfig.js ← Firebase init (reads from .env)
│   │
│   ├── App.jsx               ← Router, page transitions, global layout
│   ├── App.css
│   ├── index.css             ← Imports tokens/reset/utils
│   └── main.jsx
│
├── index.html                ← HTML shell (meta, OG tags, font imports)
├── vite.config.js
├── package.json
├── package-lock.json         ← Single lockfile (npm)
├── sample.env                ← Template for .env
└── .gitignore
```

---

## Adding Work / Showcase Items

Edit **`src/data/work.js`** — no component changes needed.

Each entry follows this shape:

```js
{
  id: 'unique-slug',            // kebab-case, must be unique
  title: 'Show / Event Name',
  subtitle: 'Short description · City',
  thumb: '/portfolio/my-thumb.jpg', // image in /public/portfolio/
  embed: 'https://www.youtube.com/embed/VIDEO_ID', // or null
  link: 'https://bookmyshow.com/...', // fallback URL if no embed
  tags: ['Artists', 'Live Shows'],   // used for filter tabs
}
```

**Available tags:** `Artists`, `Live Shows`, `Events`, `Brand Partnerships`

To add a new thumbnail: drop the image in `public/portfolio/` and reference it as `/portfolio/filename.jpg`.

---

## Routes

| Path | Page |
|---|---|
| `/` | Home (single-page scroll with anchor sections) |
| `/artists` | Full artist roster |
| `/team` | Team members |

Anchor IDs on the Home page: `#about`, `#what-we-do`, `#work`, `#tours`, `#events`, `#contact`

---

## Deployment

The site is deployed on **Vercel** (recommended) or any static host since it outputs a plain `dist/` folder.

```bash
# Build
npm run build

# dist/ is the output — deploy this folder
```

### Vercel
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Add all `VITE_FIREBASE_*` environment variables in Vercel project settings

### Update sitemap before deploying
Edit `public/sitemap.xml` and replace `orioleentertainment.com` with your actual domain.

---

## Design Tokens

All colours, fonts and spacing live in `src/styles/tokens.css`. Key tokens:

| Token | Value | Usage |
|---|---|---|
| `--accent` | `#e84118` | Oriole red |
| `--accent-orange` | `#e67e22` | Gradient accent |
| `--font-display` | `'Bebas Neue'` | Hero headlines |
| `--font-heading` | `'Outfit'` | Section headings |
| `--font-body` | `'Inter'` | Body text |
| `--max-w` | `1200px` | Container width |

---

## TODO — Content Items Needed

- [ ] **Logo SVG** — high-res SVG for hero and favicon (current `/logo.png` works but SVG is sharper)
- [ ] **Hero background images** — ideally 1920×1080 WebP for `/slide/` images
- [ ] **OG image** — 1200×630 PNG at `/public/og-image.png`; update `index.html` og:image
- [ ] **Work showcase** — add YouTube embed URLs to `src/data/work.js` items marked `embed: null`
- [ ] **Portfolio thumbnails** — drop images in `public/portfolio/` for any new work items
- [ ] **Team photos** — update `TeamPage.jsx` with real team member data
- [ ] **Sitemap domain** — update `public/sitemap.xml` with final production URL
- [ ] **YouTube channel URL** — update Footer YouTube link

---

## Branch Strategy

- `master` — stable production code
- `redesign/tamboo-style` — current redesign (merge to master when approved)
