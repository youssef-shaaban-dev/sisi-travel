import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import MotionWrapper from '@/components/ui/MotionWrapper';
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
        <MotionWrapper>
          <SectionHeading
            badge="خطوات سهلة"
            title="كيف تبدأ رحلتك مع سيسي ترافل؟"
            subtitle="خطوات بسيطة وواضحة تأخذك من الاستفسار الأول وحتى أداء الفريضة بسلامة واطمئنان."
          />
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <MotionWrapper key={idx} delay={idx * 0.12}>
              <div className="bg-white p-8 rounded-3xl border border-brand-sand brand-card-shadow relative group hover:border-brand-burgundy/40 hover:-translate-y-1.5 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="text-5xl font-black text-brand-burgundy/15 font-sans mb-4 group-hover:text-brand-burgundy transition-colors">
                  {item.step}
                </div>

                <h3 className="text-xl font-black text-brand-burgundy-dark mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* CTA Bar */}
        <MotionWrapper delay={0.5} className="mt-14 text-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-brand-burgundy hover:bg-brand-burgundy-light text-white text-base font-extrabold shadow-lg hover:shadow-xl transition-all border border-brand-gold/40"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 fill-current" />
            <span>ابدأ الاستفسار عن رحلتك القادمة الآن</span>
          </a>
        </MotionWrapper>
      </div>
    </section>
  );
}
