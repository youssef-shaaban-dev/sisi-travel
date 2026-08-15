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
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'text-right'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 ${
          dark
            ? 'bg-brand-gold/20 text-brand-sand border border-brand-gold/40'
            : 'bg-brand-burgundy/10 text-brand-burgundy border border-brand-burgundy/15'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
          {badge}
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-brand-burgundy-dark'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-4 flex items-center gap-1.5 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="w-8 h-0.5 bg-brand-burgundy/40 rounded-full" />
        <span className="w-2.5 h-2.5 rounded-full border-2 border-brand-gold bg-transparent" />
        <span className="w-8 h-0.5 bg-brand-burgundy/40 rounded-full" />
      </div>
    </div>
  );
}
