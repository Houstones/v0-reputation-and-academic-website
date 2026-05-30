import { MessageCircle, Instagram, CheckCircle } from 'lucide-react'

export default function ReputationManagementPage() {
  const features = [
    'Review monitoring across all platforms',
    'Reputation analysis and reporting',
    'Review generation strategies',
    'Online presence optimization',
    'Crisis management support',
    'Monthly performance tracking',
  ]

  const platforms = ['Google Reviews', 'Airbnb & Booking.com', 'Amazon & eBay', 'Glassdoor', 'TripAdvisor', 'Yelp']

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Reputation Management</h1>
          <p className="text-xl mb-8 max-w-2xl">Build and maintain your online reputation across all major platforms</p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://wa.me/18439657071" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary-foreground transition-colors">
              <MessageCircle className="inline mr-2" size={20} />
              WhatsApp
            </a>
            <a href="https://www.instagram.com/remote_minds?igsh=MWxpMWhhNmlxOHprbQ==" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors">
              <Instagram className="inline mr-2" size={20} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Platforms We Manage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform, i) => (
              <div key={i} className="bg-primary/10 text-primary px-6 py-4 rounded-lg font-semibold text-center">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
