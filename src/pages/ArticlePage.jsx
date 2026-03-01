import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles'

const categoryColors = {
  'Seasonal Tips': '#1E5BA8',
  'Storm & Weather': '#2563eb',
  'Insurance & Legal': '#c48b47',
  'Home Maintenance': '#1E5BA8',
  'Security': '#c48b47',
  'Travel Tips': '#1E5BA8',
  'How to Work with a Home Watch Company': '#c48b47',
}

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug) || articles[0]
  const related = articles.filter(a => article.relatedIds?.includes(a.id))

  return (
    <div className="bg-white min-h-screen">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>{article.metaTitle || `${article.title} | Pinnacle Peak Home Services`}</title>
        <meta name="description" content={article.metaDescription || article.excerpt} />
        <link rel="canonical" href={`https://pinnaclepeakhomeservices.com/watch/${article.slug}`} />
        <meta property="og:title" content={article.metaTitle || article.title} />
        <meta property="og:description" content={article.metaDescription || article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://pinnaclepeakhomeservices.com${article.image}`} />
      </Helmet>

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
              if (block.type === 'riskTable') return (
                <div key={idx} className="my-8">
                  {/* Desktop Table */}
                  <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-brand-blue text-white">
                          <th className="text-left px-5 py-3 font-semibold">Risk Category</th>
                          <th className="text-left px-5 py-3 font-semibold">Average Repair Cost</th>
                          <th className="text-left px-5 py-3 font-semibold">Likelihood in Vacant Home</th>
                          <th className="text-left px-5 py-3 font-semibold">Preventable with Home Watch?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-5 py-3 font-medium text-gray-800">{row.risk}</td>
                            <td className="px-5 py-3 text-brand-gold font-semibold">{row.cost}</td>
                            <td className="px-5 py-3 text-gray-700">{row.likelihood}</td>
                            <td className="px-5 py-3">
                              {row.preventable
                                ? <span className="text-green-600 font-semibold">✓ Yes</span>
                                : <span className="text-gray-400">Partial</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Mobile Cards */}
                  <div className="md:hidden space-y-4">
                    {block.rows.map((row, i) => (
                      <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white">
                        <p className="font-bold text-brand-blue mb-2">{row.risk}</p>
                        <p className="text-brand-gold font-semibold text-sm mb-1">{row.cost}</p>
                        <p className="text-gray-600 text-sm mb-1">Likelihood: {row.likelihood}</p>
                        <p className="text-sm">
                          {row.preventable
                            ? <span className="text-green-600 font-semibold">✓ Preventable with Home Watch</span>
                            : <span className="text-gray-400">Partially Preventable</span>}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
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