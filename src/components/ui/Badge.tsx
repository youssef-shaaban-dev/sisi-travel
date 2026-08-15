import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'burgundy' | 'olive' | 'gold' | 'sand';
  className?: string;
}

export default function Badge({ children, variant = 'burgundy', className = '' }: BadgeProps) {
  const variantStyles = {
    burgundy: 'bg-[#531F23]/10 text-[#531F23] border-[#531F23]/20',
    olive: 'bg-[#444C39]/10 text-[#444C39] border-[#444C39]/20',
    gold: 'bg-[#C5A059]/15 text-[#9E7B34] border-[#C5A059]/30',
    sand: 'bg-[#E0D9C9] text-[#281015] border-[#D4C5B3]',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
