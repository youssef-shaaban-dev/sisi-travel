export interface ProgramHotel {
  name: string;
  city: 'مكة المكرمة' | 'المدينة المنورة';
  stars: number;
  distance: string;
}

export interface ProgramItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
}

export interface TravelProgram {
  id: string;
  slug: string;
  title: string;
  category: 'vip' | 'ramadan' | 'economic' | 'hajj';
  categoryLabel: string;
  subtitle: string;
  summary: string;
  featuredImage: string;
  galleryImages: string[];
  durationDays: number;
  durationNights: number;
  meccaNights: number;
  medinaNights: number;
  priceNote: string;
  badgeText: string;
  isFeatured: boolean;
  airline: string;
  flightType: string;
  hotels: ProgramHotel[];
  includedServices: string[];
  excludedServices: string[];
  itinerary: ProgramItineraryDay[];
  importantNotes: string[];
}

export const PROGRAM_CATEGORIES = [
  { id: 'all', label: 'جميع البرامج' },
  { id: 'vip', label: 'عمرة VIP' },
  { id: 'ramadan', label: 'عمرة رمضان' },
  { id: 'economic', label: 'العمرة الاقتصادية' },
  { id: 'hajj', label: 'برامج الحج' },
];

export const UMRAH_PROGRAMS: TravelProgram[] = [
  {
    id: 'umrah-vip-5stars',
    slug: 'umrah-vip-5stars',
    title: 'عمرة الخمس نجوم الـ VIP — إقامة فاخرة صف أول',
    category: 'vip',
    categoryLabel: 'عمرة 5 نجوم VIP',
    subtitle: 'تجربة إيمانية استثنائية مع إقامة في أرقى الفنادق المطلة مباشرة على الحرم المكي الشريف.',
    summary: 'برنامج عمرة متميز مصمم لمن يبحث عن أرقى مستويات الراحة والخدمة الفندقية. يشمل الطيران المباشر، الفنادق المطلة على ساحة الحرم المكي والمسجد النبوي، وانتقالات VIP بسيارات حديثة مكيفة.',
    featuredImage: '/images/hotel-suite.jpg',
    galleryImages: [
      '/images/hotel-suite.jpg',
      '/images/hero-kaaba.jpg',
      '/images/medina-mosque.jpg',
      '/images/vip-bus.jpg',
    ],
    durationDays: 10,
    durationNights: 9,
    meccaNights: 5,
    medinaNights: 4,
    priceNote: 'برنامج فاخر شاملاً الطيران والتأشيرة والإقامة الفاخرة',
    badgeText: 'الأكثر طلباً VIP',
    isFeatured: true,
    airline: 'مصر للطيران / الخطوط السعودية',
    flightType: 'طيران مباشر (القاهرة - جدة / المدينة - القاهرة)',
    hotels: [
      {
        name: 'فندق فيرمونت برج الساعة مكة (Fairmont Makkah Clock Royal Tower)',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'مباشرة على ساحة الحرم المكي',
      },
      {
        name: 'فندق دار التقوى المدينة المنورة (Dar Al Taqwa Medina)',
        city: 'المدينة المنورة',
        stars: 5,
        distance: 'خطوات قليلة من الحرم النبوي الشريف',
      },
    ],
    includedServices: [
      'تذاكر الطيران المباشر على خطوط مصر للطيران أو السعودية',
      'تأشيرة العمرة الإلكترونية مع التأمين الطبي الشامل',
      'الإقامة الفاخرة في فنادق 5 نجوم صف أول شاملاً بوفيه الإفطار اليومي',
      'الانتقالات بأتوبيسات VIP حديثة مكيفة موديل السنة',
      'مزارات المدينة المنورة (مسجد قباء، جبل أحد، مجمع الملك فهد لمصحف الشريف)',
      'إشراف ديني وإداري متخصص متواجد على مدار 24 ساعة',
      'شنطة هدايا وكتيب العمرة مقدم من سيسي ترافل لكل معتمر',
    ],
    excludedServices: [
      'المصاريف الشخصية والمشروبات الإضافية بالفندق',
      'أي جولات سياحية خاصة خارج برنامج الرحلة المحدد',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'السفر والوصول إلى مكة المكرمة وأداء العمرة',
        description: 'التجمع بمطار القاهرة الدولي والسفر إلى جدة، ثم الاستقبال بالحافلات الحديثة والانتقال إلى فندق فيرمونت مكة للتسكين والاستراحة، ثم التجمع لأداء مناسك العمرة بمرافقة المشرف الديني.',
      },
      {
        dayNumber: 2,
        title: 'يوم حر للعبادة والصلوات بالحرم المكي',
        description: 'يوم مخصص للتعبد والصلوات في المسجد الحرام والاستمتاع بالإقامة الفاخرة والخدمات المتميزة بالفندق.',
      },
      {
        dayNumber: 3,
        title: 'صلاة الجمعة والتعبد بمكة المكرمة',
        description: 'أداء صلاة الجمعة بالمسجد الحرام والتعبد، مع تواجد مشرفي الشركة للرد على كافة الاستفسارات.',
      },
      {
        dayNumber: 4,
        title: 'زيارة المشاعر المقدسة ومزارات مكة',
        description: 'جولة صباحية لزيارة مزارات مكة المكرمة (جبل ثور، جبل عرفات، منى، ومزدلفة) برفقة المرشد الديني.',
      },
      {
        dayNumber: 5,
        title: 'يوم للتعبد والتسوق بالأسوق القريبة',
        description: 'فرصة للتعبد في الحرم المكي واقتناء الهدايا التذكارية من المراكز التجارية المجاورة.',
      },
      {
        dayNumber: 6,
        title: 'الانتقال إلى المدينة المنورة عبر القطار السريع / الأتوبيس VIP',
        description: 'طواف الوداع ثم مغادرة مكة والانتقال بأمان وراحة إلى المدينة المنورة للتسكين بفندق دار التقوى بجوار المسجد النبوي.',
      },
      {
        dayNumber: 7,
        title: 'السلام على الرسول والزيارة بالروضة الشريفة',
        description: 'زيارة المسجد النبوي الشريف والسلام على رسول الله ﷺ وصاحبيه، والتنسيق لدخول الروضة الشريفة عبر تطبيق نسك.',
      },
      {
        dayNumber: 8,
        title: 'مزارات المدينة المنورة التاريخية',
        description: 'جولة مزارات المدينة المنورة تشمل مسجد قباء، جبل أحد، ومسجد القبلتين.',
      },
      {
        dayNumber: 9,
        title: 'يوم للتعبد في المسجد النبوي الشريف',
        description: 'الاستمتاع بالطمأنينة بالمسجد النبوي وأداء الصلوات.',
      },
      {
        dayNumber: 10,
        title: 'الاستعداد للعودة إلى أرض الوطن',
        description: 'التوجه إلى مطار المدينة المنورة للعودة بسلامة الله إلى القاهرة.',
      },
    ],
    importantNotes: [
      'جواز سفر صالح لمدة لا تقل عن 6 أشهر من تاريخ السفر.',
      'عدد 2 صورة شخصية خلفية بيضاء.',
      'الالتزام بمواعيد التجمع المحددة من الشركة في المطار وحافلات الانتقال.',
    ],
  },
  {
    id: 'umrah-ramadan-full',
    slug: 'umrah-ramadan-full',
    title: 'عمرة شهر رمضان المبارك — الجمعة الأخيرة والعيد',
    category: 'ramadan',
    categoryLabel: 'عمرة رمضان',
    subtitle: 'عش أجواء الروحانية الكبرى في مكة والمدينة خلال شهر رمضان المبارك وختم القرآن.',
    summary: 'برنامج خيالي لأداء مناسك العمرة وقضاء الأيام المباركة من شهر رمضان في الحرمين الشريفين، ليشمل أداء صلاة التراويح والتهجد والجمعة الأخيرة وأجواء عيد الفطر المبارك.',
    featuredImage: '/images/hero-kaaba.jpg',
    galleryImages: [
      '/images/hero-kaaba.jpg',
      '/images/medina-mosque.jpg',
      '/images/hotel-suite.jpg',
    ],
    durationDays: 15,
    durationNights: 14,
    meccaNights: 9,
    medinaNights: 5,
    priceNote: 'برنامج رمضاني شامل السحور والإفطار والخدمات الكاملة',
    badgeText: 'برنامج رمضاني خاص',
    isFeatured: true,
    airline: 'مصر للطيران',
    flightType: 'طيران منتظم مباشر',
    hotels: [
      {
        name: 'فندق موفنبيك هاجر برج الساعة مكة (Mövenpick Makkah)',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'مطل على ساحة الحرم مباشرة',
      },
      {
        name: 'فندق كراون بلازا المدينة المنورة (Crowne Plaza Medina)',
        city: 'المدينة المنورة',
        stars: 5,
        distance: '3 دقائق من المسجد النبوي',
      },
    ],
    includedServices: [
      'تذاكر الطيران المباشر ذهاب وإياب على الخطوط المصرية',
      'تأشيرة العمرة الإلكترونية والتأمين الطبي',
      'الإقامة الفندقية الراقية شاملة وجبتي السحور والإفطار الرمضاني',
      'انتقالات داخلية مريحة للغاية بين جدة ومكة والمدينة',
      'مشرف ديني متميز لإمامة الصلوات والمساعدة في المناسك',
      'تنسيق تصاريح الروضة الشريفة والعمرة عبر المنصات الرسمية',
    ],
    excludedServices: [
      'المصاريف الشخصية الإضافية',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'السفر والوصول وتسكين الفندق بمكة',
        description: 'الوصول إلى مكة المكرمة، التسكين بالفندق، والتجمع لأداء العمرة الرمضانية الأولى.',
      },
      {
        dayNumber: 2,
        title: 'صلوات التراويح والتعبد بالحرم',
        description: 'قضاء الأوقات في رحاب المسجد الحرام وحضور صلوات التراويح والتهجد.',
      },
      {
        dayNumber: 15,
        title: 'العودة بسلامة الله إلى القاهرة',
        description: 'مغادرة الأراضي المقدسة والعودة بسلامة الله بعد أداء الفريضة ومشاركة فرحة العيد.',
      },
    ],
    importantNotes: [
      'الأولوية بأسبقية الحجز نظراً لمحدودية المقاعد والأماكن في موسم رمضان.',
    ],
  },
  {
    id: 'umrah-shawwal',
    slug: 'umrah-shawwal',
    title: 'عمرة شهر شوال المتميزة — هدوء وراحة بعد العيد',
    category: 'economic',
    categoryLabel: 'عمرة شوال',
    subtitle: 'استمتع بأداء العمرة في أجواء هادئة وأسعار متميزة خلال شهر شوال.',
    summary: 'رحلة العمرة في شهر شوال تمنحك فرصة أداء المناسك في طمأنينة وبعداً عن الزحام، مع فنادق 4 و 5 نجوم قريبة جداً من الحرمين الشريفين.',
    featuredImage: '/images/medina-mosque.jpg',
    galleryImages: [
      '/images/medina-mosque.jpg',
      '/images/hotel-suite.jpg',
      '/images/hero-kaaba.jpg',
    ],
    durationDays: 12,
    durationNights: 11,
    meccaNights: 6,
    medinaNights: 5,
    priceNote: 'عرض خاص لرحلات شوال بأسعار مناسبة للعائلات',
    badgeText: 'أجواء هادئة',
    isFeatured: false,
    airline: 'طيران أديل / طيران ناس / مصر للطيران',
    flightType: 'طيران مباشر',
    hotels: [
      {
        name: 'فندق أنجم مكة المكرمة (Anjum Makkah Hotel)',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'شارع أم القرى - 5 دقائق مشياً للحرم',
      },
      {
        name: 'فندق العقيق المدينة (Al Aqeeq Madinah Hotel)',
        city: 'المدينة المنورة',
        stars: 5,
        distance: 'المنطقة المركزية الشمالية - 150 متر من الحرم',
      },
    ],
    includedServices: [
      'تذاكر الطيران ذهاب وعودة',
      'تأشيرة العمرة والتأمين الطبي',
      'الإقامة بالفنادق المحددة شاملاً الإفطار',
      'الانتقالات بين المدن وحافلات التوصيل',
      'المزارات الدينية والتاريخية',
    ],
    excludedServices: ['الطلبات الشخصية خارج الفندق'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'الوصول إلى مكة المكرمة وأداء مناسك العمرة',
        description: 'الوصول إلى مكة المكرمة والتأهب لأداء عمرة شوال المباركة.',
      },
    ],
    importantNotes: ['صلاحية جواز السفر لا تقل عن 6 أشهر.'],
  },
  {
    id: 'umrah-economic-plus',
    slug: 'umrah-economic-plus',
    title: 'العمرة الاقتصادية المتميزة — جودة وخدمة بسعر مناسب',
    category: 'economic',
    categoryLabel: 'عمرة اقتصادية',
    subtitle: 'توازن مثالي بين السعر المناسب والخدمة المنتظمة مع فنادق راقية وقريبة.',
    summary: 'برنامج سيسي ترافل الاقتصادي المتميز يقدم لكل العائلات المصرية فرصة زيارة بيت الله الحرام والمسجد النبوي الشريف بخدمات متكاملة وحافلات حديثة وإشراف ديني كامل.',
    featuredImage: '/images/vip-bus.jpg',
    galleryImages: [
      '/images/vip-bus.jpg',
      '/images/hero-kaaba.jpg',
      '/images/medina-mosque.jpg',
    ],
    durationDays: 14,
    durationNights: 13,
    meccaNights: 8,
    medinaNights: 5,
    priceNote: 'أفضل قيمة مقابل سعر لرحلات العمرة المنتظمة',
    badgeText: 'اقتصادي متميز',
    isFeatured: true,
    airline: 'طيران ناس / الطيران السعودي',
    flightType: 'طيران مباشر / ترانزيت مريح',
    hotels: [
      {
        name: 'فندق أبراج الكسوة مكة (Kiswah Towers Makkah)',
        city: 'مكة المكرمة',
        stars: 4,
        distance: 'حافلات توصيل على مدار 24 ساعة للحرم',
      },
      {
        name: 'فندق سيف التوبة المدينة المنورة',
        city: 'المدينة المنورة',
        stars: 4,
        distance: 'المنطقة المركزية - 350 متر من المسجد النبوي',
      },
    ],
    includedServices: [
      'تأشيرة العمرة والتأمين الطبي الشامل',
      'تذاكر الطيران ذهاب وإياب',
      'إقامة في فنادق نظيفة ومريحة مع خدمات الاستقبال والواي فاي',
      'حافلات نقل مخصصة ومكيفة على مدار 24 ساعة من وإلى الحرم',
      'إشراف ديني وإداري طوال فترة الرحلة',
    ],
    excludedServices: ['الوجبات الإضافية والمشتريات الشخصية'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'السفر والوصول إلى الأراضي المقدسة',
        description: 'الانطلاق من القاهرة والوصول بسلامة الله إلى مطار الملك عبد العزيز بجدة.',
      },
    ],
    importantNotes: ['توفير خدمة نقل الأمتعة بأمان من وإلى المطار.'],
  },
  {
    id: 'hajj-vip-2026',
    slug: 'hajj-vip-2026',
    title: 'برنامج الحج الفاخر 2026 — مخيمات VIP مكيفة في المشاعر',
    category: 'hajj',
    categoryLabel: 'برنامج الحج',
    subtitle: 'أداء فريضة الحج براحة تامة وتنظيم دقيق من السفر وحتى العودة.',
    summary: 'تضع سيسي ترافل خبرتها المتراكمة التي تزيد عن 4 عقود في تنظيم رحلة الحج الفاخر لعام 2026. يشمل الفنادق الخمس نجوم بمكة والمدينة والمخيمات المجهزة بالكامل بأعلى معايير الإعاشة في منى وعرفات.',
    featuredImage: '/images/hajj-mina.jpg',
    galleryImages: [
      '/images/hajj-mina.jpg',
      '/images/hero-kaaba.jpg',
      '/images/hotel-suite.jpg',
      '/images/medina-mosque.jpg',
    ],
    durationDays: 18,
    durationNights: 17,
    meccaNights: 10,
    medinaNights: 4,
    priceNote: 'برنامج حج شامل كامل المناسك والخدمات الفاخرة',
    badgeText: 'برنامج الحج 2026',
    isFeatured: true,
    airline: 'مصر للطيران (رحلات الحج الخاصة)',
    flightType: 'طيران مباشر خاص بالحجاج',
    hotels: [
      {
        name: 'فندق سويس اوتيل مكة (Swissôtel Makkah)',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'مباشرة في مجمع أبراج البيت أمام الحرم',
      },
      {
        name: 'فندق أوبيروي المدينة المنورة (The Oberoi Madinah)',
        city: 'المدينة المنورة',
        stars: 5,
        distance: 'مباشرة أمام المسجد النبوي الشريف',
      },
    ],
    includedServices: [
      'تذاكر الطيران المباشر الخاص بالحجاج',
      'تأشيرة الحج الرسمية والتأمين الطبي الشامل',
      'مخيمات VIP مطورة ومكيفة بالكامل في عرفات ومخيمات منى الفاخرة',
      'وجبات بوفيه مفتوح ومشروبات ساخنة وباردة على مدار 24 ساعة بالمشاعر',
      'حافلات خاصة مكيفة موديل حديث لنقل حجاج الشركة فقط',
      'نخبة من كبار العلماء والدعاة للمرافقة والإرشاد الفقهي اليومي',
      'طاقم طبي وإداري مخصص لمتابعة الحجاج وتوفير الرعاية الكاملة',
    ],
    excludedServices: ['هدي الحج (صك الهدي)'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'السفر والوصول إلى مكة المكرمة',
        description: 'التجمع بالمطار والسفر مباشرة إلى مكة للتسكين والاستعداد لطواف القدوم.',
      },
      {
        dayNumber: 8,
        title: 'يوم التروية والانتقال إلى مخيمات منى',
        description: 'التوجه إلى منى والإقامة بالمخيمات المجهزة والتهيؤ ليوم عرفة العظيم.',
      },
      {
        dayNumber: 9,
        title: 'يوم عرفة - الوقوف بالمشعر الحرام والمزدلفة',
        description: 'الانتقال إلى عرفات والتفرغ للدعاء والذكر، ثم الإفاضة إلى مزدلفة.',
      },
      {
        dayNumber: 10,
        title: 'أيام التشريق ورمي الجمرات',
        description: 'أداء طواف الإفاضة ورمي الجمرات أيام التشريق بمتابعة من مرشدي الشركة.',
      },
    ],
    importantNotes: [
      'التسجيل يخضع للضوابط المنظمة للحج من وزارة السياحة المصرية والجهات السعودية.',
      'توفير رعاية خاصة لكبار السن وذوي الاحتياجات الخاصة.',
    ],
  },
  {
    id: 'hajj-express-2026',
    slug: 'hajj-express-2026',
    title: 'برنامج الحج السريع (إكسبريس) — تيسير وسرعة في المناسك',
    category: 'hajj',
    categoryLabel: 'برنامج الحج',
    subtitle: 'برنامج مصمم لرجال الأعمال ومن يرغب في أداء الحج في مدة زمنية وجيزة وبكفاءة عالية.',
    summary: 'يوفر برنامج الحج السريع من سيسي ترافل تجربة أداء الفريضة بتركيز كامل على أيام المناسك مع إقامة فاخرة وتنقلات سريعة ومباشرة.',
    featuredImage: '/images/hero-kaaba.jpg',
    galleryImages: [
      '/images/hero-kaaba.jpg',
      '/images/hajj-mina.jpg',
      '/images/vip-bus.jpg',
    ],
    durationDays: 10,
    durationNights: 9,
    meccaNights: 6,
    medinaNights: 3,
    priceNote: 'برنامج حج سريع وشامل كافة خدمات المشاعر المقربة',
    badgeText: 'حج إكسبريس',
    isFeatured: false,
    airline: 'مصر للطيران / السعودية',
    flightType: 'طيران مباشر',
    hotels: [
      {
        name: 'فندق موفنبيك مكة برج الساعة',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'أمام ساحة الحرم مباشرة',
      },
      {
        name: 'فندق شذا المدينة',
        city: 'المدينة المنورة',
        stars: 5,
        distance: '100 متر من الحرم النبوي',
      },
    ],
    includedServices: [
      'تأشيرة الحج والتأمين الصحي',
      'الطيران السريع والانتقالات بقطار الحرمين والسيارات الخاصة',
      'إقامة المشاعر المتميزة الإكسبريس القريبة من الجمرات',
      'إشراف ديني خاص',
    ],
    excludedServices: ['صك الهدي المصرفي'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'الانطلاق المباشر إلى مكة لمباشرة مناسك الحج',
        description: 'وصول الحجاج قبل يوم عرفة مباشرة والبدء في أعمال الحج.',
      },
    ],
    importantNotes: ['الأماكن محدودة جداً وتغلق قبل انتهاء موسم التقديم الرسمية.'],
  },
];

export const COMPANY_DETAILS = {
  name: 'سيسي ترافل',
  englishName: 'Sisi Travel',
  establishedYear: 1982,
  slogan: 'رحلتكم إلى الأراضي المقدسة تبدأ بثقة واطمئنان',
  description: 'شركة سيسي ترافل للسياحة والحج والعمرة — تأسست عام 1982 وتتمتع بخبرة متراكمة تتجاوز 4 عقود في تقديم أرقى خدمات الحج والعمرة والرحلات السياحية بأعلى معايير الراحة والتنظيم.',
  phone1: '+20 11 5001 1400',
  phone1Raw: '+201150011400',
  phone2: '+20 10 0543 7711',
  phone2Raw: '+201005437711',
  whatsapp: '+20 10 0543 7711',
  whatsappRaw: '201005437711',
  email: 'info@sisi-travel.com',
  secondaryEmail: 'belsisi@sisi-travel.com',
  address: 'القاهرة، جمهورية مصر العربية',
  facebookUrl: 'https://www.facebook.com/SiSiTravelEGY/',
  workingHours: 'من الأحد إلى الخميس: 9:00 صباحاً - 6:00 مساءً',
};

export const getWhatsAppLink = (programTitle?: string): string => {
  const text = programTitle
    ? `السلام عليكم، أود الاستفسار عن تفاصيل ${programTitle} عبر سيسي ترافل.`
    : `السلام عليكم، أود الاستفسار عن برامج الحج والعمرة المتاحة لدى سيسي ترافل.`;
  return `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`;
};
