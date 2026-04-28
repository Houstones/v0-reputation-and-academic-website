'use client'

import { MessageCircle, Instagram, Star } from 'lucide-react'

export default function AcademicWritingPage() {
  const tutors = [
    { name: 'Dr. Sarah Mitchell', qualification: 'PhD in English Literature', specialty: 'Essays & Research Papers' },
    { name: 'Prof. James Chen', qualification: 'Master\'s in Data Science', specialty: 'Data Analysis & Math' },
    { name: 'Dr. Emma Rodriguez', qualification: 'PhD in Business Administration', specialty: 'Business & Economics Papers' },
    { name: 'Prof. Michael Brown', qualification: 'Master\'s in Computer Science', specialty: 'Technical Writing & Reports' },
  ]

  const studentReviews = [
    { name: 'Alex K.', rating: 5, comment: 'Outstanding quality! My essay was delivered on time and exceeded expectations.' },
    { name: 'Jordan P.', rating: 5, comment: 'Professional writers who really understand academic standards. Highly recommended!' },
    { name: 'Taylor M.', rating: 5, comment: 'Amazing turnaround time and excellent communication throughout the process.' },
    { name: 'Casey S.', rating: 5, comment: 'The data analysis was thorough and well-structured. Perfect for my thesis!' },
    { name: 'Morgan L.', rating: 5, comment: 'Best investment in my studies. Got an A on my research paper!' },
    { name: 'Riley T.', rating: 5, comment: 'Very affordable at $8/page and the quality is premium. Will order again!' },
  ]

  const subjects = [
    'Essay', 'Term Paper', 'Research Paper', 'Data Analysis', 'Mathematics',
    'Business', 'Economics', 'Literature', 'History', 'Science',
    'Technology', 'Psychology', 'Sociology', 'Philosophy', 'Other'
  ]

  const formattingStyles = [
    'APA', 'MLA', 'Chicago', 'Harvard', 'Vancouver', 'IEEE', 'Other'
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Academic Writing</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8">
            Expert writers ready to help you succeed
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/18439657071" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary-foreground transition-colors">
              <MessageCircle size={24} />
              Message on WhatsApp
            </a>
            <a href="https://www.instagram.com/remote_minds?igsh=MWxpMWhhNmlxOHprbQ==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors">
              <Instagram size={24} />
              DM on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <div className="bg-white rounded-2xl p-12 shadow-lg inline-block">
            <div className="text-7xl font-black text-accent mb-4">$8</div>
            <div className="text-2xl text-foreground font-semibold">Per Page</div>
            <p className="text-foreground/70 mt-4">No hidden fees • Fast turnaround • Premium quality</p>
          </div>
        </div>
      </section>

      {/* Top Tutors Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Meet Our Expert Tutors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutors.map((tutor, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/20 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{tutor.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{tutor.name}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{tutor.qualification}</p>
                <p className="text-foreground/70 text-sm">{tutor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-primary/10 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{review.comment}"</p>
                <p className="font-bold text-primary">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">We Help With All Subjects</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary/20 transition-colors">
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatting Styles Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">All Citation Styles</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {formattingStyles.map((style, index) => (
              <div key={index} className="bg-accent/20 text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent/30 transition-colors">
                {style}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us now via WhatsApp or Instagram. Tell us your requirements and we'll provide a quick quote.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/18439657071" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary-foreground transition-colors">
              <MessageCircle size={24} />
              WhatsApp: +1-843-965-7071
            </a>
            <a href="https://www.instagram.com/remote_minds?igsh=MWxpMWhhNmlxOHprbQ==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors">
              <Instagram size={24} />
              Instagram @remote_minds
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
