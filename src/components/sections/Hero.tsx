import React from 'react';
import Image from 'next/image';
import { MessageCircle, Compass, Award } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink } from '@/data/programsData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-36 pb-20 overflow-hidden bg-brand-burgundy-dark">
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
        <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy-dark via-brand-burgundy-dark/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-burgundy-dark/85 via-transparent to-brand-burgundy-dark/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Heritage Trust Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-burgundy/90 border-2 border-brand-gold/50 backdrop-blur-md mb-8 shadow-2xl animate-fadeIn">
          <Award className="w-5 h-5 text-brand-gold" />
          <span className="text-sm sm:text-base font-black text-brand-sand tracking-wide">
            تأسست عام {COMPANY_DETAILS.establishedYear} — أكثر من 4 عقود من الخبرة والتميز
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight text-white mb-8 font-sans">
          رحلتكم إلى الأراضي المقدسة <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sand via-brand-gold to-brand-sand">
            تبدأ بثقة واطمئنان
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-gray-100 leading-relaxed mb-12 font-bold">
          نرافقكم في رحلات الحج والعمرة بعناية تبدأ من التخطيط المتقن، الإقامة الفاخرة، والإشراف الديني الكامل، وتمتد حتى عودتكم سالمين.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-xl mx-auto">
          <a
            href="#umrah"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-brand-burgundy hover:bg-brand-burgundy-light text-white font-black text-lg shadow-2xl hover:shadow-3xl transition-all border-2 border-brand-gold/60 group"
          >
            <Compass className="w-6 h-6 text-brand-gold group-hover:rotate-45 transition-transform" />
            <span>استكشف رحلات العمرة</span>
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg shadow-2xl transition-all border-2 border-emerald-300/40 group"
          >
            <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
            <span>تواصل معنا مباشرة</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-12 border-t-2 border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm sm:text-base text-gray-200">
          <div className="flex flex-col items-center gap-2 bg-black/30 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
            <span className="font-black text-2xl sm:text-3xl text-brand-gold">40+ سنة</span>
            <span className="text-gray-200 font-bold">خبرة في الحج والعمرة</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-black/30 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
            <span className="font-black text-2xl sm:text-3xl text-brand-gold">فنادق VIP</span>
            <span className="text-gray-200 font-bold">مطلة وقريبة من الحرمين</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-black/30 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
            <span className="font-black text-2xl sm:text-3xl text-brand-gold">طيران مباشر</span>
            <span className="text-gray-200 font-bold">مصر للطيران والسعودية</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-black/30 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
            <span className="font-black text-2xl sm:text-3xl text-brand-gold">متابعة 24/7</span>
            <span className="text-gray-200 font-bold">إشراف ديني وإداري شامل</span>
          </div>
        </div>
      </div>
    </section>
  );
}
