import Reveal from '../components/Reveal'
import { SERVICES } from '../data/index.js'

const ICONS = {
  monitor: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="5" width="26" height="18" rx="2"/>
      <path d="M10 29h12M16 23v6"/>
    </svg>
  ),
  globe: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="16" cy="16" r="12"/>
      <path d="M16 4c0 0-5 6-5 12s5 12 5 12M16 4c0 0 5 6 5 12s-5 12-5 12M4 16h24"/>
    </svg>
  ),
  layers: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="7" width="16" height="20" rx="2"/>
      <rect x="12" y="5" width="16" height="20" rx="2"/>
    </svg>
  ),
  chart: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 24l7-9 6 7 4-5 7 7"/>
      <circle cx="26" cy="9" r="4"/>
    </svg>
  ),
}

export default function Services() {
  return (
    <section id="services" style={{ padding: '8rem 2.5rem', background: '#2C1810' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <Reveal>
          <p style={{ fontSize: '0.78rem', color: '#1E7B6E', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '0.75rem' }}>What I offer</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, color: '#FAF6F1', lineHeight: 1.15, marginBottom: '4rem', maxWidth: 560 }}>
            Services built for<br/><em style={{ color: '#C8856A' }}>local businesses</em>
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div
                style={{
                  background: 'rgba(200,133,106,0.07)',
                  border: '1px solid rgba(200,133,106,0.18)',
                  borderRadius: 8, padding: '2rem',
                  transition: 'background 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(200,133,106,0.14)'
                  e.currentTarget.style.borderColor = 'rgba(200,133,106,0.45)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(200,133,106,0.07)'
                  e.currentTarget.style.borderColor = 'rgba(200,133,106,0.18)'
                }}
              >
                <div style={{ color: '#1E7B6E', marginBottom: '1.25rem' }}>{ICONS[s.iconKey]}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: '#FAF6F1', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.87rem', color: 'rgba(250,246,241,0.6)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
                  {s.desc}
                </p>
                <div style={{ fontSize: '0.9rem', color: '#C8856A', fontWeight: 500 }}>{s.price}</div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}