export default function Testimonials() {
  const testimonials = [
    {
      quote: "We spent six months in Europe completely worry-free. John sent brief updates after every visit, and when he discovered a small leak, he had it fixed before we even knew there was a problem. His attention to detail is incredible.",
      author: "Michael & Patricia R.",
      location: "Desert Mountain",
    },
    {
      quote: "It's the personal touches that set John apart. He's not just checking boxes—he genuinely cares. We trust him completely with our home while we're in Montana each summer.",
      author: "David L.",
      location: "Pinnacle Peak",
    },
    {
      quote: "After getting 15+ photos of our perfect house every week from our old service, John's approach is refreshing. He sends a quick text that everything's fine, and photos ONLY when needed. No spam!",
      author: "Jennifer & Tom S.",
      location: "DC Ranch",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-blue text-center mb-16">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-brand-blue transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-brand-blue text-lg">
                  {testimonial.author}
                </p>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}