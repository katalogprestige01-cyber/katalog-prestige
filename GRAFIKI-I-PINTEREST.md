# Grafiki do artykułów + Pinterest — plan gotowy do wykonania

Zasada: **jedna grafika pozioma do artykułu** (hero) + **jeden pionowy pin na Pinterest** na każdy tekst.
Pin możesz zrobić z tego samego zdjęcia co hero (oszczędność czasu) — tylko w innym kadrze i z tekstem.

## Formaty (trzymaj się ich)
- **Hero w artykule:** 1600 × 900 px (proporcja 16:9), JPG, do ~250 KB.
- **Pin na Pinterest:** 1000 × 1500 px (proporcja 2:3), JPG/PNG. To format, który Pinterest lubi najbardziej.
- Na pinie zawsze **duży, czytelny tekst** u góry lub na dole (na Pinterest przegląda się kciukiem — tytuł musi krzyczeć).

## Gdzie zapisać i jak podpiąć pod artykuł
1. Wygeneruj/zrób grafikę w swoim narzędziu (Design/Canva albo generator AI — prompty niżej).
2. Zapisz hero jako plik w projekcie: `public/img/<slug>.jpg`
   (np. `public/img/plytki-wielkoformatowe.jpg`).
3. W nagłówku artykułu (górna sekcja między `---`) dopisz **dwie linie**:
   ```
   image: "/img/plytki-wielkoformatowe.jpg"
   imageAlt: "Wielkoformatowa płyta imitująca marmur na ścianie w salonie"
   ```
4. Zapisz, przebuduj (`npm run dev`) — zdjęcie pojawi się jako og:image i w schema artykułu.

---

## ARTYKUŁ 1 — Płytki wielkoformatowe (slug: plytki-wielkoformatowe-jak-wybrac)

**Hero (16:9) — prompt do generatora AI (wklej po angielsku):**
> Photorealistic editorial interior photo, modern luxury living room, one large-format marble-look
> porcelain slab covering the wall behind a wall-mounted TV, seamless surface with almost no grout
> lines, warm natural daylight from the side, minimalist furniture, beige and warm grey palette,
> shallow depth of field, architectural digest style, no text. 16:9.

**Pin (2:3) — ten sam kadr, dodaj tekst na górze:**
- Nagłówek na pinie: **„PŁYTKI WIELKOFORMATOWE — jak wybrać?"**
- Podpis mniejszy: „Rozmiar, grubość i pułapki montażu"
- Logo/URL na dole: katalog-prestige.pl

**Opisy pinów (skopiuj do Pinteresta, 3 warianty):**
1. *Płytki wielkoformatowe — jak wybrać, żeby nie przepłacić.* Rozmiar, grubość i miejsca, gdzie wielki format naprawdę się broni. Poradnik krok po kroku.
2. *Bezfugowa ściana jak z katalogu.* Sprawdź, jaki gres i spiek wybrać do salonu i łazienki — i gdzie wielki format narobi kłopotu.
3. *Marmur na ścianie bez fug?* Wielkoformatowe płytki potrafią zrobić efekt „wow" — o ile znasz te 3 parametry. Wejdź i przeczytaj.

---

## ARTYKUŁ 2 — Blat kamienny (slug: blat-kuchenny-kamien-marmur-granit-konglomerat)

**Hero (16:9) — prompt AI:**
> Photorealistic editorial kitchen photo, premium kitchen island with a white marble countertop with
> subtle grey veining, soft daylight, matte cabinets in warm greige, brass faucet, a lemon and a
> chopping board on the counter, modern classic style, architectural digest look, no text. 16:9.

**Pin (2:3) — tekst na dole:**
- Nagłówek: **„MARMUR, GRANIT czy KONGLOMERAT?"**
- Podpis: „Który blat do kuchni wybrać"
- URL: katalog-prestige.pl

**Opisy pinów:**
1. *Blat do kuchni: marmur, granit czy konglomerat?* Który kamień wytrzyma cytrynę, gorący garnek i lata gotowania. Porównanie w tabeli.
2. *Marmurowy blat — piękny, ale kapryśny.* Zanim się zakochasz, sprawdź, co plami, co się rysuje i dla kogo to zły pomysł.
3. *Kuchnia premium zaczyna się od blatu.* 3 kamienie, 3 charaktery — wybierz świadomie, nie „na oko".

---

## ARTYKUŁ 3 — Panele winylowe SPC (slug: panele-winylowe-spc-jak-wybrac)

**Hero (16:9) — prompt AI:**
> Photorealistic editorial interior photo, bright modern living room with wood-look SPC vinyl flooring,
> warm oak plank tone with subtle V-groove edges, sunlight casting soft shadows across the floor,
> minimalist Scandinavian furniture, cozy neutral palette, close attention to the floor texture,
> no text. 16:9.

**Pin (2:3) — tekst na górze:**
- Nagłówek: **„PANELE WINYLOWE SPC"**
- Podpis: „5 parametrów, na które musisz patrzeć"
- URL: katalog-prestige.pl

**Opisy pinów:**
1. *Panele winylowe SPC — na co uważać przy wyborze.* 5 parametrów, których sprzedawca Ci nie powie. Nie przepłacaj za sam ładny dekor.
2. *Wodoodporna podłoga jak drewno?* SPC to hit — ale tylko z dobrą warstwą użytkową i klasą 33. Sprawdź, jak nie dać się nabrać.
3. *Cicha, ciepła, wodoodporna.* Dlaczego winyl SPC wygrywa z laminatem w kuchni i przedpokoju — i którą deskę wybrać.

---

## Skróty stylu (żeby wszystkie grafiki wyglądały spójnie)
- Paleta: ciepła biel, greige, szarości, akcent mosiądzu/złota (pasuje do „prestige").
- Światło: naturalne, boczne, miękkie cienie. Zero sztucznego HDR.
- Zdjęcia bez ludzi i bez tekstu (tekst dokładasz dopiero na pinie).
- Font na pinie: szeryfowy nagłówek (elegancki), bezszeryfowy podpis (czytelny). Wersaliki na nagłówku.
