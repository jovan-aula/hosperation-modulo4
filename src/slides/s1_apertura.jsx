import { R, Label, Bar, Photo, Logo, QR, asset } from '../components/ui'

export function Portada() {
  return (
    <div className="slide dark" style={{ padding: 0 }}>
      <Photo src="/img/1.jpg" pos="70% center" veil="linear-gradient(90deg, rgba(8,30,53,.97) 0%, rgba(8,30,53,.9) 38%, rgba(8,30,53,.35) 70%, rgba(8,30,53,.15) 100%)" />
      <div style={{ position: 'relative', padding: '110px 150px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <R i={0}><Logo h={78} /></R>
        <div style={{ maxWidth: 1050 }}>
          <Label i={1}>Hospital Florence — Módulo 5</Label>
          <R i={2} className="display" style={{ fontSize: 112 }}>
            Actitudes y aptitudes en el entorno hospitalario
          </R>
          <Bar i={3} />
          <R i={4} className="lead" style={{ color: 'rgba(255,255,255,.75)' }}>
            Del perfil individual a las conductas de alto desempeño.
          </R>
        </div>
        <R i={5} style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--teal)', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 22, color: 'var(--deep)' }}>ER</div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 600 }}>Mtro. Edrick Reyes</div>
            <div style={{ fontSize: 20, color: 'rgba(255,255,255,.55)' }}>Facilitador, Hosperation</div>
          </div>
        </R>
      </div>
    </div>
  )
}

export function Pregunta() {
  const opciones = ['La tecnología', 'La preparación clínica', 'La coordinación', 'Cómo lo trata cada persona']
  return (
    <div className="slide deep">
      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 110, alignItems: 'center' }}>
        <div>
          <Label i={0}>Para comenzar</Label>
          <R i={1} className="h1">¿Qué hace que un paciente confíe en un hospital?</R>
          <div style={{ marginTop: 56, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {opciones.map((o, k) => (
              <R key={o} i={2 + k} style={{ fontSize: 28, padding: '14px 30px', borderRadius: 100, border: '1.5px solid rgba(255,255,255,.22)', color: k === 3 ? 'var(--deep)' : 'rgba(255,255,255,.85)', background: k === 3 ? 'var(--teal)' : 'transparent' }}>{o}</R>
            ))}
          </div>
          <R i={7} className="lead" style={{ marginTop: 56, fontSize: 30 }}>
            La confianza nace cuando todo eso es <span className="t">consistente</span>.
          </R>
        </div>
        <R i={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <QR path="/lluvia-input.html" size={330} />
          <span className="small" style={{ textAlign: 'center' }}>Escanea y escribe una conducta del personal<br />que te haya hecho confiar.</span>
        </R>
      </div>
    </div>
  )
}

export function LluviaDisplay() {
  return (
    <div className="slide deep" style={{ padding: 0 }}>
      <iframe src={asset('/lluvia-display.html')} title="Respuestas en vivo" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} />
    </div>
  )
}

export function Objetivo() {
  const preguntas = [
    ['¿Qué conducta se espera de mí?', 'Lo que el paciente y mi equipo deben poder ver.'],
    ['¿Qué habilidad necesito?', 'Lo que tengo que saber hacer para cumplirla.'],
    ['¿Cómo sé que lo hago bien?', 'La evidencia, no la intención.'],
  ]
  return (
    <div className="slide">
      <Label i={0}>Objetivo del módulo</Label>
      <R i={1} className="h2" style={{ maxWidth: 1450 }}>
        Identificar las actitudes y aptitudes que exige tu puesto, y demostrarlas en situaciones habituales y difíciles.
      </R>
      <R i={2} className="small" style={{ marginTop: 22 }}>
        Aplica a personal clínico y no clínico, respetando protocolos, límites de función y necesidades del paciente.
      </R>
      <div className="grid3" style={{ marginTop: 70 }}>
        {preguntas.map(([q, d], k) => (
          <R key={q} i={3 + k} className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className="num">{k + 1}</span>
            <span className="h3" style={{ fontSize: 38 }}>{q}</span>
            <span className="small">{d}</span>
          </R>
        ))}
      </div>
      <R i={6} className="small" style={{ marginTop: 40 }}>
        En el módulo anterior hablamos de empatía, comunicación, autocontrol y colaboración. Hoy las convertimos en conductas.
      </R>
    </div>
  )
}

// Video de YouTube: "Empathy: The Human Connection to Patient Care" (Cleveland Clinic, 2013, 4:24).
// Para cambiarlo, reemplaza VIDEO_ID. Versión con título en español para revisar: SuFvOP255tU
const VIDEO_ID = 'cDDWvj_q-o8'

export function Video() {
  const src = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=es&hl=es`
  return (
    <div className="slide deep" style={{ padding: '70px 150px 110px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 30 }}>
        <span className="h3" style={{ color: '#fff' }}>Si pudieras ver lo que siente cada persona, ¿la tratarías distinto?</span>
        <span className="small">Cleveland Clinic · 4 min</span>
      </div>
      <div style={{ flex: 1, borderRadius: 24, overflow: 'hidden', background: '#000', boxShadow: '0 40px 100px -40px rgba(0,0,0,.8)' }}>
        <iframe src={src} title="Empathy: The Human Connection to Patient Care" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen style={{ width: '100%', height: '100%', border: 0 }} />
      </div>
    </div>
  )
}
