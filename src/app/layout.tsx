import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import { COMPANY_DETAILS } from '@/data/programsData';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

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
      '@type': ['TravelAgency', 'LocalBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: 'سيسى ترافل',
      alternateName: [
        'سيسي ترافل',
        'Sisi Travel',
        'سيسى ترافل شركة سياحة مصرية',
        'شركة سيسي ترافل للسياحة والحج والعمرة',
      ],
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo/logo-mark.svg`,
        width: 190,
        height: 60,
      },
      image: `${SITE_URL}/images/hero-kaaba.webp`,
      description: COMPANY_DETAILS.description,
      telephone: COMPANY_DETAILS.phone1Raw,
      priceRange: '$$$$',
      currenciesAccepted: 'EGP, SAR',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '161 شارع السودان ، المهندسين',
        addressLocality: 'الجيزة',
        addressRegion: 'الجيزة',
        postalCode: '12655',
        addressCountry: 'EG',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '30.0630',
        longitude: '31.1983',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      sameAs: [
        COMPANY_DETAILS.facebookUrl,
        COMPANY_DETAILS.instagramUrl,
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: MAIN_TITLE,
      description: 'اكتشف أرقى برامج الحج والعمرة مع سيسي ترافل. أكثر من 4 عقود من الخبرة والالتزام بتقديم أفضل إقامة طيران وتنظيم دقيق لضيوف الرحمن.',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'ar',
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
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
