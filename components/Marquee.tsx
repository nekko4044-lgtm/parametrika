'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'

const SPEED = 48 // px/s

function MarqueeTrack({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const pos = useRef(0)
  const raf = useRef<number>()
  const last = useRef<number>()

  const withStars: string[] = []
  items.forEach(item => { withStars.push(item); withStars.push('·') })
  // triple the content so there's always a full viewport of items in any scroll position
  const tripled = [...withStars, ...withStars, ...withStars]

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    // width of ONE copy of the items
    const oneWidth = el.scrollWidth / 3

    // for reverse track start shifted by one copy
    if (reverse) pos.current = -oneWidth

    function tick(ts: number) {
      const dt = last.current !== undefined ? (ts - last.current) / 1000 : 0
      last.current = ts

      pos.current += (reverse ? 1 : -1) * SPEED * dt

      if (!reverse && pos.current <= -oneWidth) pos.current += oneWidth
      if (reverse  && pos.current >= 0)         pos.current -= oneWidth

      if (el) el.style.transform = `translate3d(${pos.current}px, 0, 0)`
      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [reverse])

  return (
    <div className="overflow-hidden relative" style={{ background: '#080808' }}>
      <div ref={wrapRef} className="flex whitespace-nowrap py-[11px]" style={{ willChange: 'transform' }}>
        {tripled.map((item, i) => (
          <span
            key={i}
            className={clsx(
              'select-none',
              item === '·'
                ? 'text-gold/30 text-[18px] mx-4 leading-none'
                : 'font-body text-[10px] uppercase tracking-[0.3em] text-gold/70'
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  const t = useTranslations('marquee')
  const a = [t('i1'), t('i2'), t('i3'), t('i7'), t('i9'), t('i4')]
  const b = [t('i5'), t('i6'), t('i10'), t('i8'), t('i2'), t('i1')]

  return (
    <div>
      <div style={{ background: '#080808' }}>
        <MarqueeTrack items={a} reverse={false} />
      </div>
      <div aria-hidden style={{ height: '120px', background: 'linear-gradient(to bottom, #080808, transparent)' }} />
    </div>
  )
}
