import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S22_Cierre() {
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
        background: 'radial-gradient(circle, rgba(69,197,190,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 780, width: '100%', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '2rem', textAlign: 'center', padding: '0 60px',
      }}>
        <motion.span {...fade(0.1)} style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.13em', textTransform: 'uppercase',
        }}>
          Módulo 4 · Hospital Florence
        </motion.span>

        <motion.h2 {...fade(0.25)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.2, margin: 0,
        }}>
          La excelencia no es un estándar que el hospital te exige.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ width: 48, height: 3, background: '#45C5BE', borderRadius: 2 }}
        />

        <motion.h3 {...fade(0.65)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 400, color: '#45C5BE',
          lineHeight: 1.2, margin: 0, fontStyle: 'italic',
        }}>
          Es una decisión que tú tomas cada día.
        </motion.h3>

        <motion.p {...fade(1.0)} style={{
          fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)',
          letterSpacing: '0.05em', marginTop: '1rem',
        }}>
          Taller El Colaborador de Excelencia · Hospital Florence · Hosperation
        </motion.p>
      </div>
    </div>
  )
}
