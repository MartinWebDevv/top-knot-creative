import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 1.5rem', background: '#F3EDE5' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '3.5rem', alignItems: 'center' }}>

        <Reveal>
          <div style={{ position: 'relative', maxWidth: 480, margin: '0 auto' }}>
            <div style={{
              aspectRatio: '4/5', borderRadius: 8,
              background: 'linear-gradient(135deg, #DDD0C4 0%, #C8B8A8 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ textAlign: 'center', color: 'rgba(90,60,46,0.45)' }}>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="28" cy="20" r="10"/>
                  <path d="M6 50c0-12.15 9.85-22 22-22s22 9.85 22 22"/>
                </svg>
                <p style={{ marginTop: '0.75rem', fontSize: '0.82rem' }}>Your photo here</p>
              </div>
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '1.5rem',
                background: '#C8856A', borderRadius: 4, padding: '0.75rem 1.25rem',
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#FAF6F1', fontWeight: 600 }}>Martin Castellanos</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(250,246,241,0.75)', marginTop: '0.15rem' }}>Founder, Top Knot Creative</div>
              </div>
            </div>
            <div style={{
              position: 'absolute', top: '-1.5rem', right: '-1.5rem',
              width: 80, height: 80, borderRadius: '50%',
              border: '1.5px solid rgba(200,133,106,0.35)',
            }}/>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p style={{ fontSize: '0.78rem', color: '#1E7B6E', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '1rem' }}>About me</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            I build websites that feel as good as they perform.
          </h2>
          <p style={{ color: '#5C3D2E', lineHeight: 1.85, marginBottom: '1.2rem', fontWeight: 300, fontSize: '0.97rem' }}>
            Based in Las Vegas, I've spent the last five years helping local business owners look their best online. My clients are restaurants, salons, studios, and shops — real people who need a real web presence without the agency price tag.
          </p>
          <p style={{ color: '#5C3D2E', lineHeight: 1.85, marginBottom: '2rem', fontWeight: 300, fontSize: '0.97rem' }}>
            I handle everything from design and development to launch and beyond. No middlemen, no hand-offs — just a direct line to the person building your site.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React & Vite', 'Tailwind CSS', 'SEO'].map(skill => (
              <span key={skill} style={{
                padding: '0.4rem 1rem', borderRadius: 100,
                border: '1px solid rgba(30,123,110,0.35)',
                fontSize: '0.8rem', color: '#1E7B6E', fontWeight: 500,
              }}>
                {skill}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}