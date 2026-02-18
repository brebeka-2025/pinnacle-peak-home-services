import Button from '../ui/Button'

export default function PackageCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  badge,
  featured = false 
}) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 relative ${
        featured ? 'border-4 border-brand-gold transform lg:-translate-y-4' : 'border-2 border-gray-200'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-white px-6 py-2 rounded-full font-bold uppercase text-sm">
          {badge}
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-brand-blue mb-2">{name}</h3>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>

      <div className="text-center mb-8">
        <div className="text-4xl font-bold text-brand-gold mb-2">{price}</div>
        {period && <div className="text-gray-600">{period}</div>}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-brand-gold mr-3 text-xl flex-shrink-0">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        href="/contact" 
        variant={featured ? "primary" : "outline"}
        className="w-full"
      >
        Get Quote
      </Button>
    </div>
  )
}
