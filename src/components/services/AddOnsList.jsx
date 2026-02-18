export default function AddOnsList() {
  const addOns = [
    {
      name: 'Contractor Coordination',
      price: '$25',
      description: 'Meet contractor, confirm scope, lock up after',
    },
    {
      name: 'Extended Contractor Wait',
      price: '$59/hour',
      description: 'Stay on-site during extended repair work',
    },
    {
      name: 'Pre-Arrival Home Prep',
      price: '$149',
      description: 'Full house prep before you arrive home',
    },
    {
      name: 'Pet Check-In',
      price: '$35/visit',
      description: 'Let dogs out, refresh water, basic care',
    },
    {
      name: 'Plant Watering',
      price: '$25/visit',
      description: 'Water indoor and outdoor plants',
    },
    {
      name: 'Vehicle Maintenance',
      price: '$40/month',
      description: 'Start vehicle, check fluids, battery maintenance',
    },
    {
      name: 'Pool Monitoring',
      price: '$45/month',
      description: 'Check equipment, chemicals, cleanliness',
    },
    {
      name: 'Mail/Package Management',
      price: 'Included',
      description: 'Retrieve mail, secure packages, forward as needed',
    },
    {
      name: 'Emergency Response',
      price: 'Included',
      description: '24/7 availability for urgent issues',
    },
    {
      name: 'Storm Preparation',
      price: 'Included*',
      description: 'Monsoon prep and post-storm inspection (*seasonal packages)',
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-blue text-center mb-6">
          Add-On Services
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Customize your package with additional services tailored to your specific needs.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addOn, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand-gold hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-brand-blue flex-1">
                  {addOn.name}
                </h3>
                <span className="text-brand-gold font-bold text-lg ml-4">
                  {addOn.price}
                </span>
              </div>
              <p className="text-gray-700">{addOn.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Need something not listed? Ask during your consultation—we're flexible!
          </p>
        </div>
      </div>
    </section>
  )
}
