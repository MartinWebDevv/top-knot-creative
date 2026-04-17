import logo from '../assets/logo.png'

export default function Footer({ scrollTo }) {
  return (
    <footer style={{
      padding: '2rem 2.5rem',
      background: '#1A0E08',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
    }}>
      <img
        src={logo}
        alt="Top Knot Creative"
        style={{ height: 52, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.85 }}
      />
      <span style={{ fontSize: '0.8rem', color: 'rgba(250,246,241,0.35)' }}>
        © {new Date().getFullYear()} Martin Castellanos · Top Knot Creative · Las Vegas, NV
      </span>
      <div className="flex gap-6">
        {['About', 'Work', 'Services', 'Contact'].map(l => (
          <button
            key={l}
            onClick={() => scrollTo(l.toLowerCase())}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(250,246,241,0.4)', fontSize: '0.78rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
          >
            {l}
          </button>
        ))}
      </div>
    </footer>
  )
}