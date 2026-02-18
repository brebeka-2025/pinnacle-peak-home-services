import { useState } from 'react'

export default function Accordion({ question, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 border-2 border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 flex justify-between items-center transition-colors ${
          isOpen ? 'bg-blue-50 border-b-2 border-brand-gold' : 'bg-gray-50 hover:bg-blue-50'
        }`}
      >
        <span className="text-xl font-semibold text-brand-blue pr-8">{question}</span>
        <span className={`text-3xl font-bold text-brand-gold transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="p-6 bg-white border-t-2 border-brand-gold">
          <div className="text-gray-700 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
