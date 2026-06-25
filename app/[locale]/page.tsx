import { unstable_setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import CategoryGrid from '@/components/CategoryGrid'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  const baseUrl = 'https://parametrika.ae'

  // Collection schema for flagship products
  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Parametrika - Bespoke Parametric Furniture Collections',
    url: `${baseUrl}/${locale}`,
    description:
      'Bespoke parametric furniture collections - tables, chairs, consoles and architectural panels - custom-made for UAE villas, hotels and signature spaces.',
    mainEntity: {
      '@type': 'Collection',
      name: 'Parametrika Collections',
      hasTopical: [
        {
          '@type': 'Product',
          name: 'Parametric Dining Tables',
          description: 'ZAHA, ZAHIR, VILAR - bespoke dining table collections',
          url: `${baseUrl}/${locale}/catalog/tables`,
          category: 'Furniture',
        },
        {
          '@type': 'Product',
          name: 'SAHARA Parametric Rocking Chair',
          description: 'Handmade parametric rocking chair with orthopedic design',
          url: `${baseUrl}/${locale}/catalog/chairs`,
          category: 'Furniture',
        },
        {
          '@type': 'Product',
          name: 'Parametric Consoles',
          description: 'Bespoke console tables with sculptural layered base',
          url: `${baseUrl}/${locale}/catalog/consoles`,
          category: 'Furniture',
        },
        {
          '@type': 'Product',
          name: 'Parametric Wood Wall Panels',
          description: 'CNC-milled architectural wood panels in custom patterns',
          url: `${baseUrl}/${locale}/catalog/wood-panels`,
          category: 'Architectural Materials',
        },
      ],
    },
  }

  return (
    <main>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <Hero />
      <Marquee />
      <About />
      <CategoryGrid />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
