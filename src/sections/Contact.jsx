import { useState } from 'react'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', business: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{ padding: '5rem 1.5rem', background: '#2C1810' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem', alignItems: 'start' }}>

        <Reveal>
          <p style={{ fontSize: '0.78rem', color: '#1E7B6E', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '0.75rem' }}>Get in touch</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 600, color: '#FAF6F1', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Let's build something<br/><em style={{ color: '#C8856A' }}>worth showing off.</em>
          </h2>
          <p style={{ color: 'rgba(250,246,241,0.6)', lineHeight: 1.8, fontWeight: 300, fontSize: '0.97rem', marginBottom: '2rem' }}>
            Whether you're starting from scratch or ready for a redesign, I'd love to hear about your business. Drop me a message and I'll get back to you within one business day.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { label: 'Email', value: 'martin@topknotcreative.com' },
              { label: 'Phone', value: '(702) 555-0100' },
              { label: 'Based in', value: 'Las Vegas, NV' },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-3 items-start">
                <span style={{ fontSize: '0.75rem', color: '#1E7B6E', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', paddingTop: '0.15rem', minWidth: 60 }}>{label}</span>
                <span style={{ color: 'rgba(250,246,241,0.75)', fontSize: '0.95rem' }}>{value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {submitted ? (
            <div style={{
              background: 'rgba(200,133,106,0.1)', border: '1px solid rgba(200,133,106,0.25)',
              borderRadius: 8, padding: '3rem', textAlign: 'center',
            }}>
              <div style={{ color: '#1E7B6E', marginBottom: '1rem' }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="24" cy="24" r="20"/>
                  <path d="M14 24l7 7 13-14"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: '#FAF6F1', fontWeight: 600, marginBottom: '0.75rem' }}>
                Message sent!
              </h3>
              <p style={{ color: 'rgba(250,246,241,0.6)', fontWeight: 300 }}>
                Thanks for reaching out. I'll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { name: 'name', label: 'Your name', type: 'text', required: true },
                { name: 'email', label: 'Email address', type: 'email', required: true },
                { name: 'business', label: 'Business name', type: 'text', required: false },
              ].map(({ name, label, type, required }) => (
                <div key={name}>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(250,246,241,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {label}{required && <span style={{ color: '#C8856A' }}> *</span>}
                  </label>
                  <input
                    type={type}
                    required={required}
                    value={formData[name]}
                    onChange={e => setFormData(p => ({ ...p, [name]: e.target.value }))}
                    style={{
                      width: '100%', background: 'rgba(250,246,241,0.06)',
                      border: '1px solid rgba(200,133,106,0.25)', borderRadius: 4,
                      padding: '0.85rem 1rem', color: '#FAF6F1',
                      fontSize: '1rem', outline: 'none', boxSizing: 'border-box',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(30,123,110,0.7)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(200,133,106,0.25)'}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(250,246,241,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Message <span style={{ color: '#C8856A' }}>*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me a bit about your business and what you're looking for..."
                  style={{
                    width: '100%', background: 'rgba(250,246,241,0.06)',
                    border: '1px solid rgba(200,133,106,0.25)', borderRadius: 4,
                    padding: '0.85rem 1rem', color: '#FAF6F1',
                    fontSize: '1rem', outline: 'none', resize: 'vertical',
                    boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif",
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(30,123,110,0.7)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(200,133,106,0.25)'}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: '#C8856A', color: '#FAF6F1',
                  border: 'none', borderRadius: 4,
                  padding: '1rem 2rem', fontSize: '1rem',
                  fontWeight: 500, cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => e.target.style.background = '#A8654A'}
                onMouseLeave={e => e.target.style.background = '#C8856A'}
              >
                Send message →
              </button>
            </form>
          )}
        </Reveal>

      </div>
    </section>
  )
}