'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink } from '@/data/programsData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '/#hero' },
    { label: 'من نحن', href: '/#about' },
    { label: 'رحلات العمرة', href: '/#umrah' },
    { label: 'برامج الحج', href: '/#hajj' },
    { label: 'لماذا سيسي ترافل', href: '/#why-us' },
    { label: 'اتصل بنا', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-burgundy-dark/95 backdrop-blur-md text-white py-3.5 shadow-xl border-b border-brand-gold/30'
          : 'bg-gradient-to-b from-brand-burgundy-dark/95 via-brand-burgundy-dark/70 to-transparent text-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the Right in RTL */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo/logo-main.svg"
                alt={COMPANY_DETAILS.name}
                fill
                className="object-contain filter drop-shadow brightness-0 invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-bold text-gray-100 hover:text-brand-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons on Left in RTL */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone1Raw}`}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="اتصل بنا"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-base font-extrabold shadow-lg hover:shadow-xl transition-all border border-emerald-400/40 group"
            >
              <MessageCircle className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
              <span>تواصل معنا</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 focus:outline-none"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-burgundy-dark border-b-2 border-brand-gold/40 px-5 pt-4 pb-8 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-lg font-bold text-gray-100 hover:bg-white/10 hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-extrabold shadow-lg"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>استفسر عبر الواتساب مباشرة</span>
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.phone1Raw}`}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-white/10 text-white text-base font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>اتصل على {COMPANY_DETAILS.phone1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
