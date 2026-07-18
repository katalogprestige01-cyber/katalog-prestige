// Silos afiliacyjny /rankingi/ (§6 DECYZJE). Warstwa komercyjna, oddzielona od /blog/.
// Na start aktywne 4 rankingi mapujące się na 4 filary; reszta zaprojektowana (active=false).
// Treść rankingów (pozycje items[]) dodaje kolekcja `rankingi` — tu tylko meta i nawigacja hubu.
export interface RankingMeta {
  slug: string;
  title: string;
  description: string;
  relatedCategory: string; // slug filaru bloga (linkowanie w bok)
  active: boolean;
}

export const rankings: RankingMeta[] = [
  {
    slug: 'plytki-wielkoformatowe',
    title: 'Najlepsze płytki wielkoformatowe',
    description: 'Ranking płytek wielkoformatowych: gres i spieki. Porównanie formatów, wykończeń i zastosowań.',
    relatedCategory: 'plytki',
    active: true,
  },
  {
    slug: 'panele-winylowe-spc',
    title: 'Najlepsze panele winylowe SPC',
    description: 'Ranking paneli winylowych SPC: odporność, klasy ścieralności, montaż. Co wybrać do domu.',
    relatedCategory: 'podlogi',
    active: true,
  },
  {
    slug: 'baterie-lazienkowe-premium',
    title: 'Najlepsze baterie łazienkowe premium',
    description: 'Ranking baterii łazienkowych premium: design, jakość, marki. Przegląd modeli klasy wyższej.',
    relatedCategory: 'armatura-i-ceramika',
    active: true,
  },
  {
    slug: 'blaty-kamienne-do-kuchni',
    title: 'Najlepsze blaty kamienne do kuchni',
    description: 'Ranking blatów kamiennych: marmur, granit, konglomeraty, spieki. Trwałość vs estetyka.',
    relatedCategory: 'kamien-naturalny',
    active: true,
  },

  // --- Zaprojektowane, dołożymy później ---
  { slug: 'najlepsze-farby-premium', title: 'Najlepsze farby premium', description: 'Ranking farb premium: krycie, trwałość, paleta. Przegląd marek klasy wyższej.', relatedCategory: 'sciany-i-farby', active: false },
  { slug: 'drzwi-bezprzylgowe', title: 'Najlepsze drzwi bezprzylgowe', description: 'Ranking drzwi bezprzylgowych: estetyka, jakość, ościeżnice ukryte.', relatedCategory: 'drzwi-i-stolarka', active: false },
  { slug: 'profile-led-oswietlenie', title: 'Najlepsze profile LED', description: 'Ranking profili LED do oświetlenia dekoracyjnego: rodzaje, montaż, efekty.', relatedCategory: 'oswietlenie', active: false },
];

export const activeRankings = rankings.filter((r) => r.active);
export const ALL_RANKING_SLUGS = rankings.map((r) => r.slug) as [string, ...string[]];

export function getRanking(slug: string): RankingMeta | undefined {
  return rankings.find((r) => r.slug === slug);
}
