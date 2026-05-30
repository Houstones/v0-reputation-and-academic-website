'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, TrendingUp, Zap, Globe, Share2, Palette, Headphones, BarChart3, Settings } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ServicesPage() {
  const services = [
    {
      title: 'Academic Writing',
      description: 'Professional essay, research paper, and thesis writing support for students worldwide.',
      icon: BookOpen,
      href: '/services/academic-writing',
      color: 'from-blue-500 to-blue-600',
      benefits: ['Expert Writers', 'Fast Turnaround', '$8/page'],
    },
    {
      title: 'Reputation Management',
      description: 'Boost your online presence and rating across Google, Airbnb, Amazon, and Glassdoor.',
      icon: TrendingUp,
      href: '/services/reputation-management',
      color: 'from-emerald-500 to-emerald-600',
      benefits: ['Real Reviews', 'Rating Boost', 'Proven Results'],
    },
    {
      title: 'AI Data & Model Support',
      description: 'Machine learning, data science, and AI model development for your business.',
      icon: Zap,
      href: '/services/ai-data',
      color: 'from-purple-500 to-purple-600',
      benefits: ['ML Experts', 'Data Solutions', 'AI Integration'],
    },
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: Globe,
      href: '/services/web-development',
      color: 'from-orange-500 to-orange-600',
      benefits: ['Responsive Design', 'Fast Performance', 'SEO Optimized'],
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, social media, content marketing, and paid advertising strategies.',
      icon: Share2,
      href: '/services/digital-marketing',
      color: 'from-pink-500 to-pink-600',
      benefits: ['Organic Growth', 'Social Strategy', 'Campaign Management'],
    },
    {
      title: 'Branding & Creative',
      description: 'Logo design, brand identity, and creative content creation.',
      icon: Palette,
      href: '/services/branding',
      color: 'from-red-500 to-red-600',
      benefits: ['Professional Design', 'Brand Strategy', 'Creative Assets'],
    },
    {
      title: 'Business Outsourcing',
      description: 'Customer service, data entry, and administrative support outsourcing.',
      icon: Headphones,
      href: '/services/bpo',
      color: 'from-indigo-500 to-indigo-600',
      benefits: ['24/7 Support', 'Cost Effective', 'Scalable Team'],
    },
    {
      title: 'Content & Publishing',
      description: 'Blog writing, article creation, and content publishing services.',
      icon: BookOpen,
      href: '/services/content',
      color: 'from-cyan-500 to-cyan-600',
      benefits: ['Quality Content', 'SEO Writing', 'Consistent Publishing'],
    },
    {
      title: 'Data & Analytics',
      description: 'Business intelligence dashboards, data analysis, and reporting.',
      icon: BarChart3,
      href: '/services/analytics',
      color: 'from-green-500 to-green-600',
      benefits: ['Real-Time Insights', 'Data Visualization', 'Strategic Reports'],
    },
    {
      title: 'Technology & Automation',
      description: 'Business process automation, system integration, and tech solutions.',
      icon: Settings,
      href: '/services/technology',
      color: 'from-teal-500 to-teal-600',
      benefits: ['Process Automation', 'System Integration', 'Cost Savings'],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Our Services</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs. Explore our complete range of services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href}>
                  <Card className="h-full p-6 hover:shadow-xl transition-all hover:border-primary hover:-translate-y-2 cursor-pointer bg-card">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-sm text-foreground/70 mb-4">{service.description}</p>
                    <div className="space-y-1 mb-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-accent font-semibold">
                          <ArrowRight size={12} />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all">
                      Learn More
                    </Button>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact our team to discuss your project and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/18439657071" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Chat on WhatsApp
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
