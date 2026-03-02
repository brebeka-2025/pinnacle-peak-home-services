import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles'

const CLUSTER_IDS = [16, 17, 18, 23]

const stats = [
  { number: '$1.5M+', label: 'Typical listing price range' },
  { number: '5mo', label: 'Unmonitored vacancy exposure' },
  { number: '100%', label: 'Inspection findings addressable proactively' },
]

const toc = [
  { num: '01', text: 'What Buyers in This Market Notice', anchor: '#what-buyers-notice' },
  { num: '02', text: 'How Vacancy Affects Sale Price', anchor: '#vacancy-sale-price' },
  { num: '03', text: 'The Listing Agent\'s Exposure', anchor: '#listing-agent' },
  { num: '04', text: 'How Home Watch Protects a Listing', anchor: '#protects-listing' },
  { num: '05', text: 'The Realtor Partnership Model', anchor: '#realtor-partnership' },
  { num: '06', text: 'Documentation as a Sales Asset', anchor: '#documentation' },
  { num: '07', text: 'The Unique Challenges of the Scottsdale Market', anchor: '#scottsdale-market' },
  { num: '08', text: 'Deep Dive Articles', anchor: '#articles' },
]

export default function GuideRealEstate() {
  const clusterArticles = articles.filter(a => CLUSTER_IDS.includes(a.id))

  return (
    <div className="bg-white min-h-screen">

      <Helmet>
        <title>Home Watch and Luxury Real Estate in North Scottsdale | Pinnacle Peak Home Services</title>
        <meta name="description" content="How professional home watch protects listing value, supports luxury realtors, and helps North Scottsdale properties sell faster. A guide for homeowners and real estate professionals." />
        <link rel="canonical" href="https://pinnaclepeakhomeservices.com/guides/home-watch-real-estate" />
        <meta property="og:title" content="Home Watch and Luxury Real Estate in North Scottsdale" />
        <meta property="og:description" content="How professional home watch protects listing value, supports luxury realtors, and helps North Scottsdale properties sell faster. A guide for homeowners and real estate professionals." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pinnaclepeakhomeservices.com/guide-real-estate-hero.jpg" />
      </Helmet>

      {/* Full-Bleed Hero */}
      <section
        className="relative text-white flex items-end"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.70) 100%), url(/guide-real-estate-hero.jpg)',
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
            Home Watch and Luxury Real Estate
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            A vacant luxury listing is a professional risk as much as a business opportunity. Here's how professional home watch protects property value, supports listing agents, and helps North Scottsdale homes sell faster — and for more.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-white/60">
            <span>By John, NHWA Certified</span>
            <span>·</span>
            <span>16 min read</span>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-brand-gold text-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-3 gap-8 divide-x divide-white/20">
            {stats.map((s, i) => (
              <div key={i} className={`text-center ${i > 0 ? 'pl-8' : ''}`}>
                <p className="text-4xl font-bold text-white mb-1">{s.number}</p>
                <p className="text-sm text-white/70 leading-snug">{s.label}</p>
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
                <span className="ml-auto text-gray-300 group-hover:text-brand-gold transition-colors text-xs">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-6 py-16">

        {/* What Buyers Notice */}
        <div id="what-buyers-notice" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Buyers in This Market Notice</h2>
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Buyers in the $1.5 million to $5 million range in North Scottsdale arrive at every showing with a highly calibrated ability to detect when a property hasn't been properly maintained. They've seen enough homes to read a room accurately. They notice deferred maintenance. They notice odors. They notice the subtle signs of a home that has been sitting unattended — and they price their offers accordingly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                The signs aren't always obvious. A slightly dusty smell from an HVAC filter that hasn't been changed. A pool that's a shade cloudier than it should be. A crack in the stucco near the roofline that nobody has addressed. None of these are catastrophic. All of them contribute to a composite impression that the property hasn't been actively cared for — and in the luxury market, that impression has a dollar value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The buyers most likely to purchase at or above asking price are the ones who walk through a property and feel that it has been watched over. That feeling is not accidental. It is the result of consistent professional oversight across the entire vacancy period.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/watch-article-16.jpg" alt="Luxury home buyer showing" className="w-full h-64 object-cover" />
              </div>
              <blockquote className="mt-6 border-l-4 border-brand-gold pl-5">
                <p className="text-gray-700 italic leading-relaxed text-base">
                  "A monitored property shows differently than an unmonitored one — not dramatically, but in the hundred small ways that add up to the buyer's overall impression."
                </p>
                <footer className="mt-3 text-sm text-gray-400">— John, Pinnacle Peak Home Services</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Vacancy and Sale Price */}
        <div id="vacancy-sale-price" className="mb-20">
          <div className="rounded-2xl overflow-hidden mb-10 relative" style={{ height: '240px' }}>
            <img src="/watch-article-17.jpg" alt="Vacant home sale price impact" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10">
              <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Section 01</span>
                <h2 className="text-3xl font-bold text-white mt-2">How Vacancy Affects Sale Price</h2>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Extended vacancy affects a property's sale price through two mechanisms — the condition gap and the inspection gap — and both are directly addressable with professional home watch.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">The Condition Gap — Unmonitored</p>
              <ul className="space-y-2">
                {[
                  'HVAC filters unchanged, system underperforming',
                  'Pool chemistry drifted, visible at showing',
                  'Minor storm damage accumulated unaddressed',
                  'Pest activity established behind walls',
                  'General impression of neglect at showing',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-3">The Condition Gap — Monitored</p>
              <ul className="space-y-2">
                {[
                  'HVAC serviced and documented pre-listing',
                  'Pool clear and showing-ready every visit',
                  'Storm damage caught and repaired same week',
                  'Pest activity treated proactively',
                  'Property presents as actively cared for',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">The Inspection Gap</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The home inspection is where the condition gap between monitored and unmonitored vacant homes becomes most financially consequential. A buyer's inspector has one job: find everything that isn't right. In a luxury home that has sat unmonitored through a North Scottsdale summer, they will find things.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Each finding triggers a negotiation. Some buyers use inspection findings as a genuine repair request. Others use them as a price reduction vehicle regardless of actual repair cost. In either case, the seller is in a reactive position — responding to findings that professional monitoring would have caught months earlier.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">What Professional Monitoring Prevents at Inspection</p>
            <ul className="space-y-2">
              {[
                'HVAC issues surfaced as findings — service history documented and current',
                'Pool condition problems visible during showing or inspection',
                'Deferred pest control findings — treated proactively during the listing period',
                'Minor storm or weather damage that accumulated unaddressed',
                'Water intrusion findings from a monsoon event during vacancy',
                'The general impression of neglect that depresses buyer confidence and offers',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Listing Agent Exposure */}
        <div id="listing-agent" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">The Listing Agent's Exposure</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A vacant luxury listing represents a specific category of professional risk that most agents don't think about explicitly until they're dealing with the consequences. The agent's name is on the sign. Their relationship with the seller — often built over years and multiple transactions — is what brought the listing. And the condition of that property during the listing period is, in the buyer's perception, partly the agent's responsibility.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A water leak discovered by a buyer's agent during a showing, before the listing agent even knows about it, is among the worst scenarios. The buyer's agent reports it. The seller hears about a problem with their property from someone other than their own agent. The trust damage from that sequence is real and difficult to recover from.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Pest evidence found during a buyer's inspection — droppings in a kitchen cabinet, a termite mud tube at a baseboard — produces findings that trigger price reduction requests and, in some cases, deal failures. Sellers want to know why these conditions weren't caught earlier. If there was no systematic oversight of the property during the listing period, there is no satisfying answer.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            A home watch partner changes this dynamic entirely. The pool problem gets caught on a Monday visit, three days after the controller failed, before any buyer sees it. The leak under the kitchen sink gets flagged in a written report the day it's discovered — the listing agent knows about it before a buyer's agent does.
          </p>
        </div>

        {/* How It Protects a Listing */}
        <div id="protects-listing" className="mb-20">
          <div className="rounded-2xl overflow-hidden mb-10 relative" style={{ height: '240px' }}>
            <img src="/watch-article-18.jpg" alt="Protected luxury listing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10">
              <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Section 02</span>
                <h2 className="text-3xl font-bold text-white mt-2">How Home Watch Protects a Listing</h2>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Professional home watch during the listing period provides a layer of oversight that no seller, agent, or smart home system can replicate. Scheduled visits every one to two weeks — with written reports and photographs — ensure that the showing condition of the property is consistent with how it was represented when the listing went live.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            For a vacant luxury listing, the practical benefits are significant. The property is in showing condition at every visit. Any issues that develop between visits are caught and addressed before a buyer's agent discovers them. The pool is clear, the HVAC is running, the exterior is well-maintained.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Post-storm inspections during monsoon season are particularly valuable for active listings. A storm that causes damage to a vacant property in August and goes unaddressed until a showing in September is a deal-risk event. The same storm, with a home watch inspection the morning after and a vendor response the same day, is a non-event.
          </p>

          <div className="rounded-2xl overflow-hidden">
            <div className="bg-brand-blue text-white p-8">
              <p className="text-xl font-semibold leading-relaxed">
                A listing with a documented home watch program attached to it is a different product than one without it. It tells every buyer's agent, every inspector, and every buyer something specific: this property has been actively cared for, and the condition you see today is the condition that has been maintained throughout.
              </p>
              <p className="text-blue-300 text-sm mt-4">— John, Pinnacle Peak Home Services</p>
            </div>
          </div>
        </div>

        {/* Realtor Partnership */}
        <div id="realtor-partnership" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">The Realtor Partnership Model</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The North Scottsdale luxury real estate market is relationship-driven at every level. Buyers in the $1.5 million to $10 million range don't choose their agent from a Zillow search. They choose based on reputation, referral, and confidence that the professional they're working with understands their specific situation at a level that goes beyond the transaction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A home watch partnership fits naturally into this relationship model. It isn't a referral arrangement — it's a client service strategy. When a listing agent introduces a trusted home watch provider to a client preparing to leave for the summer, the introduction is read as an act of genuine advocacy. It says: I've thought about what you need beyond the transaction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The agents who have formalized this relationship consistently describe the same outcomes: their clients are meaningfully better protected between transactions, and the association of their name with that protection produces the kind of loyalty that outlasts any individual sale.
          </p>

          <div className="space-y-4">
            {[
              { title: 'At the Final Walkthrough', body: 'The question of "who\'s going to look after this while we\'re away" arises organically — the natural moment to introduce a trusted home watch partner.' },
              { title: 'At Closing', body: 'As part of a post-closing resource packet, positioned as something the agent wants to make sure the buyer has addressed before their first absence.' },
              { title: 'First Week After Possession', body: 'A follow-up that positions home watch as something the agent wants to make sure the buyer has considered — part of a complete ownership transition.' },
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

        {/* Documentation as Asset */}
        <div id="documentation" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Documentation as a Sales Asset</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A seller who has maintained a professional home watch program through their ownership of a property has something that no verbal assurances can replicate: a documented record of professional oversight, consistent maintenance, and prompt response to anything that arose during the vacancy periods.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            That documentation answers the buyer's most fundamental question — "how has this home been treated?" — with something more persuasive than the seller's word. It is a stack of timestamped inspection reports showing exactly what was found on every visit, what was addressed, and when. It demonstrates that the property was not left to its own devices through multiple Arizona summers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For a listing agent presenting this documentation to a buyer's agent, it is a credibility tool. It is verifiable evidence that the property has been professionally cared for — not a seller's claim that it has been. In a market where buyer confidence is the foundation of offer quality, that evidence has real value.
          </p>
        </div>

        {/* Scottsdale Market */}
        <div id="scottsdale-market" className="mb-12">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">The Unique Challenges of the Scottsdale Market</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            North Scottsdale's luxury real estate market has characteristics that make professional home watch particularly relevant — and the absence of it particularly costly. The market is heavily seasonal, with a large proportion of buyers and sellers who are not primary Arizona residents. Properties trade at price points where condition and presentation have significant dollar consequences. And the climate delivers the most demanding weather conditions in the continental United States during the exact months when most properties are unoccupied.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The buyers who purchase in this market understand the climate. They know what happens to a vacant property through a North Scottsdale summer. When they see evidence that a seller has taken that seriously — maintained professional oversight, kept the property in continuous good condition, generated the documentation to prove it — they recognize it as a signal of how the rest of the ownership experience has been managed.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The properties that command top-of-market prices in North Scottsdale are not always the ones with the most upgrades. They are consistently the ones where a buyer walks through the door and feels that the property has been cared for by someone who took the responsibility of ownership seriously. Professional home watch is one of the most direct ways to build and document that standard of care — and to communicate it credibly to the market.
          </p>
        </div>

      </article>

      {/* CTA Band */}
      <section
        className="relative text-white py-20 px-6 text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/guide-real-estate-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-4">For Homeowners & Real Estate Professionals</p>
          <h3 className="text-4xl font-bold mb-4">Protect the value of what you're bringing to market.</h3>
          <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
            Whether you're a homeowner preparing to sell or a realtor looking to protect a listing and deepen client relationships, John is glad to talk through what a home watch program looks like for your specific situation.
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