import type { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { ARTICLES } from '@/lib/articles'
import JournalList from '@/components/JournalList'

const locales = ['en', 'ru', 'ar']

function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  unstable_setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'journal' })
  const base = 'https://parametrika.ae'

  const title = `${t('headline')} | Parametrika`
  const description =
    locale === 'en'
      ? 'Editorial writing on parametric design, craftsmanship, and the material processes behind Parametrika furniture.'
      : locale === 'ru'
        ? 'Редакционные материалы о параметрическом дизайне, мастерстве и процессах производства мебели Parametrika.'
        : 'مقالات تحريرية حول التصميم البارامتري والحرفية والعمليات المادية وراء أثاث Parametrika.'

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${base}/${locale}/journal`,
      languages: Object.fromEntries(locales.map(l => [l, `${base}/${l}/journal`])),
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${base}/${locale}/journal`,
      siteName: 'Parametrika',
      images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Parametrika Journal', type: 'image/jpeg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.jpg'],
    },
  }
}

export default async function JournalPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'journal' })

  const isRtl = locale === 'ar'

  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `Parametrika ${t('eyebrow')}`,
    description: t('headline'),
    url: `https://parametrika.ae/${locale}/journal`,
    blogPost: ARTICLES.map(a => ({
      '@type': 'BlogPosting',
      headline: a[locale as 'en' | 'ru' | 'ar'].title,
      description: a[locale as 'en' | 'ru' | 'ar'].excerpt,
      datePublished: a.publishedAt,
      url: `https://parametrika.ae/${locale}/journal/${a.slug}`,
    })),
  }

  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <main dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(blogLd) }}
      />

      {/* Hero header */}
      <section className="pt-36 pb-16 px-6 md:px-16 max-w-6xl mx-auto w-full">
        <div className={`flex items-center gap-3 mb-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="w-6 h-[1px] bg-gold/50" />
          <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/70">
            {t('eyebrow')}
          </span>
        </div>
        <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light text-cream leading-[1.05] max-w-3xl">
          {t('headline')}
        </h1>
      </section>

      {/* Gold hairline */}
      <div className="px-6 md:px-16 max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Article list — client component for reveal animations */}
      <section className="px-6 md:px-16 max-w-6xl mx-auto w-full pb-24">
        <JournalList
          articles={sorted}
          locale={locale}
          minRead={t('minRead')}
          readMore={t('readMore')}
        />
      </section>

      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
