import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absUrl } from '../data/site.mjs';
import { activeCategories } from '../data/categories';

// Sitemap z JEDNEGO źródła tras (§6.3). Konwencja ukośnika = 'always'.
// 0 wpisów draft. Pełne URL-e absolutne = canonical = og:url.
export const GET: APIRoute = async () => {
  // Strony noindex (polityka, regulamin) celowo POZA sitemap — brak mieszanych sygnałów.
  const staticPaths = [
    '/', '/blog/', '/rankingi/', '/wspolpraca/', '/o-nas/', '/kontakt/',
    '/informacja-o-afiliacji/',
  ];

  const categoryPaths = activeCategories.map((c) => `/blog/${c.slug}/`);

  const blog = (await getCollection('blog', ({ data }) => data.draft !== true))
    .map((e) => ({
      loc: absUrl(`/blog/${e.data.category}/${e.slug}/`),
      lastmod: (e.data.updatedDate ?? e.data.pubDate).toISOString(),
    }));

  // Wpisy rankingów w sitemap tylko gdy mają treść (puste rankingi = noindex, poza sitemap).
  const rankingi = (await getCollection('rankingi', ({ data }) => data.draft !== true))
    .map((e) => ({
      loc: absUrl(`/rankingi/${e.slug}/`),
      lastmod: (e.data.updatedDate ?? e.data.pubDate).toISOString(),
    }));

  const staticEntries = [...staticPaths, ...categoryPaths].map((p) => ({
    loc: absUrl(p),
    lastmod: undefined as string | undefined,
  }));

  // Deduplikacja (hub rankingu mógłby się powtórzyć)
  const seen = new Set<string>();
  const all = [...staticEntries, ...blog, ...rankingi].filter((e) => {
    if (seen.has(e.loc)) return false;
    seen.add(e.loc);
    return true;
  });

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    all
      .map((e) =>
        `  <url><loc>${e.loc}</loc>` +
        (e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : '') +
        `</url>`
      )
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
