import { Phone, Mail, MapPin, Shield, Award, Clock } from 'lucide-react'

const serviceList = [
  'Interior Painting', 'Exterior Painting', 'General Maintenance',
  'Pressure Washing', 'Carpentry & Repair', 'Commercial Services',
]
const areaList = [
  'Fayetteville', 'Fort Liberty', 'Spring Lake', 'Hope Mills',
  'Raeford', 'Southern Pines', 'Sanford', 'Lumberton',
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white/50 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <h3 className="text-[#FF2D78] text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              LOTUS
            </h3>
            <p className="text-white/25 text-sm mb-4">Painting & Maintenance Inc.</p>
            <p className="text-sm leading-relaxed">
              Professional painting and maintenance services for residential, commercial,
              and military housing across the greater Fayetteville area.
            </p>
          </div>

          <div>
            <h4 className="text-[#F0C840] text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceList.map((s) => (
                <li key={s} className="text-sm hover:text-white transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F0C840] text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Service Area
            </h4>
            <ul className="space-y-2.5">
              {areaList.map((a) => (
                <li key={a} className="text-sm hover:text-white transition-colors cursor-default">{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F0C840] text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Contact Us
            </h4>
            <div className="space-y-3">
              <a href="tel:9104240708" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone size={14} className="shrink-0" />
                (910) 424-0708
              </a>
              <a href="mailto:LotusPaintingAndMaintenance@gmail.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors break-all">
                <Mail size={14} className="shrink-0" />
                LotusPaintingAndMaintenance@gmail.com
              </a>
              <span className="flex items-center gap-3 text-sm">
                <MapPin size={14} className="shrink-0" />
                Fayetteville, NC
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-6 text-white/30 text-xs">
            <span className="flex items-center gap-2">
              <Shield size={14} className="text-[#00E676]" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <Award size={14} className="text-[#F0C840]" />
              EPA Lead-Safe Certified
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-[#FF2D78]" />
              10+ Years Experience
            </span>
          </div>
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} LOTUS Painting & Maintenance Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
