export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Remote Minds Solutions</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto">
            Bridging talent and technology to deliver world-class digital solutions globally
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Remote Minds Solutions is a modern digital services company dedicated to helping businesses, researchers, startups, and professionals succeed in an increasingly connected world. We combine human expertise, technology, and innovation to deliver high-quality solutions that drive growth, efficiency, and measurable results.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Founded with the vision of bridging talent and technology, we provide a diverse range of services including Academic & Research Support, Reputation Management, AI Data & Model Support, Web Design & Development, Digital Marketing, Content Creation, Virtual Assistance, and Business Process Outsourcing.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our team consists of skilled researchers, writers, developers, designers, AI specialists, and digital strategists who work collaboratively to solve complex challenges and create value for our clients. Whether you need to strengthen your online reputation, build a professional website, support AI model development, or access specialized business services, we deliver solutions tailored to your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Mission */}
            <div className="bg-card text-card-foreground rounded-lg p-8 shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                To empower businesses, institutions, and individuals with innovative digital solutions that enhance performance, build trust, and accelerate growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card text-card-foreground rounded-lg p-8 shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-foreground/80 leading-relaxed">
                To become a trusted global partner for digital transformation, research support, AI innovation, and business excellence.
              </p>
            </div>

            {/* Approach */}
            <div className="bg-card text-card-foreground rounded-lg p-8 shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Approach</h3>
              <p className="text-foreground/80 leading-relaxed">
                At Remote Minds Solutions, we believe that every organization deserves access to world-class expertise regardless of size or location. Our remote-first approach allows us to serve clients globally while maintaining flexibility, efficiency, and competitive pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
              <p className="text-foreground/70">Committed to delivering work of the highest quality standards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-foreground/70">Building long-term relationships through transparency, honesty, and professionalism.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-foreground/70">Embracing emerging technologies and creative thinking to solve modern challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Reliability</h3>
              <p className="text-foreground/70">Delivering consistent results on time and within scope, every time.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Client Success</h3>
              <p className="text-foreground/70">Your success is our success. We focus on outcomes that create real value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Remote Minds Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-accent">→</div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Multi-disciplinary Expertise</h3>
                <p className="text-foreground/70">All the skills and services you need under one roof</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-accent">→</div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Customized Solutions</h3>
                <p className="text-foreground/70">Services tailored specifically to your unique needs</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-accent">→</div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Experienced Professionals</h3>
                <p className="text-foreground/70">Subject matter experts with proven track records</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-accent">→</div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Scalable Support</h3>
                <p className="text-foreground/70">Solutions for startups, SMEs, and enterprises</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-accent">→</div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Quality Assurance</h3>
                <p className="text-foreground/70">Commitment to quality, confidentiality, and satisfaction</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-accent">→</div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Global Reach</h3>
                <p className="text-foreground/70">Serving clients worldwide with consistent excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Discover how Remote Minds Solutions can help transform your business</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary-foreground transition-colors">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
