import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const rasgos = [
  {
    titulo: 'Elige su actitud',
    desc: 'Independientemente del turno, el cansancio o el ambiente, decide cómo presentarse ante el paciente.',
    color: '#45C5BE',
  },
  {
    titulo: 'Desarrolla sus aptitudes',
    desc: 'No espera a que lo capaciten. Busca mejorar, pregunta, practica y aplica lo que aprende.',
    color: '#45C5BE',
  },
  {
    titulo: 'Actúa con intención',
    desc: 'Sabe que cada interacción importa. No hace su trabajo en piloto automático — lo hace con propósito.',
    color: '#45C5BE',
  },
]

export default function S08c_PerfilExcelencia() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', justifyContent: 'center', padding: '60px 80px' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: 900, width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)',
            borderRadius: '100px', padding: '0.3rem 1.2rem',
            fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            El perfil de excelencia
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          ¿Qué hace diferente al colaborador{' '}
          <span style={{ color: '#45C5BE' }}>de excelencia?</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ width: 60, height: 3, background: '#45C5BE', borderRadius: 2, transformOrigin: 'left' }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.25rem' }}>
          {rasgos.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'white', borderRadius: 18,
                padding: '1.75rem 1.5rem',
                boxShadow: '0 4px 20px rgba(12,45,78,0.09)',
                border: '1.5px solid rgba(69,197,190,0.2)',
                display: 'flex', flexDirection: 'column', gap: '0.9rem',
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'rgba(69,197,190,0.1)', border: '1.5px solid rgba(69,197,190,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '1.1rem', color: '#45C5BE', fontWeight: 400,
                }}>
                  {i + 1}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '1.15rem', fontWeight: 400,
                color: '#0C2D4E', margin: 0, lineHeight: 1.25,
              }}>
                {r.titulo}
              </h3>
              <p style={{
                fontSize: '0.9rem', color: '#4A5568', margin: 0, lineHeight: 1.6,
              }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fade(0.75)}
          style={{
            background: 'linear-gradient(135deg, #0C2D4E, #163557)',
            borderRadius: 14, padding: '1.1rem 1.8rem',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}
        >
          <div style={{ width: 4, height: 40, background: '#45C5BE', borderRadius: 2, flexShrink: 0 }} />
          <p style={{
            fontSize: '0.95rem', color: 'rgba(255,255,255,0.82)',
            margin: 0, lineHeight: 1.55,
          }}>
            No es el colaborador perfecto. Es el colaborador que{' '}
            <strong style={{ color: '#45C5BE' }}>decide mejorar</strong>{' '}
            — y esa decisión se nota en cada interacción.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
