import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const isNum = !isNaN(parseInt(target))
    if (!isNum) { setCount(target); return }
    const num = parseInt(target)
    const suffix = target.toString().replace(String(num), '')
    let startTime = null
    const step = timestamp => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * num) + suffix)
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [start, target])
  return count
}

function StatCounter({ num, label }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const count = useCountUp(num, 1200, started)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 600, color: '#C8856A', lineHeight: 1 }}>
        {started ? count : '0'}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#8A6658', marginTop: '0.3rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '9rem 1.5rem 5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Animated floating orbs */}
      <div className="orb-a" style={{
        position: 'absolute', right: '-5vw', top: '50%', transform: 'translateY(-55%)',
        width: '52vw', maxWidth: 680, height: '52vw', maxHeight: 680,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 50%, rgba(200,133,106,0.13) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>
      <div className="orb-b" style={{
        position: 'absolute', right: '10vw', top: '18%',
        width: '22vw', maxWidth: 300, height: '22vw', maxHeight: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30,123,110,0.07) 0%, transparent 70%)',
        border: '1px solid rgba(200,133,106,0.15)',
        pointerEvents: 'none',
      }}/>
      <div className="orb-c" style={{
        position: 'absolute', right: '22vw', top: '60%',
        width: '10vw', maxWidth: 140, height: '10vw', maxHeight: 140,
        borderRadius: '50%',
        border: '1px solid rgba(30,123,110,0.12)',
        pointerEvents: 'none',
      }}/>
      <div className="orb-b" style={{
        position: 'absolute', left: '-4vw', top: '30%',
        width: '18vw', maxWidth: 240, height: '18vw', maxHeight: 240,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,133,106,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        {/* Mobile logo */}
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

            {/* Stats with counter animation */}
            <div className="fade-up flex flex-wrap gap-8 mt-14" style={{ animationDelay: '0.55s' }}>
              <StatCounter num="1" label="Sites launched" />
              <StatCounter num="1" label="Yrs in business" />
              <StatCounter num="100%" label="Client satisfaction" />
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