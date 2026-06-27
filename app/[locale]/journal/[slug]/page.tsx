import type { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { getArticle, getAllArticleSlugs, ARTICLES, type ArticleSection } from '@/lib/articles'

const locales = ['en', 'ru', 'ar']

function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')
}

export function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  const params: { locale: string; slug: string }[] = []
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }
  return params
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  unstable_setRequestLocale(locale)
  const article = getArticle(slug)
  if (!article) return {}

  const content = article[locale as 'en' | 'ru' | 'ar']
  const base = 'https://parametrika.ae'

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.excerpt,
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: 'Parametrika', url: 'https://parametrika.ae' },
    publisher: { '@type': 'Organization', name: 'Parametrika', url: 'https://parametrika.ae' },
    inLanguage: locale === 'ar' ? 'ar-AE' : locale === 'ru' ? 'ru-RU' : 'en-US',
  }

  return {
    title: `${content.title} | Parametrika`,
    description: content.excerpt,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${base}/${locale}/journal/${slug}`,
      languages: Object.fromEntries(locales.map(l => [l, `${base}/${l}/journal/${slug}`])),
    },
    openGraph: {
      type: 'article',
      title: `${content.title} | Parametrika`,
      description: content.excerpt,
      url: `${base}/${locale}/journal/${slug}`,
      siteName: 'Parametrika',
      publishedTime: article.publishedAt,
      images: [{ url: '/og.jpg', width: 1200, height: 630, alt: content.title, type: 'image/jpeg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.title} | Parametrika`,
      description: content.excerpt,
      images: ['/og.jpg'],
    },
    other: {
      'application/ld+json': safeJsonLd(articleLd),
    },
  }
}

function formatDate(iso: string, locale: string): string {
  const date = new Date(iso)
  const localeMap: Record<string, string> = { en: 'en-GB', ru: 'ru-RU', ar: 'ar-AE' }
  return date.toLocaleDateString(localeMap[locale] || 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function RenderSection({ section }: { section: ArticleSection }) {
  if (section.type === 'paragraph') {
    return (
      <p className="font-body text-cream/75 text-[15px] leading-[1.85] mb-6">
        {section.content as string}
      </p>
    )
  }

  if (section.type === 'h2') {
    return (
      <h2 className="font-display text-2xl font-light text-cream/90 mt-12 mb-4 border-l-2 border-gold/50 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
        {section.content as string}
      </h2>
    )
  }

  if (section.type === 'h3') {
    return (
      <h3 className="font-display text-xl font-light text-cream/80 mt-8 mb-3">
        {section.content as string}
      </h3>
    )
  }

  if (section.type === 'list') {
    return (
      <ul className="mb-6 space-y-3">
        {(section.content as string[]).map((item, i) => (
          <li key={i} className="font-body text-cream/70 text-[14px] leading-relaxed flex gap-3 rtl:flex-row-reverse">
            <span className="text-gold/60 flex-shrink-0 mt-[3px]">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  return null
}

export default async function ArticlePage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string }
}) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'journal' })

  const article = getArticle(slug)
  if (!article) notFound()

  const content = article[locale as 'en' | 'ru' | 'ar']
  const isRtl = locale === 'ar'
  const base = 'https://parametrika.ae'

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.excerpt,
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: 'Parametrika', url: 'https://parametrika.ae' },
    publisher: { '@type': 'Organization', name: 'Parametrika', url: 'https://parametrika.ae' },
    inLanguage: locale === 'ar' ? 'ar-AE' : locale === 'ru' ? 'ru-RU' : 'en-US',
  }

  // Other articles for "More from Parametrika"
  const otherArticles = ARTICLES.filter(a => a.slug !== slug)

  return (
    <main dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleLd) }}
      />

      {/* Article header */}
      <article className="pt-36 pb-24 px-6 md:px-16 max-w-5xl mx-auto w-full">

        {/* Back link */}
        <Link
          href={`/${locale}/journal`}
          className={`inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.2em] text-gold/60 hover:text-gold/90 transition-colors duration-300 mb-10 ${isRtl ? 'flex-row-reverse' : ''}`}
        >
          <span className={`transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}>←</span>
          {t('backToJournal')}
        </Link>

        {/* Category + date */}
        <div className={`flex items-center gap-4 mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <span className="font-body text-[10px] uppercase tracking-[0.22em] text-gold/70 bg-gold/10 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="font-body text-[12px] text-cream/35">
            {formatDate(article.publishedAt, locale)}
          </span>
          <span className="font-body text-[12px] text-cream/30">
            {article.readingTime} {t('minRead')}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-cream leading-[1.1] mb-6 max-w-3xl">
          {content.title}
        </h1>

        {/* Excerpt */}
        <p className="font-body text-[clamp(1rem,1.5vw,1.1rem)] text-cream/55 italic leading-[1.7] mb-12 max-w-2xl">
          {content.excerpt}
        </p>

        {/* Gold hairline */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />

        {/* Article body */}
        <div className="max-w-2xl mx-auto">
          {content.sections.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}
        </div>

        {/* End hairline */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />

          {/* More from Parametrika */}
          {otherArticles.length > 0 && (
            <div>
              <div className={`flex items-center gap-3 mb-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-6 h-[1px] bg-gold/50" />
                <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/70">
                  {t('eyebrow')}
                </span>
              </div>
              <div className="space-y-0">
                {otherArticles.map(a => {
                  const otherContent = a[locale as 'en' | 'ru' | 'ar']
                  return (
                    <Link
                      key={a.slug}
                      href={`/${locale}/journal/${a.slug}`}
                      className="group flex items-start justify-between gap-6 py-6 border-b border-white/[0.07] hover:border-gold/20 transition-colors duration-400"
                    >
                      <div className={`flex-1 ${isRtl ? 'text-right' : ''}`}>
                        <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gold/50 mb-2">
                          {a.category}
                        </p>
                        <h3 className="font-display text-lg font-light text-cream/80 group-hover:text-cream transition-colors duration-300 leading-snug">
                          {otherContent.title}
                        </h3>
                      </div>
                      <span className={`text-cream/20 group-hover:text-gold/60 transition-all duration-300 text-sm flex-shrink-0 mt-1 ${isRtl ? 'rotate-180' : 'group-hover:translate-x-1'}`}>
                        →
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </article>

      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
