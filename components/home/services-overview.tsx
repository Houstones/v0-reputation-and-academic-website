import { Card } from '@/components/ui/card'
import { Star, ShoppingCart, Briefcase, TrendingUp, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
      description: 'Professional academic writing assistance for essays, research papers, and more. Expert support with quick turnaround times.',
      href: '/academic-writing',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Review Analytics Section with Image */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Review Management Excellence</h2>
              <p className="text-foreground/70 text-lg mb-6">
                Our proven strategies help businesses across all platforms gain more positive reviews, improve ratings, and attract quality customers. Watch your reputation grow with our data-driven approach.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/20">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Rapid Growth</h3>
                    <p className="text-foreground/70 text-sm">See measurable improvements in ratings within weeks</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/20">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Multi-Platform</h3>
                    <p className="text-foreground/70 text-sm">Manage reviews across Google, Amazon, Airbnb, and more</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-96">
              <Image
                src="/images/reviews-analytics.jpg"
                alt="Professional reviewing analytics dashboard with positive ratings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">All Our Services</h3>
            <p className="text-foreground/70 text-lg">
              Tailored solutions for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href}>
                  <Card className="h-full p-6 hover:shadow-lg transition-all hover:border-primary hover:-translate-y-1 cursor-pointer">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h4 className="font-bold text-lg mb-3">{service.title}</h4>
                    <p className="text-foreground/70 text-sm">{service.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Academic Writing Section with Image */}
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-96 order-2 lg:order-1">
              <Image
                src="/images/academic-support.jpg"
                alt="Academic professional working on research and writing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Academic Writing</h2>
              <p className="text-foreground/70 text-lg mb-6">
                Get expert help with your academic assignments. Our experienced writers deliver high-quality essays, research papers, data analysis, and more—all on time and tailored to your needs.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/20">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">$8 Per Page</h3>
                    <p className="text-foreground/70 text-sm">Affordable, transparent pricing with no hidden fees</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/20">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fast Delivery</h3>
                    <p className="text-foreground/70 text-sm">Quick turnaround times to meet your deadlines</p>
                  </div>
                </div>
              </div>
              <Link href="/academic-writing">
                <button className="mt-8 px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
