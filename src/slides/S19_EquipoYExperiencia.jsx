import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const touchpoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    role: 'Seguridad',
    desc: 'La persona que da acceso al hospital',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    role: 'Admisión',
    desc: 'Quien recibe e ingresa al paciente',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    role: 'Enfermería',
    desc: 'Quien acompaña durante el proceso',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    role: 'Médico',
    desc: 'Quien diagnostica y explica',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
        <polyline points="16 17 21 12 16 7"/>
        <line x1="21" y1="12" x2="9" y2="12"/>
      </svg>
    ),
    role: 'Egreso',
    desc: 'Quien despide y orienta al salir',
  },
]

export default function S19_EquipoYExperiencia() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', alignItems: 'flex-start', justifyContent: 'center' }}>
      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
        <motion.div {...fade(0.1)}>
          <span className="pill">Trabajo en equipo</span>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          Cómo el equipo construye la experiencia
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        {/* Journey row */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, marginTop: '0.75rem' }}>
          {touchpoints.map((tp, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.1 }}
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(69,197,190,0.22)',
                  borderRadius: 14, padding: '1.1rem 0.85rem',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem',
                  textAlign: 'center', flex: 1,
                  boxShadow: '0 2px 8px rgba(12,45,78,0.07)',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(69,197,190,0.1)',
                  border: '1.5px solid rgba(69,197,190,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {tp.icon}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)', color: '#0C2D4E', margin: 0, marginBottom: '0.2rem' }}>
                    {tp.role}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#718096', margin: 0, lineHeight: 1.45 }}>
                    {tp.desc}
                  </p>
                </div>
              </motion.div>

              {/* Arrow between touchpoints */}
              {i < touchpoints.length - 1 && (
                <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', padding: '0 6px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.9 }}
          style={{
            background: '#0C2D4E',
            borderRadius: 12, padding: '1rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.55 }}>
            Si alguno falla, la experiencia del paciente falla — sin importar cuántos lo hicieron bien.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
