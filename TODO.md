# TODO

## Vor dem Go-Live

- Bot-/Crawler-Sperre entfernen: `static/robots.txt` löschen und die `noindex`/`nofollow`-Meta-Tags in `layouts/_default/baseof.html` entfernen, sobald die Seite öffentlich gehen soll.

## Konfiguration / Daten

- Bilder als WebP ausliefern für bessere Ladezeiten. Zwei Möglichkeiten: (1) Cloudflare als Proxy/CDN vorschalten — wandelt Bilder kostenlos automatisch in WebP um (Funktion „Polish"); (2) Bilder in `assets/` verschieben und Hugo-Bildverarbeitung (`.Resize` etc.) in den Templates nutzen, was einen größeren Umbau bedeutet.

- `data/termine.yaml` — Alle Termine sind auf 2023 datiert; die Seite zeigt daher nur vergangene Veranstaltungen. Mit aktuellen oder zukünftigen Terminen befüllen.
- `data/gallery.yaml` — Die ersten fünf Fotos haben keinen Beschreibungstext (`caption: ""`). Beschreibungen ergänzen oder im Template einen Fallback einbauen, damit der `alt`-Text nie leer bleibt.

## Inhalte

- `content/blog/grosses-seefestkonzert-am-18-08-17.md` — Titel und Text nennen den 20.08.2017, Dateiname und Slug sagen „18-08-17". Datei umbenennen und Slug auf `grosses-seefestkonzert-am-20-08-17` korrigieren.
- `content/ehrentafel.md` — Bildunterschrift und Alt-Text lauten „Albin Schmidt", alle anderen Stellen (Musikantenliste, Chronik) schreiben „Albin Schmied". Schreibweise vereinheitlichen.
- `content/blog/rueckblick-2020.md` — Titel „Eisstockturnier" passt nicht zum Inhalt (Jahresrückblick). Titel auf „Rückblick 2020" ändern. Außerdem ist das Datum `2020-02-06` ein Veranstaltungsdatum, kein Veröffentlichungsdatum — korrigieren.
- `content/blog/rueckblick-2021.md` — Titel „Allerheiligen" passt nicht zum Inhalt (Pandemie-Rückblick). Titel auf „Rückblick 2021" ändern.
- Fehlende Alt-Texte bei inhaltlichen Bildern: `content/1960-1969.md`, `content/1990-1999.md`, `content/ueber-uns/musikanten.md`, sowie die Blog-Artikel `90-jahre`, `bergmesse`, `die-neue-homepage`, `grosses-seefestkonzert`, `neu-in-der-diesjaehrigen` und `eroeffnung-lindenplatz`. Beschreibende Alt-Texte ergänzen.
- `content/mach-mit.md` — Galeriebilder haben keinen Alt-Text. Beschreibende Alt-Texte ergänzen oder Bilder als dekorativ auszeichnen.
