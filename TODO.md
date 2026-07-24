# TODO

## Config / Data

- \[M\] `data/termine.yaml:1` — All termine entries are dated 2023; the page shows only past events. Update with current or future dates.
- \[L\] `data/gallery.yaml:3` — "Neueste Fotos" album has 6 images with `caption: ""`. Add descriptive captions or add a template fallback so `alt` is never blank.

## Before Go-Live

- Remove bot/crawler blocking: delete `static/robots.txt` and the `noindex`/`nofollow` meta tags in `layouts/_default/baseof.html` once the site is ready to be public.

## Infra

- \[M\] `infra/index.ts:28` — Delete re-derives site ID by scanning all sites by name; if site was renamed externally, deletion silently fails. Capture and store the site ID at create time.

## Content

- \[H\] `content/blog/grosses-seefestkonzert-am-18-08-17.md:2` — Title says "20.08.17" and body confirms 20.08.2017, but slug/filename say "18-08-17". Rename file and update slug to `grosses-seefestkonzert-am-20-08-17`.
- \[M\] `content/ehrentafel.md:15` — Figcaption/alt say "Albin Schmidt" but Musikmeister list and all chronik pages use "Albin Schmied". Reconcile spelling.
- \[M\] `content/blog/rueckblick-2020.md:2` — Title "Eisstockturnier" does not match slug or post content (year-in-review). Change title to "Rückblick 2020".
- \[M\] `content/blog/rueckblick-2020.md:3` — Date `2020-02-06` is an event date but post is a year-in-review. Update to actual publication date.
- \[M\] `content/blog/rueckblick-2021.md:2` — Title "Allerheiligen" does not match slug or post content (pandemic recap). Change title to "Rückblick 2021".
- \[M\] Empty `alt` on non-decorative images: `content/1960-1969.md:25`, `content/1990-1999.md:29`, `content/ueber-uns/musikanten.md:13,33`, blog hero images at line 8 in `90-jahre`, `bergmesse`, `die-neue-homepage`, `grosses-seefestkonzert`, `neu-in-der-diesjaehrigen` and line 10 in `eroeffnung-lindenplatz`. Add descriptive alt text.
- \[L\] `content/mach-mit.md:26-28` — Gallery items have no alt text. Add descriptive alt or mark decorative.
