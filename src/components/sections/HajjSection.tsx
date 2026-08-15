import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { UMRAH_PROGRAMS, getWhatsAppLink } from '@/data/programsData';

export default function HajjSection() {
  const hajjPrograms = UMRAH_PROGRAMS.filter((p) => p.category === 'hajj');

  return (
    <section id="hajj" className="py-24 bg-brand-sand-light text-brand-burgundy-dark relative overflow-hidden border-t border-brand-sand">
      {/* Subtle Background Pattern Accent */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(var(--color-brand-gold)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="فريضة العمر والختام المبارك"
          title="برامج الحج لعام 2026 — تنظيماً يليق بعظمة الفريضة"
          subtitle="نضع بين أيديكم 40 عاماً من الخبرة في إدارة موسم الحج، مع أرقى الفنادق والمخيمات المطورة بالمشاعر المقدسة."
        />

        {/* Feature Highlight Card - Light & Elegant */}
        <div className="bg-[#F4EFE6] rounded-3xl p-8 lg:p-12 border-2 border-brand-sand shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Box */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-brand-sand">
              <Image
                src="/images/hajj-mina.jpg"
                alt="مخيمات الحج الفاخرة في منى وعرفات"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black text-brand-burgundy-dark border border-brand-sand shadow">
                مخيمات VIP مطورة بمشاعر منى وعرفات
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 text-amber-800 text-xs font-extrabold border border-brand-gold/40">
                <Star className="w-4 h-4 text-brand-gold fill-current" />
                <span>خدمة الحج الفاخر والمبسط</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-brand-burgundy-dark leading-snug">
                رحلة الحج مع سيسي ترافل: راحة وطمأنينة متكاملة
              </h3>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                نحرص على أن تكون رحلتكم لأداء فريضة الحج منظمة، مريحة، وواضحة في كل تفاصيلها. بدءاً من حجز الفنادق المباشرة أمام الحرم، وتوفير المخيمات الفاخرة المكيفة بمنى وعرفات، وحتى الإشراف الطبي والديني الشامل.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-800 font-bold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  <span>فنادق 5 نجوم أمام ساحة الحرم مباشرة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  <span>مخيمات VIP مكيفة بالكامل بالعرفات ومنى</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  <span>وجبات بوفيه مفتوح ومشروبات طوال اليوم</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  <span>إشراف فقهي وطبي مخصص 24/7</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={getWhatsAppLink('برامج الحج لعام 2026')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-base font-extrabold transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>تواصل معنا لمعرفة برامج الحج</span>
                </a>
                <Link
                  href="/programs/hajj-vip-2026"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-brand-sand-light text-brand-burgundy-dark text-base font-bold transition-colors border border-brand-sand shadow-sm"
                >
                  <span>التفاصيل الكاملة لبرنامج الحج</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hajj Programs Grid - Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hajjPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#F4EFE6] rounded-3xl p-7 border-2 border-white hover:border-brand-sand transition-all shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-800 bg-brand-gold/15 px-3.5 py-1.5 rounded-full border border-brand-gold/30">
                    {program.badgeText}
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    {program.durationDays} يوماً
                  </span>
                </div>

                <h4 className="text-2xl font-black text-brand-burgundy-dark leading-snug">
                  {program.title}
                </h4>

                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed font-medium">
                  {program.subtitle}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between gap-4">
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-burgundy hover:text-brand-gold transition-colors"
                >
                  <span>استعراض برنامج الرحلة الكامل</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppLink(program.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 hover:text-white transition-all border border-emerald-500/30"
                  title="استفسار مباشر عبر واتساب"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
