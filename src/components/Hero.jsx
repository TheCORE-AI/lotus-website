import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Phone, Mail } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-item', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power2.out', delay: 0.3,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden">
      {/* Decorative neon accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #FF2D78 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #00E676 0%, transparent 70%)' }} />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #F0C840 0%, transparent 70%)' }} />
      </div>

      {/* Lotus SVG decoration */}
      <div className="absolute right-[5%] top-[15%] w-[400px] h-[400px] opacity-[0.06] lotus-glow pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 30C100 30 85 65 85 100C85 135 100 170 100 170C100 170 115 135 115 100C115 65 100 30 100 30Z" fill="#FF2D78" opacity="0.9"/>
          <path d="M60 50C60 50 55 85 70 110C85 135 100 145 100 145C100 145 80 120 75 95C70 70 60 50 60 50Z" fill="#FF2D78" opacity="0.7"/>
          <path d="M35 75C35 75 40 105 60 125C80 145 100 150 100 150C100 150 70 135 55 115C40 95 35 75 35 75Z" fill="#FF2D78" opacity="0.5"/>
          <path d="M140 50C140 50 145 85 130 110C115 135 100 145 100 145C100 145 120 120 125 95C130 70 140 50 140 50Z" fill="#FF2D78" opacity="0.7"/>
          <path d="M165 75C165 75 160 105 140 125C120 145 100 150 100 150C100 150 130 135 145 115C160 95 165 75 165 75Z" fill="#FF2D78" opacity="0.5"/>
          <circle cx="100" cy="100" r="12" fill="#F0C840" opacity="0.8"/>
          <circle cx="100" cy="100" r="6" fill="#F0C840"/>
          <path d="M100 155C100 155 70 160 55 175C70 170 100 168 100 168" fill="#00E676" opacity="0.6"/>
          <path d="M100 155C100 155 130 160 145 175C130 170 100 168 100 168" fill="#00E676" opacity="0.6"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-16 pt-32 pb-20 w-full">
        <p className="hero-item text-[#00E676] font-semibold text-sm tracking-[0.2em] uppercase mb-6">
          Fayetteville&apos;s Trusted Painting Professionals
        </p>
        <h1 className="hero-item text-[#1a1a1a] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-8">
          Quality Painting<br />
          <span className="italic font-semibold text-[#FF2D78]" style={{ fontFamily: "'Playfair Display', serif" }}>&amp;</span>{' '}
          Maintenance You<br />
          Can Trust
        </h1>
        <p className="hero-item text-gray-500 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          From military housing to commercial properties, LOTUS delivers expert
          painting, maintenance, and refinishing services across the greater Fayetteville area.
        </p>

        <div className="hero-item flex flex-col sm:flex-row gap-4 mb-12">
          <a href="tel:9104240708" className="btn-gold text-base">
            <Phone size={18} />
            Call (910) 424-0708
          </a>
          <a href="mailto:LotusPaintingAndMaintenance@gmail.com" className="btn-pink-outline text-base">
            <Mail size={18} />
            Email Us
          </a>
        </div>

        <div className="hero-item flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-400 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E676]" />
            Licensed &amp; Insured
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E676]" />
            EPA Lead-Safe Certified
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E676]" />
            10+ Years Experience
          </span>
        </div>
      </div>
    </section>
  )
}
