import { unstable_setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import CategoryGrid from '@/components/CategoryGrid'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')
}

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

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is parametric furniture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Parametric furniture is designed using computational algorithms that generate complex organic forms — curves, layers and geometries impossible to produce by hand alone. At Parametrika, each piece begins as a 3D parametric model, then is CNC-milled from engineered solid wood and handcrafted by a master craftsman.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Parametrika located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Parametrika is based at Office 101, Al Zarouni Business Centre, Al Barsha, Dubai, UAE.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you deliver outside Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We serve the entire UAE and all GCC countries — Saudi Arabia, Qatar, Kuwait, Bahrain and Oman — with white-glove delivery and professional installation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does bespoke parametric furniture cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Parametrika pieces are custom-made to order. Pricing depends on the collection, dimensions and specification. We do not display prices online — contact us for a personal proposal.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to make a piece?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lead times vary by piece complexity and current studio schedule. Contact us with your project details and we will provide a precise timeline.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I see photos of completed client projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Client projects are covered by NDA. Production photography and product imagery is available on this website. Additional project photography may be shared under confidentiality agreement upon request.',
        },
      },
      {
        '@type': 'Question',
        name: 'What materials are used in Parametrika furniture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use multi-layer engineered solid wood, CNC-milled to precision, with internal metal reinforcement for structural integrity. The finish is a 4-stage premium lacquer process: primer, sanding, base coat, and protective topcoat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Parametrika furniture suitable for outdoor use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Parametrika furniture is designed and finished for both indoor and outdoor environments including terraces, pool areas and lounge spaces, adapted for UAE heat, UV exposure and humidity.',
        },
      },
    ],
  }

  return (
    <main>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(collectionLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqLd) }}
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
