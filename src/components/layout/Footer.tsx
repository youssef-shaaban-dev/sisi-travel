import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink } from '@/data/programsData';

export default function Footer() {
  return (
    <footer className="bg-brand-burgundy-dark text-white border-t-4 border-brand-burgundy">
      {/* Top Banner Accent */}
      <div className="bg-brand-burgundy py-4 text-center text-xs sm:text-sm text-brand-sand border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>شركة سياحية مصرية مرخصة من وزارة السياحة</span>
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
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
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
                  برامج رحلات العمرة
                </Link>
              </li>
              <li>
                <Link href="/#hajj" className="hover:text-brand-gold transition-colors">
                  برامج الحج 2026
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-brand-gold transition-colors">
                  لماذا تختار سيسي ترافل؟
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
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <div>
                    <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="hover:text-white dir-ltr inline-block">
                      {COMPANY_DETAILS.phone1}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${COMPANY_DETAILS.phone2Raw}`} className="hover:text-white dir-ltr inline-block">
                      {COMPANY_DETAILS.phone2}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white dir-ltr">
                  {COMPANY_DETAILS.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>{COMPANY_DETAILS.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Social & Brand */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 border-r-2 border-brand-gold pr-3">
              تابعنا على التواصل الاجتماعي
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              تابع صفحاتنا الرسمية للاطلاع على أحدث عروض العمرة وبرامج الحج الموسمية.
            </p>
            <a
              href={COMPANY_DETAILS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/15"
            >
              <svg className="w-5 h-5 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>تابعنا على فيسبوك</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} — شركة {COMPANY_DETAILS.name} للسياحة والحج والعمرة.
          </p>
          <p className="text-gray-500">
            تأسست عام 1982 — خبرة وتألق يستمر لأكثر من 40 عاماً.
          </p>
        </div>
      </div>
    </footer>
  );
}
