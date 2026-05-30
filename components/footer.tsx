'use client'

import Link from 'next/link'
import { Mail, MessageCircle, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Remote Minds Solutions</h3>
            <p className="text-sm opacity-90">
              Comprehensive digital solutions for your business growth
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Core Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/academic-writing" className="hover:underline">
                  Academic Writing
                </Link>
              </li>
              <li>
                <Link href="/services/reputation-management" className="hover:underline">
                  Reputation Management
                </Link>
              </li>
              <li>
                <Link href="/services/ai-data" className="hover:underline">
                  AI Data Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:underline">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Digital Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/digital-marketing" className="hover:underline">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="hover:underline">
                  Branding & Creative
                </Link>
              </li>
              <li>
                <Link href="/services/bpo" className="hover:underline">
                  Business Outsourcing
                </Link>
              </li>
              <li>
                <Link href="/services/content" className="hover:underline">
                  Content & Publishing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Data & Tech</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/analytics" className="hover:underline">
                  Data & Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/technology" className="hover:underline">
                  Technology Automation
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact & Follow</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:houston@remotemindssolutions.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} />
                Contact Us
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://wa.me/18439657071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="https://www.instagram.com/remote_minds?igsh=MWxpMWhhNmlxOHprbQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <p className="text-sm opacity-90">
              © 2026 Remote Minds Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/about" className="text-sm hover:underline">About</Link>
              <Link href="/services" className="text-sm hover:underline">Services</Link>
              <a href="mailto:houston@remotemindssolutions.com" className="text-sm hover:underline">Email</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
