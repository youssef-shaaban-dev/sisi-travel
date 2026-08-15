import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import UmrahSection from '@/components/sections/UmrahSection';
import HajjSection from '@/components/sections/HajjSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import HowItWorks from '@/components/sections/HowItWorks';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F3]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <UmrahSection />
        <HajjSection />
        <WhyChooseUs />
        <HowItWorks />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
