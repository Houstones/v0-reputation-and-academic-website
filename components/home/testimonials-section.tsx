import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      business: 'Restaurant Owner',
      rating: 5,
      text: 'Our rating improved from 3.4 to 4.6 in just 3 months! We started getting significantly more customers weekly.',
    },
    {
      name: 'Mike Johnson',
      business: 'E-commerce Seller',
      rating: 5,
      text: 'The strategies were incredibly effective. Our Amazon sales increased by 40% after optimizing our reviews.',
    },
    {
      name: 'Jessica Lee',
      business: 'Airbnb Host',
      rating: 5,
      text: 'Professional service with real results. My booking rate doubled and guests leave amazing reviews now.',
    },
    {
      name: 'David Park',
      business: 'Tech Company CEO',
      rating: 5,
      text: 'Their Glassdoor optimization helped us attract top talent. Our employer rating jumped to 4.7 stars.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-3">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
              </div>
              <p className="text-foreground/80 text-sm mb-4 italic">
                {testimonial.text}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-foreground/60 text-xs">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
