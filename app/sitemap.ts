import type { MetadataRoute } from 'next'
import { CATEGORIES, PRODUCTS } from '@/lib/categories'
import { getAllArticleSlugs } from '@/lib/articles'

const BASE = 'https://parametrika.ae'
const LOCALES = ['en', 'ru', 'ar']

// The static export serves the canonical URLs with trailing slashes. Keep the
// sitemap and hreflang URLs on those final, indexable addresses too.
function canonicalUrl(locale: string, path: string): string {
  return `${BASE}/${locale}${path}/`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articleSlugs = getAllArticleSlugs()

  const productPaths = PRODUCTS.map(p => `/catalog/${p.categorySlug}/${p.slug}`)
  const journalPaths = ['/journal', ...articleSlugs.map(s => `/journal/${s}`)]

  const paths: { path: string; priority: number }[] = [
    { path: '',            priority: 1.0  },
    { path: '/catalog',   priority: 0.9  },
    { path: '/journal',   priority: 0.85 },
    ...CATEGORIES.map((c: { slug: string }) => ({ path: `/catalog/${c.slug}`, priority: 0.8 })),
    { path: '/production', priority: 0.75 },
    ...productPaths.map(p => ({ path: p, priority: 0.7 })),
    ...articleSlugs.map(s => ({ path: `/journal/${s}`, priority: 0.7 })),
  ]

  // Deduplicate (journal index already included above, filter from journalPaths)
  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    for (const { path, priority } of paths) {
      const languages = Object.fromEntries(
        LOCALES.map(l => [l, canonicalUrl(l, path)])
      )
      entries.push({
        url: canonicalUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority,
        alternates: { languages },
      })
    }
  }

  return entries
}
