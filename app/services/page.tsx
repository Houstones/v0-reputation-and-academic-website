export default function ServicesPage() {
  const services = [
    {
      category: "Academic & Research Services",
      icon: "📚",
      description: "Comprehensive support for academic excellence and research projects",
      items: [
        "Academic Writing",
        "Research Papers & Proposals",
        "Dissertation & Thesis Support",
        "Literature Reviews",
        "Data Analysis (SPSS, R, Python)",
        "Proofreading & Editing",
        "Citation & Referencing",
        "Research Consulting"
      ]
    },
    {
      category: "Reputation Management",
      icon: "⭐",
      description: "Build and maintain your online reputation across all platforms",
      items: [
        "Local Reviews Management",
        "Platform Reviews Management",
        "E-commerce Reviews Management",
        "Employer Branding",
        "Brand Monitoring",
        "Online Reputation Repair",
        "Customer Feedback Management",
        "Review Response Services"
      ]
    },
    {
      category: "AI Data & Model Support Services",
      icon: "🤖",
      description: "Specialized services for AI development and model training",
      items: [
        "Data Annotation & Labeling",
        "AI Training Data Creation",
        "RLHF (Human Feedback for AI)",
        "Prompt Engineering",
        "AI Model Evaluation",
        "Data Collection & Curation",
        "Content Moderation",
        "AI Quality Assurance",
        "Synthetic Data Generation",
        "AI Agent Testing"
      ]
    },
    {
      category: "Web Design & Development",
      icon: "🌐",
      description: "Professional website solutions tailored to your business",
      items: [
        "Business Websites",
        "E-commerce Websites",
        "Landing Pages",
        "WordPress Development",
        "Website Maintenance",
        "UI/UX Design",
        "Website Speed Optimization",
        "Website Security"
      ]
    },
    {
      category: "Digital Marketing Services",
      icon: "📈",
      description: "Strategic marketing solutions to grow your online presence",
      items: [
        "Search Engine Optimization (SEO)",
        "Social Media Management",
        "Content Marketing",
        "Email Marketing",
        "Pay-Per-Click (PPC) Advertising",
        "Influencer Outreach",
        "Conversion Rate Optimization",
        "Marketing Analytics"
      ]
    },
    {
      category: "Branding & Creative Services",
      icon: "🎨",
      description: "Creative solutions to strengthen your brand identity",
      items: [
        "Logo Design",
        "Brand Identity Development",
        "Graphic Design",
        "Corporate Profiles",
        "Presentation Design",
        "Marketing Materials",
        "Video Editing",
        "Motion Graphics"
      ]
    },
    {
      category: "Business Process Outsourcing (BPO)",
      icon: "💼",
      description: "Efficient business support solutions to streamline operations",
      items: [
        "Virtual Assistant Services",
        "Customer Support",
        "Live Chat Support",
        "Email Support",
        "Data Entry",
        "Lead Generation",
        "Administrative Support",
        "Appointment Setting"
      ]
    },
    {
      category: "Content & Publishing Services",
      icon: "✍️",
      description: "Professional content creation for all your communication needs",
      items: [
        "Blog Writing",
        "Copywriting",
        "Technical Writing",
        "Website Content",
        "Product Descriptions",
        "Press Releases",
        "Ghostwriting",
        "Newsletter Creation"
      ]
    },
    {
      category: "Data & Analytics Services",
      icon: "📊",
      description: "Data-driven insights to inform your business decisions",
      items: [
        "Data Cleaning",
        "Data Visualization",
        "Business Intelligence Dashboards",
        "Market Research",
        "Survey Design & Analysis",
        "Competitive Analysis",
        "Reporting & Insights"
      ]
    },
    {
      category: "Technology & Automation",
      icon: "⚙️",
      description: "Technology solutions to automate and optimize your business",
      items: [
        "Business Automation",
        "AI Chatbot Development",
        "Workflow Automation",
        "CRM Setup & Management",
        "API Integrations",
        "No-Code/Low-Code Solutions",
        "Custom Software Solutions"
      ]
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Comprehensive Services</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto">
            From academic support to digital transformation, we provide end-to-end solutions for your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-primary/10 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.category}</h3>
                    <p className="text-foreground/70 text-sm">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-foreground/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Didn't find what you're looking for?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us to discuss custom solutions tailored to your specific needs</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary-foreground transition-colors">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
