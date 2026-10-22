import React, { useEffect, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

// Anima la parte numérica de valores como "12+", "100%" o "+3 años"
const CountUp = ({ value, duration = 1400 }) => {
  const [ref, isVisible] = useScrollReveal(0.4)
  const match = String(value).match(/^(\D*)(\d+)(.*)$/)
  const target = match ? Number(match[2]) : 0
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!match || !isVisible) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(target)
      return
    }
    let frame
    const start = performance.now()
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    // Garantiza el valor final aunque el navegador pause los frames
    const settle = setTimeout(() => setCurrent(target), duration + 100)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(settle)
    }
  }, [isVisible, target, duration])

  if (!match) return <span>{value}</span>

  return (
    <span ref={ref} className="tabular-nums">
      <span className="sr-only select-none">{value}</span>
      <span aria-hidden="true">
        {match[1]}
        {current}
        {match[3]}
      </span>
    </span>
  )
}

export default CountUp
