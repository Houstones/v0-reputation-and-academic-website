import { Card } from '@/components/ui/card'
import { ArrowRight, Star, ShoppingCart, Briefcase, TrendingUp, BookOpen, Brain, Zap, Code, BarChart3, Palette } from 'lucide-react'
import Link from 'next/link'

const ServicesOverview = () => {
  const services = [
    { icon: BookOpen, title: 'Academic & Research', href: '/services/academic-writing', description: 'Professional academic writing, research papers, and thesis support' },
    { icon: Star, title: 'Reputation Management', href: '/services/reputation-management', description: 'Online reputation tracking and strategic review management' },
    { icon: Brain, title: 'AI Data & Model Support', href: '/services/ai-data', description: 'Machine learning models, data processing, and AI solutions' },
    { icon: Code, title: 'Web Design & Development', href: '/services/web-development', description: 'Custom websites and responsive web applications' },
    { icon: TrendingUp, title: 'Digital Marketing', href: '/services/digital-marketing', description: 'SEO, social media marketing, and campaign management' },
    { icon: Palette, title: 'Branding & Creative', href: '/services/branding', description: 'Logo design, branding strategy, and creative services' },
    { icon: Zap, title: 'Business Process Outsourcing', href: '/services/bpo', description: 'Administrative support and business process optimization' },
    { icon: BookOpen, title: 'Content & Publishing', href: '/services/content', description: 'Content creation, copywriting, and publishing services' },
    { icon: BarChart3, title: 'Data & Analytics', href: '/services/analytics', description: 'Business intelligence, data analysis, and reporting' },
    { icon: Briefcase, title: 'Technology & Automation', href: '/services/technology', description: 'System automation, integration, and tech consulting' },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">All Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive digital solutions covering every aspect of your business growth and success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.href}>
                <Card className="h-full p-6 hover:shadow-lg transition-all hover:border-primary hover:-translate-y-1 cursor-pointer group">
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-grow">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
