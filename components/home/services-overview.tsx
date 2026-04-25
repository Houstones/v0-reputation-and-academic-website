import { Card } from '@/components/ui/card'
import { Star, ShoppingCart, Briefcase, TrendingUp, BookOpen } from 'lucide-react'
import Link from 'next/link'

const ServicesOverview = () => {
  const services = [
    {
      icon: Star,
      title: 'Local SEO & Google Reviews',
      description: 'Boost your local visibility and attract more customers through optimized Google reviews and local SEO strategies.',
      href: '/reviews/local',
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Platform Reviews (Airbnb & Booking)',
      description: 'Optimize your ratings on travel platforms to increase bookings and attract quality guests.',
      href: '/reviews/platform',
      color: 'from-amber-50 to-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Review Growth',
      description: 'Build trust and boost sales on Amazon, eBay, and other e-commerce platforms with authentic reviews.',
      href: '/reviews/ecommerce',
      color: 'from-orange-50 to-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      icon: Briefcase,
      title: 'Employer Branding (Glassdoor)',
      description: 'Strengthen your employer brand and attract top talent through positive Glassdoor reviews.',
      href: '/reviews/employer',
      color: 'from-indigo-50 to-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      icon: BookOpen,
      title: 'Academic Writing Support',
      description: 'Professional academic writing assistance for essays, research papers, and more. Expert support with quick turnaround times.',
      href: '/academic-writing',
      color: 'from-emerald-50 to-emerald-100',
      iconColor: 'text-emerald-600',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-background via-blue-50/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions to grow your reputation and business across all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.href}>
                <Card className={`h-full p-8 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-primary/30 bg-gradient-to-br ${service.color}`}>
                  <div className={`w-14 h-14 rounded-lg bg-white/80 flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-primary">{service.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
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
