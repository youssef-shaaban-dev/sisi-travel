'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, Compass, Award } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink } from '@/data/programsData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-36 pb-20 overflow-hidden bg-brand-burgundy-dark">
      {/* Background Photography Image - Clear and Vibrant */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/hero-kaaba.jpg"
            alt="المسجد الحرام والكعبة المشرفة"
            fill
            className="object-cover object-center brightness-110 contrast-105 opacity-100"
            priority
          />
        </motion.div>
        {/* Soft Contrast Overlays for Superior Clarity and Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy-dark/90 via-black/25 to-black/30" />
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-105" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Heritage Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-burgundy-dark/85 border-2 border-brand-gold/60 backdrop-blur-md mb-8 shadow-2xl"
        >
          <Award className="w-5 h-5 text-brand-gold" />
          <span className="text-sm sm:text-base font-black text-brand-sand tracking-wide">
            تأسست عام {COMPANY_DETAILS.establishedYear} — أكثر من 4 عقود من الخبرة والتميز
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight text-white mb-8 font-sans drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
        >
          رحلتكم إلى الأراضي المقدسة <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sand via-brand-gold to-brand-sand">
            تبدأ بثقة واطمئنان
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg sm:text-2xl text-white leading-relaxed mb-12 font-extrabold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
        >
          نرافقكم في رحلات الحج والعمرة بعناية تبدأ من التخطيط المتقن، الإقامة الفاخرة، والإشراف الديني الكامل، وتمتد حتى عودتكم سالمين.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-xl mx-auto"
        >
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
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t-2 border-white/25 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm sm:text-base text-white"
        >
          <div className="flex flex-col items-center gap-2 bg-brand-burgundy-dark/80 p-4 rounded-2xl border border-brand-gold/30 backdrop-blur-md shadow-lg hover:border-brand-gold/60 transition-all">
            <span className="font-black text-2xl sm:text-3xl text-brand-gold">40+ سنة</span>
            <span className="text-white font-bold">خبرة في الحج والعمرة</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-brand-burgundy-dark/80 p-4 rounded-2xl border border-brand-gold/30 backdrop-blur-md shadow-lg hover:border-brand-gold/60 transition-all">
            <span className="font-black text-2xl sm:text-3xl text-brand-gold">فنادق VIP</span>
            <span className="text-white font-bold">مطلة وقريبة من الحرمين</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-brand-burgundy-dark/80 p-4 rounded-2xl border border-brand-gold/30 backdrop-blur-md shadow-lg hover:border-brand-gold/60 transition-all">
            <span className="font-black text-2xl sm:text-3xl text-brand-gold">طيران مباشر</span>
            <span className="text-white font-bold">مصر للطيران والسعودية</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-brand-burgundy-dark/80 p-4 rounded-2xl border border-brand-gold/30 backdrop-blur-md shadow-lg hover:border-brand-gold/60 transition-all">
            <span className="font-black text-2xl sm:text-3xl text-brand-gold">متابعة 24/7</span>
            <span className="text-white font-bold">إشراف ديني وإداري شامل</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
