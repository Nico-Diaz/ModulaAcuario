import DepthGauge from './components/DepthGauge.jsx'
import MobiAssistant from './components/MobiAssistant.jsx'
import Navbar from './components/Navbar.jsx'
import OceanBackground from './components/OceanBackground.jsx'
import Contacto from './sections/Contacto.jsx'
import Entradas from './sections/Entradas.jsx'
import Experiencias from './sections/Experiencias.jsx'
import Footer from './sections/Footer.jsx'
import Galeria from './sections/Galeria.jsx'
import Hero from './sections/Hero.jsx'
import Merch from './sections/Merch.jsx'
import Novedades from './sections/Novedades.jsx'
import Servicios from './sections/Servicios.jsx'
import SobreNosotros from './sections/SobreNosotros.jsx'

export default function App() {
  return (
    <>
      <a href="#sobre-nosotros" className="sr-only z-50 rounded-full bg-glow px-4 py-2 text-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Saltar al contenido
      </a>
      <OceanBackground />
      <Navbar />
      <DepthGauge />
      <main className="relative">
        <Hero />
        <SobreNosotros />
        <Novedades />
        <Experiencias />
        <Servicios />
        <Galeria />
        <Merch />
        <Entradas />
        <Contacto />
      </main>
      <Footer />
      <MobiAssistant />
    </>
  )
}
