import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Building2,
  Plane,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
  Award,
  FileText,
  Tag,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Badge from '@/components/ui/Badge';
import ProgramCard from '@/components/sections/ProgramCard';
import { ALL_PROGRAMS, COMPANY_DETAILS, getWhatsAppLink } from '@/data/programsData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PROGRAMS.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const program = ALL_PROGRAMS.find((p) => p.slug === resolvedParams.slug);

  if (!program) {
    return { title: 'البرنامج غير موجود | سيسي ترافل' };
  }

  return {
    title: `${program.title} | ${COMPANY_DETAILS.name}`,
    description: program.summary,
  };
}

export default async function ProgramDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const program = ALL_PROGRAMS.find((p) => p.slug === resolvedParams.slug);

  if (!program) {
    notFound();
  }

  // Related programs
  const relatedPrograms = ALL_PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3);

  const isHajj = program.category.startsWith('hajj');

  return (
    <div className="min-h-screen flex flex-col bg-brand-sand-light">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 overflow-x-auto py-2">
            <Link href="/" className="hover:text-brand-burgundy flex items-center gap-1">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href={isHajj ? '/#hajj' : '/#umrah'} className="hover:text-brand-burgundy font-medium">
              {isHajj ? 'برامج الحج' : 'رحلات العمرة'}
            </Link>
            <span>/</span>
            <span className="font-bold text-brand-burgundy truncate max-w-xs">{program.title}</span>
          </nav>

          {/* Program Header */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant={
                  program.category === 'vip' || program.category === 'hajj-luxury'
                    ? 'gold'
                    : program.category === 'economic' || program.category === 'hajj-economic'
                    ? 'olive'
                    : 'burgundy'
                }
              >
                {program.badgeText}
              </Badge>
              <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-emerald-600" />
                <span>السعر: {program.price}</span>
              </span>
              <span className="text-xs font-semibold text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full border border-brand-olive/20">
                طيران مباشر ({program.airline})
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-brand-burgundy-dark leading-tight">
              {program.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-medium">
              {program.subtitle}
            </p>
          </div>

          {/* Image Gallery Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="md:col-span-2 relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-brand-sand bg-brand-burgundy-dark">
              <Image
                src={program.featuredImage}
                alt={program.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {program.galleryImages.slice(1, 3).map((img, idx) => (
                <div key={idx} className="relative h-[155px] sm:h-[200px] rounded-2xl overflow-hidden shadow border border-brand-sand bg-brand-burgundy-dark">
                  <Image src={img} alt={`تفاصيل ${program.title}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Two-Column Responsive Desktop Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Program Information Breakdown & Itinerary */}
            <div className="lg:col-span-8 space-y-10">
              {/* Program Overview Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sand brand-card-shadow space-y-4">
                <h2 className="text-xl font-bold text-brand-burgundy-dark border-r-4 border-brand-burgundy pr-3">
                  نبذة عن الرحلة
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {program.summary}
                </p>

                {/* Duration & Flight Specs Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-brand-sand-light border border-brand-sand flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-brand-burgundy flex-shrink-0" />
                    <div>
                      <div className="text-gray-500 text-[11px]">مدة الرحلة</div>
                      <div className="font-bold text-brand-burgundy-dark">{program.durationDays} يوماً ({program.durationNights} ليلة)</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-sand-light border border-brand-sand flex items-center gap-3">
                    <Plane className="w-5 h-5 text-brand-olive flex-shrink-0" />
                    <div>
                      <div className="text-gray-500 text-[11px]">شركة الطيران</div>
                      <div className="font-bold text-brand-burgundy-dark">{program.airline}</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-sand-light border border-brand-sand flex items-center gap-3 col-span-2 sm:col-span-1">
                    <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <div>
                      <div className="text-gray-500 text-[11px]">الضمان والأمان</div>
                      <div className="font-bold text-brand-burgundy-dark">مرخص رخصة 1982</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accommodation Hotels */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sand brand-card-shadow space-y-6">
                <h2 className="text-xl font-bold text-brand-burgundy-dark border-r-4 border-brand-burgundy pr-3">
                  الإقامة الفندقية المعتمدة
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {program.hotels.map((hotel, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-brand-sand-light border border-brand-sand space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-brand-burgundy bg-brand-burgundy/10 px-2.5 py-0.5 rounded-full">
                          {hotel.city} ({hotel.city === 'مكة المكرمة' ? `${program.meccaNights} ليالٍ` : `${program.medinaNights} ليالٍ`})
                        </span>
                        <div className="flex text-brand-gold">
                          {Array.from({ length: hotel.stars }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                      <h4 className="font-bold text-base text-brand-burgundy-dark">{hotel.name}</h4>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-brand-burgundy" />
                        <span>الموقع: {hotel.distance}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included & Excluded Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Included */}
                <div className="bg-white p-6 rounded-2xl border border-brand-sand brand-card-shadow space-y-4">
                  <h3 className="text-lg font-bold text-brand-burgundy-dark flex items-center gap-2 border-r-4 border-emerald-500 pr-3">
                    <span>الخدمات المشمولة في البرنامج</span>
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                    {program.includedServices.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="bg-white p-6 rounded-2xl border border-brand-sand brand-card-shadow space-y-4">
                  <h3 className="text-lg font-bold text-brand-burgundy-dark flex items-center gap-2 border-r-4 border-gray-400 pr-3">
                    <span>الخدمات غير المشمولة</span>
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                    {program.excludedServices.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sand brand-card-shadow space-y-6">
                <h2 className="text-xl font-bold text-brand-burgundy-dark border-r-4 border-brand-burgundy pr-3">
                  جدول برنامج الرحلة اليومي
                </h2>
                <div className="space-y-6 relative before:content-[''] before:absolute before:top-3 before:bottom-3 before:right-[15px] before:w-0.5 before:bg-brand-sand">
                  {program.itinerary.map((day) => (
                    <div key={day.dayNumber} className="relative pr-9 space-y-1">
                      <div className="absolute top-1 right-0 w-8 h-8 rounded-full bg-brand-burgundy text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow">
                        {day.dayNumber}
                      </div>
                      <h4 className="font-bold text-base text-brand-burgundy-dark">{day.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-brand-sand-light p-6 rounded-2xl border border-brand-sand space-y-3">
                <h3 className="font-bold text-base text-brand-burgundy-dark flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-burgundy" />
                  <span>تعليمات وملاحظات مهمة</span>
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-600 leading-relaxed">
                  {program.importantNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sticky Booking & Inquiry Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-6 rounded-2xl border-2 border-brand-burgundy/20 shadow-xl space-y-6">
                <div className="space-y-2 text-center pb-4 border-b border-gray-100">
                  <div className="text-2xl font-black text-brand-burgundy-dark">
                    {program.price}
                  </div>
                  <p className="text-xs font-bold text-brand-gold">
                    {program.priceNote}
                  </p>
                </div>

                <div className="space-y-3 text-xs text-gray-700">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">اسم البرنامج:</span>
                    <span className="font-bold text-brand-burgundy-dark">{program.categoryLabel}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">المدة الكلية:</span>
                    <span className="font-bold text-brand-burgundy-dark">{program.durationDays} يوماً</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">فندق مكة:</span>
                    <span className="font-bold text-brand-burgundy-dark truncate max-w-[160px]">{program.hotels[0]?.name.split('(')[0]}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">خطوط الطيران:</span>
                    <span className="font-bold text-brand-burgundy-dark">{program.airline}</span>
                  </div>
                </div>

                {/* Primary Actions */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(`${program.title} (بسعر ${program.price})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-extrabold shadow-lg transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>استفسر عن هذا البرنامج عبر واتساب</span>
                  </a>
                </div>

                <div className="pt-2 text-center text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-brand-gold" />
                  <span>شركة سيسي ترافل (أ) - رخصة وزارة السياحة رقم 249</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Programs Section */}
          <div className="mt-20 pt-12 border-t border-brand-sand">
            <h3 className="text-2xl font-bold text-brand-burgundy-dark mb-8 border-r-4 border-brand-burgundy pr-3">
             أقتراحات برامج أخرى
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPrograms.map((relProg) => (
                <ProgramCard key={relProg.id} program={relProg} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
