import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          Turn Your Online Reputation Into Real Business Growth
        </h1>
        <p className="text-lg md:text-2xl mb-12 text-primary-foreground/95 text-balance max-w-3xl mx-auto font-light">
          At Remote Minds Solutions, we help businesses grow through review optimization, reputation management, and strategic visibility. Plus, get expert academic writing support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reviews/local">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 py-6 text-base">
              Grow Your Reviews
            </Button>
          </Link>
          <Link href="/academic-writing">
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base bg-accent hover:bg-accent/90 text-accent-foreground transition-colors duration-200">
              Academic Writing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
