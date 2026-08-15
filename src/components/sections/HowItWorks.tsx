import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { getWhatsAppLink } from '@/data/programsData';
import { MessageCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'اختر البرنامج المناسب',
      description: 'استعرض برامج العمرة والحج المتنوعة واختر الفندق ومدة الرحلة التي تلبي رغبتك.',
    },
    {
      step: '02',
      title: 'تواصل معنا مباشرة',
      description: 'انقر على زر الواتساب أو اتصل بنا للتحدث مع مسؤول الرحلات والإجابة عن استفساراتك.',
    },
    {
      step: '03',
      title: 'تأكيد الحجز والمستندات',
      description: 'تزويدنا بصورة جواز السفر والأوراق الرسمية لإصدار التأشيرة وحجز الطيران والفنادق.',
    },
    {
      step: '04',
      title: 'انطلق مباركاً للأراضي المقدسة',
      description: 'استلم حقيبة السفر والكتيب واستعد لرحلة إيمانية مريحة ومصحوبة برعايتنا الكاملة.',
    },
  ];

  return (
    <section className="py-20 bg-brand-sand-light border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="خطوات سهلة"
          title="كيف تبدأ رحلتك مع سيسي ترافل؟"
          subtitle="خطوات بسيطة وواضحة تأخذك من الاستفسار الأول وحتى أداء الفريضة بسلامة واطمئنان."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-brand-sand brand-card-shadow relative group hover:border-brand-burgundy/40 transition-all"
            >
              {/* Number Badge */}
              <div className="text-4xl font-extrabold text-brand-burgundy/15 font-sans mb-4 group-hover:text-brand-burgundy transition-colors">
                {item.step}
              </div>

              <h3 className="text-lg font-bold text-brand-burgundy-dark mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-burgundy hover:bg-brand-burgundy-light text-white text-sm font-bold shadow-lg transition-all border border-brand-gold/40"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>ابدأ الاستفسار عن رحلتك القادمة الآن</span>
          </a>
        </div>
      </div>
    </section>
  );
}
