import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://parametrika.ae/sitemap.xml',
    host: 'https://parametrika.ae',
  }
}
