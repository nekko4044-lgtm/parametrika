'use client'

import { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

interface FeatureCard {
  num: string
  title: string
  body: string
}

const OFFSET = 9
const SCALE_STEP = 0.055
const DIM_STEP = 0.13
const spring = { type: 'spring' as const, stiffness: 170, damping: 26 }

export default function FeatureCardStack({ items }: { items: FeatureCard[] }) {
  const [cards, setCards] = useState(() => items.map((item, i) => ({ ...item, id: i })))
  const [currentIndex, setCurrentIndex] = useState(0)

  const dragY = useMotionValue(0)
  const rotateX = useTransform(dragY, [-200, 0, 200], [6, 0, -6])

  const moveToEnd = () => {
    setCards(prev => [...prev.slice(1), prev[0]])
    setCurrentIndex(prev => (prev + 1) % items.length)
    dragY.set(0)
  }

  const moveToStart = () => {
    setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)])
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
    dragY.set(0)
  }

  const handleDragEnd = (_: unknown, info: { offset: { y: number }; velocity: { y: number } }) => {
    const { offset, velocity } = info
    if (Math.abs(offset.y) > 50 || Math.abs(velocity.y) > 500) {
      offset.y < 0 || velocity.y < 0 ? moveToEnd() : moveToStart()
    }
    dragY.set(0)
  }

  return (
    <div className="flex flex-col items-center gap-8">

      {/* Stack */}
      <div className="relative w-full" style={{ height: `${248 + (items.length - 1) * OFFSET}px` }}>
        <ul className="relative w-full h-full m-0 p-0">
          {cards.map(({ id, num, title, body }, i) => {
            const isFront = i === 0
            return (
              <motion.li
                key={id}
                className="absolute w-full list-none rounded-2xl overflow-hidden select-none"
                style={{
                  height: '248px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  boxShadow: isFront
                    ? 'inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 64px rgba(0,0,0,0.65)'
                    : '0 8px 32px rgba(0,0,0,0.4)',
                  cursor: isFront ? 'grab' : 'default',
                  touchAction: 'none',
                  transformPerspective: 1000,
                  rotateX: isFront ? rotateX : 0,
                }}
                animate={{
                  top: `${i * -OFFSET}px`,
                  scale: 1 - i * SCALE_STEP,
                  filter: `brightness(${Math.max(0.3, 1 - i * DIM_STEP)})`,
                  zIndex: cards.length - i,
                }}
                transition={spring}
                drag={isFront ? 'y' : false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.65}
                onDrag={(_, info) => { if (isFront) dragY.set(info.offset.y) }}
                onDragEnd={handleDragEnd}
                whileDrag={isFront ? { scale: 1.02, cursor: 'grabbing' } : {}}
              >
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-14 h-px bg-gradient-to-r from-gold/50 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 w-px h-14 bg-gradient-to-b from-gold/50 to-transparent pointer-events-none" />

                <div className="h-full flex flex-col justify-between p-7">
                  <div className="flex flex-col gap-4">
                    <span className="font-body text-[9px] uppercase tracking-[0.35em] text-gold/40">
                      {num}
                    </span>
                    <h3 className="font-display text-[1.35rem] font-light text-cream leading-snug">
                      {title}
                    </h3>
                  </div>
                  <p className="font-body text-[12.5px] text-cream/45 leading-relaxed">
                    {body}
                  </p>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2 items-center">
        {items.map((_, i) => (
          <div
            key={i}
            className="h-[3px] rounded-full transition-all duration-300"
            style={{
              width: i === currentIndex ? '24px' : '6px',
              background: i === currentIndex ? '#C9A84C' : 'rgba(255,255,255,0.18)',
            }}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <div className="flex gap-4 items-center">
        <button
          onClick={moveToStart}
          aria-label="Previous"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-cream/40 hover:text-cream hover:border-gold/30 transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-cream/25 tabular-nums">
          {currentIndex + 1} / {items.length}
        </span>
        <button
          onClick={moveToEnd}
          aria-label="Next"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-cream/40 hover:text-cream hover:border-gold/30 transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

    </div>
  )
}
