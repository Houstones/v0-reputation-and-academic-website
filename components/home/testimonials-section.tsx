import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Alex K.',
      service: 'Academic Writing',
      rating: 5,
      text: 'Exceptional quality! My research paper was delivered on time and earned an A+. Highly professional writers.',
    },
    {
      name: 'Sarah M.',
      service: 'Reputation Management',
      rating: 5,
      text: 'Our rating improved from 3.4 to 4.6 in just 3 months! Real business results with their strategies.',
    },
    {
      name: 'Mike Johnson',
      service: 'AI Data Solutions',
      rating: 5,
      text: 'Their ML models transformed our data into actionable insights. ROI increased by 35% in the first quarter.',
    },
    {
      name: 'Jessica Lee',
      service: 'Web Development',
      rating: 5,
      text: 'Beautiful, fast website that converts. Our online sales increased 60% after the redesign.',
    },
    {
      name: 'David Park',
      service: 'Digital Marketing',
      rating: 5,
      text: 'Excellent SEO and social strategy. Our organic traffic tripled and leads are flowing in consistently.',
    },
    {
      name: 'Emma Chen',
      service: 'Branding & Creative',
      rating: 5,
      text: 'Professional logo and brand identity that perfectly captures our vision. Worth every penny.',
    },
    {
      name: 'James Wilson',
      service: 'Business Process Outsourcing',
      rating: 5,
      text: 'Reliable and efficient support team. They handle customer service perfectly, freeing up our time.',
    },
    {
      name: 'Rachel Thompson',
      service: 'Content & Publishing',
      rating: 5,
      text: 'Compelling content that resonates with our audience. Blog traffic increased 200% in two months.',
    },
    {
      name: 'Carlos Rodriguez',
      service: 'Data & Analytics',
      rating: 5,
      text: 'Their dashboards give us real-time insights. We make better decisions faster with their analytics.',
    },
    {
      name: 'Nina Patel',
      service: 'Technology & Automation',
      rating: 5,
      text: 'Seamless system integration and automation. Saved us thousands monthly in operational costs.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-foreground/70 text-lg">
            Real results from real businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-3">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
              </div>
              <p className="text-accent text-xs font-semibold mb-2">{testimonial.service}</p>
              <p className="text-foreground/80 text-sm mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
