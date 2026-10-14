import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const scenarios = [
  {
    num: '1',
    situation: 'El familiar pregunta: "¿Cómo está mi mamá?"',
    bad: 'No sé, pregunte al médico.',
    good: 'Ahorita le ayudo a localizar al médico para que le informe. ¿Me da un momento?',
  },
  {
    num: '2',
    situation: 'El paciente dice: "Llevo 2 horas esperando"',
    bad: 'Hay mucha gente, espere su turno.',
    good: 'Entiendo que ha esperado mucho. Déjeme verificar su situación.',
  },
  {
    num: '3',
    situation: 'El familiar está llorando en el pasillo',
    bad: 'Ignorarlo y seguir caminando.',
    good: '¿Está bien? ¿Puedo ayudarle en algo?',
  },
]

export default function S12_ComunicacionAsertiva() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
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
            Aptitud clave
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          Comunicación asertiva en el hospital
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2 }} />
        </motion.div>

        <motion.p {...fade(0.4)} style={{ fontSize: 'clamp(0.92rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
          No es decir todo lo que piensas. Es decir lo que la persona necesita escuchar, en el momento correcto, de la forma correcta.
        </motion.p>
      </div>

      {/* Right — Light */}
      <div style={{
        background: '#EEF2F7',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '48px 44px', gap: '1rem',
      }}>
        {scenarios.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.25 + i * 0.13 }}
            style={{
              background: '#fff',
              border: '1.5px solid rgba(69,197,190,0.2)',
              borderRadius: 14, padding: '1.1rem 1.25rem',
              boxShadow: '0 2px 8px rgba(12,45,78,0.06)',
            }}
          >
            {/* Situation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%',
                background: '#0C2D4E', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.72rem', fontWeight: 700, flexShrink: 0,
              }}>{s.num}</span>
              <p style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)', color: '#2D3748', fontWeight: 500, margin: 0, lineHeight: 1.45 }}>
                {s.situation}
              </p>
            </div>
            {/* Bad */}
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
              padding: '0.55rem 0.85rem', borderRadius: 8,
              background: 'rgba(229,62,62,0.06)', marginBottom: '0.45rem',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', color: '#C53030', margin: 0, lineHeight: 1.45 }}>{s.bad}</p>
            </div>
            {/* Good */}
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
              padding: '0.55rem 0.85rem', borderRadius: 8,
              background: 'rgba(69,197,190,0.08)',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', color: '#2BA8A2', fontWeight: 500, margin: 0, lineHeight: 1.45 }}>{s.good}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
