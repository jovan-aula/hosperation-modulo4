import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const insights = [
  'La experiencia del paciente la construye el equipo completo — desde quien limpia hasta quien opera.',
  'Si uno falla en actitud, el paciente lo atribuye al hospital entero.',
  'La cultura no es lo que está escrito en los valores. Es lo que pasa cuando nadie te observa.',
]

export default function S18_PuenteEquipo() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
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
            El colaborador no trabaja solo
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          Un equipo de personas con buenas actitudes es imbatible.
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2 }} />
        </motion.div>

        <motion.p {...fade(0.4)} style={{ fontSize: 'clamp(0.92rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
          Pero un equipo con una sola persona tóxica puede destruir lo que todos construyen.
        </motion.p>
      </div>

      {/* Right — Light */}
      <div style={{
        background: '#EEF2F7',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '60px 52px', gap: '1.25rem',
      }}>
        {insights.map((insight, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 + i * 0.13 }}
            style={{
              borderLeft: '4px solid #45C5BE',
              paddingLeft: '1.25rem',
              paddingTop: '0.6rem',
              paddingBottom: '0.6rem',
            }}
          >
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: '#2D3748', lineHeight: 1.65, margin: 0 }}>
              {insight}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
