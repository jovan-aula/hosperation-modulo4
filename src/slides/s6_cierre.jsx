import { R, Label, Bar, Photo, Logo } from '../components/ui'

export function Organizacion() {
  const necesita = ['Protocolos accesibles', 'Información actualizada', 'Capacitación', 'Herramientas', 'Canales para escalar', 'Recursos suficientes', 'Liderazgo coherente']
  return (
    <div className="slide">
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 100, alignItems: 'center' }}>
        <div>
          <Label i={0}>Cultura justa</Label>
          <R i={1} className="h1">No se puede exigir un estándar que el sistema impide cumplir.</R>
          <Bar i={2} />
          <R i={3} className="lead" style={{ fontSize: 30 }}>
            Pedir rapidez sin definir prioridades ni asegurar cobertura genera frustración y riesgo.
          </R>
          <R i={4} className="small" style={{ marginTop: 30 }}>Responsabilidad individual y aprendizaje del sistema, al mismo tiempo.</R>
        </div>
        <R i={2} style={{ background: 'var(--navy)', borderRadius: 32, padding: '50px 56px', color: '#fff' }}>
          <div className="serif" style={{ fontSize: 42, lineHeight: 1.15, marginBottom: 26 }}>Lo que el colaborador necesita del hospital</div>
          {necesita.map((t, k) => (
            <R key={t} i={3 + k} style={{ fontSize: 28, padding: '13px 0', borderTop: '1.5px solid var(--line-dk)', display: 'flex', gap: 18, alignItems: 'center' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--teal)' }} />{t}
            </R>
          ))}
        </R>
      </div>
    </div>
  )
}

export function Medir() {
  const fases = [
    ['Días 1–30', 'Diagnóstico', 'Línea base, conductas acordadas por puesto y brechas detectadas.'],
    ['Días 31–60', 'Práctica', 'Escenarios, microcapacitaciones y observaciones piloto.'],
    ['Días 61–90', 'Ajuste', 'Revisar indicadores, escuchar al personal y pacientes, corregir procesos y reconocer lo consistente.'],
  ]
  const indicadores = ['Conductas observadas en auditorías', 'Tiempo de respuesta a solicitudes', 'Quejas con seguimiento y cierre', 'Temas recurrentes de pacientes', 'Reportes de riesgos y casi incidentes', 'Percepción de colaboración']
  return (
    <div className="slide white">
      <Label i={0}>Propuesta Hosperation para Florence</Label>
      <R i={1} className="h1">Lo que no se mide, se queda en buena intención.</R>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 60, position: 'relative' }}>
        <div className="grow-x" style={{ '--i': 2, position: 'absolute', top: 14, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--azul), var(--teal))', borderRadius: 2 }} />
        {fases.map(([d, t, x], k) => (
          <R key={d} i={2 + k} style={{ paddingRight: 50, position: 'relative' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', border: '6px solid var(--teal)' }} />
            <div style={{ fontSize: 22, color: 'var(--soft)', marginTop: 22 }}>{d}</div>
            <div className="h3" style={{ marginTop: 4 }}>{t}</div>
            <div className="body" style={{ fontSize: 25, marginTop: 10, color: 'var(--soft)' }}>{x}</div>
          </R>
        ))}
      </div>
      <R i={6} style={{ marginTop: 56, background: 'var(--mist)', borderRadius: 24, padding: '30px 40px' }}>
        <div className="small" style={{ marginBottom: 16 }}>Qué medir (por área y turno, sin rankings individuales):</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px 40px' }}>
          {indicadores.map((t) => <span key={t} style={{ fontSize: 24, color: 'var(--navy)', fontWeight: 500 }}>{t}</span>)}
        </div>
      </R>
    </div>
  )
}

export function Compromiso() {
  const frases = ['Una conducta que voy a fortalecer es…', 'La aplicaré cuando…', 'Sabré que mejoré porque…']
  return (
    <div className="slide deep">
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.3fr', gap: 100, alignItems: 'center' }}>
        <div>
          <Label i={0}>Mi compromiso</Label>
          <R i={1} className="h1">Una conducta que se pueda ver.</R>
          <Bar i={2} />
          <R i={3} className="body" style={{ color: 'rgba(255,255,255,.72)' }}>
            Específica y realista. “Ser mejor” no cuenta.
          </R>
          <R i={4} className="small" style={{ marginTop: 30 }}>Tómate 3 minutos. Escríbelo.</R>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          {frases.map((f, k) => (
            <R key={f} i={2 + k} style={{ borderBottom: '2px dashed rgba(69,197,190,.45)', paddingBottom: 46 }}>
              <span className="serif" style={{ fontSize: 50 }}>{f}</span>
            </R>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Cierre() {
  const tres = [['Actitud', 'cómo trato'], ['Aptitud', 'cómo ejecuto'], ['Cultura', 'cómo el hospital hace posibles ambas']]
  return (
    <div className="slide deep center" style={{ padding: 0 }}>
      <Photo src="/img/1.jpg" veil="radial-gradient(80% 80% at 50% 50%, rgba(8,30,53,.86) 0%, rgba(8,30,53,.97) 100%)" />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 150px' }}>
        <R i={0} className="display" style={{ fontSize: 120 }}>La excelencia no se declara.</R>
        <R i={2} className="display t it" style={{ fontSize: 120, marginTop: 10 }}>Se demuestra.</R>
        <div style={{ display: 'flex', gap: 80, marginTop: 90 }}>
          {tres.map(([t, d], k) => (
            <R key={t} i={4 + k} style={{ textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 40 }}>{t}</div>
              <div style={{ fontSize: 24, color: 'rgba(255,255,255,.6)', marginTop: 6 }}>{d}</div>
            </R>
          ))}
        </div>
        <R i={8} style={{ marginTop: 90 }}><Logo h={60} /></R>
      </div>
    </div>
  )
}

export function Referencias() {
  const refs = [
    'Boston Medical Center Health System (2023). Together @ BMCHS: DEI Year in Review — Cultural Responsiveness Training.',
    'Boston Medical Center. Autism Friendly Initiative.',
    'Massachusetts General Hospital, Institute for Patient Care. Knight Simulation Programs.',
    'Mass General Brigham University of Health Professions (2026). Working with Actors to Train Students and Hospital Healthcare Providers.',
    'Massachusetts General Hospital (2019). Patient and Family Advisory Councils: 2018–2019 Annual Report (modelo iCare).',
    'American Hospital Dubai. About Us — Service Excellence Programme.',
    'Mayo Clinic Care Network. No one lost in between: How American Hospital Dubai rebuilt its gastroenterology patient journey.',
    'Boston Medical Center. Education & Training.',
    'Massachusetts General Hospital. Nursing & Patient Care Services Diversity Program.',
    'Cleveland Clinic (2013). Empathy: The Human Connection to Patient Care [video].',
  ]
  return (
    <div className="slide white" style={{ justifyContent: 'flex-start', paddingTop: 110 }}>
      <Label i={0}>Referencias</Label>
      <div style={{ columnCount: 2, columnGap: 80, marginTop: 10 }}>
        {refs.map((r, k) => (
          <R key={k} i={1} style={{ breakInside: 'avoid', display: 'flex', gap: 18, marginBottom: 22, fontSize: 21, lineHeight: 1.45, color: 'var(--ink)' }}>
            <span style={{ color: 'var(--teal-d)', fontWeight: 700, minWidth: 34 }}>[{k + 1}]</span><span>{r}</span>
          </R>
        ))}
      </div>
      <R i={2} className="small" style={{ marginTop: 20, fontSize: 18 }}>
        Contenido: Mtro. Edrick Reyes M., Hosperation (15 nov 2026). Las propuestas para Florence son adaptación de Hosperation, no prácticas ya implementadas. No implica afiliación ni aval de las instituciones citadas.
      </R>
    </div>
  )
}

// Reel de Instagram (@aprendemosjuntosbbva): dudar de uno mismo como señal de crecimiento.
// Para cambiarlo, reemplaza REEL_ID por el código que aparece en la URL del reel.
const REEL_ID = 'Df4sV3uuc5W'

export function ReelReflexion() {
  return (
    <div className="slide deep">
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 110, alignItems: 'center', height: '100%' }}>
        <div>
          <Label i={0}>Antes del compromiso</Label>
          <R i={1} className="h1">¿Cuándo fue la última vez que te detuviste a escucharte?</R>
          <Bar i={2} />
          <R i={3} className="body" style={{ color: 'rgba(255,255,255,.72)' }}>
            Dudar de lo que hacemos no es mala señal. Muchas veces es el primer paso para mejorar.
          </R>
          <R i={4} className="small" style={{ marginTop: 30 }}>Aprendemos Juntos · Instagram</R>
        </div>
        <R i={2} style={{ justifySelf: 'center' }}>
          {/* Instagram no permite insertar este reel (X-Frame-Options: DENY), así que la tarjeta lo abre en otra pestaña. */}
          <a href={`https://www.instagram.com/reel/${REEL_ID}/`} target="_blank" rel="noopener noreferrer"
            style={{ height: 820, aspectRatio: '9 / 16', borderRadius: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 34, textDecoration: 'none', color: '#fff', background: 'linear-gradient(160deg, rgba(69,197,190,.22) 0%, rgba(255,255,255,.06) 55%, rgba(255,255,255,.03) 100%)', border: '2px solid rgba(69,197,190,.45)', boxShadow: '0 40px 100px -40px rgba(0,0,0,.8)' }}>
            <span style={{ width: 150, height: 150, borderRadius: '50%', background: 'var(--teal)', display: 'grid', placeItems: 'center' }}>
              <svg width="62" height="62" viewBox="0 0 24 24" fill="var(--deep)" style={{ marginLeft: 8 }}><path d="M7 4.5v15l12-7.5z" /></svg>
            </span>
            <span className="serif" style={{ fontSize: 46 }}>Ver el reel</span>
            <span style={{ fontSize: 22, color: 'rgba(255,255,255,.6)' }}>Se abre en Instagram</span>
          </a>
        </R>
      </div>
    </div>
  )
}
