'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { Article } from '@/lib/articles'

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return ref
}

function formatDate(iso: string, locale: string): string {
  const date = new Date(iso)
  const localeMap: Record<string, string> = { en: 'en-GB', ru: 'ru-RU', ar: 'ar-AE' }
  return date.toLocaleDateString(localeMap[locale] || 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function ArticleRow({
  article,
  index,
  locale,
  minRead,
  readMore,
}: {
  article: Article
  index: number
  locale: string
  minRead: string
  readMore: string
}) {
  const ref = useReveal(index * 80)
  const content = article[locale as 'en' | 'ru' | 'ar']
  const isRtl = locale === 'ar'

  return (
    <div ref={ref} className="reveal">
      <Link
        href={`/${locale}/journal/${article.slug}`}
        className="group block py-9 border-b border-white/[0.07] hover:border-gold/20 transition-colors duration-500"
      >
        <div
          className={`flex flex-col gap-4 md:flex-row md:items-start md:gap-10 ${isRtl ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Meta column */}
          <div className={`flex flex-col gap-2 md:w-48 flex-shrink-0 ${isRtl ? 'md:items-end' : ''}`}>
            <span className="font-body text-[10px] uppercase tracking-[0.22em] text-gold/60">
              {article.category}
            </span>
            <span className="font-body text-[11px] text-cream/35 leading-snug">
              {formatDate(article.publishedAt, locale)}
            </span>
            <span className="font-body text-[11px] text-cream/30">
              {article.readingTime} {minRead}
            </span>
          </div>

          {/* Content column */}
          <div className={`flex-1 min-w-0 ${isRtl ? 'text-right' : ''}`}>
            <h2 className="font-display text-[clamp(1.25rem,2.5vw,1.65rem)] font-light text-cream/90 leading-[1.2] mb-3 group-hover:text-gold transition-colors duration-300">
              {content.title}
            </h2>
            <p className="font-body text-[13px] text-cream/50 leading-[1.75] max-w-2xl line-clamp-2">
              {content.excerpt}
            </p>
            <span
              className={`inline-flex items-center gap-2 mt-4 font-body text-[10px] uppercase tracking-[0.22em] text-gold/50 group-hover:text-gold/80 transition-colors duration-300 ${isRtl ? 'flex-row-reverse' : ''}`}
            >
              {readMore}
              <span
                className={`transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function JournalList({
  articles,
  locale,
  minRead,
  readMore,
}: {
  articles: Article[]
  locale: string
  minRead: string
  readMore: string
}) {
  return (
    <>
      {articles.map((article, i) => (
        <ArticleRow
          key={article.slug}
          article={article}
          index={i}
          locale={locale}
          minRead={minRead}
          readMore={readMore}
        />
      ))}
    </>
  )
}
