import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const actitudesLeft = [
  { name: 'Empatía', desc: 'Ponerse en el lugar del paciente y su familia' },
  { name: 'Calidez', desc: 'Hacer sentir bienvenida y atendida a cada persona' },
  { name: 'Paciencia', desc: 'Sostener la calma aunque el entorno sea exigente' },
  { name: 'Disposición', desc: 'Estar presente y listo para ayudar sin que te lo pidan' },
  { name: 'Humildad', desc: 'Reconocer los límites y pedir apoyo cuando se necesita' },
]

const actitudesRight = [
  { name: 'Autocontrol', desc: 'Gestionar las emociones propias en momentos críticos' },
  { name: 'Respeto', desc: 'Tratar a cada persona con dignidad, sin excepción' },
  { name: 'Iniciativa', desc: 'Actuar antes de que el problema escale' },
  { name: 'Autocrítica', desc: 'Evaluar el propio desempeño con honestidad' },
  { name: 'Resiliencia', desc: 'Recuperarse rápido y seguir dando lo mejor' },
]

export default function S09_ActitudesExcelencia() {
  return (
    <div className="slide slide--dark bg-dots--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <span style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Actitudes del colaborador de excelencia
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title slide-title--white">
          Cómo decide ser
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {actitudesLeft.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(69,197,190,0.15)',
                  borderRadius: 10,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#45C5BE', flexShrink: 0, marginTop: '0.35rem' }} />
                <div>
                  <span style={{ fontWeight: 700, color: '#fff', fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}>{a.name}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.88rem, 1.2vw, 0.97rem)' }}> — {a.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {actitudesRight.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(69,197,190,0.15)',
                  borderRadius: 10,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#45C5BE', flexShrink: 0, marginTop: '0.35rem' }} />
                <div>
                  <span style={{ fontWeight: 700, color: '#fff', fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}>{a.name}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.88rem, 1.2vw, 0.97rem)' }}> — {a.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
