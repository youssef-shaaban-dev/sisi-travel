'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
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
          ? 'bg-brand-burgundy-dark/95 backdrop-blur-md text-white py-2.5 shadow-lg border-b border-brand-gold/30'
          : 'bg-brand-burgundy-dark text-white py-3.5 shadow-md border-b border-brand-gold/25'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the Right in RTL */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo/logo-white.svg"
                alt={COMPANY_DETAILS.name}
                fill
                className="object-contain"
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
                className="text-base font-bold text-white hover:text-brand-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (WhatsApp ONLY) on Left in RTL */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-base font-extrabold shadow-md hover:shadow-lg transition-all border border-emerald-400/40 group"
            >
              <MessageCircle className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
              <span>تواصل معنا</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-white/10 text-white hover:bg-white/20 focus:outline-none border border-white/20 transition-all active:scale-95"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-brand-gold" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Smooth Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-brand-burgundy-dark/98 backdrop-blur-xl border-b-2 border-brand-gold/40 shadow-2xl"
          >
            <div className="px-6 pt-5 pb-8 space-y-5">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3.5 rounded-2xl text-lg font-black text-white hover:bg-white/10 hover:text-brand-gold transition-all border border-transparent hover:border-white/10"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* WhatsApp Action Only */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="pt-4 border-t border-white/15"
              >
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-black shadow-xl transition-all"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>استفسر عبر الواتساب فقط</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
