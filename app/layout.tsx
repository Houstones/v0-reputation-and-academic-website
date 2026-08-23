import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { ThemeProvider } from '@/components/theme-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Remote Minds Solutions - Digital Services & Business Solutions',
  description: 'Remote Minds Solutions provides comprehensive digital services including academic support, reputation management, AI data solutions, web design, digital marketing, and business process outsourcing.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.png?v=3',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
          <Footer />
          <WhatsAppButton />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
