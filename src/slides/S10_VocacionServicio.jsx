import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const comparisons = [
  {
    obligacion: 'Cumplir el proceso',
    vocacion: 'Acompañar a la persona',
  },
  {
    obligacion: 'Hacer mi turno',
    vocacion: 'Dejar huella en alguien',
  },
  {
    obligacion: 'Responder si preguntan',
    vocacion: 'Anticiparse a la necesidad',
  },
]

export default function S10_VocacionServicio() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
      {/* Left — Dark */}
      <div style={{
        background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.15) 1.5px, transparent 1.5px), linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
        backgroundSize: '28px 28px, cover',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '60px 52px', gap: '1.5rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 350, height: 350, background: 'radial-gradient(circle, rgba(69,197,190,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.div {...fade(0.1)}>
          <span style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Actitud fundamental
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em',
        }}>
          Vocación de servicio
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2 }} />
        </motion.div>

        <motion.p {...fade(0.4)} style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
          No es hacer lo que te piden. Es hacer lo que el paciente necesita, aunque nadie te lo esté pidiendo.
        </motion.p>
      </div>

      {/* Right — Light */}
      <div style={{
        background: '#EEF2F7',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '60px 52px', gap: '1.25rem',
      }}>
        <motion.div {...fade(0.15)}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#718096', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Obligación</div>
            <div />
            <div style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Vocación</div>
          </div>
        </motion.div>

        {comparisons.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '0.5rem', alignItems: 'center',
            }}
          >
            {/* Obligación */}
            <div style={{
              background: '#fff',
              border: '1px solid rgba(12,45,78,0.1)',
              borderRadius: 10, padding: '0.9rem 1.1rem',
              textAlign: 'center',
              fontSize: 'clamp(0.85rem, 1.3vw, 0.98rem)',
              color: '#718096', lineHeight: 1.45,
            }}>
              {row.obligacion}
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>

            {/* Vocación */}
            <div style={{
              background: 'rgba(69,197,190,0.08)',
              border: '1px solid rgba(69,197,190,0.3)',
              borderRadius: 10, padding: '0.9rem 1.1rem',
              textAlign: 'center',
              fontSize: 'clamp(0.85rem, 1.3vw, 0.98rem)',
              color: '#0C2D4E', fontWeight: 600, lineHeight: 1.45,
            }}>
              {row.vocacion}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
