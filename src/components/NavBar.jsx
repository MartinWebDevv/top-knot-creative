import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar({ scrolled, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = id => {
    scrollTo(id)
    setMenuOpen(false)
  }

  const links = ['About', 'Work', 'Services', 'Testimonials', 'FAQ', 'Contact']

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || menuOpen ? 'rgba(250,246,241,0.97)' : 'rgba(250,246,241,0.0)',
        backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(200,133,106,0.15)' : '1px solid transparent',
        padding: '0 1.5rem',
        height: 76,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}>
        {/* Logo */}
        <button onClick={() => handleNav('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <img src={logo} alt="Top Knot Creative" style={{ height: 68, width: 'auto', objectFit: 'contain' }} />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l}
              onClick={() => handleNav(l.toLowerCase())}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5C3D2E', fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNav('contact')}
          className="hidden md:block"
          style={{ background: '#1E7B6E', color: '#FAF6F1', border: 'none', borderRadius: 4, padding: '0.55rem 1.4rem', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer' }}
        >
          Let's talk
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#2C1810' }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div style={{
        position: 'fixed', top: 76, left: 0, right: 0, zIndex: 99,
        background: 'rgba(250,246,241,0.97)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(200,133,106,0.15)',
        display: 'flex', flexDirection: 'column',
        maxHeight: menuOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        {links.map(l => (
          <button
            key={l}
            onClick={() => handleNav(l.toLowerCase())}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#2C1810', fontSize: '1rem', fontWeight: 500,
              letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '1rem 1.5rem', textAlign: 'left',
              borderBottom: '1px solid rgba(200,133,106,0.1)',
            }}
          >
            {l}
          </button>
        ))}
        <div style={{ padding: '1rem 1.5rem' }}>
          <button
            onClick={() => handleNav('contact')}
            style={{ background: '#1E7B6E', color: '#FAF6F1', border: 'none', borderRadius: 4, padding: '0.75rem 1.5rem', fontSize: '0.95rem', fontWeight: 500, cursor: 'pointer', width: '100%' }}
          >
            Let's talk
          </button>
        </div>
      </div>
    </>
  )
}