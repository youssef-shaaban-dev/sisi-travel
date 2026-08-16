import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';
import { COMPANY_DETAILS } from '@/data/programsData';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${COMPANY_DETAILS.name} | رحلات الحج والعمرة - تأسست عام 1982`,
  description: 'اكتشف أرقى برامج الحج والعمرة مع سيسي ترافل. أكثر من 4 عقود من الخبرة والالتزام بتقديم أفضل إقامة طيران وتنظيم دقيق لضيوف الرحمن.',
  keywords: [
    'سيسي ترافل',
    'رحلات العمرة مصر',
    'برامج الحج 2027',
    'عمرة 5 نجوم مكة',
    'عمرة رمضان',
    'حج وعمرة القاهرة',
    'شركات سياحة مصرية',
  ],
  authors: [{ name: COMPANY_DETAILS.name }],
  openGraph: {
    title: `${COMPANY_DETAILS.name} | رحلات الحج والعمرة - تأسست عام 1982`,
    description: COMPANY_DETAILS.description,
    url: 'https://www.sisitravel.com',
    siteName: COMPANY_DETAILS.name,
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/images/hero-kaaba.jpg',
        width: 1200,
        height: 630,
        alt: COMPANY_DETAILS.name,
      },
    ],
  },
  icons: {
    icon: '/logo/logo-mark.svg',
    shortcut: '/logo/logo-mark.svg',
    apple: '/logo/logo-mark.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#F9F7F3] text-gray-900 selection:bg-[#531F23] selection:text-white">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
