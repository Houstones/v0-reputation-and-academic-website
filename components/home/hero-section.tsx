import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          Your Partner in Digital Transformation
        </h1>
        <p className="text-lg md:text-2xl mb-12 text-primary-foreground/95 text-balance max-w-3xl mx-auto font-light">
          From academic excellence to web development, AI solutions to business growth—Remote Minds Solutions delivers comprehensive digital services to help your business and career thrive.
        </p>
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
