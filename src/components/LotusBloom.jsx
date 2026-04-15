import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LotusBloom() {
  const sectionRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2500',
          pin: true,
          scrub: 1,
        },
      })

      // Phase 1: Stem grows up
      tl.fromTo('.lotus-stem', { scaleY: 0 }, { scaleY: 1, duration: 0.15, ease: 'none' })

      // Phase 2: Leaves spread
      tl.fromTo('.lotus-leaf-l', { scale: 0, rotate: 20, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 0.1, ease: 'power2.out' }, 0.1)
      tl.fromTo('.lotus-leaf-r', { scale: 0, rotate: -20, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 0.1, ease: 'power2.out' }, 0.12)

      // Phase 3: Base petals (outer, lighter) unfurl
      tl.fromTo('.petal-outer', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.15, stagger: 0.02, ease: 'back.out(1.4)' }, 0.2)

      // Phase 4: Inner petals bloom
      tl.fromTo('.petal-inner', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.15, stagger: 0.02, ease: 'back.out(1.4)' }, 0.35)

      // Phase 5: Gold center appears with glow
      tl.fromTo('.lotus-center', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.1, ease: 'elastic.out(1, 0.5)' }, 0.5)
      tl.fromTo('.lotus-stamen', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.1, stagger: 0.01, ease: 'power2.out' }, 0.55)

      // Phase 6: Text fades in
      tl.fromTo('.bloom-text-1', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.08 }, 0.6)
      tl.fromTo('.bloom-text-2', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.08 }, 0.65)

      // Phase 7: Subtle glow pulse on the whole flower
      tl.to('.lotus-flower-group', { filter: 'drop-shadow(0 0 30px rgba(255,45,120,0.3))', duration: 0.15 }, 0.7)
      tl.to('.lotus-flower-group', { filter: 'drop-shadow(0 0 15px rgba(255,45,120,0.15))', duration: 0.15 }, 0.85)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="h-[100dvh] bg-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,45,120,0.05) 0%, transparent 70%)' }} />

      <div className="flex flex-col items-center">
        <svg
          ref={svgRef}
          viewBox="0 0 400 500"
          className="w-[280px] sm:w-[340px] md:w-[400px] h-auto lotus-flower-group"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stem */}
          <rect className="lotus-stem" x="196" y="320" width="8" height="150" rx="4" fill="#00E676" style={{ transformOrigin: '200px 470px' }} />

          {/* Leaves */}
          <path className="lotus-leaf-l" d="M200 380C200 380 140 370 110 390C130 380 160 378 200 380Z" fill="#00E676" opacity="0.7" style={{ transformOrigin: '200px 380px' }} />
          <path className="lotus-leaf-r" d="M200 380C200 380 260 370 290 390C270 380 240 378 200 380Z" fill="#00E676" opacity="0.7" style={{ transformOrigin: '200px 380px' }} />
          <path className="lotus-leaf-l" d="M200 400C200 400 130 395 90 420C120 405 165 398 200 400Z" fill="#00E676" opacity="0.5" style={{ transformOrigin: '200px 400px' }} />
          <path className="lotus-leaf-r" d="M200 400C200 400 270 395 310 420C280 405 235 398 200 400Z" fill="#00E676" opacity="0.5" style={{ transformOrigin: '200px 400px' }} />

          {/* Outer petals (lighter pink) */}
          <path className="petal-outer" d="M200 120C200 120 155 180 155 240C155 280 200 320 200 320C200 320 245 280 245 240C245 180 200 120 200 120Z" fill="#FF7DAF" opacity="0.5" style={{ transformOrigin: '200px 240px' }} />
          <path className="petal-outer" d="M120 170C120 170 130 220 160 260C185 295 200 310 200 310C200 310 175 265 165 230C150 195 120 170 120 170Z" fill="#FF7DAF" opacity="0.45" style={{ transformOrigin: '170px 240px' }} />
          <path className="petal-outer" d="M280 170C280 170 270 220 240 260C215 295 200 310 200 310C200 310 225 265 235 230C250 195 280 170 280 170Z" fill="#FF7DAF" opacity="0.45" style={{ transformOrigin: '230px 240px' }} />
          <path className="petal-outer" d="M90 210C90 210 110 250 145 275C175 295 200 305 200 305C200 305 160 275 140 250C115 225 90 210 90 210Z" fill="#FF7DAF" opacity="0.35" style={{ transformOrigin: '150px 260px' }} />
          <path className="petal-outer" d="M310 210C310 210 290 250 255 275C225 295 200 305 200 305C200 305 240 275 260 250C285 225 310 210 310 210Z" fill="#FF7DAF" opacity="0.35" style={{ transformOrigin: '250px 260px' }} />

          {/* Inner petals (vibrant pink) */}
          <path className="petal-inner" d="M200 150C200 150 170 200 170 245C170 275 200 305 200 305C200 305 230 275 230 245C230 200 200 150 200 150Z" fill="#FF2D78" opacity="0.7" style={{ transformOrigin: '200px 240px' }} />
          <path className="petal-inner" d="M145 195C145 195 155 230 175 258C195 280 200 295 200 295C200 295 180 260 172 240C160 215 145 195 145 195Z" fill="#FF2D78" opacity="0.6" style={{ transformOrigin: '175px 245px' }} />
          <path className="petal-inner" d="M255 195C255 195 245 230 225 258C205 280 200 295 200 295C200 295 220 260 228 240C240 215 255 195 255 195Z" fill="#FF2D78" opacity="0.6" style={{ transformOrigin: '225px 245px' }} />

          {/* Gold center */}
          <circle className="lotus-center" cx="200" cy="245" r="22" fill="#F0C840" style={{ transformOrigin: '200px 245px' }} />

          {/* Stamens */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
            const rad = (angle * Math.PI) / 180
            const x = 200 + Math.cos(rad) * 16
            const y = 245 + Math.sin(rad) * 16
            return <circle key={angle} className="lotus-stamen" cx={x} cy={y} r="2.5" fill="#E0B030" style={{ transformOrigin: `${x}px ${y}px` }} />
          })}
        </svg>

        {/* Text that fades in during bloom */}
        <div className="mt-10 text-center">
          <p className="bloom-text-1 text-[#FF2D78] font-semibold text-sm tracking-[0.2em] uppercase mb-2 opacity-0">
            Rooted in Excellence
          </p>
          <h2 className="bloom-text-2 text-[#1a1a1a] text-2xl md:text-4xl font-bold opacity-0">
            Watch Us Bloom
          </h2>
        </div>
      </div>
    </section>
  )
}
