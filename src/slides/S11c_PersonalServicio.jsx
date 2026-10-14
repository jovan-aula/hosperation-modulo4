import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const items = [
  {
    titulo: 'Controla la narrativa',
    desc: 'Antes, durante y después de la atención. El paciente necesita claridad en cada paso.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    titulo: 'Se mantiene informado',
    desc: 'Conoce todo lo relacionado con los servicios que ofrece para responder con seguridad.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    titulo: 'Utiliza indicadores',
    desc: 'Mide, evalúa y mejora su desempeño de forma continua y objetiva.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    titulo: 'Actúa con empatía',
    desc: 'Genera confianza en cada interacción. El paciente percibe si estás presente o no.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
]

export default function S11c_PersonalServicio() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', alignItems: 'center', justifyContent: 'center', padding: '48px 72px' }}>
      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <motion.div {...fade(0.1)}>
          <span className="pill">Enfoque al servicio</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          El colaborador enfocado al servicio
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '1.25rem', marginTop: '0.5rem',
        }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
                boxShadow: '0 2px 12px rgba(12,45,78,0.07)',
                borderTop: '3px solid #45C5BE',
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: 'rgba(69,197,190,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {item.icon}
              </div>
              <p style={{
                fontWeight: 700,
                fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
                color: '#0C2D4E', margin: 0,
              }}>
                {item.titulo}
              </p>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                color: '#718096', margin: 0, lineHeight: 1.6,
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
