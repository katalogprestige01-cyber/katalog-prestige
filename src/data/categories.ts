// Oś główna silosów = ELEMENT / MATERIAŁ WYKOŃCZENIA (§3 DECYZJE).
// Wszystkie 8 slugów są zdefiniowane (enum w content/config.ts je waliduje),
// ale na start AKTYWNE są 4 filary (start wąsko-głęboko). Reszta: active=false
// — URL zaprojektowany, hub pojawi się gdy dołożymy treść. Slug nie zmienia się po indeksacji.
export interface Category {
  slug: string;
  title: string;        // H1 huba
  navLabel: string;
  description: string;   // meta description huba (≤160 zn.)
  intro: string;         // krótki opis silosu na hubie
  active: boolean;
}

export const categories: Category[] = [
  {
    slug: 'plytki',
    title: 'Płytki i okładziny',
    navLabel: 'Płytki',
    description:
      'Płytki i okładziny premium: gres wielkoformatowy, spieki kwarcowe, imitacje marmuru i kamienia. Poradniki, porównania i inspiracje.',
    intro:
      'Gres, wielkoformaty, spieki kwarcowe, imitacje marmuru, kamienia i drewna, mozaiki. Wszystko, co powinieneś wiedzieć przed wyborem okładziny.',
    active: true,
  },
  {
    slug: 'podlogi',
    title: 'Podłogi',
    navLabel: 'Podłogi',
    description:
      'Podłogi premium: deska warstwowa, parkiet, panele winylowe i SPC, mikrocement, żywica. Trwałość, montaż i estetyka bez kompromisów.',
    intro:
      'Deska warstwowa, parkiet, panele winylowe/SPC, mikrocement, żywica. Jak wybrać podłogę, która wytrzyma lata i dobrze wygląda.',
    active: true,
  },
  {
    slug: 'kamien-naturalny',
    title: 'Kamień naturalny i blaty',
    navLabel: 'Kamień',
    description:
      'Kamień naturalny i blaty premium: marmur, trawertyn, granit, konglomeraty, parapety. Wyróżnik prestiżowy wykończenia wnętrz.',
    intro:
      'Marmur, trawertyn, granit, konglomeraty, blaty i parapety. Materiały, które nadają wnętrzu klasę — i jak się nimi zaopiekować.',
    active: true,
  },
  {
    slug: 'armatura-i-ceramika',
    title: 'Armatura i ceramika',
    navLabel: 'Armatura',
    description:
      'Armatura i ceramika sanitarna premium: baterie designerskie, wanny wolnostojące, umywalki, kabiny. Łazienka klasy premium.',
    intro:
      'Baterie, ceramika sanitarna, kabiny, umywalki, wanny wolnostojące. Jak skomponować łazienkę, która wygląda i działa jak z katalogu.',
    active: true,
  },

  // --- Zaprojektowane, dołożymy później (start wąsko-głęboko) ---
  {
    slug: 'sciany-i-farby',
    title: 'Ściany i farby',
    navLabel: 'Ściany i farby',
    description:
      'Ściany i farby premium: farby dekoracyjne, tynki, tapety, panele i lamele ścienne, beton architektoniczny.',
    intro: 'Farby premium, tynki dekoracyjne, tapety, panele/lamele ścienne, beton architektoniczny.',
    active: false,
  },
  {
    slug: 'drzwi-i-stolarka',
    title: 'Drzwi i stolarka',
    navLabel: 'Drzwi i stolarka',
    description:
      'Drzwi i stolarka premium: drzwi wewnętrzne, ukryte ościeżnice, listwy przypodłogowe, boazeria.',
    intro: 'Drzwi wewnętrzne, ukryte ościeżnice, listwy przypodłogowe, boazeria.',
    active: false,
  },
  {
    slug: 'oswietlenie',
    title: 'Oświetlenie',
    navLabel: 'Oświetlenie',
    description:
      'Oświetlenie premium: oświetlenie dekoracyjne, profile LED, lampy designerskie, scenariusze światła.',
    intro: 'Oświetlenie dekoracyjne, profile LED, lampy designerskie, scenariusze światła.',
    active: false,
  },
  {
    slug: 'sztukateria',
    title: 'Sztukateria i detale',
    navLabel: 'Sztukateria',
    description:
      'Sztukateria i detale premium: rozety, gzymsy, listwy sufitowe, sztukateria elewacyjna.',
    intro: 'Rozety, gzymsy, listwy sufitowe, sztukateria elewacyjna, detal premium.',
    active: false,
  },
];

export const activeCategories = categories.filter((c) => c.active);
export const ALL_CATEGORY_SLUGS = categories.map((c) => c.slug) as [string, ...string[]];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

// Oś druga = TAGI (pomieszczenia + style), NIE druga taksonomia URL (§3 DECYZJE).
export const ROOM_TAGS = ['salon', 'kuchnia', 'lazienka', 'sypialnia', 'przedpokoj', 'jadalnia'];
export const STYLE_TAGS = ['nowoczesny', 'klasyczny', 'glamour', 'minimalizm', 'industrialny', 'boho'];
