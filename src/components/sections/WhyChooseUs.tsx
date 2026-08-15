import React from 'react';
import { Award, Compass, Headphones, ShieldCheck, Hotel, Plane } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MotionWrapper from '@/components/ui/MotionWrapper';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'خبرة وثقة منذ 1982',
      description: 'أكثر من 40 عاماً من الخبرة المتراكمة في تنظيم وإدارة رحلات الحج والعمرة بخدمات متميزة وسمعة طيبة.',
      icon: Award,
    },
    {
      title: 'برامج مدروسة بعناية',
      description: 'نختار تفاصيل البرامج والإقامة الفندقية بعناية لتتناسب مع احتياجات ورغبات العائلات المصرية.',
      icon: Compass,
    },
    {
      title: 'متابعة مستمرة 24/7',
      description: 'فريق عمل متواجد معك في القاهرة والأراضي المقدسة للرد على استفساراتك وتلبية كافة احتياجاتك.',
      icon: Headphones,
    },
    {
      title: 'خدمة متكاملة وشفافة',
      description: 'من إصدار التأشيرات وتذاكر الطيران، وحافلات النقل الفاخرة، وحتى أداء المناسك والعودة سالمين.',
      icon: ShieldCheck,
    },
    {
      title: 'فنادق ممتازة وقريبة',
      description: 'الالتزام الكامل بمستويات الفنادق المعلنة في مكة والمدينة ومواقعها القريبة من ساحات الحرمين.',
      icon: Hotel,
    },
    {
      title: 'رحلات طيران مباشرة',
      description: 'حجوزات مؤكدة على أفضل الناقلات الوطنية كشركة مصر للطيران والخطوط الجوية السعودية.',
      icon: Plane,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            badge="تميز سيسي ترافل"
            title="لماذا تختار سيسي ترافل لرحلتك المقدسة؟"
            subtitle="معايير دقيقة تضمن لك ولعائلتك رحلة إيمانية هادئة، منظمة، وتستحق الثقة."
          />
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <MotionWrapper key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-brand-sand-light border border-brand-sand hover:border-brand-burgundy/40 transition-all duration-300 brand-card-shadow hover:-translate-y-2 group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-brand-burgundy/10 text-brand-burgundy flex items-center justify-center mb-6 group-hover:bg-brand-burgundy group-hover:text-white transition-all shadow-sm">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-brand-burgundy-dark mb-3 group-hover:text-brand-burgundy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
