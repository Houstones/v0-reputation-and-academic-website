import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function EmployerBrandingPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Employer Branding (Glassdoor)</h1>
          <p className="text-lg text-primary-foreground/90">
            Attract top talent and strengthen your employer brand
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Employer Branding Matters</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>76% of job seekers check company reviews on Glassdoor</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>High ratings attract higher quality candidates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Strong employer brand reduces recruitment costs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Improves employee retention and pride</span>
                </li>
              </ul>
            </div>

            <Card className="p-8 bg-primary/5">
              <h3 className="font-bold text-xl mb-4">Our Glassdoor Strategy</h3>
              <ol className="space-y-3 text-foreground/80 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-primary">1.</span>
                  <span>Complete company profile optimization</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">2.</span>
                  <span>Encourage current employee reviews</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">3.</span>
                  <span>Professional management response</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">4.</span>
                  <span>Address negative feedback constructively</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">5.</span>
                  <span>Showcase company culture and values</span>
                </li>
              </ol>
            </Card>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Build Your Employer Brand</h2>
            <p className="text-foreground/80 mb-6">
              A strong Glassdoor presence is crucial for attracting and retaining top talent. We help you build and maintain an authentic employer brand that reflects your company culture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-4">
                <h4 className="font-semibold mb-2">Profile Optimization</h4>
                <p className="text-foreground/70 text-sm">
                  Complete company information, photos, culture, and mission statement
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold mb-2">Review Growth</h4>
                <p className="text-foreground/70 text-sm">
                  Ethical strategies to gather genuine employee and candidate reviews
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold mb-2">Reputation Management</h4>
                <p className="text-foreground/70 text-sm">
                  Professional responses and continuous improvement initiatives
                </p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Link href="https://wa.me/18439657071" target="_blank">
              <Button size="lg" className="mr-4">
                Start Building Brand
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
