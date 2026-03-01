import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles'

const CLUSTER_IDS = [16, 17, 18, 23]

const categoryColors = {
  'Seasonal Tips': '#1E5BA8',
  'Storm & Weather': '#2563eb',
  'Insurance & Legal': '#c48b47',
  'Home Maintenance': '#1E5BA8',
  'Security': '#c48b47',
  'Travel Tips': '#1E5BA8',
  'How to Work with a Home Watch Company': '#c48b47',
}

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
      </Helmet>

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6"
        style={{
          background: 'linear-gradient(135deg, #0f3460 0%, #1E5BA8 50%, #c48b47 100%)',
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
            <div className="inline-block bg-white text-brand-blue text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              Complete Guide
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Home Watch and Luxury Real Estate
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
            A vacant luxury listing is a professional risk as much as a business opportunity. Here's how professional home watch protects property value, supports listing agents, and helps North Scottsdale homes sell faster — and for more.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-blue-200">
            <span>By John Sherrill, NHWA Certified</span>
            <span>•</span>
            <span>16 min read</span>
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
              { num: '01', text: 'What Buyers in This Market Notice', anchor: '#what-buyers-notice' },
              { num: '02', text: 'How Vacancy Affects Sale Price', anchor: '#vacancy-sale-price' },
              { num: '03', text: 'The Listing Agent\'s Exposure', anchor: '#listing-agent' },
              { num: '04', text: 'How Home Watch Protects a Listing', anchor: '#protects-listing' },
              { num: '05', text: 'The Realtor Partnership Model', anchor: '#realtor-partnership' },
              { num: '06', text: 'Documentation as a Sales Asset', anchor: '#documentation' },
              { num: '07', text: 'The Unique Challenges of the Scottsdale Market', anchor: '#scottsdale-market' },
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

        {/* What Buyers Notice */}
        <div id="what-buyers-notice" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Buyers in This Market Notice</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Buyers in the $1.5 million to $5 million range in North Scottsdale arrive at every showing with a highly calibrated ability to detect when a property hasn't been properly maintained. They've seen enough homes to read a room accurately. They notice deferred maintenance. They notice odors. They notice the subtle signs of a home that has been sitting unattended — and they price their offers accordingly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The signs aren't always obvious. A slightly dusty smell from an HVAC filter that hasn't been changed. A pool that's a shade cloudier than it should be. A crack in the stucco near the roofline that nobody has addressed. A patio cover with a waterline on it from last monsoon season. None of these are catastrophic. All of them contribute to a composite impression that the property hasn't been actively cared for — and in the luxury market, that impression has a dollar value.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The buyers most likely to purchase at or above asking price are the ones who walk through a property and feel that it has been watched over — that someone with attention and care has been maintaining it to the same standard the seller lived in it. That feeling is not accidental. It is the result of consistent professional oversight across the entire vacancy period.
          </p>
          <div className="bg-blue-50 border-l-4 border-brand-blue rounded-r-xl p-6 my-8">
            <p className="text-brand-blue font-semibold text-lg leading-relaxed">
              "A monitored property shows differently than an unmonitored one — not dramatically, but in the hundred small ways that add up to the buyer's overall impression of how the home has been treated."
            </p>
            <p className="text-sm text-gray-500 mt-3">— John Sherrill, Pinnacle Peak Home Services</p>
          </div>
        </div>

        {/* Vacancy and Sale Price */}
        <div id="vacancy-sale-price" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">01</div>
            <h2 className="text-3xl font-bold text-brand-blue">How Vacancy Affects Sale Price</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Extended vacancy affects a property's sale price through two mechanisms — the condition gap and the inspection gap — and both are directly addressable with professional home watch.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Condition Gap</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A home that has sat unmonitored through a North Scottsdale summer arrives at the market in a measurably different condition than one that has been professionally watched. HVAC filters that haven't been changed, pool chemistry that has drifted, minor storm damage that was never addressed, pest activity that established itself behind a garage wall — these accumulate quietly during an unmonitored vacancy and present themselves during showings, inspections, and appraisals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Buyers and their agents see the condition gap as a discount justification. Every deferred maintenance item on an inspection report is a line item in a price reduction request. In a market where luxury homes trade on the quality of finishes and the sense that a property has been loved, the condition gap is a real and quantifiable cost.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Inspection Gap</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The home inspection is where the condition gap between monitored and unmonitored vacant homes becomes most financially consequential. A buyer's inspector has one job: find everything that isn't right. In a luxury home that has sat unmonitored through a North Scottsdale summer, they will find things — because things accumulate in vacant homes in this climate, and inspectors in this market are experienced and thorough.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Each finding triggers a negotiation. Some buyers use inspection findings as a genuine repair request. Others use them as a price reduction vehicle regardless of the actual repair cost. In either case, the seller is in a reactive position — responding to findings that professional monitoring would have caught and addressed months earlier, at a fraction of the negotiating leverage they now represent.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-3">What Professional Monitoring Prevents at Inspection</p>
            <ul className="space-y-2">
              {[
                'HVAC issues surfaced as findings — service history documented and current',
                'Pool condition problems visible during showing or inspection',
                'Deferred pest control findings — treated proactively during the listing period',
                'Minor storm or weather damage that accumulated unaddressed',
                'Water intrusion findings from a monsoon event that occurred during vacancy',
                'The general impression of neglect that depresses buyer confidence and offers',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Listing Agent Exposure */}
        <div id="listing-agent" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">02</div>
            <h2 className="text-3xl font-bold text-brand-blue">The Listing Agent's Exposure</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A vacant luxury listing represents a specific category of professional risk that most agents don't think about explicitly until they're dealing with the consequences. The agent's name is on the sign. Their relationship with the seller — often built over years and multiple transactions — is what brought the listing. And the condition of that property during the listing period is, in the buyer's perception, partly the agent's responsibility.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A water leak discovered by a buyer's agent during a showing, before the listing agent even knows about it, is among the worst scenarios. The buyer's agent reports it. The seller hears about a problem with their property from someone other than their own agent. The trust damage from that sequence is real and difficult to recover from — regardless of whether the listing agent had any practical way to prevent the leak itself.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Pest evidence found during a buyer's inspection — droppings in a kitchen cabinet, a termite mud tube at a baseboard, signs of roof rat activity in the garage — produces findings that trigger price reduction requests and, in some cases, deal failures. Sellers want to know why these conditions weren't caught earlier. If there was no systematic oversight of the property during the listing period, there is no satisfying answer.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            A home watch partner changes this dynamic entirely. The pool problem gets caught on a Monday visit, three days after the controller failed, before any buyer sees it. The leak under the kitchen sink gets flagged in a written report the day it's discovered — the listing agent knows about it before a buyer's agent does. The pest activity in the garage is addressed during the listing period, not surfaced for the first time on an inspection report.
          </p>
        </div>

        {/* How It Protects a Listing */}
        <div id="protects-listing" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">03</div>
            <h2 className="text-3xl font-bold text-brand-blue">How Home Watch Protects a Listing</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Professional home watch during the listing period provides a layer of oversight that no seller, agent, or smart home system can replicate. Scheduled visits every one to two weeks — with written reports and photographs — ensure that the showing condition of the property is consistent with how it was represented when the listing went live.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            For a vacant luxury listing, the practical benefits are significant. The property is clean and in showing condition at every visit. Any issues that develop between visits are caught and addressed before a buyer's agent discovers them. The pool is clear, the HVAC is running, the exterior is well-maintained. The showing experience matches the listing presentation — which is the foundation of buyer confidence and offer quality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Post-storm inspections during monsoon season are particularly valuable for active listings. A storm that causes damage to a vacant property in August — and goes unaddressed until a showing in September — is a deal-risk event. The same storm, with a home watch inspection the morning after and a vendor response the same day, is a non-event.
          </p>

          <div className="bg-brand-blue text-white rounded-xl p-8 my-8">
            <p className="text-lg font-semibold leading-relaxed">
              A listing with a documented home watch program attached to it is a different product than one without it. It tells every buyer's agent, every inspector, and every buyer something specific: this property has been actively cared for, the seller has taken the oversight of this asset seriously, and the condition you see today is the condition that has been maintained throughout.
            </p>
          </div>
        </div>

        {/* Realtor Partnership */}
        <div id="realtor-partnership" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">04</div>
            <h2 className="text-3xl font-bold text-brand-blue">The Realtor Partnership Model</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The North Scottsdale luxury real estate market is relationship-driven at every level. Buyers in the $1.5 million to $10 million range don't choose their agent from a Zillow search. They choose based on reputation, referral, and confidence that the professional they're working with understands their specific situation at a level that goes well beyond the transaction itself.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A home watch partnership fits naturally into this relationship model. It isn't a referral arrangement — it's a client service strategy. When a listing agent introduces a trusted home watch provider to a client who is preparing to leave for the summer, or who has just closed on a second home they'll occupy seasonally, the introduction is read as an act of genuine advocacy. It says: I've thought about what you need beyond the transaction, and here's something that matters for the long-term health of your property.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The timing of the introduction matters. The most natural moments are during the final walkthrough, when the question of "who's going to look after this while we're away" arises organically; at closing, as part of a post-closing resource packet; or in the first week after possession, in a follow-up that positions it as something the agent wants to make sure the buyer has addressed.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The agents who have formalized this relationship consistently describe the same outcomes: their clients are meaningfully better protected between transactions, and the association of their name with that protection produces the kind of loyalty that outlasts any individual sale. The referral that comes from a client who credits their agent with recommending home watch — and whose property came through three Arizona summers without incident — is a different quality of referral than one that came from a yard sign.
          </p>
        </div>

        {/* Documentation as Asset */}
        <div id="documentation" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">05</div>
            <h2 className="text-3xl font-bold text-brand-blue">Documentation as a Sales Asset</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A seller who has maintained a professional home watch program through their ownership of a property has something that no seller's verbal assurances can replicate: a documented record of professional oversight, consistent maintenance, and prompt response to anything that arose during the vacancy periods.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            That documentation answers the buyer's most fundamental question — "how has this home been treated?" — with something more persuasive than the seller's word. It is a stack of timestamped inspection reports showing exactly what was found on every visit, what was addressed, and when. It demonstrates that the property was not left to its own devices through multiple Arizona summers. And it gives a buyer's inspector less to find, because the issues that would have accumulated in an unmonitored property were caught and addressed as they arose.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For a listing agent presenting this documentation to a buyer's agent, it is a credibility tool. It is verifiable evidence that the property has been professionally cared for — not a seller's claim that it has been. In a market where buyer confidence is the foundation of offer quality, that evidence has real value.
          </p>
        </div>

        {/* Scottsdale Market */}
        <div id="scottsdale-market" className="mb-16">
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

      </section>

      {/* CTA Band */}
      <section className="bg-gray-50 border-t border-b border-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">For Homeowners & Real Estate Professionals</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Protect the value of what you're bringing to market.</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a homeowner preparing to sell or a realtor looking to protect a listing and deepen client relationships, John is glad to talk through what a home watch program looks like for your specific situation.
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