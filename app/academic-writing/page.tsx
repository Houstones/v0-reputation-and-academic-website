'use client'

import AcademicWritingForm from '@/components/academic-writing/form'

export default function AcademicWritingPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Writing Services</h1>
          <p className="text-lg text-primary-foreground/90">
            Get professional academic writing help for all your needs
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AcademicWritingForm />
        </div>
      </section>
    </div>
  )
}
