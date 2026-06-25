'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { WordReveal } from './Reveal'

export default function Hero() {
  const t = useTranslations('hero')
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lineRef.current) lineRef.current.style.transform = 'translateY(0)'
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative z-[10] flex flex-col justify-end px-6 md:px-16 pb-16 md:pb-24 overflow-hidden" style={{ minHeight: 'calc(var(--vh, 1svh) * 100)' }}>

      {/* Hero video — desktop */}
      <div className="absolute inset-0 z-0">
        {/* Desktop */}
        <video
          autoPlay
          loop
          playsInline
          muted
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-desktop.webm" type="video/webm" />
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        </video>

        {/* Mobile */}
        <video
          autoPlay
          loop
          playsInline
          muted
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-mobile.webm" type="video/webm" />
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/60 to-ink/88" />
      </div>

      {/* Bottom fade into next section — extended so marquee floats on this dark zone */}
      <div className="absolute bottom-0 inset-x-0 h-56 md:h-72 bg-gradient-to-t from-ink via-ink/70 to-transparent pointer-events-none z-[1]" />

      {/* Parametric ghost motif top-right */}
      <div className="absolute right-[-6%] top-[8%] w-[52vw] max-w-[580px] aspect-square pointer-events-none select-none opacity-[0.045] z-[1]">
        <svg viewBox="0 0 400 400" fill="none">
          <path d="M40 360 Q200 20 360 360" stroke="#C9A84C" strokeWidth="1.1"/>
          <path d="M80 360 Q200 90 320 360" stroke="#C9A84C" strokeWidth="0.7"/>
          <path d="M120 360 Q200 160 280 360" stroke="#C9A84C" strokeWidth="0.7"/>
          <path d="M160 360 Q200 230 240 360" stroke="#C9A84C" strokeWidth="0.7"/>
          <path d="M200 20 L200 360" stroke="#C9A84C" strokeWidth="0.7"/>
          <path d="M40 360 L360 360" stroke="#C9A84C" strokeWidth="0.5"/>
          <circle cx="200" cy="18" r="3.5" fill="#C9A84C" fillOpacity="0.5"/>
        </svg>
      </div>

      {/* Vertical gold line */}
      <div className="absolute left-6 md:left-14 top-0 w-[1px] h-[58%] overflow-hidden pointer-events-none z-[1]">
        <div
          ref={lineRef}
          style={{
            height: '100%',
            transform: 'translateY(-100%)',
            transition: 'transform 1.6s cubic-bezier(0.32,0.72,0,1)',
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.5) 40%, rgba(201,168,76,0.3) 70%, transparent)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-[2] max-w-5xl">

        <div
          className="flex items-center gap-3 mb-7"
          style={{ animation: 'fade-up 0.7s cubic-bezier(0.32,0.72,0,1) 0.2s both' }}
        >
          <div className="w-7 h-[1px] bg-gold/50" />
          <span className="font-body text-[11px] uppercase tracking-[0.3em] text-gold/60">{t('eyebrow')}</span>
        </div>

        <h1 className="font-display leading-[0.9] mb-9">
          <WordReveal
            text={t('headline1')}
            delayStart={0.35}
            className="block text-[clamp(2.2rem,6.5vw,5.5rem)] font-light text-cream/90"
          />
          <WordReveal
            text={t('headline2')}
            delayStart={0.55}
            className="block text-[clamp(2.2rem,6.5vw,5.5rem)] italic"
            style={{ color: '#C9A84C' }}
          />
        </h1>

        <div
          className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-14"
          style={{ animation: 'fade-up 0.9s cubic-bezier(0.32,0.72,0,1) 0.85s both' }}
        >
          <p className="font-body font-light text-cream/40 text-sm md:text-[15px] leading-[1.85] max-w-[300px]">
            {t('sub')}
          </p>
          <a
            href="#contact"
            className="group flex-shrink-0 inline-flex items-center gap-3 border border-gold/35 hover:border-gold hover:bg-gold/8 text-gold font-body text-[13px] tracking-wide px-7 py-3.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
          >
            {t('cta')}
            <span className="w-7 h-7 rounded-full border border-gold/25 flex items-center justify-center transition-all duration-500 group-hover:bg-gold/15 group-hover:border-gold/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>

    </section>
  )
}
