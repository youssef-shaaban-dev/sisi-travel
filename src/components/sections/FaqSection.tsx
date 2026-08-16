'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { getWhatsAppLink } from '@/data/programsData';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: 'ما هي المستندات والأوراق المطلوبة لحجز رحلات العمرة والحج؟',
      answer:
        'المستندات المطلوبة تشمل: جواز سفر مميكن صالح لمدة لا تقل عن 6 أشهر من تاريخ السفر، عدد 2 صورة شخصية بخلفية بيضاء، صورة بطاقة الرقم القومي، بالإضافة إلى الشهادة الصحية الخاصة بالتطعيمات المعتمدة وفق ضوابط وزارة السياحة والتعليمات السعودية.',
    },
    {
      id: 2,
      question: 'ما الفرق بين برامج الحج الفاخر والحج الاقتصادي والحج البري؟',
      answer:
        'برامج الحج الفاخر تشمل الإقامة بفنادق 5 نجوم صف أول مطلة على الحرمين، قطار الحرمين السريع، ومخيمات VIP وعمائر كدانه الفاخرة بالمشاعر. البرامج الاقتصادية تجمع بين السعر المناسب والإقامة بفنادق 5 نجوم بوفيه مفتوح مع انتقالات مريحة. أما الحج البري فيوفر الانتقال بالحافلات السياحية الحديثة المكيفة مباشرة من القاهرة مع إقامة فندقية راقية بمكة والمدينة.',
    },
    {
      id: 3,
      question: 'هل تشمل البرامج إشرافاً دينياً وطبياً طوال مدة الرحلة؟',
      answer:
        'نعم بالتأكيد، تضع شركة سيسي ترافل خبرتها المتراكمة لـ 40 عاماً بين أيديكم بمرافقة نخبة من كبار العلماء والدعاة لشرح المناسك، بالإضافة إلى طاقم إداري وطبي مخصص متواجد على مدار 24 ساعة لخدمة الحجاج والمعتمرين.',
    },
    {
      id: 4,
      question: 'كيف يتم التنقل داخل الأراضي المقدسة وبين المشاعر؟',
      answer:
        'يتم توفير قطار الحرمين السريع للرحلات الفاخرة للقيام بالتنقل السريع المريح بين المدينة ومكة، بالإضافة إلى أسطول من الأتوبيسات والباصات السياحية الفاخرة موديل السنة والمكيفة بالكامل المخصصة لحجاج ومعتمري الشركة.',
    },
    {
      id: 5,
      question: 'هل توجد تسهيلات ورعاية خاصة لكبار السن وذوي الاحتياجات الخاصة؟',
      answer:
        'نعم، تولي شركة سيسي ترافل اهتماماً بالغاً بكبار السن وذوي الاحتياجات الخاصة، من خلال توفير كراسي متحركة، وتسهيل إجراءات التسكين، وتخصيص مساعدين وإشراف مخصص بالمشاعر والفنادق لضمان أداء الفريضة بيسر وطمأنينة.',
    },
    {
      id: 6,
      question: 'كيف يمكنني حجز رحلتي والاستفسار عن العروض والأسعار المتاحة؟',
      answer:
        'يمكنكم التواصل المباشر مع فريق المبيعات والخدمة عبر الواتساب أو الاتصال الهاتفي بأرقام الشركة الرسمية، أو زيارة مقر المركز الرئيسي (161 شارع السودان ، المهندسين - الجيزة مصر) أو أحد فروعنا بالمحافظات.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-sand-light border-t border-brand-sand relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            badge="إجابات وشروحات"
            title="أهم أسئلة عن العمرة والحج"
            subtitle="نحن هنا للإجابة على جميع استفساراتكم لضمان رحلة إيمانية مريحة ومنظمة بثقة واطمئنان."
          />
        </MotionWrapper>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <MotionWrapper key={faq.id} delay={idx * 0.08}>
                <div
                  className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden bg-white ${
                    isOpen
                      ? 'border-brand-burgundy shadow-lg'
                      : 'border-brand-sand hover:border-brand-burgundy/40 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-right flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${
                          isOpen
                            ? 'bg-brand-burgundy text-white'
                            : 'bg-brand-sand-light text-brand-burgundy group-hover:bg-brand-sand'
                        }`}
                      >
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <span className="text-base sm:text-lg font-black text-brand-burgundy-dark leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-brand-sand text-brand-burgundy' : 'bg-gray-50 text-gray-500'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-gray-700 leading-relaxed font-medium border-t border-gray-100 pr-16">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <MotionWrapper delay={0.4} className="mt-14 text-center">
          <div className="p-8 rounded-3xl bg-brand-burgundy text-white space-y-4 shadow-xl border-2 border-brand-gold/30">
            <h3 className="text-xl sm:text-2xl font-black">لديك سؤال آخر لم نجب عليه؟</h3>
            <p className="text-sm sm:text-base text-brand-sand opacity-90 max-w-xl mx-auto font-medium">
              تواصل مباشرة مع مستشاري الحج والعمرة بشركة سيسي ترافل وسنرد على جميع استفساراتك فوراً.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink('استفسارات الحج والعمرة')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-base font-extrabold shadow-lg transition-all border border-emerald-400/40"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>تواصل معنا عبر الواتساب الآن</span>
              </a>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
