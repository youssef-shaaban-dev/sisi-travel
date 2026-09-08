'use client';

import React, { useState, useMemo } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProgramCard from '@/components/sections/ProgramCard';
import { TravelProgram } from '@/data/programsData';

interface Props {
  initialPrograms: TravelProgram[];
}

export default function HajjSection({ initialPrograms }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract unique categories dynamically from the programs
  const dynamicCategories = useMemo(() => {
    const cats = new Set<string>();
    initialPrograms.forEach(p => {
      if (p.categoryLabel) {
        cats.add(p.categoryLabel);
      }
    });
    
    const catArray = Array.from(cats).map((label, idx) => ({
      id: `cat-${idx}`,
      label: label
    }));
    
    return [{ id: 'all', label: 'الكل' }, ...catArray];
  }, [initialPrograms]);

  const filteredPrograms = initialPrograms.filter((program) => {
    if (activeCategory === 'all') return true;
    const catObj = dynamicCategories.find(c => c.id === activeCategory);
    return program.categoryLabel === catObj?.label;
  });

  return (
    <section id="hajj" className="py-24 bg-brand-sand-light text-brand-burgundy-dark relative overflow-hidden border-t border-brand-sand">
      {/* Subtle Background Pattern Accent */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(var(--color-brand-gold)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="فريضة الحج"
          title="برامج الحج لعام 2027 - تنظيماً يليق بعظمة الفريضة"
          subtitle="نضع بين أيديكم 40 عاماً من الخبرة في إدارة موسم الحج، مع تنوع متكامل بين الحج الفاخر والحج الاقتصادي والحج البري."
        />

        {/* Hajj Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {dynamicCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-black transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-brand-burgundy text-white shadow-lg border border-brand-burgundy scale-105'
                    : 'bg-white text-gray-700 hover:bg-brand-sand border border-brand-sand shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Filtered Hajj Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
