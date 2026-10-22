// Número y mensaje inicial de WhatsApp usados en todo el sitio
export const WHATSAPP_PHONE = '529623546362'
export const WHATSAPP_MESSAGE =
  'Hola, me gustaría recibir información sobre sus servicios para un proyecto.'
export const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
