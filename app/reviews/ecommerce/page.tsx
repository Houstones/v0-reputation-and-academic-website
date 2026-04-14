import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function EcommerceReviewsPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">E-commerce Reviews (Amazon & eBay)</h1>
          <p className="text-lg text-primary-foreground/90">
            Boost sales and visibility with strategic e-commerce review growth
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why E-commerce Reviews Drive Sales</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>95% of buyers consider reviews before purchasing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>4+ star products sell 60% more frequently</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reviews boost search visibility and bestseller status</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Customer trust leads to repeat purchases</span>
                </li>
              </ul>
            </div>

            <Card className="p-8 bg-primary/5">
              <h3 className="font-bold text-xl mb-4">We Specialize In</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Amazon seller account optimization
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> eBay store review growth
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Shopify and WooCommerce reviews
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Multi-channel review management
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Competitive rating analysis
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Our E-commerce Approach</h2>
            <p className="text-foreground/80 mb-6">
              We use ethical, platform-compliant strategies to generate authentic reviews while maintaining seller integrity and account health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Growth Strategies</h4>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li>• Strategic promotion timing</li>
                  <li>• Incentive program design</li>
                  <li>• Customer followup automation</li>
                  <li>• A/B tested messaging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Reputation Management</h4>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li>• Negative review response</li>
                  <li>• Quality monitoring</li>
                  <li>• Seller rating protection</li>
                  <li>• Account compliance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="https://wa.me/18439657071" target="_blank">
              <Button size="lg" className="mr-4">
                Boost Your Sales
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
