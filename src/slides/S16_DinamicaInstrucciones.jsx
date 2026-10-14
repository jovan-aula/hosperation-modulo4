import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const steps = [
  {
    num: '1',
    title: 'Lean el caso de su equipo',
    detail: 'Entiendan la situación que les tocó. 3-4 minutos.',
  },
  {
    num: '2',
    title: 'Recorten las tarjetas',
    detail: 'Usen las tijeras. Son 16 tarjetas: actitudes y aptitudes.',
  },
  {
    num: '3',
    title: 'Elijan 8',
    detail: '¿Cuáles necesita el colaborador de ese caso para hacerlo mejor?',
  },
  {
    num: '4',
    title: 'Péguenlas y presenten',
    detail: 'Decoren la silueta y preparen 60 segundos de presentación.',
  },
]

export default function S16_DinamicaInstrucciones() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', alignItems: 'center', justifyContent: 'center', padding: '48px 72px' }}>
      <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
        <motion.div {...fade(0.1)}>
          <span className="activity-badge">Arma al colaborador ideal</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          Instrucciones
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '0.5rem' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.1 }}
              style={{
                background: '#fff',
                border: '1.5px solid rgba(69,197,190,0.2)',
                borderRadius: 16, padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
                boxShadow: '0 2px 8px rgba(12,45,78,0.07)',
              }}
            >
              <span style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#45C5BE', fontWeight: 400, lineHeight: 1,
              }}>{step.num}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: '#0C2D4E', margin: 0, marginBottom: '0.35rem' }}>
                  {step.title}
                </p>
                <p style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: '#718096', margin: 0, lineHeight: 1.55 }}>
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.75 }}
          style={{
            display: 'flex', justifyContent: 'center',
          }}
        >
          <span style={{
            display: 'inline-block',
            background: '#0C2D4E',
            color: '#fff',
            borderRadius: '100px',
            padding: '0.5rem 1.5rem',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}>
            20 minutos · 3 equipos · 60 seg por presentación
          </span>
        </motion.div>
      </div>
    </div>
  )
}
