import Image from 'next/image';
import { Award, Users, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { COMPANY_DETAILS } from '@/data/programsData';

export default function AboutSection() {
  const values = [
    {
      title: 'خبرة عريقة منذ 1982',
      description: 'تأسست شركة سيسي ترافل لتكون واحدة من أعرق شركات السياحة والحج والعمرة في مصر، مع السجل الحافل بالأمانة والاحترافية.',
      icon: Award,
    },
    {
      title: 'برامج مدروسة بعناية',
      description: 'نختار تفاصيل الإقامة الفندقية، خيارات الطيران المباشر، ووسائل النقل الداخلية بعناية فائقة لتوفير أقصى درجات الراحة.',
      icon: CheckCircle2,
    },
    {
      title: 'إشراف ديني وإداري 24/7',
      description: 'فريق متكامل من المرشدين والمشرفين لمرافقة المعتمرين والحجاج في كل خطوة وتيسير أداء المناسك بالشكل الصحيح.',
      icon: Users,
    },
    {
      title: 'شفافية ومصداقية كاملة',
      description: 'نلتزم بالوضوح التام في كافة الشروط وتفاصيل الفنادق والخدمات المشمولة بدون أي تكاليف خفية.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            badge="من نحن"
            title="نرافقكم في رحلة تستحق الثقة والاطمئنان"
            subtitle="أكثر من 40 عاماً من الالتزام والخدمة الراقية لضيوف الرحمن في مصر والأراضي المقدسة."
          />
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <MotionWrapper direction="right" delay={0.2} className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-sand">
              <Image
                src="/images/medina-mosque.jpg"
                alt="المسجد النبوي الشريف"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy-dark/70 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 left-6 bg-brand-burgundy-dark/90 backdrop-blur-md border border-brand-gold/40 p-5 rounded-2xl text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-burgundy rounded-xl text-brand-gold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">{COMPANY_DETAILS.name}</h4>
                    <p className="text-xs text-brand-sand mt-0.5 font-medium">
                      تأسست عام 1982 — سياحة • حج • عمرة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <MotionWrapper direction="left" delay={0.3}>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-brand-burgundy-dark leading-snug">
                  خبرة متراكمة نضعها في خدمتكم لتكون رحلتكم الإيمانية ذكرى لا تُنسى
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  في <strong className="text-brand-burgundy font-black">سيسي ترافل</strong>، نؤمن بأن أداء فريضة الحج والعمرة هي من أغلى أمنيات كل مسلم. ولذلك، نكرس كافة إمكانياتنا وخبرتنا العريقة لتصميم برامج تجمع بين الروحانية العالية والراحة التامة.
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  منذ انطلاقتنا عام 1982، حرصنا على بناء علاقات راسخة مع أرقى الفنادق في مكة المكرمة والمدينة المنورة، والتعاقد مع أفضل خطوط الطيران والنقل الداخلي، لنضمن لعملائنا تجربة سفر منظمة من البداية وحتى العودة بسلامة الله.
                </p>
              </div>
            </MotionWrapper>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <MotionWrapper key={idx} delay={0.4 + idx * 0.1}>
                    <div className="p-5 rounded-2xl bg-brand-sand-light border border-brand-sand hover:border-brand-burgundy/40 transition-all duration-300 group shadow-sm hover:shadow-md">
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-brand-burgundy/10 text-brand-burgundy group-hover:bg-brand-burgundy group-hover:text-white transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-base text-brand-burgundy-dark mb-1">{item.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed font-medium">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
