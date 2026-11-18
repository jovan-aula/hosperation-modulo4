import { R, Label, Bar, Photo } from '../components/ui'

export function SimulacionInstrucciones() {
  const pasos = [
    ['Lean el caso', 'En voz alta, todo el equipo.'],
    ['Respondan juntos', 'Las cuatro preguntas de la hoja.'],
    ['Expliquen al grupo', 'Qué harían y qué le dirían al paciente.'],
  ]
  return (
    <div className="slide dark" style={{ padding: 0 }}>
      <Photo src="/img/12.jpg" veil="linear-gradient(90deg, rgba(12,45,78,.98) 0%, rgba(12,45,78,.96) 55%, rgba(12,45,78,.75) 100%)" />
      <div style={{ position: 'relative', padding: '120px 150px 130px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Label i={0}>Práctica · Ejercicio en equipo</Label>
        <R i={1} className="h1">Ahora no lo escuchamos. Lo resolvemos.</R>
        <div className="grid3" style={{ marginTop: 64 }}>
          {pasos.map(([t, d], k) => (
            <R key={t} i={2 + k} className="panel" style={{ background: 'rgba(255,255,255,.07)' }}>
              <span className="serif t" style={{ fontSize: 60 }}>{k + 1}</span>
              <div className="serif" style={{ fontSize: 44, marginTop: 8, color: k === 2 ? 'var(--teal)' : '#fff' }}>{t}</div>
              <div className="body" style={{ fontSize: 26, marginTop: 12, color: 'rgba(255,255,255,.75)' }}>{d}</div>
            </R>
          ))}
        </div>
        <R i={6} style={{ marginTop: 50, alignSelf: 'flex-start', background: 'var(--teal)', color: 'var(--deep)', fontWeight: 700, borderRadius: 100, padding: '14px 32px', fontSize: 24 }}>
          Una hoja por equipo · un vocero explica
        </R>
      </div>
    </div>
  )
}

export function TresCasos() {
  const preguntas = [
    '¿Qué actitud se requiere?',
    '¿Qué aptitud aplica?',
    '¿Qué puede confirmar y qué debe escalar?',
    '¿Qué le diríamos al paciente?',
  ]
  return (
    <div className="slide">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 90, alignItems: 'center' }}>
        <div>
          <Label i={0}>El caso</Label>
          <R i={1} className="h1">Espera prolongada</R>
          <Bar i={2} />
          <R i={3} className="body" style={{ fontSize: 34, lineHeight: 1.45 }}>
            Un paciente lleva más tiempo del esperado y exige una explicación en voz alta frente a otras personas. El colaborador no conoce la causa exacta de la demora.
          </R>
        </div>
        <div>
          {preguntas.map((q, k) => (
            <R key={q} i={4 + k} style={{ display: 'flex', gap: 28, alignItems: 'baseline', padding: '26px 0', borderBottom: '1.5px solid var(--line)' }}>
              <span className="serif t" style={{ fontSize: 40 }}>{k + 1}</span>
              <span className="serif" style={{ fontSize: 42, lineHeight: 1.2, color: 'var(--navy)' }}>{q}</span>
            </R>
          ))}
          <R i={9} className="small" style={{ marginTop: 30 }}>Se evalúa tono, claridad, precisión y seguimiento. No si la persona “es amable”.</R>
        </div>
      </div>
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
            Cada equipo explica su respuesta. El grupo comenta con ejemplos, no adjetivos.
          </R>
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
