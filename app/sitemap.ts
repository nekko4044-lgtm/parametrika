import type { MetadataRoute } from 'next'
import { CATEGORIES } from '@/lib/categories'

const BASE = 'https://parametrika.ae'
const LOCALES = ['en', 'ru', 'ar']

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/catalog', '/production', ...CATEGORIES.map((c: { slug: string }) => `/catalog/${c.slug}`)]

  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    for (const path of paths) {
      const languages = Object.fromEntries(
        LOCALES.map(l => [l, `${BASE}/${l}${path}`])
      )
      entries.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'monthly' : 'monthly',
        priority: path === '' ? 1 : path === '/catalog' ? 0.9 : 0.8,
        alternates: { languages },
      })
    }
  }

  return entries
}
