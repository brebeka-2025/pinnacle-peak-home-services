export default function SolutionSection() {
  const solutions = [
    {
      number: "01",
      iconPath: "/Icons-01.png",
      title: "50+ Years Experience",
      description: "Unlike newer companies with just a few years under their belt, John brings five decades of home knowledge:",
      points: [
        "Grew up in rental properties through military moves",
        "Lifetime of hands-on home maintenance",
        "Knows what to look for before problems escalate",
        "Can spot issues others miss"
      ]
    },
    {
      number: "02",
      iconPath: "/Icons-02.png",
      title: "Local North Scottsdale Resident",
      description: "John lives in North Scottsdale and is part of your community:",
      points: [
        "Minutes away, not coming from across town",
        "Country club member",
        "Understands the neighborhood",
        "Your neighbor, not an outsider"
      ]
    },
    {
      number: "03",
      iconPath: "/Icons-03.png",
      title: "Issue-Based Reporting",
      description: "We respect your time and inbox:",
      points: [
        "Photos ONLY when there's a problem",
        "Brief written summary after each visit",
        "When you get a photo, you know it matters",
        "No spam, no clutter—just real protection"
      ]
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-blue text-center mb-6">
          What Makes Us Different
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
          Your North Scottsdale neighbor John brings 50+ years of hands-on home experience from a lifetime of military moves and rental property management. This isn't just a business—it's personal, professional care from someone who actually knows homes.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-brand-blue transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img 
                  src={solution.iconPath} 
                  alt="" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              {/* Number */}
              <div className="text-brand-gold text-5xl font-bold mb-4">
                {solution.number}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-brand-blue mb-4">
                {solution.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {solution.description}
              </p>
              
              {/* Bullet Points */}
              <ul className="space-y-2">
                {solution.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-brand-gold mr-2 text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}