'use client'

import { Mail, MessageCircle, Instagram, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Let&apos;s connect and discuss how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-lg p-4 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-foreground/70 mb-6">Fast and convenient messaging</p>
              <a href="https://wa.me/18439657071" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Message Us
                </Button>
              </a>
              <p className="text-sm text-foreground/60 mt-4">+1 (843) 965-7071</p>
            </Card>

            {/* Email */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-lg p-4 mx-auto mb-4 flex items-center justify-center">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-foreground/70 mb-6">Detailed inquiries and proposals</p>
              <a href="mailto:houston@remotemindssolutions.com">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Email
                </Button>
              </a>
              <p className="text-sm text-foreground/60 mt-4 break-all">houston@remotemindssolutions.com</p>
            </Card>

            {/* Instagram */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-4 mx-auto mb-4 flex items-center justify-center">
                <Instagram size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-foreground/70 mb-6">Follow us for updates and tips</p>
              <a href="https://www.instagram.com/remote_minds?igsh=MWxpMWhhNmlxOHprbQ==" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  Follow Us
                </Button>
              </a>
              <p className="text-sm text-foreground/60 mt-4">@remote_minds</p>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex gap-4 mb-4">
                <Clock className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Response Time</h3>
                  <p className="text-foreground/80">
                    We typically respond to inquiries within 24 hours during business days. For urgent matters, use WhatsApp for immediate contact.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <div className="flex gap-4 mb-4">
                <MapPin className="text-accent flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Team</h3>
                  <p className="text-foreground/80">
                    We&apos;re a distributed team serving clients worldwide. No matter where you are, we&apos;re ready to help your business succeed.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Inquiry</h2>
            <p className="text-lg text-foreground/70">
              Tell us about your project and we&apos;ll get back to you shortly.
            </p>
          </div>

          <Card className="p-8 md:p-12 border border-primary/20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors bg-background"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Service Interest *</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors bg-background"
                >
                  <option value="">Select a service</option>
                  <option value="academic">Academic Writing</option>
                  <option value="reputation">Reputation Management</option>
                  <option value="agents">AI Agents & Automation</option>
                  <option value="ai">AI Data Solutions</option>
                  <option value="web">Web Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="branding">Branding & Creative</option>
                  <option value="bpo">Business Outsourcing</option>
                  <option value="content">Content & Publishing</option>
                  <option value="analytics">Data & Analytics</option>
                  <option value="technology">Technology & Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition-colors bg-background"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors">
                  Send Message
                </Button>
                <a href="https://wa.me/18439657071" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button type="button" size="lg" variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                    WhatsApp
                  </Button>
                </a>
              </div>

              <p className="text-sm text-foreground/60 text-center">
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is your response time?',
                a: 'We typically respond to all inquiries within 24 hours. For urgent matters, contact us via WhatsApp for immediate assistance.',
              },
              {
                q: 'Do you offer customized solutions?',
                a: 'Absolutely! All our services can be tailored to meet your specific needs. Contact us to discuss your requirements.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major payment methods including credit cards, bank transfers, and digital payment platforms.',
              },
              {
                q: 'Can you work with my timezone?',
                a: 'Yes, we are a global team and can work across all timezones. We will coordinate the best time for your project.',
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 border border-primary/20 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-primary">{faq.q}</h3>
                <p className="text-foreground/80">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
