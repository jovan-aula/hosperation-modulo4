import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S09b_VocacionPivot() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(69,197,190,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 720, width: '100%', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '1.75rem', textAlign: 'center', padding: '0 2rem',
      }}>

        <motion.span {...fade(0.1)} style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.13em', textTransform: 'uppercase',
        }}>
          Antes de ver el listado
        </motion.span>

        <motion.h2 {...fade(0.25)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.2, margin: 0,
        }}>
          Todas esas actitudes{' '}
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>nacen de una sola.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ width: 48, height: 3, background: '#45C5BE', borderRadius: 2 }}
        />

        <motion.p {...fade(0.65)} style={{
          fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
          color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0, maxWidth: 520,
        }}>
          No es la más técnica ni la más difícil de aprender.
          Es la que decide si las demás aparecen o no.
        </motion.p>

        <motion.p {...fade(0.85)} style={{
          fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
          fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.03em', margin: 0,
        }}>
          Se llama vocación de servicio.
        </motion.p>

      </div>
    </div>
  )
}
