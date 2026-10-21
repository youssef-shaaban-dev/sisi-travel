import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import { COMPANY_DETAILS } from '@/data/programsData';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { ReactQueryProvider } from '@/components/ReactQueryProvider';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

const SITE_URL = 'https://sisi.travel';
const MAIN_TITLE = 'رحلات العمرة والحج من مصر - سيسى ترافل شركة سياحة مصرية';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: MAIN_TITLE,
    template: '%s | سيسى ترافل شركة سياحة مصرية',
  },
  description: 'اكتشف أرقى برامج الحج والعمرة مع سيسي ترافل. أكثر من 4 عقود من الخبرة والالتزام بتقديم أفضل إقامة طيران وتنظيم دقيق لضيوف الرحمن.',
  keywords: [
    'سيسى ترافل',
    'سيسي ترافل',
    'رحلات العمرة مصر',
    'برامج الحج 2027',
    'رحلات العمرة والحج من مصر',
    'شركة سياحة مصرية',
    'عمرة 5 نجوم مكة',
    'عمرة رمضان',
    'حج وعمرة القاهرة',
    'حج سياحي فاخر',
    'عمرة اقتصادية',
    'شركات سياحة مصرية',
  ],
  authors: [{ name: 'سيسى ترافل شركة سياحة مصرية', url: SITE_URL }],
  creator: 'سيسى ترافل',
  publisher: 'سيسى ترافل',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: MAIN_TITLE,
    description: COMPANY_DETAILS.description,
    url: SITE_URL,
    siteName: 'سيسى ترافل',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/images/hero-kaaba.webp',
        width: 1200,
        height: 630,
        alt: MAIN_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: MAIN_TITLE,
    description: 'شركة سيسي ترافل للسياحة والحج والعمرة - تأسست عام 1982 وتتمتع بخبرة متراكمة تتجاوز 4 عقود في تقديم أرقى خدمات الحج والعمرة والرحلات السياحية.',
    images: ['/images/hero-kaaba.webp'],
  },
  icons: {
    icon: '/logo/logo-mark.svg',
    shortcut: '/logo/logo-mark.svg',
    apple: '/logo/logo-mark.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': 'https://sisi.travel/#organization',
      name: 'سيسي ترافل',
      alternateName: 'SISI Travel',
      url: 'https://sisi.travel/',
      description:
        'سيسي ترافل شركة سياحة مصرية تأسست عام 1982، متخصصة في تنظيم رحلات الحج والعمرة من مصر، وتوفير برامج تشمل الإقامة الفندقية والطيران والنقل والإشراف الديني والإداري.',
      foundingDate: '1982',
      telephone: '+201150011400',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '161 شارع السودان، المهندسين',
        addressLocality: 'الجيزة',
        addressCountry: 'EG',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Egypt',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+201150011400',
        contactType: 'customer service',
        availableLanguage: 'Arabic',
        areaServed: 'EG',
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Tourism License',
        name: 'رخصة سياحة فئة أ - رقم 249',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'برامج الحج والعمرة',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'برامج العمرة',
            itemListElement: [
              {
                '@type': 'OfferCatalog',
                name: 'رحلات العمرة من مصر',
              },
            ],
          },
          {
            '@type': 'OfferCatalog',
            name: 'برامج الحج',
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sisi.travel/#website',
      url: 'https://sisi.travel/',
      name: 'سيسي ترافل',
      alternateName: 'SISI Travel',
      inLanguage: 'ar-EG',
      publisher: {
        '@id': 'https://sisi.travel/#organization',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://sisi.travel/#webpage',
      url: 'https://sisi.travel/',
      name: 'رحلات العمرة والحج من مصر - سيسي ترافل',
      description:
        'اكتشف برامج الحج والعمرة من مصر مع سيسي ترافل، شركة سياحة تأسست عام 1982، تقدم خدمات الإقامة والطيران والنقل والإشراف طوال الرحلة.',
      inLanguage: 'ar-EG',
      isPartOf: {
        '@id': 'https://sisi.travel/#website',
      },
      about: {
        '@id': 'https://sisi.travel/#organization',
      },
      mainEntity: {
        '@id': 'https://sisi.travel/#organization',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://sisi.travel/#umrah-service',
      name: 'رحلات العمرة من مصر',
      serviceType: 'Umrah Travel Packages',
      description:
        'تنظيم برامج العمرة من مصر إلى مكة المكرمة والمدينة المنورة، مع خدمات الإقامة الفندقية والطيران والنقل والإشراف الديني والإداري.',
      provider: {
        '@id': 'https://sisi.travel/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Egypt',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://sisi.travel/#hajj-service',
      name: 'رحلات الحج من مصر',
      serviceType: 'Hajj Travel Packages',
      description:
        'تنظيم رحلات الحج من مصر، بما يشمل برامج الحج الفاخر والاقتصادي والبري، وخدمات الإقامة والنقل والإشراف.',
      provider: {
        '@id': 'https://sisi.travel/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Egypt',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-T5S5M7TF" />
      <body className="font-sans antialiased min-h-screen flex flex-col bg-brand-sand-light text-gray-900 selection:bg-brand-burgundy selection:text-white">
        <ReactQueryProvider>
          {children}
          <FloatingWhatsApp />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
