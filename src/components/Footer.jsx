import logo from '../assets/logo.png'

export default function Footer({ scrollTo }) {
  return (
    <footer style={{
      padding: '2.5rem 1.5rem',
      background: '#1A0E08',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
        <img
          src={logo}
          alt="Top Knot Creative"
          style={{ height: 52, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.85 }}
        />
        <div className="flex flex-wrap justify-center gap-6">
          {['About', 'Work', 'Services', 'Testimonials', 'FAQ', 'Contact'].map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(250,246,241,0.45)', fontSize: '0.78rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              {l}
            </button>
          ))}
        </div>
        <span style={{ fontSize: '0.78rem', color: 'rgba(250,246,241,0.28)' }}>
          © {new Date().getFullYear()} Martin Castellanos · Top Knot Creative · Las Vegas, NV
        </span>
      </div>
    </footer>
  )
}