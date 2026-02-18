import { Link } from 'react-router-dom'

export default function Button({ children, variant = 'primary', href, onClick, className = '', ...props }) {
  const baseStyles = 'inline-block px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
  
  const variants = {
    primary: 'bg-brand-gold text-white hover:bg-brand-gold-600',
    secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-blue',
    outline: 'bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white',
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    // Internal link
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={buttonClasses} {...props}>
          {children}
        </Link>
      )
    }
    // External link
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
