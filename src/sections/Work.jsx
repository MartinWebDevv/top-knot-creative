import { useState } from 'react'
import Reveal from '../components/Reveal'
import { PROJECTS } from '../data/index.js'

const FILTERS = ['All', 'Restaurant', 'Health & Beauty', 'Local Business']

function ProjectPlaceholder() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2">
      <rect x="6" y="10" width="52" height="36" rx="3"/>
      <path d="M6 22h52M18 10v36"/>
      <rect x="24" y="28" width="28" height="10" rx="1"/>
      <circle cx="13" cy="16" r="2" fill="rgba(255,255,255,0.4)" stroke="none"/>
    </svg>
  )
}

export default function Work() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="work" style={{ padding: '8rem 2.5rem', background: '#FAF6F1' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <Reveal>
          <p style={{ fontSize: '0.78rem', color: '#1E7B6E', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '0.75rem' }}>Portfolio</p>
          <div className="flex justify-between items-end flex-wrap gap-6" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.15 }}>
              Selected work
            </h2>
            <div className="flex gap-2 flex-wrap">
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: '0.42rem 1.1rem', borderRadius: 100,
                    border: '1.5px solid',
                    borderColor: filter === f ? '#1E7B6E' : 'rgba(30,123,110,0.22)',
                    background: filter === f ? '#1E7B6E' : 'transparent',
                    color: filter === f ? '#FAF6F1' : '#8A6658',
                    fontSize: '0.82rem', fontWeight: 500, cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.07}>
              <div className="project-card" style={{
                background: '#F3EDE5', borderRadius: 8, overflow: 'hidden',
                border: '1px solid rgba(200,133,106,0.15)',
              }}>
                <div style={{
                  height: 210, background: project.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  <ProjectPlaceholder/>
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'rgba(0,0,0,0.22)', borderRadius: 100,
                    padding: '0.22rem 0.75rem',
                    fontSize: '0.72rem', color: '#FAF6F1', letterSpacing: '0.04em',
                  }}>
                    {project.category}
                  </span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.45rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#5C3D2E', lineHeight: 1.75, marginBottom: '1.1rem', fontWeight: 300 }}>
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(t => (
                      <span key={t} style={{
                        fontSize: '0.74rem', color: '#1E7B6E',
                        padding: '0.2rem 0.65rem',
                        border: '1px solid rgba(30,123,110,0.3)', borderRadius: 100,
                      }}>
                        {t}
                      </span>
                    ))}
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