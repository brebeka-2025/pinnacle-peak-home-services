import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles'

const CLUSTER_IDS = [9, 11, 13, 15, 30]

const stats = [
  { number: '1–2x', label: 'Per week visit frequency' },
  { number: '20+', label: 'Systems checked every visit' },
  { number: '24hr', label: 'Report delivered same day' },
]

const toc = [
  { num: '01', text: 'What Home Watch Actually Is', anchor: '#what-it-is' },
  { num: '02', text: 'What a Visit Covers', anchor: '#what-a-visit-covers' },
  { num: '03', text: 'What a Professional Report Looks Like', anchor: '#reports' },
  { num: '04', text: 'NHWA Certification — Why It Matters', anchor: '#nhwa' },
  { num: '05', text: 'How to Hire the Right Company', anchor: '#hiring' },
  { num: '06', text: 'How to Onboard Your Provider', anchor: '#onboarding' },
  { num: '07', text: 'What Home Watch Is Not', anchor: '#what-it-is-not' },
  { num: '08', text: 'Deep Dive Articles', anchor: '#articles' },
]

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
        <meta property="og:image" content="https://pinnaclepeakhomeservices.com/guide-what-is-home-watch-hero.jpg" />
      </Helmet>

      {/* Full-Bleed Hero */}
      <section
        className="relative text-white flex items-end"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%), url(/guide-what-is-home-watch-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          minHeight: '520px',
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 pt-12 w-full">
          <Link
            to="/the-watch"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            ← Back to The Watch
          </Link>
          <div className="mb-5">
            <span className="inline-block bg-brand-gold text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded">
              Complete Guide · 5 Articles
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            What Is Professional Home Watch?
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            The term covers everything from a neighbor with a key to a certified professional with a documented inspection protocol. For a luxury property in one of the most demanding climates in the country, the difference matters enormously.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-white/60">
            <span>By John, NHWA Certified</span>
            <span>·</span>
            <span>16 min read</span>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-brand-blue text-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-3 gap-8 divide-x divide-white/20">
            {stats.map((s, i) => (
              <div key={i} className={`text-center ${i > 0 ? 'pl-8' : ''}`}>
                <p className="text-4xl font-bold text-brand-gold mb-1">{s.number}</p>
                <p className="text-sm text-blue-200 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="border-b border-gray-200 bg-gray-50 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">In This Guide</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
            {toc.map(item => (
              <a
                key={item.num}
                href={item.anchor}
                className="flex items-center gap-3 text-gray-700 hover:text-brand-blue transition-colors group py-1 border-b border-gray-100"
              >
                <span className="text-brand-gold font-bold text-sm w-7 flex-shrink-0">{item.num}</span>
                <span className="text-sm group-hover:underline">{item.text}</span>
                <span className="ml-auto text-gray-300 group-hover:text-brand-blue transition-colors text-xs">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-6 py-16">

        {/* What It Is */}
        <div id="what-it-is" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Home Watch Actually Is</h2>
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Professional home watch is a monitoring and early-detection service for vacant or seasonally unoccupied properties. At its core, it is a trained professional conducting systematic, documented physical inspections of your home on a regular schedule — typically every one to two weeks — and reporting what they find.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                That definition sounds simple, but it covers an enormous amount of ground. A professional home watch visit isn't a drive-by or a casual check-in. It is a methodical interior and exterior inspection of every accessible area of the property, conducted against a consistent checklist, documented with timestamped photographs, and delivered to the homeowner in a written report the same day.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The value isn't in any single visit. It's in the pattern — the consistent, unbroken record of professional oversight that catches problems at the stage when they're still inexpensive to address, before small issues become serious ones and before insurance carriers start asking questions about the monitoring gap.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/watch-article-9.jpg" alt="Professional home watch inspection" className="w-full h-64 object-cover" />
              </div>
              <blockquote className="mt-6 border-l-4 border-brand-gold pl-5">
                <p className="text-gray-700 italic leading-relaxed text-base">
                  "Home watch isn't a luxury service. It's a risk management tool for people who understand what happens to an unmonitored property over five months of a North Scottsdale summer."
                </p>
                <footer className="mt-3 text-sm text-gray-400">— John, Pinnacle Peak Home Services</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* What a Visit Covers */}
        <div id="what-a-visit-covers" className="mb-20">
          <div className="rounded-2xl overflow-hidden mb-10 relative" style={{ height: '240px' }}>
            <img src="/watch-article-11.jpg" alt="Home watch inspection checklist" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10">
              <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Section 01</span>
                <h2 className="text-3xl font-bold text-white mt-2">What a Visit Covers</h2>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            A professional home watch visit covers significantly more ground than most homeowners expect. The inspection is divided into exterior and interior components, each with its own checklist assessed, documented, and noted if anything has changed since the previous visit.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">Exterior Inspection</p>
              <ul className="space-y-2">
                {[
                  'Full perimeter walk — structure, roofline, foundation, drainage',
                  'Roof condition — tile shifts, lifted flashing, debris',
                  'Exterior walls — stucco condition, cracks, moisture signs',
                  'Windows and doors — seals, frames, hardware, entry signs',
                  'Pool and spa — clarity, chemistry, equipment, debris',
                  'Outdoor living areas — patio covers, outdoor kitchens, furniture',
                  'Landscaping and irrigation — failures, tree hazards, drainage',
                  'AC units — operation, debris clearance, pest activity',
                  'Mail, packages, and deliveries',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-brand-blue font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">Interior Inspection</p>
              <ul className="space-y-2">
                {[
                  'All rooms — ceilings, walls, floors for moisture or damage',
                  'HVAC — operation, filter condition, thermostat, condensate',
                  'Plumbing — under sinks, toilets, water heater, supply lines',
                  'Kitchen — appliances, under-sink cabinet, refrigerator',
                  'Bathrooms — fixtures, caulking, grout, moisture indicators',
                  'Security system — armed status, panel, sensor indicators',
                  'Electrical panel — no tripped breakers, no heat or burn smell',
                  'Garage interior — pest activity, stored items, vehicle',
                  'Guest casita or secondary structures if applicable',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-brand-blue font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Reports */}
        <div id="reports" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What a Professional Report Looks Like</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The inspection report is the tangible deliverable of every home watch visit — and it's what separates a professional service from any informal alternative. A professional report is not a text message saying "everything looks fine." It is a structured, dated document that covers every item on the inspection checklist, notes anything that has changed or warrants attention, and includes photographs of the property's current condition.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Every report should include the date and time of the visit, the inspector's name and credentials, the property address, a section-by-section accounting of what was inspected and what was found, photographs of anything notable, and a clear summary of any items requiring attention and the recommended response.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">Not a Professional Report</p>
              <ul className="space-y-2">
                {[
                  '"Everything looks fine" text message',
                  'No photographs',
                  'No date or time stamp',
                  'No inspector credentials listed',
                  'No itemized checklist',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-3">A Professional Report</p>
              <ul className="space-y-2">
                {[
                  'Structured written document delivered same day',
                  'Timestamped photographs of key systems',
                  'Inspector name and NHWA credentials listed',
                  'Section-by-section inspection accounting',
                  'Clear action items with recommended response',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Reports are typically delivered by email the same day as the visit. They should be retained for the entire season — they are your documentation trail for insurance purposes and your evidence that the property was being professionally monitored if a claim is ever disputed.
          </p>
        </div>

        {/* NHWA */}
        <div id="nhwa" className="mb-20">
          <div className="rounded-2xl overflow-hidden mb-10 relative" style={{ height: '240px' }}>
            <img src="/watch-article-13.jpg" alt="NHWA certification home watch" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10">
              <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Section 02</span>
                <h2 className="text-3xl font-bold text-white mt-2">NHWA Certification — Why It Matters</h2>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The National Home Watch Association (NHWA) is the industry's primary credentialing body. NHWA certification is the clearest signal available to homeowners that a provider has met a defined professional standard — not self-declared, but verified by an independent organization whose purpose is establishing and maintaining that standard.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            To become a certified NHWA member, a home watch professional must carry proper bonding and insurance specifically structured for the home watch context. They must pass a comprehensive examination covering property inspection procedures, documentation standards, emergency response protocols, and professional ethics. They must operate under the NHWA's code of conduct and maintain their certification through continuing education.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The certification doesn't guarantee a perfect professional — no credential does. But it establishes a baseline of preparation, accountability, and professional seriousness that an uncertified provider cannot claim.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">What to Verify Before Hiring</p>
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
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hiring */}
        <div id="hiring" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">How to Hire the Right Company</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The home watch industry has no licensing requirement in most states, which means the barrier to entry is low and the quality range is wide. Anyone can call themselves a home watch professional. The questions you ask during the hiring process are what separate a provider you can trust with a multi-million dollar property from one you're simply hoping will do the right thing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Start with credentials — NHWA certification, bonding, and insurance. These are verifiable and non-negotiable. A provider who hesitates or can't immediately produce certificates of insurance and bonding is telling you something important about how they operate.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Ask about the inspection protocol — specifically, what gets checked on every visit, how findings are documented, and what the report looks like. Ask for a sample. Ask what happens when something urgent is found at 7am on a Saturday. Ask how they handle vendor coordination for repairs and maintenance items.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Finally, pay attention to how the conversation itself goes. A home watch professional who is genuinely invested in earning your trust will ask good questions about your property — about your vendors, your alarm system, your preferences, the specific areas you're most concerned about. The quality of their questions is a reliable signal about the quality of their inspections.
          </p>
        </div>

        {/* Onboarding */}
        <div id="onboarding" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">How to Onboard Your Provider</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The onboarding walkthrough is the foundation of every effective home watch relationship. This is the in-person meeting where you walk the property with your provider, cover every system, share every quirk, and establish the protocols that will govern the entire season. The quality of this conversation determines the quality of every visit that follows.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Schedule it at least a week before departure — not the day you're leaving. A rushed onboarding produces incomplete information, and incomplete information produces missed findings.
          </p>

          <div className="space-y-4 my-8">
            {[
              { title: 'Systems & Shutoffs', body: 'Location of every shutoff — water main, individual fixture shutoffs, gas, electrical panel. HVAC systems and any known quirks or service history. Pool automation system and irrigation controllers.' },
              { title: 'Security & Access', body: 'Security system arming and disarming procedures, gate access codes, alarm contacts. Who specifically will be entering your home and whether anyone other than the owner will ever have access.' },
              { title: 'Vendor Relationships', body: 'Pool service, landscaper, HVAC contractor, pest control — contact information for each. Your preferred vendors for repairs and what the response protocol is when something needs attention.' },
              { title: 'Authorization Thresholds', body: 'What is the provider authorized to coordinate directly without contacting you, and at what dollar level or severity does something require your explicit approval? Documenting these thresholds ensures urgent issues are handled without delay.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What It Is Not */}
        <div id="what-it-is-not" className="mb-12">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Home Watch Is Not</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Professional home watch is a monitoring and early-detection service. It is not a property management company, a concierge service, or a home repair operation. Understanding the distinction matters for setting appropriate expectations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A home watch professional identifies issues and coordinates the appropriate response — they don't perform the trades work themselves. When the inspection reveals an HVAC issue, the home watch professional flags it, photographs it, reports it, and connects you with the right contractor.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Home watch is also not a substitute for your existing service relationships. Your pool service handles chemistry and equipment maintenance. Your landscaper handles ongoing grounds care. Your pest control handles scheduled treatments. Home watch works alongside all of these — it's the oversight layer that ensures each of those services is performing as expected.
          </p>

          <div className="rounded-2xl overflow-hidden my-8">
            <div className="bg-brand-blue text-white p-8">
              <p className="text-xl font-semibold leading-relaxed">
                Your pool service keeps the water clean. Your landscaper keeps the grounds maintained. Your home watch professional makes sure both are actually happening — and catches everything else that none of your individual vendors are specifically watching for.
              </p>
              <p className="text-blue-300 text-sm mt-4">— John, Pinnacle Peak Home Services</p>
            </div>
          </div>
        </div>

      </article>

      {/* CTA Band */}
      <section
        className="relative text-white py-20 px-6 text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/guide-what-is-home-watch-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-4">NHWA Certified · Bonded & Insured</p>
          <h3 className="text-4xl font-bold mb-4">See what professional home watch looks like for your property.</h3>
          <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
            John is glad to walk you through exactly what a visit covers, what the reports look like, and what a program for your specific home would include.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-gold text-white font-bold px-10 py-4 rounded-lg hover:bg-opacity-90 transition-colors text-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Deep Dive Articles */}
      <section id="articles" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Deep Dive Articles</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Explore Every Aspect of This Topic</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clusterArticles.map(a => (
              <Link
                key={a.id}
                to={`/the-watch/${a.slug}`}
                className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-36 bg-gray-100 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="text-sm font-bold text-gray-900 leading-snug mb-3 group-hover:text-brand-blue transition-colors flex-grow">
                    {a.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto pt-3 border-t border-gray-100">
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