'use client'

import Link from 'next/link'
import { Mail, MessageCircle, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Remote Minds Solutions</h3>
            <p className="text-sm opacity-90">
              Helping businesses grow through reputation & smart support
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/reviews/local" className="hover:underline">
                  Local Reviews
                </Link>
              </li>
              <li>
                <Link href="/reviews/platform" className="hover:underline">
                  Platform Reviews
                </Link>
              </li>
              <li>
                <Link href="/reviews/ecommerce" className="hover:underline">
                  E-commerce Reviews
                </Link>
              </li>
              <li>
                <Link href="/reviews/employer" className="hover:underline">
                  Employer Branding
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Academic</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academic-writing" className="hover:underline">
                  Academic Writing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:houston@remotemindssolutions.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} />
                houston@remotemindssolutions.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p className="text-sm opacity-90">
              © 2026 Remote Minds Solutions. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end gap-6">
              <a
                href="https://wa.me/18439657071"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.instagram.com/remote_minds?igsh=MWxpMWhhNmlxOHprbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
