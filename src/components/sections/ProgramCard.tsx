import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Building2, Plane, ArrowLeft, MessageCircle } from 'lucide-react';
import { TravelProgram, getWhatsAppLink } from '@/data/programsData';
import Badge from '@/components/ui/Badge';

interface ProgramCardProps {
  program: TravelProgram;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-brand-sand brand-card-shadow brand-card-hover flex flex-col h-full group">
      {/* Card Image */}
      <div className="relative h-56 w-full overflow-hidden bg-brand-burgundy-dark">
        <Image
          src={program.featuredImage}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category Badge Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={program.category === 'vip' ? 'gold' : program.category === 'hajj' ? 'burgundy' : 'olive'}>
            {program.badgeText}
          </Badge>
        </div>

        {/* Duration Badge Bottom Right */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5 text-brand-gold" />
          <span>{program.durationDays} يوماً ({program.durationNights} ليلة)</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-brand-burgundy-dark group-hover:text-brand-burgundy transition-colors leading-snug">
            {program.title}
          </h3>

          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {program.subtitle}
          </p>

          {/* Key Quick Info */}
          <div className="pt-2 space-y-2 border-t border-gray-100 text-xs text-gray-700">
            {/* Hotels */}
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-burgundy flex-shrink-0" />
              <span className="truncate font-medium">
                مكة: {program.hotels[0]?.name.split('(')[0]}
              </span>
            </div>

            {/* Flight */}
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-brand-olive flex-shrink-0" />
              <span className="truncate font-medium">
                {program.airline} ({program.flightType})
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          {/* Details Page Link */}
          <Link
            href={`/programs/${program.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-burgundy hover:bg-brand-burgundy-light text-white text-xs font-bold transition-all shadow-sm group-hover:shadow"
          >
            <span>عرض التفاصيل</span>
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          </Link>

          {/* Quick WhatsApp Inquiry */}
          <a
            href={getWhatsAppLink(program.title)}
            target="_blank"
            rel="noopener noreferrer"
            title="استفسر عبر واتساب"
            className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 hover:text-white transition-all border border-emerald-500/30 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}