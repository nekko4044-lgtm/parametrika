import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'
import PageLoader from '@/components/PageLoader'
import VideoBackground from '@/components/VideoBackground'
import ScrollToTop from '@/components/ScrollToTop'

const locales = ['en', 'ru', 'ar']

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  unstable_setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'seo' })
  const base = 'https://parametrika.ae'

  return {
    metadataBase: new URL(base),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        en: `${base}/en`,
        ru: `${base}/ru`,
        ar: `${base}/ar`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Parametrika',
      title: t('title'),
      description: t('description'),
      url: `${base}/${locale}`,
      locale: locale === 'ar' ? 'ar_AE' : locale === 'ru' ? 'ru_RU' : 'en_US',
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
          alt: 'Parametrika - Bespoke Parametric Furniture',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og.jpg'],
      creator: '@newera_uae',
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale)) notFound()
  unstable_setRequestLocale(locale)

  const messages = await getMessages({ locale })
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    '@id': 'https://parametrika.ae',
    name: 'Parametrika',
    url: 'https://parametrika.ae',
    description:
      'Bespoke parametric furniture and architectural materials. The materials house of New Era Exclusive, Dubai.',
    areaServed: ['AE', 'SA', 'KW', 'QA', 'BH', 'OM'],
    sameAs: [
      'https://www.instagram.com/newera_uae',
      'https://www.instagram.com/newera_uae?igsh=cjlwdnF3bTk5MDQ2',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'New Era Exclusive',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office 101, Al Zarouni Business Centre, Al Barsha',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: null,
      addressCountry: 'AE',
    },
    telephone: '+971502541717',
    email: 'contact@parametrika.ae',
    priceRange: '$$$',
    serviceArea: {
      '@type': 'City',
      name: 'Dubai',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+971502541717',
      areaServed: 'AE',
      availableLanguage: ['en', 'ru', 'ar'],
    },
    knowsAbout: [
      'Parametric Furniture',
      'Bespoke Interior Design',
      'CNC Milling',
      'Custom Wood Furniture',
      'Architectural Materials',
    ],
  }

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {locale === 'ar' && (
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500&display=swap"
            rel="stylesheet"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <ScrollToTop />
        <VideoBackground />
        <PageLoader />
        <SmoothScroll />
        <Cursor />
        <NextIntlClientProvider messages={messages}>
          <div className="relative z-[10]">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
