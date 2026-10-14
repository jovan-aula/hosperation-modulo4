import { useState } from 'react'
import { motion } from 'framer-motion'

const palabras = [
  { texto: 'Empatía',                tipo: 'actitud',  desc: 'Disposición interna, no una habilidad técnica.' },
  { texto: 'Escucha activa',         tipo: 'aptitud',  desc: 'Se entrena con práctica y técnica.' },
  { texto: 'Paciencia',              tipo: 'actitud',  desc: 'Es un rasgo de carácter que se cultiva.' },
  { texto: 'Comunicación asertiva',  tipo: 'aptitud',  desc: 'Habilidad interpersonal que se aprende.' },
  { texto: 'Puntualidad',            tipo: 'aptitud',  desc: 'Hábito medible y entrenable.' },
  { texto: 'Humildad',               tipo: 'actitud',  desc: 'Valor de carácter, no una habilidad.' },
  { texto: 'Trabajo en equipo',      tipo: 'aptitud',  desc: 'Competencia interpersonal desarrollable.' },
  { texto: 'Respeto',                tipo: 'actitud',  desc: 'Decisión interna de cómo tratar a otros.' },
  { texto: 'Manejo del estrés',      tipo: 'aptitud',  desc: 'Se puede entrenar con técnicas y práctica.' },
  { texto: 'Disposición a ayudar',   tipo: 'actitud',  desc: 'Viene de adentro — no se puede imponer.' },
]

export default function S07b_QuizClasifica() {
  const [revelados, setRevelados] = useState({})
  const [todosRevelados, setTodosRevelados] = useState(false)

  const revelar = (i) => {
    setRevelados(prev => ({ ...prev, [i]: true }))
  }

  const revelarTodos = () => {
    const todos = {}
    palabras.forEach((_, i) => { todos[i] = true })
    setRevelados(todos)
    setTodosRevelados(true)
  }

  const reset = () => {
    setRevelados({})
    setTodosRevelados(false)
  }

  return (
    <div className="slide" style={{ background: '#EEF2F7', padding: '48px 72px', justifyContent: 'center' }}>
      <div className="corner-accent" />

      {/* Header */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#2BA8A2', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Quiz · ¿Actitud o Aptitud?
          </span>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="slide-title"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', margin: 0 }}
          >
            Haz clic para revelar cada una
          </motion.h2>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={revelarTodos}
              style={{
                background: '#0C2D4E', color: 'white', border: 'none',
                borderRadius: 8, padding: '0.5rem 1.1rem',
                fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer',
                letterSpacing: '0.04em', opacity: todosRevelados ? 0.4 : 1,
              }}
            >
              Revelar todas
            </button>
            <button
              onClick={reset}
              style={{
                background: 'white', color: '#0C2D4E',
                border: '1.5px solid rgba(12,45,78,0.2)',
                borderRadius: 8, padding: '0.5rem 1.1rem',
                fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer',
                letterSpacing: '0.04em',
              }}
            >
              Reiniciar
            </button>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ width: 60, height: 3, background: '#45C5BE', borderRadius: 2, transformOrigin: 'left' }}
        />
      </div>

      {/* Grid de palabras */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1rem',
        width: '100%',
        zIndex: 1,
      }}>
        {palabras.map((p, i) => {
          const isActitud = p.tipo === 'actitud'
          const revealed = revelados[i]

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
              onClick={() => revelar(i)}
              style={{
                background: revealed
                  ? isActitud
                    ? 'linear-gradient(135deg, rgba(69,197,190,0.12), rgba(69,197,190,0.06))'
                    : 'linear-gradient(135deg, rgba(12,45,78,0.08), rgba(12,45,78,0.04))'
                  : 'white',
                border: revealed
                  ? isActitud
                    ? '1.5px solid rgba(69,197,190,0.5)'
                    : '1.5px solid rgba(12,45,78,0.25)'
                  : '1.5px solid rgba(12,45,78,0.1)',
                borderRadius: 14,
                padding: '1.3rem 1.2rem 1.1rem',
                cursor: revealed ? 'default' : 'pointer',
                boxShadow: revealed ? 'none' : '0 2px 12px rgba(12,45,78,0.07)',
                transition: 'all 0.3s ease',
                display: 'flex', flexDirection: 'column', gap: '0.6rem',
                minHeight: 150,
              }}
            >
              {/* Tipo label */}
              <div style={{
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: revealed
                  ? isActitud ? '#45C5BE' : 'rgba(12,45,78,0.5)'
                  : 'transparent',
                transition: 'color 0.3s',
                height: 16,
              }}>
                {p.tipo}
              </div>

              {/* Palabra */}
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                fontWeight: 400,
                color: '#0C2D4E',
                lineHeight: 1.2,
              }}>
                {p.texto}
              </div>

              {/* Descripción */}
              <div style={{
                fontSize: 'clamp(0.88rem, 1.3vw, 1rem)',
                color: revealed ? 'rgba(12,45,78,0.6)' : 'transparent',
                lineHeight: 1.5,
                transition: 'color 0.3s 0.1s',
              }}>
                {p.desc}
              </div>

              {/* Hint */}
              {!revealed && (
                <div style={{
                  fontSize: '0.82rem', color: 'rgba(12,45,78,0.3)',
                  fontStyle: 'italic', marginTop: 'auto',
                }}>
                  clic para revelar
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
