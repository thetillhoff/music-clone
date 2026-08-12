# TODO

## Vor dem Go-Live

- Bot-/Crawler-Sperre entfernen: `static/robots.txt` löschen und die `noindex`/`nofollow`-Meta-Tags in `layouts/_default/baseof.html` entfernen, sobald die Seite öffentlich gehen soll.

## Rechtliches

- Vereinsregister prüfen: Ist die Musikvereinigung Bad Wiessee ein eingetragener Verein? Falls ja, verlangt § 5 DDG Registergericht und Registernummer im Impressum, und der Name muss „e.V." enthalten.
- Impressum und Datenschutzerklärung stammen aus einem älteren e-Recht24-Generator und wurden nur punktuell aktualisiert (TMG → DDG, Google Analytics entfernt, Hosting/Netlify und Betroffenenrechte ergänzt). Vor dem Go-Live einmal komplett neu generieren oder anwaltlich prüfen lassen.

## Konfiguration / Daten

- Bilder als WebP ausliefern für bessere Ladezeiten. Zwei Möglichkeiten: (1) Cloudflare als Proxy/CDN vorschalten — wandelt Bilder kostenlos automatisch in WebP um (Funktion „Polish"); (2) Bilder in `assets/` verschieben und Hugo-Bildverarbeitung (`.Resize` etc.) in den Templates nutzen, was einen größeren Umbau bedeutet.

- `data/gallery.yaml` — Die ersten fünf Fotos haben keinen Beschreibungstext (`caption: ""`). Beschreibungen ergänzen oder im Template einen Fallback einbauen, damit der `alt`-Text nie leer bleibt.

## Inhalte

- Chronik-Jahrzehnte 2010er/2020er — Die Daten in den Überschriften stammen aus den alten Blog-Veröffentlichungsdaten, sofern im Text kein Veranstaltungsdatum stand. Bei „Konzerte im Kurpark Abwinkel", „Unsere neue Homepage", „Eröffnung Lindenplatz", „Bergmesse am Kirchweihmontag", „Frühschoppen auf dem Wallberg" und „Kirchweihmontag auf der Aueralm" die tatsächlichen Veranstaltungsdaten prüfen.
- `content/ehrentafel.md` — Bildunterschrift und Alt-Text lauten „Albin Schmidt", alle anderen Stellen (Musikantenliste, Chronik) schreiben „Albin Schmied". Schreibweise vereinheitlichen.
- Fehlende Alt-Texte bei inhaltlichen Bildern: `content/1960-1969.md`, `content/1990-1999.md`, `content/ueber-uns/musikanten.md` sowie mehrere Bilder in `content/2010-2019.md`. Beschreibende Alt-Texte ergänzen.
- `content/mach-mit.md` — Galeriebilder haben keinen Alt-Text. Beschreibende Alt-Texte ergänzen oder Bilder als dekorativ auszeichnen.
