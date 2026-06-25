'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'done'>('in')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 400)
    const t2 = setTimeout(() => setPhase('out'),  1800)
    const t3 = setTimeout(() => setPhase('done'), 2550)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-ink flex flex-col items-center justify-center gap-8 pointer-events-none"
      style={{
        opacity:    phase === 'out' ? 0 : 1,
        transform:  phase === 'out' ? 'scale(1.04)' : 'scale(1)',
        transition: phase === 'out'
          ? 'opacity 0.75s cubic-bezier(0.32,0.72,0,1), transform 0.75s cubic-bezier(0.32,0.72,0,1)'
          : 'none',
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Parametrika"
        className="w-56 md:w-72 object-contain"
        style={{
          opacity:   phase === 'in' ? 0 : 1,
          transform: phase === 'in' ? 'scale(0.92) translateY(8px)' : 'scale(1) translateY(0)',
          transition: 'opacity 0.7s cubic-bezier(0.32,0.72,0,1) 0.3s, transform 0.7s cubic-bezier(0.32,0.72,0,1) 0.3s',
        }}
      />
    </div>
  )
}
