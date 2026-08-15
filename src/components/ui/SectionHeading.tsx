import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 md:mb-20 ${centered ? 'text-center max-w-4xl mx-auto' : 'text-right'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-black tracking-wide uppercase mb-5 shadow-sm ${
          dark
            ? 'bg-brand-gold/20 text-brand-sand border border-brand-gold/40'
            : 'bg-brand-burgundy/10 text-brand-burgundy border border-brand-burgundy/20'
        }`}>
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-brand-burgundy-dark'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-5 text-lg sm:text-xl font-medium leading-relaxed ${
          dark ? 'text-gray-200' : 'text-gray-700'
        }`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-5 flex items-center gap-2 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="w-12 h-1 bg-brand-burgundy/40 rounded-full" />
        <span className="w-3 h-3 rounded-full border-2 border-brand-gold bg-brand-gold/20" />
        <span className="w-12 h-1 bg-brand-burgundy/40 rounded-full" />
      </div>
    </div>
  );
}
