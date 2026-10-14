import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Trabajan en equipo',
    desc: '3 equipos, cada uno con un caso real',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Recortan y eligen',
    desc: '8 tarjetas del perfil ideal',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Presentan',
    desc: '60 segundos por equipo',
  },
]

export default function S15_PuenteDinamica() {
  return (
    <div className="slide slide--dark bg-dots--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      justifyContent: 'center', alignItems: 'center',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '860px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', zIndex: 1, textAlign: 'center' }}>
        <motion.div {...fade(0.1)}>
          <span className="activity-badge">Actividad en equipos</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em',
        }}>
          Ahora tú decides.
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2, margin: '0 auto' }} />
        </motion.div>

        <motion.p {...fade(0.35)} style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: 600 }}>
          Ya hablamos de actitudes y aptitudes. Ahora vamos a armar al colaborador que el Hospital Florence necesita.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.25rem', width: '100%' }}>
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 + i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(69,197,190,0.2)',
                borderRadius: 16, padding: '1.5rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem',
              }}
            >
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                background: 'rgba(69,197,190,0.1)',
                border: '1px solid rgba(69,197,190,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {p.icon}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#fff', fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', margin: 0, marginBottom: '0.3rem' }}>{p.title}</p>
                <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)',
            fontStyle: 'italic',
          }}
        >
          ¿Listo? Tomen sus hojas.
        </motion.div>
      </div>
    </div>
  )
}
