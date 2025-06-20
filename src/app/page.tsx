import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Pillars from '@/components/Pillars'
import Events from '@/components/Events'
import Team from '@/components/Team'
import Resources from '@/components/Resources'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <Events />
      <Team />
      <Resources />
      <Contact />
      <Footer />
    </main>
  )
}
