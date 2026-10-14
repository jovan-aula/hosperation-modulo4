import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S10c_PuenteAptitudes() {
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
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(69,197,190,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 760, width: '100%', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '2.2rem', textAlign: 'center',
      }}>
        <motion.span {...fade(0.1)} style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.13em', textTransform: 'uppercase',
        }}>
          Bloque 2 · Aptitudes
        </motion.span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <motion.h2 {...fade(0.25)} style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
            fontWeight: 400, color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.2, margin: 0,
          }}>
            La actitud te hace{' '}
            <em style={{ color: 'rgba(255,255,255,0.75)' }}>querer</em>{' '}
            hacerlo bien.
          </motion.h2>

          <motion.h2 {...fade(0.4)} style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.2, margin: 0,
          }}>
            La aptitud te hace{' '}
            <span style={{ color: '#45C5BE' }}>poder</span>{' '}
            hacerlo bien.
          </motion.h2>
        </div>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ width: 48, height: 3, background: '#45C5BE', borderRadius: 2 }}
        />

        <motion.p {...fade(0.75)} style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
          color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, maxWidth: 520,
        }}>
          Las necesitas a ambas. Una sin la otra no es suficiente para brindar excelencia.
        </motion.p>
      </div>
    </div>
  )
}
