import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S06_PivotColaborador() {
  return (
    <div className="slide slide--dark bg-dots--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      justifyContent: 'center', alignItems: 'center',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '720px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', zIndex: 1, textAlign: 'center' }}>

        <motion.div {...fade(0.1)}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>
            Hasta aquí...
          </span>
        </motion.div>

        <motion.p {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
          fontWeight: 400, color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.3, letterSpacing: '-0.01em', margin: 0,
        }}>
          No admiramos lo que saben.
        </motion.p>

        <motion.p {...fade(0.4)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
          fontWeight: 400, color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.3, letterSpacing: '-0.01em', margin: 0,
        }}>
          Admiramos{' '}
          <span style={{ color: '#fff', fontStyle: 'italic' }}>cómo nos hacen sentir.</span>
        </motion.p>

        <motion.div {...fade(0.55)}>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2 }} />
        </motion.div>

        <motion.p {...fade(0.7)} style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.03em', margin: 0,
        }}>
          Eso es una actitud.
        </motion.p>

      </div>
    </div>
  )
}
