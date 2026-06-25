'use client'

import { useTranslations } from 'next-intl'

export default function ModelViewer({
  src,
  arSrc,
  alt,
}: {
  src?: string
  arSrc?: string
  alt: string
}) {
  const t = useTranslations('product')

  if (!src) {
    return (
      <div className="relative w-full aspect-square md:aspect-[4/3] bg-stone rounded-2xl border border-white/8 flex flex-col items-center justify-center gap-6 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(201,168,76,0.07) 0%, transparent 65%)',
        }} />

        {/* Animated parametric icon */}
        <div className="relative w-24 h-24 opacity-40">
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full animate-[spin_18s_linear_infinite]">
            <path d="M20 100 Q60 10 100 100" stroke="#C9A84C" strokeWidth="1.2"/>
            <path d="M30 100 Q60 30 90 100" stroke="#C9A84C" strokeWidth="0.8"/>
            <path d="M40 100 Q60 50 80 100" stroke="#C9A84C" strokeWidth="0.8"/>
            <path d="M50 100 Q60 70 70 100" stroke="#C9A84C" strokeWidth="0.8"/>
            <path d="M60 10 L60 100" stroke="#C9A84C" strokeWidth="0.6" strokeDasharray="3 4"/>
            <path d="M20 100 L100 100" stroke="#C9A84C" strokeWidth="0.5"/>
            <circle cx="60" cy="10" r="3" fill="#C9A84C" fillOpacity="0.6"/>
          </svg>
        </div>

        <div className="text-center flex flex-col gap-2 relative z-[1]">
          <span className="font-display text-[clamp(1.1rem,2vw,1.5rem)] font-light text-cream/60">
            {t('noModel')}
          </span>
          <span className="font-body text-[12px] text-cream/30 max-w-[260px] leading-relaxed">
            {t('noModelSub')}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/8 bg-stone">
      {/* @ts-ignore */}
      <model-viewer
        src={src}
        {...(arSrc ? { 'ios-src': arSrc } : {})}
        alt={alt}
        auto-rotate
        camera-controls
        {...(arSrc ? { ar: true, 'ar-modes': 'webxr scene-viewer quick-look' } : {})}
        environment-image="neutral"
        shadow-intensity="0.6"
        exposure="1.1"
        tone-mapping="commerce"
        style={{
          width: '100%',
          height: '100%',
          background: '#1C1A17',
        }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-cream/30 bg-ink/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {t('rotate')}
        </span>
      </div>
    </div>
  )
}
