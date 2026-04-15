import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { num: '01', title: 'Built on Trust', desc: "Licensed, insured, and EPA Lead-Safe Certified. We carry proper coverage because cutting corners isn't in our vocabulary." },
  { num: '02', title: 'Veteran-Led Crews', desc: 'Founded by military veterans who understand discipline, punctuality, and getting it right the first time.' },
  { num: '03', title: 'Quality Guaranteed', desc: "Over a decade of experience across residential, commercial, and military housing. Every job gets a final walkthrough." },
]

export default function WhyLotus() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-card', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.why-grid', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="why" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <p className="text-[#FF2D78] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-bold">
            The LOTUS Difference
          </h2>
        </div>

        <div className="why-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.num} className="why-card bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100">
              <div className="pink-top-border" />
              <div className="p-8">
                <span className="text-[#F0C840] text-4xl font-bold block mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {v.num}
                </span>
                <h3 className="text-[#1a1a1a] text-lg font-bold mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
