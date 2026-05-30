import { MessageCircle, Instagram, CheckCircle } from 'lucide-react'

export default function AcademicWritingServicePage() {
  const features = [
    'Expert PhD-qualified writers',
    'Original, plagiarism-free content',
    '$8 per page pricing',
    'Fast turnaround times',
    'All citation styles',
    'Unlimited revisions',
  ]

  const subjects = ['Essays', 'Research Papers', 'Dissertations', 'Case Studies', 'Data Analysis', 'Term Papers']

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Academic & Research Writing</h1>
          <p className="text-xl mb-8 max-w-2xl">Professional academic writing support for students and researchers worldwide</p>
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
          <h2 className="text-4xl font-bold mb-12">Key Features</h2>
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
          <h2 className="text-4xl font-bold mb-12">Subjects We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, i) => (
              <div key={i} className="bg-primary/10 text-primary px-6 py-4 rounded-lg font-semibold text-center">
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
