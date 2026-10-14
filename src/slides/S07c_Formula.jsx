import { motion } from 'framer-motion'

const terminos = [
  { label: 'Persona', sub: 'quién eres' },
  { label: 'Actitud', sub: 'cómo decides ser' },
  { label: 'Teoría', sub: 'lo que aprendes' },
  { label: 'Práctica', sub: 'lo que entrenas' },
  { label: 'Formación permanente', sub: 'nunca dejas de crecer' },
]

export default function S07c_Formula() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '60px 80px',
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

      <div style={{ zIndex: 1, width: '100%', maxWidth: 1100, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>

        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.13em', textTransform: 'uppercase',
          }}
        >
          La fórmula del profesional de excelencia
        </motion.span>

        {/* Fórmula */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'flex-start', justifyContent: 'center',
          gap: '0.5rem 0.2rem',
        }}>
          {terminos.map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.2rem' }}>
              {/* Término */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: '0.35rem',
                  background: 'rgba(69,197,190,0.08)',
                  border: '1px solid rgba(69,197,190,0.25)',
                  borderRadius: 14, padding: '0.8rem 1.2rem',
                  minWidth: 120,
                }}
              >
                <span style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  fontWeight: 400, color: 'white',
                  lineHeight: 1.1, textAlign: 'center',
                }}>
                  {t.label}
                </span>
                <span style={{
                  fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.02em', textAlign: 'center',
                  fontStyle: 'italic',
                }}>
                  {t.sub}
                </span>
              </motion.div>

              {/* Operador + */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.38 + i * 0.18 }}
                style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  color: '#45C5BE', lineHeight: 1,
                  paddingTop: '0.85rem',
                  opacity: 0.7,
                }}
              >
                +
              </motion.span>
            </div>
          ))}

          {/* = Profesional */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.2rem' }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + terminos.length * 0.18 }}
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                color: '#45C5BE', lineHeight: 1,
                paddingTop: '0.85rem',
              }}
            >
              =
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.25 + terminos.length * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
                background: 'linear-gradient(135deg, rgba(69,197,190,0.2), rgba(69,197,190,0.1))',
                border: '1.5px solid rgba(69,197,190,0.5)',
                borderRadius: 14, padding: '0.8rem 1.4rem',
                minWidth: 140,
                boxShadow: '0 0 40px rgba(69,197,190,0.12)',
              }}
            >
              <span style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontWeight: 400, color: '#45C5BE',
                lineHeight: 1.1, textAlign: 'center',
              }}>
                Profesional<br />de excelencia
              </span>
              <span style={{
                fontSize: '0.65rem', color: 'rgba(69,197,190,0.6)',
                letterSpacing: '0.04em', textAlign: 'center', fontStyle: 'italic',
              }}>
                el objetivo
              </span>
            </motion.div>
          </div>
        </div>

        {/* Nota inferior */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 + terminos.length * 0.18 + 0.4 }}
          style={{
            fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
            color: 'rgba(255,255,255,0.35)', lineHeight: 1.6,
            textAlign: 'center', margin: 0, maxWidth: 560,
          }}
        >
          Ningún elemento de la fórmula es opcional. Todos suman — y cuando uno falta, se nota.
        </motion.p>
      </div>
    </div>
  )
}
