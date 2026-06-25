'use client'

import React, { useEffect, useRef } from 'react'

/** IntersectionObserver-driven scroll reveal. Add `reveal` or `reveal-top` class to the node. */
export function useReveal(delay = 0, threshold = 0.08) {
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
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, threshold])
  return ref
}

/** Word-by-word clip reveal for headlines. */
export function WordReveal({
  text,
  delayStart = 0,
  className = '',
  style,
}: {
  text: string
  delayStart?: number
  className?: string
  style?: React.CSSProperties
}) {
  const words = text.split(' ')
  return (
    <span className={className} style={style}>
      {words.map((word, i) => (
        <span key={i} className="word-mask">
          <span className="word-inner" style={{ animationDelay: `${delayStart + i * 0.09}s` }}>
            {word}
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  )
}
