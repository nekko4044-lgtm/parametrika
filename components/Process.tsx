'use client'

import { useTranslations } from 'next-intl'
import { useReveal } from './Reveal'

function ProcessRow({ num, title, body, delay, last }: {
  num: string; title: string; body: string; delay: number; last: boolean
}) {
  const ref = useReveal(delay)
  return (
    <div
      ref={ref}
      className={`reveal-top group flex items-start gap-6 md:gap-12 py-8 ${!last ? 'border-b border-white/10' : ''}`}
    >
      <span className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none font-light text-gold/20 group-hover:text-gold/40 transition-colors duration-500 flex-shrink-0 w-16 md:w-24 select-none">
        {num}
      </span>
      <div className="flex flex-col gap-2 pt-1">
        <h3 className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] font-light text-cream/90 group-hover:text-gold transition-colors duration-500 leading-tight">
          {title}
        </h3>
        <p className="font-body font-light text-cream/80 text-sm md:text-[15px] leading-relaxed max-w-lg">
          {body}
        </p>
      </div>
    </div>
  )
}

export default function Process({ withHeading = true }: { withHeading?: boolean }) {
  const t = useTranslations('process')
  const headRef = useReveal()

  const steps = [
    { num: '01', title: t('s1title'), body: t('s1body') },
    { num: '02', title: t('s2title'), body: t('s2body') },
    { num: '03', title: t('s3title'), body: t('s3body') },
    { num: '04', title: t('s4title'), body: t('s4body') },
    { num: '05', title: t('s5title'), body: t('s5body') },
    { num: '06', title: t('s6title'), body: t('s6body') },
    { num: '07', title: t('s7title'), body: t('s7body') },
  ]

  return (
    <section id="process" className="py-32 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {withHeading && (
          <>
            <div ref={headRef} className="reveal flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold/50" />
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/70">{t('eyebrow')}</span>
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-light text-cream mb-12 md:mb-16">
              {t('headline')}
            </h2>
          </>
        )}

        <div className="flex flex-col">
          {steps.map((s, i) => (
            <ProcessRow key={i} {...s} delay={i * 90} last={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
