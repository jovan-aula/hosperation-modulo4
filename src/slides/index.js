// Orden de la presentación. tone: 'dark' cuando el fondo es oscuro (cambia el color del pie).
import { Portada, Pregunta, LluviaDisplay, Objetivo, Video } from './s1_apertura'
import { LaH, FaltaPieza, NoEsFeliz, AptitudSeDemuestra, Escenarios, ObservaConductas } from './s2_elementos'
import { AperturaReferentes, BMCCultural, HumildadCultural, AutismFriendly, CARE, Simulacion, Debriefing, AHDMayo, CincoAprendizajes } from './s3_referentes'
import { ActitudesObservables, AptitudesTransversales, ComunicacionClara, EscuchaActiva, CerrarCircuito, EstandarPorPuesto, RecuperacionServicio } from './s4_florence'
import { SimulacionInstrucciones, TresCasos, DebriefPractica } from './s5_practica'
import { Organizacion, Medir, ReelReflexion, Compromiso, Cierre, Referencias } from './s6_cierre'

const A = 'Apertura'
const B1 = 'Bloque 1 · Los tres elementos'
const B2 = 'Bloque 2 · Hospitales de referencia'
const B3 = 'Bloque 3 · Conductas en Florence'
const P = 'Práctica'
const C = 'Cierre'

export default [
  // ── APERTURA ─────────────────────────
  { C: Portada, section: A, tone: 'dark', chrome: false },
  { C: Pregunta, section: A, tone: 'dark', interactive: true },
  { C: LluviaDisplay, section: A, tone: 'dark', chrome: false, interactive: true },
  { C: Objetivo, section: A },

  // ── BLOQUE 1 · ACTITUD, APTITUD, CONDICIONES ─
  { C: LaH, section: B1, tone: 'dark' },
  { C: FaltaPieza, section: B1 },
  { C: NoEsFeliz, section: B1, tone: 'dark' },
  { C: AptitudSeDemuestra, section: B1 },
  { C: Escenarios, section: B1 },
  { C: ObservaConductas, section: B1, tone: 'dark' },
  { C: Video, section: B1, tone: 'dark', interactive: true },

  // ── BLOQUE 2 · REFERENTES ────────────
  { C: AperturaReferentes, section: B2, tone: 'dark' },
  { C: BMCCultural, section: B2 },
  { C: HumildadCultural, section: B2, tone: 'dark' },
  { C: AutismFriendly, section: B2 },
  { C: CARE, section: B2 },
  { C: Simulacion, section: B2, tone: 'dark' },
  { C: Debriefing, section: B2 },
  { C: AHDMayo, section: B2 },
  { C: CincoAprendizajes, section: B2, tone: 'dark' },

  // ── BLOQUE 3 · FLORENCE ──────────────
  { C: ActitudesObservables, section: B3 },
  { C: AptitudesTransversales, section: B3, tone: 'dark' },
  { C: ComunicacionClara, section: B3 },
  { C: EscuchaActiva, section: B3 },
  { C: CerrarCircuito, section: B3, tone: 'dark' },
  { C: EstandarPorPuesto, section: B3 },
  { C: RecuperacionServicio, section: B3 },

  // ── PRÁCTICA ─────────────────────────
  { C: SimulacionInstrucciones, section: P, tone: 'dark' },
  { C: TresCasos, section: P },
  { C: DebriefPractica, section: P, tone: 'dark' },

  // ── CIERRE ───────────────────────────
  { C: Organizacion, section: C },
  { C: Medir, section: C },
  { C: ReelReflexion, section: C, tone: 'dark', interactive: true },
  { C: Compromiso, section: C, tone: 'dark' },
  { C: Cierre, section: C, tone: 'dark', chrome: false },
  { C: Referencias, section: C },
]
