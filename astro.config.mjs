import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/data/site.mjs';

// Zasada nadrzędna: jeden URL = jedna wersja = 200 = canonical = og:url = sitemap.
// trailingSlash: 'always' ustawia konwencję w całym łańcuchu (§6 skill).
export default defineConfig({
  site: SITE_URL,            // 'https://katalog-prestige.pl/'
  trailingSlash: 'always',
  build: {
    format: 'directory',     // /blog/plytki/  zamiast  /blog/plytki.html
  },
});
