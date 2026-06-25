'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const VIDEOS = [
  {
    desktop: { mp4: '/videos/lines-1-desktop.mp4', webm: '/videos/lines-1-desktop.webm' },
    mobile:  { mp4: '/videos/lines-1-mobile.mp4',  webm: '/videos/lines-1-mobile.webm'  },
  },
  {
    desktop: { mp4: '/videos/lines-2-desktop.mp4', webm: '/videos/lines-2-desktop.webm' },
    mobile:  { mp4: '/videos/lines-2-mobile.mp4',  webm: '/videos/lines-2-mobile.webm'  },
  },
  {
    desktop: { mp4: '/videos/lines-3-desktop.mp4', webm: '/videos/lines-3-desktop.webm' },
    mobile:  { mp4: '/videos/lines-3-mobile.mp4',  webm: '/videos/lines-3-mobile.webm'  },
  },
]

function pickIndex(pathname: string): number {
  const segment = pathname.split('/').filter(Boolean).pop() ?? 'home'
  return segment.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 3
}

export default function VideoBackground() {
  const pathname = usePathname()
  const idx = pickIndex(pathname)
  const deskRef = useRef<HTMLVideoElement>(null)
  const mobRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    deskRef.current?.play().catch(() => {})
    mobRef.current?.play().catch(() => {})
  }, [idx])

  const v = VIDEOS[idx]

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 5, mixBlendMode: 'screen' }}
    >
      <video
        ref={deskRef}
        key={`d-${idx}`}
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 md:opacity-[0.13]"
      >
        <source src={v.desktop.mp4}  type="video/mp4" />
        <source src={v.desktop.webm} type="video/webm" />
      </video>

      <video
        ref={mobRef}
        key={`m-${idx}`}
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.13] md:opacity-0"
      >
        <source src={v.mobile.mp4}  type="video/mp4" />
        <source src={v.mobile.webm} type="video/webm" />
      </video>
    </div>
  )
}
