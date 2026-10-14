import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S07e_LlantaFrase() {
  return (
    <div style={{
      width: '100%', height: '100%',
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

      {/* Glow orb */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(69,197,190,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 820, width: '100%', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '1.75rem', textAlign: 'center', padding: '0 60px',
      }}>
        <motion.h2 {...fade(0.2)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.2, margin: 0,
        }}>
          "Una mala actitud es como una llanta ponchada:
        </motion.h2>

        <motion.h2 {...fade(0.5)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
          fontWeight: 400, color: '#45C5BE',
          lineHeight: 1.2, margin: 0, fontStyle: 'italic',
        }}>
          no llegarás muy lejos a menos que la cambies."
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          style={{ width: 48, height: 3, background: '#45C5BE', borderRadius: 2 }}
        />

        <motion.p {...fade(1.0)} style={{
          fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.08em', margin: 0,
        }}>
          — Anónimo
        </motion.p>
      </div>
    </div>
  )
}
