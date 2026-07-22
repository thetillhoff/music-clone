# Hugo Static Site - Blaskapelle Bad Wiessee

## Goal

Faithful clone of <www.blaskapelle-badwiessee.de> - a Jimdo-hosted brass band site - as a Hugo static site deployed on Netlify via GitHub. No visual or structural changes. All content, layout, and assets preserved.

## Approach

Scrape the live Jimdo site (`wget --mirror`) to capture HTML, CSS, JS, and all images. Use scraped CSS verbatim in Hugo's `static/css/`. Extract page layouts into Hugo templates. Migrate text content to markdown and YAML data files.

## Repository Structure

```text
music-clone/
├── content/
│   ├── _index.md
│   ├── blog/
│   │   └── YYYY-MM-DD-title.md   # one file per post
│   ├── termine.md
│   ├── chronik.md
│   ├── ueber-uns/
│   │   ├── _index.md
│   │   ├── musikanten.md
│   │   └── mach-mit.md
│   ├── galerie.md
│   └── kontakt.md
├── data/
│   ├── termine.yaml              # structured event list
│   └── gallery.yaml             # image filenames + captions + album names
├── layouts/
│   ├── _default/
│   │   ├── baseof.html           # shared shell (nav, footer)
│   │   ├── single.html
│   │   └── list.html
│   ├── blog/
│   ├── galerie/
│   ├── chronik/
│   └── kontakt/
├── static/
│   ├── css/                      # scraped Jimdo CSS, unmodified
│   ├── js/                       # scraped JS (minimal)
│   └── images/
│       ├── gallery/              # all ~60 downloaded photos
│       └── logo.*
├── netlify.toml
└── hugo.toml
```

## Content Model

### Events (`data/termine.yaml`)

```yaml
- date: 2023-05-01
  time: "18:30"
  location: Seepromenade
- date: 2023-05-04
  time: "18:30"
  location: Abwinkl
```

Rendered by `layouts/termine/single.html` via `$.Site.Data.termine`.

### Blog Posts (`content/blog/`)

Frontmatter: `title`, `date`. Body in German markdown. Hugo list template groups by year matching original archive structure.

### Gallery (`data/gallery.yaml`)

```yaml
- album: Bergmesse Neuhüttenalm 2016
  images:
    - file: bergmesse-2016-1.jpg
      caption: ""
```

Images in `static/images/gallery/`. Template renders albums with lightbox-compatible markup. Scrape Jimdo's gallery JS first; if it depends on Jimdo infrastructure and breaks, replace with GLightbox (MIT, self-hosted, single JS+CSS file).

### Static Pages

Chronik, Musikanten, Mach mit, Über uns: plain markdown content. No special data structure.

### Contact Form

Netlify Forms: `<form name="contact" netlify netlify-honeypot="bot-field">` with name, email, message fields. Honeypot replaces CAPTCHA. Submissions arrive in Netlify dashboard.

## Navigation

Matches original exactly:

- Über uns (dropdown: Musikanten, Mach mit)
- Blog (archive: 2020, 2021)
- Termine
- Chronik (sub-pages: 1924-1999, Ehrentafel)
- Galerie
- Kontakt

Hugo menu config in `hugo.toml` or frontmatter `menu` keys.

## Deployment

`netlify.toml`:

```toml
[build]
  command = "hugo --minify"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.147.0"
```

- GitHub repo `thetillhoff/music-clone` → Netlify auto-deploys on push to `main`
- Netlify Forms enabled (no extra service needed)
- Custom domain `blaskapelle-badwiessee.de` via DNS CNAME/A record (configured outside this repo)
- URL structure matches original: `/blog`, `/galerie`, `/kontakt`, `/termine`, `/chronik`, `/ueber-uns`

## Scraping Plan

1. `wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://www.blaskapelle-badwiessee.de/` downloads full site
2. Extract unique CSS files → `static/css/`
3. Extract all images → `static/images/`
4. Parse each HTML page → extract body content → write to corresponding markdown file
5. Build `data/gallery.yaml` from gallery page image list
6. Build `data/termine.yaml` from events page

## Asset Path Convention

All references to static files in Hugo templates use absolute paths from the site root:

- CSS: `<link rel="stylesheet" href="/css/main.css">`
- Images: `<img src="/images/gallery/photo.jpg">`
- JS: `<script src="/js/main.js">`

Never use relative paths (`../css/`) or Hugo's `relURL`/`absURL` for static assets scraped from Jimdo - absolute paths work uniformly across all page depths.

## Out of Scope

- DNS configuration (done by site owner)
- Netlify account setup
- Any redesign or new features
