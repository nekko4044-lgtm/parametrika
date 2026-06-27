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
  category: 'Design' | 'Process' | 'Materials'
  en: ArticleLocale
  ru: ArticleLocale
  ar: ArticleLocale
}

export const ARTICLES: Article[] = [
  {
    slug: 'what-is-parametric-furniture',
    publishedAt: '2026-06-15',
    readingTime: 6,
    category: 'Design',
    en: {
      title: 'What is Parametric Furniture?',
      excerpt: 'Parametric design uses computational algorithms to generate forms impossible to create by hand alone. Here is what that means for furniture — and why it changes everything.',
      sections: [
        { type: 'paragraph', content: 'The word "parametric" comes from mathematics. A parametric equation describes a curve not with fixed coordinates, but with variables — parameters — that can shift, and as they shift, the shape changes. In architecture, parametric design uses this logic computationally: input a set of rules, and the software generates form that follows those rules with perfect consistency.' },
        { type: 'paragraph', content: 'Zaha Hadid made parametric architecture famous. The flowing, organic shapes of her buildings — curves that seem to defy structural logic, forms that look grown rather than built — are the result of algorithms, not hand-drawing. The computer finds paths through the design space that no human would reach alone.' },
        { type: 'h2', content: 'What it means for furniture' },
        { type: 'paragraph', content: 'Applied to furniture, the principle is the same. A parametric table base is not drawn and then transferred to a craftsman. It is modeled computationally — each layer, each curve, each rib — with precise parameters governing how the form flows from top to foot. The result is geometry that cannot be produced by traditional woodworking: forms that are simultaneously structural and sculptural, with no compromise between the two.' },
        { type: 'paragraph', content: 'At Parametrika, every dining table, every console, every piece begins as a three-dimensional parametric model. The software defines the form; the engineer reviews the structure; the craftsman builds what neither could have arrived at alone.' },
        { type: 'h2', content: 'Why CNC milling is essential' },
        { type: 'paragraph', content: 'Parametric forms cannot be carved by hand. The precision required — tolerances measured in fractions of a millimetre, curves that must match across dozens of layers — demands CNC milling. Our machines translate the digital model directly into cut paths through engineered solid wood: Finnish plywood, 15mm per layer, assembled and bonded under controlled conditions.' },
        { type: 'paragraph', content: 'Each layer is cut, inspected, and fitted. Inside the structure, metal rods run through the form for structural integrity — invisible from the outside, essential to the piece\'s longevity. This is not furniture assembled from parts. It is furniture grown, layer by layer, into a single continuous object.' },
        { type: 'h2', content: 'The finish as final argument' },
        { type: 'paragraph', content: 'Raw CNC-milled wood is precise but naked. The finish is where the material becomes furniture. Our process is four stages: primer coat, hand-sanding, base colour, and a protective topcoat using BETEK premium lacquer — a Turkish-manufactured lacquer specified for its hardness, UV resistance, and depth of finish.' },
        { type: 'paragraph', content: 'Nine wood tones are available, from Deep Espresso to Whitewash. Each is applied to the complete form before a single photograph is taken, because the colour is not applied to wood — it is applied to a sculpture.' },
        { type: 'h2', content: 'What parametric furniture is not' },
        { type: 'list', content: [
          'It is not 3D-printed furniture. The process is subtractive (CNC milling removes material), not additive (printing adds it). The structural and aesthetic properties are entirely different.',
          'It is not mass-produced furniture with an organic aesthetic. Every Parametrika piece is made to order, for one client, in the dimensions and finish they specify.',
          'It is not cold or industrial. Parametric design produces forms of warmth and natural rhythm — curves that feel grown, not calculated.',
        ]},
        { type: 'h2', content: 'The object is the answer' },
        { type: 'paragraph', content: 'The best way to understand parametric furniture is to stand in front of a piece. The ZAHA dining table, with its layered base rising from the floor in a single continuous sweep, answers the question more completely than any description. The SAHARA rocking chair, whose parametric ribs follow the path of natural motion, makes the logic of the form immediately legible.' },
        { type: 'paragraph', content: 'We do not design for novelty. We design for presence — for the feeling that a piece of furniture arrived in a space as if it had always been there, had simply been waiting to be found.' },
      ],
    },
    ru: {
      title: 'Что такое параметрическая мебель?',
      excerpt: 'Параметрическое проектирование использует вычислительные алгоритмы для создания форм, невозможных вручную. Что это значит для мебели — и почему это меняет всё.',
      sections: [
        { type: 'paragraph', content: 'Слово "параметрический" родом из математики. Параметрическое уравнение описывает кривую не фиксированными координатами, а переменными — параметрами. При их изменении меняется и форма. В архитектуре параметрическое проектирование использует эту логику вычислительно: задаёшь набор правил, и программа генерирует форму, следующую этим правилам с идеальной точностью.' },
        { type: 'paragraph', content: 'Заха Хадид сделала параметрическую архитектуру знаменитой. Плавные органические формы её зданий — изгибы, которые, кажется, игнорируют конструктивную логику, формы, выглядящие выращенными, а не построенными — результат алгоритмов, а не ручного чертежа. Компьютер находит пути в пространстве проектирования, до которых человек не добрался бы самостоятельно.' },
        { type: 'h2', content: 'Что это значит для мебели' },
        { type: 'paragraph', content: 'Применительно к мебели принцип тот же. Параметрическое основание стола не рисуется, а затем передаётся мастеру. Оно моделируется вычислительно — каждый слой, каждый изгиб, каждое ребро — с точными параметрами, определяющими, как форма перетекает от столешницы к полу. Результат — геометрия, которую невозможно получить традиционными столярными методами: одновременно конструктивная и скульптурная, без компромисса между двумя.' },
        { type: 'paragraph', content: 'В Parametrika каждый обеденный стол, каждая консоль, каждое изделие начинается как трёхмерная параметрическая модель. Программа определяет форму; инженер проверяет конструкцию; мастер создаёт то, что ни один из них не смог бы создать в одиночку.' },
        { type: 'h2', content: 'Почему ЧПУ-фрезеровка необходима' },
        { type: 'paragraph', content: 'Параметрические формы нельзя вырезать вручную. Требуемая точность — допуски в доли миллиметра, изгибы, которые должны совпадать на десятках слоёв — требует ЧПУ-фрезеровки. Наши станки переводят цифровую модель напрямую в пути резки через инженерный массивный шпон: финская фанера 15 мм на слой, собранная и склеенная в контролируемых условиях.' },
        { type: 'paragraph', content: 'Каждый слой вырезается, проверяется и подгоняется. Внутри конструкции через форму проходят металлические стержни для обеспечения структурной целостности — снаружи невидимые, но необходимые для долговечности изделия. Это не мебель, собранная из деталей. Это мебель, выращенная слой за слоем в единый непрерывный объект.' },
        { type: 'h2', content: 'Финиш как финальный аргумент' },
        { type: 'paragraph', content: 'Сырая ЧПУ-фрезерованная древесина точна, но обнажена. Финиш — это то, где материал становится мебелью. Наш процесс включает четыре этапа: грунтовочный слой, ручная шлифовка, базовый цвет и защитное покрытие лаком BETEK premium — турецкий лак, выбранный за твёрдость, UV-стойкость и глубину покрытия.' },
        { type: 'paragraph', content: 'Доступны девять оттенков древесины — от Deep Espresso до Whitewash. Каждый наносится на готовую форму до того, как будет сделана единственная фотография, потому что цвет наносится не на дерево — он наносится на скульптуру.' },
        { type: 'h2', content: 'Чем параметрическая мебель не является' },
        { type: 'list', content: [
          'Это не 3D-печатная мебель. Процесс субтрактивный (ЧПУ-фрезеровка удаляет материал), а не аддитивный (печать добавляет). Конструктивные и эстетические свойства принципиально разные.',
          'Это не серийная мебель с органической эстетикой. Каждое изделие Parametrika изготавливается по индивидуальному заказу, для одного клиента, в указанных им размерах и отделке.',
          'Это не холодное и не промышленное. Параметрическое проектирование создаёт формы тепла и природного ритма — изгибы, которые кажутся выращенными, а не вычисленными.',
        ]},
        { type: 'h2', content: 'Объект — лучший ответ' },
        { type: 'paragraph', content: 'Лучший способ понять параметрическую мебель — встать перед изделием. Обеденный стол ZAHA с многослойным основанием, поднимающимся от пола в едином непрерывном движении, отвечает на вопрос полнее любого описания. Кресло-качалка SAHARA, параметрические рёбра которой следуют траектории естественного движения, делает логику формы немедленно понятной.' },
        { type: 'paragraph', content: 'Мы проектируем не ради новизны. Мы проектируем ради присутствия — ощущения, что предмет мебели появился в пространстве так, словно всегда был там, просто ждал, когда его найдут.' },
      ],
    },
    ar: {
      title: 'ما هو الأثاث البارامتري؟',
      excerpt: 'يستخدم التصميم البارامتري خوارزميات حاسوبية لإنشاء أشكال يستحيل صنعها يدوياً. إليك ما يعنيه ذلك للأثاث — ولماذا يغيّر كل شيء.',
      sections: [
        { type: 'paragraph', content: 'تأتي كلمة "بارامتري" من الرياضيات. تصف المعادلة البارامترية منحنىً لا بإحداثيات ثابتة، بل بمتغيرات — معاملات — يمكن أن تتغير، وعندما تتغير، تتغير الشكل. في العمارة، يستخدم التصميم البارامتري هذا المنطق حاسوبياً: أدخل مجموعة من القواعد، وسيولّد البرنامج شكلاً يتبع تلك القواعد باتساق مثالي.' },
        { type: 'paragraph', content: 'جعلت زها حديد العمارة البارامترية مشهورة. الأشكال العضوية المتدفقة في مبانيها — منحنيات تبدو وكأنها تتحدى المنطق الإنشائي، أشكال تبدو منبثقة لا مبنية — هي نتاج خوارزميات لا رسم يدوي. يجد الحاسوب مسارات في فضاء التصميم لا يمكن للإنسان أن يصل إليها وحده.' },
        { type: 'h2', content: 'ما يعنيه ذلك للأثاث' },
        { type: 'paragraph', content: 'ينطبق المبدأ ذاته على الأثاث. قاعدة الطاولة البارامترية لا تُرسم ثم تُنقل إلى حرفي. تُنمذَج حاسوبياً — كل طبقة، كل منحنى، كل ضلع — بمعاملات دقيقة تحكم كيفية تدفق الشكل من الأعلى إلى الأسفل. النتيجة هندسة لا يمكن إنتاجها بأساليب النجارة التقليدية: أشكال إنشائية ونحتية في آنٍ واحد، بلا تنازل بين الاثنين.' },
        { type: 'paragraph', content: 'في Parametrika، كل طاولة طعام، كل طاولة عرض، كل قطعة تبدأ كنموذج بارامتري ثلاثي الأبعاد. البرنامج يحدد الشكل؛ المهندس يراجع البنية الإنشائية؛ الحرفي يصنع ما لم يكن أيٌّ منهم ليصل إليه بمفرده.' },
        { type: 'h2', content: 'لماذا الحفر بالحاسوب ضروري' },
        { type: 'paragraph', content: 'لا يمكن نحت الأشكال البارامترية يدوياً. الدقة المطلوبة — تفاوتات بأجزاء من الملليمتر، منحنيات يجب أن تتطابق عبر عشرات الطبقات — تستلزم الحفر بتقنية CNC. تترجم آلاتنا النموذج الرقمي مباشرةً إلى مسارات قطع في الخشب الهندسي الصلب: خشب رقائقي فنلندي بسماكة 15 ملم للطبقة، يُجمَّع ويُلصق في ظروف مضبوطة.' },
        { type: 'paragraph', content: 'تُقطع كل طبقة، وتُفحص، وتُجمَّع. داخل البنية، تمر قضبان معدنية عبر الشكل لضمان المتانة الإنشائية — غير مرئية من الخارج، لكنها ضرورية لمتانة القطعة. هذا ليس أثاثاً مُجمَّعاً من قطع. هو أثاث ينمو طبقةً تلو طبقة في جسم واحد متصل.' },
        { type: 'h2', content: 'اللمسة النهائية كحجة أخيرة' },
        { type: 'paragraph', content: 'الخشب المحفور بالحاسوب دقيق لكنه عارٍ. اللمسة النهائية هي ما يحول المادة إلى أثاث. تتكون عمليتنا من أربع مراحل: طبقة التأسيس، والصنفرة اليدوية، واللون الأساسي، والطبقة الواقية بورنيش BETEK المميز — ورنيش تركي الصنع مختار لصلابته ومقاومته للأشعة فوق البنفسجية وعمق لونه.' },
        { type: 'paragraph', content: 'تتوفر تسعة درجات خشبية، من Espresso الداكن إلى Whitewash. يُطبَّق كل لون على الشكل المكتمل قبل التقاط أي صورة، لأن اللون لا يُطبَّق على الخشب — بل يُطبَّق على منحوتة.' },
        { type: 'h2', content: 'ما ليس عليه الأثاث البارامتري' },
        { type: 'list', content: [
          'ليس أثاثاً مطبوعاً بثلاثة أبعاد. العملية طرحية (الحفر CNC يزيل المادة)، لا إضافية (الطباعة تضيفها). الخصائص الإنشائية والجمالية مختلفة كلياً.',
          'ليس أثاثاً إنتاجياً بجمالية عضوية. كل قطعة Parametrika مصنوعة بطلب خاص، لعميل واحد، بالأبعاد والتشطيب الذي يحدده.',
          'ليس بارداً أو صناعياً. التصميم البارامتري ينتج أشكالاً دافئة ذات إيقاع طبيعي — منحنيات تبدو منبثقة لا محسوبة.',
        ]},
        { type: 'h2', content: 'القطعة هي الجواب' },
        { type: 'paragraph', content: 'أفضل طريقة لفهم الأثاث البارامتري هي الوقوف أمام قطعة. طاولة الطعام ZAHA بقاعدتها متعددة الطبقات الصاعدة من الأرض في انسياب واحد متواصل تجيب على السؤال بعمق يفوق أي وصف. كرسي الهزاز SAHARA، التي تتبع أضلاعها البارامترية مسار الحركة الطبيعية، تجعل منطق الشكل مفهوماً فوراً.' },
        { type: 'paragraph', content: 'لا نصمم بحثاً عن الجدة. نصمم من أجل الحضور — ذلك الشعور بأن قطعة الأثاث وصلت إلى الفضاء كما لو كانت موجودة دائماً، تنتظر فقط أن تُكتشف.' },
      ],
    },
  },

  {
    slug: 'how-we-make-our-furniture',
    publishedAt: '2026-06-22',
    readingTime: 8,
    category: 'Process',
    en: {
      title: 'How We Make Our Furniture: From 3D Model to White-Glove Delivery',
      excerpt: 'From the first sketch to the final installation, every Parametrika piece passes through seven stages. Here is what happens between "yes" and "delivered."',
      sections: [
        { type: 'paragraph', content: 'Every Parametrika piece begins with a conversation and ends with an installation. Between those two moments, seven stages of work — each requiring different expertise, each impossible to rush. This is not furniture that tolerates shortcuts.' },
        { type: 'h2', content: '01 — Concept and consultation' },
        { type: 'paragraph', content: 'Before any design begins, we understand the space. Where will the piece live? What is the room\'s light, its colour, its purpose? A dining table for a Palm Jumeirah villa has different demands than one for a hotel lobby in Downtown Dubai. We ask questions that most furniture suppliers do not, because our process requires the answers.' },
        { type: 'paragraph', content: 'From the consultation emerges a brief: dimensions, finish, functional requirements. Sometimes the brief is loose — "a table that commands the room." Sometimes it is precise — "2,400 x 1,100 x 750mm, Dark Walnut, for eight." Both are valid starting points.' },
        { type: 'h2', content: '02 — Parametric modelling' },
        { type: 'paragraph', content: 'The designer works in 3D parametric software, building the form with computational precision. This stage is iterative — not a linear path from concept to model, but a series of refinements. Parameters are adjusted, curves are tested, proportions are reconsidered. The model that emerges is exact: every layer, every curve, every tolerance specified to the tenth of a millimetre.' },
        { type: 'paragraph', content: 'The client sees the model before any material is cut. We present renders in the specified finish, from multiple angles, sometimes placed into a photograph of the actual room. Changes at this stage cost nothing. Changes after milling begin cost everything.' },
        { type: 'h2', content: '03 — Structural engineering review' },
        { type: 'paragraph', content: 'A parametric form that looks right must also hold weight, resist lateral force, and survive daily use for decades. Before any cutting begins, an engineer reviews the model. Load paths are confirmed. Metal rod placements — the internal reinforcement that runs through the structure — are specified. If a form\'s visual logic conflicts with its structural requirements, we redesign. The object\'s longevity is not negotiable.' },
        { type: 'h2', content: '04 — CNC milling' },
        { type: 'paragraph', content: 'The digital model is translated into machine instructions. Our CNC machines work through Finnish plywood, 15mm per layer, cutting the exact profiles that the parametric model specifies. Each cut is precise to fractions of a millimetre. The machine has no memory of previous cuts, no fatigue, no drift. Each layer is identical to what the model requires.' },
        { type: 'paragraph', content: 'The cut layers are assembled in sequence, bonded under controlled pressure, with metal rods threaded through the structure as specified. The internal skeleton is invisible in the finished piece. Its presence is felt in the solidity of the result — the absence of flex, creak, or doubt.' },
        { type: 'h2', content: '05 — Hand finishing' },
        { type: 'paragraph', content: 'CNC milling is a mechanical process. The finish is not. Once the structure is assembled, our craftsmen take over: the surface is sanded, imperfections identified and corrected, primer applied, sanded again. The colour coat follows, then the topcoat — BETEK premium lacquer, applied in controlled conditions to ensure uniform coverage across the entire form.' },
        { type: 'paragraph', content: 'The finish process takes longer than the milling. This is by design. A poorly finished parametric form is just an expensive failure. A well-finished one is an object that will outlast the room it inhabits.' },
        { type: 'h2', content: '06 — Quality control and photography' },
        { type: 'paragraph', content: 'Before the piece leaves our atelier, it is inspected against the original specification: dimensions verified, finish uniformity confirmed, structural integrity checked. Production photographs are taken in our studio — clean, uncontextualised images that document the piece as object, not as décor.' },
        { type: 'paragraph', content: 'Most of our client installations remain under NDA. The production photographs are what we have — and what we show. They are sufficient, because the object, photographed well, speaks for itself.' },
        { type: 'h2', content: '07 — White-glove delivery and installation' },
        { type: 'paragraph', content: 'Parametric furniture cannot be shipped in flat packs. Our delivery teams transport pieces in climate-controlled vehicles — temperature and humidity controlled for the duration of transit. Parametric wood structures are sensitive to rapid environmental changes; the journey from atelier to installation must be managed.' },
        { type: 'paragraph', content: 'Installation is included. Our team places each piece, adjusts level and position, and removes all packaging. The client\'s first experience of the piece in their space should be undisturbed by process. We leave when the room is right.' },
        { type: 'h2', content: 'The total time' },
        { type: 'paragraph', content: 'We do not publish lead times, because they depend on the piece, the finish, and our current schedule. What we can say: we do not rush. A piece made in haste is a piece made wrong. Contact us with your project and timeline, and we will tell you precisely what we can do.' },
      ],
    },
    ru: {
      title: 'Как мы делаем нашу мебель: от 3D-модели до монтажа',
      excerpt: 'От первого эскиза до финальной установки каждое изделие Parametrika проходит семь этапов. Вот что происходит между "да" и "готово".',
      sections: [
        { type: 'paragraph', content: 'Каждое изделие Parametrika начинается с разговора и заканчивается монтажом. Между этими двумя моментами — семь этапов работы, каждый из которых требует разной экспертизы и не терпит спешки. Это не мебель, которая прощает компромиссы.' },
        { type: 'h2', content: '01 — Концепция и консультация' },
        { type: 'paragraph', content: 'Прежде чем начать проектирование, мы понимаем пространство. Где будет стоять изделие? Каков свет в комнате, её цвет, её назначение? Обеденный стол для виллы на Пальм-Джумейре предъявляет иные требования, чем стол для лобби отеля в Даунтаун Дубай. Мы задаём вопросы, которые большинство мебельных поставщиков не задают, — потому что наш процесс требует ответов.' },
        { type: 'paragraph', content: 'По итогам консультации формируется бриф: размеры, отделка, функциональные требования. Иногда бриф свободный — "стол, который владеет комнатой". Иногда точный — "2400 × 1100 × 750 мм, Dark Walnut, на восемь персон". Оба варианта — правильные отправные точки.' },
        { type: 'h2', content: '02 — Параметрическое моделирование' },
        { type: 'paragraph', content: 'Дизайнер работает в 3D параметрическом программном обеспечении, создавая форму с вычислительной точностью. Этот этап итерационный — не линейный путь от концепции к модели, а серия уточнений. Параметры корректируются, изгибы тестируются, пропорции пересматриваются. Итоговая модель точна: каждый слой, каждый изгиб, каждый допуск задан до десятой доли миллиметра.' },
        { type: 'paragraph', content: 'Клиент видит модель до того, как разрезан хоть один кусок материала. Мы представляем рендеры в заданной отделке, с разных углов, иногда вставленные в фотографию реальной комнаты. Изменения на этом этапе ничего не стоят. Изменения после начала фрезеровки стоят всего.' },
        { type: 'h2', content: '03 — Конструкторская проверка' },
        { type: 'paragraph', content: 'Параметрическая форма, которая выглядит правильно, должна также выдерживать нагрузку, противостоять боковым силам и служить десятилетиями. Перед началом любой фрезеровки инженер проверяет модель. Пути нагрузок подтверждаются. Расположение металлических стержней — внутреннего армирования, проходящего через конструкцию, — задаётся. Если визуальная логика формы противоречит конструктивным требованиям, мы переделываем. Долговечность объекта не обсуждается.' },
        { type: 'h2', content: '04 — ЧПУ-фрезеровка' },
        { type: 'paragraph', content: 'Цифровая модель переводится в машинные инструкции. Наши ЧПУ-станки работают с финской фанерой, 15 мм на слой, вырезая точные профили, заданные параметрической моделью. Каждый рез точен до долей миллиметра. Машина не помнит предыдущих резов, не устаёт, не сбивается. Каждый слой идентичен тому, что требует модель.' },
        { type: 'paragraph', content: 'Вырезанные слои собираются в последовательности, склеиваются под контролируемым давлением, с металлическими стержнями, продетыми через конструкцию согласно спецификации. Внутренний каркас невидим в готовом изделии. Его присутствие ощущается в монолитности результата — в отсутствии прогиба, скрипа, сомнения.' },
        { type: 'h2', content: '05 — Ручная отделка' },
        { type: 'paragraph', content: 'ЧПУ-фрезеровка — механический процесс. Отделка — нет. После сборки конструкции мастера берутся за работу: поверхность шлифуется, выявляются и устраняются дефекты, наносится грунтовка, затем снова шлифовка. Следует слой цвета, затем финишное покрытие — лак BETEK premium, наносимый в контролируемых условиях для равномерного покрытия всей формы.' },
        { type: 'paragraph', content: 'Процесс отделки занимает дольше, чем фрезеровка. Это сделано намеренно. Плохо отделанная параметрическая форма — просто дорогостоящая неудача. Хорошо отделанная — объект, который переживёт комнату, в которой стоит.' },
        { type: 'h2', content: '06 — Контроль качества и фотосъёмка' },
        { type: 'paragraph', content: 'Прежде чем изделие покинет наше ателье, оно проверяется по исходной спецификации: размеры подтверждаются, равномерность отделки проверяется, конструктивная целостность контролируется. Производственные фотографии делаются в нашей студии — чистые, бесконтекстные снимки, документирующие изделие как объект, а не как декор.' },
        { type: 'paragraph', content: 'Большинство наших установок у клиентов защищены NDA. Производственные фотографии — то, что у нас есть, и то, что мы показываем. Их достаточно, потому что объект, хорошо сфотографированный, говорит сам за себя.' },
        { type: 'h2', content: '07 — Доставка и монтаж' },
        { type: 'paragraph', content: 'Параметрическую мебель нельзя доставить плоской упаковкой. Наши бригады перевозят изделия в автомобилях с климат-контролем — температура и влажность контролируются на протяжении всего пути. Параметрические деревянные конструкции чувствительны к резким изменениям окружающей среды; путь из ателье на место установки должен быть управляемым.' },
        { type: 'paragraph', content: 'Монтаж включён. Наша команда устанавливает каждое изделие, регулирует уровень и положение, убирает всю упаковку. Первое впечатление клиента от изделия в его пространстве не должно быть омрачено процессом. Мы уходим, когда комната в порядке.' },
        { type: 'h2', content: 'Общее время' },
        { type: 'paragraph', content: 'Мы не публикуем сроки изготовления, потому что они зависят от изделия, отделки и нашего текущего расписания. Что можем сказать: мы не торопимся. Изделие, сделанное в спешке, сделано неправильно. Свяжитесь с нами с вашим проектом и сроками — мы скажем вам точно, что можем сделать.' },
      ],
    },
    ar: {
      title: 'كيف نصنع أثاثنا: من النموذج ثلاثي الأبعاد إلى التسليم بالقفازات البيضاء',
      excerpt: 'من الرسم الأول إلى التركيب النهائي، تمر كل قطعة Parametrika بسبع مراحل. إليك ما يحدث بين "نعم" و"جاهز".',
      sections: [
        { type: 'paragraph', content: 'كل قطعة Parametrika تبدأ بمحادثة وتنتهي بتركيب. بين هذين اللحظتين سبع مراحل عمل — كل منها يتطلب خبرة مختلفة، ولا تتسامح أيٌّ منها مع الاستعجال. هذا ليس أثاثاً يتقبّل الاختصارات.' },
        { type: 'h2', content: '٠١ — المفهوم والاستشارة' },
        { type: 'paragraph', content: 'قبل أي تصميم، نفهم الفضاء. أين ستوضع القطعة؟ ما ضوء الغرفة، ولونها، ووظيفتها؟ طاولة طعام لفيلا في نخلة جميرا لها متطلبات مختلفة عن طاولة لردهة فندق في وسط مدينة دبي. نطرح أسئلة لا يطرحها معظم موردي الأثاث، لأن عمليتنا تتطلب الإجابات.' },
        { type: 'paragraph', content: 'من الاستشارة ينبثق المواصفات: الأبعاد، والتشطيب، والمتطلبات الوظيفية. أحياناً تكون المواصفات مرنة — "طاولة تسيطر على الغرفة". وأحياناً دقيقة — "2400 × 1100 × 750 ملم، Dark Walnut، لثمانية أشخاص". كلاهما نقطة انطلاق صحيحة.' },
        { type: 'h2', content: '٠٢ — النمذجة البارامترية' },
        { type: 'paragraph', content: 'يعمل المصمم ببرنامج النمذجة ثلاثية الأبعاد البارامترية، بانياً الشكل بدقة حاسوبية. هذه المرحلة تكرارية — ليست مساراً خطياً من المفهوم إلى النموذج، بل سلسلة من التنقيحات. تُضبط المعاملات، وتُختبر المنحنيات، وتُعاد النظر في النسب. النموذج الناتج دقيق: كل طبقة، كل منحنى، كل تفاوت محدد إلى جزء من العشرة من الملليمتر.' },
        { type: 'paragraph', content: 'يرى العميل النموذج قبل قطع أي مادة. نقدّم تصيير مرئي بالتشطيب المحدد، من زوايا متعددة، وأحياناً في صورة للغرفة الفعلية. التغييرات في هذه المرحلة لا تكلّف شيئاً. التغييرات بعد بدء الحفر تكلّف كل شيء.' },
        { type: 'h2', content: '٠٣ — المراجعة الهندسية الإنشائية' },
        { type: 'paragraph', content: 'الشكل البارامتري الجميل يجب أن يتحمّل الوزن أيضاً، ويقاوم القوى الجانبية، ويصمد للاستخدام اليومي لعقود. قبل أي قطع، يراجع مهندس النموذج. تُؤكَّد مسارات الأحمال. تُحدَّد مواضع القضبان المعدنية — التسليح الداخلي الذي يمر عبر البنية. إذا تعارض المنطق البصري للشكل مع متطلباته الإنشائية، نعيد التصميم. متانة القطعة ليست قابلة للتفاوض.' },
        { type: 'h2', content: '٠٤ — الحفر بتقنية CNC' },
        { type: 'paragraph', content: 'يُترجَم النموذج الرقمي إلى تعليمات آلة. تعمل آلات CNC لدينا على الخشب الرقائقي الفنلندي، 15 ملم للطبقة، قاطعةً البروفيلات الدقيقة التي يحددها النموذج البارامتري. كل قطعة دقيقة حتى أجزاء من الملليمتر. الآلة لا تتذكر القطعات السابقة، ولا تتعب، ولا تنحرف. كل طبقة مطابقة لما يتطلبه النموذج.' },
        { type: 'paragraph', content: 'تُجمَّع الطبقات المقطوعة بالتسلسل، وتُلصق تحت ضغط مضبوط، مع تمرير قضبان معدنية عبر البنية كما هو محدد. الهيكل الداخلي غير مرئي في القطعة النهائية. وجوده يُحسّ بصلابة النتيجة — غياب الاهتزاز والطقطقة والشك.' },
        { type: 'h2', content: '٠٥ — التشطيب اليدوي' },
        { type: 'paragraph', content: 'الحفر بالحاسوب عملية ميكانيكية. التشطيب ليس كذلك. بعد تجميع البنية، يتولى حرفيونا: تُصنفر السطح، وتُكتشف العيوب وتُصحَّح، وتُطبَّق طبقة التأسيس، وتُصنفر مجدداً. يأتي بعدها اللون الأساسي، ثم الطبقة الواقية — ورنيش BETEK المميز، يُطبَّق في ظروف مضبوطة لضمان تغطية منتظمة على كامل الشكل.' },
        { type: 'paragraph', content: 'تستغرق عملية التشطيب وقتاً أطول من الحفر. هذا مقصود. الشكل البارامتري المشطوب بشكل سيئ مجرد فشل مكلف. المشطوب جيداً قطعة ستبقى بعد الغرفة التي تسكنها.' },
        { type: 'h2', content: '٠٦ — مراقبة الجودة والتصوير' },
        { type: 'paragraph', content: 'قبل مغادرة القطعة لأتيليهنا، تُفحص وفق المواصفات الأصلية: تُتحقق الأبعاد، وتُؤكَّد انتظام التشطيب، وتُفحص المتانة الإنشائية. تُلتقط صور الإنتاج في الاستوديو — صور نظيفة خالية من السياق توثّق القطعة كجسم، لا كديكور.' },
        { type: 'paragraph', content: 'معظم تركيبات عملائنا محاطة باتفاقيات سرية. صور الإنتاج هي ما لدينا — وما نعرضه. إنها كافية، لأن الجسم، عند تصويره جيداً، يتكلم عن نفسه.' },
        { type: 'h2', content: '٠٧ — التسليم بالقفازات البيضاء والتركيب' },
        { type: 'paragraph', content: 'لا يمكن شحن الأثاث البارامتري في علب مسطحة. ينقل فريق التسليم لدينا القطع في مركبات بتحكم مناخي — تُضبط الحرارة والرطوبة طوال مدة النقل. البنى الخشبية البارامترية حساسة للتغيرات البيئية المفاجئة؛ الرحلة من الأتيليه إلى موقع التركيب يجب أن تكون مُدارة.' },
        { type: 'paragraph', content: 'التركيب مشمول. يضع فريقنا كل قطعة، ويضبط المستوى والموضع، ويزيل جميع التغليف. يجب ألا يكون التجربة الأولى للعميل مع القطعة في فضائه مشوّشة بالعملية. نغادر عندما تكون الغرفة على ما يرام.' },
        { type: 'h2', content: 'الوقت الإجمالي' },
        { type: 'paragraph', content: 'لا ننشر مواعيد التسليم، لأنها تعتمد على القطعة والتشطيب وجدولنا الحالي. ما يمكننا قوله: لا نتسرع. قطعة صُنعت باستعجال صُنعت بشكل خاطئ. تواصل معنا بمشروعك والجدول الزمني، وسنخبرك بدقة بما يمكننا فعله.' },
      ],
    },
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map(a => a.slug)
}
