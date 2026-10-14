import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S01_Portada() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
      {/* Left Panel — Dark Navy */}
      <div style={{
        background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.15) 1.5px, transparent 1.5px), linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
        backgroundSize: '28px 28px, cover',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '60px 56px', gap: '1.4rem', position: 'relative', overflow: 'hidden',
      }}>
        <div className="corner-accent--tl" style={{ position: 'absolute', top: 0, left: 0, width: 350, height: 350, background: 'radial-gradient(circle, rgba(69,197,190,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="corner-accent" style={{ position: 'absolute', bottom: 0, right: 0, width: 350, height: 350, background: 'radial-gradient(circle, rgba(69,197,190,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Logo */}
        <motion.div {...fade(0.1)}>
          <img src="/logo-sin-fondo.png" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} alt="Hospital Florence" />
        </motion.div>

        {/* Badge */}
        <motion.div {...fade(0.2)}>
          <span style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.75rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Módulo 4 · Taller de Capacitación
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 {...fade(0.3)} style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em',
        }}>
          El colaborador de{' '}
          <span style={{ color: '#45C5BE' }}>excelencia</span>
        </motion.h1>

        {/* Teal bar */}
        <motion.div {...fade(0.4)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2 }} />
        </motion.div>

        {/* Description */}
        <motion.p {...fade(0.5)} style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}>
          Actitudes y aptitudes que marcan la diferencia<br />en el entorno hospitalario.
        </motion.p>

        {/* Facilitator */}
        <motion.div {...fade(0.6)} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginTop: '0.5rem' }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: '0.9rem', color: '#fff', flexShrink: 0,
          }}>JN</div>
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#fff' }}>Mtro. Jován Naranjo</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>Facilitador</div>
          </div>
        </motion.div>
      </div>

      {/* Right Panel — Image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop"
          alt="Hospital team"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(8,30,53,0.35) 0%, rgba(8,30,53,0.6) 100%)',
        }} />

        {/* Bottom quote card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'absolute', bottom: 40, left: 32, right: 32,
            background: 'rgba(8,30,53,0.82)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(69,197,190,0.25)',
            borderRadius: 16, padding: '1.5rem 1.75rem',
          }}
        >
          <p style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
            color: 'rgba(255,255,255,0.9)', lineHeight: 1.55, marginBottom: '0.6rem',
          }}>
            "El nivel de servicio que un equipo entrega depende del tipo de persona que cada uno decide ser."
          </p>
          <div style={{ fontSize: '0.75rem', color: '#45C5BE', fontWeight: 600, letterSpacing: '0.04em' }}>
            — Filosofía de Excelencia Hospital Florence
          </div>
        </motion.div>
      </div>
    </div>
  )
}
