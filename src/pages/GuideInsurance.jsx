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
      </Helmet>

      {/* Hero */}
      <section className="bg-brand-gold text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/the-watch"
            className="inline-flex items-center gap-2 text-sm text-amber-100 hover:text-white transition-colors mb-6"
          >
            ← Back to The Watch
          </Link>
          <div className="mb-6">
            <div className="inline-block bg-white text-brand-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              Complete Guide
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Homeowner's Insurance and Vacant Homes
          </h1>
          <p className="text-xl text-amber-100 leading-relaxed max-w-3xl">
            Most seasonal homeowners assume their policy is in force while they're away. Many of them are wrong — and they find out at the worst possible moment. Here's what you need to know before you leave.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-amber-200">
            <span>By John Sherrill, NHWA Certified</span>
            <span>•</span>
            <span>18 min read</span>
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
              { num: '01', text: 'What Most Homeowners Don\'t Know', anchor: '#what-most-dont-know' },
              { num: '02', text: 'What a Vacancy Clause Actually Says', anchor: '#vacancy-clause' },
              { num: '03', text: 'The 30–60 Day Threshold', anchor: '#threshold' },
              { num: '04', text: 'How to Stay Compliant', anchor: '#stay-compliant' },
              { num: '05', text: 'What Happens When a Claim Is Filed', anchor: '#claim-filed' },
              { num: '06', text: 'Documentation That Satisfies an Adjuster', anchor: '#documentation' },
              { num: '07', text: 'How Home Watch Solves All of It', anchor: '#home-watch' },
              { num: '08', text: 'Deep Dive Articles', anchor: '#articles' },
            ].map(item => (
              <a
                key={item.num}
                href={item.anchor}
                className="flex items-center gap-3 text-gray-700 hover:text-brand-gold transition-colors group"
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

        {/* What Most Don't Know */}
        <div id="what-most-dont-know" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">What Most Homeowners Don't Know</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            There is a specific kind of financial shock that seasonal homeowners experience when a large insurance claim is denied — not because the damage isn't real, not because they weren't covered for the peril, but because the coverage they paid for was quietly voided by a condition they didn't know existed. The policy was current. The premium was paid. The damage was covered. And the claim was still denied.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            This happens more often than the insurance industry advertises, and it happens almost exclusively to one category of homeowner: the seasonal resident who leaves a property unoccupied for an extended period without taking the specific steps their policy requires.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The mechanism is called a vacancy clause. It is standard language in most homeowner's insurance policies. It is rarely highlighted at the time of purchase or renewal. And for a North Scottsdale homeowner who leaves in April and returns in October, it is the most financially consequential section of their policy they have probably never read.
          </p>
          <div className="bg-amber-50 border-l-4 border-brand-gold rounded-r-xl p-6 my-8">
            <p className="text-gray-800 font-semibold text-lg leading-relaxed">
              "The vacancy clause doesn't announce itself. It sits in the policy language until a claim is filed — and then it becomes the most important paragraph in the document."
            </p>
            <p className="text-sm text-gray-500 mt-3">— John Sherrill, Pinnacle Peak Home Services</p>
          </div>
        </div>

        {/* Vacancy Clause */}
        <div id="vacancy-clause" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">01</div>
            <h2 className="text-3xl font-bold text-brand-blue">What a Vacancy Clause Actually Says</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A vacancy clause is a policy provision that limits or eliminates coverage for certain categories of loss when a home has been unoccupied beyond a specified period. The exact language varies by carrier and policy, but the structure is consistent: after a defined threshold of consecutive days without occupancy, specific coverages are suspended or reduced — typically vandalism, glass breakage, water damage from plumbing failures, and in some policies, theft.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The rationale from the insurer's perspective is actuarial: vacant homes experience significantly more severe losses than occupied ones, and the severity is directly proportional to how long a problem goes undetected. A pipe that bursts in an occupied home is discovered within hours. The same pipe in a vacant home runs for weeks before anyone knows. The claim is categorically different — and the carrier's exposure reflects that.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            What matters for homeowners is that the clause doesn't require negligence, bad faith, or any particular behavior on their part. It requires only that the home was vacant for longer than the policy permits without notification, endorsement, or documented monitoring in place. Meeting that threshold — even entirely unintentionally — is enough to trigger it.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">What Vacancy Means in Policy Language</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Most policies define vacancy as the absence of both occupants and furnishings sufficient for normal habitation. A furnished home with personal belongings present is typically considered vacant if no one is occupying it — the furniture alone doesn't satisfy the occupancy requirement. A home that is being actively shown for sale may be treated differently depending on the carrier.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Some policies distinguish between "vacant" and "unoccupied" — with unoccupied meaning furnished but without residents, and vacant meaning stripped of both. The coverage implications differ. Read your policy carefully, or ask your agent to explain the specific definition that applies to your situation.
          </p>
        </div>

        {/* Threshold */}
        <div id="threshold" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">02</div>
            <h2 className="text-3xl font-bold text-brand-blue">The 30–60 Day Threshold</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Most standard homeowner's policies set the vacancy threshold at 30 to 60 consecutive days. Some carriers use 30. Some use 60. A small number use 90. The threshold is the number of consecutive days a home can be unoccupied before the vacancy clause activates and coverage changes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            For a North Scottsdale seasonal homeowner who leaves in late April and returns in October, that threshold is crossed in the first month of absence — and the coverage gap that follows runs for the remainder of the season. Five to six months of reduced or suspended coverage on a multi-million dollar property, without the homeowner necessarily being aware it exists.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">Common Coverage Restrictions After Threshold</p>
            <ul className="space-y-2">
              {[
                'Vandalism and malicious mischief — often completely excluded',
                'Glass breakage — typically excluded',
                'Water damage from plumbing failure — limited or excluded',
                'Theft — coverage may be significantly reduced',
                'Liability coverage — may be affected depending on carrier',
                'Some policies void all coverage beyond the threshold without endorsement',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The threshold is a hard line, not a sliding scale. A home that has been vacant for 61 days under a 60-day policy has the same coverage status as one that has been vacant for 180 days. The carrier's exposure calculation reset the moment the threshold was crossed, and it stays reset until occupancy is restored or a qualifying endorsement is obtained.
          </p>
        </div>

        {/* Stay Compliant */}
        <div id="stay-compliant" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">03</div>
            <h2 className="text-3xl font-bold text-brand-blue">How to Stay Compliant</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Compliance with a vacancy clause is not complicated, but it requires taking specific steps before you leave — not after a problem occurs. Most carriers offer one or more of the following mechanisms for maintaining coverage during an extended absence:
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Vacancy Endorsement or Permit</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Many carriers offer a vacancy endorsement — an add-on to your existing policy that explicitly extends coverage for a defined period of vacancy, typically for an additional premium. The cost varies by carrier and property value but is generally modest relative to the coverage it maintains. Some endorsements require the homeowner to certify that the property will be inspected at regular intervals — which brings us to the second mechanism.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Documented Regular Inspection</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Many policies — particularly those that have been updated in the past five years — include language specifying that coverage is maintained during vacancy if the property is subject to regular, documented professional inspections. The inspection frequency required varies: some policies specify weekly, some specify every 30 days, some simply say "regular." The key word in all of them is documented.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            An informal arrangement with a neighbor does not constitute documented inspection under any carrier's definition. A professional home watch service that provides written, timestamped inspection reports after every visit does.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Notifying Your Carrier</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            At minimum, notify your insurance agent before you leave for the season. Explain the expected vacancy period, confirm what your policy requires, and get the answer in writing. A verbal assurance from an agent that "you'll be fine" is not a documented compliance record — it's a conversation that won't appear anywhere in your claim file when you need it.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
            <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-3">Pre-Departure Compliance Checklist</p>
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Claim Filed */}
        <div id="claim-filed" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">04</div>
            <h2 className="text-3xl font-bold text-brand-blue">What Happens When a Claim Is Filed</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            When a claim is filed on a property that has been vacant for an extended period, the adjuster's first task is to establish the facts of the vacancy. How long was the home unoccupied? Did the vacancy period exceed the policy threshold? Were any monitoring or inspection requirements being met? Was the carrier notified?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            This is standard procedure — not adversarial, not unusual, and not a sign that the claim is in trouble. It is simply the adjuster doing their job. The problem arises when the answers to those questions trigger the vacancy clause.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A homeowner who left in April, crossed the 60-day threshold in June, filed a claim in August for water damage from a plumbing failure, and cannot produce any documentation of monitoring activity during the vacancy period is in a difficult position — regardless of how legitimate the damage is, how long they've held the policy, or how faithfully they've paid their premiums. The vacancy clause applies. Coverage is reduced or voided. The claim pays less than expected or not at all.
          </p>

          <div className="bg-brand-blue text-white rounded-xl p-8 my-8">
            <p className="text-lg font-semibold leading-relaxed">
              The vacancy clause doesn't care about intent. It cares about facts: was the home vacant beyond the threshold, and was the required monitoring in place? If the answer to the first question is yes and the answer to the second is no, the clause applies.
            </p>
          </div>
        </div>

        {/* Documentation */}
        <div id="documentation" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">05</div>
            <h2 className="text-3xl font-bold text-brand-blue">Documentation That Satisfies an Adjuster</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            What satisfies an adjuster that a home was being adequately monitored is specific. It is not a neighbor's recollection. It is not a smart home system's alert log. It is not a series of text messages. It is written documentation of physical inspections, conducted by an identified and qualified individual, at intervals consistent with the policy's requirements or with a reasonable standard of care.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A professional home watch company's inspection reports meet this standard on every dimension. They are dated. They are itemized. They identify the inspector by name and credential. They document what was found. And they establish a consistent, unbroken pattern of visits across the entire vacancy period — which is the pattern an adjuster needs to see to confirm that the monitoring requirement was being met throughout.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">What a Complete Documentation File Looks Like</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The homeowners who navigate insurance claims on vacant properties most successfully are the ones who can produce a complete documentation file on request. That file should contain:
          </p>

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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            This file takes about 20 minutes to assemble before departure and requires nothing more than saving documents as they're generated. It is the difference between a claim that is processed on its merits and one that gets tied up in vacancy clause review.
          </p>
        </div>

        {/* Home Watch Solves It */}
        <div id="home-watch" className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">How Home Watch Solves All of It</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Professional home watch addresses the vacancy clause problem on every dimension simultaneously. It provides the documented monitoring that most policies require. It generates the inspection reports that satisfy an adjuster's documentation request. It compresses the detection window for every category of insurable loss — which means that when something does go wrong, the damage is limited to what happened before the next scheduled visit, not what accumulated over an entire season.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The insurance industry has recognized this. Several major carriers now explicitly recommend professional home watch for seasonal properties, and some have begun offering premium discounts for homeowners who can document regular professional inspection. The claims data supports it: monitored properties generate smaller, more manageable claims than unmonitored ones — and the difference is significant enough to affect actuarial pricing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For a homeowner with a multi-million dollar property in North Scottsdale, the calculus is straightforward. Professional home watch costs a fraction of a single water damage claim. It maintains coverage that might otherwise be voided. It generates the documentation that protects that coverage if something does go wrong. And it provides the peace of mind that comes from knowing your home is being watched by someone with the training, accountability, and professional standing to do it right.
          </p>
        </div>

      </section>

      {/* CTA Band */}
      <section className="bg-gray-50 border-t border-b border-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">Stay Protected</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Make sure your coverage holds up while you're away.</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            John can walk you through what your policy likely requires and what a home watch program looks like for your specific property. No sales pitch — just honest answers.
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