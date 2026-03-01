import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles'

// Cluster article IDs for this pillar
const CLUSTER_IDS = [3, 4, 25, 26, 27, 28, 29]

const categoryColors = {
  'Seasonal Tips': '#1E5BA8',
  'Storm & Weather': '#2563eb',
  'Insurance & Legal': '#c48b47',
  'Home Maintenance': '#1E5BA8',
  'Security': '#c48b47',
  'Travel Tips': '#1E5BA8',
  'How to Work with a Home Watch Company': '#c48b47',
}

export default function GuideArizonaClimate() {
  const clusterArticles = articles.filter(a => CLUSTER_IDS.includes(a.id))

  return (
    <div className="bg-white min-h-screen">

      <Helmet>
        <title>Arizona Climate Risks for Vacant Homes: The Complete Guide | Pinnacle Peak Home Services</title>
        <meta name="description" content="Heat, monsoons, and dust storms cause serious damage to vacant luxury homes in North Scottsdale every summer. Here's what each threat does — and how professional home watch prevents it." />
        <link rel="canonical" href="https://pinnaclepeakhomeservices.com/guides/arizona-climate-risks" />
        <meta property="og:title" content="Arizona Climate Risks for Vacant Homes: The Complete Guide" />
        <meta property="og:description" content="Heat, monsoons, and dust storms cause serious damage to vacant luxury homes in North Scottsdale every summer. Here's what each threat does — and how professional home watch prevents it." />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero */}
      <section className="bg-brand-blue text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/the-watch"
            className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors mb-6"
          >
            ← Back to The Watch
          </Link>
          <div className="mb-6">
            <div className="inline-block bg-brand-gold text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              Complete Guide
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Arizona Climate Risks for Vacant Homes
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
            North Scottsdale delivers three distinct climate threats every summer — heat, monsoons, and dust storms. Each one has its own timeline, its own damage profile, and its own way of finding the weak points in a home that nobody is watching.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-blue-200">
            <span>By John Sherrill, NHWA Certified</span>
            <span>•</span>
            <span>20 min read</span>
            <span>•</span>
            <span>7 articles in this guide</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="border-b border-gray-200 bg-gray-50 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">In This Guide</p>
          <div className="grid grid-rows-4 grid-flow-col md:grid-cols-2 gap-3">
            {[
              { num: '01', text: 'Why Arizona\'s Climate Is Different', anchor: '#why-different' },
              { num: '02', text: 'Threat One: Extreme Heat', anchor: '#heat' },
              { num: '03', text: 'Threat Two: Monsoon Season', anchor: '#monsoon' },
              { num: '04', text: 'Threat Three: Haboobs and Dust Storms', anchor: '#haboobs' },
              { num: '05', text: 'How the Threats Compound Each Other', anchor: '#compounding' },
              { num: '06', text: 'What Professional Home Watch Prevents', anchor: '#prevention' },
              { num: '07', text: 'Deep Dive Articles', anchor: '#articles' },
            ].map(item => (
              <a
                key={item.num}
                href={item.anchor}
                className="flex items-center gap-3 text-gray-700 hover:text-brand-blue transition-colors group"
              >
                <span className="text-brand-gold font-bold text-sm w-6">{item.num}</span>
                <span className="text-sm group-hover:underline">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        {/* Why Different */}
        <div id="why-different" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Arizona's Climate Is Different</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Most second-home markets in the United States have a predictable seasonal rhythm. Coastal properties face humidity and salt air. Mountain properties face freeze-thaw cycles and snow load. These are real risks, but they're relatively well understood, and homeowners in those markets have developed intuitions about what their properties need.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            North Scottsdale is different in a way that catches even experienced property owners off guard. The Sonoran Desert doesn't deliver one sustained threat — it delivers three distinct ones in rapid succession, each with its own character, and all of them concentrated in the same five-month window when seasonal homeowners are most likely to be away.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            From roughly May through September, a vacant property in North Scottsdale faces months of sustained extreme heat followed by an intense storm season that brings both water and wind damage, punctuated by haboobs — massive dust storms that can reduce visibility to zero and infiltrate a home through every unsealed gap. The homeowners who come back in October to a property in good condition aren't the lucky ones. They're the prepared ones.
          </p>
          <div className="bg-blue-50 border-l-4 border-brand-blue rounded-r-xl p-6 my-8">
            <p className="text-brand-blue font-semibold text-lg leading-relaxed">
              "The risks don't take turns. Heat weakens the systems that monsoons then stress. Dust storms compromise the seals that rain then penetrates. Understanding each threat separately is the starting point — understanding how they interact is what actually protects your home."
            </p>
            <p className="text-sm text-gray-500 mt-3">— John Sherrill, Pinnacle Peak Home Services</p>
          </div>
        </div>

        {/* Heat */}
        <div id="heat" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">01</div>
            <h2 className="text-3xl font-bold text-brand-blue">Threat One: Extreme Heat</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The Phoenix metro area logs an average of 110 days above 100°F every year. In North Scottsdale's higher elevations — the communities above 2,000 feet like Desert Mountain and parts of Troon — temperatures are marginally cooler, but the thermal stress on building materials remains significant. South- and west-facing exterior walls reach surface temperatures above 150°F. Attic spaces without premium ventilation can exceed the rated tolerance of standard roofing materials.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            For an occupied home, extreme heat is uncomfortable. For a vacant one, it's structural. The sustained thermal load of a North Scottsdale summer works on every component of a home simultaneously — not dramatically, but persistently, and the cumulative effect across three to four months of absence is significant.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">What Heat Does to Your HVAC</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Your HVAC system is the first and most consequential casualty of an Arizona summer. A unit working to maintain 83°F against 112°F outside is running near its operational limit every afternoon for three months straight. If the air filter hasn't been recently replaced, if refrigerant is even slightly low, or if a capacitor is aging, the sustained stress of a desert summer will find that weakness.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            When an HVAC unit fails in August — which it often does on the hottest day of the year — interior temperatures can spike to 130°F or higher within hours. At that temperature, wood cabinetry warps, caulking around windows and fixtures separates, electronics are damaged, wine collections are destroyed, and fine art or antiques can suffer permanent harm. The failure itself is often a $400 capacitor replacement. The consequential damage from an undetected failure is measured in tens of thousands of dollars.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">What Heat Does to the Structure</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Beyond the HVAC, sustained heat degrades roofing materials faster than in moderate climates — tile adhesion weakens, underlayment dries and cracks, and flashing expands and contracts through daily thermal cycles that gradually work every seal loose. Exterior caulking around windows, doors, and penetrations dries and cracks under UV exposure, creating water entry points that won't become apparent until the monsoon rains arrive.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Pest populations — scorpions, roof rats, and cockroaches — expand dramatically in summer heat and seek cooler refuge inside walls and attic spaces. In a vacant home, an infestation that would be noticed and addressed within days in an occupied home can establish itself over weeks or months, causing damage that goes well beyond the cost of pest control.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-3">Key Prevention Steps</p>
            <ul className="space-y-2">
              {[
                'Schedule HVAC service in April or early May — before the rush, before the heat',
                'Set thermostat no higher than 82–84°F with fan on "auto" to keep air circulating',
                'Replace filters before departure and document the service date',
                'Inspect and reseal exterior caulking around all windows and door frames',
                'Have a professional check the property within 48 hours of an extreme heat advisory',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Monsoon */}
        <div id="monsoon" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">02</div>
            <h2 className="text-3xl font-bold text-brand-blue">Threat Two: Monsoon Season</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            From roughly late June through mid-September, Arizona enters its official monsoon season — a period of dramatically increased moisture, afternoon and evening thunderstorms, and intense localized rainfall. For people who picture a desert as permanently dry, monsoon season is genuinely surprising. For homeowners with vacant properties, it can be genuinely costly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Arizona homes are designed for a dry climate, and that design works well eleven months of the year. But monsoon storms deliver intense rainfall in short windows — two inches of rain in under an hour is not unusual — and the water has to go somewhere. If roof drainage is partially blocked by debris, if a window or door seal has dried and cracked in the June heat, or if the grading around the foundation has shifted, water finds its way in.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Water Intrusion and Mold</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Pooling water on flat roof sections, moisture intrusion into wall cavities, and water seeping under exterior doors are all common monsoon findings in North Scottsdale homes. Left unaddressed for even a week, standing moisture in an enclosed, climate-controlled space creates conditions for mold growth — particularly behind cabinets, under flooring, and within drywall. Mold can begin colonizing within 24 to 48 hours in the right conditions. A North Scottsdale home in August provides exactly those conditions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The remediation costs for established mold run well into five figures and are frequently disputed by insurers if the source wasn't promptly reported. A water intrusion that's caught within 24 hours is a drying job. The same intrusion discovered six weeks later is a remediation project involving demo, mold treatment, drywall replacement, and paint — with an insurance adjuster asking why it wasn't reported sooner.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Physical Storm Damage</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Monsoon storms arrive with wind gusts that routinely exceed 60 miles per hour ahead of the rain. The Sonoran Desert grows large, architecturally dramatic trees — palo verdes, mesquites, desert willows — that are beautiful in calm weather and genuinely dangerous in high winds. A mature palo verde can come down on a roof, a pool enclosure, or a parked vehicle in under a second.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Even trees that don't fall cause damage. Heavy limbs shear off and land on patio covers, outdoor kitchens, and AC units. Unsecured patio furniture becomes a projectile. Lifted roof tiles, compromised flashing, and cracked stucco create water entry points for the rain that follows within minutes. Physical storm damage and water damage aren't separate events — one creates the conditions for the other.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-3">Key Prevention Steps</p>
            <ul className="space-y-2">
              {[
                'Clear all gutters and roof drains of debris before monsoon season begins',
                'Trim back any tree branches overhanging the roof, pool, or AC unit',
                'Secure or store all patio furniture and lightweight outdoor items',
                'Lower pool water level slightly to accommodate heavy rainfall',
                'Have the property inspected within 24 hours of every significant storm event',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Haboobs */}
        <div id="haboobs" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">03</div>
            <h2 className="text-3xl font-bold text-brand-blue">Threat Three: Haboobs and Dust Storms</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A haboob is a massive dust storm generated by the collapsing outflow of a thunderstorm system. They can reach 5,000 feet in height, travel at 50 miles per hour, and arrive with almost no warning. A clear afternoon can become a complete brownout in under ten minutes. If you've seen the time-lapse videos of a wall of dust swallowing the Phoenix skyline, you've seen what North Scottsdale property owners learn to watch for every summer.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The damage profile of a haboob is different from heat or rain but no less significant. The fine silica dust that fills the air during these events infiltrates homes through every unsealed gap — around window frames, through attic vents, under door sweeps, through recessed lighting fixtures. A single significant haboob can deposit a visible layer of fine dust throughout an entire home's interior.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            For a standard home, that means a thorough cleaning. For a luxury property with fine furniture, art, collectibles, and high-end finishes, it means something more involved. Abrasive silica dust settles into electronics, damages HVAC filters and coils, and can permanently scratch polished stone surfaces if not removed correctly. Pool equipment takes on significant additional load as filters work overtime to clear the water.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The secondary risk is what a haboob leaves behind: downed landscape trees and unsecured outdoor items that can impact the structure, compromised gutters and drainage channels that then underperform in the rain that often follows within hours.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-3">Key Prevention Steps</p>
            <ul className="space-y-2">
              {[
                'Inspect and reseal attic vents, door sweeps, and window frame gaps before summer',
                'Confirm pool service provider has a post-haboob response protocol',
                'Have HVAC filters checked and replaced promptly after a major dust event',
                'Inspect polished stone surfaces and electronics after significant haboobs',
                'Walk the property exterior after every major event to assess debris and structural impact',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compounding */}
        <div id="compounding" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">How the Threats Compound Each Other</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The most important thing to understand about Arizona's summer climate threats is that they don't operate independently. They occur in sequence, and each one creates the conditions that make the next one more damaging.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The heat arrives first and spends weeks drying and cracking every seal, gasket, and caulk line in the structure. The exterior caulking around your windows — fine in April — has contracted and cracked by July. The flashing at your roof penetrations has expanded and contracted through dozens of thermal cycles. Your HVAC system has been running near its limit for six weeks.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Then the monsoon arrives. The rain finds every crack the heat created. The wind finds every piece of outdoor furniture that wasn't secured. And the HVAC system that was already stressed gets an additional load from the humidity that follows the storm. If it fails now, the moisture from the storm has nowhere to go.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The haboob compounds both. Dust infiltrates through the gaps the heat created. It loads the HVAC filters that were already working hard. It settles into the pool water that's already chemistry-stressed from the monsoon rain. And then — typically within hours — another monsoon storm arrives, and the drainage channels that should handle the rainfall are partially blocked by the debris the haboob left behind.
          </p>
          <div className="bg-brand-blue text-white rounded-xl p-8 my-8">
            <p className="text-lg font-semibold leading-relaxed">
              A home watch professional visiting your property every one to two weeks through the summer isn't catching isolated events. They're monitoring a system under continuous, compounding stress — and catching each failure at the stage when it's still inexpensive to address.
            </p>
          </div>
        </div>

        {/* Prevention */}
        <div id="prevention" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Professional Home Watch Prevents</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Every risk described in this guide shares a common characteristic: it gets worse the longer it goes undetected. An HVAC failure caught within 24 hours is a service call. Caught after three weeks, it's structural damage to cabinetry, flooring, and finishes. Water intrusion caught the morning after a storm is a drying job. Found six weeks later, it's mold remediation and a complicated insurance claim.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Time is the variable that turns manageable problems into serious ones. Professional home watch compresses the detection window — for every category of risk, in every weather condition — from weeks or months to hours.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A certified home watch professional visiting your North Scottsdale property on a regular schedule through the summer months does what no smart home system, neighbor, or property manager substitute can replicate: a systematic, trained, physical inspection of every interior and exterior system, documented with timestamped photographs, delivered to you the same day — every visit, every weather event, all season long.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            That documentation also matters for your insurance carrier. When a claim is filed on a property that has been professionally monitored, with written inspection reports spanning the entire vacancy period, the adjuster's question about whether the home was being adequately maintained has a clear, documented answer. That answer is the difference between a claim that pays and one that doesn't.
          </p>
        </div>

      </section>

      {/* CTA Band */}
      <section className="bg-gray-50 border-t border-b border-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">Protect Your Property</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to protect your home through Arizona's summer?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            John Sherrill is NHWA-certified and monitors homes in Pinnacle Peak, DC Ranch, Desert Mountain, and Silverleaf. A quick conversation before you leave is all it takes to get a plan in place.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-blue text-white font-bold px-10 py-4 rounded-lg hover:bg-opacity-90 transition-colors text-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Deep Dive Articles */}
      <section id="articles" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Deep Dive Articles</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Explore Every Aspect of This Topic</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {clusterArticles.map(a => (
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

    </div>
  )
}