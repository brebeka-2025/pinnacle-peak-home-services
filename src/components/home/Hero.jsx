import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative text-white py-24 px-6 min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src="/hero-background.jpg" 
        alt="Arizona Desert Sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Your Home Deserves Personal, Professional Care
        </h1>
        <p className="text-xl md:text-2xl mb-4 leading-relaxed">
          With 50+ years of home experience and true 24/7 availability, John provides the same person every visit—someone you can trust with your most valuable asset.
        </p>
        <p className="text-lg md:text-xl italic mb-8">
          No photo spam. No corporate runaround. Just real protection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/contact">
            Get Free Consultation
          </Button>
          <Button variant="secondary" href="/services">
            View Services & Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}