'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/data/programsData';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر الواتساب"
      className="fixed bottom-7 left-7 z-50 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group border-2 border-white ring-4 ring-emerald-500/20"
    >
      <MessageCircle className="w-7 h-7 fill-current animate-pulse" />
      <span className="hidden sm:inline font-black text-base tracking-wide">
        استفسر عبر الواتساب مباشرة
      </span>
    </a>
  );
}
