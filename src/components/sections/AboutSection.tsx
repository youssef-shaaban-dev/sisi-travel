import Image from 'next/image';
import { Award, Users, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

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
        <SectionHeading
          badge="من نحن"
          title="نرافقكم في رحلة تستحق الثقة والاطمئنان"
          subtitle="أكثر من 40 عاماً من الالتزام والخدمة الراقية لضيوف الرحمن في مصر والأراضي المقدسة."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#E0D9C9]">
              <Image
                src="/images/medina-mosque.jpg"
                alt="المسجد النبوي الشريف"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#281015]/70 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 left-6 bg-[#281015]/90 backdrop-blur-md border border-[#C5A059]/40 p-5 rounded-xl text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#531F23] rounded-lg text-[#C5A059]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">سيسي ترافل (Sisi Travel)</h4>
                    <p className="text-xs text-[#E0D9C9] mt-0.5">
                      تأسست عام 1982 — سياحة • حج • عمرة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#281015] leading-snug">
                خبرة متراكمة نضعها في خدمتكم لتكون رحلتكم الإيمانية ذكرى لا تُنسى
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                في <strong className="text-[#531F23]">سيسي ترافل</strong>، نؤمن بأن أداء فريضة الحج والعمرة هي من أغلى أمنيات كل مسلم. ولذلك، نكرس كافة إمكانياتنا وخبرتنا العريقة لتصميم برامج تجمع بين الروحانية العالية والراحة التامة.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                منذ انطلاقتنا عام 1982، حرصنا على بناء علاقات راسخة مع أرقى الفنادق في مكة المكرمة والمدينة المنورة، والتعاقد مع أفضل خطوط الطيران والنقل الداخلي، لنضمن لعملائنا تجربة سفر منظمة من البداية وحتى العودة بسلامة الله.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F9F7F3] border border-[#E0D9C9] hover:border-[#531F23]/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#531F23]/10 text-[#531F23] group-hover:bg-[#531F23] group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#281015] mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
