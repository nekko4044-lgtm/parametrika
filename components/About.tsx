'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useReveal } from './Reveal'
import FeatureCardStack from './FeatureCardStack'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let s = 0; const step = target / 50
      const timer = setInterval(() => {
        s += step
        if (s >= target) { setCount(target); clearInterval(timer) }
        else setCount(Math.floor(s))
      }, 20)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

function FeatureItem({ item, delay }: {
  item: { num: string; title: string; body: string }
  delay: number
}) {
  const ref = useReveal(delay)
  return (
    <div
      ref={ref}
      className="reveal group flex flex-col gap-2 py-7 border-b border-white/[0.07] last:border-0"
    >
      <span className="font-body text-[9px] uppercase tracking-[0.35em] text-gold/40 select-none">
        {item.num}
      </span>
      <h3 className="font-display text-[clamp(1rem,1.6vw,1.25rem)] font-light text-cream/90 group-hover:text-gold transition-colors duration-500 leading-snug">
        {item.title}
      </h3>
      <p className="font-body text-[12px] text-cream/40 leading-relaxed">
        {item.body}
      </p>
    </div>
  )
}

export default function About() {
  const t  = useTranslations('about')
  const tw = useTranslations('why')

  const r1   = useReveal(0)
  const r2   = useReveal(120)
  const rImg = useReveal(60)
  const rSt  = useReveal(0)

  const items = [
    { num: '01', title: tw('w1title'), body: tw('w1body') },
    { num: '02', title: tw('w2title'), body: tw('w2body') },
    { num: '03', title: tw('w3title'), body: tw('w3body') },
    { num: '04', title: tw('w4title'), body: tw('w4body') },
    { num: '05', title: tw('w5title'), body: tw('w5body') },
  ]

  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">

        {/* Headline block */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-end">
          <div ref={r1} className="reveal flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-gold/50" />
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/70">
                {t('eyebrow')}
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.1] text-cream">
              {t('headline')}
            </h2>
          </div>
          <div ref={r2} className="reveal">
            <p className="font-body font-light text-cream/55 text-[15px] leading-[1.9] whitespace-pre-line">
              {t('body')}
            </p>
          </div>
        </div>

        {/* Mobile: swipeable card stack */}
        <div className="lg:hidden">
          <FeatureCardStack items={items} />
        </div>

        {/* Desktop: 3-col features | image | features */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_260px_1fr] xl:grid-cols-[1fr_300px_1fr] gap-0">

          {/* Left features: 01-02-03 */}
          <div className="flex flex-col lg:pr-10 lg:border-r lg:border-white/[0.07]">
            {items.slice(0, 3).map((item, i) => (
              <FeatureItem key={item.num} item={item} delay={i * 70} />
            ))}
          </div>

          {/* Center image */}
          <div
            ref={rImg}
            className="reveal flex items-stretch justify-center px-8 py-2"
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.09]"
              style={{ minHeight: '320px' }}
            >
              <Image
                src="/photo121.jpg"
                alt="Parametrika craftsmanship"
                fill
                className="object-cover object-center"
                style={{ opacity: 0.88 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right features: 04-05 */}
          <div className="flex flex-col lg:pl-10 lg:border-l lg:border-white/[0.07]">
            {items.slice(3).map((item, i) => (
              <FeatureItem key={item.num} item={item} delay={(i + 3) * 70} />
            ))}
          </div>

        </div>

        {/* Stats — glassmorphism */}
        <div ref={rSt} className="reveal grid grid-cols-3 gap-3 md:gap-5">
          {([
            { value: 4,   suffix: '',  label: t('stat1'), sub: t('stat1desc') },
            { value: 7,   suffix: '',  label: t('stat2'), sub: t('stat2desc') },
            { value: 100, suffix: '+', label: t('stat3'), sub: t('stat3desc') },
          ] as const).map((stat, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-3 rounded-2xl p-5 md:p-8 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(201,168,76,0.12)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-gold/50 to-transparent" />
              <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
              <div className="flex items-start gap-0.5 leading-none">
                <span className="font-stat text-[clamp(2.4rem,5vw,4rem)] font-normal text-cream/90 leading-none tabular-nums">
                  <Counter target={stat.value} />
                </span>
                {stat.suffix && (
                  <span className="font-stat text-[clamp(0.9rem,1.8vw,1.5rem)] text-gold leading-none mt-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-body text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-gold/70 leading-tight">
                  {stat.label}
                </span>
                <span className="font-body text-[10px] md:text-[11px] text-cream/30 leading-tight">
                  {stat.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
