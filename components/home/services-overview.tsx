'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, BarChart3, BookOpen, BrainCircuit, Briefcase, Code2, Megaphone, Palette, Star, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  { title: 'Academic & Research Support', description: 'Clear, rigorous support for essays, research, analysis, and academic projects.', href: '/services/academic-writing', icon: BookOpen, image: '/tutor-1.jpg' },
  { title: 'Review & Reputation Management', description: 'Build trust, strengthen visibility, and turn customer feedback into growth.', href: '/services/reputation-management', icon: Star, image: '/service-digital-marketing.png' },
  { title: 'AI Data & Model Support', description: 'High-quality data preparation, annotation, evaluation, and model support.', href: '/services/ai-data', icon: BrainCircuit, image: '/service-ai-data.png' },
  { title: 'Web Design & Development', description: 'Fast, accessible digital experiences designed around your goals.', href: '/services/web-development', icon: Code2, image: '/service-data-analytics.png' },
  { title: 'Digital Marketing', description: 'Strategic campaigns that connect your brand with the right audience.', href: '/services/digital-marketing', icon: Megaphone, image: '/service-digital-marketing.png' },
  { title: 'Branding & Creative', description: 'Distinctive identities and creative systems that make your business memorable.', href: '/services/branding', icon: Palette, image: '/tutor-2.jpg' },
  { title: 'Business Process Outsourcing', description: 'Reliable operational support that gives your team room to focus.', href: '/services/bpo', icon: Briefcase, image: '/tutor-3.jpg' },
  { title: 'Content & Publishing', description: 'Thoughtful writing and publishing support for every stage of your story.', href: '/services/content', icon: BookOpen, image: '/tutor-4.jpg' },
  { title: 'Data & Analytics', description: 'Turn complex information into practical decisions and measurable outcomes.', href: '/services/analytics', icon: BarChart3, image: '/service-data-analytics.png' },
  { title: 'Technology & Automation', description: 'Connected systems and smarter workflows that reduce busywork.', href: '/services/technology', icon: Zap, image: '/service-ai-data.png' },
]

export default function ServicesOverview() {
  return (
    <section className="bg-muted/30 py-20 md:py-28" aria-labelledby="services-heading">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">What we do</p>
            <h2 id="services-heading" className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">Solutions built for momentum</h2>
            <p className="mt-4 text-pretty text-lg leading-7 text-muted-foreground">From research and reputation to AI, marketing, and analytics, our specialists help you move from ideas to outcomes.</p>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">Explore all services <ArrowUpRight data-icon="inline-end" /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.href} href={service.href} className="group">
                <Card className="h-full overflow-hidden border-border/70 bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl">
                  <div className="relative aspect-[16/9] overflow-hidden bg-primary/10">
                    <Image src={service.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-xl bg-background/90 text-primary shadow-lg"><Icon /></div>
                  </div>
                  <CardContent className="flex flex-col gap-3 p-6">
                    <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                    <p className="leading-6 text-muted-foreground">{service.description}</p>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">Learn more <ArrowUpRight data-icon="inline-end" /></span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
