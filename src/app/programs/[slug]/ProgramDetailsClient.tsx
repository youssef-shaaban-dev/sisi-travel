'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Building2,
  Plane,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Award,
  FileText,
  Tag,
  Sparkles,
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Badge from '@/components/ui/Badge';
import ProgramCard from '@/components/sections/ProgramCard';
import { COMPANY_DETAILS, TravelProgram, getWhatsAppLink } from '@/data/programsData';
import { api } from '@/lib/api';

interface ProgramDetailsClientProps {
  initialProgram: TravelProgram;
  initialRelatedPrograms: TravelProgram[];
}

export default function ProgramDetailsClient({
  initialProgram,
  initialRelatedPrograms,
}: ProgramDetailsClientProps) {
  const { data: program = initialProgram } = useQuery<TravelProgram>({
    queryKey: ['program', initialProgram.slug],
    queryFn: async () => {
      const liveData = await api.getProgramBySlug(initialProgram.slug);
      return liveData || initialProgram;
    },
    initialData: initialProgram,
    staleTime: 1000 * 30,
    refetchOnWindowFocus: true,
  });

  const isHajj = (program.category || '').startsWith('hajj');
  const hotels = (program.hotels || []).filter((h) => h && h.name && h.name.trim());
  const galleryImages = (program.galleryImages || []).filter((img) => img && img.trim());
  const includedServices = (program.includedServices || []).filter((s) => s && s.trim());
  const excludedServices = (program.excludedServices || []).filter((s) => s && s.trim());
  const itinerary = (program.itinerary || []).filter(
    (d) => d && (d.title?.trim() || d.description?.trim())
  );
  const importantNotes = (program.importantNotes || []).filter((n) => n && n.trim());
  const relatedPrograms = (initialRelatedPrograms || []).filter((p) => p && p.id);

  const hasFlightInfo = Boolean(program.airline?.trim() || program.flightType?.trim());
  const hasDuration = Boolean(program.durationDays || program.durationNights);
  const hasOverview = Boolean(program.summary?.trim() || hasDuration || hasFlightInfo);

  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const activeImage = selectedImage || program.featuredImage || '';

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
              {/* Special Ribbon Offer Badge */}
              {(program.badgeText?.trim() || program.ribbonText?.trim()) && (
                <span className="text-sm md:text-base font-black text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-red-300/40">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{program.badgeText?.trim() || program.ribbonText?.trim()}</span>
                </span>
              )}

              {program.price?.trim() && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-md md:text-lg font-black text-brand-burgundy-dark bg-amber-400 px-4 py-1.5 rounded-full border border-amber-300/80 shadow-md flex items-center gap-1.5 scale-105">
                    <Tag className="w-3.5 h-3.5 text-brand-burgundy-dark" />
                    <span>السعر: {program.price} {program.price.includes('ج.م') ? '' : 'ج.م'}</span>
                  </span>

                  {program.originalPrice?.trim() && (
                    <span className="text-sm md:text-base font-bold text-gray-400 line-through decoration-red-500 decoration-2 px-2 bg-gray-100 rounded-full py-1">
                      {program.originalPrice} {program.originalPrice.includes('ج.م') ? '' : 'ج.م'}
                    </span>
                  )}
                </div>
              )}

              {hasFlightInfo && (
                <span className="text-md md:text-lg font-semibold text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full border border-brand-olive/20">
                  {program.flightType?.trim() || 'طيران مباشر'}
                  {program.airline?.trim() ? ` (${program.airline})` : ''}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-brand-burgundy-dark leading-tight">
              {program.title}
            </h1>

            {program.subtitle?.trim() && (
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-medium">
                {program.subtitle}
              </p>
            )}
          </div>

          {/* Image Gallery Showcase */}
          {(program.featuredImage || galleryImages.length > 0) && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Main Showcase Image (Original 2-column size) */}
                <div className="md:col-span-2 relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-brand-sand bg-brand-burgundy-dark">
                  {(activeImage || program.featuredImage) ? (
                    <Image
                      src={activeImage || program.featuredImage}
                      alt={program.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : null}
                </div>

                {/* Right Side Gallery Column */}
                {galleryImages.length === 1 && (
                  <div
                    onClick={() => setSelectedImage(galleryImages[0])}
                    className="md:col-span-1 relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow border border-brand-sand bg-brand-burgundy-dark cursor-pointer group"
                  >
                    <Image
                      src={galleryImages[0]}
                      alt={`تفاصيل ${program.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {galleryImages.length >= 2 && (
                  <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-4">
                    {galleryImages.slice(0, 2).map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className="relative h-[155px] sm:h-[200px] rounded-2xl overflow-hidden shadow border border-brand-sand bg-brand-burgundy-dark cursor-pointer group"
                      >
                        <Image
                          src={img}
                          alt={`تفاصيل ${program.title}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Extra Gallery Thumbnails if more than 2 images are added in backend */}
              {galleryImages.length > 2 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {/* Thumbnail of featured image */}
                  {program.featuredImage && (
                    <div
                      onClick={() => setSelectedImage(program.featuredImage)}
                      className={`relative h-20 w-28 rounded-xl overflow-hidden shadow border-2 transition-all cursor-pointer ${
                        activeImage === program.featuredImage
                          ? 'border-brand-burgundy ring-2 ring-brand-burgundy/30'
                          : 'border-brand-sand hover:border-brand-gold opacity-80 hover:opacity-100'
                      }`}
                    >
                      <Image src={program.featuredImage} alt="الرئيسية" fill className="object-cover" />
                    </div>
                  )}

                  {/* Thumbnails of all backend gallery images */}
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative h-20 w-28 rounded-xl overflow-hidden shadow border-2 transition-all cursor-pointer ${
                        activeImage === img
                          ? 'border-brand-burgundy ring-2 ring-brand-burgundy/30'
                          : 'border-brand-sand hover:border-brand-gold opacity-80 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt={`صورة إضافية ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Two-Column Responsive Desktop Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Program Information Breakdown & Itinerary */}
            <div className="lg:col-span-8 space-y-10">
              {/* Program Overview Card - Only if summary, duration, or flight exist */}
              {hasOverview && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sand brand-card-shadow space-y-4">
                  {program.summary?.trim() && (
                    <>
                      <h2 className="text-xl font-bold text-brand-burgundy-dark border-r-4 border-brand-burgundy pr-3">
                        نبذة عن الرحلة
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {program.summary}
                      </p>
                    </>
                  )}

                  {(hasDuration || hasFlightInfo) && (
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
                        program.summary?.trim() ? 'pt-4 border-t border-gray-100' : ''
                      } text-xs sm:text-sm`}
                    >
                      {hasDuration && (
                        <div className="p-3.5 rounded-xl bg-brand-sand-light border border-brand-sand flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-brand-burgundy flex-shrink-0" />
                          <div>
                            <div className="text-gray-500 text-[11px]">مدة الرحلة</div>
                            <div className="font-bold text-brand-burgundy-dark">
                              {program.durationDays ? `${program.durationDays} يوماً` : ''}
                              {program.durationNights ? ` (${program.durationNights} ليلة)` : ''}
                            </div>
                          </div>
                        </div>
                      )}

                      {hasFlightInfo && (
                        <div className="p-3.5 rounded-xl bg-brand-sand-light border border-brand-sand flex items-center gap-3">
                          <Plane className="w-5 h-5 text-brand-olive flex-shrink-0" />
                          <div>
                            <div className="text-gray-500 text-[11px]">شركة و خطوط الطيران</div>
                            <div className="font-bold text-brand-burgundy-dark">
                              {program.airline?.trim() || ''}
                              {program.airline?.trim() && program.flightType?.trim() ? ' • ' : ''}
                              {program.flightType?.trim() || ''}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Accommodation Hotels - Only if hotels exist */}
              {hotels.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sand brand-card-shadow space-y-6">
                  <h2 className="text-xl font-bold text-brand-burgundy-dark border-r-4 border-brand-burgundy pr-3">
                    الإقامة الفندقية
                  </h2>
                  <div className={`grid grid-cols-1 ${hotels.length > 1 ? 'sm:grid-cols-2' : ''} gap-6`}>
                    {hotels.map((hotel, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-brand-sand-light border border-brand-sand space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-brand-burgundy bg-brand-burgundy/10 px-2.5 py-0.5 rounded-full">
                            {hotel.city}
                            {hotel.city === 'مكة المكرمة' && program.meccaNights
                              ? ` (${program.meccaNights} ليالٍ)`
                              : ''}
                            {hotel.city === 'المدينة المنورة' && program.medinaNights
                              ? ` (${program.medinaNights} ليالٍ)`
                              : ''}
                          </span>
                          {hotel.stars ? (
                            <div className="flex text-brand-gold">
                              {Array.from({ length: hotel.stars }).map((_, i) => (
                                <span key={i}>★</span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                        <h4 className="font-bold text-base text-brand-burgundy-dark">{hotel.name}</h4>
                        {hotel.distance?.trim() && (
                          <p className="text-xs text-gray-600 flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-brand-burgundy" />
                            <span>الموقع: {hotel.distance}</span>
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Included & Excluded Services - Only if at least one list has items */}
              {(includedServices.length > 0 || excludedServices.length > 0) && (
                <div
                  className={`grid grid-cols-1 ${
                    includedServices.length > 0 && excludedServices.length > 0 ? 'md:grid-cols-2' : ''
                  } gap-6`}
                >
                  {/* Included Services */}
                  {includedServices.length > 0 && (
                    <div className="bg-white p-6 rounded-2xl border border-brand-sand brand-card-shadow space-y-4">
                      <h3 className="text-lg font-bold text-brand-burgundy-dark flex items-center gap-2 border-r-4 border-emerald-500 pr-3">
                        <span>الخدمات المشمولة في البرنامج</span>
                      </h3>
                      <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                        {includedServices.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Excluded Services */}
                  {excludedServices.length > 0 && (
                    <div className="bg-white p-6 rounded-2xl border border-brand-sand brand-card-shadow space-y-4">
                      <h3 className="text-lg font-bold text-brand-burgundy-dark flex items-center gap-2 border-r-4 border-gray-400 pr-3">
                        <span>الخدمات غير المشمولة</span>
                      </h3>
                      <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                        {excludedServices.map((exc, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Daily Itinerary - Only if itinerary has days */}
              {itinerary.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sand brand-card-shadow space-y-6">
                  <h2 className="text-xl font-bold text-brand-burgundy-dark border-r-4 border-brand-burgundy pr-3">
                    جدول برنامج الرحلة اليومي
                  </h2>
                  <div className="space-y-6 relative before:content-[''] before:absolute before:top-3 before:bottom-3 before:right-[15px] before:w-0.5 before:bg-brand-sand">
                    {itinerary.map((day, idx) => (
                      <div key={day.dayNumber || idx} className="relative pr-9 space-y-1">
                        <div className="absolute top-1 right-0 w-8 h-8 rounded-full bg-brand-burgundy text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow">
                          {day.dayNumber || idx + 1}
                        </div>
                        {day.title?.trim() && (
                          <h4 className="font-bold text-base text-brand-burgundy-dark">{day.title}</h4>
                        )}
                        {day.description?.trim() && (
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{day.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Notes - Only if notes exist */}
              {importantNotes.length > 0 && (
                <div className="bg-brand-sand-light p-6 rounded-2xl border border-brand-sand space-y-3">
                  <h3 className="font-bold text-base text-brand-burgundy-dark flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-burgundy" />
                    <span>تعليمات وملاحظات مهمة</span>
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-600 leading-relaxed">
                    {importantNotes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Booking & Inquiry Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-6 rounded-2xl border-2 border-brand-burgundy/20 shadow-xl space-y-6">
                {(program.price?.trim() || program.priceNote?.trim()) && (
                  <div className="space-y-2 text-center pb-4 border-b border-gray-100">
                    {program.price?.trim() && (
                      <div className="inline-block px-8 py-3 rounded-2xl bg-amber-400 shadow-md border border-amber-300">
                        <span className="text-3xl font-black text-brand-burgundy-dark">{program.price} ج.م</span>
                      </div>
                    )}
                    {program.priceNote?.trim() && (
                      <p className="text-xs font-bold text-gray-600 pt-1">
                        {program.priceNote}
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-3 text-xs text-gray-700">
                  {program.title?.trim() && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">اسم البرنامج:</span>
                      <span className="font-bold text-brand-burgundy-dark">{program.title}</span>
                    </div>
                  )}

                  {Boolean(program.durationDays) && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">المدة الكلية:</span>
                      <span className="font-bold text-brand-burgundy-dark">{program.durationDays} يوماً</span>
                    </div>
                  )}

                  {hotels.map((h, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">
                        {h.city === 'المدينة المنورة'
                          ? 'فندق المدينة المنورة: '
                          : h.city === 'مكة المكرمة'
                          ? 'فندق مكة المكرمة:  '
                          : 'اسم الفندق:'}
                      </span>
                      <span className="font-bold text-brand-burgundy-dark truncate max-w-[160px]">
                        {h.name.split('(')[0]}
                      </span>
                    </div>
                  ))}

                  {program.airline?.trim() && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">خطوط الطيران:</span>
                      <span className="font-bold text-brand-burgundy-dark">{program.airline}</span>
                    </div>
                  )}

                  {program.flightType?.trim() && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">خطوط الطيران:</span>
                      <span className="font-bold text-brand-burgundy-dark">{program.flightType}</span>
                    </div>
                  )}
                </div>

                {/* Primary Actions */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(
                      `${program.title}${program.price ? ` (بسعر ${program.price} ج.م)` : ''}`
                    )}
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

          {/* Related Programs Section - Only if related programs exist */}
          {relatedPrograms.length > 0 && (
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
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
