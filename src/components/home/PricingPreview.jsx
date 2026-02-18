import Button from '../ui/Button'

export default function PricingPreview() {
  const packages = [
    {
      name: 'Monthly',
      features: [
        '4 weekly visits',
        'Full inspections',
        '24/7 availability',
        'No commitment',
      ],
      featured: false
    },
    {
      name: 'Summer',
      features: [
        '4 months (Jun-Sep)',
        'FREE storm services',
        'Save 11%',
        'Perfect for summer travelers',
      ],
      featured: false
    },
    {
      name: 'Seasonal',
      features: [
        '6 months coverage',
        'FREE storm services',
        'FREE home prep',
        'Perfect for snowbirds',
      ],
      featured: false
    },
    {
      name: 'Annual',
      badge: 'BEST VALUE',
      features: [
        'Year-round partner',
        'UNLIMITED contractor coordination',
        'Save 47%',
        'Perfect for executives',
      ],
      featured: true
    },
  ]

  return (
    <section className="bg-gradient-to-br from-brand-blue to-brand-blue-700 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Four packages designed for different needs. Schedule a consultation for customized pricing based on your property.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white text-gray-900 rounded-xl p-8 relative flex flex-col ${
                pkg.featured ? 'border-4 border-brand-gold' : 'border-2 border-white'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}
              
              <h3 className="text-3xl font-bold text-brand-blue mb-6 text-center">
                {pkg.name}
              </h3>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-brand-gold mr-2 text-lg flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full border-2 border-brand-blue text-brand-blue font-semibold py-3 px-6 rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
                Contact for Pricing
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" href="/services">
            See Full Service Details
          </Button>
        </div>
      </div>
    </section>
  )
}