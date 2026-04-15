import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LotusBloom from './components/LotusBloom'
import Services from './components/Services'
import WhyLotus from './components/WhyLotus'
import ServiceArea from './components/ServiceArea'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-[100dvh]">
      <Navbar />
      <main>
        <Hero />
        <LotusBloom />
        <Services />
        <WhyLotus />
        <ServiceArea />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
