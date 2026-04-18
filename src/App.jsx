import { useState, useEffect, useRef } from 'react'

import Navbar from './components/NavBar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 40)
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FAF6F1', color: '#2C1810', overflowX: 'hidden' }}>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Navbar scrolled={scrolled} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Work />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </div>
  )
}