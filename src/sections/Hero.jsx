import logo from '../assets/logo.png'

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '9rem 2.5rem 5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', right: '-5vw', top: '50%', transform: 'translateY(-55%)',
        width: '52vw', maxWidth: 680, height: '52vw', maxHeight: 680,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 50%, rgba(200,133,106,0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', right: '10vw', top: '18%',
        width: '22vw', maxWidth: 300, height: '22vw', maxHeight: 300,
        borderRadius: '50%', border: '1px solid rgba(200,133,106,0.18)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', right: '18vw', top: '28%',
        width: '12vw', maxWidth: 160, height: '12vw', maxHeight: 160,
        borderRadius: '50%', border: '1px solid rgba(200,133,106,0.1)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>

        {/* Right: logo */}
        <div className="fade-up" style={{ order: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', animationDelay: '0.4s' }}>
          <img
            src={logo}
            alt="Top Knot Creative"
            style={{
              width: 'clamp(180px, 20vw, 300px)',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 12px 40px rgba(139,99,74,0.22))',
            }}
          />
        </div>

        {/* Left: text */}
        <div style={{ order: 1 }}>
          {/* Available badge */}
          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'rgba(200,133,106,0.12)', borderRadius: 100,
            padding: '0.35rem 1rem', marginBottom: '2.5rem',
            animationDelay: '0.1s',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C8856A', display: 'inline-block' }}/>
            <span style={{ fontSize: '0.78rem', color: '#C8856A', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
              Available for new projects
            </span>
          </div>

          <h1 className="fade-up" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            fontWeight: 600, lineHeight: 1.05,
            letterSpacing: '-0.025em',
            marginBottom: '1.8rem', maxWidth: 860,
            animationDelay: '0.2s',
          }}>
            Websites that work<br/>
            <em style={{ color: '#1E7B6E', fontStyle: 'italic' }}>as hard as you do.</em>
          </h1>

          <p className="fade-up" style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
            color: '#5C3D2E', maxWidth: 520,
            lineHeight: 1.8, marginBottom: '3rem', fontWeight: 300,
            animationDelay: '0.35s',
          }}>
            I'm Martin Castellanos — the designer and developer behind Top Knot Creative. I build custom websites for restaurants, local businesses, and health & beauty brands in Las Vegas and beyond.
          </p>

          <div className="fade-up flex gap-4 flex-wrap" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={() => scrollTo('work')}
              style={{ background: '#C8856A', color: '#FAF6F1', border: 'none', borderRadius: 4, padding: '1rem 2.4rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', transition: 'background 0.2s ease' }}
              onMouseEnter={e => e.target.style.background = '#A8654A'}
              onMouseLeave={e => e.target.style.background = '#C8856A'}
            >
              See my work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              style={{ background: 'transparent', color: '#2C1810', border: '1.5px solid rgba(44,24,16,0.22)', borderRadius: 4, padding: '1rem 2.4rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', transition: 'border-color 0.2s ease' }}
              onMouseEnter={e => e.target.style.borderColor = 'rgba(200,133,106,0.7)'}
              onMouseLeave={e => e.target.style.borderColor = 'rgba(44,24,16,0.22)'}
            >
              Get in touch
            </button>
          </div>

          {/* Stats */}
          <div className="fade-up flex flex-wrap gap-12 mt-20" style={{ animationDelay: '0.65s' }}>
            {[['1', 'Sites launched'], ['1 yrs', 'In business'], ['100%', 'Client satisfaction']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.6rem', fontWeight: 600, color: '#C8856A', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: '0.78rem', color: '#8A6658', marginTop: '0.3rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}