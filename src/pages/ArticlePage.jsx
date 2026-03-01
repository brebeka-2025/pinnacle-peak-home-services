import { Link, useParams } from 'react-router-dom'

const categoryColors = {
  'Seasonal Tips': '#1E5BA8',
  'Storm & Weather': '#2563eb',
  'Insurance & Legal': '#c48b47',
  'Home Maintenance': '#1E5BA8',
  'Security': '#c48b47',
  'Travel Tips': '#1E5BA8',
  'How to Work with a Home Watch Company': '#c48b47',
}

// In production this would come from a CMS or data file
const articles = [
  {
    id: 1,
    slug: 'what-happens-to-your-home-in-arizona-summer',
    category: 'Seasonal Tips',
    title: 'What Really Happens to Your North Scottsdale Home During an Arizona Summer',
    excerpt: 'Most homeowners don\'t realize the damage that 115-degree heat, monsoon storms, and humidity spikes can cause to a vacant property.',
    date: 'February 20, 2026',
    readTime: '6 min read',
    image: '/watch-article-1.jpg',
    featured: true,
    content: [
      {
        type: 'intro',
        text: 'Every May, thousands of North Scottsdale homeowners pack up and head north — to cooler climates, second homes, or summer getaways. They lock the door, set the thermostat, and assume their home will be just fine until they return in the fall.'
      },
      {
        type: 'intro',
        text: 'Most of the time, it is. But when things go wrong in a vacant Arizona home during summer, they go wrong fast — and the damage is often severe, expensive, and completely preventable.'
      },
      {
        type: 'heading',
        text: 'The Heat Is Only Part of the Problem'
      },
      {
        type: 'paragraph',
        text: 'North Scottsdale summer temperatures regularly exceed 110°F, and interior temperatures in a vacant home with a malfunctioning or undersized HVAC system can climb even higher. At those temperatures, wood warps, caulk cracks, and rubber seals in appliances degrade rapidly. But the heat itself is rarely the primary cause of damage — it\'s what the heat does to your home\'s systems that creates problems.'
      },
      {
        type: 'paragraph',
        text: 'A thermostat set to 85°F might seem economical, but that setting can allow interior humidity to spike during monsoon season, creating the perfect conditions for mold growth inside walls, under sinks, and in air ducts — invisible until you return home in October.'
      },
      {
        type: 'heading',
        text: 'Monsoon Season: June Through September'
      },
      {
        type: 'paragraph',
        text: 'Arizona\'s monsoon season brings some of the most dramatic weather in the country — high winds, blowing dust, flash flooding, and humidity levels that can jump from 10% to 60% in a matter of hours. For vacant homes, this creates a perfect storm of risk.'
      },
      {
        type: 'list',
        items: [
          'Wind-driven rain can enter through gaps around windows and doors that weren\'t noticeable in dry conditions',
          'Dust storms (haboobs) can infiltrate through any unsealed opening, coating everything inside',
          'Flash flooding can overwhelm pool drainage systems and irrigation infrastructure',
          'Power outages during storms can leave your home without climate control for hours or days',
          'Lightning strikes can damage electronics, surge protectors, and even cause fires',
        ]
      },
      {
        type: 'heading',
        text: 'What a Professional Home Watch Visit Catches'
      },
      {
        type: 'paragraph',
        text: 'During a typical summer home watch visit in North Scottsdale, John inspects over 50 points throughout your property. But the most critical summer-specific checks are often the ones that save homeowners the most money.'
      },
      {
        type: 'paragraph',
        text: 'A refrigerator that stopped working in June will have created a biohazard by July. A slow leak under a bathroom sink, undetected for three months, will have rotted the subfloor. A pool chemical imbalance left unaddressed will turn the water into a green, algae-filled pond that costs thousands to remediate.'
      },
      {
        type: 'paragraph',
        text: 'These aren\'t dramatic worst-case scenarios — they\'re regular occurrences in vacant North Scottsdale homes. The difference between a homeowner who catches them early and one who discovers them in October comes down to one thing: regular, professional eyes on the property.'
      },
      {
        type: 'heading',
        text: 'Before You Leave This Summer'
      },
      {
        type: 'list',
        items: [
          'Set your thermostat no higher than 82°F — higher settings risk mold and appliance damage',
          'Have your HVAC serviced before departure; a failed system in summer heat is an emergency',
          'Check all window and door seals for gaps that could allow monsoon rain or dust entry',
          'Set your water heater to "vacation mode" but don\'t turn it off completely',
          'Arrange for regular pool service and home watch visits throughout your absence',
          'Review your homeowner\'s insurance policy for vacancy clause requirements',
        ]
      },
      {
        type: 'paragraph',
        text: 'Your North Scottsdale home is likely your most valuable asset. A few hundred dollars in professional home watch visits over the summer is the most cost-effective insurance you can buy against the thousands — or tens of thousands — in damage that can accumulate in an unmonitored vacant home.'
      },
      {
        type: 'heading',
        text: 'The Costs Nobody Talks About'
      },
      {
        type: 'paragraph',
        text: `Let's talk real numbers. A burst pipe discovered immediately causes a few hundred dollars in damage. The same pipe discovered three months later — after soaking into subfloor, drywall, and cabinetry — routinely runs $15,000 to $50,000 in remediation costs. Mold remediation in an Arizona home that's been sealed up in summer heat can exceed $30,000 and requires full evacuation of the home during treatment.`
      },
      {
        type: 'paragraph',
        text: `Pool neglect is another silent budget killer. A properly maintained pool costs around $100–150 per month to service. An algae-overtaken pool that's been neglected for a full summer can require draining, acid washing, and replastering — a bill that can easily reach $5,000 to $10,000. And that's before you factor in any equipment damage from running pumps on chemically imbalanced water.`
      },
      {
        type: 'paragraph',
        text: `Then there's the HVAC. A unit that fails in June and sits off for four months in Arizona heat doesn't just need repair — it often needs full replacement, since the extreme heat degrades refrigerant seals and compressor components rapidly. Emergency HVAC replacement in summer, when every technician in the Valley is booked solid, runs $8,000 to $15,000 with weeks of wait time.`
      },
      {
        type: 'heading',
        text: 'What About Smart Home Devices?'
      },
      {
        type: 'paragraph',
        text: 'Many homeowners feel reassured by smart thermostats, leak sensors, and security cameras — and these are genuinely valuable tools. But technology has limits that are especially relevant in an Arizona summer.'
      },
      {
        type: 'paragraph',
        text: `Smart devices depend on power and internet connectivity. A storm that knocks out power for 18 hours also disables every sensor in your home — precisely when conditions are most dangerous. A router that overheats and reboots during a power surge takes all your connected devices offline with it. And a leak sensor that detects moisture will send you an alert, but it can't turn off the water, call a plumber, or assess whether the damage is minor or catastrophic.`
      },
      {
        type: 'paragraph',
        text: 'Technology is an excellent complement to professional home watch visits — not a replacement for them. The combination of weekly human eyes plus smart device monitoring gives you the most comprehensive protection available.'
      },
      {
        type: 'heading',
        text: 'A Week-by-Week Summer Timeline'
      },
      {
        type: 'paragraph',
        text: `Here's what typically happens inside a vacant North Scottsdale home over a typical summer, and what professional monitoring catches at each stage:`
      },
      {
        type: 'list',
        items: [
          `Weeks 1–2: Minor issues surface — a slow drip, a pest entry point, a thermostat acting up. Caught early, these cost almost nothing to fix.`,
          `Weeks 3–4: Monsoon season begins. First major storms test every seal, drain, and roof flashing on your property.`,
          `Month 2: Interior humidity climbs with monsoon activity. Mold spores begin colonizing in damp, warm spaces if HVAC isn't maintaining proper humidity levels.`,
          `Month 3: Any unaddressed moisture issues are now structural. Pest infestations — especially roof rats and scorpions — are well established in vacant homes.`,
          `Month 4+: A home without regular visits has typically accumulated 3–5 issues that, left unaddressed until October, will require significant remediation.`,
        ]
      },
      {
        type: 'heading',
        text: 'The Bottom Line'
      },
      {
        type: 'paragraph',
        text: 'North Scottsdale is one of the most desirable — and most climatically demanding — places to own a home in the United States. The same desert environment that makes it beautiful creates real and consistent risks for vacant properties every summer.'
      },
      {
        type: 'paragraph',
        text: `The homeowners who come back in October to find their property exactly as they left it — cool, clean, and ready — aren't lucky. They're the ones who arranged for someone they trusted to check in regularly while they were away. That's exactly what professional home watch is for.`
      },
    ],
    relatedIds: [2, 3, 5],
  },
  {
    id: 2,
    slug: 'insurance-vacancy-clause',
    category: 'Insurance & Legal',
    title: 'The Vacancy Clause Your Insurance Policy Has — And Why It Matters',
    excerpt: 'Most homeowner policies have a clause that voids coverage after 30–60 days of vacancy. Learn what it means and how home watch protects you.',
    date: 'February 14, 2026',
    readTime: '5 min read',
    image: '/watch-article-2.jpg',
    featured: false,
    relatedIds: [1, 4, 7],
    content: [],
  },
  {
    id: 3,
    slug: 'monsoon-season-prep',
    category: 'Storm & Weather',
    title: 'Monsoon Season in Scottsdale: How to Prepare Your Home Before You Leave',
    excerpt: 'Arizona monsoon season runs June through September. Here\'s your complete pre-departure checklist.',
    date: 'February 8, 2026',
    readTime: '7 min read',
    image: '/watch-article-3.jpg',
    featured: false,
    relatedIds: [1, 5, 6],
    content: [],
  },
  {
    id: 4,
    slug: 'home-watch-vs-neighbor-check',
    category: 'How to Work with a Home Watch Company',
    title: 'Why Asking Your Neighbor to Check on Your Home Isn\'t Enough',
    excerpt: 'Neighbors are wonderful — but they\'re not trained to spot a failing water heater, pest infestation, or HVAC issue.',
    date: 'February 1, 2026',
    readTime: '4 min read',
    image: '/watch-article-4.jpg',
    featured: false,
    relatedIds: [2, 6, 7],
    content: [],
  },
  {
    id: 5,
    slug: 'security-while-traveling',
    category: 'Security',
    title: '8 Ways to Make Your Vacant Home Look Occupied While You Travel',
    excerpt: 'An empty home is an invitation. These practical strategies — combined with regular professional visits — are the most effective deterrents.',
    date: 'January 24, 2026',
    readTime: '5 min read',
    image: '/watch-article-5.jpg',
    featured: false,
    relatedIds: [1, 3, 4],
    content: [],
  },
  {
    id: 6,
    slug: 'pre-arrival-home-prep',
    category: 'Travel Tips',
    title: 'How to Arrive Home to a House That\'s Ready for You',
    excerpt: 'There\'s nothing worse than returning from a long trip to a warm, stuffy house with an empty fridge and packages outside.',
    date: 'January 17, 2026',
    readTime: '4 min read',
    image: '/watch-article-6.jpg',
    featured: false,
    relatedIds: [1, 4, 7],
    content: [],
  },
  {
    id: 7,
    slug: 'hvac-vacant-home',
    category: 'Home Maintenance',
    title: 'What Temperature Should You Set Your Thermostat When Your Home Is Empty?',
    excerpt: 'Too low and you\'re wasting money. Too high and you risk warped wood, mold, and appliance failures.',
    date: 'January 10, 2026',
    readTime: '5 min read',
    image: '/watch-article-7.jpg',
    featured: false,
    relatedIds: [1, 2, 3],
    content: [],
  },
]

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug) || articles[0]
  const related = articles.filter(a => article.relatedIds?.includes(a.id))

  return (
    <div className="bg-white min-h-screen">

      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-6 pt-14 pb-8">
        {/* Back link and category row */}
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/the-watch"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-blue transition-colors"
          >
            ← Back to The Watch
          </Link>
          <span
            className="inline-block text-sm font-bold uppercase tracking-wider"
            style={{ color: categoryColors[article.category] || '#1E5BA8' }}
          >
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-10">
          <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xs">J</div>
          <span className="font-medium text-gray-700">By John</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 mb-14">
        <div className="rounded-2xl overflow-hidden h-72 md:h-96 bg-gray-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        {article.content.length > 0 ? (
          <div className="prose prose-lg max-w-none">
            {article.content.map((block, idx) => {
              if (block.type === 'intro') return (
                <p key={idx} className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
                  {block.text}
                </p>
              )
              if (block.type === 'heading') return (
                <h2 key={idx} className="text-2xl font-bold text-brand-blue mt-12 mb-4">
                  {block.text}
                </h2>
              )
              if (block.type === 'paragraph') return (
                <p key={idx} className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {block.text}
                </p>
              )
              if (block.type === 'list') return (
                <ul key={idx} className="my-6 space-y-3">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-lg">
                      <span className="text-brand-gold font-bold mt-1 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
              return null
            })}
          </div>
        ) : (
          <p className="text-gray-400 italic text-center py-20">Full article coming soon.</p>
        )}

        {/* Article CTA */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">Protect Your Home</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Have questions about your property?</h3>
          <p className="text-gray-600 mb-6">John is happy to answer questions personally — no sales pitch, just honest advice.</p>
          <Link
            to="/contact"
            className="inline-block bg-brand-blue text-white font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Continue Reading */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-8">Continue Reading</p>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map(a => (
                <Link
                  key={a.id}
                  to={`/the-watch/${a.slug}`}
                  className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-44 bg-gray-100 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span
                      className="text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: categoryColors[a.category] || '#1E5BA8' }}
                    >
                      {a.category}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-brand-blue transition-colors flex-grow">
                      {a.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                      <span>{a.date}</span>
                      <span>•</span>
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}