import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S08a_PerfilesIntro() {
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
        background: 'radial-gradient(circle, rgba(69,197,190,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 820, width: '100%', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '2rem', textAlign: 'center',
      }}>
        <motion.span {...fade(0.1)} style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.13em', textTransform: 'uppercase',
        }}>
          Hasta aquí hablamos de cada una por separado
        </motion.span>

        {/* Ecuación visual */}
        <motion.div {...fade(0.2)} style={{
          display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {[
            { label: 'Actitud', sub: 'cómo te presentas', color: '#45C5BE' },
            { label: '+', sub: null, color: 'rgba(255,255,255,0.25)' },
            { label: 'Aptitud', sub: 'lo que sabes hacer', color: 'rgba(255,255,255,0.55)' },
          ].map(function(item, i) {
            if (item.label === '+') return (
              <span key={i} style={{ fontSize: '2.5rem', color: item.color, fontWeight: 300 }}>+</span>
            )
            return (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14, padding: '1rem 1.75rem',
              }}>
                <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: item.color, fontWeight: 400 }}>{item.label}</span>
                {item.sub && <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>{item.sub}</span>}
              </div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ width: 48, height: 3, background: '#45C5BE', borderRadius: 2 }}
        />

        <motion.h2 {...fade(0.55)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.2, margin: 0,
        }}>
          Dependiendo de cuánto tienes de cada una,
          obtienes{' '}
          <span style={{ color: '#45C5BE', fontStyle: 'italic' }}>cuatro perfiles distintos.</span>
        </motion.h2>

        <motion.p {...fade(0.75)} style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
          color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, maxWidth: 560,
        }}>
          En un mismo hospital puedes encontrar los cuatro — a veces en la misma área.
        </motion.p>
      </div>
    </div>
  )
}
