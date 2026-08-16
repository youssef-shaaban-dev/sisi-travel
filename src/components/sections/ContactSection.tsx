import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { COMPANY_DETAILS, getWhatsAppLink } from '@/data/programsData';

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
            <div className="bg-gradient-to-r from-brand-burgundy-dark via-brand-burgundy to-brand-burgundy-dark rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-brand-gold/40 text-center mb-12 relative overflow-hidden">
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

          {/* Contact Details Grid - 2 Centered Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6">
            {/* Phone & WhatsApp Card */}
            <MotionWrapper delay={0.3}>
              <div className="bg-brand-sand-light p-7 rounded-3xl border border-brand-sand flex flex-col items-center text-center space-y-3 brand-card-shadow hover:-translate-y-1 transition-all h-full justify-between">
                <div className="p-3.5 bg-brand-burgundy/10 text-brand-burgundy rounded-2xl">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-lg text-brand-burgundy-dark">رقم الهاتف والواتساب</h4>
                <div dir='ltr' className="text-lg text-gray-800 dir-ltr font-black">
                  <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="hover:text-brand-burgundy transition-colors">
                    {COMPANY_DETAILS.phone1}
                  </a>
                </div>
              </div>
            </MotionWrapper>

            {/* Office & Hours Card */}
            <MotionWrapper delay={0.4}>
              <div className="bg-brand-sand-light p-7 rounded-3xl border border-brand-sand flex flex-col items-center text-center space-y-3 brand-card-shadow hover:-translate-y-1 transition-all h-full justify-between">
                <div className="p-3.5 bg-brand-burgundy/10 text-brand-burgundy rounded-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-lg text-brand-burgundy-dark">المقر وساعات العمل</h4>
                <p className="text-sm text-gray-700 leading-relaxed font-bold">
                  {COMPANY_DETAILS.address}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium pt-1">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>{COMPANY_DETAILS.workingHours}</span>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
