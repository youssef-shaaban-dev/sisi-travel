import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'burgundy' | 'olive' | 'gold' | 'sand';
  className?: string;
}

export default function Badge({ children, variant = 'burgundy', className = '' }: BadgeProps) {
  const variantStyles = {
    burgundy: 'bg-brand-burgundy/10 text-brand-burgundy border-brand-burgundy/20',
    olive: 'bg-brand-olive/10 text-brand-olive border-brand-olive/20',
    gold: 'bg-brand-gold/15 text-amber-700 border-brand-gold/30',
    sand: 'bg-brand-sand text-brand-burgundy-dark border-amber-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
