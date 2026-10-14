import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const questions = [
  '¿Cuál fue la actitud más importante para su caso?',
  '¿Qué aptitud hubiera cambiado el resultado del caso?',
  '¿Alguien del equipo ya tiene estas cualidades? ¿Lo reconocen?',
]

export default function S17_DinamicaDebrief() {
  return (
    <div className="slide slide--dark bg-dots--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      justifyContent: 'center', alignItems: 'center',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '700px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', zIndex: 1, textAlign: 'center' }}>
        <motion.div {...fade(0.1)}>
          <span style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Reflexión
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em',
        }}>
          ¿Qué eligieron y por qué?
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2, margin: '0 auto' }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: 600 }}>
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.12 }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(69,197,190,0.2)',
                borderRadius: 14, padding: '1.1rem 1.4rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                textAlign: 'left',
              }}
            >
              <span style={{
                width: 30, height: 30, borderRadius: '50%',
                background: 'rgba(69,197,190,0.15)',
                border: '1px solid rgba(69,197,190,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: 700, color: '#45C5BE', flexShrink: 0,
              }}>{i + 1}</span>
              <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.5 }}>
                {q}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fade(0.75)} style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', color: 'rgba(255,255,255,0.55)', fontStyle: 'italic' }}>
          Compartan con el grupo.
        </motion.p>
      </div>
    </div>
  )
}
