import { R, Label, Bar, Photo } from '../components/ui'

export function SimulacionInstrucciones() {
  const roles = [
    ['Colaborador', 'Atiende la situación como lo haría en su turno.'],
    ['Paciente o familiar', 'Actúa el caso. Sin exagerar, sin facilitarlo.'],
    ['Observador', 'Marca conductas en la hoja 2. Hechos, no adjetivos.'],
  ]
  const pasos = ['Lean su caso (hoja 1)', 'Actúen 3 minutos', 'Debriefing de 5 minutos', 'Roten roles y repitan']
  return (
    <div className="slide dark" style={{ padding: 0 }}>
      <Photo src="/img/12.jpg" veil="linear-gradient(90deg, rgba(12,45,78,.98) 0%, rgba(12,45,78,.96) 55%, rgba(12,45,78,.75) 100%)" />
      <div style={{ position: 'relative', padding: '120px 150px 130px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Label i={0}>Práctica · Simulación breve en tríos</Label>
        <R i={1} className="h1">Ahora no lo escuchamos. Lo practicamos.</R>
        <div className="grid3" style={{ marginTop: 64 }}>
          {roles.map(([r, d], k) => (
            <R key={r} i={2 + k} className="panel" style={{ background: 'rgba(255,255,255,.07)' }}>
              <div className="serif" style={{ fontSize: 44, color: k === 2 ? 'var(--teal)' : '#fff' }}>{r}</div>
              <div className="body" style={{ fontSize: 26, marginTop: 12, color: 'rgba(255,255,255,.75)' }}>{d}</div>
            </R>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 0, marginTop: 56 }}>
          {pasos.map((p, k) => (
            <R key={p} i={5 + k} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 18, fontSize: 28 }}>
              <span className="serif t" style={{ fontSize: 52 }}>{k + 1}</span>{p}
            </R>
          ))}
        </div>
        <R i={10} style={{ marginTop: 50, alignSelf: 'flex-start', background: 'var(--teal)', color: 'var(--deep)', fontWeight: 700, borderRadius: 100, padding: '14px 32px', fontSize: 24 }}>
          25 minutos en total · 3 rondas
        </R>
      </div>
    </div>
  )
}

export function TresCasos() {
  const casos = [
    ['Espera prolongada', 'Un paciente lleva más tiempo del esperado y exige una explicación. No conoces la causa exacta.', '¿Qué puedes confirmar y qué debes escalar?'],
    ['Comunicación y entorno', 'Una persona no entiende las instrucciones y se altera con el ruido y el movimiento.', '¿Qué ajustes sencillos puedes ofrecer y a quién canalizas?'],
    ['Condición insegura', 'Detectas algo que podría causar una caída o lesión. No es tu área.', '¿Qué conducta demuestra responsabilidad?'],
  ]
  return (
    <div className="slide">
      <Label i={0}>Los casos</Label>
      <R i={1} className="h1">Tres situaciones reales del recorrido del paciente.</R>
      <div className="grid3" style={{ marginTop: 64 }}>
        {casos.map(([t, d, q], k) => (
          <R key={t} i={2 + k} className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 22, padding: '44px 42px' }}>
            <span style={{ fontSize: 22, color: 'var(--soft)' }}>Caso {k + 1}</span>
            <span className="h3" style={{ fontSize: 44 }}>{t}</span>
            <span className="body" style={{ fontSize: 26 }}>{d}</span>
            <span style={{ marginTop: 'auto', paddingTop: 22, borderTop: '1.5px solid var(--line)', fontSize: 25, lineHeight: 1.45, color: 'var(--teal-d)', fontWeight: 600 }}>{q}</span>
          </R>
        ))}
      </div>
      <R i={6} className="small" style={{ marginTop: 36 }}>Se evalúa tono, claridad, precisión y seguimiento. No si la persona “es amable”.</R>
    </div>
  )
}

export function DebriefPractica() {
  const preguntas = [
    '¿Qué necesitaba realmente el paciente o familiar?',
    '¿Qué conducta ayudó a generar confianza?',
    '¿En qué momento se perdió claridad o coordinación?',
    '¿El colaborador actuó dentro de su competencia?',
    '¿Qué procedimiento o apoyo hacía falta?',
  ]
  return (
    <div className="slide deep">
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.3fr', gap: 100, alignItems: 'center' }}>
        <div>
          <Label i={0}>Debriefing en plenaria</Label>
          <R i={1} className="h1">¿Qué observamos?</R>
          <Bar i={2} />
          <R i={3} className="body" style={{ color: 'rgba(255,255,255,.75)' }}>
            Usa la escala de la hoja 2. Registra ejemplos, no adjetivos.
          </R>
          <div style={{ display: 'flex', gap: 10, marginTop: 40 }}>
            {['No demostrado', 'Inconsistente', 'Generalmente', 'Consistente'].map((n, k) => (
              <R key={n} i={4 + k} style={{ flex: 1, textAlign: 'center' }}>
                <div className="serif" style={{ fontSize: 52, color: k === 3 ? 'var(--teal)' : '#fff', background: `rgba(69,197,190,${0.08 + k * 0.08})`, borderRadius: 16, padding: '10px 0' }}>{k + 1}</div>
                <div style={{ fontSize: 18, marginTop: 10, color: 'rgba(255,255,255,.6)' }}>{n}</div>
              </R>
            ))}
          </div>
        </div>
        <div>
          {preguntas.map((q, k) => (
            <R key={q} i={3 + k} style={{ display: 'flex', gap: 28, alignItems: 'baseline', padding: '24px 0', borderBottom: '1.5px solid var(--line-dk)' }}>
              <span className="serif t" style={{ fontSize: 36 }}>{k + 1}</span>
              <span className="serif" style={{ fontSize: 38, lineHeight: 1.2 }}>{q}</span>
            </R>
          ))}
          <R i={9} className="body" style={{ marginTop: 30, color: 'var(--teal)' }}>¿Qué haríamos igual y qué cambiaríamos en el siguiente intento?</R>
        </div>
      </div>
    </div>
  )
}
