'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')
  const locale = useLocale()

  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center gap-8 px-6 text-center">
      <span className="font-display text-[clamp(5rem,18vw,12rem)] font-light text-gold/15 leading-none select-none">404</span>
      <div className="flex flex-col items-center gap-4 -mt-6">
        <h1 className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-light text-cream">{t('title')}</h1>
        <p className="font-body font-light text-cream/50 text-sm max-w-sm">{t('body')}</p>
      </div>
      <Link
        href={`/${locale}`}
        className="group inline-flex items-center gap-3 border border-gold/35 hover:border-gold hover:bg-gold/8 text-gold font-body text-[13px] tracking-wide px-7 py-3.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
      >
        {t('cta')}
        <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
      </Link>
    </main>
  )
}
