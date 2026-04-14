import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Turn Your Online Reputation Into Real Business Growth
        </h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 text-balance">
          At Remote Minds Solutions, we help businesses grow through review optimization, reputation management, and strategic visibility. Plus, get expert academic writing support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reviews/local">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Grow Your Reviews
            </Button>
          </Link>
          <Link href="/academic-writing">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              Academic Writing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
