import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { COMPANY_DETAILS, getWhatsAppLink } from '@/data/programsData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="تواصل معنا"
          title="يسعدنا استقبال استفساراتكم وخدمتكم"
          subtitle="فريق سيسي ترافل المتميز جاهز للإجابة على كافة أسئلتكم حول رحلات الحج والعمرة برعاية تامة."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Direct WhatsApp Banner */}
          <div className="bg-gradient-to-r from-brand-burgundy-dark via-brand-burgundy to-brand-burgundy-dark rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-brand-gold/40 text-center mb-12 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                <MessageCircle className="w-8 h-8 fill-current" />
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                تواصل عبر واتساب
              </h3>

              <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-200 leading-relaxed">
                انقر على الزر أدناه لبدء المحادثة الفورية مع مسؤول حجز رحلات العمرة والحج بشركة سيسي ترافل والحصول على كافة التفاصيل فوراً.
              </p>

              <div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base shadow-xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>تواصل عبر واتساب مباشرة</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-brand-sand-light p-6 rounded-2xl border border-brand-sand flex flex-col items-center text-center space-y-3 brand-card-shadow">
              <div className="p-3 bg-brand-burgundy/10 text-brand-burgundy rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-brand-burgundy-dark">أرقام الهاتف</h4>
              <div className="space-y-1 text-sm text-gray-700 dir-ltr font-medium">
                <div>
                  <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="hover:text-brand-burgundy">
                    {COMPANY_DETAILS.phone1}
                  </a>
                </div>
                <div>
                  <a href={`tel:${COMPANY_DETAILS.phone2Raw}`} className="hover:text-brand-burgundy">
                    {COMPANY_DETAILS.phone2}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-brand-sand-light p-6 rounded-2xl border border-brand-sand flex flex-col items-center text-center space-y-3 brand-card-shadow">
              <div className="p-3 bg-brand-burgundy/10 text-brand-burgundy rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-brand-burgundy-dark">البريد الإلكتروني</h4>
              <div className="space-y-1 text-sm text-gray-700 dir-ltr font-medium">
                <div>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-brand-burgundy">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
                <div>
                  <a href={`mailto:${COMPANY_DETAILS.secondaryEmail}`} className="hover:text-brand-burgundy">
                    {COMPANY_DETAILS.secondaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Office & Hours Card */}
            <div className="bg-brand-sand-light p-6 rounded-2xl border border-brand-sand flex flex-col items-center text-center space-y-3 brand-card-shadow sm:col-span-2 lg:col-span-1">
              <div className="p-3 bg-brand-burgundy/10 text-brand-burgundy rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-brand-burgundy-dark">المقر وساعات العمل</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                {COMPANY_DETAILS.address}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{COMPANY_DETAILS.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
