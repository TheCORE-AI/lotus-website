import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Paintbrush, Home, Wrench, Droplets, Hammer, Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: Paintbrush, title: 'Interior Painting', desc: 'Precision interior painting for homes, offices, and military housing. Clean lines, consistent coverage, zero shortcuts.' },
  { icon: Home, title: 'Exterior Painting', desc: 'Weather-resistant exterior coatings that protect and transform. Pressure washing, prep work, and premium paint systems.' },
  { icon: Wrench, title: 'General Maintenance', desc: 'Drywall repair, carpentry, fixture installation, and turnover-ready make-readies for property managers.' },
  { icon: Droplets, title: 'Pressure Washing', desc: 'Commercial-grade pressure washing for siding, driveways, decks, and concrete.' },
  { icon: Hammer, title: 'Carpentry & Repair', desc: 'Trim, baseboards, door frames, rot repair, and structural touch-ups.' },
  { icon: Building2, title: 'Commercial Services', desc: 'Multi-unit complexes, office buildings, and retail spaces. Scaled crews, on-time delivery.' },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.svc-row', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.svc-row', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="services" className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <p className="text-[#00E676] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-bold">
            Full-Service Painting & Maintenance
          </h2>
        </div>

        <div className="space-y-12">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`svc-row flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-[#00E676]/10 flex items-center justify-center">
                  <svc.icon size={36} className="text-[#00E676]" />
                </div>
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-[#1a1a1a] text-xl font-bold mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-xl">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
