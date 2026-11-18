import { R, Label, Bar, Photo } from '../components/ui'

export function ActitudesObservables() {
  const filas = [
    ['Respeto y dignidad', 'No ridiculiza ni expone a nadie.'],
    ['Responsabilidad', 'Da seguimiento, o informa quién lo hará.'],
    ['Prudencia', 'No divulga ni promete lo que no controla.'],
    ['Colaboración', 'Comparte la información que el otro necesita.'],
    ['Apertura', 'Recibe retroalimentación sin represalias.'],
    ['Disposición para orientar', 'Nadie se queda sin saber a dónde ir.'],
  ]
  return (
    <div className="slide">
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.4fr', gap: 100, alignItems: 'center' }}>
        <div>
          <Label i={0}>Bloque 3 · Actitudes prioritarias</Label>
          <R i={1} className="h1">Una actitud se nota en lo que haces.</R>
          <R i={2} className="lead" style={{ marginTop: 36, fontSize: 28 }}>
            La empatía ya la vimos. Ahora la buscamos en actos concretos, en cualquier turno.
          </R>
          <R i={3} className="panel line" style={{ marginTop: 50, padding: '28px 34px' }}>
            <span className="body" style={{ fontSize: 25 }}>Cada área elige <span className="strong">dos conductas</span> que pueda observar en su jornada.</span>
          </R>
        </div>
        <div>
          <R i={1} style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', padding: '0 0 16px', fontSize: 20, color: 'var(--soft)', borderBottom: '2px solid var(--navy)' }}>
            <span>Actitud</span><span>Cómo se observa</span>
          </R>
          {filas.map(([a, c], k) => (
            <R key={a} i={2 + k} style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', padding: '22px 0', borderBottom: '1.5px solid var(--line)', alignItems: 'baseline' }}>
              <span className="serif" style={{ fontSize: 36, color: 'var(--navy)' }}>{a}</span>
              <span className="body" style={{ fontSize: 26 }}>{c}</span>
            </R>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AptitudesTransversales() {
  const aptitudes = ['Comunicación clara', 'Escucha activa', 'Observación y anticipación', 'Organización del tiempo', 'Trabajo colaborativo', 'Resolver dentro de mi rol', 'Herramientas de mi puesto']
  return (
    <div className="slide deep">
      <Label i={0}>Aptitudes transversales</Label>
      <R i={1} className="h1" style={{ maxWidth: 1400 }}>Lo que todos en el hospital necesitamos saber hacer.</R>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 70, maxWidth: 1600 }}>
        {aptitudes.map((t, k) => (
          <R key={t} i={2 + k} className="serif" style={{ fontSize: 42, padding: '18px 38px', borderRadius: 100, background: k < 2 ? 'var(--teal)' : 'rgba(255,255,255,.07)', color: k < 2 ? 'var(--deep)' : '#fff', border: k < 2 ? 'none' : '1.5px solid var(--line-dk)' }}>{t}</R>
        ))}
      </div>
      <R i={9} className="lead" style={{ marginTop: 70, fontSize: 28 }}>
        Las técnicas de cada puesto se validan con su jefatura. Estas son comunes a todos. Profundizamos en las dos primeras.
      </R>
    </div>
  )
}

export function ComunicacionClara() {
  const reglas = ['Lenguaje sencillo, sin tecnicismos', 'Una instrucción a la vez si hay tensión', 'Confirma que entendió el siguiente paso', 'Datos importantes, por el canal establecido']
  return (
    <div className="slide" style={{ padding: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', height: '100%' }}>
        <div style={{ padding: '120px 90px 130px 150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Label i={0}>Comunicación clara</Label>
          <R i={1} className="h1">Que se entienda a la primera.</R>
          <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column' }}>
            {reglas.map((t, k) => (
              <R key={t} i={2 + k} className="body" style={{ padding: '18px 0', borderBottom: '1.5px solid var(--line)', display: 'flex', gap: 22, alignItems: 'center' }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />{t}
              </R>
            ))}
          </div>
          <R i={7} className="small" style={{ marginTop: 30 }}>Sin diagnósticos, resultados ni promesas fuera de tu puesto.</R>
        </div>
        <div style={{ position: 'relative' }}>
          <Photo src="/img/11.jpg" veil="linear-gradient(0deg, rgba(8,30,53,.92) 0%, rgba(8,30,53,.2) 55%)" />
          <R i={5} className="say" style={{ position: 'absolute', left: 70, right: 80, bottom: 130, color: '#fff', fontSize: 38 }}>
            “Su siguiente paso es pasar a admisión; ahí revisarán su registro. Le indico dónde está el módulo.”
          </R>
        </div>
      </div>
    </div>
  )
}

export function EscuchaActiva() {
  const pasos = ['Deja que termine', 'Identifica la necesidad concreta', 'Reconoce la emoción sin discutirla', 'Resume lo que entendiste', 'Explica qué puedes hacer y qué canalizas']
  const evita = ['“Cálmese”', '“No es para tanto”', '“Sé exactamente cómo se siente”']
  return (
    <div className="slide">
      <Label i={0}>Escucha activa</Label>
      <R i={1} className="h1">Escuchar es una habilidad. Se entrena.</R>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 22, marginTop: 60 }}>
        {pasos.map((t, k) => (
          <R key={t} i={2 + k} className="panel" style={{ padding: '32px 30px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className="num" style={{ fontSize: 56 }}>{k + 1}</span>
            <span style={{ fontSize: 27, lineHeight: 1.35, color: 'var(--navy)', fontWeight: 500 }}>{t}</span>
          </R>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 70, marginTop: 60, alignItems: 'center' }}>
        <R i={7} className="say" style={{ fontSize: 36 }}>
          “Veo que esta espera le preocupa. Permítame revisar qué información puedo confirmarle y quién puede orientarle.”
        </R>
        <R i={8} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <span className="small" style={{ marginBottom: 4 }}>Evita:</span>
          {evita.map((t) => <span key={t} className="nope">{t}</span>)}
        </R>
      </div>
    </div>
  )
}

export function CerrarCircuito() {
  const pasos = ['Detecto la necesidad', 'Aviso por el canal autorizado', 'Hay un responsable', 'Explico el siguiente paso', 'Confirmo que se recibió']
  const R0 = 300
  return (
    <div className="slide deep">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <Label i={0}>Colaboración entre áreas</Label>
          <R i={1} className="h1">Una transición falla cuando nadie confirma quién la recibe.</R>
          <Bar i={2} />
          <R i={3} className="body" style={{ color: 'rgba(255,255,255,.75)' }}>
            Si el circuito se cierra, el paciente no repite su historia ni se queda sin respuesta.
          </R>
          <R i={4} className="small" style={{ marginTop: 40 }}>
            Ejemplo: recepción detecta algo que le toca a enfermería, la contacta por el canal autorizado y confirma que la solicitud llegó.
          </R>
        </div>
        <R i={2} style={{ position: 'relative', width: 760, height: 760, justifySelf: 'center' }}>
          <svg width="760" height="760" viewBox="0 0 760 760" style={{ position: 'absolute', inset: 0 }}>
            <circle cx="380" cy="380" r={R0} stroke="rgba(69,197,190,.35)" strokeWidth="3" fill="none" strokeDasharray="6 10" />
          </svg>
          {pasos.map((t, k) => {
            const a = (-90 + k * 72) * (Math.PI / 180)
            const x = 380 + R0 * Math.cos(a)
            const y = 380 + R0 * Math.sin(a)
            return (
              <div key={t} style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)', width: 220, textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, margin: '0 auto 12px', borderRadius: '50%', background: k === 4 ? 'var(--teal)' : 'var(--navy)', border: '2px solid var(--teal)', display: 'grid', placeItems: 'center', fontSize: 26, fontWeight: 700, color: k === 4 ? 'var(--deep)' : 'var(--teal)' }}>{k + 1}</div>
                <div style={{ fontSize: 23, lineHeight: 1.3, background: 'rgba(8,30,53,.85)', padding: '4px 6px', borderRadius: 8 }}>{t}</div>
              </div>
            )
          })}
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
            <span className="serif" style={{ fontSize: 48, lineHeight: 1.1 }}>Cerrar<br /><span className="t">el circuito</span></span>
          </div>
        </R>
      </div>
    </div>
  )
}

export function EstandarPorPuesto() {
  const puestos = [
    ['Clínico', 'Trato respetuoso, verificación y escalamiento clínico según protocolo.'],
    ['Recepción', 'Orientación, datos precisos y confidencialidad.'],
    ['Limpieza y mantenimiento', 'Prevención de riesgos, señalización y reporte.'],
    ['Seguridad', 'Control de acceso, trato digno y desescalamiento seguro.'],
    ['Administración', 'Claridad, seguimiento y protección de la información.'],
  ]
  return (
    <div className="slide">
      <Label i={0}>Un estándar común, cinco aplicaciones</Label>
      <R i={1} className="h1" style={{ maxWidth: 1500 }}>Respeto, responsabilidad y seguridad. Cada puesto los aterriza a su manera.</R>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, marginTop: 64 }}>
        {puestos.map(([p, d], k) => (
          <R key={p} i={2 + k} style={{ background: k % 2 ? '#fff' : 'var(--navy)', color: k % 2 ? 'var(--navy)' : '#fff', borderRadius: 24, padding: '36px 30px', minHeight: 360, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span className="serif" style={{ fontSize: 38, lineHeight: 1.1 }}>{p}</span>
            <span style={{ fontSize: 24, lineHeight: 1.45, opacity: 0.8 }}>{d}</span>
          </R>
        ))}
      </div>
      <R i={8} className="panel line" style={{ marginTop: 44, padding: '26px 34px', display: 'flex', gap: 30, alignItems: 'center' }}>
        <span className="serif td" style={{ fontSize: 32, flexShrink: 0 }}>Criterio</span>
        <span className="body" style={{ fontSize: 25 }}>Ves un derrame y no es tu área: delimitas, reportas según el procedimiento y confirmas que se atendió. Actúas dentro de tu rol y escalas lo que lo supera.</span>
      </R>
    </div>
  )
}

export function RecuperacionServicio() {
  const pasos = ['Escuchar', 'Reconocer la preocupación', 'Aclarar el hecho', 'Explicar qué sí puedo hacer', 'Resolver o canalizar con responsable', 'Confirmar que ocurrió']
  const no = ['Culpar a otra área', 'Discutir', 'Prometer plazos no confirmados', 'Ocultar un incidente']
  return (
    <div className="slide white">
      <Label i={0}>Recuperación del servicio</Label>
      <R i={1} className="h1">Cuando algo falla, lo que haces después es lo que se recuerda.</R>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', marginTop: 70, position: 'relative' }}>
        <div className="grow-x" style={{ '--i': 2, position: 'absolute', top: 32, left: 32, right: '16%', height: 3, background: 'var(--teal)' }} />
        {pasos.map((t, k) => (
          <R key={t} i={2 + k} style={{ paddingRight: 24, position: 'relative' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: k === 5 ? 'var(--teal)' : 'var(--navy)', color: k === 5 ? 'var(--deep)' : '#fff', display: 'grid', placeItems: 'center', fontSize: 26, fontWeight: 700 }}>{k + 1}</div>
            <div style={{ fontSize: 28, lineHeight: 1.3, color: 'var(--navy)', fontWeight: 500, marginTop: 24 }}>{t}</div>
          </R>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 70, marginTop: 70, alignItems: 'center' }}>
        <R i={8} className="say" style={{ fontSize: 38 }}>“Lamento la demora. Voy a verificar el estado de su solicitud y le indicaré quién puede darle una respuesta.”</R>
        <R i={9} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {no.map((t) => <span key={t} className="nope">{t}</span>)}
        </R>
      </div>
    </div>
  )
}
