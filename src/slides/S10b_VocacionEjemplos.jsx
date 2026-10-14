import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const escenarios = [
  {
    situacion: 'Un familiar pregunta nervioso dónde está el área de recuperación.',
    sinVocacion: '"Siga el pasillo y pregunte allá."',
    conVocacion: '"Le acompaño hasta la entrada, por aquí."',
  },
  {
    situacion: 'Un paciente lleva 90 minutos esperando y nadie le ha dado información.',
    sinVocacion: '"Ya le van a llamar, espere."',
    conVocacion: '"Déjeme verificar su situación y le doy una actualización en 5 minutos."',
  },
  {
    situacion: 'Al salir del turno, ves a un paciente mayor confundido en el pasillo.',
    sinVocacion: 'Continuar caminando — ya terminó tu turno.',
    conVocacion: '"¿Le puedo ayudar con algo? ¿Hacia dónde va?"',
  },
]

export default function S10b_VocacionEjemplos() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', padding: '60px 80px', justifyContent: 'center' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: 940, width: '100%', display: 'flex', flexDirection: 'column', gap: '1.8rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)',
            borderRadius: '100px', padding: '0.3rem 1.2rem',
            fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Vocación en la práctica
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
          La vocación se ve en los momentos que nadie te está midiendo.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ width: 60, height: 3, background: '#45C5BE', borderRadius: 2, transformOrigin: 'left' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {escenarios.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.38 + i * 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'white', borderRadius: 14,
                boxShadow: '0 2px 12px rgba(12,45,78,0.07)',
                overflow: 'hidden',
                border: '1.5px solid rgba(12,45,78,0.06)',
              }}
            >
              {/* Situación */}
              <div style={{
                padding: '0.7rem 1.25rem',
                background: 'rgba(12,45,78,0.04)',
                borderBottom: '1px solid rgba(12,45,78,0.07)',
              }}>
                <p style={{ fontSize: '0.82rem', color: '#4A5568', margin: 0, fontWeight: 500 }}>
                  <span style={{ color: '#0C2D4E', fontWeight: 700 }}>Situación: </span>
                  {e.situacion}
                </p>
              </div>

              {/* Respuestas */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{
                  padding: '0.85rem 1.25rem',
                  borderRight: '1px solid rgba(12,45,78,0.07)',
                  display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'rgba(190,70,70,0.5)', marginTop: 7, flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(190,70,70,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>Sin vocación</div>
                    <p style={{ fontSize: '0.88rem', color: '#4A5568', margin: 0, fontStyle: 'italic', lineHeight: 1.4 }}>{e.sinVocacion}</p>
                  </div>
                </div>
                <div style={{
                  padding: '0.85rem 1.25rem',
                  display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                  background: 'rgba(69,197,190,0.03)',
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#45C5BE', marginTop: 7, flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#2BA8A2', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>Con vocación</div>
                    <p style={{ fontSize: '0.88rem', color: '#0C2D4E', margin: 0, fontStyle: 'italic', lineHeight: 1.4 }}>{e.conVocacion}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
