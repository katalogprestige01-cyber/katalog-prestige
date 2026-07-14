import { defineCollection, z } from 'astro:content';
import { ALL_CATEGORY_SLUGS } from '../data/categories';

// Kontrakt danych (§4 skill). Build wywala się przy braku/niepoprawnym polu —
// to celowe: lepiej błąd buildu niż zły wpis w indeksie.
const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().min(20).max(70),           // z frazą
      description: z.string().min(60).max(160),      // meta description
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(ALL_CATEGORY_SLUGS),          // musi być z listy kategorii
      tags: z.array(z.string()).default([]),
      author: z.string().default('default'),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      draft: z.boolean().default(false),             // draft NIE trafia do buildu ani sitemap
    }),
});

const rankingItem = z.object({
  name: z.string(),
  description: z.string(),
  affiliateUrl: z.string().url(),
  priceApprox: z.string().optional(),
  pros: z.array(z.string()).default([]),
  cons: z.array(z.string()).default([]),
});

const rankingi = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(20).max(70),
    description: z.string().min(60).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('default'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    items: z.array(rankingItem).min(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, rankingi };
