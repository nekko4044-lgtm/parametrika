import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer className="border-t border-white/8 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex-shrink-0">
          <Image src="/logo.png" alt="Parametrika" width={32} height={32} className="rounded-full opacity-60" />
        </Link>
        <p className="font-body text-xs text-cream/30 text-center">{t('copy')}</p>
        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-cream/25">{t('part')}</span>
      </div>
    </footer>
  )
}
