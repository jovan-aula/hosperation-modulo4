import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const aptitudes = [
  {
    name: 'Comunicación asertiva',
    desc: 'Información clara y oportuna, sin ambigüedad',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    name: 'Escucha activa',
    desc: 'Atender con atención real, no solo oír',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    ),
  },
  {
    name: 'Conocimiento del servicio',
    desc: 'Saber a quién llamar y cómo orientar',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    name: 'Manejo del estrés',
    desc: 'Responder con calidad aunque el entorno sea difícil',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    name: 'Trabajo en equipo',
    desc: 'Saber cuándo escalar o pedir apoyo',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    name: 'Proactividad',
    desc: 'Anticiparse a la necesidad antes de que escale',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    name: 'Gestión del tiempo',
    desc: 'Organizar prioridades en situaciones de alta demanda',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    name: 'Documentación clínica',
    desc: 'Registrar y comunicar información con precisión',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
]

export default function S11_AptitudesExcelencia() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        <motion.div {...fade(0.1)}>
          <span className="pill">Aptitudes del colaborador de excelencia</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          Qué sabe hacer
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
          {aptitudes.map((apt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
              style={{
                background: '#fff',
                border: '1.5px solid rgba(69,197,190,0.2)',
                borderRadius: 14, padding: '1.1rem 1.2rem',
                display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                boxShadow: '0 2px 8px rgba(12,45,78,0.06)',
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 8,
                background: 'rgba(12,45,78,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {apt.icon}
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: '#0C2D4E', margin: 0, marginBottom: '0.25rem' }}>
                  {apt.name}
                </p>
                <p style={{ fontSize: 'clamp(0.88rem, 1.1vw, 0.97rem)', color: '#718096', margin: 0, lineHeight: 1.5 }}>
                  {apt.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
