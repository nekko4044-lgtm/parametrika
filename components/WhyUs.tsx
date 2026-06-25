'use client'

import { useTranslations } from 'next-intl'
import { useReveal } from './Reveal'

export default function WhyUs() {
  const t = useTranslations('why')
  const headRef = useReveal()

  const items = [
    { title: t('w1title'), body: t('w1body'), num: '01' },
    { title: t('w2title'), body: t('w2body'), num: '02' },
    { title: t('w3title'), body: t('w3body'), num: '03' },
    { title: t('w4title'), body: t('w4body'), num: '04' },
    { title: t('w5title'), body: t('w5body'), num: '05' },
  ]

  return (
    <section id="why" className="py-32 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div ref={headRef} className="reveal flex items-center gap-4 mb-4">
          <div className="w-6 h-[1px] bg-gold/50" />
          <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/70">{t('eyebrow')}</span>
        </div>

        <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-light text-cream mb-16 md:mb-20">
          {t('headline')}
        </h2>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <WhyRow key={i} item={item} delay={i * 100} last={i === items.length - 1} />
          ))}
        </div>

      </div>
    </section>
  )
}

function WhyRow({ item, delay, last }: {
  item: { num: string; title: string; body: string }
  delay: number
  last: boolean
}) {
  const ref = useReveal(delay)

  return (
    <div
      ref={ref}
      className={`reveal-top group flex items-start gap-6 md:gap-12 py-8 ${!last ? 'border-b border-white/10' : ''}`}
    >
      <span className="font-stat text-[clamp(2.5rem,6vw,4rem)] leading-none font-light text-gold/20 group-hover:text-gold/40 transition-colors duration-500 flex-shrink-0 w-16 md:w-24 select-none">
        {item.num}
      </span>
      <div className="flex flex-col gap-2 pt-1">
        <h3 className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] font-light text-cream/90 group-hover:text-gold transition-colors duration-500 leading-tight">
          {item.title}
        </h3>
        <p className="font-body font-light text-cream/80 text-sm md:text-[15px] leading-relaxed max-w-lg">
          {item.body}
        </p>
      </div>
    </div>
  )
}
