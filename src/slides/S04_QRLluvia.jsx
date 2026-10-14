import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const QR_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=45C5BE&bgcolor=081e35&data=https%3A%2F%2Fhosperation-modulo4.vercel.app%2Flluvia-input.html'

export default function S04_QRLluvia() {
  return (
    <div className="slide slide--dark bg-dots--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      justifyContent: 'center', alignItems: 'center',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '700px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', zIndex: 1, textAlign: 'center' }}>
        <motion.div {...fade(0.1)}>
          <span style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Dinámica de apertura
          </span>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 400, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          Piensa en alguien que admires. ¿Qué es lo que admiras de esa persona?
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: 2, margin: '0 auto' }} />
        </motion.div>

        <motion.p {...fade(0.35)} style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'rgba(255,255,255,0.65)' }}>
          Escanea el código y comparte tu respuesta
        </motion.p>

        <motion.div
          {...fade(0.45)}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1.5px solid rgba(69,197,190,0.25)',
            borderRadius: 20,
            padding: '2rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
          }}
        >
          <img src={QR_URL} alt="QR lluvia de ideas" style={{ width: 200, height: 200, borderRadius: 8 }} />
          <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em' }}>
            hosperation-modulo4.vercel.app/lluvia-input.html
          </p>
        </motion.div>

        <motion.div {...fade(0.55)}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(69,197,190,0.08)',
            border: '1px solid rgba(69,197,190,0.2)',
            borderRadius: '100px',
            padding: '0.35rem 1.1rem',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.6)',
          }}>
            Anónimo · 1 palabra o frase corta
          </span>
        </motion.div>
      </div>
    </div>
  )
}
