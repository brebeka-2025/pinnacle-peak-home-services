export default function ExperienceCard({ title, description, points }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
      <h3 className="text-2xl font-bold text-brand-blue mb-4">{title}</h3>
      {description && (
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      )}
      {points && points.length > 0 && (
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-brand-gold mr-3 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
