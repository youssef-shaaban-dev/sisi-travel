import React from 'react';
import { notFound } from 'next/navigation';
import { COMPANY_DETAILS } from '@/data/programsData';
import { serverApi } from '@/lib/serverApi';
import ProgramDetailsClient from './ProgramDetailsClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const programs = await serverApi.getPrograms();
  
  if (!programs || programs.length === 0) {
    return [{ slug: 'no-programs-yet' }];
  }

  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const program = await serverApi.getProgramBySlug(resolvedParams.slug);

  if (!program) {
    return { title: 'البرنامج غير موجود | سيسي ترافل' };
  }

  return {
    title: program.title,
    description: program.summary,
    alternates: {
      canonical: `/programs/${program.slug}/`,
    },
    openGraph: {
      title: `${program.title} | سيسى ترافل شركة سياحة مصرية`,
      description: program.summary,
      url: `/programs/${program.slug}/`,
      images: [
        {
          url: program.featuredImage,
          alt: program.title,
        },
      ],
    },
  };
}

export default async function ProgramDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const program = await serverApi.getProgramBySlug(resolvedParams.slug);

  if (!program) {
    notFound();
  }

  // Related programs
  const allPrograms = await serverApi.getPrograms();
  const relatedPrograms = (allPrograms || []).filter((p) => p.slug !== program.slug).slice(0, 3);

  const isHajj = (program.category || '').startsWith('hajj');

  const tripJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: program.title,
    description: program.summary,
    image: program.featuredImage?.startsWith('http')
      ? program.featuredImage
      : `https://sisi.travel${program.featuredImage || ''}`,
    touristType: isHajj ? 'حجاج بيت الله الحرام' : 'معتمري بيت الله الحرام',
    provider: {
      '@type': 'TravelAgency',
      name: 'سيسى ترافل',
      url: 'https://sisi.travel',
      telephone: COMPANY_DETAILS.phone1Raw,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EGP',
      price: program.price?.replace(/[^\d]/g, '') || undefined,
      availability: 'https://schema.org/InStock',
      url: `https://sisi.travel/programs/${program.slug}/`,
    },
    itinerary: (program.itinerary || []).map((day) => ({
      '@type': 'Day',
      name: day.title,
      description: day.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }}
      />
      <ProgramDetailsClient
        initialProgram={program}
        initialRelatedPrograms={relatedPrograms}
      />
    </>
  );
}
