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
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <Badge variant={program.category === 'vip' ? 'gold' : program.category === 'hajj' ? 'burgundy' : 'olive'} className="text-sm px-3.5 py-1.5 font-black shadow-md">
            {program.badgeText}
          </Badge>
        </div>

        {/* Duration Badge Bottom Right */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-sm font-black border border-brand-gold/40 shadow-md">
          <Calendar className="w-4 h-4 text-brand-gold" />
          <span>{program.durationDays} يوماً ({program.durationNights} ليلة)</span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          <Link href={`/programs/${program.slug}`} className="block">
            <h3 className="text-2xl font-black text-brand-burgundy-dark group-hover:text-brand-burgundy transition-colors leading-snug">
              {program.title}
            </h3>
          </Link>

          <p className="text-sm text-gray-700 line-clamp-2 leading-relaxed font-medium">
            {program.subtitle}
          </p>

          {/* Key Quick Info */}
          <div className="pt-3 space-y-2.5 border-t border-gray-100 text-sm text-gray-800">
            {/* Hotels */}
            <div className="flex items-center gap-2.5 font-bold">
              <Building2 className="w-4 h-4 text-brand-burgundy flex-shrink-0" />
              <span className="truncate">
                مكة: {program.hotels[0]?.name.split('(')[0]}
              </span>
            </div>

            {/* Flight */}
            <div className="flex items-center gap-2.5 font-bold">
              <Plane className="w-4 h-4 text-brand-olive flex-shrink-0" />
              <span className="truncate">
                {program.airline} ({program.flightType})
              </span>
            </div>

            {/* Price Badge Highlight */}
            <div className="flex items-center gap-2.5 font-extrabold text-brand-burgundy pt-1">
              <Tag className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="text-base text-brand-burgundy-dark">{program.price}</span>
            </div>
          </div>
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