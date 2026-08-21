'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from '@/components/theme-toggle'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const serviceItems = [
    { name: 'Academic & Research Support', href: '/services/academic-writing' },
    { name: 'Review & Reputation Management', href: '/services/reputation-management' },
    { name: 'AI Agents & Automation', href: '/services/ai-agents' },
    { name: 'AI & Data Solutions', href: '/services/ai-data' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Branding & Creative', href: '/services/branding' },
    { name: 'Business Process Outsourcing', href: '/services/bpo' },
    { name: 'Content & Publishing', href: '/services/content' },
    { name: 'Data Analytics', href: '/services/analytics' },
    { name: 'Technology Consulting', href: '/services/technology' },
  ]

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-accent/30 bg-header/90 text-header-foreground shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4 py-3 md:min-h-24 md:py-0">
          <Link href="/" className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80">
            <Image
              src="/logo.png"
              alt="Remote Minds Solutions"
              width={60}
              height={60}
              className="size-12 shrink-0 object-contain mix-blend-multiply transition-[filter] sm:size-14 dark:mix-blend-normal dark:brightness-90 dark:contrast-125 dark:invert"
              priority
            />
            <div className="min-w-0">
              <div className="truncate text-xl font-bold leading-tight text-header-foreground sm:text-2xl md:text-3xl">Remote Minds</div>
              <div className="text-sm font-bold text-accent sm:text-base">Solutions</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-12 md:flex">
            <Link href="/" onClick={() => setServicesOpen(false)} className="text-base font-semibold text-header-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" onClick={() => setServicesOpen(false)} className="text-base font-semibold text-header-foreground transition-colors hover:text-primary">
              About Us
            </Link>
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-base font-semibold text-header-foreground transition-colors hover:text-primary"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute right-0 top-full w-72 rounded-xl border border-border bg-background p-2 shadow-xl transition-all ${servicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'}`}>
                <Link href="/services" onClick={() => setServicesOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-muted">
                  View All Services
                </Link>
                <div className="my-1 border-t border-border" />
                {serviceItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setServicesOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/blog" onClick={() => setServicesOpen(false)} className="text-base font-semibold text-header-foreground transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setServicesOpen(false)} className="text-base font-semibold text-header-foreground transition-colors hover:text-primary">
              Contact
            </Link>
            <ThemeToggle />
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
            {menuItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-base font-semibold text-header-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-border py-2">
              <div className="py-2 text-base font-semibold text-primary">Services</div>
              <Link href="/services" className="block py-2 pl-4 text-sm font-semibold text-foreground transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                View All Services
              </Link>
              {serviceItems.map((item) => (
                <Link key={item.href} href={item.href} className="block py-2 pl-4 text-sm text-muted-foreground transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="/blog" className="block py-3 text-base font-semibold text-header-foreground transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="block py-3 text-base font-semibold text-header-foreground transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex items-center justify-between border-t border-border pt-3">
              <span className="text-sm font-semibold text-muted-foreground">Appearance</span>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
