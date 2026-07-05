export type ArticleLocale = {
  title: string
  excerpt: string
  sections: ArticleSection[]
}

export type ArticleSection = {
  type: 'paragraph' | 'h2' | 'h3' | 'list'
  content: string | string[]
}

export type Article = {
  slug: string
  publishedAt: string
  readingTime: number
  category: 'Design' | 'Process' | 'Materials' | 'Lighting' | 'Guide'
  en: ArticleLocale
  ru: ArticleLocale
  ar: ArticleLocale
}

export const ARTICLES: Article[] = [
  {
    slug: 'custom-furniture-restaurants-hotels-dubai',
    publishedAt: '2026-07-04',
    readingTime: 6,
    category: 'Design',
    en: {
      title: 'Custom Furniture for Restaurants and Hotels: What Dubai Venues Commission',
      excerpt: 'Bar collections, dining tables and entrance pieces that don\'t repeat in the venue across the road. How parametric furniture performs in commercial interiors and what it\'s built to withstand.',
      sections: [
        { type: 'paragraph', content: 'Restaurants and hotels in Dubai share the same furniture problem: the catalogues are the same for everyone. The piece standing in your venue appears six months later in the one across the road. For an interior backed by a serious budget and a designer\'s work, this is devaluation — the guest has seen it before, and the interior stops belonging to the brand.' },
        { type: 'paragraph', content: 'Furniture made to a single project solves this by definition: every piece is designed for one client and exists in one copy. Here is what commercial interiors commission from a parametric range, and what daily service demands of it.' },
        { type: 'h2', content: 'The bar area' },
        { type: 'paragraph', content: 'The bar is the point around which a venue\'s evening revolves, and it\'s visible from every corner of the room. The RAFAN Bar collection — a bar-height table and stools with parametric ribs — turns the bar area into something guests photograph, rather than a counter with seating.' },
        { type: 'paragraph', content: 'The height, length and tone of the group are set per project: to the height of your counter, the number of covers, the palette of the interior.' },
        { type: 'h2', content: 'Dining tables for the floor' },
        { type: 'paragraph', content: 'The dining range covers different seating formats: ZAHA seats eight and carries a glass top, ZAHIR seats six, VILAR seats four. In a restaurant scenario this becomes zoning — several VILAR tables on the main floor, a ZAHIR or ZAHA in the private dining room or at the chef\'s table.' },
        { type: 'paragraph', content: 'For lounges and lobby cafés there is the coffee range: the RAFAN set of four tables, DUNE, RAYAN. A set of several tables earns its keep precisely in commercial space — it can be reconfigured for a new layout without calling anyone in.' },
        { type: 'h2', content: 'The entrance and lobby' },
        { type: 'paragraph', content: 'The first seconds in a lobby decide how a guest rates everything after them. This is where the parametric console works: at reception, in the waiting area, against a display wall. It\'s a piece that holds an empty wall on its own.' },
        { type: 'paragraph', content: 'Consoles aren\'t tied to catalogue dimensions — length, depth and tone are made for a specific wall. The finish is the same one applied to the tables, so every tone in the space matches exactly. In an entrance zone, where everything is seen from two metres away, that matters.' },
        { type: 'h2', content: 'Terrace and poolside' },
        { type: 'paragraph', content: 'Parametric furniture is suitable for outdoor use: terraces, lounge areas, poolside. For venues with outdoor covers this means the interior continues outside, instead of switching the guest to plastic garden furniture from another world entirely.' },
        { type: 'h2', content: 'Built for wear' },
        { type: 'paragraph', content: 'Commercial service is harder than domestic life: hundreds of touches a day, cleaning, constant moving. The construction is engineered for it. The body is Finnish plywood in 15 mm layers with metal rods inside — rigid, and invisible from the outside. A four-stage finish ends with BETEK premium lacquer, which stands up to daily cleaning.' },
        { type: 'paragraph', content: 'Every piece is CNC-milled from an individual 3D model and finished by hand. Nine wood tones, from Deep Espresso to Whitewash — the palette can be matched to a venue\'s brand book.' },
        { type: 'h2', content: 'How it fits into your project' },
        { type: 'paragraph', content: 'We work directly with owners and with interior designers. The starting point is a floor plan and a concept: from these we propose a set of pieces and build a 3D model of each one before production begins. Climate-controlled delivery and installation are included — the venue receives furniture standing in place, not crates at the loading dock.' },
        { type: 'paragraph', content: 'Lead times depend on the scope of the order, so they\'re discussed per project. Reach us on WhatsApp or through the quote request form.' },
      ],
    },
    ru: {
      title: 'Параметрическая мебель для ресторанов и отелей: что заказывают заведения в Дубае',
      excerpt: 'Барные группы, столы для зала и предметы для входной зоны, которых нет ни в одном каталоге. Как параметрическая мебель работает в коммерческом интерьере и что она выдерживает.',
      sections: [
        { type: 'paragraph', content: 'У ресторана и отеля в Дубае одна и та же проблема с мебелью: каталоги общие для всех. Предмет, который стоит у вас, через полгода появляется в заведении через дорогу. Для интерьера, в который вложили серьёзный бюджет и работу дизайнера, это обесценивание — гость видел это раньше, интерьер перестаёт быть частью бренда.' },
        { type: 'paragraph', content: 'Мебель по индивидуальному проекту решает это по определению: каждое изделие проектируется под одного клиента и существует в одном экземпляре. Ниже — что из параметрической мебели заказывают коммерческие интерьеры и какие требования к ней предъявляет ежедневная эксплуатация.' },
        { type: 'h2', content: 'Барная зона' },
        { type: 'paragraph', content: 'Бар — точка, вокруг которой строится вечерняя жизнь заведения, и его видно из любого конца зала. Коллекция RAFAN Bar — стол и стулья барной высоты с параметрическими рёбрами — делает барную зону предметом, который фотографируют, а не просто стойкой с посадкой.' },
        { type: 'paragraph', content: 'Высота, длина и оттенок группы подбираются под конкретный проект: под высоту вашей стойки, под количество посадочных мест, под палитру интерьера.' },
        { type: 'h2', content: 'Столы для зала' },
        { type: 'paragraph', content: 'Обеденная линейка закрывает разные форматы посадки: ZAHA рассчитан на восемь персон и стеклянный топ, ZAHIR — на шесть, VILAR — на четыре. В ресторанном сценарии из этого собирается зонирование: несколько VILAR для основного зала, ZAHIR или ZAHA для приватной комнаты или chef\'s table.' },
        { type: 'paragraph', content: 'Для лаунжа и лобби-кафе есть кофейная линейка: сет RAFAN из четырёх столов, DUNE, RAYAN. Сет из нескольких столов удобен именно в коммерческом пространстве — его пересобирают под рассадку, не вызывая мебельщиков.' },
        { type: 'h2', content: 'Входная зона и лобби' },
        { type: 'paragraph', content: 'Первые секунды в лобби решают, как гость оценит всё остальное. Здесь работает параметрическая консоль: под ресепшен, в зону ожидания, к стене с декором. Это предмет, который в одиночку держит пустую стену.' },
        { type: 'paragraph', content: 'Консоли не привязаны к каталожным размерам — длина, глубина и оттенок делаются под конкретную стену. Отделка та же, что у столов, поэтому оттенки всех предметов в пространстве совпадают точно. Для входной зоны, где всё видно с расстояния двух метров, это имеет значение.' },
        { type: 'h2', content: 'Терраса и зона у бассейна' },
        { type: 'paragraph', content: 'Параметрическая мебель подходит и для улицы: террасы, лаунж-зоны, пространство у бассейна. Для заведений с внешней посадкой это возможность продолжить интерьер наружу, а не переключать гостя на пластиковую уличную мебель из другого мира.' },
        { type: 'h2', content: 'Что с износом' },
        { type: 'paragraph', content: 'Коммерческая эксплуатация жёстче домашней: сотни касаний в день, уборка, передвижения. Конструктив рассчитан на это. Корпус — финская фанера слоями по 15 мм с металлическими стержнями внутри, которые дают жёсткость и не видны снаружи. Отделка в четыре этапа завершается лаком BETEK premium, который держит ежедневную уборку.' },
        { type: 'paragraph', content: 'Каждое изделие фрезеруется на CNC по индивидуальной 3D-модели и дорабатывается вручную. Девять оттенков дерева, от Deep Espresso до Whitewash, — палитру можно подобрать под брендбук заведения.' },
        { type: 'h2', content: 'Как это встраивается в проект' },
        { type: 'paragraph', content: 'Мы работаем и напрямую с владельцами, и с дизайнерами интерьера. Стартовая точка — план помещения и концепция: по ним мы предлагаем состав предметов и строим 3D-модели каждого изделия до запуска производства. Доставка в климат-контролируемом транспорте и монтаж включены — заведение получает установленную мебель, а не ящики на разгрузке.' },
        { type: 'paragraph', content: 'Сроки зависят от состава заказа, поэтому обсуждаются под конкретный проект. Написать нам можно в WhatsApp или через форму запроса стоимости.' },
      ],
    },
    ar: {
      title: 'أثاث حسب الطلب للمطاعم والفنادق: ما تطلبه المنشآت في دبي',
      excerpt: 'مجموعات بار وطاولات طعام وقطع للمدخل لا تتكرر في المنشأة المقابلة عبر الشارع. كيف يؤدي الأثاث البارامتري في التصاميم الداخلية التجارية وما الذي صُمم ليتحمله.',
      sections: [
        { type: 'paragraph', content: 'تتشارك المطاعم والفنادق في دبي مشكلة الأثاث ذاتها: الكتالوجات واحدة للجميع. القطعة القائمة في منشأتك تظهر بعد ستة أشهر في المنشأة المقابلة عبر الشارع. وبالنسبة لتصميم داخلي تقف خلفه ميزانية جادة وعمل مصمم، هذا انتقاص من القيمة — فقد رآها الضيف من قبل، ويتوقف التصميم الداخلي عن الانتماء إلى العلامة التجارية.' },
        { type: 'paragraph', content: 'الأثاث المصنوع وفق مشروع واحد يحل هذا بحكم التعريف: كل قطعة تُصمَّم لعميل واحد وتوجد بنسخة واحدة. فيما يلي ما تطلبه التصاميم الداخلية التجارية من التشكيلة البارامترية، وما الذي تفرضه الخدمة اليومية عليها.' },
        { type: 'h2', content: 'منطقة البار' },
        { type: 'paragraph', content: 'البار هو النقطة التي تدور حولها أمسية المنشأة، وهو مرئي من كل زاوية في الصالة. مجموعة RAFAN Bar — طاولة بارتفاع البار ومقاعد بأضلاع بارامترية — تحوّل منطقة البار إلى شيء يصوّره الضيوف، لا إلى منضدة بمقاعد.' },
        { type: 'paragraph', content: 'يُحدَّد ارتفاع المجموعة وطولها ودرجة لونها وفق كل مشروع: بحسب ارتفاع منضدتك، وعدد المقاعد، ولوحة ألوان التصميم الداخلي.' },
        { type: 'h2', content: 'طاولات الطعام للصالة' },
        { type: 'paragraph', content: 'تغطي تشكيلة الطعام صيغ جلوس مختلفة: ZAHA تتسع لثمانية وتحمل سطحاً زجاجياً، وZAHIR تتسع لستة، وVILAR لأربعة. في سيناريو المطعم يتحول ذلك إلى تقسيم للمناطق — عدة طاولات VILAR في الصالة الرئيسية، وZAHIR أو ZAHA في غرفة الطعام الخاصة أو عند طاولة الشيف (chef\'s table).' },
        { type: 'paragraph', content: 'للاونجات ومقاهي اللوبي هناك تشكيلة القهوة: طقم RAFAN المكوّن من أربع طاولات، وDUNE، وRAYAN. الطقم المكوّن من عدة طاولات يثبت جدواه تحديداً في المساحة التجارية — إذ يمكن إعادة تشكيله وفق مخطط جديد دون استدعاء أحد.' },
        { type: 'h2', content: 'المدخل واللوبي' },
        { type: 'paragraph', content: 'الثواني الأولى في اللوبي تحدد كيف يقيّم الضيف كل ما يأتي بعدها. هنا تعمل طاولة الكونسول البارامترية: عند الاستقبال، وفي منطقة الانتظار، وأمام جدار العرض. إنها قطعة تحمل الجدار الفارغ بمفردها.' },
        { type: 'paragraph', content: 'لا ترتبط طاولات الكونسول بمقاسات الكتالوجات — فالطول والعمق ودرجة اللون تُصنع لجدار بعينه. والتشطيب هو ذاته المطبَّق على الطاولات، فتتطابق كل درجات الألوان في المساحة بدقة. وفي منطقة مدخل يُرى فيها كل شيء من مسافة مترين، لهذا الأمر أهميته.' },
        { type: 'h2', content: 'التراس ومنطقة المسبح' },
        { type: 'paragraph', content: 'الأثاث البارامتري مناسب للاستخدام الخارجي: التراسات ومناطق الاسترخاء وجوار المسبح. وللمنشآت ذات المقاعد الخارجية يعني ذلك أن التصميم الداخلي يستمر في الخارج، بدلاً من نقل الضيف إلى أثاث حدائق بلاستيكي من عالم آخر تماماً.' },
        { type: 'h2', content: 'مصمم لتحمّل الاستخدام' },
        { type: 'paragraph', content: 'الخدمة التجارية أقسى من الحياة المنزلية: مئات اللمسات يومياً، وتنظيف، وتحريك مستمر. البنية الإنشائية مهندَسة لذلك. الهيكل من الخشب الرقائقي الفنلندي بطبقات سماكتها 15 ملم مع قضبان معدنية في الداخل — صلب، وغير مرئي من الخارج. ويُختتم التشطيب رباعي المراحل بورنيش BETEK الفاخر الذي يتحمل التنظيف اليومي.' },
        { type: 'paragraph', content: 'تُحفر كل قطعة بتقنية CNC وفق نموذج ثلاثي الأبعاد فردي وتُستكمل يدوياً. تسع درجات خشبية، من Deep Espresso إلى Whitewash — يمكن مطابقة اللوحة اللونية مع دليل العلامة التجارية للمنشأة.' },
        { type: 'h2', content: 'كيف يندمج ذلك في مشروعك' },
        { type: 'paragraph', content: 'نعمل مباشرةً مع المالكين ومع مصممي الديكور الداخلي. نقطة الانطلاق هي مخطط المكان والمفهوم: بناءً عليهما نقترح تشكيلة القطع ونبني نموذجاً ثلاثي الأبعاد لكل قطعة قبل بدء الإنتاج. التوصيل بتحكم مناخي والتركيب مشمولان — تتسلم المنشأة أثاثاً قائماً في مكانه، لا صناديق عند منصة التفريغ.' },
        { type: 'paragraph', content: 'تعتمد المدد الزمنية على نطاق الطلب، لذا تُناقش وفق كل مشروع. تواصل معنا عبر WhatsApp أو من خلال نموذج طلب عرض السعر.' },
      ],
    },
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug)
}

/**
 * Returns only articles whose publishedAt date has already arrived
 * (compared in UTC, publishedAt format 'YYYY-MM-DD'), sorted with the
 * most recently published article first.
 *
 * This is the single source of truth for what's publicly visible:
 * future-dated articles can live in ARTICLES ahead of time and will
 * simply stay invisible until a build runs on/after their publishedAt.
 */
export function getPublishedArticles(): Article[] {
  const now = new Date()
  return ARTICLES.filter(a => new Date(a.publishedAt) <= now).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getAllArticleSlugs(): string[] {
  return getPublishedArticles().map(a => a.slug)
}
