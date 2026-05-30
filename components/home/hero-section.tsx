import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          Smart Solutions for a Digital World
        </h1>
        <p className="text-lg md:text-2xl mb-12 text-primary-foreground/95 text-balance max-w-3xl mx-auto font-light">
          Helping businesses, researchers, and entrepreneurs achieve more through technology, talent, and innovation.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 py-8 border-y border-primary-foreground/20">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-primary-foreground/80">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Global</div>
            <div className="text-primary-foreground/80">Client Network</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Expert</div>
            <div className="text-primary-foreground/80">AI & Digital Specialists</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-primary-foreground/80">Client Satisfaction</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 py-6 text-base">
              Explore All Services
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base bg-accent hover:bg-accent/90 text-accent-foreground transition-colors duration-200">
              Learn About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
