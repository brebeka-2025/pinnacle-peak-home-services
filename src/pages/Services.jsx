import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function Services() {
  const packages = [
    {
      name: 'Monthly',
      price: '$250',
      period: 'per month',
      description: 'Perfect for short trips. Total flexibility with no long-term commitment.',
      features: [
        '4 weekly visits',
        'Full home inspections',
        '24/7 emergency availability',
        'Issue-based photo reporting',
        'No long-term commitment'
      ],
      savings: 'Maximum Flexibility',
      badge: null,
      featured: false
    },
    {
      name: 'Summer',
      price: '$895',
      period: '4 months (June-September)',
      description: 'Perfect for seasonal travelers. Complete monsoon season coverage.',
      features: [
        '16 weekly visits (4 months)',
        'FREE storm/monsoon services',
        'Everything in Monthly',
        'High-alert pre-monsoon inspection',
        'Priority phone/text support'
      ],
      savings: 'Save 11% vs Monthly',
      badge: null,
      featured: false
    },
    {
      name: 'Seasonal',
      price: '$1,395',
      period: '6 months (November-April typical)',
      description: 'Perfect for snowbirds. Your complete winter escape solution.',
      features: [
        '26 weekly visits (6 months)',
        'FREE storm services',
        'FREE pre-arrival home prep',
        'Everything in Summer',
        'Pre-seasonal HVAC check',
        'Bi-annual pest barrier check'
      ],
      savings: 'Save 22% vs Monthly',
      badge: null,
      featured: false
    },
    {
      name: 'Annual',
      price: '$1,595',
      period: '12 months',
      description: 'Perfect for busy executives. Year-round partnership for peace of mind.',
      features: [
        'Year-round weekly visits',
        'UNLIMITED contractor coordination',
        'FREE pre-arrival home prep',
        'FREE storm/monsoon services',
        'Priority 24/7 availability (directly)',
        'Quarterly in-depth inspections',
        'Zero charges for contractor meetings'
      ],
      savings: 'Save 47% vs Monthly',
      badge: 'BEST VALUE',
      featured: true
    }
  ]

  const inspectionItems = {
    exterior: [
      'Roof and gutters (visual)',
      'Exterior walls, siding, stucco',
      'Windows and window seals',
      'Doors (including garage)',
      'Driveway, walkways, hardscaping',
      'Irrigation system check',
      'Pool/spa (if applicable)'
    ],
    interior: [
      'All rooms inspected',
      'Run all faucets (prevent dry P-traps)',
      'Flush all toilets',
      'Check windows and locks',
      'Floor & walls',
      'Check for leaks/water damage',
      'Look for pest activity'
    ],
    systems: [
      'HVAC operation check',
      'Thermostat settings verified',
      'Water heater check',
      'Plumbing (visible pipes, shut-off valves)',
      'Electrical (breaker box, GFCI outlets)',
      'Security system check',
      'Wi-Fi/internet check'
    ],
    reporting: [
      'Issue-based photo reports (ONLY when problems)',
      'Brief written summary after each visit',
      'Immediate notification of urgent issues',
      'Detailed log of all visits (digital)',
      'Frequency: customized to mutual preference',
      'On-call for questions'
    ]
  }

  const annualBenefits = {
    traveling: [
      "Year-round weekly visits",
      "Priority 24/7 availability (directly)",
      "Same person, always",
      "Direct connection—not an office",
      "Emergency response while you're gone",
      "Pre-arrival home preparation",
      "Peace of mind, every trip"
    ],
    home: [
      "Same weekly inspection when you're home",
      "Quarterly in-depth system reviews",
      "HVAC filter changes (quarterly)",
      "UNLIMITED contractor coordination",
      "Zero charges for meeting contractors",
      "Seasonal maintenance coordination",
      "No on/off hassle when you travel"
    ],
    value: [
      "Year 24/7 availability (directly)",
      "Save 47% vs monthly",
      "No surprises",
      "Contractor meetings: UNLIMITED, FREE",
      "Pre-arrival prep: FREE",
      "Storm/monsoon services: FREE",
      "$0 extra for major contractor jobs"
    ]
  }

  const addOns = [
    { service: 'Contractor Coordination', price: '$25/visit', note: 'Meet contractor, confirm scope, lock up after' },
    { service: 'Pre-Arrival Home Prep', price: '$149', note: 'AC, lights, clean, stock basics' },
    { service: 'Post-Departure Winterize', price: '$75', note: null },
    { service: 'Vehicle Maintenance', price: '$40/month', note: 'Start, drive, fluids, battery, tires' },
    { service: 'Indoor Plant Care', price: '$35/visit', note: null },
    { service: 'Pool Equipment Check', price: '$35/visit', note: null },
    { service: 'Pet Check-In', price: '$35/visit', note: 'Feed/water, companionship' },
    { service: 'Emergency Response', price: '$75', note: null },
    { service: 'Large Package Retrieval', price: 'FREE', note: null }
  ]

  return (
    <div>
      {/* Hero with Desert Sunset Background */}
      <section 
        className="relative text-white py-20 px-6 min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl">
            Four packages designed for different needs. No hidden fees. No fine print. Choose what works for you.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-blue text-center mb-6">
            Choose Your Package
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Each package includes weekly home monitoring with 24/7 availability, 50+ point inspections, and issue-based photo reporting. Choose by duration. Upgrade or switch packages anytime—no penalties, no hassle.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 relative flex flex-col ${
                  pkg.featured ? 'border-4 border-brand-gold' : 'border-2 border-gray-200'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}
                
                {/* Title - Fixed Height */}
                <h3 className="text-3xl font-bold text-brand-blue mb-2 text-center h-10 flex items-center justify-center">{pkg.name}</h3>
                
                {/* Description - Fixed Height for 3 lines */}
                <p className="text-sm text-gray-600 text-center mb-6 h-16 flex items-center justify-center px-2">{pkg.description}</p>

                {/* Price - Fixed Height */}
                <div className="text-center mb-2 h-20 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-brand-gold">{pkg.price}</div>
                  <div className="text-sm text-gray-600">{pkg.period}</div>
                </div>

                {/* Savings Badge - Fixed Height */}
                <div className="h-12 mb-6 flex items-center justify-center">
                  {pkg.savings ? (
                    <div className="bg-blue-50 border-2 border-brand-blue text-brand-blue text-center py-2 px-4 rounded-lg font-semibold w-full">
                      {pkg.savings}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                {/* Features List - Grows to fill space */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-brand-gold mr-2 text-lg flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button - Always at bottom with centered text */}
                <Button 
                  href="/contact" 
                  variant={pkg.featured ? "primary" : "outline"}
                  className={`w-full flex items-center justify-center text-center ${
                    !pkg.featured ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white' : ''
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-blue text-center mb-6">
            What's Included in Every Visit
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive preventative monitoring of all major home systems and areas. Every home, every visit. (Although individual steps may vary.)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Exterior Inspection Card */}
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-brand-blue transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/Exterior_Photo.jpg" 
                  alt="Exterior Inspection" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Exterior Inspection</h3>
                <ul className="space-y-2">
                  {inspectionItems.exterior.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-brand-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interior Walk-Through Card */}
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-brand-blue transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/Interior_Photo.jpg" 
                  alt="Interior Walk-Through" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Interior Walk-Through</h3>
                <ul className="space-y-2">
                  {inspectionItems.interior.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-brand-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Systems & Security Card */}
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-brand-blue transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/Systems_Photo.jpg" 
                  alt="Systems & Security" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Systems & Security</h3>
                <ul className="space-y-2">
                  {inspectionItems.systems.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-brand-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reporting & Communication Card */}
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-brand-blue transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/Reporting_Photo.jpg" 
                  alt="Reporting & Communication" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Reporting & Communication</h3>
                <ul className="space-y-2">
                  {inspectionItems.reporting.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-brand-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Package Details */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-blue to-brand-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            <span className="text-brand-gold">Annual Package:</span> Your Year-Round Property Partner
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
            More than just home watch when you travel—the Annual Package provides year-round priority service whether you're home or away. It's a true partnership for the busy executive who values both homes and time.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src="/Traveling_Photo.jpg" alt="When You're Traveling" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-brand-blue">When You're Traveling</h3>
                <ul className="space-y-3">
                  {annualBenefits.traveling.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-brand-gold mr-2 text-xl">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src="/Storm_Photo.jpg" alt="When You're Home" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-brand-blue">When You're Home</h3>
                <ul className="space-y-3">
                  {annualBenefits.home.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-brand-gold mr-2 text-xl">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src="/Coordination_Photo.jpg" alt="Year-Round Value" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-brand-blue">Year-Round Value</h3>
                <ul className="space-y-3">
                  {annualBenefits.value.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-brand-gold mr-2 text-xl">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 px-6 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-blue text-center mb-6">
            Optional Add-On Services
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Personalize to fit your needs. Add these services to any package (upfront, as needed). Annual and Seasonal packages include select add-ons FREE (noted below).
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addOn, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-brand-blue flex-1">{addOn.service}</h3>
                  <span className="text-brand-gold font-bold text-lg ml-4">{addOn.price}</span>
                </div>
                {addOn.note && <p className="text-sm text-gray-600">{addOn.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-700 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Schedule your free consultation today or call/text (480) XXX-XXXX. I'll answer your questions, do a quick walkthrough, and help you pick the right package. No pressure, no obligation—just an honest conversation about protecting your home.
          </p>
          <Button variant="primary" href="/contact">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}