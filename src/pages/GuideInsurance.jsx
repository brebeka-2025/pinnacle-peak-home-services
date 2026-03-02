import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles'

const CLUSTER_IDS = [14, 19, 20, 21, 22]

const categoryColors = {
  'Seasonal Tips': '#1E5BA8',
  'Storm & Weather': '#2563eb',
  'Insurance & Legal': '#c48b47',
  'Home Maintenance': '#1E5BA8',
  'Security': '#c48b47',
  'Travel Tips': '#1E5BA8',
  'How to Work with a Home Watch Company': '#c48b47',
}

const stats = [
  { number: '30–60', label: 'Days until vacancy clause activates' },
  { number: '5–6mo', label: 'Typical North Scottsdale vacancy period' },
  { number: '$0', label: 'What an unmonitored claim can pay' },
]

const toc = [
  { num: '01', text: 'What Most Homeowners Don\'t Know', anchor: '#what-most-dont-know' },
  { num: '02', text: 'What a Vacancy Clause Actually Says', anchor: '#vacancy-clause' },
  { num: '03', text: 'The 30–60 Day Threshold', anchor: '#threshold' },
  { num: '04', text: 'How to Stay Compliant', anchor: '#stay-compliant' },
  { num: '05', text: 'What Happens When a Claim Is Filed', anchor: '#claim-filed' },
  { num: '06', text: 'Documentation That Satisfies an Adjuster', anchor: '#documentation' },
  { num: '07', text: 'How Home Watch Solves All of It', anchor: '#home-watch' },
  { num: '08', text: 'Deep Dive Articles', anchor: '#articles' },
]

export default function GuideInsurance() {
  const clusterArticles = articles.filter(a => CLUSTER_IDS.includes(a.id))

  return (
    <div className="bg-white min-h-screen">

      <Helmet>
        <title>Homeowner's Insurance and Vacant Homes: The Complete Guide | Pinnacle Peak Home Services</title>
        <meta name="description" content="Most seasonal homeowners don't know their policy has a vacancy clause — until a claim is denied. Here's everything you need to know about staying covered and compliant while you're away." />
        <link rel="canonical" href="https://pinnaclepeakhomeservices.com/guides/homeowners-insurance-vacant-homes" />
        <meta property="og:title" content="Homeowner's Insurance and Vacant Homes: The Complete Guide" />
        <meta property="og:description" content="Most seasonal homeowners don't know their policy has a vacancy clause — until a claim is denied. Here's everything you need to know about staying covered and compliant while you're away." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pinnaclepeakhomeservices.com/guide-insurance-hero.jpg" />
      </Helmet>

      {/* Full-Bleed Hero */}
      <section
        className="relative text-white flex items-end"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%), url(/guide-insurance-hero.jpg)',
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
            Homeowner's Insurance and Vacant Homes
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Most seasonal homeowners assume their policy is in force while they're away. Many of them are wrong — and they find out at the worst possible moment.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-white/60">
            <span>By John, NHWA Certified</span>
            <span>·</span>
            <span>18 min read</span>
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
                className="flex items-center gap-3 text-gray-700 hover:text-brand-gold transition-colors group py-1 border-b border-gray-100"
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

        {/* What Most Don't Know */}
        <div id="what-most-dont-know" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Most Homeowners Don't Know</h2>
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                There is a specific kind of financial shock that seasonal homeowners experience when a large insurance claim is denied — not because the damage isn't real, not because they weren't covered for the peril, but because the coverage they paid for was quietly voided by a condition they didn't know existed. The policy was current. The premium was paid. The damage was covered. And the claim was still denied.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                This happens more often than the insurance industry advertises, and it happens almost exclusively to one category of homeowner: the seasonal resident who leaves a property unoccupied for an extended period without taking the specific steps their policy requires.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The mechanism is called a vacancy clause. It is standard language in most homeowner's insurance policies. It is rarely highlighted at the time of purchase or renewal. And for a North Scottsdale homeowner who leaves in April and returns in October, it is the most financially consequential section of their policy they have probably never read.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/watch-article-19.jpg" alt="Vacant luxury home insurance" className="w-full h-64 object-cover" />
              </div>
              <blockquote className="mt-6 border-l-4 border-brand-gold pl-5">
                <p className="text-gray-700 italic leading-relaxed text-base">
                  "The vacancy clause doesn't announce itself. It sits in the policy language until a claim is filed — and then it becomes the most important paragraph in the document."
                </p>
                <footer className="mt-3 text-sm text-gray-400">— John, Pinnacle Peak Home Services</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Vacancy Clause */}
        <div id="vacancy-clause" className="mb-20">
          <div className="rounded-2xl overflow-hidden mb-10 relative" style={{ height: '240px' }}>
            <img src="/watch-article-14.jpg" alt="Insurance policy vacancy clause" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10">
              <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Section 01</span>
                <h2 className="text-3xl font-bold text-white mt-2">What a Vacancy Clause Actually Says</h2>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A vacancy clause is a policy provision that limits or eliminates coverage for certain categories of loss when a home has been unoccupied beyond a specified period. The exact language varies by carrier and policy, but the structure is consistent: after a defined threshold of consecutive days without occupancy, specific coverages are suspended or reduced — typically vandalism, glass breakage, water damage from plumbing failures, and in some policies, theft.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The rationale from the insurer's perspective is actuarial: vacant homes experience significantly more severe losses than occupied ones, and the severity is directly proportional to how long a problem goes undetected. A pipe that bursts in an occupied home is discovered within hours. The same pipe in a vacant home runs for weeks before anyone knows. The claim is categorically different — and the carrier's exposure reflects that.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            What matters for homeowners is that the clause doesn't require negligence or bad faith. It requires only that the home was vacant for longer than the policy permits without notification, endorsement, or documented monitoring in place. Meeting that threshold — even entirely unintentionally — is enough to trigger it.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">What Vacancy Means in Policy Language</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Most policies define vacancy as the absence of both occupants and furnishings sufficient for normal habitation. A furnished home with personal belongings present is typically considered vacant if no one is occupying it — the furniture alone doesn't satisfy the occupancy requirement.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Some policies distinguish between "vacant" and "unoccupied" — with unoccupied meaning furnished but without residents, and vacant meaning stripped of both. The coverage implications differ. Read your policy carefully, or ask your agent to explain the specific definition that applies to your situation.
          </p>
        </div>

        {/* Threshold */}
        <div id="threshold" className="mb-20">
          <div className="rounded-2xl overflow-hidden mb-10 relative" style={{ height: '240px' }}>
            <img src="/watch-article-20.jpg" alt="Vacancy clause threshold" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10">
              <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Section 02</span>
                <h2 className="text-3xl font-bold text-white mt-2">The 30–60 Day Threshold</h2>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Most standard homeowner's policies set the vacancy threshold at 30 to 60 consecutive days. The threshold is the number of consecutive days a home can be unoccupied before the vacancy clause activates and coverage changes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            For a North Scottsdale seasonal homeowner who leaves in late April and returns in October, that threshold is crossed in the first month of absence — and the coverage gap that follows runs for the remainder of the season. Five to six months of reduced or suspended coverage on a multi-million dollar property, without the homeowner necessarily being aware it exists.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">Typically Excluded After Threshold</p>
              <ul className="space-y-2">
                {[
                  'Vandalism and malicious mischief',
                  'Glass breakage',
                  'Water damage from plumbing failure',
                  'Theft coverage significantly reduced',
                  'Liability coverage may be affected',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-3">Maintained With Proper Documentation</p>
              <ul className="space-y-2">
                {[
                  'Full coverage preserved with endorsement',
                  'Claims processed on their merits',
                  'Adjuster documentation requirements met',
                  'Carrier notified and on record',
                  'Professional monitoring verified',
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
            The threshold is a hard line, not a sliding scale. A home that has been vacant for 61 days under a 60-day policy has the same coverage status as one that has been vacant for 180 days. The carrier's exposure calculation resets the moment the threshold is crossed, and it stays reset until occupancy is restored or a qualifying endorsement is obtained.
          </p>
        </div>

        {/* Stay Compliant */}
        <div id="stay-compliant" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">How to Stay Compliant</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Compliance with a vacancy clause is not complicated, but it requires taking specific steps before you leave — not after a problem occurs. Most carriers offer one or more of the following mechanisms for maintaining coverage during an extended absence.
          </p>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Vacancy Endorsement or Permit',
                body: 'Many carriers offer a vacancy endorsement — an add-on to your existing policy that explicitly extends coverage for a defined period of vacancy, typically for an additional premium. The cost is generally modest relative to the coverage it maintains. Some endorsements require the homeowner to certify that the property will be inspected at regular intervals.',
              },
              {
                num: '02',
                title: 'Documented Regular Inspection',
                body: 'Many policies include language specifying that coverage is maintained during vacancy if the property is subject to regular, documented professional inspections. The key word is documented. An informal arrangement with a neighbor does not constitute documented inspection under any carrier\'s definition. A professional home watch service that provides written, timestamped inspection reports after every visit does.',
              },
              {
                num: '03',
                title: 'Notifying Your Carrier',
                body: 'At minimum, notify your insurance agent before you leave for the season. Explain the expected vacancy period, confirm what your policy requires, and get the answer in writing. A verbal assurance from an agent that "you\'ll be fine" is not a documented compliance record — it\'s a conversation that won\'t appear anywhere in your claim file when you need it.',
              },
            ].map(item => (
              <div key={item.num} className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mt-8 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">Pre-Departure Compliance Checklist</p>
            <ul className="space-y-2">
              {[
                'Read your policy\'s vacancy clause — know your threshold',
                'Contact your agent in writing and confirm your coverage status during vacancy',
                'Ask specifically whether a professional home watch program satisfies monitoring requirements',
                'Obtain a vacancy endorsement if required or recommended by your carrier',
                'Document your home watch service agreement and provide it to your agent',
                'Keep all inspection reports — they are your evidence of compliance',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Claim Filed */}
        <div id="claim-filed" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Happens When a Claim Is Filed</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            When a claim is filed on a property that has been vacant for an extended period, the adjuster's first task is to establish the facts of the vacancy. How long was the home unoccupied? Did the vacancy period exceed the policy threshold? Were any monitoring or inspection requirements being met? Was the carrier notified?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            This is standard procedure — not adversarial, not unusual, and not a sign that the claim is in trouble. It is simply the adjuster doing their job. The problem arises when the answers to those questions trigger the vacancy clause.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A homeowner who left in April, crossed the 60-day threshold in June, filed a claim in August for water damage from a plumbing failure, and cannot produce any documentation of monitoring activity during the vacancy period is in a difficult position — regardless of how legitimate the damage is, how long they've held the policy, or how faithfully they've paid their premiums. The vacancy clause applies. Coverage is reduced or voided. The claim pays less than expected or not at all.
          </p>

          <div className="rounded-2xl overflow-hidden my-8">
            <div className="bg-brand-blue text-white p-8">
              <p className="text-xl font-semibold leading-relaxed">
                The vacancy clause doesn't care about intent. It cares about facts: was the home vacant beyond the threshold, and was the required monitoring in place?
              </p>
              <p className="text-blue-300 text-sm mt-4">— John, Pinnacle Peak Home Services</p>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div id="documentation" className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Documentation That Satisfies an Adjuster</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            What satisfies an adjuster that a home was being adequately monitored is specific. It is not a neighbor's recollection. It is not a smart home system's alert log. It is not a series of text messages. It is written documentation of physical inspections, conducted by an identified and qualified individual, at intervals consistent with the policy's requirements.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A professional home watch company's inspection reports meet this standard on every dimension. They are dated. They are itemized. They identify the inspector by name and credential. They document what was found. And they establish a consistent, unbroken pattern of visits across the entire vacancy period — which is the pattern an adjuster needs to see.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">What a Complete Documentation File Looks Like</h3>

          <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
            <ul className="space-y-3">
              {[
                'Written confirmation from your agent that your home watch program satisfies policy monitoring requirements — obtained before departure, in writing',
                'Your home watch service agreement showing contracted visit frequency, inspection scope, and provider credentials',
                'Every inspection report from the vacancy period — dated, itemized, with photographs',
                'Your home watch provider\'s current certificate of insurance and NHWA certification',
                'Any correspondence with your carrier about the vacancy period and monitoring arrangements',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            This file takes about 20 minutes to assemble before departure and requires nothing more than saving documents as they're generated. It is the difference between a claim that is processed on its merits and one that gets tied up in vacancy clause review.
          </p>
        </div>

        {/* Home Watch Solves It */}
        <div id="home-watch" className="mb-12">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">How Home Watch Solves All of It</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Professional home watch addresses the vacancy clause problem on every dimension simultaneously. It provides the documented monitoring that most policies require. It generates the inspection reports that satisfy an adjuster's documentation request. It compresses the detection window for every category of insurable loss — which means that when something does go wrong, the damage is limited to what happened before the next scheduled visit, not what accumulated over an entire season.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The insurance industry has recognized this. Several major carriers now explicitly recommend professional home watch for seasonal properties, and some have begun offering premium discounts for homeowners who can document regular professional inspection.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For a homeowner with a multi-million dollar property in North Scottsdale, the calculus is straightforward. Professional home watch costs a fraction of a single water damage claim. It maintains coverage that might otherwise be voided. It generates the documentation that protects that coverage if something does go wrong.
          </p>
        </div>

      </article>

      {/* CTA Band */}
      <section
        className="relative text-white py-20 px-6 text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/guide-insurance-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-4">NHWA Certified · Bonded & Insured</p>
          <h3 className="text-4xl font-bold mb-4">Make sure your coverage holds up while you're away.</h3>
          <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
            John can walk you through what your policy likely requires and what a home watch program looks like for your specific property. No sales pitch — just honest answers.
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