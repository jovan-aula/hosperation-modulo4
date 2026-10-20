import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S10_VocacionServicio() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(69,197,190,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 680, width: '100%', zIndex: 1,
        display: 'flex', flexDirection: 'column', gap: '1.75rem',
        padding: '0 2rem',
      }}>
        <motion.div {...fade(0.1)}>
          <span style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            La raíz de todas las actitudes
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.1,
          letterSpacing: '-0.02em', margin: 0,
        }}>
          Vocación de servicio
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2, transformOrigin: 'left' }}
        />

        <motion.p {...fade(0.45)} style={{
          fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
          color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, margin: 0,
        }}>
          No es hacer lo que te piden. Es hacer lo que el paciente necesita, aunque nadie te lo esté pidiendo.
        </motion.p>

        <motion.p {...fade(0.65)} style={{
          fontSize: 'clamp(0.88rem, 1.3vw, 1rem)',
          color: 'rgba(255,255,255,0.4)', lineHeight: 1.6,
          fontStyle: 'italic', margin: 0,
        }}>
          Las demás actitudes pueden entrenarse. Esta se decide.
        </motion.p>
      </div>
    </div>
  )
}
