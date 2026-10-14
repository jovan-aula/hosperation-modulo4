import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S07_ActitudVsAptitud() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>

      {/* Izquierda — Actitud */}
      <div style={{
        background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '60px 56px', gap: '1.8rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', right: '-80px',
          width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(69,197,190,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.span {...fade(0.1)} style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
          letterSpacing: '0.13em', textTransform: 'uppercase',
        }}>
          Actitud
        </motion.span>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          fontWeight: 400, color: 'white', lineHeight: 1.15, margin: 0,
        }}>
          Cómo decides<br />
          <span style={{ color: '#45C5BE' }}>ser.</span>
        </motion.h2>

        <motion.div {...fade(0.3)}
          style={{ width: 48, height: 3, background: '#45C5BE', borderRadius: 2 }}
        />

        <motion.p {...fade(0.35)} style={{
          fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
          color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: 0,
        }}>
          Es tu disposición interna — tu forma de enfrentar cada situación.
          No se enseña en un curso: se cultiva todos los días con cada decisión que tomas.
        </motion.p>

        <motion.div {...fade(0.45)} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            'Se elige. Cada turno, cada interacción.',
            'No depende del entorno — depende de ti.',
            'Define el impacto humano que generas.',
            'Más cercana a tus valores que a tus habilidades.',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#45C5BE', marginTop: 7, flexShrink: 0,
              }} />
              <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div {...fade(0.6)} style={{
          background: 'rgba(69,197,190,0.1)',
          border: '1px solid rgba(69,197,190,0.25)',
          borderRadius: 12, padding: '0.9rem 1.2rem',
        }}>
          <p style={{ fontSize: '0.88rem', color: '#45C5BE', margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
            "La actitud no se evalúa en el examen de ingreso — se ve en el pasillo, en la urgencia, en el momento difícil."
          </p>
        </motion.div>
      </div>

      {/* Derecha — Aptitud */}
      <div style={{
        background: '#EEF2F7',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '60px 56px', gap: '1.8rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '280px', height: '280px',
          background: 'radial-gradient(circle, rgba(12,45,78,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.span {...fade(0.15)} style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#0C2D4E',
          letterSpacing: '0.13em', textTransform: 'uppercase', opacity: 0.6,
        }}>
          Aptitud
        </motion.span>

        <motion.h2 {...fade(0.25)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          fontWeight: 400, color: '#0C2D4E', lineHeight: 1.15, margin: 0,
        }}>
          Qué sabes<br />hacer.
        </motion.h2>

        <motion.div {...fade(0.35)}
          style={{ width: 48, height: 3, background: 'rgba(12,45,78,0.3)', borderRadius: 2 }}
        />

        <motion.p {...fade(0.4)} style={{
          fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
          color: '#4A5568', lineHeight: 1.65, margin: 0,
        }}>
          Es tu capacidad técnica o interpersonal — lo que puedes desarrollar
          con formación, práctica y experiencia. Incluye habilidades duras y blandas.
        </motion.p>

        <motion.div {...fade(0.5)} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            'Se aprende y se entrena.',
            'Mejora con la práctica y la experiencia.',
            'Puede ser técnica (ej. documentación clínica) o interpersonal (ej. escucha activa).',
            'Define el impacto profesional que generas.',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'rgba(12,45,78,0.4)', marginTop: 7, flexShrink: 0,
              }} />
              <span style={{ fontSize: '0.95rem', color: '#4A5568', lineHeight: 1.5 }}>
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div {...fade(0.65)} style={{
          background: 'white',
          border: '1.5px solid rgba(12,45,78,0.12)',
          borderRadius: 12, padding: '0.9rem 1.2rem',
          boxShadow: '0 2px 12px rgba(12,45,78,0.07)',
        }}>
          <p style={{ fontSize: '0.88rem', color: '#4A5568', margin: 0, lineHeight: 1.55 }}>
            <strong style={{ color: '#0C2D4E' }}>Importante:</strong> la comunicación asertiva y la escucha activa también son aptitudes — no son solo actitudes. Se desarrollan con entrenamiento.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
