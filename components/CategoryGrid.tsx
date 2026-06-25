'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { CATEGORIES } from '@/lib/categories'
import { useReveal } from './Reveal'

function CategoryCard({ slug, order, image, hasPhotos, index }: {
  slug: string; order: string; image: string; hasPhotos: boolean; index: number
}) {
  const tc = useTranslations('cat')
  const tcat = useTranslations('catalog')
  const locale = useLocale()
  const ref = useReveal(index * 55)

  return (
    <Link
      ref={ref as any}
      href={`/${locale}/catalog/${slug}`}
      className="reveal group relative block overflow-hidden rounded-2xl border border-white/10 bg-stone aspect-square"
    >
      {/* Image or placeholder */}
      {hasPhotos && image ? (
        <Image
          src={image}
          alt={tc(`${slug}.name`)}
          fill
          className="object-cover object-center transition-transform duration-[1.1s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 opacity-70"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-cream/20">Photos Coming Soon</span>
        </div>
      )}
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-700" />

      {/* Number */}
      <span className="absolute top-5 left-5 font-body text-[10px] uppercase tracking-[0.35em] text-gold/60">
        {order}
      </span>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
        <h3 className="font-display text-[clamp(1.3rem,2.4vw,1.9rem)] font-light text-cream group-hover:text-gold transition-colors duration-500 leading-tight">
          {tc(`${slug}.name`)}
        </h3>
        <span className="font-body text-[11px] uppercase tracking-[0.18em] text-cream/45">
          {tc(`${slug}.tags`)}
        </span>
        <span className="mt-2 inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.2em] text-gold/70 group-hover:text-gold transition-all duration-500">
          {tcat('view')}
          <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  )
}

export default function CategoryGrid({ heading = true }: { heading?: boolean }) {
  const t = useTranslations('catalog')
  const headRef = useReveal()

  return (
    <section id="catalog" className="py-32 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {heading && (
          <>
            <div ref={headRef} className="reveal flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold/50" />
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/70">
                {t('eyebrow')}
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-light text-cream mb-4">
              {t('headline')}
            </h2>
            <p className="font-body font-light text-cream/45 text-[15px] max-w-xl mb-12 md:mb-16">
              {t('sub')}
            </p>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {CATEGORIES.map((c, i) => (
            <CategoryCard key={c.slug} slug={c.slug} order={c.order} image={c.image} hasPhotos={c.hasPhotos} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
