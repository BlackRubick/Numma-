import React, { useEffect, useState } from 'react'

const PHONE = '529623546362'
const MESSAGE =
  'Hola, me gustaría recibir información sobre sus servicios para un proyecto.'

// Ciclo del globo "¿Tienes dudas?": aparece, se mantiene unos segundos y se oculta
const CYCLE_MS = 15000
const VISIBLE_MS = 5000
const FIRST_DELAY_MS = 3000

// Botón flotante que abre WhatsApp con un mensaje inicial ya escrito
const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    let hideTimer
    const show = () => {
      setShowBubble(true)
      hideTimer = setTimeout(() => setShowBubble(false), VISIBLE_MS)
    }
    const firstTimer = setTimeout(show, FIRST_DELAY_MS)
    const interval = setInterval(show, CYCLE_MS)
    return () => {
      clearTimeout(firstTimer)
      clearTimeout(hideTimer)
      clearInterval(interval)
    }
  }, [])

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span
        className={`relative origin-right rounded-2xl bg-white px-4 py-2.5 text-[15px] font-semibold text-brand-900 shadow-lg shadow-black/10 ring-1 ring-black/5 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none ${
          showBubble ? 'scale-100 opacity-100' : 'pointer-events-none scale-75 opacity-0'
        }`}
        aria-hidden="true"
      >
        ¿Tienes dudas?
        <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white" />
      </span>
      <span className="animate-wa-bounce grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-colors duration-200 group-hover:bg-[#1ebe5a]">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16.004 3C8.832 3 3 8.83 3 15.998c0 2.29.6 4.528 1.74 6.5L3 29l6.68-1.75a12.97 12.97 0 0 0 6.32 1.62h.005C23.172 28.87 29 23.04 29 15.872 29 12.4 27.65 9.14 25.19 6.68A12.9 12.9 0 0 0 16.004 3Zm0 23.68h-.004a10.8 10.8 0 0 1-5.5-1.5l-.395-.235-3.965 1.04 1.06-3.865-.258-.397a10.74 10.74 0 0 1-1.65-5.725c0-5.958 4.85-10.806 10.815-10.806 2.888 0 5.6 1.126 7.64 3.17a10.73 10.73 0 0 1 3.164 7.645c-.003 5.96-4.852 10.673-10.907 10.673Zm5.93-8.09c-.325-.163-1.925-.95-2.223-1.058-.298-.108-.515-.163-.732.163-.216.325-.84 1.058-1.03 1.275-.19.217-.38.244-.705.081-.325-.163-1.372-.506-2.614-1.613-.966-.862-1.618-1.926-1.808-2.251-.19-.325-.02-.5.143-.663.146-.146.325-.38.488-.57.163-.19.217-.325.325-.542.108-.217.054-.407-.027-.57-.081-.163-.732-1.765-1.003-2.416-.264-.634-.532-.548-.732-.558l-.623-.011a1.2 1.2 0 0 0-.868.407c-.298.325-1.138 1.112-1.138 2.712 0 1.6 1.165 3.146 1.328 3.363.163.217 2.293 3.5 5.555 4.908.776.335 1.382.535 1.854.685.779.248 1.488.213 2.048.129.625-.093 1.925-.787 2.196-1.546.271-.76.271-1.411.19-1.546-.081-.136-.298-.217-.623-.38Z" />
        </svg>
      </span>
    </a>
  )
}

export default WhatsAppButton
