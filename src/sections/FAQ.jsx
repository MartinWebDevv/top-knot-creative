import { useState } from 'react'
import Reveal from '../components/Reveal'
import { FAQS } from '../data/index.js'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(139,99,74,0.2)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-4 text-left py-5"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', color: '#2C1810', fontWeight: 600 }}>
          {q}
        </span>
        <span
          className={`faq-icon ${open ? 'open' : ''}`}
          style={{
            width: 28, height: 28, borderRadius: '50%',
            border: '1.5px solid #1E7B6E',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#1E7B6E', flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 1v10M1 6h10"/>
          </svg>
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p style={{ paddingBottom: '1.25rem', color: '#5C3D2E', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 300 }}>
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: '8rem 2.5rem', background: '#FAF6F1' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        <Reveal>
          <p style={{ fontSize: '0.78rem', color: '#1E7B6E', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '0.75rem' }}>FAQ</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '3.5rem' }}>
            Common questions
          </h2>
        </Reveal>

        <div style={{ borderTop: '1px solid rgba(139,99,74,0.2)' }}>
          {FAQS.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <FAQItem q={faq.q} a={faq.a}/>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}