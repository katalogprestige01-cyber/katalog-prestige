# Katalog Prestige — scaffold SEO (Astro + Cloudflare Pages)

Statyczny scaffold pod SEO wg skilla `site-scaffold-seo`. Stack: **Astro** (SSG, minimum JS) →
**GitHub** → **Cloudflare Pages**. Zasada nadrzędna: *jeden URL = 200 = canonical = og:url = sitemap*.

## Uruchomienie lokalne
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build produkcyjny do ./dist  (musi być zielony przed pushem)
npm run preview
```
> Uwaga: `node_modules/` NIE jest dołączony do paczki — po skopiowaniu odpal `npm install`.

## Struktura
```
src/
  data/site.mjs         domena, nazwa, helper absUrl (jedyne miejsce zmiany domeny)
  data/categories.ts    8 kategorii; active:true = 4 filary na start
  data/rankings.ts      rankingi afiliacyjne; active:true = 4 na start
  data/author.ts        profil autora E-E-A-T  <-- UZUPEŁNIJ realną osobą
  content/config.ts     kontrakt danych (zod) — build wywala się przy złym froncie
  content/blog/         wpisy .md (płasko; kategoria z pola `category`, slug = nazwa pliku)
  content/rankingi/     rankingi .md (slug pliku == slug w rankings.ts)
  layouts/              BaseLayout (canonical/og/schema), BlogPost (BlogPosting+breadcrumb)
  components/           Header, Footer, Breadcrumbs
  pages/                strony rdzeniowe + dynamiczne huby + sitemap.xml.ts
public/robots.txt       nie blokuje botów, wskazuje sitemap
public/_redirects       rewrite 200 dla /blog i /rankingi (Cloudflare Pages)
```

## Jak dodać wpis
1. Utwórz `src/content/blog/moja-fraza.md` (wzór: plik `PRZYKLAD-...md`).
2. Ustaw `category` (jeden z aktywnych slugów) i `draft: false`.
3. URL powstanie sam: `/blog/{category}/moja-fraza/`. Sitemap i listingi zaktualizują się przy buildzie.
> Kadencja: 1–2 wpisy/tydzień (nie 10 naraz — ryzyko „scaled content abuse"). Linkuj każdy wpis w obie strony.

## Jak dodać ranking z treścią
Utwórz `src/content/rankingi/{slug}.md` gdzie `{slug}` == slug z `rankings.ts`. Bez treści strona
rankingu jest `noindex` i poza sitemap (placeholder).

## Aktywacja kolejnej kategorii
`src/data/categories.ts`: zmień `active:false` -> `true`. Analogicznie rankingi w `rankings.ts`.

## Deploy (Cloudflare Pages)
1. Wypchnij repo na GitHub (rób to natywnie z PowerShell — nie z sandboksa).
2. Cloudflare Pages -> Create project -> połącz repo. Build command: `npm run build`, output: `dist`.
3. Najpierw działa na `*.pages.dev`; potem podepnij `katalog-prestige.pl` (DNS w CF).
4. **Nie blokuj Googlebota** żadną regułą WAF (403 dla bota = ruch do zera).
5. GSC: dodaj właściwość **domenową** (sc-domain), zgłoś sitemap pełnym URL-em:
   `https://katalog-prestige.pl/sitemap.xml`.

## Zanim ogłosisz „gotowe" (Definition of Done)
- [ ] Uzupełnij `src/data/author.ts` realną osobą (E-E-A-T).
- [ ] Uzupełnij treść stron prawnych (`polityka-prywatnosci`, `regulamin`) — skonsultuj z prawnikiem.
- [ ] `npm run build` zielony lokalnie i na Cloudflare Pages.
- [ ] Losowy URL: 200 bez redirectu; canonical == URL == og:url; wszędzie trailing slash.
- [ ] Sitemap: pełne URL-e z ukośnikiem, 0 draftów, 0 stron noindex.
- [ ] Linki afiliacyjne mają `rel="sponsored nofollow"` (już ustawione w szablonie rankingu).

## Dalsze kroki (inne skille)
- Treść i linkowanie: `seo-content-and-links` + `home-decor-human-writer`.
- Automatyzacja (sitemap-autopilot, publikacja „na raty"): `seo-agent-orchestration`.
- Diagnostyka spadków/GSC: `seo-technical-audit`.
