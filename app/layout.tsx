import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://parametrika.ae'),
  title: 'Parametrika — Bespoke Parametric Furniture | Dubai',
  description:
    "Custom parametric furniture crafted for Dubai's finest interiors. CNC-precision dining tables, chairs, consoles and architectural wood panels. Request a quote.",
  keywords:
    'parametric furniture dubai, bespoke furniture uae, luxury dining table dubai, custom furniture dubai, parametric design furniture, interior design dubai, furniture uae',
  authors: [{ name: 'Parametrika', url: 'https://parametrika.ae' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    siteName: 'Parametrika',
    title: 'Parametrika — Bespoke Parametric Furniture | Dubai',
    description:
      "Custom parametric furniture crafted for Dubai's finest interiors. CNC-precision dining tables, chairs, consoles and architectural wood panels. Request a quote.",
    url: 'https://parametrika.ae',
    locale: 'en_US',
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
    title: 'Parametrika — Bespoke Parametric Furniture | Dubai',
    description:
      "Custom parametric furniture crafted for Dubai's finest interiors. CNC-precision dining tables, chairs, consoles and architectural wood panels.",
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: 'https://parametrika.ae',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
