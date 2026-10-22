import React from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

// Aparición suave al hacer scroll; `delay` en ms escalona elementos.
// Se desactiva con prefers-reduced-motion
const Reveal = ({
  as: Tag = 'div',
  delay = 0,
  className = '',
  style,
  children,
  ...props
}) => {
  const [ref, isVisible] = useScrollReveal()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
