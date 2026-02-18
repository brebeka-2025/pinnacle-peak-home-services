import { useState } from 'react'
import Button from '../components/ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    neighborhood: '',
    travelSchedule: '',
    packageInterest: '',
    message: '',
    contactPreference: 'phone'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to your form service (Formspree, EmailJS, etc.)
    console.log('Form submitted:', formData)
    alert('Form submission ready to connect to your email service!')
  }

  const communities = [
    "Pinnacle Peak",
    "DC Ranch",
    "Silverleaf",
    "Desert Mountain",
    "Troon",
    "Troon North",
    "Estancia"
  ]

  return (
    <div>
      {/* Hero */}
      <section 
        className="relative text-white py-20 px-6 min-h-[350px] flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Let's Talk About Your Home</h1>
          <p className="text-xl mb-4">
            Get your free consultation today. No pressure, no obligation—just an honest conversation about protecting your most valuable asset.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-blue text-center mb-16">
            How to Reach Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Call or Text</h3>
              <p className="text-gray-700 mb-4">Prefer to talk? Call or text me directly.</p>
              <a href="tel:4805551234" className="text-2xl font-bold text-brand-gold hover:underline">
                (480) XXX-XXXX
              </a>
              <p className="text-sm text-gray-600 mt-4 italic">
                I answer personally. If I'm on a visit, I'll call you back within 2 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Email</h3>
              <p className="text-gray-700 mb-4">Have a question? Email me directly.</p>
              <a
                href="mailto:john@pinnaclepeakhomeservices.com"
                className="text-lg font-bold text-brand-gold hover:underline"
              >
                john@pinnaclepeakhomeservices.com
              </a>
              <p className="text-sm text-gray-600 mt-4 italic">
                I respond to all emails within 24 hours, usually much faster than that.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Online Form</h3>
              <p className="text-gray-700 mb-4">Fill out the consultation request form below.</p>
              <a href="#consultation-form" className="text-xl font-bold text-brand-gold hover:underline">
                Request Consultation
              </a>
              <p className="text-sm text-gray-600 mt-4 italic">
                I'll reach out within 24 hours to schedule a time to connect with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="consultation-form" className="py-20 px-6 bg-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-blue text-center mb-6">
            Request Your Free Consultation
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Tell me a bit about your home and your needs. I'll contact you within 24 hours to discuss how I can help protect your investment.
          </p>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-brand-blue font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-brand-blue font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-brand-blue font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-brand-blue font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="neighborhood" className="block text-brand-blue font-semibold mb-2">
                  Property Neighborhood *
                </label>
                <select
                  id="neighborhood"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none"
                >
                  <option value="">Select your neighborhood...</option>
                  <option value="pinnacle-peak">Pinnacle Peak</option>
                  <option value="dc-ranch">DC Ranch</option>
                  <option value="silverleaf">Silverleaf</option>
                  <option value="desert-mountain">Desert Mountain</option>
                  <option value="troon">Troon</option>
                  <option value="troon-north">Troon North</option>
                  <option value="estancia">Estancia</option>
                  <option value="other">Other North Scottsdale</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="travelSchedule" className="block text-brand-blue font-semibold mb-2">
                  When do you typically travel? *
                </label>
                <select
                  id="travelSchedule"
                  name="travelSchedule"
                  value={formData.travelSchedule}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none"
                >
                  <option value="">Select option...</option>
                  <option value="summer">Summer months (June-September)</option>
                  <option value="winter">Winter months (November-April)</option>
                  <option value="year-round">Throughout the year (frequent business travel)</option>
                  <option value="occasional">Occasional trips (1-3 months)</option>
                  <option value="not-sure">Not sure yet / Exploring options</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="packageInterest" className="block text-brand-blue font-semibold mb-2">
                  Package Interest
                </label>
                <select
                  id="packageInterest"
                  name="packageInterest"
                  value={formData.packageInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none"
                >
                  <option value="">Select a package (optional)...</option>
                  <option value="monthly">Monthly ($250/month)</option>
                  <option value="summer">Summer ($895 for 4 months)</option>
                  <option value="seasonal">Seasonal ($1,395 for 6 months)</option>
                  <option value="annual">Annual ($1,595 for 12 months)</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-brand-blue font-semibold mb-2">
                  Tell me about your home and what you're looking for
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Any specific concerns, questions, or details about your property..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contactPreference" className="block text-brand-blue font-semibold mb-2">
                  Best way to reach you?
                </label>
                <select
                  id="contactPreference"
                  name="contactPreference"
                  value={formData.contactPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none"
                >
                  <option value="phone">Phone call</option>
                  <option value="text">Text message</option>
                  <option value="email">Email</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gold text-white font-bold text-lg py-4 rounded-lg hover:bg-brand-gold-600 transition-colors"
              >
                Request Free Consultation
              </button>

              <p className="text-center text-sm text-gray-600 mt-6">
                Your information is confidential and will never be shared. I'll use it only to contact you about your home watch needs.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-blue to-brand-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">Within 24 Hours</h3>
              <p className="text-lg">
                I'll personally contact you to discuss your needs and answer any questions.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
              <p className="text-lg">
                We'll have an honest conversation about your home and which approach makes sense for you.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">No Pressure</h3>
              <p className="text-lg">
                You're under no obligation. If I'm not the right fit, I'll tell you. If you're not ready, no problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-blue mb-6">
            North Scottsdale Communities I Serve
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            As a local North Scottsdale resident, I exclusively serve the premium communities I know and love.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {communities.map((community, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-brand-blue to-brand-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
              >
                {community}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}