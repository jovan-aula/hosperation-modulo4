import { useState } from 'react'
import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

// Orden: [top-left, top-right, bottom-left, bottom-right]
// Alta actitud / Baja aptitud | Alta actitud / Alta aptitud
// Baja actitud / Baja aptitud | Baja actitud / Alta aptitud
const perfiles = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
      </svg>
    ),
    title: 'El bienintencionado',
    desc: 'Buena actitud, pero sin las herramientas necesarias. Quiere ayudar pero no siempre puede.',
    pillLabel: 'Quiere, pero necesita formación',
    pillStyle: { background: 'rgba(217,119,6,0.1)', color: '#B45309', border: '1px solid rgba(217,119,6,0.3)' },
    cardStyle: { borderTop: '3px solid #D97706' },
    iconBg: 'rgba(217,119,6,0.08)',
    accentColor: '#D97706',
    como: [
      'Intenta ayudar pero comete errores frecuentes',
      'Pide disculpas y hace preguntas constantemente',
      'Mejora rápido cuando alguien lo acompaña',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'El colaborador de excelencia',
    desc: 'Actitud positiva y aptitudes desarrolladas. Impacta la experiencia del paciente en cada interacción.',
    pillLabel: 'El objetivo',
    pillStyle: { background: 'rgba(69,197,190,0.15)', color: '#2BA8A2', border: '1px solid rgba(69,197,190,0.4)' },
    cardStyle: { borderTop: '3px solid #45C5BE' },
    iconBg: 'rgba(69,197,190,0.1)',
    accentColor: '#45C5BE',
    como: [
      'Los pacientes lo buscan por nombre',
      'Sus compañeros acuden a él cuando hay un problema',
      'Actúa sin que nadie se lo pida',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: 'El colaborador tóxico',
    desc: 'Sin actitud ni aptitudes. Drena al equipo y deteriora la experiencia del paciente.',
    pillLabel: 'Prioridad de atención',
    pillStyle: { background: 'rgba(229,62,62,0.1)', color: '#C53030', border: '1px solid rgba(229,62,62,0.3)' },
    cardStyle: { borderTop: '3px solid #E53E3E' },
    iconBg: 'rgba(229,62,62,0.08)',
    accentColor: '#E53E3E',
    como: [
      'Se queja de todo: del trabajo, los jefes, los pacientes',
      'Evita responsabilidades y culpa a otros',
      'Contagia negatividad al resto del equipo',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    ),
    title: 'El técnico frío',
    desc: 'Sabe hacer su trabajo, pero le falta calidez. Cumple sin conectar.',
    pillLabel: 'Sabe, pero no conecta',
    pillStyle: { background: 'rgba(12,45,78,0.1)', color: '#0C2D4E', border: '1px solid rgba(12,45,78,0.25)' },
    cardStyle: { borderTop: '3px solid #0C2D4E' },
    iconBg: 'rgba(12,45,78,0.08)',
    accentColor: '#0C2D4E',
    como: [
      'Ejecuta perfectamente pero no saluda ni sonríe',
      'Habla solo lo estrictamente necesario',
      'Los pacientes sienten que son un número más',
    ],
  },
]

const CARD_HEIGHT = 175

export default function S08_PerfilesColaborador() {
  const [flipped, setFlipped] = useState(new Set())

  const toggle = (i) => {
    setFlipped(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className="slide" style={{ background: '#EEF2F7', alignItems: 'center', justifyContent: 'center', padding: '48px 72px' }}>
      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <span className="pill">Los 4 perfiles</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          ¿Cuál reconoces en tu equipo?
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        {/* Matriz con ejes */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, marginTop: '0.25rem' }}>

          {/* Eje Y izquierdo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 12, width: 48 }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#45C5BE', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 4 }}>Alta</span>
            <div style={{ flex: 1, width: 4, background: 'linear-gradient(to bottom, #45C5BE 0%, #45C5BE 50%, rgba(12,45,78,0.25) 100%)', borderRadius: 4 }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 900, color: 'rgba(12,45,78,0.45)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: 4 }}>Baja</span>
            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '0.7rem', fontWeight: 900, color: '#45C5BE', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 10 }}>Actitud</span>
          </div>

          {/* Contenido */}
          <div style={{ flex: 1 }}>
            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {perfiles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.35 + i * 0.1 }}
                  onClick={() => toggle(i)}
                  style={{ height: CARD_HEIGHT, perspective: 1000, cursor: 'pointer' }}
                >
                  {/* Flip container */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.52s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: flipped.has(i) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}>

                    {/* FRENTE */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      background: '#fff', borderRadius: 14, padding: '1.1rem',
                      boxShadow: '0 2px 12px rgba(12,45,78,0.09)',
                      display: 'flex', flexDirection: 'column', gap: '0.6rem',
                      ...p.cardStyle,
                    }}>
                      <div style={{ width: 38, height: 38, borderRadius: 8, background: p.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {p.icon}
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 700, fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)', color: '#0C2D4E', margin: 0, marginBottom: '0.2rem' }}>{p.title}</h3>
                        <p style={{ fontSize: 'clamp(0.78rem, 1.05vw, 0.88rem)', color: '#718096', margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
                      </div>
                      <span style={{ display: 'inline-block', borderRadius: '100px', padding: '0.2rem 0.7rem', fontSize: '0.68rem', fontWeight: 600, alignSelf: 'flex-start', ...p.pillStyle }}>{p.pillLabel}</span>

                      {/* Hint */}
                      <span style={{ position: 'absolute', bottom: 10, right: 12, fontSize: '0.62rem', color: 'rgba(12,45,78,0.25)', letterSpacing: '0.04em' }}>toca para ver más</span>
                    </div>

                    {/* REVERSO */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: '#fff', borderRadius: 14, padding: '1.1rem',
                      boxShadow: '0 2px 12px rgba(12,45,78,0.09)',
                      display: 'flex', flexDirection: 'column', gap: '0.55rem',
                      borderTop: `3px solid ${p.accentColor}`,
                    }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: p.accentColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        ¿Cómo identificarlo?
                      </span>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem', justifyContent: 'center' }}>
                        {p.como.map((item, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: p.accentColor, flexShrink: 0, marginTop: '0.35rem' }} />
                            <span style={{ fontSize: 'clamp(0.76rem, 1.05vw, 0.86rem)', color: '#4A5568', lineHeight: 1.45 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <span style={{ position: 'absolute', bottom: 10, right: 12, fontSize: '0.62rem', color: 'rgba(12,45,78,0.25)', letterSpacing: '0.04em' }}>toca para volver</span>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

            {/* Eje X inferior */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10, gap: 8 }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 900, color: 'rgba(12,45,78,0.45)', textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0 }}>Baja</span>
              <div style={{ flex: 1, height: 4, background: 'linear-gradient(to right, rgba(12,45,78,0.25), #0C2D4E)', borderRadius: 4 }} />
              <svg width="14" height="14" viewBox="0 0 14 14" style={{ transform: 'rotate(90deg)', flexShrink: 0 }}><polygon points="7,0 14,14 0,14" fill="#0C2D4E"/></svg>
              <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#0C2D4E', textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0 }}>Alta</span>
              <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#0C2D4E', textTransform: 'uppercase', letterSpacing: '0.18em', flexShrink: 0 }}>Aptitud</span>
            </div>
          </div>
        </div>

        {/* Referencia */}
        <motion.div {...fade(0.9)} style={{
          marginTop: '0.5rem',
          borderLeft: '2px solid rgba(12,45,78,0.18)',
          paddingLeft: '8px',
        }}>
          <span style={{ fontSize: '0.68rem', color: 'rgba(12,45,78,0.38)', fontStyle: 'italic', letterSpacing: '0.01em' }}>
            Adaptado del modelo de Liderazgo Situacional — Hersey &amp; Blanchard (1969)
          </span>
        </motion.div>

      </div>
    </div>
  )
}
