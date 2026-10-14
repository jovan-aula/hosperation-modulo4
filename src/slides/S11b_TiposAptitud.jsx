import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const tipos = [
  {
    num: '1',
    titulo: 'Pensamiento crítico',
    desc: 'Capaz de ver los errores y mejorar la forma y metodología del trabajo.',
  },
  {
    num: '2',
    titulo: 'Aprendizaje continuo',
    desc: 'Aprender de cada tarea o experiencia nos lleva a ser resolutivos de forma profesional.',
  },
  {
    num: '3',
    titulo: 'Proactividad',
    desc: 'Actuar antes de que una situación lo requiera, en lugar de simplemente reaccionar.',
  },
  {
    num: '4',
    titulo: 'Liderazgo',
    desc: 'Tener una buena predisposición en el trabajo y hacérsela entender al resto del equipo.',
  },
]

export default function S11b_TiposAptitud() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', alignItems: 'center', justifyContent: 'center', padding: '48px 72px' }}>
      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <motion.div {...fade(0.1)}>
          <span className="pill">Tipos de aptitud</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          ¿Qué tipos de aptitud existen?
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '1.25rem', marginTop: '0.5rem',
        }}>
          {tipos.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: '#fff',
                borderLeft: '4px solid #45C5BE',
                borderRadius: 14,
                padding: '1.5rem 1.5rem 1.4rem',
                display: 'flex', flexDirection: 'column', gap: '0.6rem',
                boxShadow: '0 2px 12px rgba(12,45,78,0.07)',
              }}
            >
              <span style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                fontWeight: 400, color: 'rgba(69,197,190,0.4)',
                lineHeight: 1,
              }}>
                {t.num}
              </span>
              <p style={{
                fontWeight: 700,
                fontSize: 'clamp(1.1rem, 1.7vw, 1.35rem)',
                color: '#0C2D4E', margin: 0,
              }}>
                {t.titulo}
              </p>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                color: '#718096', margin: 0, lineHeight: 1.6,
              }}>
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
