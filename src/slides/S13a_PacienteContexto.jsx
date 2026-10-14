import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S13a_PacienteContexto() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>
      {/* Izquierda — imagen */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <img
          src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&auto=format&fit=crop"
          alt="Paciente esperando"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            filter: 'brightness(0.65) saturate(0.7)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(8,30,53,0.3) 0%, rgba(8,30,53,0.1) 50%, #0C2D4E 100%)',
        }} />
      </motion.div>

      {/* Derecha — texto */}
      <div style={{
        background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '60px 60px 60px 56px', gap: '2rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />

        <motion.span {...fade(0.3)} style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.13em', textTransform: 'uppercase',
        }}>
          Contexto crítico
        </motion.span>

        <motion.h2 {...fade(0.45)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2rem, 3.8vw, 3rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.2, margin: 0,
        }}>
          Antes de hablar de tu comportamiento, hablemos de{' '}
          <span style={{ color: '#45C5BE' }}>quién lo recibe.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{ width: 48, height: 3, background: '#45C5BE', borderRadius: 2 }}
        />

        <motion.p {...fade(0.75)} style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
          color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0,
        }}>
          Tu comportamiento no ocurre en el vacío. Cada interacción aterriza
          en una persona que está viviendo uno de los momentos más difíciles de su vida.
        </motion.p>

        <motion.p {...fade(0.9)} style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
          color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, margin: 0,
          fontStyle: 'italic',
        }}>
          Para entender por qué tu actitud importa tanto, primero hay que entender
          al paciente que la recibe.
        </motion.p>
      </div>
    </div>
  )
}
