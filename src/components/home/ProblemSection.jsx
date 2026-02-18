export default function ProblemSection() {
  const problems = [
    {
      number: "01",
      title: "Tired of Surprise Charges?",
      description: "Contractor coordination: $75 each time. Emergency visit: $150. Photo report with extras: $25. These \"add-ons\" turn a $200/month service into $400+ real fast. Our pricing is transparent with no hidden fees."
    },
    {
      number: "02",
      title: "Need Real 24/7 Service?",
      description: "When your AC fails on Saturday night, you need answers. Unlike competitors with business-hours voicemail, John actually answers or returns calls promptly—any time, day or night."
    },
    {
      number: "03",
      title: "Same Person Every Time?",
      description: "No rotating staff. No strangers. John personally handles every visit. He learns your home's quirks and builds genuine trust over time."
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-blue text-center mb-16">
          Why North Scottsdale Homeowners Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-brand-blue transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-brand-gold text-5xl font-bold mb-4">
                {problem.number}
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}