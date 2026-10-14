import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const componentes = [
  {
    num: '1',
    titulo: 'Conductual',
    desc: 'Cómo se expresan nuestras emociones y pensamientos en acciones concretas.',
  },
  {
    num: '2',
    titulo: 'Emocional',
    desc: 'Los sentimientos que experimentamos ante cada situación.',
  },
  {
    num: '3',
    titulo: 'Cognitivo',
    desc: 'Los pensamientos que guían nuestra interpretación de la realidad. ¿Cómo me estoy hablando?',
  },
]

export default function S07f_ActitudComponentes() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <motion.div {...fade(0.1)}>
          <span className="pill">Los 3 componentes</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          La actitud tiene tres dimensiones
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem', marginTop: '0.5rem',
        }}>
          {componentes.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: '#fff',
                borderTop: '3px solid #45C5BE',
                borderRadius: 14,
                padding: '1.75rem 1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
                boxShadow: '0 2px 12px rgba(12,45,78,0.07)',
              }}
            >
              <span style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 400, color: '#45C5BE',
                lineHeight: 1,
              }}>
                {c.num}
              </span>

              <p style={{
                fontWeight: 700,
                fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
                color: '#0C2D4E',
                margin: 0,
              }}>
                {c.titulo}
              </p>

              <p style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                color: '#718096',
                margin: 0,
                lineHeight: 1.6,
              }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
