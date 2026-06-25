import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import ProductPageClient from '@/components/ProductPageClient'
import { unstable_setRequestLocale } from 'next-intl/server'
import { PRODUCTS, getProduct, getProducts } from '@/lib/categories'

const locales = ['en', 'ru', 'ar']

function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
}

export function generateStaticParams() {
  return locales.flatMap(locale =>
    PRODUCTS.map(p => ({ locale, category: p.categorySlug, product: p.slug }))
  )
}

export async function generateMetadata({
  params: { locale, category, product: productSlug },
}: {
  params: { locale: string; category: string; product: string }
}): Promise<Metadata> {
  unstable_setRequestLocale(locale)
  const product = getProduct(category, productSlug)
  if (!product) return {}
  const tc = await getTranslations({ locale, namespace: 'cat' })
  const base = 'https://parametrika.ae'

  const metaTitle = `${product.name} — ${tc(`${category}.name`)} | Parametrika`
  const metaDescription = `${product.tagline}. ${tc(`${category}.tagline`)}. Bespoke crafted, handmade from engineered solid wood with premium finish.`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${product.name}, ${tc(`${category}.name`)}, bespoke furniture, custom furniture dubai, parametric design`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${base}/${locale}/catalog/${category}/${productSlug}`,
      languages: Object.fromEntries(
        locales.map(l => [l, `${base}/${l}/catalog/${category}/${productSlug}`])
      ),
    },
    openGraph: {
      type: 'website',
      title: metaTitle,
      description: metaDescription,
      url: `${base}/${locale}/catalog/${category}/${productSlug}`,
      siteName: 'Parametrika',
      images: product.cover
        ? [
            {
              url: product.cover,
              width: 1200,
              height: 630,
              alt: product.name,
              type: 'image/png',
            },
          ]
        : [
            {
              url: '/og.jpg',
              width: 1200,
              height: 630,
              alt: 'Parametrika - ' + product.name,
              type: 'image/jpeg',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: product.cover ? [product.cover] : ['/og.jpg'],
    },
  }
}

export default async function ProductPage({
  params: { locale, category, product: productSlug },
}: {
  params: { locale: string; category: string; product: string }
}) {
  unstable_setRequestLocale(locale)
  const product = getProduct(category, productSlug)
  if (!product) notFound()

  const allCategoryProducts = getProducts(category)
  const base = 'https://parametrika.ae'

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${base}/${locale}/catalog/${category}/${productSlug}`,
    name: product.name,
    description: product.tagline,
    url: `${base}/${locale}/catalog/${category}/${productSlug}`,
    image: product.cover || '/og.jpg',
    category: category === 'wood-panels' ? 'Architectural Materials' : 'Furniture',
    brand: {
      '@type': 'Brand',
      name: 'Parametrika',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Parametrika',
      url: base,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'AED',
      priceRange: 'Call for Price',
      availability: 'https://schema.org/MadeToOrder',
      seller: {
        '@type': 'Organization',
        name: 'Parametrika',
        url: base,
        telephone: '+971502541717',
      },
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${base}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Collections',
        item: `${base}/${locale}/catalog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category,
        item: `${base}/${locale}/catalog/${category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.name,
        item: `${base}/${locale}/catalog/${category}/${productSlug}`,
      },
    ],
  }

  return (
    <main>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbLd) }} />
      <ProductPageClient product={product} relatedProducts={allCategoryProducts} />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
