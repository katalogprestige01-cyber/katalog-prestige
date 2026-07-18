// Pojedyncze źródło prawdy o marce/domenie. Zmiana domeny = tylko tu.
export const SITE_URL = 'https://katalog-prestige.pl/';
export const SITE_NAME = 'Katalog Prestige';
export const SITE_TAGLINE = 'Katalog materiałów wykończeniowych klasy premium';
export const SITE_DESCRIPTION =
  'Ekspercki katalog wykończenia wnętrz premium: kamień naturalny, wielkoformaty, ' +
  'armatura designerska. Konkret, inspiracja i rankingi TOP.';
export const LOCALE = 'pl_PL';
export const LANG = 'pl';

// Buduje absolutny URL z trailing slash z dowolnej ścieżki.
export function absUrl(path = '/') {
  const base = SITE_URL.replace(/\/+$/, '');
  let p = path.startsWith('/') ? path : '/' + path;
  if (!p.endsWith('/') && !p.includes('.')) p += '/';
  return base + p;
}
