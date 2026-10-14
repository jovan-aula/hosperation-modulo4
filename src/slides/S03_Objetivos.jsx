import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const objetivos = [
  'Distinguir entre actitud y aptitud en el contexto hospitalario',
  'Identificar tu perfil como colaborador y áreas de mejora',
  'Reconocer cómo tu comportamiento impacta la experiencia del paciente',
  'Comprometerte con acciones concretas de mejora personal',
]

export default function S03_Objetivos() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', alignItems: 'flex-start', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
        <motion.div {...fade(0.1)}>
          <span className="pill">Propósito del módulo</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          Al finalizar serás capaz de...
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
          {objetivos.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: '#fff',
                border: '1.5px solid rgba(69,197,190,0.22)',
                borderLeft: '4px solid #45C5BE',
                borderRadius: '12px',
                padding: '1.1rem 1.4rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                boxShadow: '0 2px 8px rgba(12,45,78,0.06)',
              }}
            >
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(69,197,190,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: '#45C5BE', fontSize: '1rem', fontWeight: 400,
                }}>{i + 1}</span>
              </div>
              <p style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: '#2D3748', lineHeight: 1.5, margin: 0 }}>
                {obj}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
