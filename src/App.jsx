import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import slides from './slides'

const readHash = () => {
  const n = parseInt(window.location.hash.replace('#', ''), 10)
  return Number.isFinite(n) && n >= 1 && n <= slides.length ? n - 1 : 0
}

export default function App() {
  const [i, setI] = useState(readHash)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  const go = useCallback((n) => setI((c) => Math.max(0, Math.min(slides.length - 1, typeof n === 'function' ? n(c) : n))), [])

  useEffect(() => { window.history.replaceState(null, '', `#${i + 1}`) }, [i])

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest?.('input, textarea')) return
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter'].includes(e.key)) { e.preventDefault(); go((c) => c + 1) }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); go((c) => c - 1) }
      else if (e.key === 'Home') go(0)
      else if (e.key === 'End') go(slides.length - 1)
      else if (e.key.toLowerCase() === 'f') {
        if (document.fullscreenElement) document.exitFullscreen()
        else document.documentElement.requestFullscreen?.()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const s = slides[i]
  const Slide = s.C
  const onDark = s.tone === 'dark'

  return (
    <div className="viewport">
      <div className="stage" style={{ transform: `scale(${scale})` }}>
        <Slide key={i} />
        {s.chrome !== false && (
          <div className={`chrome ${onDark ? 'on-dark' : ''}`}>
            <span>{s.section}</span>
            <span>{i + 1} / {slides.length}</span>
          </div>
        )}
        <div className="progress" style={{ width: `${((i + 1) / slides.length) * 100}%` }} />
      </div>
      {!s.interactive && <>
        <div className="hit l" onClick={() => go((c) => c - 1)} />
        <div className="hit r" onClick={() => go((c) => c + 1)} />
      </>}
    </div>
  )
}
