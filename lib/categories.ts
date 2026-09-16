export type SpecRow = { labelKey: string; valueKey: string }
export type GallerySection = { id: string; images: string[] }

export type SubType = {
  id: string
  specs: SpecRow[]
  applications: string[]
  hasPhotos: boolean
  hasProcess: boolean
}

export type ProductPhoto = { src: string; label?: string; group?: string }

export type ColorVariant = {
  id: string
  name: string
  hex: string
  src: string
}

export type Product = {
  slug: string
  categorySlug: string
  subTypeId?: string
  name: string
  tagline: string
  cover: string
  modelFile?: string
  arFile?: string
  photos: ProductPhoto[]
  colorVariants?: ColorVariant[]
  roomPhotos?: string[]
}

export type Category = {
  slug: string
  order: string
  image: string
  hasPhotos: boolean
  hasProcess: boolean
  specs: SpecRow[]
  applications: string[]
  subTypes?: SubType[]
}

export const CATEGORIES: Category[] = [
  {
    slug: 'tables',
    order: '01',
    image: '/catalog/tables/table1.webp',
    hasPhotos: true,
    hasProcess: true,
    specs: [],
    applications: [],
    subTypes: [
      {
        id: 'dining',
        hasPhotos: true,
        hasProcess: true,
        specs: [
          { labelKey: 'material', valueKey: 'materialV' },
          { labelKey: 'top',      valueKey: 'topV'      },
          { labelKey: 'finish',   valueKey: 'finishV'   },
          { labelKey: 'size',     valueKey: 'sizeV'     },
        ],
        applications: ['a1', 'a2', 'a3', 'a4'],
      },
      {
        id: 'coffee',
        hasPhotos: false,
        hasProcess: true,
        specs: [
          { labelKey: 'material', valueKey: 'materialV' },
          { labelKey: 'top',      valueKey: 'topV'      },
          { labelKey: 'finish',   valueKey: 'finishV'   },
          { labelKey: 'size',     valueKey: 'sizeV'     },
        ],
        applications: ['a1', 'a2', 'a3', 'a4'],
      },
      {
        id: 'office',
        hasPhotos: true,
        hasProcess: true,
        specs: [
          { labelKey: 'material', valueKey: 'materialV' },
          { labelKey: 'top',      valueKey: 'topV'      },
          { labelKey: 'finish',   valueKey: 'finishV'   },
          { labelKey: 'size',     valueKey: 'sizeV'     },
        ],
        applications: ['a1', 'a2', 'a3', 'a4'],
      },
      {
        id: 'bar',
        hasPhotos: false,
        hasProcess: true,
        specs: [
          { labelKey: 'material', valueKey: 'materialV' },
          { labelKey: 'top',      valueKey: 'topV'      },
          { labelKey: 'height',   valueKey: 'heightV'   },
          { labelKey: 'finish',   valueKey: 'finishV'   },
          { labelKey: 'size',     valueKey: 'sizeV'     },
        ],
        applications: ['a1', 'a2', 'a3', 'a4'],
      },
    ],
  },
  {
    slug: 'chairs',
    order: '02',
    image: '/catalog/chairs/sahara-hero.webp',
    hasPhotos: true,
    hasProcess: false,
    specs: [],
    applications: [],
    subTypes: [
      {
        id: 'sahara',
        hasPhotos: true,
        hasProcess: false,
        specs: [
          { labelKey: 'material', valueKey: 'materialV' },
          { labelKey: 'finish',   valueKey: 'finishV'   },
          { labelKey: 'size',     valueKey: 'sizeV'     },
        ],
        applications: ['a1', 'a2', 'a3', 'a4'],
      },
    ],
  },
  {
    slug: 'consoles',
    order: '03',
    image: '/catalog/nightstands/ns-01.webp',
    hasPhotos: true,
    hasProcess: false,
    specs: [
      { labelKey: 'material', valueKey: 'materialV' },
      { labelKey: 'finish',   valueKey: 'finishV'   },
      { labelKey: 'mount',    valueKey: 'mountV'    },
      { labelKey: 'size',     valueKey: 'sizeV'     },
    ],
    applications: ['a1', 'a2', 'a3', 'a4'],
  },
  {
    slug: 'wood-panels',
    order: '04',
    image: '/catalog/wood-panels/wp-01.webp',
    hasPhotos: true,
    hasProcess: false,
    specs: [
      { labelKey: 'material', valueKey: 'materialV' },
      { labelKey: 'finish',   valueKey: 'finishV'   },
      { labelKey: 'install',  valueKey: 'installV'  },
      { labelKey: 'size',     valueKey: 'sizeV'     },
    ],
    applications: ['a1', 'a2', 'a3', 'a4'],
  },
]

export const PRODUCTS: Product[] = [
  // ── Tables — Dining Group ─────────────────────────────────────────────────
  {
    slug: 'zaha',
    categorySlug: 'tables',
    subTypeId: 'dining',
    name: 'ZAHA',
    tagline: 'Standard · 8 seats · glass top',
    cover: '/catalog/tables/dining/zaha-clean.webp',
    photos: [{ src: '/catalog/tables/dining/zaha-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/dining/zaha-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/dining/zaha-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/dining/zaha-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/dining/zaha-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/dining/zaha-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/dining/zaha-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/tables/dining/room/zaha-1.webp',
      '/catalog/tables/dining/room/zaha-2.webp',
      '/catalog/tables/dining/room/zaha-3.webp',
      '/catalog/tables/dining/room/zaha-4.webp',
      '/catalog/tables/dining/room/zaha-5.webp',
    ],
  },
  {
    slug: 'zahir',
    categorySlug: 'tables',
    subTypeId: 'dining',
    name: 'ZAHIR',
    tagline: 'Standard · 6 seats · glass top',
    cover: '/catalog/tables/dining/zahir-clean.webp',
    photos: [{ src: '/catalog/tables/dining/zahir-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/dining/zahir-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/dining/zahir-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/dining/zahir-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/dining/zahir-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/dining/zahir-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/dining/zahir-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/tables/dining/room/zahir-1.webp',
      '/catalog/tables/dining/room/zahir-2.webp',
      '/catalog/tables/dining/room/zahir-3.webp',
      '/catalog/tables/dining/room/zahir-4.webp',
      '/catalog/tables/dining/room/zahir-5.webp',
    ],
  },
  {
    slug: 'vilar',
    categorySlug: 'tables',
    subTypeId: 'dining',
    name: 'VILAR',
    tagline: 'Standard · 4 seats · glass top',
    cover: '/catalog/tables/dining/vilar-clean.webp',
    photos: [{ src: '/catalog/tables/dining/vilar-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/dining/vilar-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/dining/vilar-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/dining/vilar-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/dining/vilar-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/dining/vilar-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/dining/vilar-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/tables/dining/room/vilar-1.webp',
      '/catalog/tables/dining/room/vilar-2.webp',
      '/catalog/tables/dining/room/vilar-3.webp',
      '/catalog/tables/dining/room/vilar-4.webp',
      '/catalog/tables/dining/room/vilar-5.webp',
    ],
  },

  // ── Tables — Coffee Tables ────────────────────────────────────────────────
  {
    slug: 'rafan',
    categorySlug: 'tables',
    subTypeId: 'coffee',
    name: 'RAFAN',
    tagline: '4 piece set · lounge height',
    cover: '/catalog/tables/coffee/rafan-clean.webp',
    photos: [{ src: '/catalog/tables/coffee/rafan-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/coffee/rafan-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/coffee/rafan-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/coffee/rafan-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/coffee/rafan-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/coffee/rafan-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/coffee/rafan-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/tables/coffee/room/rafan-1.webp',
      '/catalog/tables/coffee/room/rafan-2.webp',
      '/catalog/tables/coffee/room/rafan-3.webp',
      '/catalog/tables/coffee/room/rafan-4.webp',
      '/catalog/tables/coffee/room/rafan-5.webp',
      '/catalog/tables/coffee/room/rafan-6.webp',
    ],
  },
  {
    slug: 'dune',
    categorySlug: 'tables',
    subTypeId: 'coffee',
    name: 'DUNE',
    tagline: '4 piece set · lounge height',
    cover: '/catalog/tables/coffee/dune-clean.webp',
    photos: [{ src: '/catalog/tables/coffee/dune-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/coffee/dune-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/coffee/dune-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/coffee/dune-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/coffee/dune-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/coffee/dune-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/coffee/dune-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/tables/coffee/room/dune-1.webp',
      '/catalog/tables/coffee/room/dune-2.webp',
      '/catalog/tables/coffee/room/dune-3.webp',
      '/catalog/tables/coffee/room/dune-4.webp',
      '/catalog/tables/coffee/room/dune-5.webp',
    ],
  },
  {
    slug: 'rayan',
    categorySlug: 'tables',
    subTypeId: 'coffee',
    name: 'RAYAN',
    tagline: '4 piece set · lounge height',
    cover: '/catalog/tables/coffee/rayan-clean.webp',
    photos: [{ src: '/catalog/tables/coffee/rayan-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/coffee/rayan-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/coffee/rayan-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/coffee/rayan-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/coffee/rayan-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/coffee/rayan-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/coffee/rayan-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/tables/coffee/room/rayan-1.webp',
      '/catalog/tables/coffee/room/rayan-2.webp',
      '/catalog/tables/coffee/room/rayan-3.webp',
      '/catalog/tables/coffee/room/rayan-4.webp',
      '/catalog/tables/coffee/room/rayan-5.webp',
      '/catalog/tables/coffee/room/rayan-6.webp',
    ],
  },

  // ── Tables — Office ───────────────────────────────────────────────────────
  {
    slug: 'zaha-office',
    categorySlug: 'tables',
    subTypeId: 'office',
    name: 'ZAHA',
    tagline: 'Executive · ZAHA collection',
    cover: '/catalog/tables/office/zaha-clean.webp',
    photos: [{ src: '/catalog/tables/office/zaha-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/office/zaha-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/office/zaha-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/office/zaha-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/office/zaha-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/office/zaha-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/office/zaha-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/tables/office/room/zaha-1.webp',
      '/catalog/tables/office/room/zaha-2.webp',
      '/catalog/tables/office/room/zaha-3.webp',
      '/catalog/tables/office/room/zaha-4.webp',
      '/catalog/tables/office/room/zaha-5.webp',
      '/catalog/tables/office/room/zaha-6.webp',
    ],
  },
  {
    slug: 'vilar-office',
    categorySlug: 'tables',
    subTypeId: 'office',
    name: 'VILAR',
    tagline: 'Executive · VILAR collection',
    cover: '/catalog/tables/office/vilar-clean.webp',
    photos: [{ src: '/catalog/tables/office/vilar-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/office/vilar-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/office/vilar-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/office/vilar-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/office/vilar-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/office/vilar-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/office/vilar-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/tables/office/room/vilar-1.webp',
      '/catalog/tables/office/room/vilar-2.webp',
      '/catalog/tables/office/room/vilar-3.webp',
      '/catalog/tables/office/room/vilar-4.webp',
      '/catalog/tables/office/room/vilar-5.webp',
      '/catalog/tables/office/room/vilar-6.webp',
    ],
  },

  // ── Tables — Bar Collection ───────────────────────────────────────────────
  {
    slug: 'rafan-bar',
    categorySlug: 'tables',
    subTypeId: 'bar',
    name: 'RAFAN',
    tagline: 'Bar height · stools + table',
    cover: '/catalog/tables/bar/rafan-clean.webp',
    photos: [{ src: '/catalog/tables/bar/rafan-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/bar/rafan-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/bar/rafan-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/bar/rafan-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/bar/rafan-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/bar/rafan-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/bar/rafan-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/tables/bar/room/rafan-1.webp',
      '/catalog/tables/bar/room/rafan-2.webp',
      '/catalog/tables/bar/room/rafan-3.webp',
      '/catalog/tables/bar/room/rafan-4.webp',
      '/catalog/tables/bar/room/rafan-5.webp',
      '/catalog/tables/bar/room/rafan-6.webp',
    ],
  },

  // ── Chairs — SAHARA ──────────────────────────────────────────────────────
  {
    slug: 'sahara',
    categorySlug: 'chairs',
    subTypeId: 'sahara',
    name: 'SAHARA',
    tagline: 'The parametric rocking chair',
    cover: '/catalog/chairs/sahara-clean.webp',
    photos: [{ src: '/catalog/chairs/sahara-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/chairs/sahara-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/chairs/sahara-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/chairs/sahara-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/chairs/sahara-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/chairs/sahara-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/chairs/sahara-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/chairs/room/sahara-1.webp',
      '/catalog/chairs/room/sahara-2.webp',
      '/catalog/chairs/room/sahara-3.webp',
      '/catalog/chairs/room/sahara-4.webp',
      '/catalog/chairs/room/sahara-5.webp',
      '/catalog/chairs/room/sahara-6.webp',
    ],
  },

  // ── Consoles ─────────────────────────────────────────────────────────────
  {
    slug: 'parametric-console',
    categorySlug: 'consoles',
    name: 'Parametric Console',
    tagline: 'Sculptural geometry, precisely crafted',
    cover: '/catalog/consoles/console-clean.webp',
    photos: [{ src: '/catalog/consoles/console-clean.webp' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/consoles/console-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/consoles/console-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/consoles/console-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/consoles/console-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/consoles/console-clean.webp'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/consoles/console-light-oak.webp'       },
    ],
    roomPhotos: [
      '/catalog/nightstands/room/console-1.webp',
      '/catalog/nightstands/room/console-2.webp',
      '/catalog/nightstands/room/console-3.webp',
      '/catalog/nightstands/room/console-4.webp',
      '/catalog/nightstands/room/console-5.webp',
      '/catalog/nightstands/room/console-6.webp',
    ],
  },

  // ── Wood Panels ──────────────────────────────────────────────────────────
  {
    slug: 'parametric-wood-panel',
    categorySlug: 'wood-panels',
    name: 'Parametric Wood Panel',
    tagline: 'Parametric texture for every wall',
    cover: '/catalog/wood-panels/wp-01.webp',
    photos: [
      { src: '/catalog/wood-panels/wp-01.webp' },
      { src: '/catalog/wood-panels/wp-02.webp' },
      { src: '/catalog/wood-panels/wp-03.webp' },
      { src: '/catalog/wood-panels/wp-04.webp' },
    ],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/wood-panels/wp-deep-espresso.webp'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/wood-panels/wp-dark-walnut.webp'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/wood-panels/wp-warm-cappuccino.webp'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/wood-panels/wp-classic-brown.webp'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/wood-panels/wp-02.webp'               },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/wood-panels/wp-light-oak.webp'        },
    ],
    roomPhotos: [
      '/catalog/wood-panels/room/panel-1.webp',
      '/catalog/wood-panels/room/panel-2.webp',
      '/catalog/wood-panels/room/panel-3.webp',
      '/catalog/wood-panels/room/panel-4.webp',
      '/catalog/wood-panels/room/panel-5.webp',
      '/catalog/wood-panels/room/panel-6.webp',
    ],
  },
]

export const PRODUCTION_PHOTOS: string[] = [
  '/catalog/production/design/des-03.webp',
  '/catalog/production/design/des-04.webp',
  '/catalog/production/design/des-01.webp',
  '/catalog/production/design/des-02.webp',
  '/catalog/production/assembly/asm-01.webp',
  '/catalog/production/assembly/asm-02.webp',
  '/catalog/production/assembly/asm-03.webp',
  '/catalog/production/assembly/asm-04.webp',
  '/catalog/production/assembly/asm-05.webp',
  '/catalog/production/assembly/asm-06.webp',
  '/catalog/production/finishing/fin-01.webp',
  '/catalog/production/finishing/fin-02.webp',
  '/catalog/production/finishing/fin-03.webp',
]

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug)
}

export function getRelated(slug: string, count: number): Category[] {
  return CATEGORIES.filter(c => c.slug !== slug).slice(0, count)
}

export function getProducts(categorySlug: string, subTypeId?: string): Product[] {
  return PRODUCTS.filter(p =>
    p.categorySlug === categorySlug &&
    (subTypeId === undefined || p.subTypeId === subTypeId)
  )
}

export function getProduct(categorySlug: string, productSlug: string): Product | undefined {
  return PRODUCTS.find(p => p.categorySlug === categorySlug && p.slug === productSlug)
}
