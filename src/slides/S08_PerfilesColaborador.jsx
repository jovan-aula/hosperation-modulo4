import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const perfiles = [
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
  },
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
  },
]

export default function S08_PerfilesColaborador() {
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '0.5rem' }}>
          {perfiles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.1 }}
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: '1.4rem',
                boxShadow: '0 2px 8px rgba(12,45,78,0.07)',
                display: 'flex', flexDirection: 'column', gap: '0.85rem',
                ...p.cardStyle,
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: p.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {p.icon}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: '#0C2D4E', margin: 0, marginBottom: '0.3rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: '#718096', margin: 0, lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>
              <span style={{
                display: 'inline-block',
                borderRadius: '100px',
                padding: '0.25rem 0.85rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                alignSelf: 'flex-start',
                ...p.pillStyle,
              }}>
                {p.pillLabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
