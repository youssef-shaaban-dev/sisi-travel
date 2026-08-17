'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/programsData';

export default function Footer() {
  return (
    <footer className="bg-brand-burgundy-dark text-white border-t-4 border-brand-burgundy">
      {/* Top Banner Accent */}
      <div className="bg-brand-burgundy py-4 text-center text-xs sm:text-sm text-brand-sand border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>{COMPANY_DETAILS.licenseText}</span>
          </div>
          <span className="hidden md:inline text-white/30">•</span>
          <div>خبرة متراكمة تتجاوز 40 عاماً في خدمة ضيوف الرحمن</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 sm:h-20 sm:w-20 shrink-0">
                <Image
                  src="/logo/logo-main.svg"
                  alt={COMPANY_DETAILS.name}
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              {COMPANY_DETAILS.description}
            </p>
          </div>

          {/* Column 2: Quick Links (Matched with Navbar) */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 border-r-2 border-brand-gold pr-3">
              روابط السريعة
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/#hero" className="hover:text-brand-gold transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-brand-gold transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/#umrah" className="hover:text-brand-gold transition-colors">
                  رحلات العمرة
                </Link>
              </li>
              <li>
                <Link href="/#hajj" className="hover:text-brand-gold transition-colors">
                  برامج الحج
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-brand-gold transition-colors">
                  لماذا سيسي ترافل
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-brand-gold transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Directory */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 border-r-2 border-brand-gold pr-3">
              بيانات الاتصال
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a dir='ltr' href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="hover:text-white font-bold">
                  {COMPANY_DETAILS.phone1}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Social & Brand */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 border-r-2 border-brand-gold pr-3">
              تابعنا على التواصل الاجتماعي
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              تابع صفحتنا الرسمية للاطلاع على أحدث عروض العمرة وبرامج الحج الموسمية.
            </p>
            <a
              href={COMPANY_DETAILS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3.5 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-xl transition-all duration-300 hover:scale-110 border border-white/20"
              aria-label="صفحة فيسبوك الرسمية"
            >
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-400 space-y-2.5">
          <p>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name} - جميع الحقوق محفوظة. يُحظر تماماً الاستخدام غير المصرح به، بما في ذلك تدريب نماذج الذكاء الاصطناعي، أو إعادة الإنتاج، أو الاستغلال التجاري.
          </p>
          <p className="text-gray-300">
            صُنِع بكل فخر في مصر بحب ❤️{' '}
            <a
              href="https://mrco-egypt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline font-bold"
            >
              تم تصميم وتطوير الموقع من خلال شركة ميركو ايجيبت
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
