'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: any
    let rafId: number | undefined
    let disposed = false
    let onAnchorClick: ((e: MouseEvent) => void) | undefined

    // Skip smooth scroll on touch devices — native momentum scroll is better
    if (window.innerWidth < 768 || window.innerHeight > window.innerWidth) return

    async function init() {
      const Lenis = (await import('lenis')).default
      if (disposed) return
      lenis = new Lenis({
        duration: 1.35,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
      ;(window as any).__lenis = lenis

      onAnchorClick = (e: MouseEvent) => {
        const anchor = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
        if (!anchor) return
        const target = document.querySelector(anchor.getAttribute('href')!)
        if (!target) return
        e.preventDefault()
        lenis.scrollTo(target, { offset: -80, duration: 1.6 })
      }

      document.addEventListener('click', onAnchorClick)
    }

    void init()

    return () => {
      disposed = true
      if (rafId) cancelAnimationFrame(rafId)
      if (onAnchorClick) document.removeEventListener('click', onAnchorClick)
      if (lenis) { lenis.destroy(); (window as any).__lenis = null }
    }
  }, [])

  return null
}
