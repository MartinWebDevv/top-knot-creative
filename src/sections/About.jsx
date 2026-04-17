import logo from '../assets/logo.png'

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '9rem 1.5rem 5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circles — hidden on small screens via opacity scaling */}
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

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        {/* Logo — shown on mobile above headline, hidden on desktop (shown in grid) */}
        <div className="flex justify-center mb-10 md:hidden fade-up" style={{ animationDelay: '0.1s' }}>
          <img
            src={logo}
            alt="Top Knot Creative"
            style={{ width: 'min(260px, 70vw)', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(139,99,74,0.2))' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '3rem', alignItems: 'center' }}>

          {/* Left: text */}
          <div>
            {/* Available badge */}
            <div className="fade-up" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(200,133,106,0.12)', borderRadius: 100,
              padding: '0.35rem 1rem', marginBottom: '2rem',
              animationDelay: '0.15s',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C8856A', display: 'inline-block' }}/>
              <span style={{ fontSize: '0.78rem', color: '#C8856A', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                Available for new projects
              </span>
            </div>

            <h1 className="fade-up" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.6rem, 7vw, 6.5rem)',
              fontWeight: 600, lineHeight: 1.05,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
              animationDelay: '0.25s',
            }}>
              Websites that work<br/>
              <em style={{ color: '#1E7B6E', fontStyle: 'italic' }}>as hard as you do.</em>
            </h1>

            <p className="fade-up" style={{
              fontSize: 'clamp(0.97rem, 1.4vw, 1.1rem)',
              color: '#5C3D2E',
              lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300,
              animationDelay: '0.35s',
            }}>
              I'm Martin Castellanos — the designer and developer behind Top Knot Creative. I build custom websites for restaurants, local businesses, and health & beauty brands in Las Vegas and beyond.
            </p>

            <div className="fade-up flex gap-3 flex-wrap" style={{ animationDelay: '0.45s' }}>
              <button
                onClick={() => scrollTo('work')}
                style={{ background: '#C8856A', color: '#FAF6F1', border: 'none', borderRadius: 4, padding: '0.9rem 2rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', transition: 'background 0.2s ease' }}
                onMouseEnter={e => e.target.style.background = '#A8654A'}
                onMouseLeave={e => e.target.style.background = '#C8856A'}
              >
                See my work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                style={{ background: 'transparent', color: '#2C1810', border: '1.5px solid rgba(44,24,16,0.22)', borderRadius: 4, padding: '0.9rem 2rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', transition: 'border-color 0.2s ease' }}
                onMouseEnter={e => e.target.style.borderColor = 'rgba(200,133,106,0.7)'}
                onMouseLeave={e => e.target.style.borderColor = 'rgba(44,24,16,0.22)'}
              >
                Get in touch
              </button>
            </div>

            {/* Stats */}
            <div className="fade-up flex flex-wrap gap-8 mt-14" style={{ animationDelay: '0.55s' }}>
              {[['30+', 'Sites launched'], ['5 yrs', 'In business'], ['100%', 'Client satisfaction']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 600, color: '#C8856A', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: '0.75rem', color: '#8A6658', marginTop: '0.3rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: logo — desktop only */}
          <div className="hidden md:flex fade-up justify-center items-center" style={{ animationDelay: '0.4s' }}>
            <img
              src={logo}
              alt="Top Knot Creative"
              style={{
                width: 'clamp(200px, 22vw, 320px)',
                height: 'auto', objectFit: 'contain',
                filter: 'drop-shadow(0 12px 40px rgba(139,99,74,0.22))',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}