'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { WordReveal } from './Reveal'

export default function CategoryHero({ slug, image, hasPhotos }: { slug: string; image: string; hasPhotos: boolean }) {
  const tc       = useTranslations('cat')
  const tb       = useTranslations('breadcrumb')
  const tcontact = useTranslations('contact')
  const locale   = useLocale()

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-end px-6 md:px-16 pb-16 md:pb-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {hasPhotos && image ? (
          <Image src={image} alt={tc(`${slug}.name`)} fill priority className="object-cover object-center" />
        ) : (
          <div className="absolute inset-0 bg-stone" style={{
            backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(201,168,76,0.06) 0%, transparent 60%)',
          }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/90" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-56 md:h-80 bg-gradient-to-b from-transparent to-ink z-[1] pointer-events-none" />

      <div className="relative z-[2] max-w-4xl" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
        <nav
          className="flex items-center gap-2 mb-6 font-body text-[11px] uppercase tracking-[0.2em] text-cream/40"
          style={{ animation: 'fade-up 0.6s cubic-bezier(0.32,0.72,0,1) 0.1s both' }}
        >
          <Link href={`/${locale}`} className="hover:text-gold transition-colors">{tb('home')}</Link>
          <span className="text-gold/40">/</span>
          <Link href={`/${locale}/catalog`} className="hover:text-gold transition-colors">{tb('catalog')}</Link>
          <span className="text-gold/40">/</span>
          <span className="text-gold/70 truncate max-w-[160px] md:max-w-none">{tc(`${slug}.name`)}</span>
        </nav>

        <div
          className="flex items-center gap-3 mb-5"
          style={{ animation: 'fade-up 0.6s cubic-bezier(0.32,0.72,0,1) 0.2s both' }}
        >
          <div className="w-7 h-[1px] bg-gold/50" />
          <span className="font-body text-[11px] uppercase tracking-[0.3em] text-gold/60">{tc(`${slug}.order`)}</span>
        </div>

        <h1 className="font-display text-[clamp(1.6rem,5vw,3.8rem)] font-light leading-[1.05] text-cream mb-6">
          <WordReveal text={tc(`${slug}.name`)} delayStart={0.3} />
        </h1>

        <div
          className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12"
          style={{ animation: 'fade-up 0.9s cubic-bezier(0.32,0.72,0,1) 0.7s both' }}
        >
          <p className="font-display italic text-[clamp(1.1rem,2.2vw,1.5rem)] font-light text-gold/90 max-w-md leading-snug">
            {tc(`${slug}.tagline`)}
          </p>
          <a
            href="#contact"
            className="group flex-shrink-0 inline-flex items-center gap-3 border border-gold/35 hover:border-gold hover:bg-gold/8 text-gold font-body text-[13px] tracking-wide px-7 py-3.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
          >
            {tcontact('headline')}
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
