import type { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Process from '@/components/Process'
import ProductionGallery from '@/components/ProductionGallery'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { PRODUCTION_PHOTOS } from '@/lib/categories'

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
  const t = await getTranslations({ locale, namespace: 'production' })
  const base = 'https://parametrika.ae'

  const keywordsMap: Record<string, string> = {
    en: 'furniture production process, CNC milling, custom furniture manufacturing, handmade furniture dubai, bespoke furniture craftsmanship',
    ru: 'процесс производства мебели, CNC фрезеровка, авторское изготовление мебели, ручная работа дубай',
    ar: 'عملية الإنتاج, طحن CNC, التصنيع المخصص, الأثاث اليدوي دبي',
  }

  return {
    title: `${t('headline')} | Parametrika`,
    description: t('sub'),
    keywords: keywordsMap[locale] || '',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${base}/${locale}/production`,
      languages: Object.fromEntries(locales.map(l => [l, `${base}/${l}/production`])),
    },
    openGraph: {
      type: 'website',
      title: `${t('headline')} | Parametrika`,
      description: t('sub'),
      url: `${base}/${locale}/production`,
      siteName: 'Parametrika',
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
          alt: 'Parametrika - Production Process',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('headline')} | Parametrika`,
      description: t('sub'),
      images: ['/og.jpg'],
    },
  }
}

export default async function ProductionPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'production' })
  const base = 'https://parametrika.ae'

  const processLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t('headline'),
    description: t('sub'),
    url: `${base}/${locale}/production`,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Design & 3D Model',
        text: 'Every piece is born from a unique idea. The designer develops the parametric model in AutoCAD, accounting for the architecture of the space, individual dimensions and orthopedic principles.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'High-Precision CNC Milling',
        text: 'The finished model is fed to high-precision CNC equipment. Every lamel is cut from engineered solid wood with flawless accuracy.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Handmade Assembly',
        text: 'One master — one piece. Every element is shaped, sanded and assembled by a single craftsman from the first lamel to the final coat.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Structural Reinforcement',
        text: 'An internal system of concealed metal elements ensures exceptional strength and structural stability.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Premium Finishing',
        text: 'Multi-step sanding and the application of premium VITEC lacquer. The lacquer accentuates the natural grain of the wood.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Bespoke Packaging & Delivery',
        text: 'Every piece is wrapped in a bespoke cover, handmade to the exact contours of that specific piece. White-glove delivery and installation.',
      },
      {
        '@type': 'HowToStep',
        position: 7,
        name: 'Personal Service Care',
        text: 'Care for every piece continues after installation. Personal service maintenance ensures the furniture remains in perfect condition.',
      },
    ],
  }

  return (
    <main>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processLd) }} />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end px-6 md:px-16 pb-20 pt-36">
        <div className="absolute inset-0 overflow-hidden">
          {PRODUCTION_PHOTOS[0] && (
            <Image
              src={PRODUCTION_PHOTOS[0]}
              alt={t('headline')}
              fill
              className="object-cover object-center"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 to-ink" />
        </div>
        {/* Bottom bleed into content */}
        <div className="absolute bottom-0 left-0 right-0 h-28 md:h-40 bg-gradient-to-b from-transparent to-ink z-[2] pointer-events-none" />
        <div className="relative z-[2] max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[1px] bg-gold/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/70">
              {t('eyebrow')}
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-light text-cream leading-[1.05]">
            {t('headline')}
          </h1>
          <p className="mt-5 font-body font-light text-cream/55 text-[clamp(1rem,2vw,1.2rem)] max-w-xl leading-[1.8]">
            {t('sub')}
          </p>
        </div>
      </section>

      <ProductionGallery withHeading={false} />

      {/* Process — full 7-step */}
      <Process />

      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
