'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' },
]

export default function Navbar() {
  const t      = useTranslations('nav')
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const links = [
    { href: `/${locale}/catalog`,    label: t('catalog'),    route: true,  hash: null      },
    { href: `/${locale}/production`, label: t('production'), route: true,  hash: null      },
    { href: `/${locale}#about`,      label: t('why'),        route: false, hash: '#about'  },
    { href: `/${locale}#contact`,    label: t('contact'),    route: false, hash: '#contact'},
  ]

  const handleAnchor = (e: React.MouseEvent, hash: string) => {
    const home = `/${locale}`
    const onHome = window.location.pathname === home || window.location.pathname === home + '/'
    if (onHome) {
      e.preventDefault()
      setOpen(false)
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      setOpen(false)
    }
  }

  return (
    <div ref={navRef} className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[280px]">
      <nav
        className={`
          w-full flex flex-col rounded-[20px]
          bg-[rgba(8,8,8,0.75)] backdrop-blur-xl
          shadow-[0_8px_40px_rgba(0,0,0,0.6)]
          border border-white/[0.05]
        `}
      >
        {/* Top row — always visible */}
        <div className="flex items-center justify-between px-3 py-2.5 flex-shrink-0">
          <Link href={`/${locale}`} onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Parametrika" width={34} height={34} className="rounded-full ring-1 ring-gold/30" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/25 hover:border-gold/50 transition-colors duration-300"
          >
            <span className="font-body text-[10px] uppercase tracking-[0.22em] text-cream/55">
              {open ? t('close') : 'Menu'}
            </span>
            <div className="relative w-4 h-[10px] flex-shrink-0">
              <span className={`absolute left-0 block w-4 h-[1px] bg-cream/60 transition-all duration-300 origin-center ${open ? 'top-[4px] rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 block w-4 h-[1px] bg-cream/60 transition-all duration-300 origin-center ${open ? 'top-[4px] -rotate-45' : 'top-[9px]'}`} />
            </div>
          </button>
        </div>

        {/* Expandable content — grid trick, only rows animate */}
        <div
          className="grid"
          style={{
            gridTemplateRows: open ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          <div className="overflow-hidden">
            <div className="mx-4 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
            <div className="px-2 pt-1.5 pb-1">
              {links.map((link, i) => {
                const cls = "flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-white/[0.06] group transition-colors duration-200"
                const inner = (
                  <>
                    <span className="font-display text-[1.25rem] font-light text-cream/80 group-hover:text-gold transition-colors duration-200 leading-none">
                      {link.label}
                    </span>
                    <span className="text-cream/20 group-hover:text-gold/50 transition-all duration-200 group-hover:translate-x-0.5 text-sm">→</span>
                  </>
                )
                return link.route ? (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={cls}>{inner}</Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={link.hash ? (e) => handleAnchor(e, link.hash!) : () => setOpen(false)}
                    className={cls}
                  >{inner}</a>
                )
              })}
            </div>
            <div className="h-px bg-white/[0.07] mx-4" />
            <div className="flex gap-1 px-5 py-3">
              {locales.map(l => (
                <Link
                  key={l.code}
                  href={`/${l.code}`}
                  onClick={() => setOpen(false)}
                  className={`font-body text-[10px] tracking-[0.18em] px-3 py-1.5 rounded-full transition-colors duration-200 ${
                    locale === l.code ? 'bg-gold/15 text-gold' : 'text-cream/30 hover:text-cream/60'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
