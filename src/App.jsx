import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import SlideWrapper from './components/SlideWrapper'
import Navigation from './components/Navigation'

import S01_Portada from './slides/S01_Portada'
import S02_ReglasDelJuego from './slides/S02_ReglasDelJuego'
import S03_Objetivos from './slides/S03_Objetivos'
import S04_QRLluvia from './slides/S04_QRLluvia'
import S05_LluviaDisplay from './slides/S05_LluviaDisplay'
import S06_PivotColaborador from './slides/S06_PivotColaborador'
import S07_ActitudVsAptitud from './slides/S07_ActitudVsAptitud'
import S07b_QuizClasifica from './slides/S07b_QuizClasifica'
import S07c_Formula from './slides/S07c_Formula'
import S07d_Video from './slides/S07d_Video'
import S07e_LlantaFrase from './slides/S07e_LlantaFrase'
import S07f_ActitudComponentes from './slides/S07f_ActitudComponentes'
import S08a_PerfilesIntro from './slides/S08a_PerfilesIntro'
import S08_PerfilesColaborador from './slides/S08_PerfilesColaborador'
import S08c_PerfilExcelencia from './slides/S08c_PerfilExcelencia'
import S09_ActitudesExcelencia from './slides/S09_ActitudesExcelencia'
import S10_VocacionServicio from './slides/S10_VocacionServicio'
import S10b_VocacionEjemplos from './slides/S10b_VocacionEjemplos'
import S10c_PuenteAptitudes from './slides/S10c_PuenteAptitudes'
import S11_AptitudesExcelencia from './slides/S11_AptitudesExcelencia'
import S12_ComunicacionAsertiva from './slides/S12_ComunicacionAsertiva'
import S12b_EjesComunicacion from './slides/S12b_EjesComunicacion'
import S13a_PacienteContexto from './slides/S13a_PacienteContexto'
import S13_PacienteVulnerable from './slides/S13_PacienteVulnerable'
import S14_MicroComportamientos from './slides/S14_MicroComportamientos'
import S14b_ImpactoColaborador from './slides/S14b_ImpactoColaborador'
import S14c_QuizLive from './slides/S14c_QuizLive'
import S15_PuenteDinamica from './slides/S15_PuenteDinamica'
import S16_DinamicaInstrucciones from './slides/S16_DinamicaInstrucciones'
import S17_DinamicaDebrief from './slides/S17_DinamicaDebrief'
import S18_PuenteEquipo from './slides/S18_PuenteEquipo'
import S21_Reflexion from './slides/S21_Reflexion'
import S22_Cierre from './slides/S22_Cierre'

const slides = [
  // ── APERTURA ──────────────────────────────
  S01_Portada,           //  1
  S02_ReglasDelJuego,    //  2
  S03_Objetivos,         //  3
  S04_QRLluvia,          //  4
  S05_LluviaDisplay,     //  5

  // ── CONCEPTO BASE ─────────────────────────
  S06_PivotColaborador,  //  6
  S07_ActitudVsAptitud,  //  7
  S07b_QuizClasifica,    //  8
  S07c_Formula,          //  9
  S07d_Video,            // 10
  S07e_LlantaFrase,      // 11
  S07f_ActitudComponentes, // 12

  // ── PERFILES ──────────────────────────────
  S08a_PerfilesIntro,    // 13
  S08_PerfilesColaborador, // 10
  S08c_PerfilExcelencia, // 11

  // ── ACTITUDES ─────────────────────────────
  S10_VocacionServicio,    // vocación como raíz
  S10b_VocacionEjemplos,   // ejemplos vocación
  S09_ActitudesExcelencia, // las 10 actitudes

  // ── APTITUDES ─────────────────────────────
  S10c_PuenteAptitudes,  // 16
  S11_AptitudesExcelencia, // 18
  S12_ComunicacionAsertiva, // comunicación asertiva
  S12b_EjesComunicacion,   // 3 ejes: verbal, paraverbal, no verbal

  // ── EL PACIENTE ───────────────────────────
  S13a_PacienteContexto, // 19
  S13_PacienteVulnerable, // 20
  S14_MicroComportamientos, // 21
  S14b_ImpactoColaborador, // 22
  S14c_QuizLive,          // 23

  // ── DINÁMICA INTERMEDIA ───────────────────
  S15_PuenteDinamica,    // 24
  S16_DinamicaInstrucciones, // 24
  S17_DinamicaDebrief,   // 25

  // ── CIERRE ────────────────────────────────
  S18_PuenteEquipo,      // 27
  S21_Reflexion,         // 28
  S22_Cierre,            // 29
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = useCallback(() => {
    if (current < slides.length - 1) {
      setDirection(1)
      setCurrent((c) => c + 1)
    }
  }, [current])

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1)
      setCurrent((c) => c - 1)
    }
  }, [current])

  useEffect(() => {
    const handleKey = (e) => {
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) {
        e.preventDefault()
        goNext()
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  const CurrentSlide = slides[current]

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <SlideWrapper key={current} direction={direction}>
          <CurrentSlide />
        </SlideWrapper>
      </AnimatePresence>

      <Navigation
        current={current}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
      />

      <div style={{
        position: 'fixed', bottom: 18, right: 24, zIndex: 999,
        fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)',
        fontWeight: 500, letterSpacing: '0.05em', pointerEvents: 'none',
      }}>
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}
