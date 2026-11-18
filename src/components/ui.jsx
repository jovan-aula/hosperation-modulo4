// Piezas compartidas de la presentación

// Envuelve un elemento para que entre en orden (i = posición en la secuencia)
export const R = ({ i = 0, as: Tag = 'div', className = '', style, children, ...rest }) => (
  <Tag className={`rise ${className}`} style={{ '--i': i, ...style }} {...rest}>{children}</Tag>
)

export const Label = ({ i = 0, children }) => <R i={i} className="label">{children}</R>

export const Bar = ({ i = 1 }) => <div className="bar grow-x" style={{ '--i': i }} />

// Foto a sangre con velo de color de marca
export const Photo = ({ src, veil, pos = 'center', kb = true }) => (
  <>
    <div className={`photo ${kb ? 'kb' : ''}`} style={{ backgroundImage: `url(${src})`, backgroundPosition: pos }} />
    {veil && <div className="veil" style={{ background: veil }} />}
  </>
)

// Logo de la esquina
export const Logo = ({ dark = true, h = 64, style }) => (
  <img src={dark ? '/img/aula-hosperation-blanco.png' : '/img/aula-hosperation-navy.png'} alt="Aula · Hosperation" style={{ height: h, width: 'auto', ...style }} />
)

/*
  La H del desempeño — motivo gráfico del módulo.
  Inspirada en la H de Hosperation: dos columnas (actitud y aptitud)
  sostenidas por un puente curvo (condiciones de desempeño).
  `show` controla qué piezas se ven: ['a','b','c']
*/
export function HMark({ size = 560, show = ['a', 'b', 'c'], dark = true, broken = false }) {
  const col = dark ? '#fff' : '#0C2D4E'
  const on = (k) => show.includes(k)
  return (
    <svg width={size} height={size * 1.05} viewBox="0 0 400 420" fill="none" aria-hidden>
      {/* columna izquierda: actitud */}
      <path d="M40 120 L150 62 L150 400 Q95 384 40 404 Z" fill={col}
        style={{ opacity: on('a') ? 1 : 0.12, transition: 'opacity .6s' }} />
      {/* columna derecha: aptitud */}
      <path d="M250 70 L360 8 L360 392 Q305 380 250 384 Z" fill={col}
        style={{ opacity: on('b') ? 1 : 0.12, transition: 'opacity .6s' }} />
      {/* puente: condiciones */}
      <path d={broken ? 'M150 236 Q190 250 214 246 L206 278 Q178 280 150 270 Z' : 'M150 236 Q250 262 360 216 L360 252 Q250 296 150 272 Z'}
        fill="#45C5BE" style={{ opacity: on('c') ? 1 : 0.15, transition: 'opacity .6s' }} />
    </svg>
  )
}

// Código QR que apunta al dominio donde esté publicada la presentación
export const QR = ({ path, size = 300 }) => {
  const url = `${window.location.origin}${path}`
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size * 2}x${size * 2}&margin=0&color=0C2D4E&bgcolor=FFFFFF&data=${encodeURIComponent(url)}`
  return (
    <div style={{ background: '#fff', padding: 28, borderRadius: 28, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 18, boxShadow: '0 30px 80px -30px rgba(0,0,0,.6)' }}>
      <img src={src} width={size} height={size} alt="Código QR" />
      <span style={{ fontSize: 18, color: '#5F6F86' }}>{url.replace(/^https?:\/\//, '')}</span>
    </div>
  )
}
