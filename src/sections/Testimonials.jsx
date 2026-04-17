import Reveal from '../components/Reveal'
import { TESTIMONIALS } from '../data/index.js'

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '8rem 2.5rem', background: '#F3EDE5' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <Reveal>
          <p style={{ fontSize: '0.78rem', color: '#1E7B6E', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '0.75rem' }}>Kind words</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '4rem' }}>
            What clients say
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div style={{
                background: '#FAF6F1', borderRadius: 8, padding: '2rem',
                border: '1px solid rgba(200,133,106,0.15)',
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '4rem', color: '#1E7B6E', lineHeight: 0.8, marginBottom: '1rem', opacity: 0.55 }}>
                  "
                </div>
                <p style={{ fontSize: '0.95rem', color: '#2C1810', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300, fontStyle: 'italic' }}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: '#1E7B6E',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FAF6F1', fontSize: '0.78rem', fontWeight: 500, flexShrink: 0,
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#2C1810' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#8A6658' }}>{t.business}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}