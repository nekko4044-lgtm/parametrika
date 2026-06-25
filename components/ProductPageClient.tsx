'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Navbar from '@/components/Navbar'
import ModelViewer from '@/components/ModelViewer'
import { WordReveal } from '@/components/Reveal'
import { CATEGORIES } from '@/lib/categories'
import type { Product } from '@/lib/categories'

export default function ProductPageClient({
  product,
  relatedProducts,
}: {
  product: Product
  relatedProducts: Product[]
}) {
  const t  = useTranslations('product')
  const tc = useTranslations('cat')
  const tb = useTranslations('breadcrumb')
  const locale = useLocale()

  const [activePhoto, setActivePhoto] = useState(0)
  const [activeGroup, setActiveGroup] = useState<string | null>(null)
  const [mode3d, setMode3d] = useState(false)

  useEffect(() => {
    setMode3d(new URLSearchParams(window.location.search).get('mode') === '3d')
  }, [])

  const category = CATEGORIES.find(c => c.slug === product.categorySlug)

  // Derive unique groups (in order of first appearance)
  const groups: string[] = []
  for (const p of product.photos) {
    if (p.group && !groups.includes(p.group)) groups.push(p.group)
  }
  const hasGroups = groups.length > 1

  const visiblePhotos = hasGroups && activeGroup
    ? product.photos.filter(p => p.group === activeGroup)
    : product.photos

  if (mode3d) {
    return (
      <>
        <div className="pt-24 md:pt-32 px-6 md:px-16 pb-20 min-h-screen flex flex-col">
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 flex-1">
            {/* Back link */}
            <Link
              href={`/${locale}/catalog/${product.categorySlug}`}
              className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-cream/40 hover:text-gold transition-colors duration-300"
            >
              <span>←</span> {category ? tc(`${product.categorySlug}.name`) : 'Back'}
            </Link>

            <div>
              <h1 className="font-display text-[clamp(1.8rem,5vw,3.5rem)] font-light text-cream leading-tight">
                {product.name}
              </h1>
              <p className="font-display italic text-[clamp(0.9rem,1.5vw,1.15rem)] text-gold/70 font-light mt-1">
                {product.tagline}
              </p>
            </div>

            <div className="flex-1">
              <ModelViewer
                src={product.modelFile}
                arSrc={product.arFile}
                alt={product.name}
              />
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <p className="font-body text-[13px] text-cream/40 leading-relaxed">{t('ctaSub')}</p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-gold/35 hover:border-gold hover:bg-gold/8 text-gold font-body text-[13px] tracking-wide px-7 py-3.5 rounded-full transition-all duration-500 self-start"
              >
                {t('cta')}
                <span className="w-6 h-6 rounded-full border border-gold/25 flex items-center justify-center transition-all duration-500 group-hover:bg-gold/15 group-hover:border-gold/60">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {/* Hero spacer for fixed navbar */}
      <div className="pt-28 md:pt-36" />

      {/* Breadcrumb */}
      <nav className="px-6 md:px-16 mb-8">
        <div className="max-w-6xl mx-auto flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.2em] text-cream/35">
          <Link href={`/${locale}`} className="hover:text-gold transition-colors">{tb('home')}</Link>
          <span className="text-gold/30">/</span>
          <Link href={`/${locale}/catalog`} className="hover:text-gold transition-colors">{tb('catalog')}</Link>
          <span className="text-gold/30">/</span>
          <Link href={`/${locale}/catalog/${product.categorySlug}`} className="hover:text-gold transition-colors">
            {category ? tc(`${product.categorySlug}.name`) : product.categorySlug}
          </Link>
          <span className="text-gold/30">/</span>
          <span className="text-gold/70">{product.name}</span>
        </div>
      </nav>

      {/* Product name */}
      <div className="px-6 md:px-16 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-gold/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/60">
              {category ? tc(`${product.categorySlug}.order`) : ''}
            </span>
          </div>
          <h1 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-light text-cream leading-[0.95] mb-3">
            <WordReveal text={product.name} delayStart={0.1} />
          </h1>
          <p className="font-display italic text-[clamp(1rem,2vw,1.35rem)] text-gold/70 font-light">
            {product.tagline}
          </p>
        </div>
      </div>

      {/* 3D viewer + photo gallery */}
      <div className="px-6 md:px-16 mb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-14 items-start">

          {/* LEFT — 3D viewer */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[1px] bg-gold/40" />
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/60">{t('view3d')}</span>
            </div>
            <ModelViewer
              src={product.modelFile}
              arSrc={product.arFile}
              alt={product.name}
            />
          </div>

          {/* RIGHT — Photos */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-5 h-[1px] bg-gold/40" />
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/60">{t('gallery')}</span>
            </div>

            {/* Active photo */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/8 bg-stone" style={{ aspectRatio: '4/3', maxHeight: '62vh' }}>
              {visiblePhotos[activePhoto] && (
                <Image
                  src={visiblePhotos[activePhoto].src}
                  alt={`${product.name} — ${visiblePhotos[activePhoto].label ?? ''}`}
                  fill
                  priority
                  className="object-cover object-center"
                />
              )}
            </div>

            {/* Group filter chips + thumbnail strip */}
            {product.photos.length > 1 && (
              <div className="flex flex-col gap-3">
                {/* Group filters */}
                {hasGroups && (
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => { setActiveGroup(null); setActivePhoto(0) }}
                      className={`font-body text-[11px] uppercase tracking-[0.18em] px-4 py-1.5 rounded-full border transition-all duration-300 ${
                        activeGroup === null
                          ? 'border-gold bg-gold/12 text-gold'
                          : 'border-white/12 text-cream/40 hover:border-white/25 hover:text-cream/65'
                      }`}
                    >
                      All
                    </button>
                    {groups.map(g => (
                      <button
                        key={g}
                        onClick={() => { setActiveGroup(g); setActivePhoto(0) }}
                        className={`font-body text-[11px] uppercase tracking-[0.18em] px-4 py-1.5 rounded-full border transition-all duration-300 ${
                          activeGroup === g
                            ? 'border-gold bg-gold/12 text-gold'
                            : 'border-white/12 text-cream/40 hover:border-white/25 hover:text-cream/65'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                )}

                {/* Thumbnail strip */}
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {visiblePhotos.map((photo, i) => (
                    <button
                      key={photo.src}
                      onClick={() => setActivePhoto(i)}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border transition-all duration-300 ${
                        activePhoto === i
                          ? 'border-gold opacity-100 scale-105'
                          : 'border-white/10 opacity-45 hover:opacity-75'
                      }`}
                    >
                      <Image src={photo.src} alt={photo.label ?? ''} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-5 border-t border-white/10 flex flex-col gap-3">
              <p className="font-body text-[13px] text-cream/40 leading-relaxed">{t('ctaSub')}</p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-gold/35 hover:border-gold hover:bg-gold/8 text-gold font-body text-[13px] tracking-wide px-7 py-3.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] self-start"
              >
                {t('cta')}
                <span className="w-6 h-6 rounded-full border border-gold/25 flex items-center justify-center transition-all duration-500 group-hover:bg-gold/15 group-hover:border-gold/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related products from same category */}
      {relatedProducts.length > 1 && (
        <section className="py-14 px-6 md:px-16 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-light text-cream mb-8">
              {t('back')} {category ? tc(`${product.categorySlug}.name`) : ''}
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {relatedProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${locale}/catalog/${p.categorySlug}/${p.slug}`}
                  className={`group relative flex-shrink-0 w-40 md:w-48 aspect-[3/4] rounded-xl overflow-hidden border transition-all duration-500 ${
                    p.slug === product.slug
                      ? 'border-gold/60 ring-1 ring-gold/30'
                      : 'border-white/10 opacity-55 hover:opacity-90'
                  }`}
                >
                  {p.cover && (
                    <Image
                      src={p.cover}
                      alt={p.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  {p.slug === product.slug && (
                    <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-gold" />
                  )}
                  <div className="absolute bottom-0 inset-x-0 p-3">
                    <span className="font-body text-[10px] uppercase tracking-[0.15em] text-cream/70 leading-tight">
                      {p.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
