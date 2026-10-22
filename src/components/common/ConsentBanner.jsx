import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Cambia la versión cuando actualices el Aviso de Privacidad o los Términos
// para que el aviso vuelva a mostrarse a todos los visitantes.
const STORAGE_KEY = 'numma-consent'
const CONSENT_VERSION = '2026-10-22'

const readConsent = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === CONSENT_VERSION
  } catch {
    return false
  }
}

const saveConsent = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, CONSENT_VERSION)
  } catch {
    // Sin almacenamiento disponible (modo privado estricto): solo se oculta en esta visita
  }
}

// Aviso inicial de privacidad y términos; al aceptarlo no vuelve a mostrarse
const ConsentBanner = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (readConsent()) return
    const timer = setTimeout(() => setIsOpen(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    saveConsent()
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div
      role="region"
      aria-label="Aviso de privacidad"
      className="fixed bottom-5 left-4 right-24 z-50 animate-[consent-in_0.4s_ease-out] sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md motion-reduce:animate-none"
    >
      <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_18px_50px_-20px_rgb(14_14_14/0.35)] sm:p-6">
        <p className="font-bold text-brand-900">Tu privacidad es importante</p>
        <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
          Este sitio no utiliza cookies de seguimiento. Al continuar navegando
          aceptas nuestro{' '}
          <Link
            to="/privacidad"
            className="font-semibold text-brand-900 underline underline-offset-4 hover:text-accent-600"
          >
            Aviso de Privacidad
          </Link>{' '}
          y nuestros{' '}
          <Link
            to="/terminos"
            className="font-semibold text-brand-900 underline underline-offset-4 hover:text-accent-600"
          >
            Términos y Condiciones
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="btn-primary mt-4 h-11 w-full sm:w-auto"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}

export default ConsentBanner
