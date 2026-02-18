import Hero from '../components/home/Hero'
import ProblemSection from '../components/home/ProblemSection'
import SolutionSection from '../components/home/SolutionSection'
import PricingPreview from '../components/home/PricingPreview'
import Testimonials from '../components/home/Testimonials'
import Button from '../components/ui/Button'

export default function Home() {
  const stats = [
    {
      number: "50+",
      label: "Years Home Experience",
      description: "Five decades of hands-on knowledge"
    },
    {
      number: "24/7",
      label: "True Availability",
      description: "Always answers or returns calls"
    },
    {
      number: "1",
      label: "Person Only",
      description: "John personally handles every visit"
    },
    {
      number: "7",
      label: "Premium Communities",
      description: "Serving North Scottsdale's best"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Problem Section - Why Choose Us */}
      <ProblemSection />

      {/* Solution Section - What Makes Us Different */}
      <SolutionSection />

      {/* Pricing Preview */}
      <PricingPreview />

      {/* Meet John Section - Stats Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Centered Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue text-center mb-12">
            Meet John—Your Neighbor and Home Care Partner
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Your neighbor John provides professional home watch services for North Scottsdale homeowners who want personal attention—not corporate runaround.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Unlike newer companies with just a few years in business, John brings five decades of hands-on home experience from a lifetime of military moves and rental property management. John knows homes inside and out, and he knows what to look for before small issues become expensive problems.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Living right here in North Scottsdale and serving exclusively the communities he knows best, John is your neighbor—the same person protecting your most valuable asset every single visit.
              </p>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-brand-blue transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-brand-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-brand-blue font-bold text-lg mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Button Below */}
          <div className="text-center mt-12">
            <Button variant="primary" href="/about">
              Learn More About John
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-700 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl mb-8">
            Get your free consultation today and discover why North Scottsdale homeowners trust John with their most valuable asset.
          </p>
          <Button variant="primary" href="/contact">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}