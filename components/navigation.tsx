'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4 py-3 md:min-h-24 md:py-0">
          <Link href="/" className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80">
            <Image
              src="/logo.png"
              alt="Remote Minds Solutions"
              width={60}
              height={60}
              className="size-12 shrink-0 object-contain sm:size-14"
              priority
            />
            <div className="min-w-0">
              <div className="truncate text-xl font-bold leading-tight text-primary sm:text-2xl md:text-3xl">Remote Minds</div>
              <div className="text-sm font-bold text-accent sm:text-base">Solutions</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-base font-semibold"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-primary/20">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-foreground hover:text-primary transition-colors text-base font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
