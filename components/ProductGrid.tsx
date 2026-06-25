'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useReveal } from './Reveal'
import type { Product } from '@/lib/categories'

function ProductCard({ product, index }: { product: Product; index: number }) {
  const locale = useLocale()
  const ref = useReveal(index * 70)

  return (
    <Link
      ref={ref as any}
      href={`/${locale}/catalog/${product.categorySlug}/${product.slug}`}
      className="reveal group relative block overflow-hidden rounded-2xl border border-white/10 bg-stone aspect-[3/4]"
    >
      {/* Cover photo */}
      {product.cover ? (
        <Image
          src={product.cover}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-[1.1s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 opacity-75"
        />
      ) : null}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/4 transition-colors duration-700" />

      {/* 3D badge */}
      {product.modelFile && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 backdrop-blur-sm">
          <span className="font-body text-[9px] uppercase tracking-[0.25em] text-gold">3D</span>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-1.5">
        <h3 className="font-display text-[clamp(1.15rem,2.2vw,1.6rem)] font-light text-cream group-hover:text-gold transition-colors duration-500 leading-tight">
          {product.name}
        </h3>
        <p className="font-display italic text-[13px] text-gold/60 leading-snug">
          {product.tagline}
        </p>
        <span className="mt-2 inline-flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.22em] text-gold/60 group-hover:text-gold transition-all duration-500">
          View
          <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  )
}

export default function ProductGrid({ products, heading = false }: { products: Product[]; heading?: boolean }) {
  const t = useTranslations('gallery')

  if (products.length === 0) return null

  return (
    <section className="py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {heading && (
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-light text-cream mb-10">
            {t('title')}
          </h2>
        )}

        <div className={`grid gap-5 md:gap-6 ${
          products.length === 1
            ? 'grid-cols-1 max-w-sm'
            : products.length === 2
            ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
