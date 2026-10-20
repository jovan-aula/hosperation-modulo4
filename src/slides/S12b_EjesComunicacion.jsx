import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const ejes = [
  {
    numero: '01',
    nombre: 'Verbal',
    sub: 'Lo que dices',
    desc: 'Las palabras que eliges. El lenguaje claro, respetuoso y preciso que construye o destruye confianza en segundos.',
    ejemplo: '"Enseguida le atiendo" vs "Espere ahí."',
    color: '#45C5BE',
    iconStroke: '#45C5BE',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    numero: '02',
    nombre: 'Paraverbal',
    sub: 'Cómo lo dices',
    desc: 'El tono, el ritmo y el volumen. Las mismas palabras suenan distintas según cómo se pronuncian.',
    ejemplo: '"Con gusto" con tono irritado no es asertivo.',
    color: '#7C6FCD',
    iconStroke: '#7C6FCD',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7C6FCD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
  },
  {
    numero: '03',
    nombre: 'No verbal',
    sub: 'Lo que tu cuerpo dice',
    desc: 'La postura, la mirada y los gestos. Comunican incluso cuando no abres la boca.',
    ejemplo: 'Cruzar los brazos al escuchar cierra la conversación.',
    color: '#D97706',
    iconStroke: '#D97706',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
      </svg>
    ),
  },
]

export default function S12b_EjesComunicacion() {
  return (
    <div className="slide slide--dark bg-dots--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 1 }}>

        <motion.div {...fade(0.1)}>
          <span style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Comunicación asertiva
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.2, margin: 0,
        }}>
          Toda comunicación habla en tres canales a la vez.
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '0.25rem' }}>
          {ejes.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.12 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid rgba(255,255,255,0.08)`,
                borderTop: `3px solid ${e.color}`,
                borderRadius: 14,
                padding: '1.4rem 1.3rem',
                display: 'flex', flexDirection: 'column', gap: '0.85rem',
              }}
            >
              {/* Número + icono */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 900, color: e.color, letterSpacing: '0.15em', opacity: 0.7 }}>{e.numero}</span>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `rgba(255,255,255,0.05)`,
                  border: `1px solid rgba(255,255,255,0.08)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {e.icon}
                </div>
              </div>

              {/* Nombre */}
              <div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontWeight: 400, color: '#fff', margin: 0, lineHeight: 1.1 }}>{e.nombre}</h3>
                <p style={{ fontSize: '0.78rem', color: e.color, fontWeight: 600, margin: '0.2rem 0 0', letterSpacing: '0.04em' }}>{e.sub}</p>
              </div>

              {/* Descripción */}
              <p style={{ fontSize: 'clamp(0.82rem, 1.1vw, 0.92rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
                {e.desc}
              </p>

              {/* Ejemplo */}
              <div style={{
                borderLeft: `2px solid ${e.color}`,
                paddingLeft: '0.75rem',
                marginTop: 'auto',
              }}>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                  {e.ejemplo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
