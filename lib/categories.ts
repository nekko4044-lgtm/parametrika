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
    image: '/catalog/tables/table1.jpg',
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
    image: '/catalog/chairs/sahara-hero.jpg',
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
    image: '/catalog/nightstands/ns-01.jpg',
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
    image: '/catalog/wood-panels/wp-01.jpg',
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
    cover: '/catalog/tables/dining/zaha-clean.png',
    photos: [{ src: '/catalog/tables/dining/zaha-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/dining/zaha-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/dining/zaha-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/dining/zaha-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/dining/zaha-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/dining/zaha-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/dining/zaha-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/tables/dining/zaha-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/tables/dining/zaha-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/tables/dining/zaha-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/tables/dining/room/zaha-1.jpg',
      '/catalog/tables/dining/room/zaha-2.jpg',
      '/catalog/tables/dining/room/zaha-3.jpg',
      '/catalog/tables/dining/room/zaha-4.jpg',
      '/catalog/tables/dining/room/zaha-5.jpg',
    ],
  },
  {
    slug: 'zahir',
    categorySlug: 'tables',
    subTypeId: 'dining',
    name: 'ZAHIR',
    tagline: 'Standard · 6 seats · glass top',
    cover: '/catalog/tables/dining/zahir-clean.png',
    photos: [{ src: '/catalog/tables/dining/zahir-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/dining/zahir-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/dining/zahir-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/dining/zahir-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/dining/zahir-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/dining/zahir-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/dining/zahir-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/tables/dining/zahir-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/tables/dining/zahir-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/tables/dining/zahir-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/tables/dining/room/zahir-1.jpg',
      '/catalog/tables/dining/room/zahir-2.jpg',
      '/catalog/tables/dining/room/zahir-3.jpg',
      '/catalog/tables/dining/room/zahir-4.jpg',
      '/catalog/tables/dining/room/zahir-5.jpg',
    ],
  },
  {
    slug: 'vilar',
    categorySlug: 'tables',
    subTypeId: 'dining',
    name: 'VILAR',
    tagline: 'Standard · 4 seats · glass top',
    cover: '/catalog/tables/dining/vilar-clean.png',
    photos: [{ src: '/catalog/tables/dining/vilar-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/dining/vilar-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/dining/vilar-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/dining/vilar-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/dining/vilar-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/dining/vilar-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/dining/vilar-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/tables/dining/vilar-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/tables/dining/vilar-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/tables/dining/vilar-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/tables/dining/room/vilar-1.jpg',
      '/catalog/tables/dining/room/vilar-2.jpg',
      '/catalog/tables/dining/room/vilar-3.jpg',
      '/catalog/tables/dining/room/vilar-4.jpg',
      '/catalog/tables/dining/room/vilar-5.jpg',
    ],
  },

  // ── Tables — Coffee Tables ────────────────────────────────────────────────
  {
    slug: 'rafan',
    categorySlug: 'tables',
    subTypeId: 'coffee',
    name: 'RAFAN',
    tagline: '4 piece set · lounge height',
    cover: '/catalog/tables/coffee/rafan-clean.png',
    photos: [{ src: '/catalog/tables/coffee/rafan-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/coffee/rafan-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/coffee/rafan-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/coffee/rafan-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/coffee/rafan-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/coffee/rafan-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/coffee/rafan-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/tables/coffee/rafan-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/tables/coffee/rafan-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/tables/coffee/rafan-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/tables/coffee/room/rafan-1.jpg',
      '/catalog/tables/coffee/room/rafan-2.jpg',
      '/catalog/tables/coffee/room/rafan-3.jpg',
      '/catalog/tables/coffee/room/rafan-4.jpg',
      '/catalog/tables/coffee/room/rafan-5.jpg',
      '/catalog/tables/coffee/room/rafan-6.jpg',
    ],
  },
  {
    slug: 'dune',
    categorySlug: 'tables',
    subTypeId: 'coffee',
    name: 'DUNE',
    tagline: '4 piece set · lounge height',
    cover: '/catalog/tables/coffee/dune-clean.png',
    photos: [{ src: '/catalog/tables/coffee/dune-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/coffee/dune-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/coffee/dune-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/coffee/dune-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/coffee/dune-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/coffee/dune-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/coffee/dune-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/tables/coffee/dune-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/tables/coffee/dune-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/tables/coffee/dune-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/tables/coffee/room/dune-1.jpg',
      '/catalog/tables/coffee/room/dune-2.jpg',
      '/catalog/tables/coffee/room/dune-3.jpg',
      '/catalog/tables/coffee/room/dune-4.jpg',
      '/catalog/tables/coffee/room/dune-5.jpg',
    ],
  },
  {
    slug: 'rayan',
    categorySlug: 'tables',
    subTypeId: 'coffee',
    name: 'RAYAN',
    tagline: '4 piece set · lounge height',
    cover: '/catalog/tables/coffee/rayan-clean.png',
    photos: [{ src: '/catalog/tables/coffee/rayan-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/coffee/rayan-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/coffee/rayan-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/coffee/rayan-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/coffee/rayan-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/coffee/rayan-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/coffee/rayan-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/tables/coffee/rayan-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/tables/coffee/rayan-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/tables/coffee/rayan-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/tables/coffee/room/rayan-1.jpg',
      '/catalog/tables/coffee/room/rayan-2.jpg',
      '/catalog/tables/coffee/room/rayan-3.jpg',
      '/catalog/tables/coffee/room/rayan-4.jpg',
      '/catalog/tables/coffee/room/rayan-5.jpg',
      '/catalog/tables/coffee/room/rayan-6.jpg',
    ],
  },

  // ── Tables — Office ───────────────────────────────────────────────────────
  {
    slug: 'zaha-office',
    categorySlug: 'tables',
    subTypeId: 'office',
    name: 'ZAHA',
    tagline: 'Executive · ZAHA collection',
    cover: '/catalog/tables/office/zaha-clean.png',
    photos: [{ src: '/catalog/tables/office/zaha-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/office/zaha-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/office/zaha-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/office/zaha-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/office/zaha-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/office/zaha-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/office/zaha-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/tables/office/zaha-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/tables/office/zaha-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/tables/office/zaha-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/tables/office/room/zaha-1.jpg',
      '/catalog/tables/office/room/zaha-2.jpg',
      '/catalog/tables/office/room/zaha-3.jpg',
      '/catalog/tables/office/room/zaha-4.jpg',
      '/catalog/tables/office/room/zaha-5.jpg',
      '/catalog/tables/office/room/zaha-6.jpg',
    ],
  },
  {
    slug: 'vilar-office',
    categorySlug: 'tables',
    subTypeId: 'office',
    name: 'VILAR',
    tagline: 'Executive · VILAR collection',
    cover: '/catalog/tables/office/vilar-clean.png',
    photos: [{ src: '/catalog/tables/office/vilar-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/office/vilar-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/office/vilar-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/office/vilar-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/office/vilar-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/office/vilar-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/office/vilar-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/tables/office/vilar-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/tables/office/vilar-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/tables/office/vilar-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/tables/office/room/vilar-1.jpg',
      '/catalog/tables/office/room/vilar-2.jpg',
      '/catalog/tables/office/room/vilar-3.jpg',
      '/catalog/tables/office/room/vilar-4.jpg',
      '/catalog/tables/office/room/vilar-5.jpg',
      '/catalog/tables/office/room/vilar-6.jpg',
    ],
  },

  // ── Tables — Bar Collection ───────────────────────────────────────────────
  {
    slug: 'rafan-bar',
    categorySlug: 'tables',
    subTypeId: 'bar',
    name: 'RAFAN',
    tagline: 'Bar height · stools + table',
    cover: '/catalog/tables/bar/rafan-clean.png',
    photos: [{ src: '/catalog/tables/bar/rafan-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/tables/bar/rafan-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/tables/bar/rafan-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/tables/bar/rafan-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/tables/bar/rafan-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/tables/bar/rafan-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/tables/bar/rafan-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/tables/bar/rafan-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/tables/bar/rafan-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/tables/bar/rafan-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/tables/bar/room/rafan-1.jpg',
      '/catalog/tables/bar/room/rafan-2.jpg',
      '/catalog/tables/bar/room/rafan-3.jpg',
      '/catalog/tables/bar/room/rafan-4.jpg',
      '/catalog/tables/bar/room/rafan-5.jpg',
      '/catalog/tables/bar/room/rafan-6.jpg',
    ],
  },

  // ── Chairs — SAHARA ──────────────────────────────────────────────────────
  {
    slug: 'sahara',
    categorySlug: 'chairs',
    subTypeId: 'sahara',
    name: 'SAHARA',
    tagline: 'The parametric rocking chair',
    cover: '/catalog/chairs/sahara-clean.png',
    photos: [{ src: '/catalog/chairs/sahara-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/chairs/sahara-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/chairs/sahara-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/chairs/sahara-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/chairs/sahara-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/chairs/sahara-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/chairs/sahara-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/chairs/sahara-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/chairs/sahara-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/chairs/sahara-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/chairs/room/sahara-1.jpg',
      '/catalog/chairs/room/sahara-2.jpg',
      '/catalog/chairs/room/sahara-3.jpg',
      '/catalog/chairs/room/sahara-4.jpg',
      '/catalog/chairs/room/sahara-5.jpg',
      '/catalog/chairs/room/sahara-6.jpg',
    ],
  },

  // ── Consoles ─────────────────────────────────────────────────────────────
  {
    slug: 'parametric-console',
    categorySlug: 'consoles',
    name: 'Parametric Console',
    tagline: 'Sculptural geometry, precisely crafted',
    cover: '/catalog/consoles/console-clean.png',
    photos: [{ src: '/catalog/consoles/console-clean.png' }],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/consoles/console-deep-espresso.png'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/consoles/console-dark-walnut.png'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/consoles/console-warm-cappuccino.png'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/consoles/console-classic-brown.png'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/consoles/console-clean.png'           },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/consoles/console-light-oak.png'       },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/consoles/console-natural-wood.png'    },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/consoles/console-natural-bleached.png'},
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/consoles/console-whitewash.png'       },
    ],
    roomPhotos: [
      '/catalog/nightstands/room/console-1.jpg',
      '/catalog/nightstands/room/console-2.jpg',
      '/catalog/nightstands/room/console-3.jpg',
      '/catalog/nightstands/room/console-4.jpg',
      '/catalog/nightstands/room/console-5.jpg',
      '/catalog/nightstands/room/console-6.jpg',
    ],
  },

  // ── Wood Panels ──────────────────────────────────────────────────────────
  {
    slug: 'parametric-wood-panel',
    categorySlug: 'wood-panels',
    name: 'Parametric Wood Panel',
    tagline: 'Parametric texture for every wall',
    cover: '/catalog/wood-panels/wp-01.jpg',
    photos: [
      { src: '/catalog/wood-panels/wp-01.jpg' },
      { src: '/catalog/wood-panels/wp-02.jpg' },
      { src: '/catalog/wood-panels/wp-03.jpg' },
      { src: '/catalog/wood-panels/wp-04.jpg' },
    ],
    colorVariants: [
      { id: 'deep-espresso',    name: 'Deep Espresso',    hex: '#1C1008', src: '/catalog/wood-panels/wp-deep-espresso.jpg'    },
      { id: 'dark-walnut',      name: 'Dark Walnut',      hex: '#3B1F0E', src: '/catalog/wood-panels/wp-dark-walnut.jpg'      },
      { id: 'warm-cappuccino',  name: 'Warm Cappuccino',  hex: '#7A5540', src: '/catalog/wood-panels/wp-warm-cappuccino.jpg'  },
      { id: 'classic-brown',    name: 'Classic Brown',    hex: '#5C3520', src: '/catalog/wood-panels/wp-classic-brown.jpg'    },
      { id: 'golden-caramel',   name: 'Golden Caramel',   hex: '#A07830', src: '/catalog/wood-panels/wp-02.jpg'               },
      { id: 'light-oak',        name: 'Light Oak',        hex: '#C09A60', src: '/catalog/wood-panels/wp-light-oak.jpg'        },
      { id: 'natural-wood',     name: 'Natural Wood',     hex: '#CCAA7A', src: '/catalog/wood-panels/wp-natural-wood.jpg'     },
      { id: 'natural-bleached', name: 'Natural Bleached', hex: '#DDC9A8', src: '/catalog/wood-panels/wp-natural-bleached.jpg' },
      { id: 'whitewash',        name: 'Whitewash',        hex: '#EEE2CE', src: '/catalog/wood-panels/wp-whitewash.jpg'        },
    ],
    roomPhotos: [
      '/catalog/wood-panels/room/panel-1.jpg',
      '/catalog/wood-panels/room/panel-2.jpg',
      '/catalog/wood-panels/room/panel-3.jpg',
      '/catalog/wood-panels/room/panel-4.jpg',
      '/catalog/wood-panels/room/panel-5.jpg',
      '/catalog/wood-panels/room/panel-6.jpg',
    ],
  },
]

export const PRODUCTION_PHOTOS: string[] = [
  '/catalog/production/design/des-03.jpg',
  '/catalog/production/design/des-04.jpg',
  '/catalog/production/design/des-01.jpg',
  '/catalog/production/design/des-02.jpg',
  '/catalog/production/assembly/asm-01.jpg',
  '/catalog/production/assembly/asm-02.jpg',
  '/catalog/production/assembly/asm-03.jpg',
  '/catalog/production/assembly/asm-04.jpg',
  '/catalog/production/assembly/asm-05.jpg',
  '/catalog/production/assembly/asm-06.jpg',
  '/catalog/production/finishing/fin-01.jpg',
  '/catalog/production/finishing/fin-02.jpg',
  '/catalog/production/finishing/fin-03.jpg',
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
