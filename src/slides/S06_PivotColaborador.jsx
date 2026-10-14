import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S06_PivotColaborador() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
      {/* Left Panel — Light */}
      <div style={{
        background: '#EEF2F7',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '60px 52px', gap: '1.4rem',
      }}>
        <motion.div {...fade(0.1)}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#718096',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Hasta aquí...
          </span>
        </motion.div>

        <motion.blockquote {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)',
          color: '#0C2D4E',
          lineHeight: 1.35,
          letterSpacing: '-0.01em',
          margin: 0,
          borderLeft: '4px solid #45C5BE',
          paddingLeft: '1.25rem',
        }}>
          "Admiran actitudes como: empatía, paciencia, disposición, respeto..."
        </motion.blockquote>

        <motion.p {...fade(0.35)} style={{
          fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
          color: '#718096', lineHeight: 1.65,
        }}>
          Eso no es casualidad. Lo que admiramos en otros, lo necesitamos nosotros mismos.
        </motion.p>
      </div>

      {/* Right Panel — White */}
      <div style={{
        background: '#fff',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '60px 52px', gap: '1.5rem',
        borderLeft: '1px solid rgba(12,45,78,0.08)',
      }}>
        <motion.div {...fade(0.2)}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            La pregunta que guía este módulo
          </span>
        </motion.div>

        <motion.h2 {...fade(0.3)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.5rem, 2.8vw, 2.3rem)',
          fontWeight: 400, color: '#0C2D4E',
          lineHeight: 1.25, letterSpacing: '-0.02em',
          textAlign: 'center',
        }}>
          ¿Qué tipo de colaborador decides ser cuando nadie te está mirando?
        </motion.h2>

        <motion.div {...fade(0.4)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2, margin: '0 auto' }} />
        </motion.div>

        <motion.p {...fade(0.5)} style={{
          fontSize: 'clamp(0.88rem, 1.3vw, 1rem)',
          color: '#718096', lineHeight: 1.65, textAlign: 'center',
        }}>
          No es solo una pregunta de actitud. Es una decisión de identidad profesional.
        </motion.p>
      </div>
    </div>
  )
}
