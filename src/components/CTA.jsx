import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-inner > *', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.cta-inner', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#FF2D78]">
      <div className="cta-inner max-w-3xl mx-auto px-6 lg:px-16 text-center">
        <p className="text-white/60 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
          Ready to Get Started?
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
          Let&apos;s Talk About Your Project
        </h2>
        <p className="text-white/80 text-lg mb-10 leading-relaxed">
          Whether it&apos;s a single room or an entire complex, we&apos;ll give you a straight
          answer and a fair price. No pressure, no gimmicks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:9104240708" className="btn-gold text-base justify-center">
            <Phone size={18} />
            Call (910) 424-0708
          </a>
          <a href="mailto:LotusPaintingAndMaintenance@gmail.com" className="btn-outline text-base justify-center">
            <Mail size={18} />
            Send an Email
          </a>
        </div>
      </div>
    </section>
  )
}
