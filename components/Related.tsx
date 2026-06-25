'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { getRelated } from '@/lib/categories'
import { useReveal } from './Reveal'

export default function Related({ slug }: { slug: string }) {
  const t  = useTranslations('related')
  const tc = useTranslations('cat')
  const locale = useLocale()
  const ref = useReveal()
  const related = getRelated(slug, 3)

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <h2 ref={ref as any} className="reveal font-display text-[clamp(1.8rem,4vw,2.8rem)] font-light text-cream mb-10">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {related.map((c) => (
            <Link
              key={c.slug}
              href={`/${locale}/catalog/${c.slug}`}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-stone aspect-[4/3]"
            >
              {c.hasPhotos && c.image ? (
                <Image
                  src={c.image}
                  alt={tc(`${c.slug}.name`)}
                  fill
                  className="object-cover object-center opacity-65 group-hover:scale-105 transition-transform duration-[1.1s] ease-[cubic-bezier(0.32,0.72,0,1)]"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between">
                <h3 className="font-display text-[1.2rem] font-light text-cream group-hover:text-gold transition-colors duration-500">
                  {tc(`${c.slug}.name`)}
                </h3>
                <span className="text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-500">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
