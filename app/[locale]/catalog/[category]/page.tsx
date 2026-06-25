import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import CategoryHero from '@/components/CategoryHero'
import CategorySpecs from '@/components/CategorySpecs'
import CategoryTabsClient from '@/components/CategoryTabsClient'
import Process from '@/components/Process'
import Related from '@/components/Related'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import InlineProductViewer from '@/components/InlineProductViewer'
import { CATEGORIES, getCategory, getProducts } from '@/lib/categories'

const locales = ['en', 'ru', 'ar']

export function generateStaticParams() {
  return locales.flatMap(locale =>
    CATEGORIES.map(c => ({ locale, category: c.slug }))
  )
}

export async function generateMetadata({
  params: { locale, category },
}: {
  params: { locale: string; category: string }
}): Promise<Metadata> {
  unstable_setRequestLocale(locale)
  const cat = getCategory(category)
  if (!cat) return {}
  const tc = await getTranslations({ locale, namespace: 'cat' })
  const base = 'https://parametrika.ae'

  // Dynamic keywords based on category and locale
  const keywordsMap: Record<string, Record<string, string>> = {
    tables: {
      en: 'parametric dining tables, bespoke coffee tables, custom office tables, bar tables dubai, luxury furniture tables',
      ru: 'параметрические столы, авторские обеденные столы, кофейные столики, офисные столы дубай',
      ar: 'الطاولات البارامترية, الطاولات المخصصة, طاولات المكتب الفاخرة, طاولات البار في دبي',
    },
    chairs: {
      en: 'SAHARA parametric rocking chair, bespoke lounge chairs, orthopedic design furniture dubai',
      ru: 'параметрический стул SAHARA, дизайнерские кресла, ортопедическая мебель дубай',
      ar: 'كرسي SAHARA البارامتري, الكراسي المخصصة, أثاث تصميم ديناميكي دبي',
    },
    consoles: {
      en: 'parametric console tables, bespoke entry consoles, architectural consoles dubai, entryway furniture',
      ru: 'параметрические консоли, авторские консольные столы, архитектурная мебель дубай',
      ar: 'طاولات الكونسول البارامترية, الكونسولات المخصصة, أثاث المدخل الفاخر',
    },
    nightstands: {
      en: 'parametric nightstands, bespoke bedroom furniture, floating nightstands dubai, luxury bedroom design',
      ru: 'параметрические тумбочки, авторская спальная мебель, прикроватные столики дубай',
      ar: 'منضدات السرير البارامترية, أثاث غرفة النوم المخصصة, منضدات فاخرة دبي',
    },
    'wood-panels': {
      en: 'parametric wood wall panels, architectural wall panels dubai, custom wall design, CNC wood panels',
      ru: 'параметрические деревянные панели, архитектурные панели стен, дизайн стен дубай',
      ar: 'لوحات الجدران الخشبية البارامترية, لوحات معمارية مخصصة, تصميم جدران فاخر',
    },
  }

  const keywords = keywordsMap[category]?.[locale] || ''

  return {
    title: tc(`${category}.metaTitle`),
    description: tc(`${category}.metaDescription`),
    keywords,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${base}/${locale}/catalog/${category}`,
      languages: {
        en: `${base}/en/catalog/${category}`,
        ru: `${base}/ru/catalog/${category}`,
        ar: `${base}/ar/catalog/${category}`,
      },
    },
    openGraph: {
      type: 'website',
      title: tc(`${category}.metaTitle`),
      description: tc(`${category}.metaDescription`),
      url: `${base}/${locale}/catalog/${category}`,
      siteName: 'Parametrika',
      images: cat.image
        ? [
            {
              url: cat.image,
              width: 1200,
              height: 630,
              alt: tc(`${category}.name`),
              type: 'image/jpeg',
            },
          ]
        : [
            {
              url: '/og.jpg',
              width: 1200,
              height: 630,
              alt: 'Parametrika - ' + tc(`${category}.name`),
              type: 'image/jpeg',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tc(`${category}.metaTitle`),
      description: tc(`${category}.metaDescription`),
      images: cat.image ? [cat.image] : ['/og.jpg'],
    },
  }
}

export default async function CategoryPage({
  params: { locale, category },
}: {
  params: { locale: string; category: string }
}) {
  const cat = getCategory(category)
  if (!cat) notFound()
  unstable_setRequestLocale(locale)

  const tc = await getTranslations({ locale, namespace: 'cat' })
  const tb = await getTranslations({ locale, namespace: 'breadcrumb' })
  const base = 'https://parametrika.ae'

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: tb('home'), item: `${base}/${locale}` },
      { '@type': 'ListItem', position: 2, name: tb('catalog'), item: `${base}/${locale}/catalog` },
      { '@type': 'ListItem', position: 3, name: tc(`${category}.name`), item: `${base}/${locale}/catalog/${category}` },
    ],
  }

  const productCategoryLd = {
    '@context': 'https://schema.org',
    '@type': 'ProductCollection',
    name: tc(`${category}.name`),
    url: `${base}/${locale}/catalog/${category}`,
    description: tc(`${category}.metaDescription`),
    mainEntity: {
      '@type': 'Product',
      name: tc(`${category}.name`),
      description: tc(`${category}.metaDescription`),
      category: category === 'wood-panels' ? 'Architectural Materials' : 'Furniture',
      manufacturer: {
        '@type': 'Organization',
        name: 'Parametrika',
        url: `${base}`,
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'AED',
        priceRange: 'Call for Price',
        availability: 'https://schema.org/MadeToOrder',
      },
    },
  }

  const hasSubTypes = cat.subTypes && cat.subTypes.length > 0

  return (
    <main>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCategoryLd) }}
      />

      <CategoryHero slug={cat.slug} image={cat.image} hasPhotos={cat.hasPhotos} />

      {/* Content fades in from ink — matches hero's bottom gradient */}
      <div style={{ background: 'linear-gradient(to bottom, #080808 0%, transparent 320px)' }}>
        {hasSubTypes ? (
          /* Tabbed layout for tables / chairs */
          <CategoryTabsClient
            categorySlug={cat.slug}
            subTypes={cat.subTypes!}
            allProducts={getProducts(cat.slug)}
          />
        ) : (
          /* Flat layout for consoles / wood-panels */
          <>
            {getProducts(cat.slug).map(product => (
              <InlineProductViewer key={product.slug} product={product} />
            ))}
            <CategorySpecs slug={cat.slug} specs={cat.specs} applications={cat.applications} />
          </>
        )}
      </div>

      {cat.hasProcess && <Process />}
      <Related slug={cat.slug} />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
