import { Card } from '@/components/ui/card'
import { Star, ShoppingCart, Briefcase, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const ServicesOverview = () => {
  const services = [
    {
      icon: Star,
      title: 'Local SEO & Google Reviews',
      description: 'Boost your local visibility and attract more customers through optimized Google reviews and local SEO strategies.',
      href: '/reviews/local',
    },
    {
      icon: TrendingUp,
      title: 'Platform Reviews (Airbnb & Booking)',
      description: 'Optimize your ratings on travel platforms to increase bookings and attract quality guests.',
      href: '/reviews/platform',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Review Growth',
      description: 'Build trust and boost sales on Amazon, eBay, and other e-commerce platforms with authentic reviews.',
      href: '/reviews/ecommerce',
    },
    {
      icon: Briefcase,
      title: 'Employer Branding (Glassdoor)',
      description: 'Strengthen your employer brand and attract top talent through positive Glassdoor reviews.',
      href: '/reviews/employer',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-foreground/70 text-lg">
            Data-driven strategies for every platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.href}>
                <Card className="h-full p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-primary">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                  <p className="text-foreground/70 text-sm">{service.description}</p>
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
