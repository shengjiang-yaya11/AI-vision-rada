import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import HowItWorks from './components/HowItWorks'
import Compare from './components/Compare'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a2e]">
      <Navbar />
      <Hero />
      <Intro />
      <HowItWorks />
      <Compare />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
