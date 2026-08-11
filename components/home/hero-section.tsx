import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-10">
        <Image src="/office-team-hero.png" alt="A collaborative Remote Minds Solutions office team" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
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

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
        <div className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">Remote Minds Solutions</div>
      </div>
    </section>
  )
}

export default HeroSection
