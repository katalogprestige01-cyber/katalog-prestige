# DECYZJE.md — katalog-prestige.pl

Plik-zalążek repo (wymagany przez skill `site-scaffold-seo`, §1). Decyzje **zatwierdzone** i wdrożone
w scaffoldzie. Zmiana slugów/osiów po indeksacji = błędy w GSC — nie ruszaj bez powodu.

## 1. Domena i host
- Domena: **katalog-prestige.pl** — ✅ **własna** (bez aftermarketu; ryzyko zakupu nieaktualne).
- Host: **bez www** → `https://katalog-prestige.pl/` (druga wersja i www → 301 na docelową).
- Trailing slash: **always** (wszystkie URL-e z ukośnikiem końcowym). Ustawione w `astro.config.mjs`.
- Do czasu podpięcia domeny strona żyje na `*.pages.dev`.

## 2. Pozycjonowanie
- Nisza: **wykończenie wnętrz premium** (materiały i elementy wykończeniowe, nie meble/AGD).
- Ton: prestiżowy „katalog" — kamień naturalny, wielkoformaty, armatura designerska. Konkret + inspiracja.
- Model: blog ekspercki + rankingi TOP (afiliacja) + Współpraca.

## 3. Oś silosów (decyzja anty-kanibalizacyjna, §1.3)
- Oś główna kategorii URL = **ELEMENT / MATERIAŁ WYKOŃCZENIA**.
- Oś druga = **TAGI** (pomieszczenia + style), NIE druga taksonomia URL.
- Rankingi = osobny silos `/rankingi/` po typie produktu (warstwa afiliacyjna).

## 4. Start: 4 filary „na głęboko" (decyzja: wąsko-głęboko)
Świeża domena → budujemy głębię tematyczną, nie szerokość. Cel: **15–20 zlinkowanych artykułów/kategoria**.
Struktura URL zaprojektowana pod pełne 8 — pozostałe 4 dokładamy później (`active:false` w `src/data/categories.ts`).

| # | Kategoria (H1 huba)        | Slug URL                     | Status na start | Powiązany ranking |
|---|----------------------------|------------------------------|-----------------|-------------------|
| 1 | Płytki i okładziny         | `/blog/plytki/`              | AKTYWNY         | płytki wielkoformatowe |
| 2 | Podłogi                    | `/blog/podlogi/`             | AKTYWNY         | panele winylowe SPC |
| 3 | Kamień naturalny i blaty   | `/blog/kamien-naturalny/`    | AKTYWNY (prestige) | blaty kamienne do kuchni |
| 4 | Armatura i ceramika        | `/blog/armatura-i-ceramika/` | AKTYWNY         | baterie łazienkowe premium |
| 5 | Ściany i farby             | `/blog/sciany-i-farby/`      | później         | najlepsze farby premium |
| 6 | Drzwi i stolarka           | `/blog/drzwi-i-stolarka/`    | później         | drzwi bezprzylgowe |
| 7 | Oświetlenie                | `/blog/oswietlenie/`         | później         | profile LED |
| 8 | Sztukateria i detale       | `/blog/sztukateria/`         | później         | — |

Aktywacja kategorii: zmień `active: false` -> `true` w `src/data/categories.ts` (hub, nawigacja i sitemap same się zaktualizują).

## 5. Tagi (oś druga)
- Pomieszczenia: `salon`, `kuchnia`, `lazienka`, `sypialnia`, `przedpokoj`, `jadalnia`.
- Style: `nowoczesny`, `klasyczny`, `glamour`, `minimalizm`, `industrialny`, `boho`.

## 6. Rankingi TOP (silos afiliacyjny — /rankingi/)
Aktywne 4 (mapują się na 4 filary). Pusty ranking = strona `noindex` + poza sitemap, do czasu dodania treści.
- `/rankingi/plytki-wielkoformatowe/`
- `/rankingi/panele-winylowe-spc/`
- `/rankingi/baterie-lazienkowe-premium/`
- `/rankingi/blaty-kamienne-do-kuchni/`
- (później) `najlepsze-farby-premium`, `drzwi-bezprzylgowe`, `profile-led-oswietlenie`

## 7. Mapa URL (stan wdrożony)
```
/
/blog/
/blog/plytki/            /blog/plytki/{slug}/
/blog/podlogi/           /blog/podlogi/{slug}/
/blog/kamien-naturalny/  /blog/kamien-naturalny/{slug}/
/blog/armatura-i-ceramika/ /blog/armatura-i-ceramika/{slug}/
/rankingi/               /rankingi/{slug}/   (4 aktywne)
/wspolpraca/  /o-nas/  /kontakt/
/informacja-o-afiliacji/            (index)
/polityka-prywatnosci/  /regulamin/ (noindex — szablony do uzupełnienia)
404
```

## 8. Autor (E-E-A-T) — DO UZUPEŁNIENIA PRZED INDEKSACJĄ
Profil autora żyje w `src/data/author.ts` (pola `TODO:`). To fundament wiarygodności serwisu „prestige" —
wpisz REALNĄ osobę (imię, rola, 2–4 zdania bio, doświadczenie, profile `sameAs`). Nie publikuj fikcyjnej tożsamości.
Strona `/o-nas/` i schema `Person`/`Organization` czytają dane stąd automatycznie.
