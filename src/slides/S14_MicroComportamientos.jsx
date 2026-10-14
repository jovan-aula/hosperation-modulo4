import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const leftBehaviors = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M20 21a8 8 0 1 0-16 0"/>
      </svg>
    ),
    text: 'El contacto visual dice "existo para ti"',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
      </svg>
    ),
    text: 'La postura cerrada transmite rechazo',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    text: 'El tono de voz importa más que las palabras',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 17 18 12 13 7"/>
        <polyline points="6 17 11 12 6 7"/>
      </svg>
    ),
    text: 'La prisa visible genera abandono',
  },
]

const rightBehaviors = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    text: 'Llamar al paciente por su nombre lo humaniza',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    text: 'No cerrar una puerta en la cara de alguien que espera',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    text: 'Detenerse 10 segundos a orientar vs. señalar con el dedo',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    text: 'Una expresión de hastío es visible aunque no hables',
  },
]

export default function S14_MicroComportamientos() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', alignItems: 'flex-start', justifyContent: 'center' }}>
      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <motion.div {...fade(0.1)}>
          <span className="pill">Lo que el paciente percibe</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          Detalles que no son detalles
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {leftBehaviors.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(69,197,190,0.18)',
                  borderRadius: 12, padding: '0.9rem 1.1rem',
                  display: 'flex', alignItems: 'center', gap: '0.85rem',
                  boxShadow: '0 2px 6px rgba(12,45,78,0.05)',
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: 'rgba(69,197,190,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {b.icon}
                </div>
                <p style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', color: '#2D3748', margin: 0, lineHeight: 1.5 }}>
                  {b.text}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {rightBehaviors.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(69,197,190,0.18)',
                  borderRadius: 12, padding: '0.9rem 1.1rem',
                  display: 'flex', alignItems: 'center', gap: '0.85rem',
                  boxShadow: '0 2px 6px rgba(12,45,78,0.05)',
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: 'rgba(69,197,190,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {b.icon}
                </div>
                <p style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', color: '#2D3748', margin: 0, lineHeight: 1.5 }}>
                  {b.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
