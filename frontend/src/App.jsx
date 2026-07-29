import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import HowItWorks from './components/HowItWorks'
import Compare from './components/Compare'
import Download from './components/Download'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Intro />
      <HowItWorks />
      <Compare />
      <Download />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
