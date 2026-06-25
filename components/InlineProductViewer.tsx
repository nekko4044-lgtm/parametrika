'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import type { Product } from '@/lib/categories'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'

interface CollectionPicker {
  products: Product[]
  activeIdx: number
  onSelect: (i: number) => void
}

// ── Animated photo with crossfade ─────────────────────────────────────────

function AnimatedPhoto({ src, name }: { src: string; name: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0"
      >
        <Image src={src} alt={name} fill className="object-contain" />
      </motion.div>
    </AnimatePresence>
  )
}

// ── Color swatches row ────────────────────────────────────────────────────

function ColorSwatches({
  variants, active, onChange,
}: {
  variants: NonNullable<Product['colorVariants']>
  active: number
  onChange: (i: number) => void
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-5 h-[1px] bg-gold/40" />
        <span className="font-body text-[10px] uppercase tracking-[0.28em] text-cream/40">Finish</span>
        <span className="font-body text-[10px] tracking-[0.12em] text-gold/70">
          — {variants[active].name}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {variants.map((v, i) => (
          <button
            key={v.id}
            onClick={() => onChange(i)}
            title={v.name}
            className={`w-10 h-6 rounded-full transition-all duration-300 ${
              active === i
                ? 'ring-1 ring-gold ring-offset-[3px] ring-offset-ink scale-110'
                : 'opacity-55 hover:opacity-85 hover:scale-105'
            }`}
            style={{ backgroundColor: v.hex }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Draggable room gallery ────────────────────────────────────────────────

function RoomGallery({
  photos, productName, onOpen,
}: {
  photos: string[]
  productName: string
  onOpen: (src: string) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxDrag, setMaxDrag] = useState(-1000)
  const x = useMotionValue(0)

  useEffect(() => {
    const update = () => {
      if (containerRef.current && trackRef.current) {
        const max = -(trackRef.current.scrollWidth - containerRef.current.clientWidth + 1)
        setMaxDrag(Math.min(-10, max))
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-5 h-[1px] bg-gold/40" />
        <span className="font-body text-[10px] uppercase tracking-[0.28em] text-cream/40">In the Interior</span>
        <span className="hidden md:block font-body text-[9px] uppercase tracking-[0.2em] text-cream/18 ml-auto">← drag →</span>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: maxDrag, right: 0 }}
          dragElastic={0.04}
          dragTransition={{ timeConstant: 220, power: 0.28 }}
          style={{ x, cursor: 'grab', touchAction: 'pan-x' }}
          whileDrag={{ cursor: 'grabbing' }}
          className="flex gap-3 w-fit select-none"
        >
          {photos.map((src, i) => {
            const isPlaceholder = src === '__placeholder__'
            return (
              <div
                key={i}
                onClick={() => !isPlaceholder && onOpen(src)}
                className={`relative flex-shrink-0 rounded-2xl overflow-hidden border bg-stone group ${
                  isPlaceholder
                    ? 'border-white/[0.06]'
                    : 'border-white/8 hover:border-white/20 cursor-zoom-in'
                }`}
                style={{ width: 'clamp(220px, 36vw, 340px)', height: 'clamp(155px, 25vw, 240px)' }}
              >
                {isPlaceholder ? (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-white/[0.08] rounded-2xl"
                    style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.03) 0%, transparent 70%)' }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/[0.09]">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                    <span className="font-body text-[8px] uppercase tracking-[0.3em] text-white/[0.13]">Photo coming soon</span>
                  </div>
                ) : (
                  <>
                    <Image
                      src={src}
                      alt={`${productName} interior ${i + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full border border-white/40 bg-ink/40 backdrop-blur-sm flex items-center justify-center">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M1 1h4M1 1v4M12 1h-4M12 1v4M1 12h4M1 12v-4M12 12h-4M12 12v-4" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────

export default function InlineProductViewer({
  product,
  collectionPicker,
}: {
  product: Product
  collectionPicker?: CollectionPicker
}) {
  const locale = useLocale()
  const groups: string[] = []
  for (const p of product.photos) {
    if (p.group && !groups.includes(p.group)) groups.push(p.group)
  }
  const hasGroups = groups.length > 1

  const [activePhoto, setActivePhoto] = useState(0)
  const [activeGroup, setActiveGroup] = useState<string | null>(groups[0] ?? null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  const defaultColorIdx = product.colorVariants
    ? Math.max(0, product.colorVariants.findIndex(v => v.src === product.cover))
    : 0
  const [activeColor, setActiveColor] = useState(defaultColorIdx)

  useEffect(() => {
    if (!lightbox) return
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [lightbox])

  const visiblePhotos = hasGroups && activeGroup
    ? product.photos.filter(p => p.group === activeGroup)
    : product.photos
  const safeIdx = activePhoto < visiblePhotos.length ? activePhoto : 0

  const mainSrc = product.colorVariants
    ? product.colorVariants[activeColor].src
    : (visiblePhotos[safeIdx]?.src ?? product.cover)

  const hasVariants = !!product.colorVariants?.length

  return (
    <div className="py-14 md:py-20 px-6 md:px-16 border-t border-white/8 first:border-t-0">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.4rem)] font-light text-cream leading-tight">
              {product.name}
            </h3>
            <p className="font-display italic text-[clamp(0.9rem,1.5vw,1.1rem)] text-gold/70 font-light mt-1">
              {product.tagline}
            </p>
          </div>
          <Link
            href={`/${locale}/catalog/${product.categorySlug}/${product.slug}?mode=3d`}
            className="group flex-shrink-0 inline-flex items-center gap-2 border border-gold/30 hover:border-gold/70 hover:bg-gold/8 text-gold/70 hover:text-gold font-body text-[10px] uppercase tracking-[0.22em] px-4 py-2 rounded-full transition-all duration-300"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            3D
          </Link>
        </div>

        {/* Collection picker — all screens */}
        {collectionPicker && collectionPicker.products.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {collectionPicker.products.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => collectionPicker.onSelect(i)}
                className={`font-body text-[11px] uppercase tracking-[0.22em] px-5 py-2 rounded-full border transition-all duration-300 ${
                  collectionPicker.activeIdx === i
                    ? 'border-gold bg-gold/12 text-gold'
                    : 'border-white/15 text-cream/40 hover:border-white/35 hover:text-cream/70'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        )}

        {/* Desktop 2-col (only with colorVariants) */}
        {hasVariants && (
          <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[520px_1fr] gap-8 items-start">
            {/* Left: photo + finish label */}
            <div className="flex flex-col gap-5">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/8 bg-[#0E0C09]">
                <AnimatedPhoto src={mainSrc} name={product.name} />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-[1px] bg-gold/40" />
                <span className="font-body text-[10px] uppercase tracking-[0.28em] text-cream/40">Finish</span>
                <span className="font-body text-[10px] tracking-[0.12em] text-gold/70">
                  — {product.colorVariants![activeColor].name}
                </span>
              </div>
            </div>

            {/* Right: 3×3 finish thumbnails */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-[1px] bg-gold/40" />
                <span className="font-body text-[10px] uppercase tracking-[0.28em] text-cream/40">Collection Finishes</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.colorVariants!.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveColor(i)}
                    className={`relative aspect-square rounded-xl overflow-hidden border transition-all duration-300 group ${
                      activeColor === i ? 'border-gold/60' : 'border-white/8 hover:border-white/22'
                    }`}
                  >
                    <Image src={v.src} alt={v.name} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 py-2 px-2.5 bg-gradient-to-t from-ink/85 to-transparent">
                      <span className="font-body text-[9px] tracking-[0.08em] text-cream/65 leading-none">{v.name}</span>
                    </div>
                    {activeColor === i && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3L3 5L7 1" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile layout + desktop fallback (no colorVariants) */}
        <div className={hasVariants ? 'lg:hidden flex flex-col gap-5' : 'flex flex-col gap-5'}>
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-white/8 bg-stone"
            style={{ aspectRatio: '1/1', maxHeight: '75vh' }}
          >
            <AnimatedPhoto src={mainSrc} name={product.name} />
          </div>

          {hasVariants && (
            <ColorSwatches variants={product.colorVariants!} active={activeColor} onChange={setActiveColor} />
          )}

          {hasGroups && (
            <div className="flex flex-wrap gap-2">
              {groups.map(g => (
                <button
                  key={g}
                  onClick={() => { setActiveGroup(g); setActivePhoto(0) }}
                  className={`font-body text-[10px] uppercase tracking-[0.22em] px-4 py-1.5 rounded-full border transition-all duration-300 ${
                    activeGroup === g
                      ? 'border-gold bg-gold/12 text-gold'
                      : 'border-white/12 text-cream/38 hover:border-white/28 hover:text-cream/60'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          )}

          {visiblePhotos.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {visiblePhotos.map((photo, i) => (
                <button
                  key={photo.src}
                  onClick={() => setActivePhoto(i)}
                  className={`relative flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-xl overflow-hidden border transition-all duration-300 ${
                    safeIdx === i ? 'border-gold opacity-100 scale-105' : 'border-white/10 opacity-40 hover:opacity-70'
                  }`}
                >
                  <Image src={photo.src} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Room gallery — all screens, draggable */}
        {product.roomPhotos && product.roomPhotos.length > 0 && (
          <RoomGallery photos={product.roomPhotos} productName={product.name} onOpen={setLightbox} />
        )}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(8,8,8,0.96)', backdropFilter: 'blur(12px)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10"
              style={{ aspectRatio: '4/3', maxHeight: '85vh' }}
              onClick={e => e.stopPropagation()}
            >
              <Image src={lightbox} alt="Interior" fill className="object-contain" />
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-cream/50 hover:text-gold hover:border-gold/40 transition-all duration-300"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
