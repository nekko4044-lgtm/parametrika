'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const VIDEOS = [
  {
    desktop: '/videos/lines-1-desktop.mp4',
    mobile:  '/videos/lines-1-mobile.mp4',
  },
  {
    desktop: '/videos/lines-2-desktop.mp4',
    mobile:  '/videos/lines-2-mobile.mp4',
  },
  {
    desktop: '/videos/lines-3-desktop.mp4',
    mobile:  '/videos/lines-3-mobile.mp4',
  },
]

function pickIndex(pathname: string): number {
  const segment = pathname.split('/').filter(Boolean).pop() ?? 'home'
  return segment.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 3
}

export default function VideoBackground() {
  const pathname = usePathname()
  const idx = pickIndex(pathname)
  const [videoSource, setVideoSource] = useState<string | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateSource = () => {
      setShouldLoad(false)
      if (reducedMotion.matches) {
        setVideoSource(null)
        return
      }

      const variant = VIDEOS[idx]
      setVideoSource(desktop.matches ? variant.desktop : variant.mobile)
    }

    updateSource()
    desktop.addEventListener('change', updateSource)
    reducedMotion.addEventListener('change', updateSource)

    return () => {
      desktop.removeEventListener('change', updateSource)
      reducedMotion.removeEventListener('change', updateSource)
    }
  }, [idx])

  useEffect(() => {
    if (!videoSource) return

    const timeout = window.setTimeout(() => setShouldLoad(true), 1200)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [videoSource])

  if (!videoSource || !shouldLoad) return null

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 5, mixBlendMode: 'screen' }}
    >
      <video
        key={videoSource}
        autoPlay loop muted playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.13]"
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  )
}
