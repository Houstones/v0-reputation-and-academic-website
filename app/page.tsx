'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import HeroSection from '@/components/home/hero-section'
import ServicesOverview from '@/components/home/services-overview'
import TestimonialsSection from '@/components/home/testimonials-section'
import CTASection from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
