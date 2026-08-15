import React from 'react';
import Image from 'next/image';
import { MessageCircle, Compass, Award } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink } from '@/data/programsData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-brand-burgundy-dark">
      {/* Background Photography Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kaaba.jpg"
          alt="المسجد الحرام والكعبة المشرفة"
          fill
          className="object-cover object-center opacity-45 scale-105 transform animate-pulse-slow"
          priority
        />
        {/* Gradients Overlay according to Brand Palette */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy-dark via-brand-burgundy-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-burgundy-dark/80 via-transparent to-brand-burgundy-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Heritage Trust Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-burgundy/80 border border-brand-gold/40 backdrop-blur-md mb-6 shadow-xl animate-fadeIn">
          <Award className="w-4 h-4 text-brand-gold" />
          <span className="text-xs sm:text-sm font-bold text-brand-sand tracking-wide">
            تأسست عام {COMPANY_DETAILS.establishedYear} — أكثر من 4 عقود من الخبرة والتميز
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6 font-sans">
          رحلتكم إلى الأراضي المقدسة <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sand via-brand-gold to-brand-sand">
            تبدأ بثقة واطمئنان
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-200 leading-relaxed mb-10 font-medium">
          نرافقكم في رحلات الحج والعمرة بعناية تبدأ من التخطيط المتقن، الإقامة الفاخرة، والإشراف الديني الكامل، وتمتد حتى عودتكم سالمين.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#umrah"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-burgundy hover:bg-brand-burgundy-light text-white font-extrabold text-base shadow-xl hover:shadow-2xl transition-all border border-brand-gold/50 group"
          >
            <Compass className="w-5 h-5 text-brand-gold group-hover:rotate-45 transition-transform" />
            <span>استكشف رحلات العمرة</span>
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/25 transition-all shadow-lg group"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>تواصل معنا مباشرة</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs sm:text-sm text-gray-300">
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-extrabold text-xl text-brand-gold">40+ سنة</span>
            <span className="text-gray-300">خبرة في الحج والعمرة</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-extrabold text-xl text-brand-gold">فنادق VIP</span>
            <span className="text-gray-300">مطلة وقريبة من الحرمين</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-extrabold text-xl text-brand-gold">طيران مباشر</span>
            <span className="text-gray-300">مصر للطيران والسعودية</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-extrabold text-xl text-brand-gold">متابعة 24/7</span>
            <span className="text-gray-300">إشراف ديني وإداري شامل</span>
          </div>
        </div>
      </div>
    </section>
  );
}
