import Button from '../components/ui/Button'

export default function About() {
  const values = [
    {
      icon: '🛡️',
      title: 'Integrity',
      description: 'We report exactly what we find — every issue, every visit. No sugarcoating, no surprises.'
    },
    {
      icon: '🔒',
      title: 'Discretion',
      description: 'Your home, your privacy, and your schedule are handled with complete confidentiality.'
    },
    {
      icon: '🎯',
      title: 'Reliability',
      description: 'The same professional, every single visit. No rotating staff, no strangers in your home.'
    },
    {
      icon: '📍',
      title: 'Local Expertise',
      description: 'We live here. We know North Scottsdale\'s climate, communities, and seasonal challenges intimately.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Years of Home Experience' },
    { number: '24/7', label: 'Direct Availability' },
    { number: '7', label: 'Premium Communities Served' },
    { number: '1', label: 'Point of Contact, Always' }
  ]

  const johnExperience = [
    {
      title: 'A Lifetime of Home Experience',
      description: 'Growing up in a military family meant moving frequently and learning to quickly assess new homes. Combined with 50+ years of personally owning and maintaining properties, nothing gets missed.',
      items: [
        'Systematic inspection protocols',
        'Attention to detail and discipline',
        'How to spot issues quickly',
        'Accountability and reliability'
      ]
    },
    {
      title: 'Rental Property Management',
      description: 'Years of managing rental properties provided deep knowledge of every system in a home and how to prevent costly failures.',
      items: [
        'All home systems — HVAC, plumbing, electrical',
        'Common failure points and how to prevent them',
        'Property maintenance best practices',
        'Emergency response and coordination'
      ]
    },
    {
      title: 'Lifetime of Home Ownership',
      description: 'Five decades of owning and maintaining homes means understanding exactly what owners care about most.',
      items: [
        'What matters vs. what doesn\'t',
        'How to prioritize issues',
        'Preventive maintenance value',
        'Cost-effective solutions'
      ]
    }
  ]

  const differentiators = [
    {
      category: '',
      feature: 'Who performs your visits',
      pphs: 'Same dedicated professional every time',
      corporate: 'Rotating staff, strangers each visit',
      property: 'Not their primary service'
    },
    {
      feature: 'Availability',
      pphs: 'Direct 24/7 — personal cell number',
      corporate: 'Call center or voicemail',
      property: 'Business hours only'
    },
    {
      feature: 'Local knowledge',
      pphs: 'North Scottsdale resident',
      corporate: 'Regional office, not local',
      property: 'Varies widely'
    },
    {
      feature: 'Photo reporting',
      pphs: 'Issue-based — only when there\'s a problem',
      corporate: 'Generic templated reports',
      property: 'Rarely included'
    },
    {
      feature: 'Contractor coordination',
      pphs: 'Included — unlimited with Annual',
      corporate: 'Extra charge per visit',
      property: 'Conflict of interest'
    },
    {
      feature: 'Relationship',
      pphs: 'Personal partnership',
      corporate: 'Corporate transaction',
      property: 'One of many clients'
    }
  ]

  const communities = [
    'Pinnacle Peak', 'DC Ranch', 'Silverleaf',
    'Desert Mountain', 'Troon', 'Troon North', 'Estancia'
  ]

  return (
    <div>

      {/* Hero - Desert Sunset */}
      <section
        className="relative text-white py-24 px-6 min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">North Scottsdale's Premier Home Watch Service</p>
          <h1 className="text-5xl font-bold mb-6">About Pinnacle Peak Home Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Built on decades of experience, military discipline, and a genuine commitment to protecting what matters most to you.
          </p>
        </div>
      </section>

      {/* Section 1: Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">Our Story</p>
              <h2 className="text-4xl font-bold text-brand-blue mb-6">Born From a Problem Worth Solving</h2>
              <p className="text-lg text-gray-700 mb-6">
                North Scottsdale homeowners face a unique challenge. You've invested significantly in a beautiful home in one of Arizona's most prestigious communities — but your schedule, your other properties, and your life keep you away for weeks or months at a time.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The solutions available were all wrong. National home watch chains sent different strangers each visit. Property managers weren't focused on empty homes. Neighbors were well-meaning but untrained. None of them truly understood what it means to protect a luxury property in North Scottsdale's extreme climate.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Pinnacle Peak Home Services was founded to fill that gap — a professional, locally-rooted service that treats every home with the same care and attention its owner would. Not a franchise. Not a side gig. A dedicated, experienced professional committed to one thing: protecting your investment.
              </p>
              <div className="bg-gray-50 border-l-4 border-brand-gold p-6 rounded-r-xl">
                <p className="text-lg text-gray-700 italic">
                  "Your home deserves the same standard of care you'd give it yourself. That's the only standard we accept."
                </p>
                <p className="text-sm text-brand-blue font-semibold mt-3">— Pinnacle Peak Home Services</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-gray-200 rounded-xl p-8 text-center border-2 border-gray-200 hover:border-brand-blue transition-colors">
                    <div className="text-5xl font-bold text-brand-gold mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl overflow-hidden flex-1 min-h-[200px]">
                <img
                  src="/About_Photo.jpg"
                  alt="North Scottsdale Desert Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Values */}
      <section className="py-20 px-6 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4 text-center">What We Stand For</p>
          <h2 className="text-4xl font-bold text-brand-blue text-center mb-6">Our Mission & Values</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Every decision we make — from how we conduct visits to how we communicate — is guided by four core principles.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center border-2 border-gray-200 hover:border-brand-blue hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Meet John */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4 text-center">The Person Behind The Service</p>
          <h2 className="text-4xl font-bold text-brand-blue text-center mb-6">Meet John, Founder & Owner</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Pinnacle Peak Home Services isn't a franchise or a corporate operation. It was founded by a North Scottsdale resident and U.S. military veteran who brings five decades of hands-on home experience to every single visit.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {johnExperience.map((exp, idx) => (
              <div key={idx} className="bg-gray-200 rounded-xl p-8 border-2 border-gray-200 hover:border-brand-blue transition-colors">
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{exp.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-brand-gold mr-2 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-brand-blue rounded-2xl p-10 text-white text-center">
            <p className="text-xl italic max-w-3xl mx-auto mb-4">
              "I personally handle every visit. Same person, every time. No rotating staff, no strangers — just me, someone you can trust over your home."
            </p>
            <p className="text-brand-gold font-semibold">John, Founder — Pinnacle Peak Home Services</p>
          </div>
        </div>
      </section>

      {/* Section 4: The Difference */}
      <section className="py-20 px-6 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4 text-center">How We Compare</p>
          <h2 className="text-4xl font-bold text-brand-blue text-center mb-6">The Pinnacle Peak Difference</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Not all home watch services are equal. Here's how Pinnacle Peak compares to the alternatives.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200">
            {/* Header */}
            <div className="grid grid-cols-4 bg-brand-blue text-white">
              <div className="p-5 font-bold text-lg">Feature</div>
              <div className="p-5 font-bold text-lg text-left bg-brand-gold">Pinnacle Peak</div>
              <div className="p-5 font-bold text-lg text-left">National Chains</div>
              <div className="p-5 font-bold text-lg text-left">Property Managers</div>
            </div>
            {/* Rows */}
            {differentiators.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-4 border-t border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="p-5 font-semibold text-brand-blue text-sm">{row.feature}</div>
                <div className="p-5 text-left text-sm text-gray-900 relative">
                  <div className="absolute inset-x-0 top-[-1px] bottom-0 border-x-4 border-brand-gold z-10 pointer-events-none"></div>
                  <span className="text-brand-gold mr-1">✓</span>{row.pphs}
                </div>
                <div className="p-5 text-left text-sm text-gray-500">{row.corporate}</div>
                <div className="p-5 text-left text-sm text-gray-500">{row.property}</div>
              </div>
            ))}
            {/* Gold bottom border closing the column */}
            <div className="grid grid-cols-4">
              <div></div>
              <div className="border-x-4 border-b-4 border-brand-gold h-0"></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Credentials */}
      <section className="py-20 px-6 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">Credentials & Trust</p>
          <h2 className="text-4xl font-bold mb-6">Certified, Licensed & Committed</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            When you invite someone into your home, credentials matter. Here's what backs every visit we make.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Veteran Owned & Operated', desc: 'Founded and operated by a U.S. military veteran' },
              { title: 'SBA Certified', desc: 'Service-Disabled Veteran-Owned Small Business' },
              { title: 'Licensed & Insured', desc: 'Fully licensed, insured, and bonded for your protection' },
              { title: 'Local Resident', desc: 'North Scottsdale resident — we live in the communities we serve' }
            ].map((cred, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="bg-brand-gold px-6 py-3 flex items-center justify-center min-h-[60px]">
                  <h3 className="text-lg font-bold text-white text-center leading-snug">{cred.title}</h3>
                </div>
                <div className="px-6 py-6 text-center">
                  <p className="text-gray-600 text-sm">{cred.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <div className="bg-white rounded-lg px-6 py-3">
              <img src="/Veteran_Logo.png" alt="Veteran Owned" className="h-12 object-contain" />
            </div>
            <div className="bg-white rounded-lg px-6 py-3">
              <img src="/SBA_Logo.jpg" alt="SBA Certified" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Communities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">Service Area</p>
          <h2 className="text-4xl font-bold text-brand-blue mb-6">North Scottsdale Communities We Serve</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We exclusively serve the premium communities of North Scottsdale — the neighborhoods we know and call home.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {communities.map((community, idx) => (
              <div key={idx} className="bg-brand-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-gold transition-colors cursor-default">
                {community}
              </div>
            ))}
          </div>
          <p className="text-gray-500 italic">
            If your home is in North Scottsdale and you value personal attention over corporate runaround, we'd be honored to protect your investment.
          </p>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section
        className="relative py-24 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Meet Your Home Care Partner?</h2>
          <p className="text-xl text-gray-200 mb-10">
            Schedule a free consultation to discuss your home's specific needs. No pressure, no obligation — just an honest conversation about how we can help protect your investment.
          </p>
          <Button variant="primary" href="/contact">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

    </div>
  )
}