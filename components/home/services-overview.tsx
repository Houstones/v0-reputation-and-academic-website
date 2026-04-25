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
    {
      icon: BookOpen,
      title: 'Academic Writing Support',
      description: 'Professional academic writing assistance for essays, research papers, and more. $8 per page.',
      href: '/academic-writing',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Data-driven strategies tailored to grow your business across all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.href} className="group">
                <Card className="h-full p-6 hover:shadow-lg transition-all hover:border-primary hover:-translate-y-1 cursor-pointer">
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-3 line-clamp-2">{service.title}</h3>
                  <p className="text-foreground/70 text-sm line-clamp-3">{service.description}</p>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Academic Writing Highlight */}
        <div className="mt-20 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Professional Academic Writing</h3>
              <p className="text-foreground/70 mb-6">
                Get expert help with essays, research papers, data analysis, and more. Our writers deliver high-quality work tailored to your requirements and deadlines.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">✓</span>
                  </div>
                  <span className="text-foreground/80">$8 per page - Transparent pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">✓</span>
                  </div>
                  <span className="text-foreground/80">Fast turnaround times</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">✓</span>
                  </div>
                  <span className="text-foreground/80">All formatting styles supported</span>
                </div>
              </div>
              <Link href="/academic-writing">
                <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors">
                  Submit Your Request
                </button>
              </Link>
            </div>
            <div className="bg-primary/10 rounded-xl p-8 text-center">
              <BookOpen className="w-20 h-20 text-primary mx-auto mb-4" />
              <p className="text-foreground/70 text-sm">
                Fill out our simple form and submit directly via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
