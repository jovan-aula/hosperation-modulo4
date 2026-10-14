import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S14b_ImpactoColaborador() {
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
        background: 'radial-gradient(circle, rgba(69,197,190,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 700, width: '100%', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '2.4rem', textAlign: 'center',
      }}>
        <motion.span {...fade(0.1)} style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.13em', textTransform: 'uppercase',
        }}>
          Tu rol
        </motion.span>

        <motion.h2 {...fade(0.25)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.12, margin: 0,
        }}>
          Tú eres el primer{' '}
          <span style={{ color: '#45C5BE' }}>filtro emocional</span>{' '}
          del paciente.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ width: 48, height: 3, background: '#45C5BE', borderRadius: 2 }}
        />

        <motion.p {...fade(0.7)} style={{
          fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
          color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0, maxWidth: 560,
        }}>
          Tu mirada, tu tono, tu disposición — todo eso llega antes que cualquier diagnóstico.
          Puedes amplificar el miedo del paciente o comenzar a aliviarlo.
          Esa es la magnitud de tu rol.
        </motion.p>

        <motion.div {...fade(0.9)} style={{
          background: 'rgba(69,197,190,0.08)',
          border: '1px solid rgba(69,197,190,0.2)',
          borderRadius: 14, padding: '1rem 1.8rem',
          maxWidth: 500,
        }}>
          <p style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            color: '#45C5BE', margin: 0, fontStyle: 'italic', lineHeight: 1.55,
          }}>
            "No tienes que ser médico para sanar a alguien. A veces basta con una mirada amable."
          </p>
        </motion.div>
      </div>
    </div>
  )
}
