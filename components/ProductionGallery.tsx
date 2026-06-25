'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { PRODUCTION_PHOTOS } from '@/lib/categories'
import { useReveal } from './Reveal'

// ── Mobile Swipeable Card Stack ────────────────────────────────────────────

const EASE = [0.32, 0.72, 0, 1] as [number, number, number, number]

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '110%' : '-110%',
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.42, ease: EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-110%' : '110%',
    opacity: 0,
    scale: 0.88,
    transition: { duration: 0.32, ease: EASE },
  }),
}

function MobileSwiper({ photos }: { photos: string[] }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (delta: number) => {
    setDirection(delta)
    setCurrent(c => (c + delta + photos.length) % photos.length)
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Card stack */}
      <div className="relative w-full" style={{ paddingTop: '72%' }}>
        {/* Background stacked cards */}
        {[2, 1].map(offset => {
          const idx = (current + offset) % photos.length
          return (
            <div
              key={`bg-${offset}-${idx}`}
              className="absolute inset-0 rounded-2xl overflow-hidden border border-white/[0.05]"
              style={{
                transform: `scale(${1 - offset * 0.045}) translateY(${offset * 11}px)`,
                zIndex: 10 - offset,
                opacity: 0.45 - offset * 0.12,
              }}
            >
              <Image src={photos[idx]} alt="" fill className="object-cover object-center" />
            </div>
          )
        })}

        {/* Active draggable card */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(_, info) => {
              if (info.offset.x < -55) go(1)
              else if (info.offset.x > 55) go(-1)
            }}
            className="absolute inset-0 rounded-2xl overflow-hidden border border-white/[0.12] touch-none select-none"
            style={{ zIndex: 20, cursor: 'grab' }}
            whileTap={{ scale: 1.01 }}
          >
            <Image
              src={photos[current]}
              alt={`Production ${current + 1}`}
              fill
              className="object-cover object-center pointer-events-none"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent pointer-events-none" />
            {/* Gold corner accents */}
            <div className="absolute top-4 right-4 w-7 h-7 border-t border-r border-gold/35" />
            <div className="absolute bottom-4 left-4 w-7 h-7 border-b border-l border-gold/35" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => go(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-cream/35 hover:text-gold hover:border-gold/30 transition-all duration-300 active:scale-95"
          aria-label="Previous"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M8.5 2L3.5 6.5L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <span className="font-body text-[10px] tracking-[0.3em] text-cream/40">
            {String(current + 1).padStart(2, '0')}
          </span>
          <div className="w-20 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gold/50 rounded-full"
              animate={{ width: `${((current + 1) / photos.length) * 100}%` }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            />
          </div>
          <span className="font-body text-[10px] tracking-[0.3em] text-cream/20">
            {String(photos.length).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={() => go(1)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-cream/35 hover:text-gold hover:border-gold/30 transition-all duration-300 active:scale-95"
          aria-label="Next"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M4.5 2L9.5 6.5L4.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <p className="text-center font-body text-[9px] uppercase tracking-[0.3em] text-cream/18">
        swipe to explore
      </p>
    </div>
  )
}

// ── Desktop Horizontal Film Strip ──────────────────────────────────────────

function DesktopStrip({ photos }: { photos: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxDrag, setMaxDrag] = useState(-3000)
  const [progress, setProgress] = useState(0)
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

  useEffect(() => {
    return x.on('change', v => {
      setProgress(Math.min(1, Math.max(0, Math.abs(v) / Math.abs(maxDrag))))
    })
  }, [x, maxDrag])

  return (
    <div className="flex flex-col gap-5">
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: maxDrag, right: 0 }}
          dragElastic={0.04}
          dragTransition={{ timeConstant: 220, power: 0.28 }}
          style={{ x, cursor: 'grab' }}
          whileDrag={{ cursor: 'grabbing' }}
          className="flex gap-4 px-16 w-fit py-3 select-none"
        >
          {photos.map((src, i) => (
            <div
              key={src}
              className="relative flex-shrink-0 w-[360px] h-[268px] rounded-2xl overflow-hidden border border-white/8 bg-stone group"
            >
              <Image
                src={src}
                alt={`Parametrika production ${i + 1}`}
                fill
                className="object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3.5 right-4 font-body text-[9px] tracking-[0.25em] text-cream/25">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="px-16">
        <div className="h-[1px] bg-white/8 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/30 to-gold/60 rounded-full"
            animate={{ width: `${Math.max(4, progress * 100)}%` }}
            transition={{ duration: 0.08 }}
          />
        </div>
      </div>
    </div>
  )
}

// ── Main Export ────────────────────────────────────────────────────────────

export default function ProductionGallery({ withHeading = true }: { withHeading?: boolean }) {
  const t = useTranslations('production')
  const headRef = useReveal()

  if (PRODUCTION_PHOTOS.length === 0) return null

  return (
    <section id="production" className="py-20 md:py-28">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 mb-10 md:mb-14">
        {withHeading && (
          <>
            <div ref={headRef} className="reveal flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold/50" />
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/70">
                {t('eyebrow')}
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-light text-cream mb-10 md:mb-14">
              {t('headline')}
            </h2>
          </>
        )}
        <div className="flex justify-end">
          <span className="hidden md:flex items-center gap-2 font-body text-[9px] uppercase tracking-[0.3em] text-cream/22">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="opacity-40">
              <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            drag
          </span>
        </div>
      </div>

      {/* Mobile: card swiper */}
      <div className="md:hidden px-6">
        <MobileSwiper photos={PRODUCTION_PHOTOS} />
      </div>

      {/* Desktop: film strip */}
      <div className="hidden md:block">
        <DesktopStrip photos={PRODUCTION_PHOTOS} />
      </div>
    </section>
  )
}
