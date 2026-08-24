'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import HeroSection from '@/components/home/hero-section'
import ServicesOverview from '@/components/home/services-overview'
import TestimonialsSection from '@/components/home/testimonials-section'
import CTASection from '@/components/home/cta-section'
import { StructuredData, siteUrl } from '@/components/structured-data'

export default function HomePage() {
  const services = [
    ['Reputation Management', 'Protect and strengthen your digital reputation.', '/services/reputation-management'],
    ['AI Data Solutions', 'Turn business data into useful, actionable insight.', '/services/ai-data'],
    ['Data & Analytics', 'Make better decisions with clear reporting and analysis.', '/services/analytics'],
    ['Business Process Outsourcing', 'Extend your team with dependable operational support.', '/services/bpo'],
  ] as const
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': `${siteUrl}/#professional-service`, name: 'Remote Minds Solutions', url: siteUrl, logo: `${siteUrl}/logo.png`, hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Services', itemListElement: services.map(([name, description, path], position) => ({ '@type': 'Offer', position: position + 1, itemOffered: { '@type': 'Service', name, description, url: `${siteUrl}${path}` } })) } }
  return (
    <div className="w-full">
      <StructuredData data={serviceSchema} />
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
