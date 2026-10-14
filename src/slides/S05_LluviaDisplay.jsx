import { motion } from 'framer-motion'

export default function S05_LluviaDisplay() {
  return (
    <div style={{
      width: '100vw', height: '100vh', position: 'relative',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      overflow: 'hidden',
    }}>
      {/* Badge at top */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)',
          zIndex: 10,
          background: 'rgba(69,197,190,0.12)',
          border: '1px solid rgba(69,197,190,0.3)',
          borderRadius: '100px',
          padding: '0.3rem 1.2rem',
          fontSize: '0.72rem', fontWeight: 700,
          color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        Respuestas en vivo
      </motion.div>

      {/* Iframe fills entire slide */}
      <iframe
        src="/lluvia-display.html"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          borderWidth: 0,
        }}
        title="Lluvia de ideas en vivo"
      />
    </div>
  )
}
