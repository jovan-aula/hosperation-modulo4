import { R, Label, Bar, Photo } from '../components/ui'

const Fuente = ({ i = 9, children }) => (
  <R i={i} className="small" style={{ position: 'absolute', left: 150, bottom: 96, fontSize: 18, fontStyle: 'italic', opacity: 0.8 }}>{children}</R>
)

export function AperturaReferentes() {
  const hospitales = ['Boston Medical Center', 'Massachusetts General Hospital', 'American Hospital Dubai', 'Mayo Clinic']
  return (
    <div className="slide dark" style={{ justifyContent: 'flex-end' }}>
      <Photo src="/img/2.jpg" veil="linear-gradient(0deg, rgba(8,30,53,.97) 20%, rgba(8,30,53,.55) 60%, rgba(8,30,53,.3) 100%)" />
      <div style={{ position: 'relative' }}>
        <Label i={0}>Bloque 2</Label>
        <R i={1} className="display" style={{ maxWidth: 1400 }}>¿Qué hacen los hospitales de referencia?</R>
        <div style={{ display: 'flex', gap: 56, marginTop: 56, flexWrap: 'wrap' }}>
          {hospitales.map((h, k) => (
            <R key={h} i={2 + k} className="serif" style={{ fontSize: 34, color: 'rgba(255,255,255,.82)' }}>{h}</R>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BMCCultural() {
  const stats = [
    ['4,400+', 'colaboradores participaron'],
    ['91%', 'se sintió mejor preparado para conectar con pacientes diversos'],
    ['93%', 'recomendaría la capacitación a un colega'],
  ]
  return (
    <div className="slide">
      <Label i={0}>Boston Medical Center · Respuesta cultural</Label>
      <R i={1} className="h2" style={{ maxWidth: 1400 }}>
        Formaron al personal de atención directa con reflexión personal y trabajo en grupos pequeños.
      </R>
      <div className="grid3" style={{ marginTop: 90 }}>
        {stats.map(([n, d], k) => (
          <R key={n} i={2 + k} style={{ borderTop: '5px solid var(--teal)', paddingTop: 30 }}>
            <div className="serif" style={{ fontSize: 150, lineHeight: 1, color: 'var(--navy)' }}>{n}</div>
            <div className="body" style={{ marginTop: 18, color: 'var(--soft)', maxWidth: 440 }}>{d}</div>
          </R>
        ))}
      </div>
      <Fuente>Resultados reportados por BMC en su informe 2023. [1]</Fuente>
    </div>
  )
}

export function HumildadCultural() {
  const pasos = [
    ['Competencia cultural', 'Amplío lo que sé sobre necesidades y contextos.'],
    ['Humildad cultural', 'Reconozco que mis supuestos pueden estar incompletos.'],
    ['Respuesta cultural', 'Adapto mi trato a la persona concreta.'],
  ]
  return (
    <div className="slide deep">
      <Label i={0}>De saber a adaptar</Label>
      <R i={1} className="h1">Conocer al paciente empieza por dudar de lo que asumo.</R>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, marginTop: 80, position: 'relative' }}>
        <div className="grow-x" style={{ '--i': 2, position: 'absolute', top: 31, left: 30, right: '33%', height: 2, background: 'rgba(69,197,190,.5)' }} />
        {pasos.map(([t, d], k) => (
          <R key={t} i={2 + k} style={{ paddingRight: 60 }}>
            <div style={{ width: 62, height: 62, borderRadius: '50%', border: '2px solid var(--teal)', background: k === 2 ? 'var(--teal)' : 'var(--navy)', display: 'grid', placeItems: 'center', fontSize: 26, fontWeight: 700, color: k === 2 ? 'var(--deep)' : 'var(--teal)', position: 'relative' }}>{k + 1}</div>
            <div className="h3" style={{ marginTop: 34 }}>{t}</div>
            <div className="body" style={{ marginTop: 14, color: 'rgba(255,255,255,.72)' }}>{d}</div>
          </R>
        ))}
      </div>
      <R i={6} className="say" style={{ marginTop: 80, fontSize: 36 }}>
        “¿Cómo prefiere que le dé la información?”
      </R>
      <R i={7} className="small" style={{ marginTop: 20 }}>Pregunta antes de asumir que entiende, o que quiere que un familiar responda por él.</R>
    </div>
  )
}

export function AutismFriendly() {
  const bmc = ['Individualizar la atención', 'Adaptar el entorno sensorial', 'Capacitar al personal', 'Preparar la visita con anticipación']
  const florence = [
    ['Antes', 'Orientar sobre ubicación, documentos y pasos.'],
    ['Durante', 'Explicar qué sigue, validar que entendió y proteger su privacidad.'],
    ['En el entorno', 'Detectar barreras sensoriales, físicas o de comunicación y canalizar ajustes.'],
  ]
  return (
    <div className="slide">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 100 }}>
        <div>
          <Label i={0}>Boston Medical Center · Autism Friendly Initiative</Label>
          <R i={1} className="h2">Cuatro acciones para atender a cada persona como necesita.</R>
          <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {bmc.map((t, k) => (
              <R key={t} i={2 + k} style={{ display: 'flex', gap: 26, alignItems: 'baseline', padding: '20px 0', borderBottom: '1.5px solid var(--line)' }}>
                <span className="serif td" style={{ fontSize: 36 }}>{k + 1}</span>
                <span className="body">{t}</span>
              </R>
            ))}
          </div>
        </div>
        <R i={4} style={{ background: 'var(--navy)', borderRadius: 32, padding: '56px 60px', color: '#fff' }}>
          <div className="label" style={{ color: 'var(--teal)' }}>Lo que podemos adaptar en Florence</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 10 }}>
            {florence.map(([t, d]) => (
              <div key={t}>
                <div className="serif" style={{ fontSize: 40 }}>{t}</div>
                <div style={{ fontSize: 26, lineHeight: 1.5, color: 'rgba(255,255,255,.75)', marginTop: 6 }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, fontSize: 21, color: 'rgba(255,255,255,.5)' }}>No diagnosticamos: observamos necesidades y preguntamos qué apoyo funciona.</div>
        </R>
      </div>
      <Fuente>[2]</Fuente>
    </div>
  )
}

export function CARE() {
  const care = [
    ['C', 'Comunicar', 'Explico y confirmo el siguiente paso.'],
    ['A', 'Orientar', 'Me aseguro de que su necesidad llegue al área correcta.'],
    ['R', 'Respetar', 'Cuido su dignidad, su privacidad y mi lenguaje.'],
    ['E', 'Empatizar', 'Reconozco su preocupación sin minimizarla.'],
  ]
  return (
    <div className="slide white">
      <Label i={0}>Mass General Hospital · Modelo iCare</Label>
      <R i={1} className="h2" style={{ maxWidth: 1300 }}>Cada empleado contribuye a la experiencia. No es eslogan: son cuatro conductas.</R>
      <div className="grid4" style={{ marginTop: 70 }}>
        {care.map(([l, t, d], k) => (
          <R key={l} i={2 + k} style={{ background: 'var(--mist)', borderRadius: 28, padding: '36px 36px 44px', minHeight: 470 }}>
            <div className="serif" style={{ fontSize: 210, lineHeight: 0.9, color: 'var(--navy)' }}>{l}</div>
            <div className="serif td" style={{ fontSize: 40, marginTop: 24 }}>{t}</div>
            <div className="body" style={{ fontSize: 25, marginTop: 12, color: 'var(--soft)' }}>{d}</div>
          </R>
        ))}
      </div>
      <R i={7} className="small" style={{ marginTop: 34 }}>Orientar (advocate) no es saltarse protocolos: es no dejar al paciente sin rumbo.</R>
      <Fuente>Communicate, Advocate, Respect, Empathize. [5]</Fuente>
    </div>
  )
}

export function Simulacion() {
  const practicar = ['Tono estable', 'Distancia segura', 'Escucha', 'Límites claros', 'Opciones realistas', 'Pedir apoyo según protocolo']
  return (
    <div className="slide deep">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 110, alignItems: 'center' }}>
        <div>
          <Label i={0}>Mass General · Simulación y desescalamiento</Label>
          <R i={1} className="h1">Escuchar una explicación no es lo mismo que practicar la respuesta.</R>
          <Bar i={2} />
          <R i={3} className="body" style={{ color: 'rgba(255,255,255,.75)' }}>
            Desde 2004 entrenan liderazgo, comunicación y trabajo en equipo con escenarios grabados y revisados en grupo. Con actores entrenan a sus equipos frente a pacientes agitados.
          </R>
        </div>
        <div>
          <div style={{ display: 'flex', gap: 60, marginBottom: 60 }}>
            <R i={3}><div className="serif t" style={{ fontSize: 120, lineHeight: 1 }}>80+</div><div className="small">sesiones</div></R>
            <R i={4}><div className="serif t" style={{ fontSize: 120, lineHeight: 1 }}>600+</div><div className="small">colaboradores entrenados</div></R>
          </div>
          <R i={5} className="small" style={{ marginBottom: 18 }}>Qué se practica:</R>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            {practicar.map((t, k) => (
              <R key={t} i={6 + k} style={{ fontSize: 26, padding: '12px 26px', borderRadius: 100, border: '1.5px solid var(--line-dk)' }}>{t}</R>
            ))}
          </div>
        </div>
      </div>
      <Fuente i={12}>La simulación no sustituye protocolos clínicos ni de seguridad: ayuda a practicarlos. [3] [4]</Fuente>
    </div>
  )
}

export function Debriefing() {
  const preguntas = ['¿Qué ocurrió?', '¿Qué observamos?', '¿Qué impacto tuvo?', '¿Qué se hizo bien?', '¿Qué hay que cambiar?', '¿Qué haríamos la próxima vez?']
  return (
    <div className="slide">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 110, alignItems: 'center' }}>
        <div>
          <Label i={0}>Debriefing</Label>
          <R i={1} className="h1">La práctica se vuelve aprendizaje cuando la platicamos.</R>
          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 22 }}>
            <R i={2} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: '#fff', background: 'var(--teal-d)', borderRadius: 100, padding: '8px 22px' }}>Hecho</span>
              <span className="serif" style={{ fontSize: 40, color: 'var(--navy)' }}>“Interrumpió tres veces.”</span>
            </R>
            <R i={3} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: '#8B2424', background: '#FCEDED', borderRadius: 100, padding: '8px 22px' }}>Juicio</span>
              <span className="serif" style={{ fontSize: 40, color: 'var(--soft)', textDecoration: 'line-through', textDecorationThickness: 2 }}>“No le importa.”</span>
            </R>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {preguntas.map((q, k) => (
            <R key={q} i={2 + k} style={{ display: 'flex', gap: 30, alignItems: 'baseline', padding: '22px 0', borderBottom: '1.5px solid var(--line)' }}>
              <span className="serif td" style={{ fontSize: 36, width: 30 }}>{k + 1}</span>
              <span className="h3" style={{ fontSize: 40 }}>{q}</span>
            </R>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AHDMayo() {
  return (
    <div className="slide white">
      <Label i={0}>American Hospital Dubai + Mayo Clinic · Gastroenterología</Label>
      <R i={1} className="h1" style={{ maxWidth: 1450 }}>El recorrido del paciente también se diseña.</R>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: 60, marginTop: 80, alignItems: 'end' }}>
        <R i={2}>
          <div className="small">Tiempo de recambio de endoscopia</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 10 }}>
            <span className="serif" style={{ fontSize: 80, color: 'var(--soft)', textDecoration: 'line-through', textDecorationThickness: 3 }}>20</span>
            <span className="serif" style={{ fontSize: 150, lineHeight: 1, color: 'var(--navy)' }}>12.4</span>
            <span className="body">min</span>
          </div>
        </R>
        <R i={3}>
          <div className="small">Satisfacción reportada</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 10 }}>
            <span className="serif" style={{ fontSize: 80, color: 'var(--soft)' }}>96%</span>
            <span className="serif" style={{ fontSize: 150, lineHeight: 1, color: 'var(--navy)' }}>98%</span>
          </div>
        </R>
        <R i={4} className="body" style={{ color: 'var(--soft)', paddingBottom: 14 }}>
          22 sesiones de trabajo para estandarizar flujos. Dos coordinadores llaman al paciente 72 horas antes para detectar problemas de preparación.
        </R>
      </div>
      <R i={5} style={{ marginTop: 80, background: 'var(--navy)', color: '#fff', borderRadius: 24, padding: '36px 46px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40 }}>
        <span className="serif" style={{ fontSize: 40 }}>Una mejor actitud no compensa un proceso fragmentado.</span>
        <span style={{ fontSize: 24, color: 'var(--teal)', maxWidth: 520 }}>¿En qué momento de Florence un paciente se queda sin saber quién le da seguimiento?</span>
      </R>
      <Fuente i={7}>Resultados de una línea de servicio específica. [7]</Fuente>
    </div>
  )
}

export function CincoAprendizajes() {
  const cinco = ['Definir las conductas esperadas', 'Practicarlas con casos', 'Escuchar la voz del paciente', 'Estandarizar procesos y seguimiento', 'Medir y corregir']
  return (
    <div className="slide deep">
      <Label i={0}>Lo que comparten los referentes</Label>
      <R i={1} className="h1">Cinco aprendizajes que nos llevamos a Florence.</R>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 26, marginTop: 80 }}>
        {cinco.map((t, k) => (
          <R key={t} i={2 + k} style={{ borderTop: '2px solid rgba(69,197,190,.5)', paddingTop: 30 }}>
            <div className="serif t" style={{ fontSize: 90, lineHeight: 1 }}>{k + 1}</div>
            <div className="serif" style={{ fontSize: 36, lineHeight: 1.18, marginTop: 24 }}>{t}</div>
          </R>
        ))}
      </div>
    </div>
  )
}
