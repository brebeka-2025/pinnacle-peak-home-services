import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'

export default function FAQ() {
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
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl">
            Everything you need to know about Pinnacle Peak Home Services. Click any question to see the answer.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          
          {/* Pricing & Packages */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Pricing & Packages</h2>
            
            <Accordion question="How much does your service cost?">
              <p className="mb-4">
                We offer four packages designed for different needs:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>Monthly:</strong> $250/month - Perfect for short trips</li>
                <li><strong>Summer:</strong> $895 (4 months) - Save 11% vs monthly</li>
                <li><strong>Seasonal:</strong> $1,395 (6 months) - Save 22% vs monthly</li>
                <li><strong>Annual:</strong> $1,595 (12 months) - Save 47% vs monthly</li>
              </ul>
              <p>
                All packages include weekly visits, 24/7 availability, and issue-based photo reporting. View our <a href="/services" className="text-brand-blue underline">Services page</a> for complete details.
              </p>
            </Accordion>

            <Accordion question="Are there any hidden fees?">
              <p className="mb-4">
                <strong>No.</strong> The price you see is what you pay. All packages include:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Weekly visits with comprehensive inspections</li>
                <li>24/7 emergency availability</li>
                <li>Issue-based photo reporting</li>
                <li>Immediate problem alerts</li>
              </ul>
              <p className="mt-4">
                Some services are optional add-ons (like contractor coordination or pet care), but these are clearly listed with pricing upfront.
              </p>
            </Accordion>

            <Accordion question="Can I switch packages?">
              <p>
                Yes, absolutely. You can upgrade, downgrade, or switch packages anytime. No penalties, no hassle. Just let me know and we'll adjust your service to fit your changing needs.
              </p>
            </Accordion>

            <Accordion question="What payment methods do you accept?">
              <p>
                I accept checks, Zelle, Venmo, and direct bank transfer. Payment is typically due at the beginning of each service period (monthly, seasonal, or annually).
              </p>
            </Accordion>
          </div>

          {/* What's Included */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">What's Included</h2>
            
            <Accordion question="What exactly do you check during each visit?">
              <p className="mb-4"><strong>Every visit includes a comprehensive inspection:</strong></p>
              
              <p className="font-semibold mt-4 mb-2">Exterior:</p>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li>Roof and gutters (visual inspection)</li>
                <li>Walls, windows, and doors</li>
                <li>Landscaping and irrigation</li>
                <li>Pool/spa (if applicable)</li>
              </ul>
              
              <p className="font-semibold mb-2">Interior:</p>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li>All rooms inspected for damage, leaks, pests</li>
                <li>Run all faucets (prevent dry P-traps)</li>
                <li>Flush all toilets</li>
                <li>Check windows and doors are secure</li>
              </ul>
              
              <p className="font-semibold mb-2">Systems:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>HVAC operation and thermostat settings</li>
                <li>Water heater, plumbing, electrical</li>
                <li>Security system verification</li>
                <li>Mail and package retrieval</li>
              </ul>
            </Accordion>

            <Accordion question="Do you send photos after every visit?">
              <p className="mb-4">
                <strong>No, and here's why that's a good thing:</strong>
              </p>
              <p className="mb-4">
                Most home watch companies send 10-20 photos of your perfectly fine house every single visit. This creates "photo spam" that clutters your inbox and trains you to ignore their emails.
              </p>
              <p className="mb-4">
                <strong>My approach: Issue-based reporting</strong>
              </p>
              <p>
                You get a brief written summary after each visit confirming everything is fine. Photos are sent ONLY when there's a problem that needs your attention. This way, when you see photos from me, you know it actually matters.
              </p>
            </Accordion>

            <Accordion question="How do I know you actually visited my home?">
              <p className="mb-4">
                After each visit, you receive a written summary with:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Date and time of visit</li>
                <li>Specific observations (thermostat reading, condition notes)</li>
                <li>Any actions taken (mail collected, lights adjusted, etc.)</li>
                <li>Photos if any issues were found</li>
              </ul>
              <p className="mt-4">
                I also maintain a detailed digital log of all visits that you can access anytime.
              </p>
            </Accordion>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">How It Works</h2>
            
            <Accordion question="How do I get started?">
              <p className="mb-4"><strong>Simple 4-step process:</strong></p>
              <ol className="list-decimal ml-6 space-y-2">
                <li><strong>Free Consultation:</strong> Contact me to discuss your needs</li>
                <li><strong>Choose Your Package:</strong> Select the package that fits your travel schedule</li>
                <li><strong>Home Walkthrough:</strong> I visit your home to learn the layout and systems</li>
                <li><strong>Start Service:</strong> I begin weekly visits on your chosen start date</li>
              </ol>
              <p className="mt-4">
                From first contact to first visit typically takes 3-5 days.
              </p>
            </Accordion>

            <Accordion question="What do you need from me to get started?">
              <p className="mb-4">Just a few basics:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Home access (keys, garage code, or lockbox)</li>
                <li>Alarm code (if applicable)</li>
                <li>Emergency contact information</li>
                <li>Any specific instructions or areas of concern</li>
                <li>Thermostat preferences</li>
              </ul>
              <p className="mt-4">
                During our initial walkthrough, we'll cover all of this together.
              </p>
            </Accordion>

            <Accordion question="Are you really available 24/7?">
              <p className="mb-4">
                <strong>Yes, really.</strong> Not voicemail—actual availability.
              </p>
              <p className="mb-4">
                When you call my number:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>If I'm available, I answer</li>
                <li>If I'm on another visit, I call back within 2 hours</li>
                <li>For true emergencies, I respond immediately</li>
              </ul>
              <p className="mt-4">
                This is a major differentiator from corporate competitors who go to voicemail after 5 PM. When your AC fails on Saturday night, you need a real person.
              </p>
            </Accordion>

            <Accordion question="What happens if you find a problem?">
              <p className="mb-4">
                I contact you immediately with:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li>Photos of the issue</li>
                <li>My assessment of urgency</li>
                <li>Recommended next steps</li>
              </ul>
              <p className="mb-4">
                Based on your preference, I can:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Contact your preferred contractor</li>
                <li>Get quotes from multiple vendors</li>
                <li>Coordinate repairs and meet contractors on-site</li>
                <li>Send you updates throughout the process</li>
              </ul>
            </Accordion>
          </div>

          {/* About the Service */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">About the Service</h2>
            
            <Accordion question="What makes you different from other home watch companies?">
              <p className="mb-4"><strong>Five key differences:</strong></p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>50+ Years Experience:</strong> Most companies are 2-5 years old. I bring five decades of hands-on home knowledge.</li>
                <li><strong>Same Person Every Visit:</strong> I personally handle every visit. No rotating staff, no strangers.</li>
                <li><strong>True 24/7 Availability:</strong> I actually answer calls, not voicemail.</li>
                <li><strong>Local North Scottsdale Resident:</strong> I'm your neighbor, part of your community, minutes away.</li>
                <li><strong>Issue-Based Reporting:</strong> No photo spam—just real protection and immediate alerts when it matters.</li>
              </ul>
            </Accordion>

            <Accordion question="Are you licensed and insured?">
              <p className="mb-4"><strong>Yes, fully.</strong></p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Licensed by the State of Arizona</li>
                <li>General Liability Insurance ($1M coverage)</li>
                <li>Bonded for your protection</li>
                <li>NHWA Certified Professional</li>
              </ul>
              <p className="mt-4">
                I can provide proof of insurance and bonding upon request.
              </p>
            </Accordion>

            <Accordion question="Do you work alone or have a team?">
              <p>
                I work alone. This is a deliberate choice. When you hire me, you get me—the same person, every visit. I don't delegate to assistants or subcontractors. This ensures consistency, accountability, and the personal relationship that makes this service work.
              </p>
            </Accordion>

            <Accordion question="What areas do you serve?">
              <p className="mb-4">
                I serve North Scottsdale, specifically:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Pinnacle Peak</li>
                <li>DC Ranch</li>
                <li>Silverleaf</li>
                <li>Desert Mountain</li>
                <li>Troon</li>
                <li>Troon North</li>
                <li>Estancia</li>
              </ul>
              <p className="mt-4">
                If your home is in North Scottsdale but not in one of these specific neighborhoods, contact me—I likely serve your area.
              </p>
            </Accordion>
          </div>

          {/* Specific Situations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Specific Situations</h2>
            
            <Accordion question="I'm only gone 2-3 weeks at a time. Is this overkill?">
              <p className="mb-4">
                Not at all. Here's why weekly visits matter even for short trips:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Water leaks can cause thousands in damage in just days</li>
                <li>AC failures in Arizona summer = immediate crisis</li>
                <li>Package theft is opportunistic (empty house signals)</li>
                <li>Small issues caught early = big savings</li>
              </ul>
              <p className="mt-4">
                The Monthly package ($250) is perfect for occasional travelers who want peace of mind without long-term commitment.
              </p>
            </Accordion>

            <Accordion question="We're snowbirds (gone 6 months). Which package is best?">
              <p className="mb-4">
                The Seasonal package ($1,395 for 6 months) is designed specifically for snowbirds:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>26 weekly visits throughout your absence</li>
                <li>FREE pre-arrival home prep (AC on, lights set, etc.)</li>
                <li>FREE storm/monsoon services</li>
                <li>Save 22% vs paying monthly</li>
              </ul>
              <p className="mt-4">
                Most of my snowbird clients use November-April coverage, but I customize the dates to your exact schedule.
              </p>
            </Accordion>

            <Accordion question="I travel frequently for work (100-200 days/year). What do you recommend?">
              <p className="mb-4">
                The Annual package ($1,595) is perfect for frequent business travelers:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Year-round weekly visits whether you're home or away</li>
                <li>UNLIMITED contractor coordination at no extra charge</li>
                <li>Save 47% vs monthly pricing</li>
                <li>No need to turn service on/off as your schedule changes</li>
              </ul>
              <p className="mt-4">
                You travel when you need to, and your home is always protected. Simple.
              </p>
            </Accordion>

            <Accordion question="What if I need to cancel or pause service?">
              <p className="mb-4">
                <strong>Monthly package:</strong> No commitment. Cancel anytime with one week notice.
              </p>
              <p className="mb-4">
                <strong>Seasonal/Summer/Annual packages:</strong> If you need to cancel mid-service due to unforeseen circumstances (selling home, extended illness, etc.), we'll work out a fair prorated refund.
              </p>
              <p>
                I'm flexible and reasonable. Life happens. We'll figure it out together.
              </p>
            </Accordion>

            <Accordion question="Can you also help when I'm home?">
              <p className="mb-4">
                Yes! The Annual package includes services when you're home:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Same weekly inspections (you can be present or not)</li>
                <li>Quarterly in-depth system reviews</li>
                <li>UNLIMITED contractor coordination (no extra charges)</li>
                <li>Seasonal maintenance coordination</li>
              </ul>
              <p className="mt-4">
                Think of it as having a trusted home partner year-round, not just when you travel.
              </p>
            </Accordion>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-700 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8">
            I'm happy to answer any questions you have. No pressure, no obligation—just an honest conversation.
          </p>
          <Button variant="primary" href="/contact">
            Contact Me Today
          </Button>
        </div>
      </section>
    </div>
  )
}