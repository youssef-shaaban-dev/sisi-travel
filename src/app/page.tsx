import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import UmrahSection from '@/components/sections/UmrahSection';
import HajjSection from '@/components/sections/HajjSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import { serverApi } from '@/lib/serverApi';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ما هي المستندات والأوراق المطلوبة لحجز رحلات العمرة والحج؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'المستندات المطلوبة تشمل: جواز سفر مميكن صالح لمدة لا تقل عن 6 أشهر من تاريخ السفر، عدد 2 صورة شخصية بخلفية بيضاء، صورة بطاقة الرقم القومي، بالإضافة إلى الشهادة الصحية الخاصة بالتطعيمات المعتمدة وفق ضوابط وزارة السياحة والتعليمات السعودية.',
      },
    },
    {
      '@type': 'Question',
      name: 'ما الفرق بين برامج الحج الفاخر والحج الاقتصادي والحج البري؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'برامج الحج الفاخر تشمل الإقامة بفنادق 5 نجوم صف أول مطلة على الحرمين، قطار الحرمين السريع، ومخيمات VIP وعمائر كدانه الفاخرة بالمشاعر. البرامج الاقتصادية تجمع بين السعر المناسب والإقامة بفنادق 5 نجوم بوفيه مفتوح مع انتقالات مريحة. أما الحج البري فيوفر الانتقال بالحافلات السياحية الحديثة المكيفة مباشرة من القاهرة مع إقامة فندقية راقية بمكة والمدينة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل تشمل البرامج إشرافاً دينياً وطبياً طوال مدة الرحلة؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم بالتأكيد، تضع شركة سيسي ترافل خبرتها المتراكمة لـ 40 عاماً بين أيديكم بمرافقة نخبة من كبار العلماء والدعاة لشرح المناسك، بالإضافة إلى طاقم إداري وطبي مخصص متواجد على مدار 24 ساعة لخدمة الحجاج والمعتمرين.',
      },
    },
    {
      '@type': 'Question',
      name: 'كيف يتم التنقل داخل الأراضي المقدسة وبين المشاعر؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'يتم توفير قطار الحرمين السريع للرحلات الفاخرة للقيام بالتنقل السريع المريح بين المدينة ومكة، بالإضافة إلى أسطول من الأتوبيسات والباصات السياحية الفاخرة موديل السنة والمكيفة بالكامل المخصصة لحجاج ومعتمري الشركة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل توجد تسهيلات ورعاية خاصة لكبار السن وذوي الاحتياجات الخاصة؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم، تولي شركة سيسي ترافل اهتماماً بالغاً بكبار السن وذوي الاحتياجات الخاصة، من خلال توفير كراسي متحركة، وتسهيل إجراءات التسكين، وتخصيص مساعدين وإشراف مخصص بالمشاعر والفنادق لضمان أداء الفريضة بيسر وطمأنينة.',
      },
    },
    {
      '@type': 'Question',
      name: 'كيف يمكنني حجز رحلتي والاستفسار عن العروض والأسعار المتاحة؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'يمكنكم التواصل المباشر مع فريق المبيعات والخدمة عبر الواتساب أو الاتصال الهاتفي بأرقام الشركة الرسمية، أو زيارة مقر المركز الرئيسي (161 شارع السودان ، المهندسين - الجيزة مصر) أو أحد فروعنا بالمحافظات.',
      },
    },
  ],
};

export default async function HomePage() {
  const allPrograms = await serverApi.getPrograms();
  const umrahPrograms = allPrograms.filter(p => p.type === 'umrah');
  const hajjPrograms = allPrograms.filter(p => p.type === 'hajj');
  return (
    <div className="min-h-screen flex flex-col bg-brand-sand-light overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <AboutSection />
        <UmrahSection initialPrograms={umrahPrograms} />
        <HajjSection initialPrograms={hajjPrograms} />
        <WhyChooseUs />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
