import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const reglas = [
  {
    label: 'Celulares en silencio',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
        <line x1="2" y1="2" x2="22" y2="22" stroke="rgba(255,80,80,0.8)" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Participación activa',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
      </svg>
    ),
  },
  {
    label: 'Respeto a todos los comentarios',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    label: 'Esta sesión es para ti, disfrútala',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
]

export default function S02_ReglasDelJuego() {
  return (
    <div className="slide slide--dark bg-dots--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <div style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Para aprovechar mejor este espacio
          </div>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title slide-title--white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Reglas del juego
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: '50px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {reglas.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(69,197,190,0.2)',
                borderRadius: '16px', padding: '1.5rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
              }}
            >
              <div style={{
                width: '56px', height: '56px', borderRadius: '12px',
                background: 'rgba(69,197,190,0.1)', border: '1px solid rgba(69,197,190,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {r.icon}
              </div>
              <p style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.45, fontWeight: 500 }}>
                {r.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
