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
  category: 'vip' | 'ramadan' | 'economic' | 'hajj-luxury' | 'hajj-economic' | 'hajj-land';
  categoryLabel: string;
  subtitle: string;
  summary: string;
  featuredImage: string;
  galleryImages: string[];
  durationDays: number;
  durationNights: number;
  meccaNights: number;
  medinaNights: number;
  price: string;
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

export const UMRAH_CATEGORIES = [
  { id: 'all', label: 'جميع برامج العمرة' },
  { id: 'vip', label: 'عمرة VIP' },
  { id: 'ramadan', label: 'عمرة رمضان' },
  { id: 'economic', label: 'العمرة الاقتصادية' },
];

export const HAJJ_CATEGORIES = [
  { id: 'all', label: 'جميع برامج الحج' },
  { id: 'hajj-luxury', label: 'حج فاخر' },
  { id: 'hajj-economic', label: 'حج اقتصادي' },
  { id: 'hajj-land', label: 'حج بري' },
];

export const PROGRAM_CATEGORIES = UMRAH_CATEGORIES;

export const UMRAH_PROGRAMS: TravelProgram[] = [
  {
    id: 'umrah-vip-5stars',
    slug: 'umrah-vip-5stars',
    title: 'عمرة الخمس نجوم الـ VIP - إقامة فاخرة صف أول',
    category: 'vip',
    categoryLabel: 'عمرة 5 نجوم VIP',
    subtitle: 'تجربة إيمانية استثنائية مع إقامة في أرقى الفنادق المطلة مباشرة على الحرم المكي الشريف.',
    summary: 'برنامج عمرة متميز مصمم لمن يبحث عن أرقى مستويات الراحة والخدمة الفندقية. يشمل الطيران المباشر، الفنادق المطلة على ساحة الحرم المكي والمسجد النبوي، وانتقالات VIP بسيارات حديثة مكيفة.',
    featuredImage: '/images/hotel-suite.webp',
    galleryImages: [
      '/images/hotel-suite.webp',
      '/images/hero-kaaba.webp',
      '/images/medina-mosque.webp',
      '/images/vip-bus.webp',
    ],
    durationDays: 10,
    durationNights: 9,
    meccaNights: 5,
    medinaNights: 4,
    price: 'تبدأ من 85,000 ج.م',
    priceNote: 'شاملاً الطيران المباشر والتأشيرة والإقامة الفندقية الفاخرة',
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
        title: 'يوم للتعبد والتسوق بالأسواق القريبة',
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
    title: 'عمرة شهر رمضان المبارك - الجمعة الأخيرة والعيد',
    category: 'ramadan',
    categoryLabel: 'عمرة رمضان',
    subtitle: 'عش أجواء الروحانية الكبرى في مكة والمدينة خلال شهر رمضان المبارك وختم القرآن.',
    summary: 'برنامج خيالي لأداء مناسك العمرة وقضاء الأيام المباركة من شهر رمضان في الحرمين الشريفين، ليشمل أداء صلاة التراويح والتهجد والجمعة الأخيرة وأجواء عيد الفطر المبارك.',
    featuredImage: '/images/hero-kaaba.webp',
    galleryImages: [
      '/images/hero-kaaba.webp',
      '/images/medina-mosque.webp',
      '/images/hotel-suite.webp',
    ],
    durationDays: 15,
    durationNights: 14,
    meccaNights: 9,
    medinaNights: 5,
    price: 'تبدأ من 95,000 ج.م',
    priceNote: 'شاملاً الإفطار والسحور والخدمات الفندقية الكاملة',
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
    title: 'عمرة شهر شوال المتميزة - هدوء وراحة بعد العيد',
    category: 'economic',
    categoryLabel: 'عمرة شوال',
    subtitle: 'استمتع بأداء العمرة في أجواء هادئة وأسعار متميزة خلال شهر شوال.',
    summary: 'رحلة العمرة في شهر شوال تمنحك فرصة أداء المناسك في طمأنينة وبعداً عن الزحام، مع فنادق 4 و 5 نجوم قريبة جداً من الحرمين الشريفين.',
    featuredImage: '/images/medina-mosque.webp',
    galleryImages: [
      '/images/medina-mosque.webp',
      '/images/hotel-suite.webp',
      '/images/hero-kaaba.webp',
    ],
    durationDays: 12,
    durationNights: 11,
    meccaNights: 6,
    medinaNights: 5,
    price: 'تبدأ من 48,000 ج.م',
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
    title: 'العمرة الاقتصادية المتميزة - جودة وخدمة بسعر مناسب',
    category: 'economic',
    categoryLabel: 'عمرة اقتصادية',
    subtitle: 'توازن مثالي بين السعر المناسب والخدمة المنتظمة مع فنادق راقية وقريبة.',
    summary: 'برنامج سيسي ترافل الاقتصادي المتميز يقدم لكل العائلات المصرية فرصة زيارة بيت الله الحرام والمسجد النبوي الشريف بخدمات متكاملة وحافلات حديثة وإشراف ديني كامل.',
    featuredImage: '/images/vip-bus.webp',
    galleryImages: [
      '/images/vip-bus.webp',
      '/images/hero-kaaba.webp',
      '/images/medina-mosque.webp',
    ],
    durationDays: 14,
    durationNights: 13,
    meccaNights: 8,
    medinaNights: 5,
    price: 'تبدأ من 42,000 ج.م',
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
];

export const HAJJ_PROGRAMS: TravelProgram[] = [
  {
    id: 'hajj-luxury-1',
    slug: 'hajj-luxury-1',
    title: 'برنامج الحج الفاخر (1) - صف أول وقطار الحرمين السريع',
    category: 'hajj-luxury',
    categoryLabel: 'حج فاخر',
    subtitle: 'إقامة 5 نجوم بالفنادق المطلة على الحرم ومخيمات فاخرة بالمشاعر المقدسة شاملاً قطار الحرمين.',
    summary: 'برنامج حج فاخر مصمم لأداء الفريضة بأعلى مستويات الإقامة والراحة، يشمل السفر للمدينة مباشرة، فندق دار الإيمان الحرم، وفندق موفنبيك هاجر مكة، وقطار الحرمين السريع، ومخيمات 5 نجوم بمناسك منى وعرفات.',
    featuredImage: '/images/hotel-suite.webp',
    galleryImages: [
      '/images/hotel-suite.webp',
      '/images/hajj-mina.webp',
      '/images/hero-kaaba.webp',
      '/images/medina-mosque.webp',
    ],
    durationDays: 10,
    durationNights: 9,
    meccaNights: 6,
    medinaNights: 4,
    price: '580,000 ج.م',
    priceNote: 'بخلاف تذكرة الطيران | شامل قطار الحرمين ومخيمات 5 نجوم بالمشاعر',
    badgeText: 'حج فاخر VIP',
    isFeatured: true,
    airline: 'مصر للطيران / الخطوط السعودية',
    flightType: 'طيران مباشر (جدة - المدينة)',
    hotels: [
      {
        name: 'فندق دار الإيمان الحرم',
        city: 'المدينة المنورة',
        stars: 5,
        distance: 'أمام ساحة الحرم النبوي الشريف (4 إلى 8 ذو الحجة - بوفيه مفتوح)',
      },
      {
        name: 'فندق موفنبيك هاجر برج الساعة',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'مباشرة أمام ساحة الحرم المكي (8 إلى 14 ذو الحجة - بوفيه مفتوح)',
      },
    ],
    includedServices: [
      'أعلى نسبة نجاح بالقرعة مع ضمان فرصة إضافية بتأشيرة وفق نظام الوزارة',
      'شامل قطار الحرمين السريع من المدينة المنورة إلى مكة المكرمة',
      'باصات موديل العام خاصة لنقل الحجاج خلال أداء المناسك',
      'إقامة 5 نجوم بالمشاعر المقدسة (إفطار، غداء، عشاء بوفيه مفتوح)',
      'تأمين النزل والصعود من وإلى الفندق خلال أيام التشريق',
      'خدمات نقل الحقائب وإشراف ديني وإداري مرافق طوال الرحلة مع واعظ ديني',
    ],
    excludedServices: ['تذكرة الطيران', 'صك الهدي'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'السفر والوصول للمدينة المنورة (4 ذو الحجة)',
        description: 'الانطلاق المباشر إلى المدينة المنورة والتسكين بفندق دار الإيمان الحرم.',
      },
      {
        dayNumber: 5,
        title: 'الانتقال بقطار الحرمين إلى مكة (8 ذو الحجة)',
        description: 'الانتقال السريع والحديث عبر قطار الحرمين إلى مكة للتسكين بموفنبيك هاجر والبدء بأعمال الحج.',
      },
      {
        dayNumber: 9,
        title: 'أيام المناسك بمخيمات المشاعر 5 نجوم',
        description: 'الإقامة بالمخيمات المكيفة بمنى وعرفات مع توفير وجبات البوفيه المفتوح والإشراف الطبي والفقهي.',
      },
      {
        dayNumber: 10,
        title: 'طواف الوداع والعودة من جدة (14 ذو الحجة)',
        description: 'أداء طواف الوداع والتوجّه لمطار جدة للعودة بسلامة الله إلى أرض الوطن.',
      },
    ],
    importantNotes: [
      'صورة بطاقة الرقم القومي مع مبلغ جدية الحجز 100,000 جنيه.',
    ],
  },
  {
    id: 'hajj-luxury-kadana',
    slug: 'hajj-luxury-kadana',
    title: 'برنامج الحج الفاخر (2) - عمائر كدانه المميزة',
    category: 'hajj-luxury',
    categoryLabel: 'حج فاخر (كدانه)',
    subtitle: 'إقامة في عمائر كدانه الفاخرة بالمشاعر المقدسة وفنادق 5 نجوم بالمدينة ومكة.',
    summary: 'رحلة حج فاخرة تتميز بتمكين الحجاج من الإقامة المباشرة في عمائر كدانه المجهزة 5 نجوم بمشاعر منى وعرفات مع توفير خدمة إعاشة كاملة وتسهيلات تنقل عالية الجودة.',
    featuredImage: '/images/hajj-mina.webp',
    galleryImages: [
      '/images/hajj-mina.webp',
      '/images/hero-kaaba.webp',
      '/images/hotel-suite.webp',
    ],
    durationDays: 10,
    durationNights: 9,
    meccaNights: 6,
    medinaNights: 4,
    price: '520,000 ج.م',
    priceNote: 'بخلاف تذكرة الطيران | أعلى نسبة نجاح بالقرعة تصل إلى 70%',
    badgeText: 'حج كدانه الفاخر',
    isFeatured: true,
    airline: 'مصر للطيران / الخطوط السعودية',
    flightType: 'طيران مباشر (المدينة - جدة)',
    hotels: [
      {
        name: 'فندق دار الإيمان الحرم',
        city: 'المدينة المنورة',
        stars: 5,
        distance: 'أمام الحرم النبوي الشريف (4 إلى 8 ذو الحجة)',
      },
      {
        name: 'مستوى فندقي مميز خلال أيام المناسك',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'قريب جداً من ساحة الحرم المكي',
      },
    ],
    includedServices: [
      'إقامة عمائر كدانه المميزة - مستوى 5 نجوم مع إقامة كاملة (إفطار، غداء، عشاء)',
      'أعلى نسبة نجاح بالقرعة تصل إلى 70%',
      'قطار الحرمين السريع وباصات حديثة موديل العام خاصة بالمناسك',
      'إشراف إداري مرافق للرحلة مع واعظ ديني لمرافقة وشرح المناسك',
    ],
    excludedServices: ['تذكرة الطيران', 'صك الهدي'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'السفر والوصول إلى المدينة المنورة',
        description: 'السفر المباشر وتسكين فندق دار الإيمان الحرم.',
      },
      {
        dayNumber: 5,
        title: 'الانتقال لمكة والإقامة بعمائر كدانه',
        description: 'الانتقال إلى الأراضي المقدسة بمكة وتسكين عمائر كدانه بالمشاعر.',
      },
    ],
    importantNotes: [
      'صورة بطاقة الرقم القومي مع مبلغ جدية الحجز 120,000 جنيه.',
    ],
  },
  {
    id: 'hajj-luxury-distinct',
    slug: 'hajj-luxury-distinct',
    title: 'برنامج الحج المميز (3) - 15 يوماً إقامة راقية',
    category: 'hajj-luxury',
    categoryLabel: 'حج مميز',
    subtitle: 'إقامة ممتدة 15 يوماً بفنادق شذا ريجنسي بالمدينة وموفنبيك هاجر بمكة.',
    summary: 'رحلة حج استثنائية تتيح لك 15 يوماً من التعبد والطمأنينة بين المدينة المنورة ومكة المكرمة مع مرونة تعديل مواعيد العودة بما يتوافق مع رغبة العميل.',
    featuredImage: '/images/medina-mosque.webp',
    galleryImages: [
      '/images/medina-mosque.webp',
      '/images/hero-kaaba.webp',
      '/images/hotel-suite.webp',
    ],
    durationDays: 15,
    durationNights: 14,
    meccaNights: 10,
    medinaNights: 4,
    price: '400,000 ج.م',
    priceNote: 'بخلاف تذكرة الطيران | إمكانية تعديل مواعيد العودة',
    badgeText: 'حج مميز 15 يوماً',
    isFeatured: false,
    airline: 'مصر للطيران / السعودية',
    flightType: 'طيران مباشر',
    hotels: [
      {
        name: 'فندق شذا ريجنسي المدينة',
        city: 'المدينة المنورة',
        stars: 5,
        distance: 'صف أول بوفيه مفتوح (5 إلى 8 ذو الحجة)',
      },
      {
        name: 'فندق موفنبيك هاجر مكة',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'أمام الحرم المكي (14 إلى 20 ذو الحجة)',
      },
    ],
    includedServices: [
      'إقامة 15 يوماً شاملة البوفيه المفتوح بالإفطار والعشاء',
      'قطار الحرمين الشريفين وباصات موديل العام مخصصة للمناسك',
      'تعديل مواعيد العودة لما يتوافق مع العميل',
      'نسبة قبول بالقرعة تصل إلى 70%',
    ],
    excludedServices: ['تذكرة الطيران'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'السفر والوصول للمدينة (5 ذو الحجة)',
        description: 'الانطلاق من القاهرة والتسكين بفندق شذا ريجنسي.',
      },
      {
        dayNumber: 15,
        title: 'العودة بسلامة الله من جدة (20 ذو الحجة)',
        description: 'ختام رحلة الحج المباركة والعودة إلى أرض الوطن.',
      },
    ],
    importantNotes: ['مبلغ جدية الحجز 100,000 جنيه.'],
  },
  {
    id: 'hajj-economic-1',
    slug: 'hajj-economic-1',
    title: 'برنامج الحج الاقتصادي (1) - هيلتون مكة وأرجوان الذهبي',
    category: 'hajj-economic',
    categoryLabel: 'حج اقتصادي',
    subtitle: 'إقامة 22 يوماً شاملة 9 أيام كاملة على ساحة الحرم المكي وأداء عمرة إضافية.',
    summary: 'برنامج حج اقتصادي متكامل يمنحك 22 يوماً في الأراضي المقدسة مع الإقامة بفندق أبراج مكة هيلتون، وفندق أرجوان الذهبي بالمدينة، ووجبات إفطار وعشاء طوال الرحلة.',
    featuredImage: '/images/vip-bus.webp',
    galleryImages: [
      '/images/vip-bus.webp',
      '/images/hero-kaaba.webp',
      '/images/medina-mosque.webp',
    ],
    durationDays: 22,
    durationNights: 21,
    meccaNights: 18,
    medinaNights: 3,
    price: '265,000 ج.م',
    priceNote: 'بخلاف تذكرة الطيران | شامل الإفطار والعشاء طوال الرحلة',
    badgeText: 'حج اقتصادي 22 يوماً',
    isFeatured: true,
    airline: 'مصر للطيران / السعودية',
    flightType: 'طيران مباشر (العودة من المدينة 17 ذو الحجة)',
    hotels: [
      {
        name: 'فندق أبراج مكة هيلتون / عمارة فندقية فترة المناسك',
        city: 'مكة المكرمة',
        stars: 5,
        distance: '25 ذو القعدة إلى 4 ذو الحجة بفندق هيلتون (9 أيام ساحة الحرم)',
      },
      {
        name: 'فندق أرجوان الذهبي وما يماثله',
        city: 'المدينة المنورة',
        stars: 4,
        distance: '14 إلى 17 ذو الحجة (بالإفطار والعشاء)',
      },
    ],
    includedServices: [
      'إقامة 9 أيام كاملة على ساحة الحرم المكي الشريف بفندق أبراج مكة هيلتون',
      'عمل عمرة إضافية خلال فترة الإقامة وقضاء نسك الحج التمتع',
      'شامل وجبتي الإفطار والعشاء طوال فترة الرحلة',
      'قطار الحرمين الشريفين وباصات حديثة خاصة بالمناسك',
      'إشراف إداري مرافق للرحلة مع ندوات دينية لشرح المناسك',
    ],
    excludedServices: ['تذكرة الطيران'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'سفر 25 ذو القعدة للوصول لمكة',
        description: 'الانطلاق إلى مكة المكرمة والتسكين بمكة هيلتون.',
      },
      {
        dayNumber: 22,
        title: 'العودة من المدينة المنورة (17 ذو الحجة)',
        description: 'العودة بسلامة الله إلى القاهرة.',
      },
    ],
    importantNotes: ['مبلغ جدية الحجز 60,000 جنيه.'],
  },
  {
    id: 'hajj-economic-2',
    slug: 'hajj-economic-2',
    title: 'برنامج الحج الاقتصادي (2) - فندق الشهداء 5 نجوم',
    category: 'hajj-economic',
    categoryLabel: 'حج اقتصادي',
    subtitle: 'إقامة 22 يوماً بفندق الشهداء 5 نجوم بمكة وفندق أرجوان الذهبي بالمدينة.',
    summary: 'برنامج اقتصادي متميز يوفر إقامة راقية بفندق الشهداء 5 نجوم بمكة المكرمة مع تقديم وجبات الإفطار والعشاء بوفيه مفتوح طوال الرحلة وتسهيلات كاملة للمناسك.',
    featuredImage: '/images/hero-kaaba.webp',
    galleryImages: [
      '/images/hero-kaaba.webp',
      '/images/medina-mosque.webp',
      '/images/vip-bus.webp',
    ],
    durationDays: 22,
    durationNights: 21,
    meccaNights: 18,
    medinaNights: 3,
    price: '255,000 ج.م',
    priceNote: 'بخلاف تذكرة الطيران | إفطار وعشاء طوال الرحلة',
    badgeText: 'حج اقتصادي مميز',
    isFeatured: false,
    airline: 'مصر للطيران / السعودية',
    flightType: 'طيران مباشر (25 ذو القعدة - 17 ذو الحجة)',
    hotels: [
      {
        name: 'فندق الشهداء مكة المكرمة',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'بوفيه مفتوح 5 نجوم (25 ذو القعدة إلى 4 ذو الحجة)',
      },
      {
        name: 'فندق أرجوان الذهبي',
        city: 'المدينة المنورة',
        stars: 4,
        distance: 'المنطقة المركزية (14 إلى 17 ذو الحجة)',
      },
    ],
    includedServices: [
      'إقامة بفندق الشهداء 5 نجوم مع بوفيه إفطار وعشاء',
      'قطار الحرمين الشريفين وباصات حديثة لنقل الحجاج للمناسك',
      'عمل عمرة إضافية خلال فترة الإقامة وقضاء نسك الحج التمتع',
      'إشراف ديني وإداري وندوات دينية طوال مدة الرحلة',
    ],
    excludedServices: ['تذكرة الطيران'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'السفر 25 ذو القعدة إلى مكة المكرمة',
        description: 'الوصول إلى مكة والتسكين بفندق الشهداء 5 نجوم.',
      },
    ],
    importantNotes: ['صورة بطاقة الرقم القومي مع مبلغ جدية الحجز 60,000 جنيه.'],
  },
  {
    id: 'hajj-land-1',
    slug: 'hajj-land-1',
    title: 'برنامج الحج البري المميز - باصات سياحية فاخرة 24 يوماً',
    category: 'hajj-land',
    categoryLabel: 'حج بري',
    subtitle: 'رحلة 24 يوماً بالحافلات السياحية الحديثة المكيفة من القاهرة وتغطية شاملة للمناسك.',
    summary: 'برنامج الحج البري المريح المصمم خصيصاً للحجاج الراغبين في السفر البري بالحافلات السياحية الفاخرة المكيفة مباشرة من القاهرة مع الإقامة بفندق الشهداء 5 نجوم وأرجوان الذهبي بالمدينة.',
    featuredImage: '/images/vip-bus.webp',
    galleryImages: [
      '/images/vip-bus.webp',
      '/images/hero-kaaba.webp',
      '/images/medina-mosque.webp',
    ],
    durationDays: 24,
    durationNights: 23,
    meccaNights: 19,
    medinaNights: 4,
    price: '235,000 ج.م',
    priceNote: 'بخلاف تذكرة العبارة | باصات سياحية حديثة مكيفة من القاهرة',
    badgeText: 'حج بري متميز',
    isFeatured: true,
    airline: 'سفر بري (باصات سياحية فاخرة مكيفة)',
    flightType: 'انتقال بري من القاهرة (23 ذو القعدة) والعودة (17 ذو الحجة)',
    hotels: [
      {
        name: 'فندق الشهداء مكة المكرمة',
        city: 'مكة المكرمة',
        stars: 5,
        distance: 'بوفيه مفتوح 5 نجوم (25 ذو القعدة إلى 4 ذو الحجة)',
      },
      {
        name: 'فندق أرجوان الذهبي',
        city: 'المدينة المنورة',
        stars: 4,
        distance: 'المنطقة المركزية (14 إلى 17 ذو الحجة)',
      },
    ],
    includedServices: [
      'الانتقال بباصات سياحية حديثة مكيفة خاصة بالرحلة من القاهرة',
      'إقامة بفندق الشهداء 5 نجوم وأرجوان الذهبي بالمدينة مع الإفطار والعشاء',
      'عمل عمرة إضافية خلال فترة الإقامة وقضاء نسك الحج التمتع',
      'باصات خاصة لنقل الحجاج خلال أيام المناسك بالمشاعر',
      'مرافقة كبار الواعظين والعلماء لشرح المناسك والإشراف الإداري الكامل',
    ],
    excludedServices: ['تذكرة العبارة'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'الانطلاق البري من القاهرة (23 ذو القعدة)',
        description: 'التجمع والسفر بالحافلات السياحية الحديثة المكيفة عبر العبارة إلى المملكة العربية السعودية.',
      },
      {
        dayNumber: 24,
        title: 'العودة بسلامة الله من المدينة إلى القاهرة (17 ذو الحجة)',
        description: 'العودة بسلامة الله بعد إتمام مناسك الحج.',
      },
    ],
    importantNotes: [
      'صورة بطاقة الرقم القومي مع مبلغ جدية الحجز 60,000 جنيه.',
    ],
  },
];

export const ALL_PROGRAMS: TravelProgram[] = [
  ...UMRAH_PROGRAMS,
  ...HAJJ_PROGRAMS,
];

export const COMPANY_DETAILS = {
  name: 'سيسي ترافل',
  englishName: 'Sisi Travel',
  establishedYear: 1982,
  slogan: 'رحلتكم إلى الأراضي المقدسة تبدأ بثقة واطمئنان',
  description: 'شركة سيسي ترافل للسياحة والحج والعمرة - تأسست عام 1982 وتتمتع بخبرة متراكمة تتجاوز 4 عقود في تقديم أرقى خدمات الحج والعمرة والرحلات السياحية بأعلى معايير الراحة والتنظيم.',
  phone1: '011 5001 1400',
  phone1Raw: '+201150011400',
  whatsapp: '011 5001 1400',
  whatsappRaw: '201150011400',
  licenseNumber: '249',
  licenseText: 'شركة سياحة (أ) مرخصة من وزارة السياحة - رخصة رقم 249',
  address: '161 شارع السودان ، المهندسين - الجيزة مصر',
  facebookUrl: 'https://www.facebook.com/SiSiTravelEGY/',
  workingHours: 'من الأحد إلى الخميس: 9:00 صباحاً - 6:00 مساءً',
};

export const getWhatsAppLink = (programTitle?: string): string => {
  const text = programTitle
    ? `السلام عليكم، أود الاستفسار عن تفاصيل ${programTitle} عبر سيسي ترافل.`
    : `السلام عليكم، أود الاستفسار عن برامج الحج والعمرة المتاحة لدى سيسي ترافل.`;
  return `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`;
};
