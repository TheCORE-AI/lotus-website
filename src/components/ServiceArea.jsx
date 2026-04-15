import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const areas = [
  'Fayetteville', 'Fort Liberty', 'Spring Lake', 'Hope Mills',
  'Raeford', 'Southern Pines', 'Sanford', 'Lumberton',
]

export default function ServiceArea() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.area-content > *', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.area-content', start: 'top 85%' },
      })
      gsap.fromTo('.area-pill', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.area-pill', start: 'top 90%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="area" className="py-24 lg:py-32 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="area-content">
            <p className="text-[#00E676] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Where We Work
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Serving the Greater Fayetteville Area
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              From Fort Liberty housing to downtown commercial properties, LOTUS covers
              the Sandhills region and surrounding communities. We travel up to 60 miles
              for the right project.
            </p>
            <a href="tel:9104240708" className="btn-gold text-base">
              <MapPin size={18} />
              Check If We Cover Your Area
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {areas.map((area) => (
              <div key={area} className="area-pill bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex items-center gap-3 transition-all hover:bg-white/10 hover:border-[#00E676]/30">
                <MapPin size={16} className="text-[#00E676] shrink-0" />
                <span className="text-white text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
