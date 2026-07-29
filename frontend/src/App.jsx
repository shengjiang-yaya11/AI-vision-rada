import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import TechStack from './components/TechStack'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200">
      <Navbar />
      <Hero />
      <Features />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
