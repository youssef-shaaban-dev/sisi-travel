'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Building2, Plane, ArrowLeft, Tag } from 'lucide-react';
import { TravelProgram } from '@/data/programsData';
import Badge from '@/components/ui/Badge';

interface ProgramCardProps {
  program: TravelProgram;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-3xl overflow-hidden border-2 border-brand-sand brand-card-shadow flex flex-col h-full group hover:border-brand-burgundy/40 hover:shadow-2xl transition-all duration-300"
    >
      {/* Clickable Card Image with Motion Zoom */}
      <Link href={`/programs/${program.slug}`} className="relative h-64 w-full overflow-hidden bg-brand-burgundy-dark block cursor-pointer">
        <motion.div className="w-full h-full relative" whileHover={{ scale: 1.07 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <Image
            src={program.featuredImage}
            alt={program.title}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

        {/* Category Badge Top Right */}
        {program.badgeText && (
          <div className="absolute top-4 right-4 z-10 pointer-events-none">
            <Badge
              variant={
                program.category === 'vip' || program.category === 'hajj-luxury'
                  ? 'gold'
                  : program.category === 'economic' || program.category === 'hajj-economic'
                  ? 'olive'
                  : 'burgundy'
              }
              className="text-sm px-3.5 py-1.5 font-black shadow-md"
            >
              {program.badgeText}
            </Badge>
          </div>
        )}

        {/* Duration Badge Bottom Right */}
        {(program.durationDays || program.durationNights) ? (
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-sm font-black border border-brand-gold/40 shadow-md">
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span>
              {program.durationDays ? `${program.durationDays} يوماً` : ''}
              {program.durationNights ? ` (${program.durationNights} ليلة)` : ''}
            </span>
          </div>
        ) : null}
      </Link>

      {/* Card Content */}
      <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          <Link href={`/programs/${program.slug}`} className="block">
            <h3 className="text-2xl font-black text-brand-burgundy-dark group-hover:text-brand-burgundy transition-colors leading-snug">
              {program.title}
            </h3>
          </Link>

          {program.subtitle && (
            <p className="text-sm text-gray-700 line-clamp-2 leading-relaxed font-medium">
              {program.subtitle}
            </p>
          )}

          {/* Key Quick Info */}
          {(Boolean(program.hotels?.some(h => h.name?.trim())) || Boolean(program.airline?.trim() || program.flightType?.trim()) || Boolean(program.price?.trim())) && (
            <div className="pt-3 space-y-2.5 border-t border-gray-100 text-sm text-gray-800">
              {/* Hotels */}
              {program.hotels && program.hotels.some(h => h.name?.trim()) && (
                <div className="flex items-start gap-2.5 font-bold">
                  <Building2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                  <span className="leading-snug break-words">
                    {`${program.hotels[0].city === 'المدينة المنورة' ? 'المدينة' : 'مكة'}: ${program.hotels[0].name.split('(')[0]}`}
                  </span>
                </div>
              )}

              {/* Flight */}
              {(program.airline?.trim() || program.flightType?.trim()) && (
                <div className="flex items-start gap-2.5 font-bold">
                  <Plane className="w-4 h-4 text-brand-olive shrink-0 mt-0.5" />
                  <span className="leading-snug break-words">
                    {program.airline?.trim()
                      ? `${program.airline}${program.flightType?.trim() ? ` (${program.flightType})` : ''}`
                      : program.flightType}
                  </span>
                </div>
              )}

              {/* Price Badge Highlight */}
              {program.price && (
                <div className="flex items-center gap-2.5 font-extrabold text-brand-burgundy pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-400 text-brand-burgundy-dark font-black text-base shadow-md border border-amber-300/80 scale-105 transition-transform">
                    <Tag className="w-4 h-4 text-brand-burgundy-dark" />
                    <span>{program.price} ج.م</span>
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
          {/* Details Page Link */}
          <Link
            href={`/programs/${program.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-brand-burgundy hover:bg-brand-burgundy-light text-white text-sm font-black transition-all shadow-md group-hover:shadow-xl"
          >
            <span>تفاصيل البرنامج</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}