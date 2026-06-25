'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import type { SubType, Product } from '@/lib/categories'
import CategorySpecs from './CategorySpecs'
import InlineProductViewer from './InlineProductViewer'

export default function CategoryTabsClient({
  categorySlug,
  subTypes,
  allProducts,
}: {
  categorySlug: string
  subTypes: SubType[]
  allProducts: Product[]
}) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [activeProductIdx, setActiveProductIdx] = useState(0)
  const tc = useTranslations('cat')
  const tCat = useTranslations('catalog')
  const active = subTypes[activeIdx]
  const subProducts = allProducts.filter(p => p.subTypeId === active.id)
  const hasMultipleProducts = subProducts.length > 1
  const safeProductIdx = activeProductIdx < subProducts.length ? activeProductIdx : 0
  const activeProduct = subProducts[safeProductIdx]

  function switchTab(i: number) {
    setActiveIdx(i)
    setActiveProductIdx(0)
  }

  return (
    <div>
      {/* Main tab bar */}
      <div className="border-b border-white/10 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex gap-1 overflow-x-auto no-scrollbar">
          {subTypes.map((sub, i) => (
            <button
              key={sub.id}
              onClick={() => switchTab(i)}
              className={`relative flex-shrink-0 px-5 py-4 font-body text-[13px] uppercase tracking-[0.2em] transition-colors duration-300 whitespace-nowrap ${
                i === activeIdx
                  ? 'text-gold'
                  : 'text-cream/40 hover:text-cream/70'
              }`}
            >
              {tc(`${categorySlug}.sub.${sub.id}.label`)}
              {i === activeIdx && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active sub-type content */}
      <div key={active.id}>

        {/* Product viewer */}
        {hasMultipleProducts
          ? activeProduct && (
              <InlineProductViewer
                key={activeProduct.slug}
                product={activeProduct}
                collectionPicker={{
                  products: subProducts,
                  activeIdx: safeProductIdx,
                  onSelect: setActiveProductIdx,
                }}
              />
            )
          : subProducts.map(product => (
              <InlineProductViewer key={product.slug} product={product} />
            ))
        }

        <CategorySpecs
          slug={`${categorySlug}.sub.${active.id}`}
          specs={active.specs}
          applications={active.applications}
          eyebrow={`${tCat('eyebrow')} ${tc(`${categorySlug}.sub.${active.id}.label`)}`}
        />
      </div>
    </div>
  )
}
