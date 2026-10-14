import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S20_CulturaComportamientos() {
  return (
    <div className="slide slide--dark bg-dots--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      justifyContent: 'center', alignItems: 'center',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '800px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', zIndex: 1, textAlign: 'center' }}>
        <motion.div {...fade(0.1)}>
          <span style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Cultura organizacional
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em',
        }}>
          La cultura no se declara.
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2, margin: '0 auto' }} />
        </motion.div>

        <motion.p {...fade(0.35)} style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}>
          Se vive en cada turno, en cada pasillo, en cada interacción.
        </motion.p>

        {/* Two cards separated by vs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1.25rem', width: '100%', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(69,197,190,0.2)',
              borderRadius: 16, padding: '1.4rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(69,197,190,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.92rem', margin: 0 }}>Lo que está escrito</p>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>Los valores institucionales</p>
          </motion.div>

          <motion.div {...fade(0.5)} style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700 }}>
            vs
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(69,197,190,0.2)',
              borderRadius: 16, padding: '1.4rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(69,197,190,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.92rem', margin: 0 }}>Lo que se vive</p>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>Los comportamientos reales de cada colaborador</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.7vw, 1.2rem)',
            color: '#45C5BE', lineHeight: 1.55,
          }}
        >
          Tú eres parte de la cultura de este hospital. Cada día decides qué cultura construyes.
        </motion.p>
      </div>
    </div>
  )
}
