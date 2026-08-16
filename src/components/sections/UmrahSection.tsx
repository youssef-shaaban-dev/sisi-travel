'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProgramCard from '@/components/sections/ProgramCard';
import { UMRAH_PROGRAMS, UMRAH_CATEGORIES } from '@/data/programsData';

export default function UmrahSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPrograms = UMRAH_PROGRAMS.filter((program) => {
    if (activeCategory === 'all') return true;
    return program.category === activeCategory;
  });

  return (
    <section id="umrah" className="py-20 bg-brand-sand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="رحلات العمرة"
          title="برامج العمرة المصممة بعناية"
          subtitle="تنوع كبير يغطي كافة رغبات المعتمرين مع الضمان الكامل لجودة الإقامة الفندقية وطيران الترانزيت أو المباشر."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {UMRAH_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-brand-burgundy text-white shadow-md border border-brand-burgundy'
                    : 'bg-white text-gray-700 hover:bg-brand-sand border border-brand-sand'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
