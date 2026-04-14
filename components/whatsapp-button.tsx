'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/18439657071"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </Link>
  )
}

export default WhatsAppButton
