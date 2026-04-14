import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function PlatformReviewsPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Platform Reviews (Airbnb & Booking)</h1>
          <p className="text-lg text-primary-foreground/90">
            Maximize bookings and build trust on travel platforms
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-primary/5">
              <h3 className="font-bold text-xl mb-4">Airbnb Optimization</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Improve your star rating and visibility
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Increase booking requests
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Build superhost status faster
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Attract quality guests
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-primary/5">
              <h3 className="font-bold text-xl mb-4">Booking.com Optimization</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Enhance your property ranking
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Get more prominent visibility
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Increase direct bookings
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Achieve guest-favorite status
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Travel Platform Strategy</h2>
            <p className="text-foreground/80 mb-6">
              We understand what travel platforms value: authentic reviews, guest satisfaction, and consistent quality. Our strategies focus on ethical review generation and response optimization to boost your rankings and bookings.
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Strategic review request timing and personalization</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Optimize your property descriptions for better conversions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Professional response management to every review</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Competitive analysis and benchmark tracking</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="https://wa.me/18439657071" target="_blank">
              <Button size="lg" className="mr-4">
                Get Free Consultation
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
