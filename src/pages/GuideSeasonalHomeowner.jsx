import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles'

const CLUSTER_IDS = [7, 12, 23, 24]

const categoryColors = {
  'Seasonal Tips': '#1E5BA8',
  'Storm & Weather': '#2563eb',
  'Insurance & Legal': '#c48b47',
  'Home Maintenance': '#1E5BA8',
  'Security': '#c48b47',
  'Travel Tips': '#1E5BA8',
  'How to Work with a Home Watch Company': '#c48b47',
}

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
      </Helmet>

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6"
        style={{
          background: 'linear-gradient(135deg, #1E5BA8 0%, #0f3460 100%)',
        }}
      >
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
            The Seasonal Homeowner's Complete Guide
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
            Leaving your North Scottsdale home for the summer is a process, not an event. Here's the full roadmap — what to do before you leave, how to manage the property while you're away, and what to check when you return.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-blue-300">
            <span>By John Sherrill, NHWA Certified</span>
            <span>•</span>
            <span>20 min read</span>
            <span>•</span>
            <span>4 articles in this guide</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="border-b border-gray-200 bg-gray-50 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">In This Guide</p>
          <div className="grid grid-rows-4 grid-flow-col md:grid-cols-2 gap-3">
            {[
              { num: '01', text: 'The Seasonal Homeowner\'s Reality', anchor: '#reality' },
              { num: '02', text: 'Four to Six Weeks Before Departure', anchor: '#four-to-six-weeks' },
              { num: '03', text: 'One to Two Weeks Before Departure', anchor: '#one-to-two-weeks' },
              { num: '04', text: 'Departure Day', anchor: '#departure-day' },
              { num: '05', text: 'Managing the Property While Away', anchor: '#while-away' },
              { num: '06', text: 'The Unique Challenges of Remote Ownership', anchor: '#remote-ownership' },
              { num: '07', text: 'Return Checklist', anchor: '#return' },
              { num: '08', text: 'Deep Dive Articles', anchor: '#articles' },
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

        {/* Reality */}
        <div id="reality" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">The Seasonal Homeowner's Reality</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            There is a specific kind of anxiety that seasonal homeowners carry through the summer — a low-grade, persistent awareness that a home they love is sitting empty in one of the most demanding climates in the country, and that they won't know if something goes wrong until it already has. They check the weather app during monsoon season. They think about the AC when they read about a heat wave. They wonder, for a second, whether they remembered to turn off the water to the ice maker.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            That anxiety is remarkably common among North Scottsdale snowbirds. And it is, almost entirely, a symptom of preparation gaps — things that weren't done before departure, oversight arrangements that weren't put in place, insurance questions that weren't answered. The homeowners who leave for the summer and genuinely don't worry aren't more carefree. They're more prepared.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            This guide covers everything that goes into a clean departure and a well-managed absence — from the service appointments that need to be scheduled six weeks out to the documentation you need to have in place before you lock the door. Done right, leaving your North Scottsdale home for the summer is a process you complete with confidence, not a situation you manage with anxiety.
          </p>
          <div className="bg-blue-50 border-l-4 border-brand-blue rounded-r-xl p-6 my-8">
            <p className="text-brand-blue font-semibold text-lg leading-relaxed">
              "The homes that come through Arizona summers in good shape aren't the lucky ones. They're the ones whose owners treated departure as a process rather than an event."
            </p>
            <p className="text-sm text-gray-500 mt-3">— John Sherrill, Pinnacle Peak Home Services</p>
          </div>
        </div>

        {/* Four to Six Weeks */}
        <div id="four-to-six-weeks" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">01</div>
            <h2 className="text-3xl font-bold text-brand-blue">Four to Six Weeks Before Departure</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The tasks that matter most happen well before departure — not the day before. Scheduling service appointments, securing insurance documentation, and establishing your home watch program all require lead time. Starting six weeks out gives you the runway to do everything properly.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">HVAC Service</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Schedule your HVAC service appointment now — not in the week before you leave. Scottsdale HVAC contractors are fully booked by late April as the entire market prepares for summer. A unit that receives a pre-season service check — refrigerant verified, capacitors tested, coils cleaned, filters replaced — is significantly more likely to run reliably through three months of sustained extreme heat than one that doesn't. If a capacitor is aging or refrigerant is low, find out before departure, not when the unit fails in August.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Insurance Review</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Contact your insurance agent in writing and confirm your coverage status during the vacancy period. Ask specifically whether your policy has a vacancy clause, what the threshold is, and whether a professional home watch program satisfies any monitoring requirements. Get the answer in writing — a verbal assurance is not a claims document. If a vacancy endorsement is recommended, obtain it before departure.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Home Watch Program</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            If you're using a professional home watch service — and for a property like yours, you should be — establish the relationship and schedule the onboarding walkthrough now. The walkthrough takes an hour and needs to happen before you leave, ideally with enough time to address anything it surfaces. Don't schedule it for the day of departure.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Vendor Coordination</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Confirm summer service schedules with your pool service, landscaper, and pest control. Make sure each vendor has current contact information and knows who your home watch provider is. If you haven't briefed your pool service on their monsoon response protocol — what they do after a major storm event, whether they add an unscheduled visit — do that now.
          </p>
        </div>

        {/* One to Two Weeks */}
        <div id="one-to-two-weeks" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">02</div>
            <h2 className="text-3xl font-bold text-brand-blue">One to Two Weeks Before Departure</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            With six weeks of setup behind you, the final two weeks are about the property itself — getting every system into the right state for an extended unoccupied period and completing the room-by-room checklist that ensures nothing is left in a condition that will cause problems.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Water System</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
            <ul className="space-y-2">
              {[
                'Locate and test the main water shutoff — know where it is and that it works',
                'Consider shutting off water to individual fixtures not in use (ice maker, guest bath)',
                'Run the dishwasher and garbage disposal one final time',
                'Check under every sink for any slow drips or moisture — address before leaving',
                'Flush all toilets and run all faucets to confirm normal operation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-blue font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">HVAC and Climate</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
            <ul className="space-y-2">
              {[
                'Set thermostat to 82–84°F with fan on "auto" — not "off" and not higher than 85°F',
                'Replace air filters if not done at the service appointment',
                'Close all interior doors to help HVAC maintain consistent temperature',
                'Close blinds and window coverings on south- and west-facing windows',
                'Confirm smart thermostat remote access is working from your phone',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-blue font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Kitchen</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
            <ul className="space-y-2">
              {[
                'Empty and unplug the refrigerator, or set to a holding temperature if leaving it running',
                'Clean the refrigerator thoroughly before departure — a sealed unit with food residue invites mold',
                'Turn off the ice maker and shut off the water supply line to it',
                'Empty all trash and recycling — no organic material left anywhere in the home',
                'Run the garbage disposal with ice and salt to clean and deodorize',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-blue font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Security and Access</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
            <ul className="space-y-2">
              {[
                'Test all door and window locks — replace any that are not fully functional',
                'Set exterior lighting on timers or photocell sensors — avoid "always on" or "always off"',
                'Arm security system and confirm remote monitoring is active',
                'Verify all smart home systems — cameras, sensors, thermostat — are online',
                'Provide your home watch provider with key, alarm code, and gate access',
                'Remove or store any high-value items visible from windows or entry points',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-blue font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Departure Day */}
        <div id="departure-day" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">03</div>
            <h2 className="text-3xl font-bold text-brand-blue">Departure Day</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Departure day is not the time for major tasks — those should all be complete. The day-of checklist is a confirmation pass: a final walk through the home to verify that everything is in the state you intended, not to start tasks you should have finished a week ago.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-3">Final Walkthrough Checklist</p>
            <ul className="space-y-2">
              {[
                'All interior doors closed',
                'All window coverings closed on sun-facing exposures',
                'Thermostat confirmed at 82–84°F, fan on auto',
                'Security system armed',
                'Garage door fully closed — test from outside before leaving',
                'All exterior access points locked — doors, gates, pool equipment area',
                'No packages, mail, or deliverables visible from the street',
                'Home watch provider notified of your departure time and first scheduled visit confirmed',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            When you've completed the walkthrough and locked the door, that should be the end of your active involvement until you receive the first home watch report — typically within 24 to 48 hours of departure. That report confirming everything looks exactly right is the clean handoff. From here, the system takes over.
          </p>
        </div>

        {/* While Away */}
        <div id="while-away" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">04</div>
            <h2 className="text-3xl font-bold text-brand-blue">Managing the Property While Away</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            With a professional home watch program in place, your active involvement during the summer should be minimal. You receive reports. You review them. If something requires a decision, you make it. Everything else runs on the system you established before departure.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The most important thing you can do while away is respond promptly when your home watch provider contacts you. If something requires a vendor response — a repair, a service call, a contractor assessment — delays on your end translate directly into additional damage. The value of early detection is only realized when early action follows.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Keep your contact information current with your provider. If you're traveling and won't have reliable phone access, designate a secondary contact who can make decisions on your behalf. Establish that arrangement before departure — not after your home watch provider is trying to reach you about an active water intrusion.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">What to Expect During Monsoon Season</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            From late June through mid-September, expect your home watch provider to conduct additional post-storm visits after significant weather events. These are above and beyond the regular visit schedule and are specifically focused on storm damage assessment — roof, exterior, drainage, pool, and any structural concerns.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If your provider contacts you after a storm with findings, treat it as a priority response. The window between a storm event and a damage assessment is the critical period — the faster a contractor can be engaged, the less the damage compounds. A two-hour response to a post-storm report is worth more than a two-day response to the same information.
          </p>
        </div>

        {/* Remote Ownership */}
        <div id="remote-ownership" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">05</div>
            <h2 className="text-3xl font-bold text-brand-blue">The Unique Challenges of Remote Ownership</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Owning a second home in North Scottsdale from a primary residence in Michigan, Oregon, or New York is a fundamentally different challenge than owning a local investment property. Distance amplifies every aspect of property ownership — the stakes are the same, but the ability to respond is severely limited. A problem that would take an owner 20 minutes to address in person requires a coordination project when managed from 2,000 miles away.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The seasonal residents who manage their North Scottsdale properties most successfully share a common approach: they treat remote ownership as a system to be maintained rather than a situation to be managed reactively. Vendor relationships are established before they're needed. Insurance coverage is confirmed before it's tested. A professional with local knowledge and physical presence is on the ground, watching the property and acting as the owner's eyes, ears, and first responder.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The distance also means that the local relationships your home watch professional maintains — with contractors, vendors, and the broader network of people who service properties in your specific neighborhood — have genuine value that isn't replicable from a distance. When a roof needs emergency tarping after a monsoon storm, the home watch professional who already has a relationship with the right roofing contractor gets a same-day response. A homeowner calling from Minnesota gets a voicemail.
          </p>
        </div>

        {/* Return */}
        <div id="return" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Return Checklist</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A well-managed summer means your return should be straightforward — the property in good condition, systems running, no surprises. But a brief return walkthrough is still worth doing on arrival, both to confirm the property's condition and to transition it back into full-occupancy mode.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-3">Return Day Checklist</p>
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-blue text-white rounded-xl p-8 my-8">
            <p className="text-lg font-semibold leading-relaxed">
              The full season of inspection reports is a document you should retain permanently. It is the complete condition history of your property through one of Arizona's most demanding weather periods — and if you ever sell, it is exactly the kind of documentation that answers a buyer's most fundamental question about how the home has been cared for.
            </p>
          </div>
        </div>

      </section>

      {/* CTA Band */}
      <section className="bg-gray-50 border-t border-b border-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">Plan Before You Leave</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to set up your summer protection plan?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The earlier you start, the more complete your preparation can be. A 20-minute conversation with John before departure covers everything your property needs through the summer.
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