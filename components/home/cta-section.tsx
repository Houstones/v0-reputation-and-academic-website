import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow?</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 text-balance">
          Get a free review audit and discover your growth potential. Whether you want to boost your reviews or get academic writing support, we&apos;re here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://wa.me/18439657071" target="_blank">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Chat on WhatsApp
            </Button>
          </Link>
          <Link href="mailto:houston@remotemindssolutions.com">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              Email Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
