import { R, Label, Bar, Photo, HMark } from '../components/ui'

export function LaH() {
  const piezas = [
    ['Actitud', 'Cómo me comporto.'],
    ['Aptitud', 'Qué puedo hacer correctamente.'],
    ['Condiciones', 'Qué procesos y recursos me permiten hacerlo.'],
  ]
  return (
    <div className="slide deep">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 120, alignItems: 'center' }}>
        <R i={0} style={{ display: 'grid', placeItems: 'center' }}><HMark size={560} /></R>
        <div>
          <Label i={1}>Tres elementos del desempeño profesional</Label>
          <R i={2} className="h1">Si falta una pieza, la H se cae.</R>
          <Bar i={3} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
            {piezas.map(([t, d], k) => (
              <R key={t} i={4 + k} style={{ display: 'grid', gridTemplateColumns: '260px 1fr', alignItems: 'baseline', paddingBottom: 26, borderBottom: '1.5px solid var(--line-dk)' }}>
                <span className="serif" style={{ fontSize: 46, color: k === 2 ? 'var(--teal)' : '#fff' }}>{t}</span>
                <span className="body">{d}</span>
              </R>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FaltaPieza() {
  return (
    <div className="slide">
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 100, alignItems: 'center' }}>
        <div>
          <Label i={0}>Un ejemplo</Label>
          <R i={1} className="h2">
            Un colaborador quiere orientar al paciente, pero no conoce el flujo de admisión ni tiene a quién canalizarlo.
          </R>
          <Bar i={2} />
          <R i={3} className="h2 td" style={{ fontStyle: 'italic' }}>
            No le falta actitud. Le faltan condiciones.
          </R>
          <R i={4} className="lead" style={{ marginTop: 40, fontSize: 30 }}>
            Antes de culpar a la persona, revisa si el proceso le permitía hacerlo bien.
          </R>
        </div>
        <R i={2} style={{ display: 'grid', placeItems: 'center', background: 'var(--navy)', borderRadius: 32, padding: 60 }}>
          <HMark size={380} broken />
        </R>
      </div>
    </div>
  )
}

export function NoEsFeliz() {
  const no = ['Ocultar lo que sientes', 'Aceptar agresiones', 'Resolver lo que no te corresponde']
  return (
    <div className="slide dark" style={{ padding: 0 }}>
      <div style={{ position: 'absolute', inset: '0 0 0 57%' }}>
        <Photo src="/img/8.jpg" pos="45% center" veil="linear-gradient(90deg, var(--navy) 0%, rgba(12,45,78,0) 30%)" />
      </div>
      <div style={{ position: 'relative', width: '57%', height: '100%', padding: '120px 90px 130px 150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Label i={0}>Actitud profesional</Label>
        <R i={1} className="h1">No es estar feliz todo el tiempo.</R>
        <Bar i={2} />
        <R i={3} className="body" style={{ fontSize: 32 }}>
          Es mantener un trato <span className="t">respetuoso, responsable y prudente</span> aun cuando hay presión.
        </R>
        <R i={4} className="small" style={{ marginTop: 50, marginBottom: 18 }}>No te exige:</R>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {no.map((t, k) => (
            <R key={t} i={5 + k} style={{ fontSize: 28, color: 'rgba(255,255,255,.85)', display: 'flex', gap: 18, alignItems: 'center' }}>
              <span style={{ width: 26, height: 3, background: 'rgba(255,255,255,.4)' }} />{t}
            </R>
          ))}
        </div>
        <R i={8} className="small" style={{ marginTop: 50, maxWidth: 760 }}>
          En un turno saturado puedes reconocer la demora sin responder con hostilidad.
        </R>
      </div>
    </div>
  )
}

export function AptitudSeDemuestra() {
  const tres = [
    ['Conocimiento', 'Sé qué me corresponde.'],
    ['Habilidad', 'Sé ejecutarlo.'],
    ['Criterio', 'Reconozco cuándo actuar, detenerme o pedir apoyo.'],
  ]
  return (
    <div className="slide">
      <Label i={0}>Aptitud profesional</Label>
      <R i={1} className="h1">La aptitud no se presume. Se demuestra.</R>
      <div style={{ display: 'flex', alignItems: 'stretch', marginTop: 70, gap: 0 }}>
        {tres.map(([t, d], k) => (
          <R key={t} i={2 + k} style={{ flex: 1, padding: '10px 50px 10px 0', marginRight: 50, borderRight: k < 2 ? '2px solid var(--line)' : 'none' }}>
            <div className="h2" style={{ fontSize: 56 }}>{t}</div>
            <div className="body" style={{ marginTop: 16, color: 'var(--soft)' }}>{d}</div>
          </R>
        ))}
      </div>
      <R i={5} className="panel" style={{ marginTop: 70, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 40, alignItems: 'center' }}>
        <span className="serif" style={{ fontSize: 34, color: 'var(--teal-d)' }}>En recepción</span>
        <span className="body">No se interpretan resultados clínicos: se identifica la consulta y se canaliza con el personal autorizado.</span>
      </R>
      <R i={6} className="lead" style={{ marginTop: 40, fontSize: 30 }}>Una buena intención nunca sustituye la competencia ni el protocolo.</R>
    </div>
  )
}

export function Escenarios() {
  const cell = (title, desc, tone) => {
    const tones = {
      best: { background: 'var(--navy)', color: '#fff', sub: 'rgba(255,255,255,.7)' },
      train: { background: '#fff', color: 'var(--navy)', sub: 'var(--soft)' },
      risk: { background: '#FFF6E8', color: '#7A4A0B', sub: '#8A6A3B' },
      plan: { background: '#FCEDED', color: '#8B2424', sub: '#8F5A5A' },
    }[tone]
    return (
      <div style={{ background: tones.background, borderRadius: 24, padding: '40px 44px', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
        <span className="serif" style={{ fontSize: 44, color: tones.color }}>{title}</span>
        <span style={{ fontSize: 24, lineHeight: 1.45, color: tones.sub }}>{desc}</span>
      </div>
    )
  }
  return (
    <div className="slide">
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.4fr', gap: 90, alignItems: 'center' }}>
        <div>
          <Label i={0}>Cuatro escenarios</Label>
          <R i={1} className="h2">Disposición y competencia no siempre llegan juntas.</R>
          <R i={2} className="lead" style={{ marginTop: 36, fontSize: 28 }}>
            Piensa en ejemplos de tu día a día. Describe conductas y brechas, sin señalar a nadie.
          </R>
        </div>
        <R i={3} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 20, height: 640 }}>
          {cell('Respuesta confiable', 'Buena disposición y competencia.', 'best')}
          {cell('Necesita formación', 'Buena disposición, con una brecha de conocimiento.', 'train')}
          {cell('Riesgo para el equipo', 'Competencia, pero mala disposición.', 'risk')}
          {cell('Plan de mejora', 'Sin disposición ni competencia: requiere intervención.', 'plan')}
        </R>
      </div>
    </div>
  )
}

export function ObservaConductas() {
  const ve = ['Si lo escuchan', 'Si le explican', 'Si lo orientan', 'Si respetan su privacidad', 'Si alguien se hace cargo de su siguiente paso']
  return (
    <div className="slide deep">
      <Label i={0}>Lo que el paciente sí puede evaluar</Label>
      <R i={1} className="display" style={{ fontSize: 104, maxWidth: 1500 }}>
        El paciente observa conductas, <span className="t it">no intenciones.</span>
      </R>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 70, maxWidth: 1500 }}>
        {ve.map((t, k) => (
          <R key={t} i={2 + k} style={{ fontSize: 28, padding: '14px 30px', borderRadius: 100, background: 'rgba(255,255,255,.07)', border: '1.5px solid var(--line-dk)' }}>{t}</R>
        ))}
      </div>
      <R i={8} className="small" style={{ marginTop: 50 }}>
        No sustituye el resultado clínico: es otra dimensión que el paciente sí percibe.
      </R>
    </div>
  )
}
