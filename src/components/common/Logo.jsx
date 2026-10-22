import React from 'react'
import { Link } from 'react-router-dom'

// Símbolo del logo (public/images/logo-mark.png) junto al nombre
const Logo = ({ className = '' }) => (
  <Link
    to="/"
    className={`inline-flex items-center gap-2.5 rounded ${className}`}
    aria-label="Numma, ir al inicio"
  >
    <img
      src="/images/logo-mark.png"
      alt=""
      width="14"
      height="32"
      className="h-8 w-auto"
    />
    <span className="text-[22px] font-bold tracking-[0.08em] text-brand-900">
      NUMMA
    </span>
  </Link>
)

export default Logo
