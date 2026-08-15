import { Award, Compass, Headphones, ShieldCheck, Hotel, Plane } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

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
    <section id="why-us" className="py-20 bg-white border-t border-[#E0D9C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="تميز سيسي ترافل"
          title="لماذا تختار سيسي ترافل لرحلتك المقدسة؟"
          subtitle="معايير دقيقة تضمن لك ولعائلتك رحلة إيمانية هادئة، منظمة، وتستحق الثقة."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F9F7F3] border border-[#E0D9C9] hover:border-[#531F23]/40 transition-all duration-300 brand-card-shadow hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#531F23]/10 text-[#531F23] flex items-center justify-center mb-6 group-hover:bg-[#531F23] group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#281015] mb-3 group-hover:text-[#531F23] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
