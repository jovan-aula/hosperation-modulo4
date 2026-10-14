import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S08a_PerfilesIntro() {
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
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(69,197,190,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 760, width: '100%', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '2rem', textAlign: 'center',
      }}>
        <motion.span {...fade(0.1)} style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.13em', textTransform: 'uppercase',
        }}>
          Los perfiles del colaborador
        </motion.span>

        <motion.h2 {...fade(0.25)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.15, margin: 0,
        }}>
          En un mismo hospital conviven{' '}
          <span style={{ color: '#45C5BE' }}>cuatro tipos</span>{' '}
          de colaborador.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ width: 48, height: 3, background: '#45C5BE', borderRadius: 2 }}
        />

        <motion.p {...fade(0.65)} style={{
          fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
          color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0, maxWidth: 560,
        }}>
          No todos los que cumplen con su trabajo generan la misma experiencia.
          La diferencia no siempre está en el conocimiento — está en la combinación
          de actitud y aptitud con la que cada uno decide presentarse.
        </motion.p>
      </div>
    </div>
  )
}
