import logo from '../assets/logo.png'

export default function Navbar({ scrolled, scrollTo }) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,246,241,0.95)' : 'rgba(250,246,241,0.0)',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,133,106,0.15)' : '1px solid transparent',
      padding: '0 2.5rem',
      height: 76,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
    }}>
      <button onClick={() => scrollTo('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <img src={logo} alt="Top Knot Creative" style={{ height: 68, width: 'auto', objectFit: 'contain' }} />
      </button>

      <div className="hidden md:flex items-center gap-8">
        {['About', 'Work', 'Services', 'Testimonials', 'FAQ', 'Contact'].map(l => (
          <button
            key={l}
            onClick={() => scrollTo(l.toLowerCase())}
            className="nav-link"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#5C3D2E', fontSize: '0.82rem',
              letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500,
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <button onClick={() => scrollTo('contact')} style={{
        background: '#1E7B6E', color: '#FAF6F1', border: 'none',
        borderRadius: 4, padding: '0.55rem 1.4rem',
        fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer',
        letterSpacing: '0.02em',
      }}>
        Let's talk
      </button>
    </nav>
  )
}