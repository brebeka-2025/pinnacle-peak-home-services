import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles'

const CLUSTER_IDS = [7, 12, 23, 24]

const stats = [
  { number: '6wks', label: 'Preparation lead time needed' },
  { number: '5mo', label: 'Typical summer vacancy period' },
  { number: '24hr', label: 'First report after departure' },
]

const toc = [
  { num: '01', text: 'The Seasonal Homeowner\'s Reality', anchor: '#reality' },
  { num: '02', text: 'Four to Six Weeks Before Departure', anchor: '#four-to-six-weeks' },
  { num: '03', text: 'One to Two Weeks Before Departure', anchor: '#one-to-two-weeks' },
  { num: '04', text: 'Departure Day', anchor: '#departure-day' },
  { num: '05', text: 'Managing the Property While Away', anchor: '#while-away' },
  { num: '06', text: 'The Unique Challenges of Remote Ownership', anchor: '#remote-ownership' },
  { num: '07', text: 'Return Checklist', anchor: '#return' },
  { num: '08', text: 'Deep Dive Articles', anchor: '#articles' },
]

export default function GuideSeasonalHomeowner() {
  const clusterArticles = articles.filter(a => CLUSTER_IDS.includes(a.id))

  return (
    <div className="bg-white min-h-screen">

      <Helmet>
        <title>The Seasonal Homeowner's Complete Guide to Leaving Your North Scottsdale Home | Pinnacle Peak Home Services</title>
        <meta name="description" content="Everything North Scottsdale snowbirds need to do before departure, during the summer, and on return. A complete seasonal preparation roadmap for luxury homeowners." />
        <link rel="canonical" href="https://pinnaclepeakhomeservices.com/guides/seasonal-homeowner-guide" />
        <meta property="og:title" content="The Seasonal Homeowner's Complete Guide | Pinnacle Peak Home Services" />
        <meta property="og:description" content="Everything North Scottsdale snowbirds need to do before departure, during the summer, and on return. A complete seasonal preparation roadmap for luxury homeowners." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pinnaclepeakhomeservices.com/guide-seasonal-homeowner-hero.jpg" />
      </Helmet>

      {/* Full-Bleed Hero */}
      <section
        className="relative text-white flex items-end"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%), url(/guide-seasonal-homeowner-hero.jpg)',
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
              Complete Guide · 4 Articles
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            The Seasonal Homeowner's Complete Guide
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Leaving your North Scottsdale home for the summer is a process, not an event. Here's the full roadmap — what to do before you leave, how to manage the property while you're away, and what to check when you return.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-white/60">
            <span>By John, NHWA Certified</span>
            <span>·</span>
            <span>20 min read</span>
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

        {/* Reality */}
        <div id="reality" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">The Seasonal Homeowner's Reality</h2>
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                There is a specific kind of anxiety that seasonal homeowners carry through the summer — a low-grade, persistent awareness that a home they love is sitting empty in one of the most demanding climates in the country, and that they won't know if something goes wrong until it already has. They check the weather app during monsoon season. They think about the AC when they read about a heat wave.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                That anxiety is remarkably common among North Scottsdale snowbirds. And it is, almost entirely, a symptom of preparation gaps — things that weren't done before departure, oversight arrangements that weren't put in place, insurance questions that weren't answered. The homeowners who leave for the summer and genuinely don't worry aren't more carefree. They're more prepared.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This guide covers everything that goes into a clean departure and a well-managed absence — from the service appointments that need to be scheduled six weeks out to the documentation you need before you lock the door. Done right, leaving your North Scottsdale home for the summer is a process you complete with confidence.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/watch-article-24.jpg" alt="North Scottsdale seasonal homeowner" className="w-full h-64 object-cover" />
              </div>
              <blockquote className="mt-6 border-l-4 border-brand-gold pl-5">
                <p className="text-gray-700 italic leading-relaxed text-base">
                  "The homes that come through Arizona summers in good shape aren't the lucky ones. They're the ones whose owners treated departure as a process rather than an event."
                </p>
                <footer className="mt-3 text-sm text-gray-400">— John, Pinnacle Peak Home Services</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Timeline divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold whitespace-nowrap">The Departure Timeline</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        {/* Four to Six Weeks */}
        <div id="four-to-six-weeks" className="mb-20">
          <div className="rounded-2xl overflow-hidden mb-10 relative" style={{ height: '240px' }}>
            <img src="/watch-article-7.jpg" alt="Pre-departure preparation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10">
              <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Step 01</span>
                <h2 className="text-3xl font-bold text-white mt-2">Four to Six Weeks Before Departure</h2>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The tasks that matter most happen well before departure — not the day before. Scheduling service appointments, securing insurance documentation, and establishing your home watch program all require lead time. Starting six weeks out gives you the runway to do everything properly.
          </p>

          <div className="space-y-4">
            {[
              {
                title: 'HVAC Service',
                body: 'Schedule your HVAC service appointment now — not in the week before you leave. Scottsdale HVAC contractors are fully booked by late April. A unit that receives a pre-season service check — refrigerant verified, capacitors tested, coils cleaned, filters replaced — is significantly more likely to run reliably through three months of sustained extreme heat.',
              },
              {
                title: 'Insurance Review',
                body: 'Contact your insurance agent in writing and confirm your coverage status during the vacancy period. Ask specifically whether your policy has a vacancy clause, what the threshold is, and whether a professional home watch program satisfies any monitoring requirements. Get the answer in writing — a verbal assurance is not a claims document.',
              },
              {
                title: 'Home Watch Program',
                body: 'Establish the relationship and schedule the onboarding walkthrough now. The walkthrough takes an hour and needs to happen before you leave, ideally with enough time to address anything it surfaces. Don\'t schedule it for the day of departure.',
              },
              {
                title: 'Vendor Coordination',
                body: 'Confirm summer service schedules with your pool service, landscaper, and pest control. Make sure each vendor has current contact information and knows who your home watch provider is. If you haven\'t briefed your pool service on their monsoon response protocol, do that now.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
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

        {/* One to Two Weeks */}
        <div id="one-to-two-weeks" className="mb-20">
          <div className="rounded-2xl overflow-hidden mb-10 relative" style={{ height: '240px' }}>
            <img src="/watch-article-12.jpg" alt="Pre-departure home preparation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10">
              <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Step 02</span>
                <h2 className="text-3xl font-bold text-white mt-2">One to Two Weeks Before Departure</h2>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With six weeks of setup behind you, the final two weeks are about the property itself — getting every system into the right state for an extended unoccupied period.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Water System',
                items: [
                  'Locate and test the main water shutoff',
                  'Shut off water to fixtures not in use (ice maker, guest bath)',
                  'Run dishwasher and garbage disposal one final time',
                  'Check under every sink for slow drips or moisture',
                  'Flush all toilets and run all faucets',
                ],
              },
              {
                title: 'HVAC & Climate',
                items: [
                  'Set thermostat to 82–84°F, fan on "auto"',
                  'Replace air filters if not done at service appointment',
                  'Close all interior doors',
                  'Close blinds on south- and west-facing windows',
                  'Confirm smart thermostat remote access is working',
                ],
              },
              {
                title: 'Kitchen',
                items: [
                  'Empty and clean the refrigerator thoroughly',
                  'Turn off the ice maker and shut off water supply line',
                  'Empty all trash and recycling',
                  'Run garbage disposal with ice and salt',
                  'Empty pantry of anything that could spoil or attract pests',
                ],
              },
              {
                title: 'Security & Access',
                items: [
                  'Test all door and window locks',
                  'Set exterior lighting on timers or photocell sensors',
                  'Arm security system and confirm remote monitoring',
                  'Verify smart home systems are online',
                  'Provide home watch provider with key, alarm code, gate access',
                ],
              },
            ].map((section, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">{section.title}</p>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-brand-blue font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Departure Day */}
        <div id="departure-day" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Departure Day</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Departure day is not the time for major tasks — those should all be complete. The day-of checklist is a confirmation pass: a final walk through the home to verify that everything is in the state you intended.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">Final Walkthrough Checklist</p>
            <ul className="space-y-2">
              {[
                'All interior doors closed',
                'All window coverings closed on sun-facing exposures',
                'Thermostat confirmed at 82–84°F, fan on auto',
                'Security system armed',
                'Garage door fully closed — test from outside before leaving',
                'All exterior access points locked — doors, gates, pool equipment area',
                'No packages, mail, or deliverables visible from the street',
                'Home watch provider notified of departure time and first visit confirmed',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            When you've completed the walkthrough and locked the door, that should be the end of your active involvement until you receive the first home watch report — typically within 24 to 48 hours of departure. That report confirming everything looks exactly right is the clean handoff. From here, the system takes over.
          </p>
        </div>

        {/* While Away */}
        <div id="while-away" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Managing the Property While Away</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            With a professional home watch program in place, your active involvement during the summer should be minimal. You receive reports. You review them. If something requires a decision, you make it. Everything else runs on the system you established before departure.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The most important thing you can do while away is respond promptly when your home watch provider contacts you. If something requires a vendor response, delays on your end translate directly into additional damage. The value of early detection is only realized when early action follows.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Keep your contact information current with your provider. If you're traveling and won't have reliable phone access, designate a secondary contact who can make decisions on your behalf. Establish that arrangement before departure — not after your home watch provider is trying to reach you about an active water intrusion.
          </p>

          <div className="rounded-2xl overflow-hidden">
            <div className="bg-brand-blue text-white p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-3">What to Expect During Monsoon Season</p>
              <p className="text-lg font-semibold leading-relaxed">
                From late June through mid-September, expect your home watch provider to conduct additional post-storm visits after significant weather events. If your provider contacts you after a storm with findings, treat it as a priority response — a two-hour response to a post-storm report is worth more than a two-day response to the same information.
              </p>
            </div>
          </div>
        </div>

        {/* Remote Ownership */}
        <div id="remote-ownership" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">The Unique Challenges of Remote Ownership</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Owning a second home in North Scottsdale from a primary residence in Michigan, Oregon, or New York is a fundamentally different challenge than owning a local investment property. Distance amplifies every aspect of property ownership — the stakes are the same, but the ability to respond is severely limited. A problem that would take an owner 20 minutes to address in person requires a coordination project when managed from 2,000 miles away.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The seasonal residents who manage their North Scottsdale properties most successfully share a common approach: they treat remote ownership as a system to be maintained rather than a situation to be managed reactively. Vendor relationships are established before they're needed. Insurance coverage is confirmed before it's tested. A professional with local knowledge and physical presence is on the ground.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The local relationships your home watch professional maintains — with contractors, vendors, and the broader network of people who service properties in your specific neighborhood — have genuine value that isn't replicable from a distance. When a roof needs emergency tarping after a monsoon storm, the home watch professional who already has a relationship with the right roofing contractor gets a same-day response. A homeowner calling from Minnesota gets a voicemail.
          </p>
        </div>

        {/* Return */}
        <div id="return" className="mb-12">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Return Checklist</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A well-managed summer means your return should be straightforward — the property in good condition, systems running, no surprises. But a brief return walkthrough is still worth doing on arrival, both to confirm the property's condition and to transition it back into full-occupancy mode.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">Return Day Checklist</p>
            <ul className="space-y-2">
              {[
                'Walk the exterior before entering — look for anything obviously changed since the last report',
                'Check the HVAC is running and the thermostat is responding normally',
                'Run all faucets and flush all toilets — confirm water pressure and drainage',
                'Inspect under sinks and around the water heater for any moisture',
                'Check the pool equipment and water condition',
                'Reconnect the ice maker supply line and turn on the water',
                'Restock the refrigerator only after confirming it\'s at temperature',
                'Disarm security system and update any access codes if desired',
                'Review the full season\'s inspection reports — these are your property record',
                'Schedule any deferred maintenance items identified during the season',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden mt-8">
            <div className="bg-brand-blue text-white p-8">
              <p className="text-xl font-semibold leading-relaxed">
                The full season of inspection reports is a document you should retain permanently. It is the complete condition history of your property through one of Arizona's most demanding weather periods — and if you ever sell, it is exactly the kind of documentation that answers a buyer's most fundamental question about how the home has been cared for.
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/guide-seasonal-homeowner-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-4">NHWA Certified · Bonded & Insured</p>
          <h3 className="text-4xl font-bold mb-4">Ready to set up your summer protection plan?</h3>
          <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
            The earlier you start, the more complete your preparation can be. A 20-minute conversation with John before departure covers everything your property needs through the summer.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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