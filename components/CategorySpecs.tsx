'use client'

import { useTranslations } from 'next-intl'
import type { SpecRow } from '@/lib/categories'
import { useReveal } from './Reveal'

export default function CategorySpecs({ slug, specs, applications, eyebrow }: {
  slug: string; specs: SpecRow[]; applications: string[]; eyebrow?: string
}) {
  const tc = useTranslations('cat')
  const t  = useTranslations('catalog')
  const bodyRef = useReveal()
  const specRef = useReveal(120)
  const appRef  = useReveal(200)

  return (
    <section className="py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">

        {/* Overview */}
        <div ref={bodyRef} className="reveal max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-gold/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/70">{eyebrow ?? t('eyebrow')}</span>
          </div>
          <p className="font-body font-light text-cream/70 text-[clamp(1rem,2vw,1.25rem)] leading-[1.75]">
            {tc(`${slug}.body`)}
          </p>

          {/* Size strip — always last spec, shown as inline text under description */}
          {specs.length > 0 && (() => {
            const strip = specs[specs.length - 1]
            return (
              <div className="mt-8 flex items-baseline gap-3 border-t border-white/8 pt-6">
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold/55 shrink-0">
                  {tc(`${slug}.spec.${strip.labelKey}`)}
                </span>
                <span className="font-display text-[clamp(1rem,1.8vw,1.2rem)] font-light text-cream/80">
                  {tc(`${slug}.spec.${strip.valueKey}`)}
                </span>
              </div>
            )
          })()}
        </div>

        {/* Specs grid — all except last */}
        {specs.length > 1 && (
          <div ref={specRef} className="reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
              {specs.slice(0, -1).map((row, i, arr) => (
                <div
                  key={row.labelKey}
                  className={`bg-stone p-6 md:p-8 flex flex-col gap-2${arr.length % 2 !== 0 && i === arr.length - 1 ? ' sm:col-span-2' : ''}`}
                >
                  <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold/55">
                    {tc(`${slug}.spec.${row.labelKey}`)}
                  </span>
                  <span className="font-display text-[clamp(1.05rem,2vw,1.4rem)] font-light text-cream/90 leading-snug">
                    {tc(`${slug}.spec.${row.valueKey}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Applications */}
        <div ref={appRef} className="reveal flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gold/40" />
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-cream/40">
              {tc(`${slug}.tags`)}
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {applications.map((appKey) => (
              <span
                key={appKey}
                className="inline-flex items-center gap-2 border border-gold/25 rounded-full px-5 py-2.5 font-body text-[13px] text-cream/75"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                {tc(`${slug}.apps.${appKey}`)}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
