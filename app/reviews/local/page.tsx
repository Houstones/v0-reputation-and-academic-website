import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function LocalReviewsPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Local SEO & Google Reviews</h1>
          <p className="text-lg text-primary-foreground/90">
            Dominate local search and attract more customers with optimized Google reviews
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Google Reviews Matter</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>78% of customers check Google reviews before visiting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Higher ratings rank better in local search results</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reviews build trust and credibility for your business</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Increased review volume leads to more customer inquiries</span>
                </li>
              </ul>
            </div>

            <Card className="p-8 bg-primary/5">
              <h3 className="font-bold text-xl mb-4">Our Process</h3>
              <ol className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Audit your current review profile and reputation</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>Develop a strategic review generation plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>Implement ethical strategies to gather reviews</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>Monitor and respond to all customer feedback</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">5.</span>
                  <span>Continuously optimize for better visibility</span>
                </li>
              </ol>
            </Card>
          </div>

          <div className="text-center">
            <Link href="https://wa.me/18439657071" target="_blank">
              <Button size="lg" className="mr-4">
                Get Free Audit
              </Button>
            </Link>
            <Link href="mailto:houston@remotemindssolutions.com">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
