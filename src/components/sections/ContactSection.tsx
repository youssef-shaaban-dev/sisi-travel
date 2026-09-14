import { MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { getWhatsAppLink } from '@/data/programsData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            badge="تواصل معنا"
            title="يسعدنا استقبال استفساراتكم وخدمتكم"
            subtitle="فريق سيسي ترافل المتميز جاهز للإجابة على كافة أسئلتكم حول رحلات الحج والعمرة برعاية تامة."
          />
        </MotionWrapper>

        <div className="max-w-4xl mx-auto">
          {/* Main Direct WhatsApp Banner */}
          <MotionWrapper delay={0.2}>
            <div className="bg-linear-to-r from-brand-burgundy-dark via-brand-burgundy to-brand-burgundy-dark rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-brand-gold/40 text-center mb-12 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                  <MessageCircle className="w-8 h-8 fill-current animate-pulse" />
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  تواصل عبر واتساب
                </h3>

                <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-200 leading-relaxed font-bold">
                  انقر على الزر أدناه لبدء المحادثة الفورية مع مسؤول حجز رحلات العمرة والحج بشركة سيسي ترافل والحصول على كافة التفاصيل فوراً.
                </p>

                <div>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg shadow-2xl hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    <span>تواصل عبر واتساب مباشرة</span>
                  </a>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
