import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles'

const CLUSTER_IDS = [9, 11, 13, 15, 30]

const categoryColors = {
  'Seasonal Tips': '#1E5BA8',
  'Storm & Weather': '#2563eb',
  'Insurance & Legal': '#c48b47',
  'Home Maintenance': '#1E5BA8',
  'Security': '#c48b47',
  'Travel Tips': '#1E5BA8',
  'How to Work with a Home Watch Company': '#c48b47',
}

export default function GuideWhatIsHomeWatch() {
  const clusterArticles = articles.filter(a => CLUSTER_IDS.includes(a.id))

  return (
    <div className="bg-white min-h-screen">

      <Helmet>
        <title>What Is Professional Home Watch? A Complete Guide | Pinnacle Peak Home Services</title>
        <meta name="description" content="Home watch means different things to different providers. Here's what a certified professional actually does, what to look for when hiring, and what separates genuine oversight from a neighbor with a key." />
        <link rel="canonical" href="https://pinnaclepeakhomeservices.com/guides/what-is-home-watch" />
        <meta property="og:title" content="What Is Professional Home Watch? A Complete Guide" />
        <meta property="og:description" content="Home watch means different things to different providers. Here's what a certified professional actually does, what to look for when hiring, and what separates genuine oversight from a neighbor with a key." />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/the-watch"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
          >
            ← Back to The Watch
          </Link>
          <div className="mb-6">
            <div className="inline-block bg-brand-blue text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              Complete Guide
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            What Is Professional Home Watch?
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            The term covers everything from a neighbor with a key to a certified professional with a documented inspection protocol. The difference matters — especially for a luxury property in one of the most demanding climates in the country.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
            <span>By John Sherrill, NHWA Certified</span>
            <span>•</span>
            <span>16 min read</span>
            <span>•</span>
            <span>5 articles in this guide</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="border-b border-gray-200 bg-gray-50 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">In This Guide</p>
          <div className="grid grid-rows-4 grid-flow-col md:grid-cols-2 gap-3">
            {[
              { num: '01', text: 'What Home Watch Actually Is', anchor: '#what-it-is' },
              { num: '02', text: 'What a Visit Covers', anchor: '#what-a-visit-covers' },
              { num: '03', text: 'What a Professional Report Looks Like', anchor: '#reports' },
              { num: '04', text: 'NHWA Certification — Why It Matters', anchor: '#nhwa' },
              { num: '05', text: 'How to Hire the Right Company', anchor: '#hiring' },
              { num: '06', text: 'How to Onboard Your Provider', anchor: '#onboarding' },
              { num: '07', text: 'What Home Watch Is Not', anchor: '#what-it-is-not' },
              { num: '08', text: 'Deep Dive Articles', anchor: '#articles' },
            ].map(item => (
              <a
                key={item.num}
                href={item.anchor}
                className="flex items-center gap-3 text-gray-700 hover:text-brand-blue transition-colors group"
              >
                <span className="text-brand-blue font-bold text-sm w-6">{item.num}</span>
                <span className="text-sm group-hover:underline">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        {/* What It Is */}
        <div id="what-it-is" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Home Watch Actually Is</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Professional home watch is a monitoring and early-detection service for vacant or seasonally unoccupied properties. At its core, it is a trained professional conducting systematic, documented physical inspections of your home on a regular schedule — typically every one to two weeks — and reporting what they find.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            That definition sounds simple, but it covers an enormous amount of ground. A professional home watch visit isn't a drive-by or a casual check-in. It is a methodical interior and exterior inspection of every accessible area of the property, conducted against a consistent checklist, documented with timestamped photographs, and delivered to the homeowner in a written report the same day.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The value isn't in any single visit. It's in the pattern — the consistent, unbroken record of professional oversight that catches problems at the stage when they're still inexpensive to address, before small issues become serious ones and before insurance carriers start asking questions about the monitoring gap.
          </p>
          <div className="bg-blue-50 border-l-4 border-brand-blue rounded-r-xl p-6 my-8">
            <p className="text-brand-blue font-semibold text-lg leading-relaxed">
              "Home watch isn't a luxury service for people who want white-glove treatment. It's a risk management tool for people who understand what happens to an unmonitored property over five months of a North Scottsdale summer."
            </p>
            <p className="text-sm text-gray-500 mt-3">— John Sherrill, Pinnacle Peak Home Services</p>
          </div>
        </div>

        {/* What a Visit Covers */}
        <div id="what-a-visit-covers" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">01</div>
            <h2 className="text-3xl font-bold text-brand-blue">What a Visit Covers</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A professional home watch visit covers significantly more ground than most homeowners expect. The inspection is divided into exterior and interior components, each with its own checklist of items that are assessed, documented, and noted if anything has changed since the previous visit.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Exterior Inspection</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
            <ul className="space-y-2">
              {[
                'Full perimeter walk — structure, roofline, foundation, and drainage',
                'Roof condition — visible tile shifts, lifted flashing, debris accumulation',
                'Exterior walls — stucco condition, cracks, signs of moisture intrusion',
                'Windows and doors — seals, frames, hardware, signs of attempted entry',
                'Garage doors — operation, seals, and structural condition',
                'Pool and spa — water clarity, chemistry indicators, equipment operation, debris',
                'Outdoor living areas — patio covers, outdoor kitchens, furniture, storm damage',
                'Landscaping and irrigation — obvious failures, tree hazards, drainage issues',
                'AC units — operation, debris clearance, signs of damage or pest activity',
                'Mail, packages, and deliveries — presence and removal',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-blue font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Interior Inspection</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
            <ul className="space-y-2">
              {[
                'All rooms — ceilings, walls, floors, and baseboards for signs of moisture or damage',
                'HVAC — operation, filter condition, thermostat settings, condensate drainage',
                'Plumbing — under sinks, around toilets, water heater, visible supply lines',
                'Kitchen — appliances, under-sink cabinet, refrigerator operation if running',
                'Bathrooms — all fixtures, caulking, grout, and moisture indicators',
                'Windows and sliding doors — hardware, seals, operation',
                'Security system — armed status, panel condition, sensor indicators',
                'Electrical panel — no tripped breakers, no signs of heat or burning smell',
                'Garage interior — pest activity, stored items, vehicle if present',
                'Guest casita or secondary structures if applicable',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-blue font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            For properties with additional structures — guest casitas, detached garages, sport courts, wine cellars — the inspection scope expands accordingly. The onboarding walkthrough at the start of the service relationship establishes the full scope for your specific property.
          </p>
        </div>

        {/* Reports */}
        <div id="reports" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">02</div>
            <h2 className="text-3xl font-bold text-brand-blue">What a Professional Report Looks Like</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The inspection report is the tangible deliverable of every home watch visit — and it's what separates a professional service from any informal alternative. A professional report is not a text message saying "everything looks fine." It is a structured, dated document that covers every item on the inspection checklist, notes anything that has changed or warrants attention, and includes photographs of the property's current condition.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Every report should include the date and time of the visit, the inspector's name and credentials, the property address, a section-by-section accounting of what was inspected and what was found, photographs of anything notable (and photographs confirming normal condition of key systems), and a clear summary of any items requiring attention and the recommended response.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Reports are typically delivered by email the same day as the visit. They should be retained for the entire season — they are your documentation trail for insurance purposes and your evidence that the property was being professionally monitored if a claim is ever disputed.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When evaluating a home watch provider, ask to see a sample report before you sign anything. The detail level, photography, and organization of that report tells you exactly what standard of documentation you'll receive for your property.
          </p>
        </div>

        {/* NHWA */}
        <div id="nhwa" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">03</div>
            <h2 className="text-3xl font-bold text-brand-blue">NHWA Certification — Why It Matters</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The National Home Watch Association (NHWA) is the industry's primary credentialing body. NHWA certification is the clearest signal available to homeowners that a provider has met a defined professional standard — not self-declared, but verified by an independent organization whose purpose is establishing and maintaining that standard.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            To become a certified NHWA member, a home watch professional must carry proper bonding and insurance specifically structured for the home watch context — including the exposure that comes with regular unsupervised property access. They must pass a comprehensive examination covering property inspection procedures, documentation standards, emergency response protocols, and professional ethics. They must operate under the NHWA's code of conduct and maintain their certification through continuing education.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            What this means in practical terms is that a certified NHWA member has been vetted against a defined standard by a body that exists specifically to establish that standard. The certification doesn't guarantee a perfect professional — no credential does. But it establishes a baseline of preparation, accountability, and professional seriousness that an uncertified provider cannot claim.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-3">What to Verify Before Hiring</p>
            <ul className="space-y-2">
              {[
                'Current NHWA certification — ask for the member number and verify at nhwa.net',
                'General liability insurance — minimum $1 million coverage',
                'Bonding — a surety bond that covers theft and dishonest acts',
                'Errors and omissions coverage — protects you if something is missed',
                'Sample inspection report — review before signing',
                'References from current clients in your neighborhood or community',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hiring */}
        <div id="hiring" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">04</div>
            <h2 className="text-3xl font-bold text-brand-blue">How to Hire the Right Company</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The home watch industry has no licensing requirement in most states, which means the barrier to entry is low and the quality range is wide. Anyone can call themselves a home watch professional. The questions you ask during the hiring process are what separate a provider you can trust with a multi-million dollar property from one you're simply hoping will do the right thing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Start with credentials — NHWA certification, bonding, and insurance. These are verifiable and non-negotiable. A provider who hesitates or can't immediately produce certificates of insurance and bonding is telling you something important about how they operate.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Ask about the inspection protocol — specifically, what gets checked on every visit, how findings are documented, and what the report looks like. Ask for a sample. Ask what happens when something urgent is found at 7am on a Saturday. Ask how they handle vendor coordination for repairs and maintenance items. Ask who specifically will be entering your home and whether anyone other than the owner will have access.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Finally, pay attention to how the conversation itself goes. A home watch professional who is genuinely invested in earning your trust will ask good questions about your property — about your vendors, your alarm system, your preferences, the specific areas you're most concerned about. The quality of their questions is a reliable signal about the quality of their inspections.
          </p>
        </div>

        {/* Onboarding */}
        <div id="onboarding" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">05</div>
            <h2 className="text-3xl font-bold text-brand-blue">How to Onboard Your Provider</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The onboarding walkthrough is the foundation of every effective home watch relationship. This is the in-person meeting where you walk the property with your provider, cover every system, share every quirk, and establish the protocols that will govern the entire season. The quality of this conversation determines the quality of every visit that follows.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Schedule it at least a week before departure — not the day you're leaving. A rushed onboarding produces incomplete information, and incomplete information produces missed findings. Give yourself and your provider enough time to do it properly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The walkthrough should cover the location of every shutoff — water main, individual fixture shutoffs, gas, electrical panel. It should cover HVAC systems and any known quirks or service history. It should cover the pool automation system, irrigation controllers, security system arming and disarming procedures, and gate access. It should cover your vendor relationships — pool service, landscaper, HVAC contractor, pest control — with contact information for each.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Establish authorization thresholds during the walkthrough: what is the provider authorized to coordinate directly without contacting you first, and at what dollar level or severity does something require your explicit approval? Documenting these thresholds ensures that when something urgent is found on a Saturday morning, the provider knows exactly what they're authorized to do and can act without delay.
          </p>
        </div>

        {/* What It Is Not */}
        <div id="what-it-is-not" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Home Watch Is Not</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Professional home watch is a monitoring and early-detection service. It is not a property management company, a concierge service, or a home repair operation. Understanding the distinction matters for setting appropriate expectations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A home watch professional identifies issues and coordinates the appropriate response — they don't perform the trades work themselves. When the inspection reveals an HVAC issue, the home watch professional flags it, photographs it, reports it, and connects you with the right contractor. The repair is the contractor's work. The detection, documentation, and coordination are the home watch professional's.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Home watch is also not a substitute for your existing service relationships. Your pool service handles chemistry and equipment maintenance. Your landscaper handles ongoing grounds care. Your pest control handles scheduled treatments. Home watch works alongside all of these — it's the oversight layer that ensures each of those services is performing as expected and catches anything that falls between their scheduled visits.
          </p>
          <div className="bg-brand-blue text-white rounded-xl p-8 my-8">
            <p className="text-lg font-semibold leading-relaxed">
              Think of it this way: your pool service keeps the water clean. Your landscaper keeps the grounds maintained. Your home watch professional makes sure both are actually happening — and catches everything else that none of your individual vendors are specifically watching for.
            </p>
          </div>
        </div>

      </section>

      {/* CTA Band */}
      <section className="bg-gray-50 border-t border-b border-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">NHWA Certified · Bonded & Insured</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">See what professional home watch looks like for your property.</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            John is glad to walk you through exactly what a visit covers, what the reports look like, and what a program for your specific home would include.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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