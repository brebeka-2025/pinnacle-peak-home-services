export default function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 ${
        hover ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
