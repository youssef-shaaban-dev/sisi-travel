'use client';

import { useState, useMemo } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProgramCard from '@/components/sections/ProgramCard';
import { TravelProgram } from '@/data/programsData';

interface Props {
  initialPrograms: TravelProgram[];
}

export default function UmrahSection({ initialPrograms }: Props) {
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
    <section id="umrah" className="py-20 bg-brand-sand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="رحلات العمرة"
          title="برامج العمرة المصممة بعناية"
          subtitle="تنوع كبير يغطي كافة رغبات المعتمرين مع الضمان الكامل لجودة الإقامة الفندقية وطيران الترانزيت أو المباشر."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {dynamicCategories.map((cat) => {
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
