import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-[#FF2D78] text-xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
            LOTUS
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="nav-link text-sm font-medium">Services</a>
          <a href="#why" className="nav-link text-sm font-medium">Why LOTUS</a>
          <a href="#area" className="nav-link text-sm font-medium">Service Area</a>
        </div>

        <a href="tel:9104240708" className="btn-gold py-2.5 px-5 text-sm">
          <Phone size={15} />
          <span className="hidden sm:inline">(910) 424-0708</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
      <div className="h-[1px] bg-gray-100" />
    </nav>
  )
}
