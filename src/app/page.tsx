import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import UmrahSection from '@/components/sections/UmrahSection';
import HajjSection from '@/components/sections/HajjSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import { serverApi } from '@/lib/serverApi';

export default async function HomePage() {
  const allPrograms = await serverApi.getPrograms();
  const umrahPrograms = allPrograms.filter(p => p.category.startsWith('umrah'));
  const hajjPrograms = allPrograms.filter(p => p.category.startsWith('hajj'));
  return (
    <div className="min-h-screen flex flex-col bg-brand-sand-light overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <AboutSection />
        <UmrahSection initialPrograms={umrahPrograms} />
        <HajjSection initialPrograms={hajjPrograms} />
        <WhyChooseUs />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
