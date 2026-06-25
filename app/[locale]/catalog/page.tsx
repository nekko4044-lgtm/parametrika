import type { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import CategoryGrid from '@/components/CategoryGrid'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { CATEGORIES } from '@/lib/categories'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  unstable_setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'catalog' })
  const base = 'https://parametrika.ae'
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords:
      locale === 'en'
        ? 'bespoke furniture collections, parametric tables, custom chairs, architectural consoles, luxury furniture dubai'
        : locale === 'ru'
          ? 'авторские коллекции мебели, параметрические столы, дизайнерские стулья, консоли, элитная мебель дубай'
          : 'مجموعات الأثاث المخصصة, الطاولات البارامترية, الكراسي المخصصة, الكونسولات, أثاث فاخر دبي',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${base}/${locale}/catalog`,
      languages: {
        en: `${base}/en/catalog`,
        ru: `${base}/ru/catalog`,
        ar: `${base}/ar/catalog`,
      },
    },
    openGraph: {
      type: 'website',
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: `${base}/${locale}/catalog`,
      siteName: 'Parametrika',
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
          alt: 'Parametrika - Collections',
          type: 'image/jpeg',
        },
      ],
    },
  }
}

export default async function CatalogPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const tc = await getTranslations({ locale, namespace: 'cat' })
  const base = 'https://parametrika.ae'

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: CATEGORIES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: tc(`${c.slug}.name`),
      url: `${base}/${locale}/catalog/${c.slug}`,
    })),
  }

  return (
    <main>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      {/* spacing for fixed navbar */}
      <div className="pt-32 md:pt-40" />
      <CategoryGrid />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
