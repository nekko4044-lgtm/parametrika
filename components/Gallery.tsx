'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useReveal } from './Reveal'
import type { GallerySection } from '@/lib/categories'

export default function Gallery({
  slug,
  images,
  sections,
}: {
  slug: string
  images: string[]
  sections?: GallerySection[]
}) {
  const t  = useTranslations('gallery')
  const tc = useTranslations('cat')
  const ref = useReveal()
  const [active, setActive] = useState<string>(sections?.[0]?.id ?? '')

  const displayImages = sections
    ? (sections.find(s => s.id === active)?.images ?? [])
    : images

  if (displayImages.length === 0 && !sections) return null

  return (
    <section className="py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div ref={ref} className="reveal flex items-end justify-between gap-6 mb-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-light text-cream">
            {t('title')}
          </h2>
        </div>

        {sections && (
          <div className="flex flex-wrap gap-2 mb-8">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`font-body text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  active === s.id
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-white/15 text-cream/50 hover:border-white/30 hover:text-cream/70'
                }`}
              >
                {t(`section.${s.id}`)}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {displayImages.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl border border-white/8 bg-stone ${
                i === 0 && displayImages.length > 2
                  ? 'col-span-2 aspect-[2/1.1]'
                  : 'aspect-square'
              }`}
            >
              <Image
                src={src}
                alt={`${tc(`${slug}.name`)} ${i + 1}`}
                fill
                className="object-cover object-center opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
