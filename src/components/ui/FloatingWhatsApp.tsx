'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/data/programsData';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 200px
      setVisible(window.scrollY > 200);

      // Hide when footer comes into view
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsNearFooter(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر الواتساب"
      className={`fixed bottom-7 left-7 z-40 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-4 rounded-full shadow-2xl transition-all duration-500 transform group border-2 border-white ring-4 ring-emerald-500/20 ${
        visible && !isNearFooter ? 'translate-y-0 opacity-100 hover:scale-105' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <MessageCircle className="w-7 h-7 fill-current animate-pulse" />
      <span className="hidden sm:inline font-black text-base tracking-wide">
        استفسر عبر الواتساب
      </span>
    </a>
  );
}
