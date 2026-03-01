import { useState } from 'react'
import { Link } from 'react-router-dom'
import articles from '../data/articles'

const categories = [
  'All',
  'Seasonal Tips',
  'Storm & Weather',
  'Insurance & Legal',
  'Home Maintenance',
  'Security',
  'Travel Tips',
  'How to Work with a Home Watch Company',
]

const categoryColors = {
  'Seasonal Tips': '#1E5BA8',
  'Storm & Weather': '#2563eb',
  'Insurance & Legal': '#c48b47',
  'Home Maintenance': '#1E5BA8',
  'Security': '#c48b47',
  'Travel Tips': '#1E5BA8',
  'How to Work with a Home Watch Company': '#c48b47',
}

export default function TheWatch() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = articles.find(a => a.featured)
  const filtered = articles
    .filter(a => !a.featured)
    .filter(a => activeCategory === 'All' || a.category === activeCategory)

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Bar */}
      <section
        className="relative text-white py-20 px-6 min-h-[280px] flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center relative z-10">
          <p className="text-brand-gold uppercase tracking-widest text-sm font-semibold mb-3">
            Homeowner Education
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">The Watch</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Expert insights on protecting your North Scottsdale home — whether you're here or away.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6">Featured Article</p>
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            {/* Left - Text */}
            <div className="bg-white p-10 flex flex-col justify-center">
              <span
                className="inline-block text-sm font-semibold mb-4 hover:underline cursor-pointer"
                style={{ color: categoryColors[featured.category] || '#1E5BA8' }}
              >
                {featured.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                {featured.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xs">J</div>
                <span>By John</span>
                <span>•</span>
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
              <Link
                to={`/the-watch/${featured.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-4 transition-all duration-200"
              >
                Read article <span>→</span>
              </Link>
            </div>
            {/* Right - Image */}
            <div className="relative min-h-[360px] bg-gray-100">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded shadow">
                Featured article
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-8">Latest Articles</p>
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-20">No articles in this category yet — check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(article => (
              <Link
                key={article.id}
                to={`/the-watch/${article.slug}`}
                className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-52 bg-gray-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <span
                    className="text-xs font-bold uppercase tracking-wider mb-3"
                    style={{ color: categoryColors[article.category] || '#1E5BA8' }}
                  >
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-700 text-white py-16 px-6 text-center mt-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Have a question about your home?</h2>
          <p className="text-lg text-blue-100 mb-8">
            John answers questions personally. Reach out for a free, no-pressure consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}